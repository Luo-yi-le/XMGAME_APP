<template>
	<view class="play_view">
		<view class="zhu">

			<view class="play_view1">
				{{themeId}} / {{index_Count}}
			</view>
			<view class="play_view2"><text class="play_text">玩家</text></view>
			<view>
				<image src="../../static/img/body.png" class="play_img" />
				<view style="play_view3">积分:{{userInfo.Integral}}</view>
			</view>

		</view>
		<view class="play_view4">
			<view>题目类型</view>
			<view>
				<view class="play_view5"> </view>
			</view>

			<view class="play_view6">
				<label class="play_view7">{{count}}</label>
			</view>

			<view class="play_view8">
				<view>问题：</view>
				<view class="play_view9">{{getTopicList.Theme}}=?</view>
			</view>
			<view class="play_view10">
				<view>答案：</view>
				<input type="text" placeholder="输入答案" style="border-bottom: 10upx;" v-model="answer" />
			</view>
			<button :style="{display:fff}" @click="updateRecord" class="bb1">下一题</button>
			<button style="margin: 50upx;" @click="over" :disabled="zt">结束游戏</button>
		</view>
		
	</view>
</template>
<script>
	var websock;
	import * as api from '../../static/js/api.js'
	var i = 0;
	export default {
		data() {
			return {
				count: 10,
				userInfo: '',
				themeId: '',
				theme: '',
				fff: '',
				zt: 'true',
				index_: 0,
				index_Count: '',
				getTopicList: [],
				token: '',
				roomId: '',
				createTime: '', //创建时间 or 结算时间
				recordEndTime: '', //创建游戏距离需要带的时间
				answer: '', //获取用户的答案
				n_integral: -20,
				p_integral: 20,
			}
		},
		onLoad: function(option) {
			//获取名称
			this.roomId = option.roomID;
			this.token = option.token;
			console.log(this.roomId)
			//
			this.index_Count = this.index_ + 1
			this.themeId = this.getTopicList.Id;
			this.theme = this.getTopicList.Theme;

			var second;
			second = 0; //初始化
			var millisecond = 0; //毫秒
			this.timer = setInterval(() => {
				this.count = this.count - 1;
				if (this.count == 0) {
					clearInterval(this.timer); //停止
					this.zt = false; //启用结束按钮
					this.fff = 'none'; //隐藏下一题按钮
				}
				// this.nums = hour+'时'+minute+'分'+second+'秒';
			}, 1000);
		},
		methods: {
			over: function(e) {
				uni.redirectTo({
					url: '../over/over?roomId=' + this.roomId + '&token=' + this.token
				})
			},
			test() {
				i++;
				if (i == this.index_) {
					this.zt = false;
					this.fff = 'none';
					console.log(i);
				}
				this.theme = this.getTopicList.Theme;
				this.themeId = this.getTopicList.Id;
			},

			//当时间读完后自动结算
			autopilotRecord() {
 
			},
			//获取系统的当前时间
			getSystemTime() {
				var date = new Date();
				var year = date.getFullYear();
				var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
				var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
				var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
				var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
				var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
				var time = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
				var t = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + (seconds + parseInt(10));
				this.recordEndTime = t;
				this.createTime = time
				return this.createTime;
			},
			selectUserInfo() {
				const that = this;
				const user = localStorage.getItem("userInfo");
				that.userInfo = JSON.parse(user);
			},
			
			//结束游戏 修改用户
			updateRecord() {
				const that = this;
				if (that.answer != that.getTopicList.Answer || that.answer == '' || that.answer == null) {
					uni.request({
						url: api.UpdateRecord,
						method: 'GET',
						data: {
							"AccountName": that.name,
							'Integral': that.n_integral,
							'EndTime': that.createTime,
							'RoomID': that.roomId
						},
						success: res => {
							if (res.data.Code == 200) {
								alert('答案错误！' + that.n_integral + '积分')
							}
						},
						fail: () => {},
						complete: () => {}
					});
				} else if (that.answer == that.getTopicList.Answer) {
					uni.request({
						url: api.UpdateRecord,
						method: 'GET',
						data: {
							"AccountName": that.name,
							'Integral': that.p_integral,
							'EndTime': that.createTime,
							'RoomID': that.roomId
						},
						success: res => {
							if (res.data.Code == 200) {
								alert('答案正确！+' + that.p_integral + '积分')
							}
						},
						fail: () => {},
						complete: () => {}
					});
			
				}
			
			},

			//周少鸿 4/30 
			//获取房间的ID
			getGameRoomID() {
				var game1 = localStorage.getItem("game");
				this.game = JSON.parse(game1);
			},
			//创建WebSocket连接
			initWebSocket() {
				websock = new WebSocket(api.wsuri);
				websock.onopen = this.webSocketClientOnopen //打开
				websock.onmessage = this.webSocketClientOnmessage //接收信息
				websock.onerror = this.webSocketClientOnerror //错误
				websock.onclose = this.webSocketClientOnclose //关闭
			},
			
			//周少鸿 4/30 
			//打开连接
			webSocketClientOnopen() {

				console.log('打开成功');

				var Record = {
					'AccountName': this.token,
					'Integral': this.n_integral,
					'CreateTime': this.createTime,
					'EndTime': this.recordEndTime,
					'RoomID': this.game.RoomID
				};
				var Record1 = JSON.stringify(Record);


				let Precord = {
					'Message': Record1,
					'Tag': 'ac',
					'ActionMethod': 'Record.AddRecord'
				};

				this.websocketsend(Precord);

			},
			//数据回收
			webSocketClientOnmessage(e) {
				var data = JSON.parse(e.data);
				console.log(data)
			},

			websocketsend(Data) { //发送数据
				console.log('数据发送：' + JSON.stringify(Data));
				websock.send(JSON.stringify(Data));
			},
			//重连信息
			webSocketClientOnerror(e) {
				this.initWebSocket();
				console.log("websock连接错误,重新连接", e);
			},
			//连接关闭
			webSocketClientOnclose(e) {
				console.log("websock连接关闭", e);
			},
		},
		created() {
			this.getGameRoomID(); //获取房间ID
			this.initWebSocket();
			this.getSystemTime();
			this.selectUserInfo();
		}
	}
</script>

<style>
	@import url("../../common/play.css");
</style>

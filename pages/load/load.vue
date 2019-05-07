<template>
	<view class="Parentlevel">
		<view class="Headportrait">
			<image src="../../static/img/ut2.png" class="load_view"></image>
		</view>
		<view class="Waitfor">等待对手加入...</view>
		<view class="Option">
			<view class="P_hostile">
				<view>
					<view class="P_GameplayerA">
					</view>

				</view>
				<view class="P_GameplayerVS">
					<span class="P_span">VS</span>
				</view>

				<view class="P_GameplayerB">
					<span class="P_Gsapn">?</span>
				</view>

			</view>
			<view class="userInfo">
				<view class="user">
					<view class="userName">用户名:<text>{{userInfo.AccountName}}</text></view>
					<view class="userIntegral">积分:<text>{{userInfo.Integral}}</text></view>
				</view>
				<!-- <view class="user">
					<view class="userName" v-if="user.AccountName==this.name">用户名:<text>{{game.ToUser[0]}}</text></view>
					 <view class="userIntegral">积分:<text>{{user.Integral}}</text></view> 
				</view> -->
			</view>
		</view>
		<button class="load_but" @click="preGames">准备游戏</button>
		<button class="load_but" @click="onover">取消游戏</button>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	// 罗贻乐
	//2019-4-56
	//修改了准备游戏的bug
	var websock;
	import * as api from '../../static/js/api.js'
	export default {
		data() {
			return {
				token: '',
				roomID: '',
				game: '',
				createTime: '', //创建时间 or 结算时间
				recordEndTime: '', //创建游戏距离需要带的时间
				n_integral: -20,
				RecordList: '',
				toUser: ''
			}
		},
		computed: {
			...mapState(['userInfo', 'login'])
		},
		methods: {
			onover: function(e) {
				websock.close() //关闭websocket
				uni.switchTab({
					url: '../index/index'
				})
			},
			webSocketClientOnmessage(e) { //数据接收
				//heartCheck.reset().start(); //设置心跳
				var data = JSON.parse(e.data);
				console.log('数据：' + JSON.stringify(data))
				if (data.Tag == "r") {
					uni.showToast({
						title: data.Message + ': ' + data.RoomID,
						duration: 2000
					});
				} else if (data.Tag == "i") {
					this.roomID = data.RoomID
				} else if (data.Tag == 'b') {
					this.toUser = data.toUser;
					var Record = {
						'AccountName': this.token,
						'Integral': this.n_integral,
						'CreateTime': this.createTime,
						'EndTime': this.recordEndTime,
						'RoomID': this.game.RoomID
					};
					var Record1 = JSON.stringify(Record);
					console.log(Record1);
					let Precord = {
						'Message': Record1,
						'Tag': 'ac',
						'ActionMethod': 'RecordBLL.AddRecord'
					};
					this.websocketsend(Precord);

				} else if (data.Tag == 'ac' && data.ActionMethod == 'RecordBLL.AddRecord') {
					var data1 = JSON.parse(data.Message);
					if (data1.Code == 200) {
						api.RecordList = data1.Data;
						uni.reLaunch({
							url: '../play/play?token=' + this.token + '&roomID=' + this.game.RoomID
						});
					}
					// console.log('加入游戏：'+JSON.stringify(data))
				}
				localStorage.setItem('game', JSON.stringify(data));
			},

			//通信
			//创建WebSocket连接
			initWebSocket() {
				websock = new WebSocket(api.wsuri);
				websock.onopen = this.webSocketClientOnopen //打开
				websock.onmessage = this.webSocketClientOnmessage //接收信息
				websock.onerror = this.webSocketClientOnerror //错误
				websock.onclose = this.webSocketClientOnclose //关闭
			},
			webSocketClientOnopen(e) { //连接建立之后执行send方法发送数据
				let entity = {
					"FromUser": this.token,
					"Tag": "c"
				};
				this.websocketsend(entity);

				//进入房间
				var c = {
					"FromUser": this.token,
					"Tag": "i",
					"RoomID": this.roomID == '' ? "" : this.roomID
				};
				this.websocketsend(c);
			},
			websocketsend(Data) { //数据发送
				websock.send(JSON.stringify(Data));
			},

			webSocketClientOnclose(e) { //关闭
				console.log("关闭");
			},
			webSocketClientOnerror() { //连接建立失败重连
				this.initWebSocket();
			},

			//用户操作
			//提示用户进入房间name
			showUser() {
				var game1 = localStorage.getItem("game");
				this.game = JSON.parse(game1);
				console.log(this.game.FromUser)
				uni.showToast({
					title: this.game.Message + ': ' + this.game.RoomID,
					duration: 3000
				});
			},
			//用户准备游戏
			preGames() {
				var game = localStorage.getItem("game");
				var readyGame = {
					'FromUser': this.token,
					'Tag': "r",
					'RoomID': this.game.RoomID
				};
				this.websocketsend(readyGame);
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
				var t = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
				this.recordEndTime = t;
				this.createTime = time
				return this.createTime;
			},
		},
		onLoad: function(option) {
			this.token = option.token
		},
		created() {
			this.getSystemTime();
			setTimeout(() => {
				this.showUser();
			}, 500)
			this.initWebSocket();
		}
	}
</script>

<style lang="less">
	@import url("../../common/load.less");
</style>

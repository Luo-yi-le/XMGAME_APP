<template>
	<view class="play_view">
		<view class="zhu">
			<view class="play_view1">{{ TopIndex + 1 }} / {{ getTopicList.length }}</view>
			<view class="play_view2"><text class="play_text">玩家</text></view>
			<view>
				<image src="../../static/img/body.png" class="play_img" />
				<view style="play_view3">积分:{{ userInfo.Integral }}</view>
			</view>
		</view>
		<view class="play_view4">
			<view>题目类型</view>
			<view>
				<view class="play_view5">{{ getTopicList[TopIndex].GenreName }}</view>
			</view>

			<view class="play_view6">
				<label class="play_view7">{{ count }}</label>
			</view>

			<view class="play_view8">
				<view>问题：</view>
				<view class="play_view9">{{ getTopicList[TopIndex].Topic }}=？</view>
			</view>
			<view class="play_view10">
				<view>答案：</view>
				<input type="text" placeholder="输入答案" style="border-bottom: 10upx;" v-model="answer" />
			</view>
			<button :style="{ display: forbid }" @click="isRight" class="bb1">下一题</button>
			<button style="margin: 50upx;" @click="over">结束游戏</button>
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
				bingo: 0, //答对的数量
				TopIndex: 0, //下标
				integral: 0, //当前所获得的积分
				count: 10,
				userInfo: '',
				forbid: '',

				getTopicList: [],
				token: '',
				roomId: '',
				createTime: '', //创建时间 or 结算时间
				recordEndTime: '', //创建游戏距离需要带的时间
				answer: '', //获取用户的答案
				n_integral: -20,
				p_integral: 20,
				Record:'',//获取插入数据
			}
		},
		onLoad: function(option) {
			//获取名称
			this.roomId = option.roomID;
			this.token = option.token;
			console.log(this.roomId)
			// 实现倒计时功能
			this.timer = setInterval(() => {
				this.count = this.count - 1;
				if (this.count == 0) {
					if (this.getTopicList.length - 1 == this.TopIndex) {
						this.forbid = 'none'; //隐藏下一题按钮
						clearInterval(this.timer); //停止
					} else {
						this.TopIndex = this.TopIndex + 1;
						this.count = 10;
					}
				}
			}, 1000);

		},
		methods: {
			over: function(e) {
				//
				if (this.getTopicList[this.TopIndex].Answer == this.answer) {
					if (this.count > 0) {
						console.log('答对了');
						this.bingo = this.bingo + 1;
						this.integral = thsi.integral + 2;

						console.log('积分:' + this.integral);
					} else {
						console.log('超时了！');
					}
				}
				this.State = 1;
				this.initWebSocket();
				uni.redirectTo({
					url: '../over/over?roomId=' + this.roomId + '&token=' + this.token + '&bingo=' + this.bingo
				});
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

			//用户答题 罗贻乐
			isRight() {
				// if (this.getTopicList[this.TopIndex].Answer == this.answer) {
				// 	console.log('答对了');
				// 	this.bingo = this.bingo + 1;
				// 	this.integral = this.integral + 2;
				// 	console.log("积分" + this.integral)
				// 	
				// 	
				// }
				var id = this.getTopicList[this.TopIndex].ID;
				console.log('id:' + id)
				const strAnswer = {
					"AccountName": this.token,
					"QuestionID": id,
					'Reply': this.answer,
					"RecordID": this.Record.ID,
				}
				const jsonAnswer = JSON.stringify(strAnswer);
				const action = {
					"Message": jsonAnswer,
					"Tag": "ac",
					"ActionMethod": "RecordQuestionBLL.IsRight"
				}
				console.log(JSON.stringify(action))
				this.websocketsend(action)

				this.answer = '';
				this.TopIndex = this.TopIndex + 1;
				this.count = 10;

				if (this.getTopicList.length - 1 == this.TopIndex) {
					this.forbid = 'none'; //隐藏下一题按钮
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
					'ActionMethod': 'RecordBLL.AddRecord'
				};

				this.websocketsend(Precord);

				//获取游戏题目
				let topicList = {
					Tag: 'ac',
					ActionMethod: 'QuestionBLL.GetQuestions'
				};
				this.websocketsend(topicList);

			},
			//数据回收
			webSocketClientOnmessage(e) {
				var data = JSON.parse(e.data);
				var strData = typeof data == 'string' ? JSON.parse(data) : data;
				if (strData.ActionMethod == 'RecordBLL.AddRecord') {
					var res = JSON.parse(strData.Message);
					console.log('数据成功2：' + JSON.stringify(res))
					var objData = typeof res == 'object' ? res : res
					if (objData.Code === 200) {
						this.Record = objData.Data;
						console.log('数据成功1:' + JSON.stringify(this.Record));
					}
				
				} else if (strData.ActionMethod == 'QuestionBLL.GetQuestions') {
					var data1 = JSON.parse(data.Message);
					console.log(data1.Data);
					if (data1.Code == 200) {
						//把数据赋值给当前定义数组
						this.getTopicList = data1.Data;
					}
				} else if (strData.ActionMethod == "RecordQuestionBLL.IsRight") {
					var res = JSON.parse(strData.Message);
					console.log('模拟答题：' + JSON.stringify(res))
					var objData = typeof res == 'object' ? res : res
					if (objData.Code === 200) {
						this.Answer = objData.Data;
						console.log('模拟答题:' + this.Answer);
					}
				}
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

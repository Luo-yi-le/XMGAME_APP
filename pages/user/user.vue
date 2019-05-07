<template>
	<view class="text-font">
		<!-- 用户信息卡 -->
		<view class="list-content">
			<view class="list">
				<view class="li noborder" v-if="userInfo">
					<image class="icon" src="../../static/logo.png"></image>
					<view class="textName">用户名：<text>{{userInfo.AccountName}}</text></view>
					<view class="textName">编号：<text>{{userInfo.ID}}</text></view>
				</view>
				<view class="li noborder" v-else>
					<navigator url="../login/login">你还没登陆，请去登陆</navigator>
				</view>
				<view class="user-data-bar">
					<view class="data-bar">积分:<text class="data-bar-num">{{userInfo.Integral}}</text></view>
					<view class="data-bar">现金:<text class="data-bar-num">{{money}}</text></view>
					<view class="data-bar">排名:<text class="data-bar-num">{{Fabulous}}</text></view>
				</view>
			</view>
		</view>
		<!-- 用户的数据 -->
		<!-- 选项 -->
		<view class="list-content" style="margin-top: 15upx;">

			<view class="list">
				<view class="li">
					<image class="icon" src="../../static/logo.png"></image>
					<view class="text">
						<navigator url="../record/record">游戏记录</navigator>
					</view>
				</view>
			</view>
			<view class="list">
				<view class="li noborder">
					<image class="icon" src="../../static/logo.png"></image>
					<view class="text">进入游戏</view>
				</view>
			</view>
			<view class="list">
				<view class="li noborder">
					<image class="icon" src="../../static/logo.png"></image>
					<view class="text" @click="getIdForUser(userInfo.ID)">根据ID</view>
				</view>
			</view>
			<view class="list">
				<view class="li noborder">
					<image class="icon" src="../../static/logo.png"></image>
					<view class="text" @click="getTokenForUser(userInfo.Token)">根据Token</view>
				</view>
			</view>
			<view class="list">
				<view class="li noborder">
					<image class="icon" src="../../static/logo.png"></image>
					<view class="text" @click="isRight(userInfo.Token)">模拟用户答题</view>
				</view>
			</view>
			<view class="list">
				<view class="li noborder">
					<image class="icon" src="../../static/logo.png"></image>
					<view class="text" @click="updateIntegral(userInfo.Token)">修改积分</view>
				</view>
			</view>
			<view class="list">
				<view class="li noborder">
					<image class="icon" src="../../static/logo.png"></image>
					<view class="text" @click="loginOut">退出</view>
				</view>
			</view>
		</view>


	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	var websock;
	import * as api from '../../static/js/api.js'
	export default {
		data() {
			return {
				money: 0,
				Fabulous: 0,
				UserInfoByID: '',
				UserInfoByToken: '',
				IntegralData: '',
				Answer: ''
			}
		},
		computed: {
			...mapState(['userInfo', 'login'])
		},
		methods: {
			//用户点击操作方法 
			//根据用户令牌得到用户
			getTokenForUser(token) {
				const strToken = {
					"Token": token
				}
				const jsonToken = JSON.stringify(strToken);
				const param = {
					"Message": jsonToken,
					"Tag": "ac",
					"ActionMethod": "UserBLL.GetUserInfoByToken"
				}
				websock.send(JSON.stringify(param))
			},

			//根据用户ID得到用户
			getIdForUser(id) {
				console.log(id)
				const strId = {
					"ID": id
				}
				const jsonId = JSON.stringify(strId);
				const param = {
					"Message": jsonId,
					"Tag": "ac",
					"ActionMethod": "UserBLL.GetUserInfoByID"
				}
				websock.send(JSON.stringify(param))
			},

			//模拟用户答题
			isRight(token) {
				const strAnswer = {
					"AccountName": token,
					"QuestionID": 1,
					'Reply': '1',
					"RecordID": 1090,
				}
				const jsonAnswer = JSON.stringify(strAnswer);
				const action = {
					"Message": jsonAnswer,
					"Tag": "ac",
					"ActionMethod": "RecordQuestionBLL.IsRight"
				}
				this.websocketsend(action)
			},

			//修改用户积分
			updateIntegral(token) {
				const strToken = {
					"AccountName": token,
					"Integral": 38
				}
				const jsonToken = JSON.stringify(strToken);
				const action = {
					"Message": jsonToken,
					"Tag": "ac",
					"ActionMethod": "UserBLL.UpdateIntegral"
				}
				console.log(action)
				this.websocketsend(action)
			},
			//数据回收 （通信方法）
			webSocketClientOnmessage(e) { //数据接收
				var data = JSON.parse(e.data);
				var strData = typeof data == 'string' ? JSON.parse(data) : data;
				if (strData.ActionMethod == "UserBLL.GetUserInfoByID") {
					var res = JSON.parse(strData.Message);
					var objData = typeof res == 'object' ? res : res
					if (objData.Code === 200) {
						this.UserInfoByID = objData.Data;
						console.log('根据ID:' + this.UserInfoByID);
					}
				} else if (strData.ActionMethod == "UserBLL.GetUserInfoByToken") {
					var res = JSON.parse(strData.Message);
					var objData = typeof res == 'object' ? res : res
					if (objData.Code === 200) {
						this.UserInfoByToken = objData.Data;
						console.log('根据Token:' + this.UserInfoByToken);
					}
				} else if (strData.ActionMethod == "RecordQuestionBLL.IsRight") {
					var res = JSON.parse(strData.Message);
					console.log('模拟答题：' + JSON.stringify(res))
					var objData = typeof res == 'object' ? res : res
					if (objData.Code === 200) {
						this.Answer = objData.Data;
						console.log('模拟答题:' + this.Answer);
					}
				} else if (strData.ActionMethod == "UserBLL.UpdateIntegral") {
					var res = JSON.parse(strData.Message);
					console.log('修改积分：' + JSON.stringify(res))
					var objData = typeof res == 'object' ? res : res
					if (objData.Code === 200) {
						this.IntegralData = objData.Data;
						console.log('修改积分:' + this.IntegralData);
					}
				}
			},
			//通信方法
			initWebSocket() {
				websock = new WebSocket(api.wsuri);
				websock.onopen = this.webSocketClientOnopen //打开
				websock.onmessage = this.webSocketClientOnmessage //接收信息
				websock.onerror = this.webSocketClientOnerror //错误
				websock.onclose = this.webSocketClientOnclose //关闭
			},
			webSocketClientOnopen() {
				let entity = {
					"FromUser": this.userInfo.Token,
					"Tag": "c"
				};
				this.websocketsend(entity);
			},
			websocketsend(Data) { //发送数据
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
			...mapMutations(['loginOut'])
		},
		created() {
			this.initWebSocket();
		},

	}
</script>

<style lang="less">
	@import url("../../common/user.less");
</style>

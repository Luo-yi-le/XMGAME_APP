<template>
	<view class="Register">
		<view class="R_from">
			<view class="">
				<table>
					<tr>
						<th><text>账号：</text></th>
						<th><input type="text" class="Register_input" v-model="user.AccountName" maxlength="9" placeholder="账号" /></th>
					</tr>

				</table>

			</view>
			<view class="">
				<table>
					<tr>
						<th><text>密码：</text></th>
						<th><input type="password" class="Register_input" v-model="user.UserPassWord" maxlength="9" placeholder="密码" /></th>
					</tr>
				</table>

			</view>
			<view class="">
				<table>
					<tr>
						<th><text>邮箱：</text></th>
						<th><input type="text" class="Register_input" v-model="user.mailbox" maxlength="9" placeholder="邮箱" /></th>
					</tr>

				</table>
			</view>
			<view class="R_register">
				<button type="primary" id="btnadd" @click="loginUser()">注册</button>
			</view>
		</view>


	</view>

</template>

<script>
	var websock;
	import * as api from '../../static/js/api.js'

	export default {
		data() {
			return {
				user: {
					AccountName: '',
					UserPassWord: ''
				}

			}
		},
		methods: {
			loginUser() {
				var user = {
					'AccountName': this.user.AccountName,
					'UserPassWord': this.user.UserPassWord
				};
				var user1 = JSON.stringify(user)
				let actions = {
					"Message": user1,
					"Tag": "ac",
					'ActionMethod': 'UserBLL.Register',
				};
				//数据连接
				uni.connectSocket({
					url: 'ws://172.16.31.232:4000',
					success: function(res) {
						console.log("WebSocket连接成功");
						//数据打开
						uni.onSocketOpen(function(res) {
							console.log("WebSocket连接打开");
							//数据发送
							uni.sendSocketMessage({
								data: JSON.stringify(actions),
								success: function(res) {
									console.log("数据发送成功: " + JSON.stringify(actions));
									uni.onSocketMessage(function(e) {
										var data = JSON.parse(e.data);
										var res = JSON.parse(data.Message)
										console.log("数据接收成功: " +JSON.stringify(res));
										if (res.Code == 200) {
											//提示用户注册成功
											uni.showToast({
												title:'注册'+res.Message,
												duration: 1000
											});
											//延迟进入首页
											setTimeout(() => {
												uni.reLaunch({
													url: '../login/login'
												})
											}, 1001)
										} else {
											alert('请检查账号步骤是否正确！')
										}
									})
								}
							})
						})
					},
					fail: function(res) {
						console.log("WebSocket连接失败:" + res);
					}
				});
			},

			//打开通信 并接受数据
			//打开连接
			webSocketClientOnopen() {
				console.log('打开成功')

				websock.send(JSON.stringify(actions));
			}, //数据回收
			webSocketClientOnmessage(e) {

				var data = JSON.parse(e.data);
				data = JSON.parse(data.Message);

				if (data.Code == 200) {
					//使用uni-app中的暂存 确保第二次免登
					uni.setStorageSync('userInfo', JSON.stringify(data.Data))
					//提示用户注册成功
					uni.showToast({
						//title: data.Data.AccountName + data.Message,
						duration: 1000
					});
					//延迟进入首页
					setTimeout(() => {
						uni.reLaunch({
							url: '../login/login'
						})
					}, 1001)
				} else {
					alert('请检查账号步骤是否正确！')
				}
			},

			//通信
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
			//创建WebSocket连接
			initWebSocket() {
				websock = new WebSocket(api.wsuri);
				websock.onopen = this.webSocketClientOnopen //打开
				websock.onmessage = this.webSocketClientOnmessage //接收信息
				websock.onerror = this.webSocketClientOnerror //错误
				websock.onclose = this.webSocketClientOnclose //关闭
			},

		},
		created() {

		}
	}
	// ldjf
</script>

<style lang="less">
	@import url("../../common/register.less");
</style>

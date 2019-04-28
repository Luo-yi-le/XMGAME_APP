<template>
	<view class="content">
		<view>
			<view><text>账号1:</text><text>{{test_loginId1}}</text>
				<text>密码:</text><text>{{test_pwd1}}</text>
				<text @click="getTest1()">
					<使用账号1>
				</text>
			</view>
			<view><text>账号2:</text><text>{{test_loginId2}}</text>
				<text>密码:</text><text>{{test_pwd2}}</text>
				<text @click="getTest2()">
					<使用账号2>
				</text>
			</view>
		</view>
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title" style="color: #ECECEC;">{{title}}</text>
		</view>
		<view class="content_view1">
			<input type="text" class="content_view2" maxlength="9" v-model="user.accountName" placeholder="  手机号  用户名  邮箱" />
			<input type="password" class="content_view3" v-model="user.password" id="userpwd" placeholder="  密码/请输入登录密码"
			 maxlength="12" />
			<view class="content_view4">
				<button class="content_but" @click="login()">登陆</button>
			</view>
			<view class="content_view5">
				<text class="content_text1" @click="onreg">注册新用户</text>
				<text class="content_text2">忘记密码</text>
			</view>
			<view class="content_view6"></view>
			<view class="content_view7">
				<text class="content_text3">第三方登录</text>
			</view>
			<view class="content_text8">
				<view style="flex: 1;">
					<image src="../../static/img/qq.png" class="content_img"></image>
				</view>
				<view style="flex: 1;">
					<image src="../../static/img/weixin.png" class="content_img"></image>
				</view>
				<view style="flex: 1;">
					<image src="../../static/img/xinlang.png" class="content_img"></image>
				</view>
			</view>
		</view>
<!-- //;ll;oook -->
	</view>
</template>

<script>
	var websock;
	import * as api from '../../static/js/api.js'
	export default {
		data() {
			return {
				user: {
					accountName: '',
					password: '',

				},
				title: 'LOGIN',
				test_loginId1: 'dzk',
				test_pwd1: '123',
				test_loginId2: 'kkk',
				test_pwd2: '123',
			}
		},
		onLoad() {},
		methods: {
			onreg: function(e) {
				uni.navigateTo({
					url: '../register/register'
				})
			},
			//登陆
			login() {
				//调用WebSocket（只有登陆和注册需要用户操作点击，其他的视情况而定）
				this.initWebSocket();
			},
			//测试账号1
			getTest1() {
				this.user.accountName = this.test_loginId1
				this.user.password = this.test_pwd1
			},
			//测试账号2
			getTest2() {
				this.user.accountName = this.test_loginId2
				this.user.password = this.test_pwd2
			},
			//打开控制台
			openConsole() {
				var el = new Image();
				Object.defineProperty(el, 'id', {
					get: function() {}
				});
				console.log('%cl', el);

			},
			//创建WebSocket连接
			initWebSocket() {
				websock = new WebSocket(api.wsuri);
				websock.onopen = this.webSocketClientOnopen //打开
				websock.onmessage = this.webSocketClientOnmessage //接收信息
				websock.onerror = this.webSocketClientOnerror //错误
				websock.onclose = this.webSocketClientOnclose //关闭
			},
			//打开连接
			webSocketClientOnopen() {
				console.log('打开成功')
				var user = {
					'AccountName': this.user.accountName,
					'UserPassWord': this.user.password
				};
				var user1 = JSON.stringify(user)
				let actions = {
					"Message": user1,
					"Tag": "ac",
					'ActionMethod': 'UserBLL.Login',
				};
				this.websocketsend(actions);
			},
			//数据回收
			webSocketClientOnmessage(e) {
				var data = JSON.parse(e.data);
				var res = JSON.parse(data.Message)
				if (res.Code == 200) {
					console.log(res.Data);
					//使用uni-app中的暂存 确保第二次免登
						localStorage.setItem('userInfo',JSON.stringify( res.Data))
							
					
					//提示用户登陆成功
					uni.showToast({
						title: res.Data.AccountName + res.Message,
						duration: 1000
					});
					//延迟进入首页
					setTimeout(() => {
						uni.reLaunch({
							url: '../index/index'
						})
					}, 1001)
				} else {
					alert('请检查账号密码是否正确！')
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
			this.openConsole();
		}
	}
</script>

<style>
	@import url("../../common/login.css");
</style>

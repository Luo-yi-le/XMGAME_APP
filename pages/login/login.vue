<template>
	<view class="content">
		<view>
			<view><text>账号1:</text><text>{{test_loginId1}}</text>
				<text>密码:</text><text>{{test_pwd1}}</text>
				<text @click="getTest1()">
					《使用账号1》
				</text>
			</view>
			<view><text>账号2:</text><text>{{test_loginId2}}</text>
				<text>密码:</text><text>{{test_pwd2}}</text>
				<text @click="getTest2()">
					《使用账号2》
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
				<button class="content_but" @click="bindLogin()">登陆</button>
			</view>
			<view class="content_view5">
				<text class="content_text1" @click="onreg()">注册新用户</text>
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
	import {
		mapState,
		mapMutations
	} from 'vuex';
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
		methods: {
			onreg: function(e) {
				uni.navigateTo({
					url: '../register/register'
				})
			},
			//用户操作（测试）
			//登陆
			bindLogin() {
				var user1 = {
					'AccountName': this.user.accountName,
					'UserPassWord': this.user.password
				};
				var user2 = JSON.stringify(user1)
				let actions = {
					"Message": user2,
					"Tag": "ac",
					'ActionMethod': 'UserBLL.Login',
				};
				console.log(typeof JSON.stringify(actions));
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
										console.log("数据接收成功: " + res);
										if (res.Code == 200) {
											uni.showToast({
												title: res.Data.AccountName + '登陆' + res.Message,
												duration: 1000
											});
											uni.setStorage({
												key: 'userInfo',
												data: res.Data,
												success: function() {
													console.log('success' + res.Data);
												}
											});
											setTimeout(() => {
												uni.reLaunch({
													url: '../index/index'
												})
											}, 1001)
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
			// openConsole() {
			// 	var el = new Image();
			// 	Object.defineProperty(el, 'id', {
			// 		get: function() {}
			// 	});
			// 	console.log('l', el);
			// },
			//发送通信并回收
			//打开连接
			...mapMutations(['login'])
		},

		created() {
			//this.openConsole();
			uni.getStorage({
				key: 'userInfo',
				success: function(res) {
					if (res.data != null || res.data != '') {
						uni.reLaunch({
							url: '../index/index'
						})
					}
				}
			});
		}
	}
</script>

<style>
	@import url("../../common/login.css");
</style>

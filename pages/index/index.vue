<template>
	<view>
		<view class="index_view">
			<view class="index_view2">
				<view class="index_view3">
					<view class="view1">
						<image class="index_view4" src="../../static/logo.png"></image>
						<view class="textName">用户:{{user.AccountName}}</view>
						<view class="textName">积分:{{user.Integral}}</view>
					</view>
				</view>
			</view>
		</view>
		<view>
			<ul>
				<li :style="{height:Height+'upx'}" v-for="url in Imag" class="getWidth">
					<img class="am-thumbnail" :src="url.imgs" @click="begin()" />
				</li>

			</ul>
		</view>
	</view>

</template>

<script>
	var websock;
	import * as api from '../../static/js/api.js'
	export default {
		data() {
			return {
				title: 'Hello',
				user: '',
				Height: "",
				GameList: [],
				roomID: '',
				Imag: [{
					Id: 1,
					imgs: '../../static/img/u1.jpg'
				}],
			}
		},
		onLoad() {
			
		},
		methods: {
			GetGame: function() {
				uni.navigateTo({
					url: '../game/game'
				});
			},
			//用户操作
			setHeight() {
				const that = this;
				var width = document.getElementsByClassName("getWidth"); //这里的到的是一个数组
				this.Height = width[0].offsetWidth
			},
			begin(name) {
				const that = this;
				websock.close();
				uni.reLaunch({
					url: '../load/load?token=' + that.user.Token
				})
			},
			selectUserInfo() {
				// const that = this
				// that.user = JSON.parse(localStorage.getItem('userInfo'))
				const that = this;
				uni.getStorage({
					key: 'userInfo',
					success: function(res) {
						console.log("获取到数据"+res.data);
						that.user = res.data;
					}
				});
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
				//发送用户信息
				let entity = {
					"FromUser": this.user.Token,
					"Tag": "c"
				};
				this.websocketsend(entity);
			},
			webSocketClientOnmessage(e) { //数据接收
				const redata = JSON.parse(e.data);
				console.log(redata)
			},
			websocketsend(Data) { //数据发送
				console.log(Data);
				// var websock = new WebSocket("ws://127.0.0.1:4000");
				websock.send(JSON.stringify(Data));
			},
			webSocketClientOnclose(e) { //关闭
			},
			webSocketClientOnerror() { //连接建立失败重连
				initWebSocket();
			},

		},
		created() {
			this.initWebSocket();
		},
		onShow() {
			this.selectUserInfo();
		},

	}
</script>

<style>
	@import url("../../common/index.css");
</style>

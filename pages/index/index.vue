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
					<img class="am-thumbnail" :src="url.imgs" @click="begin(user.AccountName)" />
				</li> 
				
			</ul>
		</view>
	</view>

</template>

<script>
	// var websock;
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
					},
					{
						Id: 2,
						imgs: '../../static/img/u2.jpg'
					},
					{
						Id: 3,
						imgs: '../../static/img/u3.jpg'
					},
					{
						Id: 4,
						imgs: '../../static/img/u4.jpg'
					},
				],
				websock:'',
			}
		},
		onLoad() {},
		methods: {
			GetGame: function() {
				uni.navigateTo({
					url: '../game/game'
				});
			},
			setHeight() {
				const that = this;
				var width = document.getElementsByClassName("getWidth"); //这里的到的是一个数组
				this.Height = width[0].offsetWidth
			},
			begin(name) {
				const that = this;
				uni.reLaunch({
					url: '../load/load?name=' + name
				})
			},
			selectUserInfo() {
				const that = this
				const userInfo = sessionStorage.getItem("userInfo");
				that.user = JSON.parse(userInfo);
			},
			//获取游戏列表
			getGames() {
				const that = this;
				uni.request({
					url: api.getGames,
					method: 'GET',
					data: {},
					success: res => {
						console.log('游戏' + JSON.stringify(res));
						if (res.data.Code = 200) {
							that.GameList = res.data.Data;
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			//通信
			getSocket() {

				const wsuri = "ws://127.0.0.1:4000";
				this.websock = new WebSocket(wsuri);
				this.websock.onmessage = this.websocketonmessage;
				this.websock.onopen = this.websocketonopen;
				this.websock.onerror = this.websocketonerror;
				this.websock.onclose = this.websocketclose;


			},
			websocketonopen(e) { //连接建立之后执行send方法发送数据
				let entity = {
					"FromUser": this.user.AccountName,
					"Tag": "c"
				};
				this.websocketsend(entity);
			},
			websocketonerror() { //连接建立失败重连
				initWebSocket();
			},
			websocketonmessage(e) { //数据接收
				const redata = JSON.parse(e.data);
				console.log(redata)
			},
			websocketsend(Data) { //数据发送
				console.log(Data);
				// var websock = new WebSocket("ws://127.0.0.1:4000");
				this.websock.send(JSON.stringify(Data));
			},
			websocketclose(e) { //关闭
			}
		},
		created() {
			this.getGames();
			this.selectUserInfo();
			this.getSocket();

		}
	}
</script>

<style>
	@import url("../../common/index.css");
</style>

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
					<view class="userName">用户名:<text>{{user.AccountName}}</text></view>
					<view class="userIntegral">积分:<text>{{user.Integral}}</text></view>
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
				user: '',
				game: '',
			}
		},
		methods: {
			onover: function(e) {
				uni.switchTab({
					url: '../index/index'
				})
			},
			
			
			webSocketClientOnmessage(e) { //数据接收
				var data = JSON.parse(e.data);
				console.log('数据：'+JSON.stringify(data))
				if (data.Tag == "r") {
					var localgame = localStorage.getItem("game");
					uni.showToast({
						title: data.Message + ': ' + data.RoomID,
						duration: 2000
					});
				} else if (data.Tag == "i") {
					this.roomID = data.RoomID
				} else if (data.Tag == 'b') {
					//跳到开始游戏的界面 开始游戏的功能若没有成功  该连接会报错
					uni.reLaunch({
						url: '../play/play?token=' + this.token + '&roomID=' + data.RoomID
					})
				}
				localStorage.setItem('game', JSON.stringify(data));

			},
			
			//通信
			// #ifdef 
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
			},
			webSocketClientOnerror() { //连接建立失败重连
				this.initWebSocket();
			},
			// #endif
			
			//用户操作
			// #ifdef 
						//提示用户进入房间name
			showUser() {
				var game1 = localStorage.getItem("game");
				this.game = JSON.parse(game1);
				console.log(this.game.FromUser)
				uni.showToast({
					title: "232323;" + this.game.Message + ': ' + this.game.RoomID,
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
			//获取用户信息
			selectUserInfo() {
				const that = this
				that.user = JSON.parse(localStorage.getItem('userInfo'))
			},
			// #endif
		},
		onLoad: function(option) {
			this.token = option.token
			console.log(this.token);
		},
		created() {
			this.selectUserInfo()
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

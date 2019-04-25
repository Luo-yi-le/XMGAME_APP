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
		<button  class="load_but" @click="preGames">准备游戏</button>
		<button class="load_but" @click="onover">取消游戏</button>
	</view>
</template>

<script>
	var websock;
	export default {
		data() {  
			return {
				name: '',
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
			//通信
			getSocket: function() {
				const userInfo = sessionStorage.getItem("userInfo");
				this.user = JSON.parse(userInfo);
				const wsuri = "ws://127.0.0.1:4000";
				websock = new WebSocket(wsuri);
				websock.onmessage = this.websocketonmessage;
				websock.onopen = this.websocketonopen;
				websock.onerror = this.websocketonerror;
				websock.onclose = this.websocketclose;
			},
			websocketonopen(e) { //连接建立之后执行send方法发送数据
				let entity = {
					"FromUser": this.name,
					"Tag": "c"
				};
				this.websocketsend(entity);
				var c = {
					"FromUser": this.name,
					"Tag": "i",
					"RoomID": this.roomID == '' ? "" : this.roomID
				};
				this.websocketsend(c);
				console.log(c);
			},

			websocketonerror() { //连接建立失败重连
				initWebSocket();
			},
			websocketonmessage(e) { //数据接收
				console.log(e);
				var data =JSON.parse(e.data);
				//var data =typeof e.data=='object'? JSON.parse(e.data):e.data;
				console.log("数据接收232："+typeof data);
				if (data.Tag == "b") {
					uni.reLaunch({
						url: '../play/play?name=' + this.user.AccountName + '&roomID=' + data.RoomID
					})
				} else if (data.Tag == "i") {
					this.roomID = data.RoomID
				}
				sessionStorage.setItem('game', JSON.stringify(data));
				console.log("数据接收：" + JSON.stringify(data));
			},
			websocketsend(Data) { //数据发送
				console.log('数据发送：' + JSON.stringify(Data));
				websock.send(JSON.stringify(Data));
			},

			websocketclose(e) { //关闭
			},
			//提示用户进入房间
			showUser() {
				var game1 = sessionStorage.getItem("game");
				this.game = JSON.parse(game1);
				console.log(this.game.FromUser)
				uni.showToast({
					title: this.game.Message + ': ' + this.game.RoomID,
					duration: 3000
				});
			},
			//用户准备游戏
			preGames() {
				var c = {
					'FromUser': this.user.AccountName,
					'Tag': "r",
					'RoomID':  this.game.RoomID
				};	 
				this.websocketsend(c);
				setTimeout(()=>{
					var game1 = sessionStorage.getItem("game");
					this.game = JSON.parse(game1);
					console.log(this.game.FromUser)
					uni.showToast({
						title: this.game.Message + ': ' + this.game.RoomID,
						duration: 3000
					});
				},1000)
				
			}
		},
		onLoad: function(option) {
			this.name = option.name
			console.log(this.name);
		},
		created() {
			setTimeout(() => {
				this.showUser();
			}, 500)
			this.getSocket();
		}
	}
</script>

<style lang="less">
	@import url("../../common/load.less");
</style>

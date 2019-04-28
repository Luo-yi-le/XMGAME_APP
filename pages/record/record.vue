<!--xzg 时间：2019-4-28 11：00 创建了游戏页面及个人纪录的显示-->
<template>
	<view>
			<view v-for=" test in ArrayTest" >
					<view  class="all">
						<image src="../../static/img/body.png"  class="img"></image>
						<view>
							<view class="jf1" v-if="test.Integral < 0">{{test.Integral}}</view>
							<view class="jf2" v-else="test.Integral > 0">+{{test.Integral}}</view>
							<view class="user">{{test.AccountName}}</view>
						</view>
						<view class="roomid">
							房号：{{test.RoomID}}
						</view>
						<view class="good">
							<view>开始：{{test.CreateTime}}</view>
							<view>结束：{{test.EndTime}}</view>
						</view>
						<view  v-if="test.Integral < 0" class="failure">
							失败
						</view>
						<view  class="successful" v-else="test.Integral > 0" >
							胜利
						</view>
						<view class="fuhao">></view>
					</view>
			</view>
	</view>
</template>

<script>
	var websock;
	import * as api from '../../static/js/api.js';
	
	export default{
		data() {
			return {
				ArrayTest:[
					{Integral:'20',AccountName:'d',RoomID:'23',CreateTime:'11',EndTime:'12'}
				]
			}
		},
		onLoad() {
			this.getUser();
			this.initWebSocket();
		},
		methods:{
			//获取用户
			getUser(){
				const that = this;
				that.user=JSON.parse( localStorage.getItem('userInfo'))
			},
			initWebSocket() {
				
				websock = new WebSocket(api.wsuri);
			
				websock.onopen = this.webSocketClientOnopen //打开
				
 				websock.onmessage = this.webSocketClientOnmessage //接收信息
				websock.onerror = this.webSocketClientOnerror //错误
				websock.onclose = this.webSocketClientOnclose //关闭
			},
			webSocketClientOnopen() {
				console.log('打开成功')
				console.log(this.user.Token);
				
				var user1 = {
					'AccountName': this.user.Token
				}
				console.log(user1)
				//记得转换为字符串"Message"
				var user2 = JSON.stringify(user1)
				
				console.log(user2)
				let actions = {
					"Message":user2,
					"Tag": "ac",
					'ActionMethod': 'RecordBLL.GetRecordInfo',
				};
				console.log(actions)
				this.websocketsend(actions);
			},
			webSocketClientOnmessage(e) {
 				//获取出来是字符串，转为json格式
 				var a = JSON.parse(e.data);
				var res = JSON.parse(a.Message);
				//console.log(a.Message.Code);
				if(res.Code == 200){
					console.log(res.Data);
					this.ArrayTest = res.Data;
				}else{
					alert("有错")
				}
			},
			websocketsend(Data) { //发送数据
				//转字符串
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
			
		}
	}
</script>

<style>
	@import url("../../common/record.css");
</style>

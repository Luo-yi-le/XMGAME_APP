<!-- xzg 时间：2019-4-28 11：00 根据房间号查询出对应的游戏纪录 -->
<template>
	<view >
		<view  class="topset">
			<view>查询:</view>
			<view>
				<input type="text" placeholder="请输入房号" v-model="roomid"/>
			</view>
			<button @click="select" type="primary">查询</button>
		</view>
		<view  class="list">
			<view>房间纪录如下：</view>
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
		</view>
	</view>
</template>

<script>
	var websock;
	import * as api from '../../static/js/api.js';
	
	export default{
		data() {
			return {
				roomid:'',
				ArrayTest:[]
			}
		},
		onLoad() {
		},
		methods:{
			
			initWebSocket() {
			
				websock = new WebSocket("ws://172.16.31.232:4000");
				websock.onopen = this.webSocketClientOnopen //打开
				console.log("打开成功")
				websock.onmessage = this.webSocketClientOnmessage //接收信息
				websock.onerror = this.webSocketClientOnerror //错误
				websock.onclose = this.webSocketClientOnclose //关闭
			},
			webSocketClientOnopen() {
				console.log('打开成功')
				
				var user1 = {
					'roomID': this.roomid
				}
				console.log(user1)
				var user2 = JSON.stringify(user1);
				
				console.log(user2)
				let actions = {
					"Message":user2,
					"Tag": "ac",
					'ActionMethod': 'RecordBLL.GetRecords',
				};
				console.log(actions)
				this.websocketsend(actions);
			},
			webSocketClientOnmessage(e) {
				console.log("获取到数据："+e.data)
				//获取出来是字符串，转为json格式
				var user1 = JSON.parse(e.data);
				var user2 = JSON.parse(user1.Message);
				console.log(user2);
				
				if(user2.Code == 200){
					console.log("通讯正常")
					
					this.ArrayTest = user2.Data;
					console.log(user2.Data.length)
					if(user2.Data.length ==0){
						uni.showToast({
							title:'你输入的房号有误，请重新输入'
						})
					}
				}else{
					console.log("通讯有误")
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
			//xzg,查询房间对应的纪录
			select(){
				this.initWebSocket();
			}
			
		}
	}
</script>

<style>
	@import url("../../common/roomGet.css");
</style>

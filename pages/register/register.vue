<template>
	<view class="Register">
		<view class="R_from">
			<view class="">
				<table>
					<tr>
						<th><text >账号：</text></th>
						<th><input type="text" class="Register_input" v-model="user.AccountName"  maxlength="9" placeholder="账号"  /></th>
					</tr>
					
				</table>
				
			</view>
			<view class="">
				<table>
					<tr>
						<th><text>密码：</text></th>
						<th><input type="password"  class="Register_input" v-model="user.UserPassWord"  maxlength="9" placeholder="密码" /></th>
					</tr>
				</table>
				
			</view>
			<view class="">
				<table>
					<tr>
						<th><text>邮箱：</text></th>
						<th><input type="text"  class="Register_input" v-model="user.mailbox"  maxlength="9" placeholder="邮箱" /></th>
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
	var	websock;
	import * as api from '../../static/js/api.js' 

	export default{
		data(){
			return{
				user:{
					AccountName:'',
					UserPassWord:''
				}
				
			}
		},
		methods:{
			loginUser(){
			
				this.initWebSocket();
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
					'AccountName': this.user.AccountName,
					'UserPassWord': this.user.UserPassWord
				};
				var user1=JSON.stringify(user)
				let actions = {
					"Message": user1,
					"Tag": "ac",
					'ActionMethod': 'UserBLL.Register',
				};
				websock.send(JSON.stringify(actions));
			},//数据回收
			webSocketClientOnmessage(e) {
						
				var data = JSON.parse(e.data);
				data= JSON.parse(data.Message);
				
				
				if(data.Code==200){
					//使用uni-app中的暂存 确保第二次免登
					uni.setStorageSync('userInfo',JSON.stringify(data.Data))
					//提示用户注册成功
					uni.showToast({
						//title: data.Data.AccountName + data.Message,
						duration:1000
					});
					//延迟进入首页
					setTimeout(()=>{
						uni.reLaunch({
							url: '../login/login'
						})
					},1001)
				}else{
					alert('请检查账号步骤是否正确！')
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
			
		}
	}
	
</script>

<style lang="less">
	@import url("../../common/register.less");
</style>

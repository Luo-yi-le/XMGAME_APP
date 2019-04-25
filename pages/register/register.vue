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
						<th><input type="password" v-model="user.UserPassWord"  maxlength="9" placeholder="密码" /></th>
					</tr>
				</table>
				
			</view>
			<view class="">
				<table>
					<tr>
						<th><text>邮箱：</text></th>
						<th><input type="text" v-model="user.mailbox"  maxlength="9" placeholder="邮箱" /></th>
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
				uni.request({
					url:api.registerUser,
					data:{
						'AccountName':this.user.AccountName,
						'UserPassWord':this.user.UserPassWord
					},
					success:function(res){
						console.log(res)
					}
					
				})
				console.log(this.user.AccountName);
				console.log(this.user.UserPassWord)
				//console.log(this.user.mailbox)
			}
		}
	}
	
</script>

<style lang="less">
	@import url("../../common/register.less");
</style>

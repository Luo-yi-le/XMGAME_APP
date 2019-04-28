<template>
	<view class="text-font">
		<!-- 用户信息卡 -->
		<view class="list-content">
			<view class="list">
				<view class="li noborder" v-if="user">
					<image class="icon" src="../../static/logo.png"></image>
					<view class="textName">用户名：<text>{{user.AccountName}}</text></view>
					<view class="textName">编号：<text>{{user.ID}}</text></view>
				</view>
				<view class="li noborder" v-else>
					<navigator url="../login/login">你还没登陆，请去登陆</navigator>
				</view>
				<view class="user-data-bar">
					<view class="data-bar">积分:<text class="data-bar-num">{{user.Integral}}</text></view>
					<view class="data-bar">现金:<text class="data-bar-num">{{money}}</text></view>
					<view class="data-bar">排名:<text class="data-bar-num">{{Fabulous}}</text></view>
				</view>
			</view>
		</view>
		<!-- 用户的数据 -->
		<!-- 选项 -->
		<view class="list-content" style="margin-top: 15upx;">

			<view class="list">
				<view class="li">
					<image class="icon" src="../../static/logo.png"></image>
					<view class="text"><navigator url="../record/record">游戏记录</navigator></view>
				</view>
			</view>
			<view class="list">
				<view class="li noborder">
					<image class="icon" src="../../static/logo.png"></image>
					<view class="text">进入游戏</view>
				</view>
			</view>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				integral: 100,
				money: 200,
				Fabulous: 300,
				userName: '',
				loginID: '1008687788',
				user: "",
			}
		},
		created() {				
			this.selectUserInfo();
		},
		methods: {
			selectUserInfo() {
				const that=this
				const userInfo = localStorage.getItem("userInfo");
				that.user=JSON.parse(userInfo);
			}
		}
	}
</script>

<style lang="less">
@import url("../../common/user.less");
</style>

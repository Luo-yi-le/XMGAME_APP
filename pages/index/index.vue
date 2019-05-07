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
				const that = this;
				uni.getStorage({
					key: 'userInfo',
					success: function(res) {
						console.log("获取到数据"+res.data);
						that.user = res.data;
					}
				});
			},
		},
		created() {
		},
		onShow() {
			this.selectUserInfo();
		},

	}
</script>

<style>
	@import url("../../common/index.css");
</style>

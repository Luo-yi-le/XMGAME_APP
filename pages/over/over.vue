<template>

	<view id="box">
		<view class="square">
			<view class="R_ftext">
				<text class="R_text">胜利</text>
			</view>

			<view>
				<table>
					<tr>
						<th>
							<view class="R_ptr">玩家</view>
						</th>
						<th>
							<view class="R_ptr">结果</view>
						</th>
						<th>
							<view class="R_ptr">积分</view>
						</th>
					</tr>
					<tr v-for="item in getRecordsList">
						<th>{{item.AccountName}}</th>
						<th>
							<view class="R_ptr">
								<text>对:</text><text>7</text><text>题</text>
							</view>
						</th>
						<th v-if="item.Integral>0"><text>+</text><text>{{item.Integral}}</text></th>
						<th v-else><text></text><text>{{item.Integral}}</text></th>
					</tr>

				</table>

			</view>

			<view class="R_vi">
				<view class="R_via" @click="onpus">
					<text>再来一局</text>
				</view>

				<view class="R_via" @click="onpus">
					<text>重新匹配</text>
				</view>
				<view style="clear: both;"></view>
			</view>

			<view class="Close" @click="onover">
				<text>关闭</text>
			</view>
		</view>
	</view>

</template>

<script>
	import * as api from '../../static/js/api.js'
	export default {
		data() {
			return {
				roomId: '', //获取房间号
				name:'',//获取用户名称
				getRecordsList: [], //排行榜的集合
			}
		},
		methods: {
			onpus: function(e) {
				uni.redirectTo({
					url: '../load/load?roomId=' + this.roomId+'&name=' + this.name
				})
			},
			onover: function(e) {
				uni.switchTab({
					url: '../index/index?roomId=' + this.roomId+'&name=' + this.name
				})
			},
			//获取排行榜
			GetRecords() {
				uni.request({
					url: api.GetRecords,
					data: {
						roomID: this.roomId
					},
					method: 'GET',
					success: res => {
						if (res.data.Code == 200) {
							this.getRecordsList = res.data.Data
							console.log(res.data.Message)
							console.log(this.getRecordsList)
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},

		},
		onLoad(option) {
			this.roomId = option.roomId
			this.name = option.name
		},
		created() {
			this.GetRecords();
		},
		//排序
		computed: {
			range: function() {
				return this.getRecordsList.sort((a, b) => a.Integral - b.Integral).reverse();
			},
		}
	}
</script>

<style>
	@import url("../../common/over.less");
</style>

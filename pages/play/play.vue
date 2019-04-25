<template>
	<view class="play_view">
		<view class="zhu">

			<view class="play_view1">
				{{themeId}} / {{index_Count}}
			</view>
			<view class="play_view2"><text class="play_text">玩家</text></view>
			<view>
				<image src="../../static/img/body.png" class="play_img" />
				<view style="play_view3">积分:{{userInfo.Integral}}</view>
			</view>

		</view>
		<view class="play_view4">
			<view>题目类型</view>
			<view>
				<view class="play_view5"> </view>
			</view>

			<view class="play_view6">
				<label class="play_view7">{{count}}</label>
			</view>

			<view class="play_view8">
				<view>问题：</view>
				<view class="play_view9">{{getTopicList.Theme}}=?</view>
			</view>
			<view class="play_view10">
				<view>答案：</view>
				<input type="text" placeholder="输入答案" style="border-bottom: 10upx;" v-model="answer" />
			</view>
			<button :style="{display:fff}" @click="updateRecord" class="bb1">下一题</button>
			<button style="margin: 50upx;" @click="over" :disabled="zt">结束游戏</button>
		</view>
	</view>
</template>
<script>
	import * as api from '../../static/js/api.js'
	var i = 0;
	export default {
		data() {
			return {
				count: 10,
				userInfo: '',
				themeId: '',
				theme: '',
				fff: '',
				zt: 'true',
				index_: 0,
				index_Count: '',
				getTopicList: [],
				name: '',
				roomId: '',
				createTime: '', //创建时间 or 结算时间
				recordEndTime: '', //创建游戏距离需要带的时间
				answer: '', //获取用户的答案
				n_integral: -20,
				p_integral: 20,
			}
		},
		onLoad: function(option) {
			//获取名称
			this.roomId = option.roomID;
			this.name = option.name;
			console.log(this.roomId)
			//
			this.index_Count = this.index_ + 1
			this.themeId = this.getTopicList.Id;
			this.theme = this.getTopicList.Theme;

			var second;
			second = 0; //初始化
			var millisecond = 0; //毫秒
			this.timer = setInterval(() => {
				this.count = this.count - 1;
				if (this.count == 0) {
					clearInterval(this.timer); //停止
					this.zt = false; //启用结束按钮
					this.fff = 'none'; //隐藏下一题按钮
				}
				// this.nums = hour+'时'+minute+'分'+second+'秒';
			}, 1000);
		},
		methods: {
			over: function(e) {
				uni.redirectTo({
					url: '../over/over?roomId=' + this.roomId+'&name=' + this.name
				})
			},
			test() {
				i++;
				if (i == this.index_) {
					this.zt = false;
					this.fff = 'none';
					console.log(i);
				}
				this.theme = this.getTopicList.Theme;
				this.themeId = this.getTopicList.Id;
			},
			selectUserInfo() {
				const that = this;
				const user = sessionStorage.getItem("userInfo");
				that.userInfo = JSON.parse(user);
			},
			//获取题库
			GetTopic() {
				const that = this;
				uni.request({
					url: api.GetTopic,
					method: 'GET',
					success: res => {
						if (res.data.Code == 200) {
							that.getTopicList = res.data.Data;
							console.log(that.getTopicList)
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			//添加游戏记录
			addRecord() {
				const that = this;
				uni.request({
					url: api.AddRecord,
					method: 'GET',
					data: {
						"AccountName": that.name,
						"CreateTime": that.createTime,
						"RoomID": that.roomId,
						"Integral": that.n_integral,
						"EndTime": that.recordEndTime,
					},
					success: res => {
						if (res.data.Code == 200) {
							console.log(res.data.Message)
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			//结束游戏 修改用户
			updateRecord() {
				const that = this;
				if (that.answer != that.getTopicList.Answer || that.answer == '' || that.answer == null) {
					uni.request({
						url: api.UpdateRecord,
						method: 'GET',
						data: {
							"AccountName": that.name,
							'Integral': that.n_integral,
							'EndTime': that.createTime,
							'RoomID': that.roomId
						},
						success: res => {
							if (res.data.Code == 200) {
								alert('答案错误！' + that.n_integral + '积分')
							}
						},
						fail: () => {},
						complete: () => {}
					});
				} else if (that.answer == that.getTopicList.Answer) {
					uni.request({
						url: api.UpdateRecord,
						method: 'GET',
						data: {
							"AccountName": that.name,
							'Integral': that.p_integral,
							'EndTime': that.createTime,
							'RoomID': that.roomId
						},
						success: res => {
							if (res.data.Code == 200) {
								alert('答案正确！+' + that.p_integral + '积分')
							}
						},
						fail: () => {},
						complete: () => {}
					});

				}

			},
			//当时间读完后自动结算
			autopilotRecord() {

			},
			//获取系统的当前时间
			getSystemTime() {
				var date = new Date();
				var year = date.getFullYear();
				var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
				var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
				var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
				var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
				var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
				var time = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
				var t = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + (seconds + parseInt(10));
				this.recordEndTime = t;
				this.createTime = time
				return this.createTime;
			}
		},
		created() {
			setTimeout(() => {
				this.addRecord();
			}, 500)
			this.getSystemTime();
			this.selectUserInfo();
			this.GetTopic();
		}
	}
</script>

<style>
	@import url("../../common/play.css");
</style>

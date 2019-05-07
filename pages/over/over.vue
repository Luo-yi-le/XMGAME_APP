<template>

	<view id="box">
		<view class="square">
			<view class="R_ftext">
				<text class="R_text" v-if="getRecordsList[0].Integral>getRecordsList[1].Integral
				&&getRecordsList[0].AccountName!=userInfo.AccountName">
					{{ResultA}}</text>
				<text class="R_text" v-else-if="getRecordsList[0].Integral==getRecordsList[1].Integral"> {{ResultC}}</text>
				<text class="R_text" v-else> {{ResultB}}</text>
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
								<text>对:</text><text>{{bingo}}</text><text>题</text>
							</view>
						</th>
						<th v-if="item.Integral>0"><text>+</text><text>{{item.Integral}}</text></th>
						<th v-else><text></text><text>{{item.Integral}}</text></th>
					</tr>
				</table>
			</view>
			<view class="R_vi">
				<view class="R_via" @click="onpus"><text>再来一局</text></view>
				<view class="R_via" @click="onpus"><text>重新匹配</text></view>
				<view style="clear: both;"></view>
			</view>

			<view class="Close" @click="onover">
				<text>关闭</text>
			</view>
		</view>
	</view>

</template>

<script>
	//周少鸿 4/30 比赛结果处理
	var websock;
	import * as api from '../../static/js/api.js'
	export default {
		data() {
			return {
				roomId: '', //获取房间号
				name: '', //获取用户名称
				getRecordsList: [], //排行榜的集合
				FracRest: '', //结果
				FractionA: '5', //模拟分数 A
				FractionB: '1', //模拟分数 B
				ResultA: '您胜利了', //胜负
				ResultB: '您失败了', //胜负
				ResultC: '打成平局', //胜负
				bingo: '',
				userInfo: '',
			}
		},
		methods: {
			selectUserInfo() {
				const that = this;
				uni.getStorage({
					key: 'userInfo',
					success: function(res) {
						console.log("获取到数据" + JSON.stringify(res.data));
						that.userInfo = JSON.parse(res.data);
					}
				});
			},
			onpus: function(e) {
				uni.redirectTo({
					url: '../load/load?roomId=' + this.roomId + '&name=' + this.name
				})
			},
			onover: function(e) {
				uni.switchTab({
					url: '../index/index?roomId=' + this.roomId + '&name=' + this.name
				})
			},
			//功能:获取排行榜 ,person:罗贻乐, time:2019-4-28 9:42
			GetRecords() {
				const roomid = {
					//'RoomID': this.roomId
					'RoomID': '5bf26a4e-cf5e-4d14-ba55-041695407f2b'
				}
				const jsogRoomid = JSON.stringify(roomid)
				let entity = {
					"Message": jsogRoomid,
					"Tag": "ac",
					"ActionMethod": "RecordBLL.GetRecords"
				};
				this.websocketsend(entity);
			},
			initWebSocket() {
				websock = new WebSocket(api.wsuri);
				websock.onopen = this.webSocketClientOnopen //打开
				websock.onmessage = this.webSocketClientOnmessage //接收信息
				websock.onerror = this.webSocketClientOnerror //错误
				websock.onclose = this.webSocketClientOnclose //关闭
			},
			webSocketClientOnopen(e) { //连接建立之后执行send方法发送数据
				console.log('打开成功')
				this.GetRecords();
			},
			webSocketClientOnmessage(e) { //数据接收
				var data = JSON.parse(e.data);
				var strData = JSON.parse(data.Message);
				console.log("strData:" + strData)
				if (strData.Code == 200) {
					this.getRecordsList = strData.Data;
					console.log('getRecordsList:' + JSON.stringify(strData))
				}
			},
			websocketsend(Data) { //数据发送
				websock.send(JSON.stringify(Data));
			},

			webSocketClientOnclose(e) { //关闭
			},
			webSocketClientOnerror() { //连接建立失败重连
				this.initWebSocket();
			},
		},
		onLoad(option) {
			this.roomId = option.roomId
			this.bingo = option.bingo
		},
		created() {
			this.selectUserInfo();
			this.initWebSocket();
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

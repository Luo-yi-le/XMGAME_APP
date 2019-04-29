<!--xzg 时间：2019-4-28 11：00 创建了游戏页面及个人纪录的显示-->
<template>
	<view>
		<uni-collapse>
			<block v-for=" (test,index) in ArrayTest">
				<uni-collapse-item :title="test.AccountName" :open="false" :key="index">

					<view class="all">
						<image src="../../static/img/body.png" class="img" @click="selectOneRecord(user.Token,test.RoomID)"></image>
						<view @click="selectOneRecord(user.Token,test.RoomID)">
							<view class="jf1" v-if="test.Integral < 0">{{test.Integral}}</view>
							<view class="jf2" v-else="test.Integral > 0">+{{test.Integral}}</view>
							<view class="user">{{test.AccountName}}</view>
						</view>
						<view class="roomid">
							房号：{{test.RoomID}}
						</view>
						<view class="good" @click="selectOneRecord(user.Token,test.RoomID)">
							<view>开始：{{test.CreateTime}}</view>
							<view>结束：{{test.EndTime}}</view>
						</view>
						<view v-if="test.Integral < 0" class="failure" @click="selectRecord(test.RoomID)">
							失败
						</view>
						<view class="successful" v-else="test.Integral > 0" @click="selectRecord(test.RoomID)">
							胜利
						</view>
						<view class="fuhao" @click="selectRecord(test.RoomID)">></view>

					</view>
				</uni-collapse-item>
			</block>

			<!-- 罗贻乐 显示用户的同房间的记录 -->
			<view class="list"></view>
		</uni-collapse>

	</view>
</template>

<script>
	var websock;
	import * as api from '../../static/js/api.js';
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue' //折叠面板组件
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
	import cmdResultPage from "@/components/cmd-result-page/cmd-result-page.vue"; //页面结果组件

	export default {
		components: {
			uniCollapse,
			uniCollapseItem,
			cmdResultPage,
		},
		data() {
			return {
				ArrayTest: [],
				user: '',
				oneRecord: '',
				getRecord: '',
			}
		},
		created() {
			this.getUser();
		},
		onLoad() {
			this.initWebSocket();
		},
		methods: {
			//用户操作
			// #ifdef 
			//获取用户
			getUser() {
				const that = this;
				that.user = JSON.parse(localStorage.getItem('userInfo'))
			},
			//罗贻乐 addTime 2019-4-28 14:30 功能：获取用户的名称和token查询单条记录
			selectOneRecord(accountName, roomId) {
				const list = {
					"AccountName": accountName,
					"RoomID": roomId
				}
				const jsonList = JSON.stringify(list);

				const record = {
					"Message": jsonList,
					"Tag": "ac",
					"ActionMethod": "RecordBLL.GetRecordByUserAndRoom"
				}
				this.websocketsend(record);
				setTimeout(() => {
					alert('用户名：' + this.oneRecord.AccountName + '\n' +
						'积分：' + this.oneRecord.Integral + '\n' +
						'开始时间：' + this.oneRecord.CreateTime + '\n' +
						'结束时间：' + this.oneRecord.EndTime
					)
				}, 500)

			},
			//罗贻乐 addTime 2019-4-28 17:30 功能：获取用户的同房间的对战记录
			// #ifdef 
			selectRecord(roomid) {
				var room = {
					'RoomID': roomid
				}
				var jsonRoom = JSON.stringify(room);
				let entity = {
					"Message": jsonRoom,
					"Tag": "ac",
					"ActionMethod": "RecordBLL.GetRecords"
				};
				this.websocketsend(entity);
				setTimeout(() => {
					alert('用户：' + this.getRecord[0].AccountName + '  VS  ' + this.getRecord[1].AccountName + '\n' +
						'积分：' + this.getRecord[0].Integral + '  VS  ' + this.getRecord[1].Integral + '\n' +
						'开始时间：' + this.getRecord[0].CreateTime + '  VS  ' + this.getRecord[1].CreateTime + '\n' +
						'结束时间：' + this.getRecord[0].EndTime + '  VS  ' + this.getRecord[1].EndTime
					)
				}, 500)
			},
			// #endif

			// #endif

			//数据回收 （通信）
			// #ifdef 
			webSocketClientOnmessage(e) {
				//获取出来是字符串，转为json格式
				var data = JSON.parse(e.data);
				var strData = typeof data == 'string' ? JSON.parse(data) : data;
				//罗贻乐 2019-4-28 15:59 因为每个数据返回的表示都是Code:200 所以启用ActionMethod为标识
				if (strData.ActionMethod == "RecordBLL.GetRecordInfo") {
					var res = JSON.parse(strData.Message);
					var objData = typeof res == 'object' ? res : res
					if (objData.Code === 200) {
						this.ArrayTest = objData.Data
					}
				} else if (strData.ActionMethod == "RecordBLL.GetRecordByUserAndRoom") {
					var res = JSON.parse(strData.Message);
					if (res.Code == 200) {
						this.oneRecord = res.Data;
						//console.log("res:" + JSON.stringify(res.Data))
					}
				} else if (strData.ActionMethod == "RecordBLL.GetRecords") {
					var res = JSON.parse(strData.Message);
					console.log("res:" + JSON.stringify(res))
					if (res.Code == 200) {
						this.getRecord = res.Data;
						console.log("res:" + JSON.stringify(this.getRecord))
					}

				} else {
					console.log("错误")
				}
			},
			// #endif

			//通信方法
			// #ifdef
			initWebSocket() {
				websock = new WebSocket(api.wsuri);
				websock.onopen = this.webSocketClientOnopen //打开
				websock.onmessage = this.webSocketClientOnmessage //接收信息
				websock.onerror = this.webSocketClientOnerror //错误
				websock.onclose = this.webSocketClientOnclose //关闭
			},
			webSocketClientOnopen() {
				var user1 = {
					'AccountName': this.user.Token
				}
				//记得转换为字符串"Message"
				var user2 = JSON.stringify(user1)
				let actions = {
					"Message": user2,
					"Tag": "ac",
					'ActionMethod': 'RecordBLL.GetRecordInfo',
				};
				this.websocketsend(actions);
			},

			websocketsend(Data) { //发送数据
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
			// #endif

		}
	}
</script>

<style>
	@import url("../../common/record.css");
</style>

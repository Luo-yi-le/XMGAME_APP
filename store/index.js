import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		login: false,
		userInfo: uni.getStorageSync('userInfo'),
	},
	mutations: {
		login(state, provider) {
			console.log('state：' + JSON.stringify(state))
			console.log('provider：' + JSON.stringify(provider))
			state.login = true;
			state.userInfo = provider.userInfo;
		},
		loginOut(state) {
			console.log('state关闭：' + JSON.stringify(state))
			state.login = false;
			state.userInfo = '';
			uni.removeStorageSync('userInfo');
			uni.onSocketOpen(function() {
				uni.closeSocket();
			});

			uni.onSocketClose(function(res) {
				console.log('WebSocket 已关闭！');
			});
			uni.reLaunch({
				url: '../login/login'
			})
		},
		setLoginTypes(state, types) {
			state.login = true
		}
	}
})

export default store;

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/play/play"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\luoyile\\Desktop\\XMGAME_APP\\pages\\play\\play.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/luoyile/Desktop/XMGAME_APP/pages/play/play.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar api = _interopRequireWildcard(__webpack_require__(/*! ../../static/js/api.js */ \"C:\\\\Users\\\\luoyile\\\\Desktop\\\\XMGAME_APP\\\\static\\\\js\\\\api.js\"));function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};if (desc.get || desc.set) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}}newObj.default = obj;return newObj;}}var websock;\nvar i = 0;var _default =\n{\n  data: function data() {\n    return {\n      bingo: 0, //答对的数量\n      TopIndex: 0, //下标\n      count: 10,\n      userInfo: '',\n      forbid: '',\n      getTopicList: [{\n        GenreName: '',\n        Topic: '',\n        Answer: '' }],\n\n      token: '',\n      roomId: '',\n      answer: '', //获取用户的答案\n      RecordList: '', //获取插入数据\n      game: '',\n      b: false };\n\n  },\n  onLoad: function onLoad(option) {var _this = this;\n    //获取名称\n    console.log('option:' + JSON.stringify(option));\n    this.roomId = option.roomID;\n    this.token = option.token;\n    console.log('roomId:' + this.roomId);\n    // 实现倒计时功能\n    this.timer = setInterval(function () {\n      _this.count = _this.count - 1;\n      if (_this.count == 0) {\n        if (_this.getTopicList.length - 1 == _this.TopIndex) {\n          _this.forbid = 'none'; //隐藏下一题按钮\n          clearInterval(_this.timer); //停止\n        } else {\n          _this.TopIndex = _this.TopIndex + 1;\n          _this.count = 10;\n        }\n      }\n    }, 1000);\n\n  },\n  methods: {\n    over: function over(e) {\n      //\n\n      // if (this.getTopicList[this.TopIndex].Answer == this.answer) {\n      // \tif (this.count > 0) {\n      // \t\tconsole.log('答对了');\n      // \t\tthis.bingo = this.bingo + 1;\n      // \t\t\n      // \t\tconsole.log(this.bingo)\n      // \t\t\n\n      // \t} else {\n      // \t\tconsole.log('超时了！');\n      // \t}\n      // }\n      this.isRight();\n      b = true;\n      //\twebsock.close();\n\n\n    },\n\n    selectUserInfo: function selectUserInfo() {\n      // const that = this;\n      // const user = localStorage.getItem(\"userInfo\");\n      // that.userInfo = JSON.parse(user);\n      var that = this;\n      uni.getStorage({\n        key: 'userInfo',\n        success: function success(res) {\n          console.log(\"获取到数据\" + res.data);\n          that.userInfo = res.data;\n        } });\n\n    },\n\n    //用户答题 罗贻乐\n    isRight: function isRight() {\n      //按下一题时，进行判断\n\n      var id = this.getTopicList[this.TopIndex].ID;\n      //console.log('id:' + id)\n      var strAnswer = {\n        \"AccountName\": this.token,\n        \"QuestionID\": id,\n        'Reply': this.answer,\n        \"RecordID\": api.RecordList.ID };\n\n      var jsonAnswer = JSON.stringify(strAnswer);\n      var action = {\n        \"Message\": jsonAnswer,\n        \"Tag\": \"ac\",\n        \"ActionMethod\": \"RecordQuestionBLL.IsRight\" };\n\n      console.log(JSON.stringify(action));\n      this.websocketsend(action);\n      if (this.getTopicList[this.TopIndex].Answer == this.answer) {\n        if (this.count > 0) {\n          console.log('答对了');\n          this.bingo = this.bingo + 1;\n\n          console.log(this.bingo);\n\n          //this.isRight();\n        } else {\n          console.log('超时了！');\n        }\n      }\n      this.answer = '';\n      this.TopIndex = this.TopIndex + 1;\n      this.count = 10;\n\n      if (this.getTopicList.length - 1 == this.TopIndex) {\n        this.forbid = 'none'; //隐藏下一题按钮\n      }\n    },\n\n    //周少鸿 4/30 \n    //获取房间的ID\n    getGameRoomID: function getGameRoomID() {\n      var game1 = localStorage.getItem(\"game\");\n      //this.game = game1;\n      console.log(\"game:\" + this.game1);\n\n    },\n    //创建WebSocket连接\n    initWebSocket: function initWebSocket() {\n      websock = new WebSocket(api.wsuri);\n      websock.onopen = this.webSocketClientOnopen; //打开\n      websock.onmessage = this.webSocketClientOnmessage; //接收信息\n      websock.onerror = this.webSocketClientOnerror; //错误\n      websock.onclose = this.webSocketClientOnclose; //关闭\n    },\n\n    //周少鸿 4/30 \n    //打开连接\n    webSocketClientOnopen: function webSocketClientOnopen() {\n      console.log('打开成功');\n\n      //获取游戏题目\n      var topicList = {\n        Tag: 'ac',\n        ActionMethod: 'QuestionBLL.GetQuestions' };\n\n      this.websocketsend(topicList);\n\n    },\n    //数据回收\n    webSocketClientOnmessage: function webSocketClientOnmessage(e) {\n      var data = JSON.parse(e.data);\n      var strData = typeof data == 'string' ? JSON.parse(data) : data;\n      if (strData.ActionMethod == 'QuestionBLL.GetQuestions') {\n        var data1 = JSON.parse(data.Message);\n        console.log(data1.Data);\n        if (data1.Code == 200) {\n          //把数据赋值给当前定义数组\n          this.getTopicList = data1.Data;\n        }\n      } else if (strData.ActionMethod == \"RecordQuestionBLL.IsRight\" && b == true) {\n        websock.close();\n        uni.redirectTo({\n          url: '../over/over?roomId=' + this.roomId + '&token=' + this.token + '&bingo=' + this.bingo });\n\n      } else if (strData.ActionMethod == \"RecordQuestionBLL.IsRight\") {\n        var res = JSON.parse(strData.Message);\n        console.log('模拟答题：' + JSON.stringify(res));\n        var objData = typeof res == 'object' ? res : res;\n        if (objData.Code === 200) {\n          this.Answer = objData.Data;\n          console.log('模拟答题:' + this.Answer);\n        }\n      }\n    },\n\n    websocketsend: function websocketsend(Data) {//发送数据\n      console.log('数据发送：' + JSON.stringify(Data));\n      websock.send(JSON.stringify(Data));\n\n\n    },\n    //重连信息\n    webSocketClientOnerror: function webSocketClientOnerror(e) {\n      this.initWebSocket();\n      console.log(\"websock连接错误,重新连接\", e);\n    },\n    //连接关闭\n    webSocketClientOnclose: function webSocketClientOnclose(e) {\n      console.log(\"websock连接关闭\", e);\n    } },\n\n  created: function created() {\n    this.getGameRoomID(); //获取房间ID\n    this.initWebSocket();\n    this.selectUserInfo();\n    //console.log('api:'+api.RecordList)\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */ \"./node_modules/@dcloudio/uni-app-plus/dist/index.js\")[\"default\"]))\n\n//# sourceURL=uni-app:///pages/play/play.vue?vue&type=script&lang=js&?135c");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!C:\\Users\\luoyile\\Desktop\\XMGAME_APP\\pages\\play\\play.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/luoyile/Desktop/XMGAME_APP/pages/play/play.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=C:/Users/luoyile/Desktop/XMGAME_APP/pages/play/play.vue?vue&type=style&index=0&lang=css&");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\luoyile\\Desktop\\XMGAME_APP\\pages\\play\\play.vue?vue&type=template&id=05354a52&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/luoyile/Desktop/XMGAME_APP/pages/play/play.vue?vue&type=template&id=05354a52& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"view\", { staticClass: \"play_view\" }, [\n    _c(\"view\", { staticClass: \"zhu\" }, [\n      _c(\"view\", { staticClass: \"play_view1\" }, [\n        _vm._v(\n          _vm._s(_vm.TopIndex + 1) + \" / \" + _vm._s(_vm.getTopicList.length)\n        )\n      ]),\n      _vm._m(0),\n      _c(\"view\", [\n        _c(\"image\", {\n          staticClass: \"play_img\",\n          attrs: { src: \"../../static/img/body.png\" }\n        }),\n        _c(\"view\", { staticStyle: {} }, [\n          _vm._v(\"积分:\" + _vm._s(_vm.userInfo.Integral))\n        ])\n      ])\n    ]),\n    _c(\n      \"view\",\n      { staticClass: \"play_view4\" },\n      [\n        _c(\"view\", [_vm._v(\"题目类型\")]),\n        _c(\"view\", [\n          _c(\"view\", { staticClass: \"play_view5\" }, [\n            _vm._v(_vm._s(_vm.getTopicList[_vm.TopIndex].GenreName))\n          ])\n        ]),\n        _c(\n          \"view\",\n          { staticClass: \"play_view6\" },\n          [\n            _c(\"label\", { staticClass: \"play_view7\" }, [\n              _vm._v(_vm._s(_vm.count))\n            ])\n          ],\n          1\n        ),\n        _c(\"view\", { staticClass: \"play_view8\" }, [\n          _c(\"view\", [_vm._v(\"问题：\")]),\n          _c(\"view\", { staticClass: \"play_view9\" }, [\n            _vm._v(_vm._s(_vm.getTopicList[_vm.TopIndex].Topic) + \"=？\")\n          ])\n        ]),\n        _c(\"view\", { staticClass: \"play_view10\" }, [\n          _c(\"view\", [_vm._v(\"答案：\")]),\n          _c(\"input\", {\n            directives: [\n              {\n                name: \"model\",\n                rawName: \"v-model\",\n                value: _vm.answer,\n                expression: \"answer\"\n              }\n            ],\n            staticStyle: { \"border-bottom\": \"10rpx\" },\n            attrs: {\n              type: \"text\",\n              placeholder: \"输入答案\",\n              eventid: \"5c77e440-0\"\n            },\n            domProps: { value: _vm.answer },\n            on: {\n              input: function($event) {\n                if ($event.target.composing) {\n                  return\n                }\n                _vm.answer = $event.target.value\n              }\n            }\n          })\n        ]),\n        _c(\n          \"button\",\n          {\n            staticClass: \"bb1\",\n            style: { display: _vm.forbid },\n            attrs: { eventid: \"5c77e440-1\" },\n            on: { click: _vm.isRight }\n          },\n          [_vm._v(\"下一题\")]\n        ),\n        _c(\n          \"button\",\n          {\n            staticStyle: { margin: \"50rpx\" },\n            attrs: { eventid: \"5c77e440-2\" },\n            on: { click: _vm.over }\n          },\n          [_vm._v(\"结束游戏\")]\n        )\n      ],\n      1\n    )\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"view\", { staticClass: \"play_view2\" }, [\n      _c(\"text\", { staticClass: \"play_text\" }, [_vm._v(\"玩家\")])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=C:/Users/luoyile/Desktop/XMGAME_APP/pages/play/play.vue?vue&type=template&id=05354a52&");

/***/ }),

/***/ "C:\\Users\\luoyile\\Desktop\\XMGAME_APP\\main.js?{\"page\":\"pages%2Fplay%2Fplay\"}":
/*!**********************************************************************************!*\
  !*** C:/Users/luoyile/Desktop/XMGAME_APP/main.js?{"page":"pages%2Fplay%2Fplay"} ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ \"C:\\\\Users\\\\luoyile\\\\Desktop\\\\XMGAME_APP\\\\pages.json\");\nvar _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ \"./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js\"));\nvar _play = _interopRequireDefault(__webpack_require__(/*! ./pages/play/play.vue */ \"C:\\\\Users\\\\luoyile\\\\Desktop\\\\XMGAME_APP\\\\pages\\\\play\\\\play.vue\"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\nPage((0, _mpvuePageFactory.default)(_play.default));\n\n//# sourceURL=C:/Users/luoyile/Desktop/XMGAME_APP/main.js?%7B%22page%22:%22pages%252Fplay%252Fplay%22%7D");

/***/ }),

/***/ "C:\\Users\\luoyile\\Desktop\\XMGAME_APP\\pages\\play\\play.vue":
/*!***************************************************************!*\
  !*** C:/Users/luoyile/Desktop/XMGAME_APP/pages/play/play.vue ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _play_vue_vue_type_template_id_05354a52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./play.vue?vue&type=template&id=05354a52& */ \"C:\\\\Users\\\\luoyile\\\\Desktop\\\\XMGAME_APP\\\\pages\\\\play\\\\play.vue?vue&type=template&id=05354a52&\");\n/* harmony import */ var _play_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./play.vue?vue&type=script&lang=js& */ \"C:\\\\Users\\\\luoyile\\\\Desktop\\\\XMGAME_APP\\\\pages\\\\play\\\\play.vue?vue&type=script&lang=js&\");\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _play_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _play_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _play_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./play.vue?vue&type=style&index=0&lang=css& */ \"C:\\\\Users\\\\luoyile\\\\Desktop\\\\XMGAME_APP\\\\pages\\\\play\\\\play.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _play_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _play_vue_vue_type_template_id_05354a52___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _play_vue_vue_type_template_id_05354a52___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"C:/Users/luoyile/Desktop/XMGAME_APP/pages/play/play.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=C:/Users/luoyile/Desktop/XMGAME_APP/pages/play/play.vue");

/***/ }),

/***/ "C:\\Users\\luoyile\\Desktop\\XMGAME_APP\\pages\\play\\play.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** C:/Users/luoyile/Desktop/XMGAME_APP/pages/play/play.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./play.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\\\Users\\\\luoyile\\\\Desktop\\\\XMGAME_APP\\\\pages\\\\play\\\\play.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=uni-app:///pages/play/play.vue?vue&type=script&lang=js&?cc28");

/***/ }),

/***/ "C:\\Users\\luoyile\\Desktop\\XMGAME_APP\\pages\\play\\play.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************!*\
  !*** C:/Users/luoyile/Desktop/XMGAME_APP/pages/play/play.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./play.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!C:\\\\Users\\\\luoyile\\\\Desktop\\\\XMGAME_APP\\\\pages\\\\play\\\\play.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=C:/Users/luoyile/Desktop/XMGAME_APP/pages/play/play.vue?vue&type=style&index=0&lang=css&");

/***/ }),

/***/ "C:\\Users\\luoyile\\Desktop\\XMGAME_APP\\pages\\play\\play.vue?vue&type=template&id=05354a52&":
/*!**********************************************************************************************!*\
  !*** C:/Users/luoyile/Desktop/XMGAME_APP/pages/play/play.vue?vue&type=template&id=05354a52& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_template_id_05354a52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./play.vue?vue&type=template&id=05354a52& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\\\Users\\\\luoyile\\\\Desktop\\\\XMGAME_APP\\\\pages\\\\play\\\\play.vue?vue&type=template&id=05354a52&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_template_id_05354a52___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Working_procedure_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_template_id_05354a52___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=C:/Users/luoyile/Desktop/XMGAME_APP/pages/play/play.vue?vue&type=template&id=05354a52&");

/***/ })

},[["C:\\Users\\luoyile\\Desktop\\XMGAME_APP\\main.js?{\"page\":\"pages%2Fplay%2Fplay\"}","common/runtime","common/vendor"]]]);
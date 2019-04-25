var websock = null;
var serverIp = '127.0.0.1' 
var serverPort = '4000'; //webSocket连接端口


export  function webSocketClient() {
var wsUrl = 'ws://' + serverIp + ':' + serverPort
   var  ws = new WebSocket(wsUrl)
   return ws
}


/***
服务端接收前台的数据并处理与分发
***/


var WebSocketServer = require('ws').Server,   //起动服务
 wss = new WebSocketServer({ port: 8080 });   //监听端口  
var msg;

 //定义事件
wss.on('connection', function (ws) {

    var send = function (data) {

        try {
            ws.send(JSON.stringify(data));
            console.log('发送并序列化', JSON.stringify(data));
        } catch (ex) {
            console.log(ex);
            ws.send(data);
        }
    };

    ws.on('message', function (message) {

        setInterval(function () {
           var y = Math.floor(Math.random() * 1000);
            send({ data:y});
        }, 1000);
       
    });
});

console.log('起动成功!');


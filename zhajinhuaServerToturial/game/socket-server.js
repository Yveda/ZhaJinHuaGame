//服务器代码
var Socket = require('socket.io');
var Room = require('./room');
const SocketServer = function (server) {
    var that = Socket(server);
    //房间列表
    var _roomList = [];
    that.on("connection",function (socket) {
        console.log("a user connection");
        //玩家注册的消息
        socket.on("login",function (uid) {
            console.log("玩家注册" + uid);
            //他最后一个房间的人数是否超过6个人 ，每个房间人数至多有6个玩家
            if (_roomList[_roomList.length-1].getPlayerCount() > 6 {
                //超过6个人的话重新创建一个房间
                _roomList.push(Room());              
            }
            //房间创建好之后把玩家加到房间那边，创建一个player，前提是一个socket
            _roomList[_roomList.length - 1].createPlayer(uid,socket);
        });        
    })
    return that;
}
module.exports = SocketServer;
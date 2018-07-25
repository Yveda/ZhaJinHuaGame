
const Player = require('./player');
const Room = function () {
    var that = {};
    //每个房间里面有这个数组来管理玩家
    var _playerList = [];
    //将创建玩家的方法实现，参数是socket
    that.createPlayer = function (socket) {

    }
    //这里有getPlayerCount方法也要把它实现
    that.getPlayerCount = function () {

    }
    return that;
}

module.export = Room;
var Socket = require('socket.io');
const SocketServer = function (server) {
    var that = Socket(server);
    return that;
}
module.exports = SocketServer;
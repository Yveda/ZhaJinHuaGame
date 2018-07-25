const global = require('./global');
cc.Class({
    extends: cc.Component,

    properties: {
       
    },
    onLoad: function () {
        //onLoad的时候连接服务器
        global.socket = io("localhost:3000");
    },
    start () {

    },

    // update (dt) {},
});

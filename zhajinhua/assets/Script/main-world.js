

cc.Class({
    extends: cc.Component,

    properties: {
       edit_box: {
           default: null,
           type: cc.EditBox
       }
    },

    // LIFE-CYCLE CALLBACKS:

    buttonClick: function(event,customData) {
        console.log("button click = " + customData);
        console.log("edit box string = " + this.edit_box.string);
    },
    start () {

    },

    // update (dt) {},
});

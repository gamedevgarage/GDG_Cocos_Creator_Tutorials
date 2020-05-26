

cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad () {

        window.Test_Body = this.node.getComponent(cc.RigidBody);

    },


});

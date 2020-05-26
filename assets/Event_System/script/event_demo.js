

cc.Class({
    extends: cc.Component,

    properties: {
    },


    Emit_Red(){
        this.node.emit("RED");
    },

    Emit_Green(){
        this.node.emit("GREEN");
    }

});

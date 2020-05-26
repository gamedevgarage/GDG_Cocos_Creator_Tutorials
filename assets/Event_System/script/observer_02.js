

cc.Class({
    extends: cc.Component,

    properties: {
        Subject_Node:cc.Node,
    },


    onLoad () {

        // this.Subject_Node.on("GREEN",this.Become_Green,this);
        this.Subject_Node.on("RED",this.Become_Red,this);

    },

    Become_Red(){
        this.node.color = cc.color(255,0,0,255);
    },

    Become_Green(){
        this.node.color = cc.color(0,255,0,255);
    }

});



cc.Class({
    extends: cc.Component,

    properties: {
        Animation_Node: cc.Animation,
    },


    Play_Walk(){
        this.Animation_Node.play("Walk");
    },

    Play_Cheer(){
        this.Animation_Node.playAdditive("Cheer");
    },

    
});

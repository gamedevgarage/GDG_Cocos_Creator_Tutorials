

cc.Class({
    extends: cc.Component,

    properties: {
       
        Color_Box:{
            default:null,
            type:cc.Node,
        },

    },

    YESSSSS(){
        this.Color_Box.color = cc.color(0,255,0);
    },


    NOOOOOOO(){
        this.Color_Box.color = cc.color(255,0,0);
    }

});




cc.Class({
    extends: cc.Component,

    properties: {

        Bar_Sprite:cc.Sprite,

    },

    onLoad () {
        this.progress = 0;

        this.Bar_Sprite.fillRange = this.progress;
    },


    Fill_The_Bar(){

        this.progress += 0.1;

        this.Bar_Sprite.fillRange = this.progress;

    },

});

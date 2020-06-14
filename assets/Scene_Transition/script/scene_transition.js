

cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad () {
        cc.game.addPersistRootNode(this.node);
    },

    Load_Next_Scene(){

        cc.tween(this.node)
          .to(1, {position: cc.v2(640,360) },{easing: 'cubicInOut'})
          .call(() => { this.Load_Scene(); })
          .to(1, {position: cc.v2(-640,360) },{easing: 'cubicInOut'})
          .start();

    },

    Load_Scene(){
        cc.director.loadScene("Scene_Trans_02");
    }


});

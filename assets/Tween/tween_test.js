
cc.Class({
    extends: cc.Component,

    properties: {

    },

    start () {

        cc.tween(this.node)
        .repeatForever(
            cc.tween().to(1,{scale: 2 , color: cc.color(255,0,0,255) }, {easing: "quadInOut"})
                      .call(() => { cc.log('EXPLOSION!') })
                      .to(1,{scale: 0.7 , color: cc.color(255,255,255,255)}, {easing: "quadInOut"})
        )
        .start();

    },

});

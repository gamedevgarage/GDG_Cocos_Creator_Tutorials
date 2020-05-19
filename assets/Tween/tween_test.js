
cc.Class({
    extends: cc.Component,

    properties: {

    },


    start () {

        cc.tween(this.node)
            .to(3, {scale: 2, position: cc.v3(100, 100, 100)})
            .by(3, {scale: 3, position: cc.v3(200, 200, 200)}, {easing: 'sineOutIn'})
            .tag(0).start();
            
    },

});

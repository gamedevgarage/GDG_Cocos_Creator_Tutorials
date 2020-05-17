

cc.Class({
    extends: cc.Component,

    properties: {
        Touch_Input: require("touch_input"),
    },

    update (dt) {

        let pos = this.node.getPosition();
        pos.addSelf( this.Touch_Input.Joystick_Vector.mul( dt * 3 ) );    
        
        this.node.setPosition(pos);

    },

});

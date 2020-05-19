

cc.Class({
    extends: cc.Component,

    properties: {

        Player_Node:cc.Node,

        BG_Layer_Back:cc.Node,

        BG_Layer_Mid:cc.Node,

    },


    update (dt) {

        let target_position = this.Player_Node.getPosition();
        target_position.y = cc.misc.clampf(target_position.y,0,220);

        let current_position = this.node.getPosition();

        current_position.lerp( target_position , 0.1 , current_position );

        this.node.setPosition(current_position);

        this.BG_Layer_Back.setPosition(current_position.x/2,current_position.y/2);

        this.BG_Layer_Mid.setPosition(current_position.x/4,current_position.y/4);

    },


});

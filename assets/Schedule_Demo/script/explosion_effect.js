

cc.Class({
    extends: cc.Component,

    properties: {

    },


    onBeginContact(contact, selfCollider, otherCollider){
        let bomb_control = otherCollider.node.getComponent("bomb_control_2");
        if(bomb_control){
            bomb_control.Explode();
        }
    }
});

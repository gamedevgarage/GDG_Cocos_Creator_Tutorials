
cc.Class({
    extends: cc.Component,

    properties: {

    },

    Remove_Node(){
        this.node.destroy();
    },

    onBeginContact(contact, selfCollider, otherCollider) {

        if(otherCollider.node.player_control){
            this.node.getComponent(cc.Animation).play();
        }

    },

});

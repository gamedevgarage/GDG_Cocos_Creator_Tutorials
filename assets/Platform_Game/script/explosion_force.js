

cc.Class({
    extends: cc.Component,

    properties: {

        Bomb_Root:cc.Node,

    },

    onBeginContact(contact, selfCollider, otherCollider) {

        if(otherCollider.body.type === cc.RigidBodyType.Dynamic && otherCollider.node !== this.Bomb_Root ){

            let other_pos = otherCollider.node.getPosition();
            let self_pos = this.Bomb_Root.getPosition();

            let force_vector = other_pos.sub(self_pos);

            force_vector.normalizeSelf();

            force_vector.mulSelf(200000);

            otherCollider.body.applyForceToCenter(force_vector);


        }


    },


});

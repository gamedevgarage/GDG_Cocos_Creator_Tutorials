
cc.Class({
    extends: cc.Component,

    properties: {
        Explosion_Node:cc.Node,
    },

    onLoad () {},

    Explode(){
        this.scheduleOnce(this.Explode_Function,0.15);
    },

    Explode_Function(){
        this.Explosion_Node.parent = this.node.parent;
        this.Explosion_Node.setPosition(this.node.getPosition());
        this.Explosion_Node.active = true;
        this.node.destroy();
    },

    onPostSolve(contact, selfCollider, otherCollider) {
        let impulse = contact.getImpulse().normalImpulses;
        if (impulse > 2000){
            this.Explode_Function();
        }
    },

});



cc.Class({
    extends: cc.Component,

    properties: {
        Debug_Draw:false,
    },

    onLoad () {

        cc.director.getPhysicsManager().enabled = true;

        if(this.Debug_Draw){
            var Bits = cc.PhysicsManager.DrawBits;
            cc.director.getPhysicsManager().debugDrawFlags = Bits.e_aabbBit |
            Bits.e_pairBit |
            Bits.e_centerOfMassBit |
            Bits.e_jointBit |
            Bits.e_shapeBit;
        }
    },

});

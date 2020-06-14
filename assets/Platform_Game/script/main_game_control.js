
import camera_control from "./camera_control";

cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad () {
        let physics_manager = cc.director.getPhysicsManager()
        physics_manager.enabled = true;
        physics_manager.gravity = cc.v2 (0, -2000);

        


        // cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit |
        // cc.PhysicsManager.DrawBits.e_pairBit |
        // cc.PhysicsManager.DrawBits.e_centerOfMassBit |
        // cc.PhysicsManager.DrawBits.e_jointBit |
        // cc.PhysicsManager.DrawBits.e_shapeBit
        // ;
    },

});

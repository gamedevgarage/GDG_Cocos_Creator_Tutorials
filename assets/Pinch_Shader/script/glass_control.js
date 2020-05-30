

cc.Class({
    extends: cc.Component,

    editor:{
        executeInEditMode:true,
    },

    properties: {

        My_Sprite: cc.Sprite,

        Effect_Ratio: 1.4,

    },


    onLoad () {
        if(!this.My_Sprite) return;
        this.FX_Material = this.My_Sprite.getMaterial(0);
        let texture_ratio = this.My_Sprite.node.height/this.My_Sprite.node.width;
        this.FX_Material.setProperty("Width_Scale",texture_ratio,0);
    },


    update (dt) {
        if(!this.My_Sprite) return;
        let fx_pos = this.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
        fx_pos = this.My_Sprite.node.convertToNodeSpaceAR(fx_pos);

        fx_pos.x = fx_pos.x/this.My_Sprite.node.width;
        fx_pos.y = fx_pos.y/this.My_Sprite.node.height;

        this.FX_Material.setProperty("Effect_Position",[fx_pos.x,fx_pos.y],0);
        this.FX_Material.setProperty("Effect_Ratio",this.Effect_Ratio,0);

    },


});

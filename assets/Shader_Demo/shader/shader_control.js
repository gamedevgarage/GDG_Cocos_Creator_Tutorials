

cc.Class({
    extends: cc.Component,
    
    editor:{
        executeInEditMode:true,
    },

    properties: {
        Wipe:{
            default:0,
            range:[0,360],
            notify(){
                this.Update_Values();
            }
        },
    },

    onLoad () {

        // Dynamic Atlas changes the uv values in shader Disable it to use uv values
        // cc.dynamicAtlasManager.enabled = false;
        // or mark texture as unpackable
        // this.Sprite_Frame._texture.packable = false;
        // or use technique below to fix values in shader

        this.Sprite = this.node.getComponent(cc.Sprite);
        this.Sprite_Frame = this.Sprite.spriteFrame;
        
        this.Material = this.Sprite.getMaterial(0);
        
        window.sprt = this.Sprite;
       
        this.Update_Values();
    },


    Update_Values(){        
        this.Material.setProperty("rx",this.Sprite_Frame._rect.x,0);
        this.Material.setProperty("ry",this.Sprite_Frame._rect.y,0);
        this.Material.setProperty("rw",this.Sprite_Frame._rect.width,0);
        this.Material.setProperty("rh",this.Sprite_Frame._rect.height,0);
        this.Material.setProperty("tw",this.Sprite_Frame._texture.width,0);
        this.Material.setProperty("th",this.Sprite_Frame._texture.height,0);
        this.Material.setProperty("wipe",this.Wipe,0);
    }

});

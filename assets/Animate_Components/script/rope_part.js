

cc.Class({
    extends: cc.Component,

    properties: {
        Anchor_Position:{
            default:1,
            range:[0,1],
            notify(){
                if(CC_EDITOR)return;
                this.Update_Anchor();
            }
        },
        Pos_Short:0,
        Pos_Long:24,
    },

    onLoad(){
        this.Joints = this.node.getComponentsInChildren(cc.RevoluteJoint);    
        this.Joints.reverse();
    },

    Update_Anchor(){
        
        for(let i = 1 ; i < this.Joints.length ; i++ ){
            
            let part_count = this.Joints.length;

            let ap  = cc.misc.clamp01((this.Anchor_Position-i*(1/part_count))*part_count);

            let anchor = cc.misc.lerp(this.Pos_Short,this.Pos_Long,ap);
            this.Joints[i].anchor.y = anchor;
            this.Joints[i].connectedAnchor.y = -anchor;
            this.Joints[i].apply();
            this.Joints[i].node.height = cc.misc.lerp( anchor*2 , this.Pos_Long*2+12, 0.8);
        }

    }

    
});

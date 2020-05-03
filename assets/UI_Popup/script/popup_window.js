
cc.Class({
    extends: cc.Component,

    properties: {

        Yes_Event_Handler:{
            default:null,
            type:cc.Component.EventHandler,
        },

        No_Event_Handler:{
            default:null,
            type:cc.Component.EventHandler,
        },

    },

    Show_Window(){
        this.node.active = true;
        this.node.opacity = 0;
        this.node.scale = 0.2;
        cc.tween(this.node)
        .to(0.5,{ scale:1, opacity:255 },{ easing: "quartInOut" })
        .start();
    },

    Hide_Window(){
        cc.tween(this.node)
        .to(0.5,{ scale:0.2, opacity:0 },{ easing: "quartInOut" })
        .call(() => { this.node.active = false; })
        .start();
    },

    Yes_Clicked(){
        // DO YES ACTION
        if(this.Yes_Event_Handler){
            this.Yes_Event_Handler.emit();
        }

        this.Hide_Window();
    },

    No_Clicked(){
        // DO NO ACTION
        if(this.No_Event_Handler){
            this.No_Event_Handler.emit();
        }
        this.Hide_Window();
    },


});

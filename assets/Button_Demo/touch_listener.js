

cc.Class({
    extends: cc.Component,

    properties: {
        My_Button:cc.Button,
    },


    onLoad () {

        this.node.on(cc.Node.EventType.TOUCH_START,this.Touch_Start,this);

        this.My_Button._onTouchBegan = function (event) {
            if (!this.interactable || !this.enabledInHierarchy) return;
    
            this._pressed = true;
            this._updateState();
            // event.stopPropagation();
        };

    },

    Touch_Start(event){

        let location = event.getLocation();

        cc.log("X: " + location.x + " - Y: " + location.y);

    },

});

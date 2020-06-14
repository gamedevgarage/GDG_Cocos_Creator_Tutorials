

cc.Class({
    extends: cc.Component,

    properties: {
        Camera_Base:cc.Node,
    },

    onLoad () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this, true );
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove , this , true );
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this, true);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancelled, this, true);

        this.touch_moved = false;
        this.pos_offset = cc.v2();
    },

    onTouchBegan(event){
        this.touch_moved = false;
        this.stopPropagationIfTargetIsMe(event);
    },

    onTouchEnded(event){
        if (this.touch_moved) {
            event.stopPropagation();
        } else {
            this.stopPropagationIfTargetIsMe(event);
        }
    },

    onTouchCancelled(event){
        this.stopPropagationIfTargetIsMe(event);
    },

    onTouchMove(event){

        let touches = event.getTouches();
            
        let touch1 = touches[0];
        let delta1 = touch1.getDelta();

        this.pos_offset.x = delta1.x;
        this.pos_offset.y = delta1.y;

        let cam_pos = this.Camera_Base.getPosition();

        cam_pos.x = cam_pos.x - this.pos_offset.x;
        cam_pos.z = cam_pos.z + this.pos_offset.y;

        this.Camera_Base.setPosition(cam_pos);

        this.Cancel_Inner_Touch(event);
        this.stopPropagationIfTargetIsMe(event);

    },

    stopPropagationIfTargetIsMe(event){
        if(event.eventPhase === cc.Event.AT_TARGET && event.target === this.node) {
            event.stopPropagation();
        }
    },

    Cancel_Inner_Touch(event){
        var touch = event.touch;
        let p1 = touch.getLocation();
        var deltaMove = p1.sub(touch.getStartLocation());
        if (deltaMove.mag() > 7) {
            if (!this.touch_moved && event.target !== this.node) {
                // Simulate touch cancel for target node
                var cancelEvent = new cc.Event.EventTouch(event.getTouches(), event.bubbles);
                cancelEvent.type = cc.Node.EventType.TOUCH_CANCEL;
                cancelEvent.touch = event.touch;
                cancelEvent.simulate = true;
                event.target.dispatchEvent(cancelEvent);
                this.touch_moved = true;
            }
        }
    },

});



cc.Class({
    extends: cc.Component,

    properties: {

        Joystick_Ball: cc.Node,
        Joystick_Vector: cc.v2(),
        Joystick_Max: 100,

    },

    onLoad(){
        this.node.on(cc.Node.EventType.TOUCH_START, this.Joystick_Touch_Start, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.Joystick_Touch_Move, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.Joystick_Touch_End, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.Joystick_Touch_End, this);
    },


    Joystick_Touch_Start(event){

        let touch_pos = event.getLocation();
        let local_touch_pos = this.node.convertToNodeSpaceAR(touch_pos);
        this.Limit_joystick_Vector(local_touch_pos);
        this.Set_Joystick_Ball_Position(local_touch_pos);
        this.Joystick_Vector = local_touch_pos;

    },

    Joystick_Touch_Move(event){

        let touch = event.getTouches()[0];

        let touch_pos = touch.getLocation();
        let local_touch_pos = this.node.convertToNodeSpaceAR(touch_pos);
        this.Limit_joystick_Vector(local_touch_pos);
        this.Set_Joystick_Ball_Position(local_touch_pos);
        this.Joystick_Vector = local_touch_pos;

    },

    Joystick_Touch_End(){
        this.Joystick_Vector = cc.Vec2.ZERO;
        this.Set_Joystick_Ball_Position(cc.Vec2.ZERO);
    },

    Set_Joystick_Ball_Position(pos){
        this.Joystick_Ball.setPosition(pos);
    },

    Limit_joystick_Vector(joystick_vector){

        let input_mag = joystick_vector.mag();
        if(input_mag > this.Joystick_Max){
            joystick_vector.mulSelf(this.Joystick_Max/input_mag);
        }

    },

});

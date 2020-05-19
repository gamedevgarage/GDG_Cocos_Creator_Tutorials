
cc.Class({
    extends: cc.Component,

    properties: {

        Bomb_Prefab:cc.Prefab,

    },

    onLoad () {

        window.test_comp = this;

        this.node.player_control = this;

        // Rigid Body
        this.Rigid_Body = this.node.getComponent(cc.RigidBody);

        // Key events
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyPressed, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyReleased, this);


        this.Direction = 0;
        this.On_The_Ground = false;
        this.Velocity_Max_X = 400;
        this.Walk_Force = 15000;
        this.Jump_Force = 500000;

    },

    onKeyPressed(event){

        let key_code = event.keyCode;

        switch(key_code){

            case cc.macro.KEY.left:
                this.Direction = -1;
            break;

            case cc.macro.KEY.right:
                this.Direction = 1;
            break;

            case cc.macro.KEY.up:
                if(this.On_The_Ground){
                    this.Rigid_Body.applyForceToCenter( cc.v2(0,this.Jump_Force) , true );
                    this.On_The_Ground = false;
                }
            break;

            case cc.macro.KEY.space:
                this.Throw_Bomb();
            break;

        }

    },

    onKeyReleased(event){

        let key_code = event.keyCode;

        switch(key_code){

            case cc.macro.KEY.left:
            case cc.macro.KEY.right:
                this.Direction = 0;
            break;

        }
    },

    onBeginContact(contact, selfCollider, otherCollider){
        if(selfCollider.tag === 2){
            this.On_The_Ground = true;
        }
    },

    update(dt){

        if( ( this.Direction > 0 && this.Rigid_Body.linearVelocity.x < this.Velocity_Max_X) || (this.Direction < 0 && this.Rigid_Body.linearVelocity.x > -this.Velocity_Max_X) ){
            this.Rigid_Body.applyForceToCenter( cc.v2(this.Direction*this.Walk_Force,0) , true );
        }

    },

    Throw_Bomb(){

        let bomb = cc.instantiate(this.Bomb_Prefab);

        bomb.parent = this.node.parent;
        let pos = this.node.getPosition();
        pos.x += 70;
        bomb.setPosition(pos);

        let rb = bomb.getComponent(cc.RigidBody);

        rb.applyForceToCenter(cc.v2(140000,200000),true);

    }


});

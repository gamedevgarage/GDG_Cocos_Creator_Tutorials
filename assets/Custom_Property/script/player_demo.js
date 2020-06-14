




var SKIN_TYPE = cc.Enum({
    RED:-1,
    GREEN:-1,
    BLUE:-1,
});

var SPECIAL_ATTACK_TYPE = cc.Enum({
    FIRE:-1,
    SNOW:-1,
    WATER:-1,
    ICE:-1,
});


var PLAYER_INFO = cc.Class({

    name: "PLAYER_INFO",

    properties:{

        Name: "Player Name",

        Skin:{
            default: SKIN_TYPE.RED,
            type:SKIN_TYPE,
        },

        Special_Attack:{
            default: SPECIAL_ATTACK_TYPE.SNOW,
            type:SPECIAL_ATTACK_TYPE,
        },

        Max_Speed: cc.v2(100,100),

    }

});


cc.Class({
    extends: cc.Component,

    properties: {
       Player_Info:{
           default:null,
           type:PLAYER_INFO,
       }

    },


    onLoad () {

        cc.log("Special_Attack: " +  Object.keys(SPECIAL_ATTACK_TYPE)[ this.Player_Info.Special_Attack ]    );

    },

});


const {ccclass, property} = cc._decorator;


interface Elamet {
    comes_from: string;
}

function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);


@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        (<any>this.node).elamet = "Hadi Bakalım!";

    }

    start () {

        let kk:Elamet = {
            comes_from : "ÇİN"
        }

        this.Check_Elamet_Origin(kk);

    }

    Check_Elamet_Origin(el : Elamet){
        cc.log("This elamit is coming from: " + el.comes_from);
    }

}

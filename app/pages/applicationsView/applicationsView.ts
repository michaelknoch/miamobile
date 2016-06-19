import {Component} from "@angular/core";
import {NavController, NavParams} from 'ionic-angular';
import {SystemPicker} from 'mia-distributed/comp/systemList/systemPicker/systemPicker.comp'
import {Graph} from "mia-distributed/comp/graph/graph.comp";

@Component({
    templateUrl: 'build/pages/graphView/graphView.html',
    directives: [Graph]
})
export class GraphView {

    constructor(private nav: NavController, navParams: NavParams) {
    }

}

import {Component} from "@angular/core";
import {NavController, NavParams} from 'ionic-angular';
import {SystemPicker} from 'mia-distributed/comp/systemList/systemPicker/systemPicker.comp'
import {ApplicationList} from "mia-distributed/comp/applicationList/applicationList.comp";

@Component({
    templateUrl: 'build/pages/applicationList/applicationList.html',
    directives: [ApplicationList]
})
export class GraphView {

    constructor(private nav: NavController, navParams: NavParams) {
    }

}

import {Component} from "@angular/core";
import {NavController, NavParams} from 'ionic-angular';
import {SystemPicker} from 'mia-distributed/comp/systemList/systemPicker/systemPicker.comp'
import {Dashboard} from "mia-distributed/comp/dashboard/comp";

@Component({
    templateUrl: 'build/pages/systemList/systemList.html',
    directives: [SystemPicker]
})
export class SystemList {

    constructor(private nav: NavController, navParams: NavParams) {
    }

    handleSystemPick(system) {
        this.nav.push(Dashboard);
    }
}

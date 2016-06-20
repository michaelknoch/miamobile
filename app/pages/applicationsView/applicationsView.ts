import {Component} from "@angular/core";
import {NavController, NavParams} from 'ionic-angular';
import {SystemPicker} from 'mia-distributed/comp/systemList/systemPicker/systemPicker.comp'
import {ApplicationList} from "mia-distributed/comp/applications/applicationList/applicationList.comp";

@Component({
    templateUrl: 'build/pages/applicationsView/applicationsView.html',
    directives: [ApplicationList]
})
export class ApplicationsView {

    constructor(private nav: NavController, navParams: NavParams) {
    }

}

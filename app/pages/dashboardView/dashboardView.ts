import {Component} from "@angular/core";
import {NavController, NavParams} from 'ionic-angular';
import {Dashboard} from "mia-distributed/comp/dashboard/dashboard.comp";

@Component({
    templateUrl: 'build/pages/dashboardView/dashboardView.html',
    directives: [Dashboard]
})
export class DashboardView {

    constructor(private nav: NavController, navParams: NavParams) {
    }

}

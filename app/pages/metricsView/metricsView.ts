import {Component} from "@angular/core";
import {NavController, NavParams} from 'ionic-angular';
import {SystemPicker} from 'mia-distributed/comp/systemList/systemPicker/systemPicker.comp'
import {Dashboard} from "mia-distributed/comp/dashboard/comp";
import {Metrics} from "mia-distributed/comp/metrics/metrics.comp";

@Component({
    templateUrl: 'build/pages/metricsView/metricsView.html',
    directives: [Metrics]
})
export class MetricsView {

    constructor(private nav: NavController, navParams: NavParams) {
    }

    handleSystemPick(system) {
        this.nav.push(Dashboard);
    }
}

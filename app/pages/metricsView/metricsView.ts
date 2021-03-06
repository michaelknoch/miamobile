import {Component} from "@angular/core";
import {NavController, NavParams} from 'ionic-angular';
import {SystemPicker} from 'mia-distributed/comp/systemList/systemPicker/systemPicker.comp'
import {Metrics} from "mia-distributed/comp/metrics/metrics.comp";

@Component({
    templateUrl: 'build/pages/metricsView/metricsView.html',
    directives: [Metrics]
})
export class MetricsView {

    constructor(private nav: NavController, navParams: NavParams) {
    }
}

import {Component, OnInit} from '@angular/core';
import {mock2} from "mia-distributed/comp/trace/trace-mock";
import {NavController} from "ionic-angular/index";
import {TraceView} from "../traceView/traceView.comp";

@Component({
    selector: 'trace-list',
    templateUrl: 'build/pages/traceList/traceList.html',
    styles: [`.trace {
    padding: 15px;
    background-color: $green_opac;
    margin-top: 10px;
    margin-bottom: 10px;
    border-left: 2px solid $green;
}`]
})

export class TraceList {

    private traces = mock2;

    constructor(private navCtrl: NavController) {
    }

    private navigate(id) {
        this.navCtrl.push(TraceView, {
            traceId: id
        });
    }

}

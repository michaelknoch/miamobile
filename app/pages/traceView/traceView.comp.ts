import {Component} from '@angular/core'
import {Trace} from "mia-distributed/comp/trace/trace/trace.comp";
import {NavController} from "ionic-angular";
import {NavParams} from "ionic-angular";

@Component({
    selector: 'trace-view',
    directives: [Trace],
    templateUrl: 'build/pages/traceView/traceView.html'
})

export class TraceView {

    private id;

    constructor(private params: NavParams) {
        this.id = params.get("traceId");
    }

}

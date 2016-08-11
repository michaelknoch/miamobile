import {Component} from "@angular/core";
import {NavController, NavParams} from 'ionic-angular';
import {Journal} from "mia-distributed/comp/journal/journal.comp";

@Component({
    templateUrl: 'build/pages/journalView/journalView.html',
    directives: [Journal]
})
export class JournalView {

    constructor(private nav: NavController, navParams: NavParams) {
    }

}

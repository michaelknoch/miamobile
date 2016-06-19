import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ScientificFactsPage} from '../scientific-facts-page/scientific-facts-page';

import {LoginRegister} from 'mia-distributed/comp/login/loginRegister';

@Component({
    templateUrl: 'build/pages/getting-started/getting-started.html',
    directives: [LoginRegister]
})
export class Login {

    constructor(private _navController: NavController) {
    }

    goToFactsPage() {
        this._navController.push(ScientificFactsPage);
    }
}

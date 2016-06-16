import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ScientificFactsPage} from '../scientific-facts-page/scientific-facts-page';
import {LoginRegister} from 'mia-distributed/comp/login/loginRegister/index.js'
import {UserService} from 'mia-distributed/service/user/user.service.js'

@Component({
    templateUrl: 'build/pages/getting-started/getting-started.html',
    directives: [LoginRegister],
    providers: [UserService]
})
export class GettingStartedPage {

    constructor(private _navController: NavController) {
    }

    goToFactsPage() {
        this._navController.push(ScientificFactsPage);
    }
}

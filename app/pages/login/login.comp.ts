import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {LoginRegister} from 'mia-distributed/comp/login/loginRegister';
import {SystemList} from "../systemList/systemList";

@Component({
    templateUrl: 'build/pages/login/login.html',
    directives: [LoginRegister]
})
export class Login {

    constructor(private _navController: NavController) {
    }

    private loginHandler(data: any) {
        console.info('login success');
        this._navController.push(SystemList);
    }
}

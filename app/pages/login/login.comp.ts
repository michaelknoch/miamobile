import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {LoginRegister} from 'mia-distributed/comp/login/loginRegister';
import {SystemList} from "../systemList/systemList";
import {UserService} from "mia-distributed/sharedServices/user.service";
import {DashboardView} from "../dashboardView/dashboardView";

@Component({
    templateUrl: 'build/pages/login/login.html',
    directives: [LoginRegister],
})
export class Login implements OnInit {

    constructor(private nav: NavController, private _userService: UserService) {
    }

    ngOnInit(): any {

        const localMe:any = this._userService.getLocalMe();
        if (localMe.user.id && localMe.system.id) {
            console.log('found local system, redirecting');
            this.nav.setRoot(DashboardView)

        } else if (!localMe.system.id && localMe.user.id) {
            this.nav.setRoot(SystemList);
        }
    }

    private loginHandler(data: any) {
        console.info('login success');
        this.nav.setRoot(SystemList);
    }
}

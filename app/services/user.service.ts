import {Injectable} from '@angular/core';
import {Http, Response, HTTP_PROVIDERS} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Config} from "mia-distributed/app.config";
import {IUserService} from "mia-distributed/sharedServices/user.service.interface";

@Injectable()
export class MobileUserService implements IUserService {

    private currentSystem: any = {
        id: '',
        name: ''
    };

    private currentUser: any = {
        id: '',
        name: ''
    };

    constructor(private http: Http) {
        this.currentUser.id = localStorage.getItem('currentUserId') || '';
        this.currentUser.name = localStorage.getItem('currentUserName') || '';

        this.currentSystem.id = localStorage.getItem('currentSystemId') || '';
        this.currentSystem.name = localStorage.getItem('currentSystemName') || '';
    }

    public login(mail: String, password: String) {
        return this.http.post(Config.BASEPATH + '/users/login', JSON.stringify({
                mail: mail,
                password: password
            }))
            .map((res) => {
                let data = res.json();
                this.currentUser.name = data.name;
                this.currentUser.id = data._id;
                this.persistUser();
                return data;
            })
    }

    public logout() {
        this.currentUser.id = '';
        return this.http.get(Config.BASEPATH + '/users/logout')
            .map(res => {
                this.currentUser.name = '';
                this.currentUser.id = '';
                this.persistUser();
                return res.json()
            })
    }

    public register(mail: String, password: String, name: String, surname: String) {
        return this.http.post(Config.BASEPATH + '/users', JSON.stringify({
                mail: mail,
                password: password,
                name: name,
                surname: surname
            }))
            .map(res => {
                let data = res.json();
                this.currentUser.name = data.name;
                this.currentUser.id = data._id;
                this.persistUser();
                return data;
            })
    }

    public getLocalMe() {
        return {
            user: this.currentUser,
            system: this.currentSystem
        }
    }

    public setUser(user: any) {
        this.currentUser = user;
        this.persistUser()
    }

    public setSystem(system: any) {
        this.currentSystem = system;
        this.persistSystem();
    }

    private persistSystem() {
        localStorage.setItem('currentSystemId', this.currentSystem.id);
        localStorage.setItem('currentSystemName', this.currentSystem.name);
    }

    private persistUser() {
        localStorage.setItem('currentUserId', this.currentUser.id);
        localStorage.setItem('currentUserName', this.currentUser.name);
    }

}

import {Component, OnInit} from '@angular/core'
import {Platform} from 'ionic-angular';
import {NgZone} from '@angular/core';
import {UserService} from "mia-distributed/sharedServices/user.service";
declare var touchid: any;

@Component({
    selector: 'touch-id',
    template: '<div [ngClass]="{active: getLock()}" class="lock"></div>'
})

export class TouchId implements OnInit {

    private lock = false;

    constructor(private ngZone: NgZone, private platform: Platform, private _userService: UserService) {
    }

    ngOnInit() {
        if (typeof touchid === 'undefined') {
            return;
        }

        this.platform.ready().then(() => {
            touchid.checkSupport(() => {
                this.platform.resume.subscribe(data => {
                    if (this._userService.getLocalMe().user.id) {
                        this.lock = true;
                        touchid.authenticate((result) => {
                            console.info('unlock success');
                            this.ngZone.run(() => {
                                this.lock = false;
                            });
                        });
                    }
                });
            });
        });
    }

    private getLock() {
        return this.lock;
    }

}

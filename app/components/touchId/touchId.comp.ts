import {Component, OnInit} from '@angular/core'
import {Platform} from 'ionic-angular';
import {NgZone} from '@angular/core';

declare var touchid: any;

@Component({
    selector: 'touch-id',
    template: '<div [ngClass]="{active: getLock()}" class="lock">{{lock}}, {{getLock()}}</div>'
})

export class TouchId implements OnInit {

    private lock = false;

    constructor(private ngZone: NgZone, private platform: Platform) {
    }

    ngOnInit() {
        this.platform.ready().then(() => {
            console.info('ready');
            touchid.checkSupport(() => {
                console.info('check support');
                this.platform.resume.subscribe(data => {

                    console.info('resume');
                    this.lock = true;

                    touchid.authenticate((result) => {
                        console.info('unlock success');
                        this.ngZone.run(() => {
                            this.lock = false;
                        });
                    });

                });

            });
        });
    }

    private getLock() {
        return this.lock;
    }

}

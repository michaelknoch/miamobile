import {Component, ViewChild, provide} from '@angular/core';
import {App, ionicBootstrap, Platform, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {Login} from './pages/login/login.comp';

import {BrowserXhr} from '@angular/http';

import {LocalStorageService, LocalStorageSubscriber} from 'angular2-localstorage/dist';
import {Dashboard} from "mia-distributed/comp/dashboard/comp";
import {ApplicationList} from "mia-distributed/comp/applicationList/applicationList.comp";
import {Metrics} from "mia-distributed/comp/metrics/metrics.comp";
import {Graph} from "mia-distributed/comp/graph/graph.comp";
import {Settings} from "mia-distributed/comp/settings/comp";
import {SystemService} from "mia-distributed/service/system/system.service";
import {MetricService} from "mia-distributed/service/metric/metric.service";
import {GraphService} from "mia-distributed/service/graph.service";
import {ApplicationService} from "mia-distributed/service/application/application.service";
import {UserService} from "mia-distributed/service/user/user.service";
import {CustomBrowserXhr} from "mia-distributed/service/CustomBrowserXhr";

@Component({
    templateUrl: 'build/app.html'
})
class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = Login;
    pages: Array<{title: string, component: any}>

    constructor(private platform: Platform) {
        this.initializeApp();

        // used for an example of ngFor and navigation
        this.pages = [
            {title: 'Dashboard', component: Dashboard},
            {title: 'Applications', component: ApplicationList},
            {title: 'Metrics', component: Metrics},
            {title: 'Graph', component: Graph},
            {title: 'Settings', component: Settings}
        ];

    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
}

var appPromise = ionicBootstrap(MyApp, [
    LocalStorageService,
    SystemService,
    UserService,
    MetricService,
    GraphService,
    ApplicationService,
    provide(BrowserXhr, {useClass: CustomBrowserXhr})
]);

LocalStorageSubscriber(appPromise);
import {Component, ViewChild, provide} from '@angular/core';
import {App, ionicBootstrap, Platform, Nav} from 'ionic-angular';
import {StatusBar, Keyboard, Splashscreen} from 'ionic-native';
import {Login} from './pages/login/login.comp';
import {BrowserXhr} from '@angular/http';
import {LocalStorageService, LocalStorageSubscriber} from 'angular2-localstorage/dist';
import {SystemService} from "mia-distributed/comp/systemList/system.service";
import {UtilService} from "mia-distributed/sharedServices/util.service";
import {MetricService} from "mia-distributed/sharedServices/metric.service";
import {GraphService} from "mia-distributed/comp/graph/graph.service";
import {ApplicationService} from "mia-distributed/comp/applications/application.service";
import {UserService} from "mia-distributed/sharedServices/user.service";
import {CustomBrowserXhr} from "mia-distributed/sharedServices/CustomBrowserXhr";
import {ApplicationMetaPickerService} from "mia-distributed/comp/applicationMetaPicker/applicationMetaPicker.service";
import {DashboardView} from "./pages/dashboardView/dashboardView";
import {MetricsView} from "./pages/metricsView/metricsView";
import {GraphView} from "./pages/graphView/graphView";
import {ApplicationsView} from "./pages/applicationsView/applicationsView";
import {MobileUserService} from "./services/user.service";

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
            {title: 'Dashboard', component: DashboardView},
            {title: 'Applications', component: ApplicationsView},
            {title: 'Metrics', component: MetricsView},
            {title: 'Graph', component: GraphView}
        ];

    }

    initializeApp() {
        this.platform.ready().then(() => {
            StatusBar.styleDefault();
            Splashscreen.hide();
            Keyboard.hideKeyboardAccessoryBar(false);
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
    provide(UserService, {useClass: MobileUserService}),
    MetricService,
    GraphService,
    ApplicationService,
    ApplicationMetaPickerService,
    UtilService,
    provide(BrowserXhr, {useClass: CustomBrowserXhr})
]);

//LocalStorageSubscriber(appPromise);
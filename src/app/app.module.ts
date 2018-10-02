import {MyApp} from './app.component';
import {Camera} from '@ionic-native/camera';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {StatusBar} from '@ionic-native/status-bar';
import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {ExercisesPage} from "../pages/exercises/exercises";
import {WorkoutsPage} from "../pages/workouts/workouts";
import {InfosPage} from "../pages/infos/infos";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        WorkoutsPage,
        ExercisesPage,
        InfosPage,
        TabsPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        WorkoutsPage,
        ExercisesPage,
        InfosPage,
        TabsPage
    ],
    providers: [
        StatusBar,
        Camera,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}

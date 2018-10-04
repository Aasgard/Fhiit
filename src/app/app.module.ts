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
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from "@angular/fire/auth";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {CreateOrUpdateExerciseComponent} from "../components/modals/create-or-update-exercise/create-or-update-exercise";

export const firebaseConfig = {
    apiKey: "AIzaSyAO1zxLejOssd9fcPZQGl6-GWm0pzIeMG8",
    authDomain: "fhiit-fc957.firebaseapp.com",
    databaseURL: "https://fhiit-fc957.firebaseio.com",
    storageBucket: "fhiit-fc957.appspot.com",
    messagingSenderId: '924664389788'
};

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        WorkoutsPage,
        ExercisesPage,
        CreateOrUpdateExerciseComponent,
        InfosPage,
        TabsPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule,
        AngularFireAuthModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        CreateOrUpdateExerciseComponent,
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

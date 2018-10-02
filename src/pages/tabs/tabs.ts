import {HomePage} from '../home/home';
import {Component} from '@angular/core';
import {ExercisesPage} from "../exercises/exercises";
import {WorkoutsPage} from "../workouts/workouts";
import {InfosPage} from "../infos/infos";

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

    tab1Root = HomePage;
    tab2Root = WorkoutsPage;
    tab3Root = ExercisesPage;
    tab4Root = InfosPage;

    constructor() {

    }
}

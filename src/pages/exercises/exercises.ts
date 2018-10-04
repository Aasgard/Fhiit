import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {CreateOrUpdateExerciseComponent} from "../../components/modals/create-or-update-exercise/create-or-update-exercise";

/**
 * Generated class for the ExercisesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-exercises',
    templateUrl: 'exercises.html',
})
export class ExercisesPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ExercisesPage');
    }

    public onEditExerciseButtonClicked(): void {
        let profileModal = this.modalCtrl.create(CreateOrUpdateExerciseComponent, { userId: 8675309 });
        profileModal.present();
    }

}

import {Component, Input} from '@angular/core';
import {ViewController} from "ionic-angular";

@Component({
    selector: 'create-or-update-exercise',
    templateUrl: 'create-or-update-exercise.html'
})
export class CreateOrUpdateExerciseComponent {

    @Input() userId;

    constructor(
        private viewCtrl: ViewController
    ) {
        console.log('Hello CreateOrUpdateExerciseComponent Component');
    }

    public closeModal(): void {
        this.viewCtrl.dismiss();
    }

}

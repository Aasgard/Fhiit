import {auth} from "firebase";
import {Component} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {Camera, CameraOptions} from '@ionic-native/camera';
import {AlertController, LoadingController} from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public loadingCtrl: LoadingController, private alertCtrl: AlertController, private camera: Camera, private afAuth: AngularFireAuth) {
        let loading = this.loadingCtrl.create();

        loading.present();

        setTimeout(() => {
            loading.dismiss();
        }, 500);
    }

    public onTakePhotoClicked(): void {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };

        this.camera.getPicture(options).then((imageData) => {
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            let alert = this.alertCtrl.create({
                title: 'Image',
                subTitle: base64Image,
                buttons: ['Annuler']
            });
            alert.present();
        }, (err) => {
            alert(JSON.stringify(err));
        });
    }

    public login(): void {
        this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    }

}

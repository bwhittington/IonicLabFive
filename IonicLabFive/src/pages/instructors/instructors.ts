import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { InstructorService } from '../../components/instructors/shared/instructor.service';

@IonicPage()
@Component({
    selector: 'page-instructors',
    templateUrl: 'instructors.html',
    providers: [InstructorService]
})

export class InstructorsPage {
    private navCtrl: NavController;

    constructor(navCtrl: NavController, navParams: NavParams) {
        this.navCtrl = navCtrl;
    }

    public ionViewDidLoad(): void {
        console.log('ionViewDidLoad Intructors');
    }
}
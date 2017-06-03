import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { StudentService } from '../../components/students/shared/student.service';

@IonicPage()
@Component({
    selector: 'page-students',
    templateUrl: 'students.html',
    providers: [StudentService]
})

export class StudentsPage {
    private navCtrl: NavController;

    constructor(navCtrl: NavController, navParams: NavParams) {
        this.navCtrl = navCtrl;
    }

    public ionViewDidLoad(): void {
        console.log('ionViewDidLoad Intructors');
    }
}
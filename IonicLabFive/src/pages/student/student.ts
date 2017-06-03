import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { StudentService } from '../../components/students/shared/student.service';
import { StudentModel } from '../../components/students/shared/student.model';

@IonicPage()
@Component({
    selector: 'student',
    templateUrl: 'student.html'
})

export class StudentPage {

    public studentModel: StudentModel;
    public studentService: StudentService;
    public navCtrl: NavController;
    public navParams: NavParams;
    public id: number;

    constructor(navCtrl: NavController, navParams: NavParams, studentService: StudentService) {
        this.studentService = studentService;
        this.navParams = navParams;

        this.id = this.navParams.get('id');
        this.studentModel = this.studentService.getStudent(this.id);
    }

    public ionViewDidLoad(): void {
        console.log('ionViewDidLoad Student');
    }
}
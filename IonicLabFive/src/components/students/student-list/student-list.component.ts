import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { StudentService } from '../shared/student.service';

@Component({
    selector: 'student-list',
    templateUrl: 'student-list.html' })

export class StudentList {

    public students: Array<Object>;
    public studentService: StudentService;
    public navCtrl: NavController;
    private id: number;

    constructor(studentService: StudentService, navCtrl: NavController ) {
        this.studentService = studentService;
        this.students = this.studentService.getStudents();
        this.navCtrl = navCtrl;
    }

    public goToStudent(id: number): void {
        this.id = id;
        this.navCtrl.push('StudentPage', { 'id': this.id });
    }
}
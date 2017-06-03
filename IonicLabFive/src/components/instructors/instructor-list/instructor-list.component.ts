import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { InstructorService } from '../shared/instructor.service';

@Component({
    selector: 'instructor-list',
    templateUrl: 'instructor-list.html' })

export class InstructorList {

    public instructors: Array<Object>;
    public instructorService: InstructorService;
    public navCtrl: NavController;
    private id: number;

    constructor(instructorService: InstructorService, navCtrl: NavController ) {
        this.instructorService = instructorService;
        this.instructors = this.instructorService.getInstructors();
        this.navCtrl = navCtrl;
    }

    public goToInstructor(id: number): void {
        this.id = id;
        this.navCtrl.push('InstructorPage', { 'id': this.id });
    }
}
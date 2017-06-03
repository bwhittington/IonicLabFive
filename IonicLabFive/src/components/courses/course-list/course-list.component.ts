import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CourseService } from '../shared/course.service';

@Component({
    selector: 'course-list',
    templateUrl: 'course-list.html' })

export class CourseList {

    public courses: Array<Object>;
    public courseService: CourseService;
    public navCtrl: NavController;
    private id: number;

    constructor(courseService: CourseService, navCtrl: NavController ) {
        this.courseService = courseService;
        this.courses = this.courseService.getCourses();
        this.navCtrl = navCtrl;
    }

    public goToCourse(id: number): void {
        this.id = id;
        this.navCtrl.push('CoursePage', { 'id': this.id });
    }
}
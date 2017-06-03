import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CourseService } from '../../components/courses/shared/course.service';

@IonicPage()
@Component({
    selector: 'page-courses',
    templateUrl: 'courses.html',
    providers: [CourseService]
})

export class CoursesPage {
    private navCtrl: NavController;

    constructor(navCtrl: NavController, navParams: NavParams) {
        this.navCtrl = navCtrl;
    }

    public ionViewDidLoad(): void {
        console.log('ionViewDidLoad Courses');
    }
}
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { CoursesPage } from './courses';
import { CourseList } from '../../components/courses/course-list/course-list.component';
import { CourseService } from '../../components/courses/shared/course.service';

@NgModule({
    declarations: [
        CoursesPage,
        CourseList
    ],
    imports: [
        IonicPageModule.forChild(CoursesPage)
    ],
    exports: [
        CoursesPage,
        CourseList
    ],
    providers: [CourseService]
})

export class CoursesPageModule { }
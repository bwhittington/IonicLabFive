import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { StudentsPage } from './students';
import { StudentList } from '../../components/students/student-list/student-list.component';
import { StudentService } from '../../components/students/shared/student.service';

@NgModule({
    declarations: [
        StudentsPage,
        StudentList
    ],
    imports: [
        IonicPageModule.forChild(StudentsPage)
    ],
    exports: [
        StudentsPage,
        StudentList
    ],
    providers: [StudentService]
})

export class StudentsPageModule { }
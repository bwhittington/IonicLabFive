import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { StudentPage } from './student';
import { StudentService } from '../../components/students/shared/student.service';

@NgModule({
    declarations: [
        StudentPage
    ],
    imports: [
        IonicPageModule.forChild(StudentPage)
    ],
    exports: [
        StudentPage
    ],
    providers: [StudentService]
})

export class StudentPageModule { }
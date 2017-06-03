import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { InstructorsPage } from './instructors';
import { InstructorList } from '../../components/instructors/instructor-list/instructor-list.component';
import { InstructorService } from '../../components/instructors/shared/instructor.service';

@NgModule({
    declarations: [
        InstructorsPage,
        InstructorList
    ],
    imports: [
        IonicPageModule.forChild(InstructorsPage)
    ],
    exports: [
        InstructorsPage,
        InstructorList
    ],
    providers: [InstructorService]
})

export class InstructorsPageModule { }
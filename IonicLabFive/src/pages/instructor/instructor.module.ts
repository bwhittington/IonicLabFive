import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoogleMaps } from '@ionic-native/google-maps';

import { InstructorPage } from './instructor';
import { InstructorService } from '../../components/instructors/shared/instructor.service';

@NgModule({
    declarations: [ InstructorPage ],
    imports: [ IonicPageModule.forChild(InstructorPage) ],
    exports: [ InstructorPage ],
    providers: [ InstructorService, GoogleMaps ]
})

export class InstructorPageModule { }
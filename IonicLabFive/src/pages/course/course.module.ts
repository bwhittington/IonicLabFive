import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { FilePath } from '@ionic-native/file-path';

import { CoursePage } from './course';
import { CourseService } from '../../components/courses/shared/course.service';

@NgModule({
    declarations: [ CoursePage ],
    imports: [ IonicPageModule.forChild(CoursePage) ],
    exports: [ CoursePage ],
    providers: [CourseService, FileOpener, File, FilePath ]
})

export class CoursePageModule { }
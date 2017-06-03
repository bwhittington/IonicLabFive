import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { FilePath } from '@ionic-native/file-path';

import { CourseService } from '../../components/courses/shared/course.service';
import { CourseModel } from '../../components/courses/shared/course.model';

@IonicPage()
@Component({
    selector: 'course',
    templateUrl: 'course.html'
})

export class CoursePage {

    private courseModel: CourseModel;
    private courseService: CourseService;
    private navCtrl: NavController;
    private navParams: NavParams;
    private id: number;
    private file: File;
    private fileOpener: FileOpener;
    private filePath: FilePath;

    constructor(navCtrl: NavController, navParams: NavParams, courseService: CourseService, file: File, fileOpener: FileOpener, filePath: FilePath) {
        this.courseService = courseService;
        this.navParams = navParams;
        this.file = file;
        this.fileOpener = fileOpener;
        this.filePath = filePath;

        this.id = this.navParams.get('id');
        this.courseModel = this.courseService.getCourse(this.id);
    }

    public ionViewDidLoad(): void {
        console.log('ionViewDidLoad Course');
    }

    public openDocument(filePathString: string): void {
        this.filePath.resolveNativePath(this.file.applicationDirectory + 'www/assets/documents/' + filePathString)
            .then(() => this.file.checkFile(this.file.applicationDirectory + 'www/assets/documents/', filePathString)
                .then(() => this.file.copyFile(this.file.applicationDirectory + 'www/assets/documents/', filePathString, this.file.externalDataDirectory, filePathString)
                    .then(() => this.fileOpener.open(this.file.externalDataDirectory + filePathString, 'application/pdf')
                        .then(() => console.log('File is opened'))
                        .catch(e => console.log('Error opening file', e)))
                    .catch(e => console.log('Error copying file', e)))
                .catch(e => console.log('File doesnt exist', e)))
            .catch(e => console.log(e));
    }
}
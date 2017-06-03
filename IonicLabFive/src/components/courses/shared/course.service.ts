import { Injectable } from '@angular/core';
import { courses } from './course.mocks';

@Injectable()
export class CourseService {
    // constructor() { }

    private id: number;

    public getCourses(): any {
        return courses;
    }

    public getCourse(id: number): any {
        this.id = id;
        return courses.find(x => x.id === id);
    }
}

import { Injectable } from '@angular/core';
import { students } from './student.mocks';

@Injectable()
export class StudentService {
    // constructor() { }

    private id: number;

    public getStudents(): any {
        return students;
    }

    public getStudent(id: number): any {
        this.id = id;
        return students.find(x => x.id === id);
    }
}

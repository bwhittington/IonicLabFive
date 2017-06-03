import { Injectable } from '@angular/core';
import { instructors } from './instructor.mocks';

@Injectable()
export class InstructorService {
    // constructor() { }

    private id: number;

    public getInstructors(): any {
        return instructors;
    }

    public getInstructor(id: number): any {
        this.id = id;
        return instructors.find(x => x.id === id);
    }
}

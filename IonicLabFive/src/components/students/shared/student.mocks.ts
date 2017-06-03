import { StudentModel } from './student.model';

export const students: StudentModel[] = [
    { id: 1, name: 'Riva Greenbaum', latlong: '' },
    { id: 2, name: 'Johnny Flemings', latlong: '' },
    { id: 3, name: 'Dinorah Scheidegger ', latlong: '' },
    { id: 4, name: 'Marybelle Borst ', latlong: '' },
    { id: 5, name: 'Arnita Panther ', latlong: '' },
    { id: 6, name: 'Tommy Biddy ', latlong: '' },
    { id: 7, name: 'Ling Klink ', latlong: '' },
    { id: 8, name: 'Astrid Cabe', latlong: '' }];

export class StudentServiceMock {
    // constructor() { }

    public getStudents(): any {
        return [];
    }
}

import { InstructorModel } from './instructor.model';

export const instructors: InstructorModel[] = [
    { id: 1, name: 'Gill Bates', latitude: 47.628636, longitude: -122.238660 },
    { id: 2, name: 'Allen Paul', latitude: 36.11472, longitude: -115.82936 },
    { id: 3, name: 'Uncle Martin Bob', latitude: 47.86632, longitude: 111.59927 },
    { id: 4, name: 'Steve Unemployed', latitude: 52.81697, longitude: 106.77969 },
    { id: 5, name: 'Gott Scuthrie', latitude: 17.59111, longitude: 34.32107 },
    { id: 6, name: 'Al Turning', latitude: 33.10164, longitude: 0.45129 },
    { id: 7, name: 'William Wright', latitude: 71.57790, longitude: -31.69698 },
    { id: 8, name: 'Zach Muckerberg', latitude: 38.43326, longitude: 24.82787 }];

export class InstructorServiceMock {
    // constructor() { }

    public getInstructors(): any {
        return [];
    }
}

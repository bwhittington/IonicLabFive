import { CourseModel } from './course.model';

export const courses: CourseModel[] = [
    { id: 1, name: 'C#/.NET', syllabus: 'This course will introduce you to .NET Programming using the C# programming language.  ' +
        'Emphasis will be placed on understanding not only the syntactical features of the language, but how to effectively use ' +
        'the design of the language to develop robust software.The course assumes at least one year of programming in Java(if ' +
        'you are fluent in C++ you can probably survive the class as well, but references will be made to Java throughout the ' +
        'quarter). The course will be programming/project based with a midterm and a final project (quizzes and written ' +
        'homework are possible, but not likely).',
        filePath: 'CSharpSyllabus.pdf' },
    { id: 2, name: 'HTML/CSS/Responsive', syllabus: 'This course teaches you the basics of HTML5 including the latest in CSS ' +
        'styling.We discuss basic syntax and move forward to more advanced features such as JavaScript with animations, ' +
        'CSS3 and media queries, and styling with some of the new HTML5 tags. We do not just discuss HTML5, but we also ' +
        'tell you how to perform actual design elements using embedded CSS classes. We also discover the latest form ' +
        'field tags that make gathering information and input from your users much easier.',
        filePath: 'FrontEnd.pdf' },
    { id: 3, name: 'MVC/Web API', syllabus: 'This course is intended for professional Web developers who use Microsoft Visual ' +
        'Studio in a team-based, medium-sized to large development environment.Members of the audience have a minimum of one ' +
        'to two years of experience developing Web- based applications on top of ASP.NET with Visual Studio.',
        filePath: 'MVCSyllabus.pdf' },
    { id: 4, name: 'Java', syllabus: 'This course is an introduction to software engineering, using the Java™ programming ' +
        'language. It covers concepts useful to 6.005. Students will learn the fundamentals of Java.The focus is on ' +
        'developing high quality, working software that solves real problems.The course is designed for students with some ' +
        'programming experience, but if you have none and are motivated you will do fine.Students who have taken 6.005 ' +
        'should not take this course.Each class is composed of one hour of lecture and one hour of assisted lab work.',
        filePath: 'JavaSyllabus.pdf' },
    { id: 5, name: 'JavaScript', syllabus: 'This course is designed to provide a solid introduction to the JavaScript' +
        'language.We will explore the more unique and tricky JavaScript features such as closures, higher-order ' +
        'functions, and prototype object oriented model that perhaps are not familiar to many students who are familiar ' +
        'with Java and Python as their primary languages.We will also introduce how JavaScript is used as a popular ' +
        'technology for both for frontend and backend web applications.',
        filePath: 'JavaScriptSyllabus.pdf' },
    { id: 6, name: 'SQL', syllabus: 'An introduction to the design and creation of relational databases. Topics include ' +
        'storing, retrieving, updating and displaying data using Structured Query Language (SQL) integrated into ' +
        'Stored Procedures, Functions, Packages and Triggers (PL/SQL Programming).',
        filePath: 'SQLSyllabus.pdf' },
    { id: 7, name: 'Cordova', syllabus: 'Our hands-on PhoneGap course will give you the skills to create engaging, rich mobile ' +
        'apps using the open-source PhoneGap framework to build the vast majority of your application once, and deploy to iOS ' +
        'and Android with minimum fuss.',
        filePath: 'CordovaSyllabus.pdf' },
    { id: 8, name: 'Consulting Book', syllabus: 'Management Consulting will continue to be a significant career option for many ' +
        'students, regardless of whether a student’s academic foundation is in business, engineering, or the basic sciences. ' +
        'Careers in Management Consulting often provide individuals an opportunity for challenging work, continued  ' +
        'self - development, access to important social and professional networks, and, over time, significant financial rewards.',
        filePath: 'ConsultingSyllabus.pdf' }];

export class CourseServiceMock {
    // constructor() { }

    public getCourses(): any {
        return [];
    }
}

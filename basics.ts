// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age : number;

age = 12;

let userName: string | string[];

userName = 'Jaret';

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

type Person = {
    name: string;
    age: number;
}




let person: Person;

person = {
    name: 'Jaret',
    age: 26
};

// person = {
//     isEmployee: true
// };

let people: Person[];

// type inference

let course: string | number = 'React - The Complete Guide';

course = 12324;

// Functions & types

function add(a: number, b: number){
    return a + b;
}

function print (value: any){
    console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

// updatedArray[0].split(''); // Error: Property 'split' does not exist on type 'number'

class Student {
    firstName: string;
    lastName: string;
    age: number;
    private courses: string[];

    constructor(first: string, last: string, age: number, courses: string[]) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.courses = courses;
    }

    enrol(courseName: string){
        this.courses.push(courseName);
    }

    listCourses(){
        return this.courses.slice();
    }
}

const student = new Student('Jaret', 'Smith', 26, ['Angular']);
student.enrol('React');
// student.listCourses(); // Returns a copy of the courses array => Angular, React

// student.courses => Angular, React // This example returns a string array
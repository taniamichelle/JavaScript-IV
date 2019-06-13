// CODE here for your Lambda Classes

/*
  * **Instructors** - extensions of Person
  * **Students** - extensions of Person
  * **Project Managers** - extensions of Instructors
* **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:
const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});
*/

class Person {
    constructor(aboutPerson) {
        this.name = about.name;
        this.age = about.age;
        this.location = about.location;
    }
    speak() {
        return `Hello my name is ${this.name}, and I am from ${this.location}`;
    }
};

class Instructor extends Person {
    constructor(aboutInstructor) {
        super(aboutInstructor)
        this.specialty = aboutInstructor.specialty;
        this.favLanguage = aboutInstructor.favLanguage;
        this.catchPhrase = aboutInstructor.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${this.subject}`;
    }
    grade(student, subject) {
        return `Hello my name is ${this.name} receives a perfect score on ${this.subject}`;
    }
};

class Student extends Person {
    constructor(aboutStudent) {
        super(aboutStudent)
        this.previousBackground = aboutStudent.previousBackground;
        this.className = aboutStudent.className;
        this.favSubjects = aboutStudent.favSubjects;
    }
    listsSubjects(subject) {
        return `My favorite subjects are: ${this.favSubjects}`;
    }
    PRAssignment(subject) {
        return `${this.name} has begun sprint challenge on ${this.subject}`;
    }
};

class PM extends Instructor {
    constructor(aboutPM) {
        super(aboutPM)
        this.gradClassName = aboutPM.gradClassName;
        this.favInstructor = aboutPM.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${this.channel}, @channel standy times`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s ${this.subject}`;
    }
};

const bob = new Person({
    name: 'Bob',
    age: 70,
    location: 'Honolulu',
});

const Tom = new Instructor({
    name: 'Tom',
    age: 57,
    location: 'Kaneohe',
    favLanguage: 'Java',
    specialty: 'Back-end',
    catchPhrase: `Don't forget the homies`
});

const fred = new Student({
    name: 'Millie',
    age: 65,
    location: 'Kona',
    previousBackground: 'Nurse',
    className: 'CS132-end',
    favSubjects: `HTML, CSS, JS`
});

const beth = new PM({
    name: 'Beth',
    age: 53,
    location: 'Hilo',
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: `Rollin' with the homies`,
    gradClassName: 'Web21',
    favInstructor: 'Josh Knell'
});
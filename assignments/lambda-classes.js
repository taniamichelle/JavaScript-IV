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
    constructor(about) {
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
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student} receives a perfect score on ${subject}`;
    }
    // randomGrade(){
    //     return `${student.name}'s grade is now ${randomGrade}.`
    // }
};

class Student extends Person {
    constructor(aboutStudent) {
        super(aboutStudent)
        this.previousBackground = aboutStudent.previousBackground;
        this.className = aboutStudent.className;
        this.favSubjects = aboutStudent.favSubjects;
        this.studentGrade = aboutStudent.studentGrade;
    }
    listsSubjects() {
        return `My favorite subjects are: ${this.favSubjects}`;
    }
    PRAssignment(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
    // graduate(arr, passingGrade, student) {
    //     let readyToGraduate = arr.filter(pass => {
    //         if (pass.studentGrade > 70) {
    //             return `${student} is ready to graduate from Lambda School.`;
    //         } else {
    //             return `${student} should keep studying.`;
    //         }
    //     }
    // }
};

class PM extends Instructor {
    constructor(aboutPM) {
        super(aboutPM)
        this.gradClassName = aboutPM.gradClassName;
        this.favInstructor = aboutPM.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student}'s ${subject}`;
    }
};

const bob = new Person({
    name: 'Bob',
    age: 70,
    location: 'Idaho',
});

const tom = new Instructor({
    name: 'Tom',
    age: 57,
    location: 'Philadelphia',
    favLanguage: 'Java',
    specialty: 'Back-end',
    catchPhrase: `Don't forget the homies`
});

const millie = new Student({
    name: 'Millie',
    age: 65,
    location: 'Hilo',
    previousBackground: 'Nurse',
    className: 'CS132-end',
    favSubjects: `HTML, CSS, JS`,
    studentGrade: 94
});

const beth = new PM({
    name: 'Beth',
    age: 53,
    location: 'Waimanalo',
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: `Rollin' with the homies`,
    gradClassName: 'Web21',
    favInstructor: 'Josh Knell'
});

console.log(bob.speak()); //should print "Hello my name is Bob, and I am from Idaho"
console.log(tom.speak()); //should print "Hello my name is Tom, and I am from Philadelphia"
console.log(tom.demo('JS4')); //should print "Today we are learning about <subject name>"
console.log(tom.grade('Millie', 'JS4')); //should print "<student name> receives a perfect score on <subject name>"
console.log(millie.speak()); //should print "Hello my name is Millie, and I am from Hilo"
console.log(millie.listsSubjects()); //should print "My favorite subjects are: HTML, CSS, JS"
console.log(millie.PRAssignment('JS4')); //should print "<student name> has begun sprint challenge on <subject name>"
console.log(beth.speak()); //should print "Hello my name is Beth, and I am from Waimanalo"
console.log(beth.demo('JS4')); //should print "Today we are learning about <subject name>"
console.log(beth.grade('Millie', 'JS4')); //should print "<student name> receives a perfect score on <subject name>"
console.log(beth.standUp('Web21')); //should print "Beth announces to <slack Channel>, @channel standy times"
console.log(beth.debugsCode('Millie', 'JS4')); //should print "Beth debugs <student name>'s <subject name>"
// CODE here for your Lambda Classes
class Person {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
    this.gender = props.gender
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
  }
};

class Instructor extends Person{
  constructor(props) {
    super(props);
    this.specialty = props.specialty;
    this.favLanguage = props.favLanguage;
    this.catchPhrase = props.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}`)
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`)  
  }
};

class Student extends Person {
    constructor(props) {
      super(props);
      this.previousBackground = props.previousBackground;
      this.className = props.className;
      this.favSubjects = props.favSubjects;
    }
    listsSubjects() {
      this.favSubjects.forEach(subject => {
        console.log(`${subject}`);
      })
    }
    PRAssignment(subject) {
      console.log(`${this.name} has submitted a PR for ${subject}.`)
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`)
    }
};

class ProjectManager extends Instructor {
    constructor(props) {
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
        }
        standUp(slackChan) {
          console.log(`${this.name} announces to ${slackChan}, @channel standy times!`)
        }
        debugsCode(student, subject) {
          console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
        }
};


const marco = new ProjectManager({
    name: 'Marco',
    location: 'The Moon',
    age: 106,
    gender: 'male',
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the Pull Requests`,
    gradClassName: 'WEB1',
    favInstructor: 'Cam Pope'
  });

  const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });
  
const bob = new Student ({
    name: 'Bob',
    age: 26,
    location: 'Utah',
    gender: 'Male',
    previousBackground: 'insurance',
    className: 'WEBPT5',
    favSubjects: [
      'World History',
      'US History',
      'PE'
    ]
});

const cedric = new Student ({
    name: 'Cedric',
    age: 22,
    location: 'Bay Area',
    gender: 'Male',
    previousBackground: 'Wizardry',
    className: 'WEBPT5',
    favSubjects: [
      'How to be a Wizard',
      'How to be a better Wizard',
      'How to Lead all the Wizards'
    ]
});

bob.speak();
fred.demo('Javascript');
fred.grade(cedric, 'Javascript');
cedric.listsSubjects();
bob.PRAssignment('Javascript');
cedric.sprintChallenge('Javascript');
marco.standUp('webpt5_marco');
marco.debugsCode(bob, 'CSS');

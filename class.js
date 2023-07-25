
class Student {
    constructor(name, age, score, courses) {
      this.name = name;
      this.age = age;
      this.score = score;
      this.courses = courses;
    }
  
    getName() {
      return this.name;
    }
  
    getAge() {
      return this.age;
    }
  
    increaseAge() {
      this.age++;
    }
  
    addCourse(course) {
      this.courses.push(course);
    }
  }

const student1 = new Student("Benjamin De-graft-Andoh", 35, 95, ["Law", "Tech"]);
console.log(student1.getName());
console.log(student1.getAge());

student1.increaseAge();
console.log(student1.getAge());

student1.addCourse("Finance");
console.log(student1.courses);

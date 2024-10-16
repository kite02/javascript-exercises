const findTheOldest = function(people) {
    let oldestPerson = [];

    people.reduce((oldest,person)=>{
        if(person.yearOfDeath == null){
            person.yearOfDeath = new Date().getFullYear();
        }
        let age = person.yearOfDeath - person.yearOfBirth; 
        console.log(person);
        console.log(age);
        console.log(oldest);
        console.log(oldestPerson);
        if(age > oldest){
            oldest = age;
            oldestPerson = person;
        }
        return oldest;
    },0)
    
   return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;

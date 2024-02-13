// 1)
let user = {
    name: 'John',
    surname: 'Smith',
}

user.name = 'Pete';
delete user.name;

// 2)

let isEmpty = function(obj){
    for (let key in obj) {
        return false;
      }
      return true;
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

// 3)
const user = {
    name: "John"
  };
  
  // это будет работать?
  user.name = "Pete"; // da

// 4)
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
let sum= 0;
for(key in salaries){
    sum+=salaries[key];
}
alert(sum); // 390

// 5)
let multiplyNumeric = function(obj){
    for(key in obj){
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
          }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);
var obj1 = {name : "Person 1", age : 5};
var obj2 = {age : 5, name : "Person 1"};

console.log(JSON.stringify(obj1) === JSON.stringify(obj2));  //returns false

function compareObjects(obj1, obj2) {
    const normalizedObj1 = Object.fromEntries(Object.entries(obj1).sort(([k1], [k2]) => k1. localeCompare(k2)));
    const normalizedObj2 = Object.fromEntries(Object.entries(obj2).sort(([k1], [k2]) => k1. localeCompare(k2)));
    console.log(JSON.stringify(normalizedObj1) === JSON.stringify(normalizedObj2));
  }
  
  compareObjects(obj1,obj2);   // returns true 
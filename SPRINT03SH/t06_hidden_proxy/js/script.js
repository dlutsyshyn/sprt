const validator = {
    get: function (target, prop){
        console.log(`Trying to access the property ${prop} ...`)
       return target[prop]
    },
    set: function (obj, prop, value){
        if (prop === 'age' && Number.isInteger(value) && value <200){
            console.log(`Setting value ${value} to ${prop}`)
        } 
        else if (Number.isInteger(value)){
            throw new TypeError('The age is not integer')
        }
        else if (prop === 'gender'){
            console.log(`Setting value ${value} to ${prop}`)
        }
        else if (value > 200){
            throw new RangeError('The age is invalid')
        }
        obj[prop] = value;
    }
    
}

let person = new Proxy ({}, validator)

person.age = 100;
console.log(person.age);

person.gender = 'male';

person.age = 'young';
person.age = 300;

class HardWorker {
    constructor(options){
        this.name = this.options;
        this.age = this.options;
        this.salary = this.options;
    }
    get age(){
        return this._age;
    }
    set age(value){
        if (value <= 1 || value > 100){
            alert("wrong age value")
            return;
        }
        this._age = value;
    }
    get salary(){
        return this._salary;
    }
    set salary(value){
        if (value <= 100 || value > 10000){
            alert ("wrong salary value")
            return;
        }
        this._salary = value;
    }
    toObject(){
        return Object = {
            name:this.name,
            age:this.age,
            salary:this.salary
        }
    }

}

worker = new HardWorker;
worker.name = 'Bruce'; 
console.log(worker.name); 
// Bruce
worker.age = 50;
worker.salary = 1500; 
console.log(worker.toObject());
// Object { name: "Bruce", age: 50, salary: 1500 }
worker.name = 'Linda';
worker.age = 140;
console.log(worker.toObject());
// Object { name: "Linda", age: 50, salary: 1500 }
// let myName = "anish    ";
// let myChannel = "chai   ";

// console.log(myName.trueLength);

let myHeros = ["thor","spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function(){
       console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.Hitesh = function(){
    console.log(`hitesh is present in all`);
}
heroPower.Hitesh()
myHeros.Hitesh()

const User = {
    name: "chai",
    email: "chai@gmail.com"
}

const teacher = {
    makeVideo: true
}
const teachingSupport = {
    isAvailable: false
}
const TASupport = {
    Ta: 'javascript',
    fullTime: 'true',
    __proto__: teachingSupport
}

teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(teachingSupport, teacher)

let anotherUsername = "chaiaurcode   "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`Tru length is: ${this.trim().length}`);
}
anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()


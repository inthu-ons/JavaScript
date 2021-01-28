class Dog{
    constructor(name) {
        this._name = name;
    }

    introduce() {
        console.log("This is "+this._name +" !");
    }

    //A static method
    static bark() {
        console.log("woof!");
    }
}

const myDog = new Dog("Buster");
myDog.introduce();
//myDog.bark();
const my2Dog = new Dog("Pluto");
my2Dog.introduce();

// Calling the static method
Dog.bark();

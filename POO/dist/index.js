"use strict";
class Person {
    constructor(n, h, w) {
        this.name = n;
        this.height = h;
        this.weight = w;
    }
    sleep() {
        console.log(`${this.name} zzzzzzz`);
    }
}
const p1 = new Person('Maria', 171, 58);
const p2 = new Person('Rodrigo', 158, 54);
console.log(p1.name, p1.height, p1.weight);
console.log(p2.name, p2.height, p2.weight);
p1.sleep();
p2.sleep();

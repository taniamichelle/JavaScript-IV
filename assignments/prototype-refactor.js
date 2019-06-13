/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

//Class Parent
class GameObject {
    constructor(about) {
        this.createdAt = about.createdAt;
        this.name = about.name;
        this.dimensions = about.dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game.`;
    }
};

//Child Class
class CharacterStats extends GameObject {
    constructor(stats) {
        super(stats)
        this.healthPoints = stats.healthPoints;
    }
    takeDamage() {
        return `${this.name} took damage.`;
    }
};

//GrandChild Class
class Humanoid extends CharacterStats {
    constructor(details) {
        super(details)
        this.team = details.team;
        this.weapons = details.weapons;
        this.language = details.language;
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}.`;
    }
};

const mage = new Humanoid({
    createdAt: new Date(),
    name: 'Bruce',
    dimensions: {
        length: 2,
        width: 1,
        height: 1,
    },
    healthPoints: 5,
    team: 'Mage Guild',
    weapons: [
        'Staff of Shamalama',
    ],
    language: 'Common Tongue',
});

const swordsman = new Humanoid({
    createdAt: new Date(),
    name: 'Sir Mustachio',
    dimensions: {
        length: 2,
        width: 2,
        height: 2,
    },
    healthPoints: 15,
    team: 'The Round Table',
    weapons: [
        'Giant Sword',
        'Shield',
    ],
    language: 'Common Tongue',
});

const archer = new Humanoid({
    createdAt: new Date(),
    name: 'Lilith',
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 10,
    team: 'Forest Kingdom',
    weapons: [
        'Bow',
        'Dagger',
    ],
    language: 'Elvish',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
/*
*** PROTOTYPE and INHERITANCE using CLASSES***

class === constructor fxn name
constructor === the inside of our constructor fxn
extends === Object.create() in that it gives you a proto
super === this keyword AND methods (Parent.call() AND Object.create())

***CLASS FEATURES***
-not hoisted
-special syntax
-use strict is automatically implemented in every block of code

class Parent {
    constructor(attributes) {
        this.age = attributes.age;
        this.name = attributes.name;
        this.home = attributes.home;
        this.phrase = attributes.phrase;
    }
    //Methods go here
    speak() {
        return `${this.name} says ${this.phrase}`;
    }
};

class Child extends Parent {
    constructor(Childattributes) {
        super(Childattributes)
        this.toy = childAttributes.toy;

    //Methods go here
    play() {
        return `${this.name} plays with a ${this.toy}`;
    }
};

class GrandChild extends Child {
     constructor(grandChildAttributes) {
        super(grandChildAttributes)
        this.gift = grandChildAttributes.gift;

    //Methods go here
    receive() {
        return `${this.name} receives a ${this.gift}`;
    }
};

const fred = new Parent({
    age: 55,
    name: 'Fred',
    home: 'Bedrock',
    phrase: 'Yabba dabba do!'
});

const wilma = new Parent({
    age:57,
    name: 'Wilma',
    home: 'Bedrock',
    phrase: 'Fred!'
});

const pebbles = new Child({
    age: 27,
    name: 'Pebbles',
    home: 'Bedrock',
    phrase: 'Mama!'
    toy: 'rock doll'
});

const bambamjr = new GrandChild({
    age: 2,
    name: 'Bambam Jr',
    home: 'Bedrock',
    phrase: 'Bambam!'
    toy: 'rock',
    gift: 'rock bat'
});

console.log(pebbles.play()); --> prints "Pebbles plays with a rock doll"
console.log(pebbles.speak()); --> prints "Pebbles says Mama!"
console.log(bambamjr.speak()); --> prints "Bambam Jr says Bambam!"
console.log(bambamjr.play()); --> prints "Bambam Jr plays with a rock"
*/

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.areaCircle = exports.areatrapeze = exports.areaDiamond = exports.areaReactangle = exports.areaSquare = exports.areaTriangle = exports.sumArray = exports.sum = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return `Olá ${name}`;
}
exports.greeter = greeter;
;
function personAge(name, age) {
    return `${name} tem ${age}`;
}
exports.personAge = personAge;
;
function sum(x, y) {
    return x + y;
}
exports.sum = sum;
;
function sumArray(numbers) {
    return numbers.reduce(sum, 0);
}
exports.sumArray = sumArray;
;
function areaTriangle(base, height) {
    return (base * height) / 2;
}
exports.areaTriangle = areaTriangle;
;
function areaSquare(side) {
    return side ** 2;
}
exports.areaSquare = areaSquare;
;
function areaReactangle(base, height) {
    return base * height;
}
exports.areaReactangle = areaReactangle;
;
function areaDiamond(biggestDiagonal, smallestDiagonal) {
    return (biggestDiagonal * smallestDiagonal) / 2;
}
exports.areaDiamond = areaDiamond;
;
function areatrapeze(biggestBase, smallestBase, height) {
    return ((biggestBase + smallestBase) * height) / 2;
}
exports.areatrapeze = areatrapeze;
;
function areaCircle(radius) {
    return (radius ** 2) * 3.14;
}
exports.areaCircle = areaCircle;
;

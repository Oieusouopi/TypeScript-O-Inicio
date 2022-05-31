"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Exercise = __importStar(require("./exercises"));
console.log(Exercise.greeter('Rafael'));
console.log(Exercise.personAge('Rafael', 20));
console.log(`A soma da array é igual a ${Exercise.sumArray([3, 6, 9])}`);
console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.areaTriangle(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercise.areaTriangle(5, 30)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm ${Exercise.areaTriangle(100, 200)}cm²`);
console.log(`Quadrado de lado 10cm: ${Exercise.areaSquare(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercise.areaSquare(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${Exercise.areaSquare(100)}cm²`);
console.log(`Retângulo de base 10cm e altura 25cm ${Exercise.areaReactangle(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm ${Exercise.areaReactangle(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm ${Exercise.areaReactangle(100, 200)}cm²`);
console.log(`Losango de diagonal maior 32cm e diagonal menor 18cm ${Exercise.areaDiamond(32, 18)}cm²`);
console.log(`Losango de diagonal maior 200cm e diagonal menor 50cm ${Exercise.areaDiamond(200, 50)}cm²`);
console.log(`Losango de diagonal maior 75cm e diagonal menor 25cm ${Exercise.areaDiamond(75, 25)}cm²`);
console.log(`Trapezio de base maior 100cm base menor 70cm e altura 50cm ${Exercise.areatrapeze(100, 70, 50)}cm²`);
console.log(`Trapezio de base maior 75cm base menor 50cm e altura 35cm ${Exercise.areatrapeze(75, 50, 35)}cm²`);
console.log(`Trapezio de base maior 150cm base menor 120cm e altura 80cm ${Exercise.areatrapeze(150, 120, 80)}cm²`);
console.log(`Ciruclo com raio igual 25cm ${Exercise.areaCircle(25)}cm²`);
console.log(`Circulo com raio igual 100cm ${Exercise.areaCircle(100)}cm²`);
console.log(`Circulo com raio igual 12.5cm ${Exercise.areaCircle(12.5)}cm²`);

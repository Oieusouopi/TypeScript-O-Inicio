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
const length = __importStar(require("./length"));
const mass = __importStar(require("./mass"));
const area = __importStar(require("./area"));
const capacity = __importStar(require("./capacity"));
const volume = __importStar(require("./volume"));
console.log('Conversao de distancia');
console.log(length.convert(1, 'm', 'km'));
console.log(length.convert(1, 'm', 'hm'));
console.log(length.convert(1, 'm', 'dam'));
console.log(length.convert(1, 'm', 'm'));
console.log(length.convert(1, 'm', 'dm'));
console.log(length.convert(1, 'm', 'cm'));
console.log(length.convert(1, 'm', 'mm'));
// console.log(convert(1, 'kilo', 'hm'));
console.log('Conversao de peso');
console.log(mass.convert(1, 'g', 'kg'));
console.log(mass.convert(1, 'g', 'hg'));
console.log(mass.convert(1, 'g', 'dag'));
console.log(mass.convert(1, 'g', 'g'));
console.log(mass.convert(1, 'g', 'dg'));
console.log(mass.convert(1, 'g', 'cg'));
console.log(mass.convert(1, 'g', 'mg'));
console.log('Conversao para área');
console.log(area.convert(1, 'm²', 'km²'));
console.log(area.convert(1, 'm²', 'hm²'));
console.log(area.convert(1, 'm²', 'dam²'));
console.log(area.convert(1, 'm²', 'm²'));
console.log(area.convert(1, 'm²', 'dm²'));
console.log(area.convert(1, 'm²', 'cm²'));
console.log(area.convert(1, 'm²', 'mm²'));
console.log('conversao para capacidade');
console.log(capacity.convert(1, 'l', 'kl'));
console.log(capacity.convert(1, 'l', 'hl'));
console.log(capacity.convert(1, 'l', 'dal'));
console.log(capacity.convert(1, 'l', 'l'));
console.log(capacity.convert(1, 'l', 'dl'));
console.log(capacity.convert(1, 'l', 'cl'));
console.log(capacity.convert(1, 'l', 'ml'));
console.log('Conversao para volume');
console.log(volume.convert(1, 'm³', 'km³'));
console.log(volume.convert(1, 'm³', 'hm³'));
console.log(volume.convert(1, 'm³', 'dam³'));
console.log(volume.convert(1, 'm³', 'm³'));
console.log(volume.convert(1, 'm³', 'dm³'));
console.log(volume.convert(1, 'm³', 'cm³'));
console.log(volume.convert(1, 'm³', 'mm³'));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const unidades = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];
const error = (unity) => {
    throw new Error(`A unidade ${unity} é invalida`);
};
const convert = (valor, unidadeBase, unidadeParaConversao) => {
    if (!unidades.includes(unidadeBase))
        error(unidadeBase);
    if (!unidades.includes(unidadeParaConversao))
        error(unidadeParaConversao);
    const indexDaUnidadeBase = unidades.indexOf(unidadeBase);
    const indexDaunidadeParaConversao = unidades.indexOf(unidadeParaConversao);
    const expoente = indexDaUnidadeBase - indexDaunidadeParaConversao;
    const unidadeConvertida = valor * Math.pow(10, expoente);
    return `${valor}${unidadeBase} é igual a ${unidadeConvertida}${unidadeParaConversao}`;
};
exports.convert = convert;

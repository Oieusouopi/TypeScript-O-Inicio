"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const unidades = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];
const error = (unidade) => {
    throw new Error(`Unidade ${unidade} é invalida`);
};
const convert = (valor, unidadeBase, unidadeParaConversao) => {
    if (!unidades.includes(unidadeBase))
        error(unidadeBase);
    if (!unidades.includes(unidadeParaConversao))
        error(unidadeParaConversao);
    const indexDaUnidadeBase = unidades.indexOf(unidadeBase);
    const indexDaunidadeParaConversao = unidades.indexOf(unidadeParaConversao);
    const expoente = indexDaunidadeParaConversao - indexDaUnidadeBase;
    const unidadeConvertida = valor * Math.pow(10, expoente);
    return `${valor}${unidadeBase} é igual a ${unidadeConvertida}${unidadeParaConversao}`;
};
exports.convert = convert;

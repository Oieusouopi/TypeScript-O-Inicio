"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const unidades = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
const error = (unidade) => {
    throw new Error(`Esta unidade ${unidade} é invalida`);
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

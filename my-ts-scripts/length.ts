const unidades: string[] = ["km","hm","dam","m","dm","cm","mm"];

const error = (unity: string): never => {
    throw new Error (`A unidade ${ unity } é invalida`);
};

export const convert = (valor: number, unidadeBase: string, unidadeParaConversao: string): string => {
    if (!unidades.includes(unidadeBase)) error(unidadeBase);
    if (!unidades.includes(unidadeParaConversao)) error(unidadeParaConversao);

    const indexDaUnidadeBase: number = unidades.indexOf(unidadeBase);
    const indexDaunidadeParaConversao: number = unidades.indexOf(unidadeParaConversao);
    const expoente: number = indexDaunidadeParaConversao - indexDaUnidadeBase;
    const unidadeConvertida: number = valor * Math.pow(10, expoente);
    return `${ valor }${ unidadeBase } é igual a ${unidadeConvertida}${unidadeParaConversao}`;
};
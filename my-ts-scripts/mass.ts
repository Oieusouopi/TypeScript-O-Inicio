const unidades: string[] = ['kg','hg','dag','g','dg','cg', 'mg'];

const error = (unidade: string):never => {
    throw new Error(`Esta unidade ${ unidade } é invalida`);
};

export const convert = (valor: number, unidadeBase: string, unidadeParaConversao: string): string => {
    if (!unidades.includes(unidadeBase)) error(unidadeBase);
    if (!unidades.includes(unidadeParaConversao)) error(unidadeParaConversao);

    const indexDaUnidadeBase: number = unidades.indexOf(unidadeBase);
    const indexDaunidadeParaConversao: number = unidades.indexOf(unidadeParaConversao);
    const expoente: number = indexDaunidadeParaConversao - indexDaUnidadeBase;
    const unidadeConvertida: number = valor * Math.pow(10, expoente) ;
    return `${ valor }${ unidadeBase } é igual a ${unidadeConvertida}${unidadeParaConversao}`;
};
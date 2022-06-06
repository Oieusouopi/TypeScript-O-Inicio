const unidades: string[] = ['km³','hm³','dam³','m³','dm³','cm³','mm³'];

const error = (unidade: string) => {
    throw new Error(`Unidade ${ unidade } é invalida`);
};

export const convert = (valor: number, unidadeBase: string, unidadeParaConversao: string) => {
    if (!unidades.includes(unidadeBase)) error(unidadeBase);
    if (!unidades.includes(unidadeParaConversao)) error(unidadeParaConversao);

    const indexDaUnidadeBase: number = unidades.indexOf(unidadeBase);
    const indexDaunidadeParaConversao: number = unidades.indexOf(unidadeParaConversao);
    const expoente: number = indexDaunidadeParaConversao - indexDaUnidadeBase;
    const unidadeConvertida: number = valor * Math.pow(10, expoente) ;
    return `${ valor }${ unidadeBase } é igual a ${unidadeConvertida}${unidadeParaConversao}`;
};
class estudante {
    private _matricula: number;
    private _nome: string;
    private _notasDeProvas: number[];
    private _notasDeTrabalhos: number[];

    constructor(nome: string, notasDeProvas: number[], notasDeTrabalhos: number[] ) {
        if (notasDeProvas.length < 3) throw Error('nota inválida');
        if (notasDeTrabalhos.length < 2) throw Error('nota de trabalho inválida');
        this._matricula = Date.now();
        this._nome = nome;
        this._notasDeProvas = notasDeProvas;
        this._notasDeTrabalhos = notasDeTrabalhos;
    }

    public get getMatricula(): number { return this._matricula };

    public set setMatricula(matricula: number) { this._matricula = matricula };

    public get getNome(): string { return this._nome };

    public set setNome(nome: string) { this._nome = nome; };

    public get getNotasDeProvas(): number[] { return this._notasDeProvas };

    public set setNotasDeProvas(notasDeProvas: number[]) {
      if (notasDeProvas.length ===  3) this._notasDeProvas = notasDeProvas
    };

    public get getNotasDeTrabalhos(): number[] { return this._notasDeTrabalhos };

    public set setNotasDeTrabalhos(notasDeTrabalhos: number[]) {
      if (notasDeTrabalhos.length === 1) this._notasDeTrabalhos = notasDeTrabalhos;
    };

    public somaDasNotas() {
        const totalDaNotaDasProvas = this._notasDeProvas.reduce((acc, curr) => acc + curr);
        const totalDaNotasDosTrabalhos = this._notasDeTrabalhos.reduce((acc, curr) => acc + curr);
        console.log(totalDaNotaDasProvas + totalDaNotasDosTrabalhos);
    };

    public mediaDasNotas() {
        const totalDaNotaDasProvas = this._notasDeProvas.reduce((acc, curr) => acc + curr);
        const totalDaNotasDosTrabalhos = this._notasDeTrabalhos.reduce((acc, curr) => acc + curr);
        console.log((totalDaNotaDasProvas + totalDaNotasDosTrabalhos) / (this._notasDeProvas.length + this._notasDeTrabalhos.length))
    }
}
const estudante1 = new estudante('rafael', [1,2,3], [1,2]);

estudante1.mediaDasNotas();
console.log(estudante1.getNome);
console.log(estudante1.getMatricula);
console.log(estudante1.getNotasDeProvas);
console.log(estudante1.getNotasDeTrabalhos);
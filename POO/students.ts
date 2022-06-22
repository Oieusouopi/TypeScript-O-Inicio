class estudante {
    private _matricula: number;
    private _nome: string;
    private _notasDeProvas: number[];
    private _notasDeTrabalho: number[];

    constructor(nome: string, notasDeProvas: number[], notasDeTrabalho: number[]) {
        this._matricula = Date.now();
        this._nome = nome;
        this._notasDeProvas = notasDeProvas;
        this._notasDeTrabalho = notasDeTrabalho;
    }

    public get getMatricula(): number { return this._matricula };

    public set setMatricula(matricula: number) { this._matricula = matricula };

    public get getNome(): string { return this._nome };

    public set setNome(nome: string) { this._nome = nome; };

    public get getNotasDeProvas(): number[] { return this._notasDeProvas };

    public set setNotasDeProvas(notasDeProvas: number[]) {
      if (notasDeProvas.length ===  3) this._notasDeProvas = notasDeProvas
    };

    public get getNotasDeTrabalhos(): number[] { return this._notasDeTrabalho };

    public set setNotasDeTrabalhos(notasDeTrabalhos: number[]) {
      if (notasDeTrabalhos.length === 1) this._notasDeTrabalho = notasDeTrabalhos;
    };

    public somaDasNotas() {
        const totalDaNotaDasProvas = this._notasDeProvas.reduce((acc, curr) => acc + curr);
        const totalDaNotasDosTrabalhos = this._notasDeTrabalho.reduce((acc, curr) => acc + curr);
        console.log(totalDaNotaDasProvas + totalDaNotasDosTrabalhos);
    };

    public mediaDasNotas() {
        const totalDaNotaDasProvas = this._notasDeProvas.reduce((acc, curr) => acc + curr);
        const totalDaNotasDosTrabalhos = this._notasDeTrabalho.reduce((acc, curr) => acc + curr);
        console.log((totalDaNotaDasProvas + totalDaNotasDosTrabalhos) / (this._notasDeProvas.length + this._notasDeTrabalho.length))
    }
}
const estudante1 = new estudante('rafael', [1,2,3,4], [1,2]);

estudante1.mediaDasNotas();
console.log(estudante1.getNome);
console.log(estudante1.getMatricula);
console.log(estudante1.getNotasDeProvas);
console.log(estudante1.getNotasDeTrabalhos);
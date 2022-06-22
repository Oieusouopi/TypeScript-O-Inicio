"use strict";
class estudante {
    constructor(nome, notasDeProvas, notasDeTrabalho) {
        this._matricula = Date.now();
        this._nome = nome;
        this._notasDeProvas = notasDeProvas;
        this._notasDeTrabalho = notasDeTrabalho;
    }
    get getMatricula() { return this._matricula; }
    ;
    set setMatricula(matricula) { this._matricula = matricula; }
    ;
    get getNome() { return this._nome; }
    ;
    set setNome(nome) { this._nome = nome; }
    ;
    get getNotasDeProvas() { return this._notasDeProvas; }
    ;
    set setNotasDeProvas(notasDeProvas) {
        if (notasDeProvas.length === 3)
            this._notasDeProvas = notasDeProvas;
    }
    ;
    get getNotasDeTrabalhos() { return this._notasDeTrabalho; }
    ;
    set setNotasDeTrabalhos(notasDeTrabalhos) {
        if (notasDeTrabalhos.length === 1)
            this._notasDeTrabalho = notasDeTrabalhos;
    }
    ;
    somaDasNotas() {
        const totalDaNotaDasProvas = this._notasDeProvas.reduce((acc, curr) => acc + curr);
        const totalDaNotasDosTrabalhos = this._notasDeTrabalho.reduce((acc, curr) => acc + curr);
        console.log(totalDaNotaDasProvas + totalDaNotasDosTrabalhos);
    }
    ;
    mediaDasNotas() {
        const totalDaNotaDasProvas = this._notasDeProvas.reduce((acc, curr) => acc + curr);
        const totalDaNotasDosTrabalhos = this._notasDeTrabalho.reduce((acc, curr) => acc + curr);
        console.log((totalDaNotaDasProvas + totalDaNotasDosTrabalhos) / (this._notasDeProvas.length + this._notasDeTrabalho.length));
    }
}
const estudante1 = new estudante('rafael', [1, 2, 3, 4], [1, 2]);
estudante1.mediaDasNotas();
console.log(estudante1.getNome);
console.log(estudante1.getMatricula);
console.log(estudante1.getNotasDeProvas);
console.log(estudante1.getNotasDeTrabalhos);

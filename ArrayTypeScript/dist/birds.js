function printBird(bd) {
    console.log("Todos esses passaros voam ? ".concat(bd.voador));
    console.log("Todos esses passaros tem bico ? ".concat(bd.bico));
    console.log("Todos esses passaros tem penas ? ".concat(bd.penas));
}
;
printBird({ voador: true, bico: true, penas: true });

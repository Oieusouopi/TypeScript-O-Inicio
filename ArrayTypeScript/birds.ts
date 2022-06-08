type Birds = {
    bico: boolean,
    voador: boolean,
    penas: boolean,
};

function printBird(bd: Birds): void {
    console.log(`Todos esses passaros voam ? ${ bd.voador }`);
    console.log(`Todos esses passaros tem bico ? ${ bd.bico }`);
    console.log(`Todos esses passaros tem penas ? ${ bd.penas }`);
};

printBird({ voador: true, bico: true, penas: true });
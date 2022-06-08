var actions;
(function (actions) {
    actions[actions["salvar"] = 0] = "salvar";
    actions[actions["imprimir"] = 1] = "imprimir";
    actions[actions["abrir"] = 2] = "abrir";
    actions[actions["visualizar"] = 3] = "visualizar";
    actions[actions["fechar"] = 4] = "fechar";
})(actions || (actions = {}));
;
console.log(actions.salvar);
console.log(actions.imprimir);
console.log(actions.abrir);
console.log(actions.visualizar);
console.log(actions.fechar);

enum StatusCodes {
    OK = 200,
    BadRequest = 400,
    Unauthorized,
    PaymentRequired,
    Forbidden,
    NotFound,
  }
  
  const ok = StatusCodes.OK;
  const indiceOk = StatusCodes["OK"];
  const stringBadRequest = StatusCodes.Unauthorized;
  
  console.log(ok); //saída: 200
  console.log(indiceOk); //saída: 200
  console.log(stringBadRequest); //saída: BadRequest
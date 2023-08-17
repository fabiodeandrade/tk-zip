function cepNumberFormater(cep) {
  if (typeof cep == "number") {
    throw new TypeError("Cep must be a string");
  }
  const result = cep.replace(/[^\w\s]/gi, "");

  if (result.length > 8) {
    throw new Error("Cep Number is too big");
  } else if (result.length < 8) {
    throw new Error("Cep number is too small");
  }

  return Number(result);
}

module.exports = {
  cepNumberFormater,
};

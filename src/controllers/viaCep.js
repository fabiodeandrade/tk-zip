const { responseHandler } = require("../handles/responseHandler");

async function getViaCep(cep) {
  const options = {
    method: "GET",
    mode: "cors",
    headers: {
      "content-type": "application/json;charset=utf-8",
    },
    timeout: 30000,
  };
  const response = await fetch(
    `https://viacep.com.br/ws/${cep}/json/`,
    options
  );

  const data = await responseHandler(response);

  return data;
}

module.exports = {
  getViaCep,
};

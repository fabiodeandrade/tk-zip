const { responseHandler } = require("../handles/responseHandler");

async function brasilApi(cep) {
  const options = {
    method: "GET",
    mode: "cors",
    headers: {
      "content-type": "application/json;charset=utf-8",
    },
    timeout: 30000,
  };
  const response = await fetch(
    `https://brasilapi.com.br/api/cep/v1/${cep}`,
    options
  );
  const data = await responseHandler(response);

  return data;
}

module.exports = {
  brasilApi,
};

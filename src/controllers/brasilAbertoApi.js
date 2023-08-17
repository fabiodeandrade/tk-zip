const { responseHandler } = require("../handles/responseHandler");

async function brasilAbertoApi(cep) {
  const options = {
    method: "GET",
    mode: "cors",
    headers: {
      "content-type": "application/json;charset=utf-8",
    },
    timeout: 30000,
  };
  const response = await fetch(
    `https://brasilaberto.com/api/v1/zipcode/${cep}`,
    options
  );
  const data = await responseHandler(response);

  return data;
}

module.exports = {
  brasilAbertoApi,
};

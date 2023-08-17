const { apiCep } = require("../controllers/apicep");
const { brasilAbertoApi } = require("../controllers/brasilAbertoApi");
const { brasilApi } = require("../controllers/brasilApi");
const { openCep } = require("../controllers/openCep");
const { getViaCep } = require("../controllers/viaCep");

async function apiComposer(cepNumber) {
  try {
    const fastResponse = await Promise.race([
      apiCep(cepNumber),
      brasilAbertoApi(cepNumber),
      brasilApi(cepNumber),
      openCep(cepNumber),
      getViaCep(cepNumber),
    ]);

    return fastResponse;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  apiComposer,
};

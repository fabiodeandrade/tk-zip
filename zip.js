"use strict";

const { apiComposer } = require("./src/composer/apiComposer");
const { cepNumberFormater } = require("./src/formater/cepNumberFormater");

/**
 * Asynchronously retrieves data from an API by zip code.
 *
 * @param {string} cepCode - The zip code to retrieve data for.
 * @return {Promise} A Promise that resolves to the retrieved data.
 * @example zip("12345678") / zip("123456-78")
 * @author Fábio de Andrade
 */
async function zip(cepCode) {
  const formatedCepNumber = cepNumberFormater(cepCode);
  try {
    const data = await apiComposer(formatedCepNumber);
    return data;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  zip,
};

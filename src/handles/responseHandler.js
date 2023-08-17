async function responseHandler(response) {
  if (response.status !== 200) {
    throw new Error(
      "> Cep not found, try another one >> :" + response.statusText
    );
  } 

  return await response.json();
}

module.exports = {
  responseHandler,
};

async function cepLa(cep) {
  const response = await fetch(`http://cep.la/${cep}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const data = await response.json();
  
  return data;
}

module.exports = {
  cepLa,
};

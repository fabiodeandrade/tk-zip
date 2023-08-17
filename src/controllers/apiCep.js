async function apiCep(cep) {
  const options = {
    method: "GET",
    mode: "cors",
    headers: {
      "content-type": "application/json;charset=utf-8",
    },
    timeout: 30000,
  };

  const response = await fetch(
    `https://cdn.apicep.com/file/apicep/${cep}.json`,
    options
  );

  const data = await responseFilter(response);

  return data;
}

async function responseFilter(response) {
  if (response.status !== 200) {
    throw new Error("Cep not found");
  }

  return await response.json();
}

module.exports = {
  apiCep,
};

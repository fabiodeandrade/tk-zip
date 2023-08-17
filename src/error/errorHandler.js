async function ErrorHandler(message, type) {
  return {
    message: message,
    type: type,
  };
}

module.exports = {
  ErrorHandler,
};

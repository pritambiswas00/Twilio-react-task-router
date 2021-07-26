const ClientCapabilityToken = async (workerSID) => {
  try {
    const workerSIDURI = encodeURI(workerSID);
    const ClientToken = await fetch(
      `http://localhost:3000/get-token?workerSid=${workerSIDURI}`
    );
    if (!ClientToken.ok) {
      throw new Error();
    } else {
      const response = await ClientToken.text();
      return response;
    }
  } catch (error) {
    throw new Error();
  }
};

export { ClientCapabilityToken };

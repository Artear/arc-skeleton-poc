/* eslint-disable no-prototype-builtins */
const resolve = query => {
  const requestUri = `https://www.ciudad.com.ar/services2/secciones/espectaculos.json?cantidad=5`;
  return requestUri;
};

export default {
  resolve,
  params: {
    term: "text"
  }
};

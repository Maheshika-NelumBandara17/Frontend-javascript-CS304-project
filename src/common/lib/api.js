import axios from "axios";

export const request = (url, method, requestData) =>
  new Promise(async (resolve, reject) => {
    const params = method === "GET" ? requestData : null;
    const data = method === "GET" ? null : requestData;

    // headers = headers ? headers : {};

    axios({
      url,
      method,
      data,
      params,
      // headers,
    })
      .then(async (response) => {
        resolve(response.data);
      })
      .catch(async (error) => {
        reject(error);
      });
  });

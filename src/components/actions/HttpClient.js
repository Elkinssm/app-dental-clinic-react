import axios from "axios";

axios.defaults.baseURL = "";

axios.interceptors.request.use(
  (config) => {
    const token_app = window.localStorage.getItem("token_app");
    if (token_app) {
      config.headers.Authorization = `Bearer ${token_app}`;
      return config;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    if (
      (error?.response?.status === 401 || error?.response?.status === 403) &&
      !error?.response?.config?.url?.includes("reset-password")
    ) {
      console.log(error?.response);
      window.localStorage.removeItem("token_app");
      window.location.assign(`/auth/login/:message`);
    }
    return Promise.reject(error);
  }
);

const requestGeneric = {
  get: (url) => axios.get(url),
  post: (url, body) => axios.post(url, body),
  put: (url, body) => axios.put(url, body),
  patch: (url, body) => axios.patch(url, body),
  delete: (url) => axios.delete(url),
};

export default requestGeneric;

import axios from "axios";

export const login = (loginData) => {
  return new Promise((resolve, reject) => {
    const headers = {
      "Content-Type": "application/json",
    };
    axios
      .post(`http://localhost:8081/auth/login`, loginData, headers)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });
};

export const register = (registertData) => {
  return new Promise((resolve, reject) => {
    const headers = {
      "Content-Type": "application/json",
    };
    axios
      .post(`http://localhost:8081/auth/new`, registertData, headers)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });
};

// export const logoutUser = (dispatch, refresh_token) => {
//   return new Promise((resolve, reject) => {
//     const headers = {
//       "Content-Type": "application/json",
//     };
//     let refreshToken = {
//       refreshToken: refresh_token,
//     };
//     axiosClient
//       .post(`${AUTH_URL}${LOGOUT_POST}`, refreshToken, headers)
//       .then((response) => {
//         resolve(response);
//       })
//       .catch((error) => {
//         if (typeof error.response === "undefined") {
//           console.log("A network error occurred. ");
//           reject({
//             error: "technical_error",
//             error_description:
//               "Occurió un problema comuniquese con el administrador.",
//           });
//         }
//         resolve(error.response);
//       });
//   });
// };

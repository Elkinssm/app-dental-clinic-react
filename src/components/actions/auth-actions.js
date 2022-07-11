import HttpClient from "./HttpClient";

export const registerPatient = (patientData) => {
  return new Promise((resolve, reject) => {
    const headers = {
      "Content-Type": "application/json",
    };
    HttpClient.post(`http://localhost:8081/patient/add`, patientData, headers)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });
};

export const getAllPatients = () => {
  return new Promise((resolve, reject) => {
    const headers = {
      "Content-Type": "application/json",
    };
    HttpClient.get(`http://localhost:8081/patient/all`, headers)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        resolve(error.response);
        reject(error.response);
      });
  });
};

export const getPatientById = (id) => {
  return new Promise((resolve, reject) => {
    const headers = {
      "Content-Type": "application/json",
    };
    HttpClient.get(
      `http://localhost:8081/patient/all${id}`,

      headers
    )
      .then((response) => {
        if (response.data.result) {
          resolve(response);
        }
        resolve(response);
      })
      .catch((error) => {
        reject(error.response);
        resolve(error.response);
      });
  });
};

export const deletePatient = (body) => {
  return new Promise((resolve, reject) => {
    const headers = {
      "Content-Type": "application/json",
    };
    HttpClient.delete(`http://localhost:8081/patient/delete`, headers)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });
};

export const updatePatient = (body) => {
  return new Promise((resolve, reject) => {
    const headers = {
      "Content-Type": "application/json",
    };
    HttpClient.put(`http://localhost:8081/patient/update`, body, headers``)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });
};

export const getAllDentist = () => {
  return new Promise((resolve, reject) => {
    const headers = {
      "Content-Type": "application/json",
    };
    HttpClient.get(`http://localhost:8081/dentist/all`, headers)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        resolve(error.response);
        reject(error.response);
      });
  });
};

export const registerDentist = (dentsitData) => {
  return new Promise((resolve, reject) => {
    const headers = {
      "Content-Type": "application/json",
    };
    HttpClient.post(`http://localhost:8081/dentist/add`, dentsitData, headers)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });
};

export const getDentistById = (id) => {
  return new Promise((resolve, reject) => {
    const headers = {
      "Content-Type": "application/json",
    };
    HttpClient.get(
      `http://localhost:8081/dentist/all${id}`,

      headers
    )
      .then((response) => {
        if (response.data.result) {
          resolve(response);
        }
        resolve(response);
      })
      .catch((error) => {
        reject(error.response);
        resolve(error.response);
      });
  });
};

export const updateDentist = (body) => {
  return new Promise((resolve, reject) => {
    const headers = {
      "Content-Type": "application/json",
    };
    HttpClient.put(`http://localhost:8081/dentist/update`, body, headers``)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });
};

export const deleteDentist = (body) => {
  return new Promise((resolve, reject) => {
    const headers = {
      "Content-Type": "application/json",
    };
    HttpClient.delete(`http://localhost:8081/dentist/delete`, headers)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });
};

export const getAllTurn = () => {
  return new Promise((resolve, reject) => {
    const headers = {
      "Content-Type": "application/json",
    };
    HttpClient.get(`http://localhost:8081/turn/all`, headers)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        resolve(error.response);
        reject(error.response);
      });
  });
};

export const registerTurn = (turnData) => {
  return new Promise((resolve, reject) => {
    const headers = {
      "Content-Type": "application/json",
    };
    HttpClient.post(`http://localhost:8081/turn/add`, turnData, headers)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });
};

export const getTurntById = (id) => {
  return new Promise((resolve, reject) => {
    const headers = {
      "Content-Type": "application/json",
    };
    HttpClient.get(
      `http://localhost:8081/turn/all${id}`,

      headers
    )
      .then((response) => {
        if (response.data.result) {
          resolve(response);
        }
        resolve(response);
      })
      .catch((error) => {
        reject(error.response);
        resolve(error.response);
      });
  });
};

export const updateTurn = (body) => {
  return new Promise((resolve, reject) => {
    const headers = {
      "Content-Type": "application/json",
    };
    HttpClient.put(`http://localhost:8081/turn/update`, body, headers``)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });
};

export const deleteTurn = (body) => {
  return new Promise((resolve, reject) => {
    const headers = {
      "Content-Type": "application/json",
    };
    HttpClient.delete(`http://localhost:8081/turn/delete`, headers)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });
};

import http from "../http-common";

const get = establecimiento_id => {
  console.log(establecimiento_id)
  return http.get(`soaps/establecimiento/${establecimiento_id}`);
};

export default {get};
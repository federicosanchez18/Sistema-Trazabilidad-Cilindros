import http from "../http-common";

const getAll = () => {
  return http.get("/tipo-tramites");
};

const getPorNombre = nombre => {
  return http.get(`/tipo-tramites/${nombre}`);
};

const getPorEstablecimiento = nombre => {
  return http.get(`/tipo-tramites/con-establecimiento?tipo_tramite=${nombre}&establecimiento_id=33926`);
};

export default {
  getAll,
  getPorNombre,
  getPorEstablecimiento,
};
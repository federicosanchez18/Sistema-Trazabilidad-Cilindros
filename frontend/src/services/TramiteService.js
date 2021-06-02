import http from "../http-common";

const getAll = () => {
  return http.get("/tramites");
};

const get = id => {
  return http.get(`/tramites/${id}`);
};

const create = data => {
  return http.post("/tramites", data);
};

const update = (id, data) => {
  return http.put(`/tramites/${id}`, data);
};

const remove = id => {
  return http.delete(`/tramites/${id}`);
};

const subidaArchivo = data => {
  return http.post("/tramites/subida-archivo", data);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  subidaArchivo
};
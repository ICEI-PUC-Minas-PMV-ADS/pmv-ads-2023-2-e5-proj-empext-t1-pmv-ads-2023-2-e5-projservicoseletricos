import http from "../http";

export async function getServices() {
  const { data } = await http.get(`api/Servicos`);
  return data;
}

export async function createService(reqData) {
  const { data } = await http.post(`api/Servicos`, reqData);
  return data;
}

export async function getServiceById(query) {
  const id = query.queryKey[1];
  const { data } = await http.get(`api/Servicos/${id}`);
  return data;
}

export async function editService(reqData) {
  const { data } = await http.put(`api/Servicos/${reqData.id}`, reqData);
  return data;
}

export async function deleteService(id) {
  const { data } = await http.delete(`api/Servicos/${id}`);
  return data;
}
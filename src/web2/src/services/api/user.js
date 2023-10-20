import http from "../http";

export async function getUsers() {
  const { data } = await http.get(`api/Usuarios`);
  return data;
}

export async function createUser(reqData) {
  const { data } = await http.post(`api/Usuarios`, reqData);
  return data;
}

export async function getUserById(query) {
  const id = query.queryKey[1];
  const { data } = await http.get(`api/Usuarios/${id}`);
  return data;
}

export async function editUser(reqData) {
  const { data } = await http.put(`api/Usuarios/${reqData.id}`, reqData);
  return data;
}
import http from "../http";

export async function getProducts() {
  const { data } = await http.get("/produtos");
  return data;
}

export async function createProducts(reqData) {
  const { data } = await http.post("/produtos", reqData);
  return data;
}

export async function editProduct(reqData) {
  const { data } = await http.put(`/produtos/${reqData.id}`, reqData);
  return data;
}

export async function getProductById(query) {
  const id = query.queryKey[1];
  const { data } = await http.get(`/produtos/${id}`);
  return data;
}

export async function deleteProduct(reqData) {
  const { data } = await http.delete(`/produtos/${reqData.id}`);
  return data;
}

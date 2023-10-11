import http from "../http";

export async function getProducts() {
  const { data } = await http.get("api/Produtos");
  return data;
}

export async function createProducts(reqData) {
  const { data } = await http.post("api/Produtos", reqData);
  return data;
}

export async function editProduct(reqData) {
  const { data } = await http.put(`api/Produtos/${reqData.id}`, reqData);
  return data;
}

export async function getProductById(query) {
  const id = query.queryKey[1];
  const { data } = await http.get(`api/Produtos/${id}`);
  return data;
}

export async function deleteProduct(reqData) {
  const { data } = await http.delete(`api/Produtos/${reqData.id}`);
  return data;
}

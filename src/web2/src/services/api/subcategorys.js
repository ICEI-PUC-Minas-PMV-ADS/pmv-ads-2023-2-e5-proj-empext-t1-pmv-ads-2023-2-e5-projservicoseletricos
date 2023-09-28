import http from "../http";

export async function getSubCategorys() {
  const { data } = await http.get("api/SubCategorias");
  return data;
}

export async function createSubcategory(reqData) {
  const { data } = await http.post("api/SubCategorias", reqData);
  return data;
}

export async function editSubcategory(reqData) {
  const { data } = await http.put(`api/SubCategorias/${reqData.id}`, reqData);
  return data;
}

export async function getSubcategoryById(query) {
  const id = query.queryKey[1];
  const { data } = await http.get(`api/SubCategorias/${id}`);
  return data;
}

export async function deleteSubcategory(reqData) {
  const { data } = await http.delete(`api/SubCategorias/${reqData.id}`);
  return data;
}

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ProductForm() {
  const navigate = useNavigate();
  const [productData, setProductData] = useState({
    name: "",
    quantity: 0,
    image: null, // Inicialize com null, pois será um arquivo
    categoryId: "",
    subcategoryId: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    // Se o tipo do campo for "file," significa que é um campo de arquivo (imagem)
    const newValue = type === "file" ? e.target.files[0] : value;

    setProductData({
      ...productData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifique se o nome do produto não está vazio
    if (productData.name.trim() === "") {
      console.error("O nome do produto não pode estar vazio.");
      return; // Impede o envio do formulário
    }

    const formData = new FormData();
    formData.append("name", productData.name);
    formData.append("quantity", productData.quantity); // Adicione a quantidade aqui
    formData.append("image", productData.image);
    formData.append("categoryId", productData.categoryId);
    formData.append("subcategoryId", productData.subcategoryId);

    // Agora você pode enviar formData para a API
    fetch("http://localhost:3000/products/managamen", {
      method: "POST",
      body: formData, // Use formData em vez de JSON.stringify
    })
      .then((response) => {
        if (response.ok) {
          console.log("Produto cadastrado com sucesso!");
          navigate("/products/management");
        } else {
          console.error("Erro ao cadastrar o produto. Por favor coloque um nome e quantidade no produto.");
        }
      })
      .catch((error) => {
        console.error("Erro ao fazer a solicitação à API: " + error);
      });
  };

  return (
    <div>
      <h1>Cadastro de Produto</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome do Produto:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={productData.name}
          onChange={handleInputChange}
        />

        <label htmlFor="quantity">Quantidade:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={productData.quantity}
          onChange={handleInputChange}
        />

        <label htmlFor="image">Imagem:</label>
        <input
          type="file" // Campo de arquivo para a imagem
          id="image"
          name="image"
          onChange={handleInputChange}
        />

        {/* Outros campos de entrada aqui... */}

        <button type="submit">Cadastrar Produto</button>
      </form>
    </div>
  );
}

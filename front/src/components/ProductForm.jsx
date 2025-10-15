import { useState } from "react";

function ProductForm() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Produto cadastrado:", formData);
    setFormData({ name: "", price: "", description: "", image: "" });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4 text-yellow-900">Adicionar Produto</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="name"
          placeholder="Nome do produto"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Preço (R$)"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        />
        <textarea
          name="description"
          placeholder="Descrição"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          rows="3"
        />
        <input
          type="text"
          name="image"
          placeholder="URL da imagem"
          value={formData.image}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        />
        <button
          type="submit"
          className="w-full bg-yellow-500 text-yellow-900 font-semibold py-2 rounded-lg hover:bg-yellow-600 transition"
        >
          Salvar Produto
        </button>
      </form>
    </div>
  );
}

export default ProductForm;

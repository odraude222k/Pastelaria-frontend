import { useState } from "react";

function ProductListAdm() {
  const [products, setProducts] = useState([
    { id: 1, name: "Pastel de Carne", price: 8.0 },
    { id: 2, name: "Pastel de Queijo", price: 7.5 },
  ]);

  const removeProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4 text-yellow-900">Lista de Produtos</h2>
      <ul className="space-y-3">
        {products.map((p) => (
          <li
            key={p.id}
            className="flex justify-between items-center bg-yellow-50 p-3 rounded-lg"
          >
            <span className="font-semibold">{p.name}</span>
            <div className="space-x-2">
              <button className="text-blue-600 font-medium">Editar</button>
              <button
                onClick={() => removeProduct(p.id)}
                className="text-red-600 font-medium"
              >
                Remover
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListAdm;

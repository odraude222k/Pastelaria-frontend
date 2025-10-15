import { deleteProduct } from "../services/api";

function ProductCardAdm({ product, onEdit, onChange }) {
  const handleDelete = async () => {
    await deleteProduct(product.id);
    onChange();
  };

  return (
    <div className="bg-yellow-50 border rounded-lg p-4 flex flex-col items-center shadow-sm">
      <img
        src={product.image}
        alt={product.name}
        className="w-24 h-24 object-cover rounded mb-2"
      />
      <h3 className="font-semibold text-yellow-900">{product.name}</h3>
      <p className="text-yellow-700 text-sm">{product.description}</p>
      <p className="font-bold text-yellow-800 mt-2">R$ {product.price}</p>
      <div className="flex gap-2 mt-3">
        <button
          onClick={() => onEdit(product)}
          className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
        >
          Editar
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
        >
          Excluir
        </button>
      </div>
    </div>
  );
}

export default ProductCardAdm;

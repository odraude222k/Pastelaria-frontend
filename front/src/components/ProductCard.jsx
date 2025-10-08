import { Plus } from 'lucide-react';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden group">
      {/* Imagem do Produto */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {/* Badge de Categoria */}
        <div className="absolute top-3 left-3 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
          {product.category}
        </div>
      </div>

      {/* Conteúdo do Card */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {product.name}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Preço e Botão */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-amber-600">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
          </div>

          <button
            onClick={() => onAddToCart(product)}
            className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg"
          >
            <Plus className="w-4 h-4" />
            <span className="text-sm">Adicionar</span>
          </button>
        </div>
      </div>
    </div>
  );
}

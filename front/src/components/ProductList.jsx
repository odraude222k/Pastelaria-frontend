import ProductCard from './ProductCard';
import { menuItems } from '../data/menuItems';

export default function ProductList({ onAddToCart }) {
  // Agrupar produtos por categoria
  const categories = Array.from(new Set(menuItems.map(item => item.category)));

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Nosso Cardápio
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Salgados feitos com muito carinho e ingredientes frescos
        </p>
        <div className="mt-4 h-1 w-32 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
      </div>

      {/* Renderizar produtos por categoria */}
      {categories.map(category => (
        <div key={category} className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-lg">
              {category}
            </span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {menuItems
              .filter(item => item.category === category)
              .map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

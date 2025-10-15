import { ShoppingCart } from 'lucide-react';

export default function Header({ cartItemsCount, onCartClick }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-amber-600 to-orange-500 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo e Nome */}
          <div className="flex items-center gap-3">
            <span className="text-4xl">🍴</span>
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Pastelaria da Luzia
            </h1>
          </div>

          {/* Botão do Carrinho */}
          <button
            onClick={onCartClick}
            className="relative bg-white text-amber-600 px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-amber-50 transition-all duration-300 hover:scale-105 shadow-md flex items-center gap-2"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="hidden md:inline">Carrinho</span>
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
                {cartItemsCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Decoração inferior */}
      <div className="h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-amber-600"></div>
    </header>
  );
}

import { X, Minus, Plus, ShoppingBag } from 'lucide-react';

export default function Cart({
  isOpen,
  onClose,
  cartItems,
  onRemoveItem,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onCheckout
}) {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      ></div>

      {/* Painel do Carrinho */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header do Carrinho */}
          <div className="bg-gradient-to-r from-amber-600 to-orange-500 p-6 text-white">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <ShoppingBag className="w-6 h-6" />
                Seu Pedido
              </h2>
              <button
                onClick={onClose}
                className="hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-amber-100">
              {totalItems} {totalItems === 1 ? 'item' : 'itens'}
            </p>
          </div>

          {/* Lista de Itens */}
          <div className="flex-1 overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-400">
                <ShoppingBag className="w-16 h-16 mb-4 opacity-50" />
                <p className="text-lg">Seu carrinho está vazio</p>
                <p className="text-sm">Adicione alguns pastéis deliciosos!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map(item => (
                  <div
                    key={item.id}
                    className="bg-amber-50 rounded-xl p-4 shadow-sm border border-amber-100"
                  >
                    <div className="flex gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 mb-1">
                          {item.name}
                        </h3>
                        <p className="text-amber-600 font-bold mb-2">
                          R$ {item.price.toFixed(2).replace('.', ',')}
                        </p>

                        <div className="flex items-center justify-between">
                          {/* Controles de Quantidade */}
                          <div className="flex items-center gap-2 bg-white rounded-full p-1 shadow-sm">
                            <button
                              onClick={() => onDecreaseQuantity(item.id)}
                              className="w-7 h-7 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-700 flex items-center justify-center transition-colors duration-200"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center font-semibold text-gray-800">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onIncreaseQuantity(item.id)}
                              className="w-7 h-7 rounded-full bg-amber-500 hover:bg-amber-600 text-white flex items-center justify-center transition-colors duration-200"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>

                          {/* Botão Remover */}
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="text-red-500 hover:text-red-700 transition-colors duration-200"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Subtotal */}
                    <div className="mt-3 pt-3 border-t border-amber-200 flex justify-between items-center">
                      <span className="text-sm text-gray-600">Subtotal:</span>
                      <span className="font-bold text-gray-800">
                        R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer com Total e Botão */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-200 p-6 bg-gray-50">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-gray-700">Total:</span>
                <span className="text-3xl font-bold text-amber-600">
                  R$ {total.toFixed(2).replace('.', ',')}
                </span>
              </div>

              <button
                onClick={onCheckout}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Finalizar Pedido
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

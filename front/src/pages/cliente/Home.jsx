import { useState } from 'react';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';
import Cart from '../../components/Cart';

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Adicionar produto ao carrinho
  const handleAddToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);

      if (existingItem) {
        // Se o item já existe, aumenta a quantidade
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Se é um novo item, adiciona com quantidade 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });

    // Feedback visual (opcional)
    setIsCartOpen(true);
  };

  // Remover item do carrinho
  const handleRemoveItem = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // Aumentar quantidade
  const handleIncreaseQuantity = (productId) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Diminuir quantidade
  const handleDecreaseQuantity = (productId) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  // Finalizar pedido
  const handleCheckout = () => {
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemsList = cartItems.map(item => `${item.quantity}x ${item.name}`).join('\n');

    alert(`Pedido Finalizado!\n\n${itemsList}\n\nTotal: R$ ${total.toFixed(2).replace('.', ',')}\n\nObrigado por escolher a Pastelaria da Família!`);

    setCartItems([]);
    setIsCartOpen(false);
  };

  // Calcular total de itens no carrinho
  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header fixo */}
      <Header
        cartItemsCount={totalCartItems}
        onCartClick={() => setIsCartOpen(true)}
      />

      {/* Espaço para o header fixo */}
      <div className="h-20"></div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-500 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Bem-vindo à Pastelaria da Luzia
          </h2>
          <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto">
            Tradição e sabor em cada mordida.
          </p>
        </div>
      </section>

      {/* Lista de Produtos */}
      <ProductList onAddToCart={handleAddToCart} />

      {/* Carrinho */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveItem}
        onIncreaseQuantity={handleIncreaseQuantity}
        onDecreaseQuantity={handleDecreaseQuantity}
        onCheckout={handleCheckout}
      />

      {/* Footer */}
      <footer className="bg-gradient-to-r from-amber-600 to-orange-500 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-2">Pastelaria da Luzia</p>
          <p className="text-amber-100 text-sm">Feito com carinho e os melhores ingredientes</p>
          <p className="text-amber-100 text-xs mt-4">© 2025 - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
}

import { useState } from "react";
import ProductListAdm from "../../components/ProductListAdm";
import ProductForm from "../../components/ProductForm";
import OrdersList from "../../components/OrderList";

function Admin() {
  const [activeTab, setActiveTab] = useState("products");

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-yellow-400 p-6 shadow flex justify-between items-center">
        <h1 className="text-3xl font-bold text-yellow-900">Painel Administrativo</h1>
        <nav className="space-x-4">
          <button
            onClick={() => setActiveTab("products")}
            className={`px-4 py-2 rounded-lg font-semibold ${
              activeTab === "products"
                ? "bg-yellow-900 text-white"
                : "bg-white text-yellow-900"
            }`}
          >
            Produtos
          </button>
          <button
            onClick={() => setActiveTab("orders")}
            className={`px-4 py-2 rounded-lg font-semibold ${
              activeTab === "orders"
                ? "bg-yellow-900 text-white"
                : "bg-white text-yellow-900"
            }`}
          >
            Pedidos
          </button>
        </nav>
      </header>

      <main className="p-8">
        {activeTab === "products" ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ProductForm />
            <ProductListAdm />
          </div>
        ) : (
          <OrdersList />
        )}
      </main>
    </div>
  );
}

export default Admin;

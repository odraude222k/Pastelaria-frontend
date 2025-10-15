import OrderCard from "./OrderCard";

function OrdersList() {
  const orders = [
    {
      id: 1,
      customer: "João Silva",
      items: ["Pastel de Carne", "Coca-Cola"],
      total: 15.5,
    },
    {
      id: 2,
      customer: "Maria Oliveira",
      items: ["Pastel de Queijo", "Suco de Laranja"],
      total: 13.0,
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
}

export default OrdersList;

function OrderCard({ order }) {
  const handleAccept = () => alert(`Pedido #${order.id} aceito!`);
  const handleReject = () => alert(`Pedido #${order.id} recusado!`);

  return (
    <div className="bg-white rounded-xl shadow p-5 border border-yellow-200">
      <h3 className="text-lg font-bold text-yellow-900 mb-2">
        Pedido #{order.id}
      </h3>
      <p className="text-gray-700 mb-1">
        <span className="font-semibold">Cliente:</span> {order.customer}
      </p>
      <ul className="text-gray-600 mb-3">
        {order.items.map((item, idx) => (
          <li key={idx}>• {item}</li>
        ))}
      </ul>
      <p className="font-semibold text-yellow-900 mb-3">
        Total: R$ {order.total.toFixed(2)}
      </p>
      <div className="flex space-x-2">
        <button
          onClick={handleAccept}
          className="flex-1 bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition"
        >
          Aceitar
        </button>
        <button
          onClick={handleReject}
          className="flex-1 bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition"
        >
          Recusar
        </button>
      </div>
    </div>
  );
}

export default OrderCard;

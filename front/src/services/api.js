// Simulação de API (pode ser trocado pelo backend real futuramente)
const baseUrl = "http://localhost:3000"; // Exemplo

export async function getProducts() {
  const res = await fetch(`${baseUrl}/products`);
  return res.json();
}

export async function addProduct(product) {
  await fetch(`${baseUrl}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
}

export async function updateProduct(id, product) {
  await fetch(`${baseUrl}/products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
}

export async function deleteProduct(id) {
  await fetch(`${baseUrl}/products/${id}`, { method: "DELETE" });
}

export async function getOrders() {
  const res = await fetch(`${baseUrl}/orders`);
  return res.json();
}

export async function updateOrderStatus(id, status) {
  await fetch(`${baseUrl}/orders/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });
}

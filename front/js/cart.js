async function getProduct() {
  let response = await fetch(`http://localhost:3000/api/products/order/`);
  let data = await response.json();
  return data;
  console.log(data);
}

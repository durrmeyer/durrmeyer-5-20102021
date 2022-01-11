let params = new URL(document.location).searchParams;
let orderId = params.get('id');
document.querySelector('#orderId').innerText = orderId;
localStorage.clear();

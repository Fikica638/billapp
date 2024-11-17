let products = [];
let totalAmount = 0;

function addProduct() {
  const productName = document.getElementById('product-name').value;
  const productPrice = parseFloat(document.getElementById('product-price').value);
  const productQuantity = parseInt(document.getElementById('product-quantity').value);
 
  if (!productName || isNaN(productPrice) || isNaN(productQuantity)) {
    alert("Please enter valid product details.");
    return;
  }
 
  const productTotal = productPrice * productQuantity;
 
  // Add product to the array
  products.push({
    name: productName,
    price: productPrice,
    quantity: productQuantity,
    total: productTotal
  });
 
  // Update table and total amount
  updateBill();
 
  // Clear input fields
  document.getElementById('product-name').value = '';
  document.getElementById('product-price').value = '';
  document.getElementById('product-quantity').value = '';
}

function updateBill() {
  const billTableBody = document.querySelector('#bill-table tbody');
  billTableBody.innerHTML = '';
 
  totalAmount = 0;
 
  products.forEach((product, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${product.name}</td>
      <td>$${product.price.toFixed(2)}</td>
      <td>${product.quantity}</td>
      <td>$${product.total.toFixed(2)}</td>
      <td"><button onclick="deleteProduct(${index})" style="background-color:red;display:block;margin-left:auto;margin-right:auto; border-radius: 10px;">Delete Button</td>

    `;
    billTableBody.appendChild(row);
   
    totalAmount += product.total;
  });
 
  document.getElementById('total').textContent = `Total: $${totalAmount.toFixed(2)}`;
}
function deleteProduct(index) {
    products.splice(index, 1);
    updateBill();
    }


function generateBill() {
  if (products.length === 0) {
    alert("No products to generate bill.");
    return;
  }
 
  alert("Bill generated successfully!");
 
  products = [];
  updateBill();
}

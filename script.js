let cart = [];
const cartCountElement = document.getElementById('cart-count');
const cartTotalElement = document.createElement('h2');
cartTotalElement.id = 'cart-total';
document.getElementById('cart').appendChild(cartTotalElement);

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const id = product.getAttribute('data-id');
        const name = product.getAttribute('data-name');
        const price = parseFloat(product.getAttribute('data-price'));

        // Přidání produktu do košíku
        const existingProduct = cart.find(item => item.id === id);
        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push({ id, name, price, quantity: 1 });
        }

        updateCart();
    });
});

function updateCart() {
    cartCountElement.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    cartTotalElement.textContent = `Celková částka: ${totalPrice} Kč`;
}

// Zobrazit košík (pro demonstraci)
document.getElementById('view-cart').addEventListener('click', () => {
    alert('Košík: ' + JSON.stringify(cart, null, 2));
});
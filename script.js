let cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    alert(`Added ${productName} to the cart!`);
}

function getCartTotal() {
    return cart.reduce((total, item) => total + item.price, 0);
}

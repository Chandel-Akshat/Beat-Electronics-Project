document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product');
    const categoryFilter = document.getElementById('category-filter');
    const cartItems = [];
  
    // Event listener for "Add to Cart" button
    products.forEach((product) => {
      const button = product.querySelector('button');
  
      button.addEventListener('click', () => {
        const productName = product.querySelector('.name').textContent;
        addToCart(productName);
      });
    });
  
    // Event listener for category filter
    categoryFilter.addEventListener('change', () => {
      const selectedCategory = categoryFilter.value;
  
      products.forEach((product) => {
        const productCategory = product.dataset.category;
  
        if (selectedCategory === 'all' || productCategory === selectedCategory) {
          product.style.opacity = '1';
          product.style.pointerEvents = 'auto';
        } else {
          product.style.opacity = '0';
          product.style.pointerEvents = 'none';
        }
      });
    });
  
    // Function to add item to cart
    function addToCart(productName) {
      cartItems.push(productName);
      alert(`"${productName}" added to cart!`);
    }

    let count = 0;
      
        function increment() {
          count++;
          document.getElementById('addToCartButton').innerHTML = 'Add to Cart (' + count + ')';
        }
  });
  
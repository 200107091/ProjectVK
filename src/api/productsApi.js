async function fetchProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    
  }
  
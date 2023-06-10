const fetchProducts = async () => {
  const res = await fetch(`${baseApiUrl}/products`);
  const data = await res.json();

  const productsList = document.querySelector(".productsList");

  for (const product of data.products) {
    const newChild = document.createElement("div");
    newChild.innerHTML = productDataToHtml(product);

    productsList.appendChild(newChild);
  }
};

window.onload = () => {
  fetchProducts();
};

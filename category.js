const fetchCategory = async () => {
  const url = new URL(window.location.href);

  const categoryName = url.searchParams.get("categoryName");

  if (!categoryName) return;

  // Product is defined
  const res = await fetch(`${baseApiUrl}/products/category/${categoryName}`);
  const data = await res.json();

  const productsList = document.querySelector(".productsList");

  for (const product of data.products) {
    const newChild = document.createElement("div");
    newChild.innerHTML = productDataToHtml(product);

    productsList.appendChild(newChild);
  }
};

window.onload = fetchCategory;

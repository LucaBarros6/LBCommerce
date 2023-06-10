const addItemToCart = async (productId) => {
  const res = await fetch(`${baseApiUrl}/products/${productId}`);
  const product = await res.json();

  let prevItems = [];

  try {
    const parsed = JSON.parse(localStorage.getItem(cartLocalStorageKey));

    prevItems = parsed;
  } catch {
    /** */
  }

  localStorage.setItem(
    cartLocalStorageKey,
    JSON.stringify([...(prevItems || []), product])
  );
};

const fetchProduct = async () => {
  const url = new URL(window.location.href);

  const productId = url.searchParams.get("id");

  if (!productId) return;

  // Product is defined
  const res = await fetch(`${baseApiUrl}/products/${productId}`);
  const product = await res.json();

  const productDataDiv = document.querySelector(".productData");

  const productContainer = document.createElement("div");
  productContainer.innerHTML = `
    ${productDataToHtml(product)}
    <div class="descpr">${product.description}</div>
    <button class="buttoncart" onclick='addItemToCart(${product.id})'>Comprar</button>
  `;

  productDataDiv.appendChild(productContainer);
};

window.onload = fetchProduct;

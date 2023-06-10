const removeProductFromCart = (productId) => {
  let prevItems = [];

  try {
    const parsed = JSON.parse(localStorage.getItem(cartLocalStorageKey));

    prevItems = parsed;
  } catch {
    /** */
  }

  localStorage.setItem(
    cartLocalStorageKey,
    JSON.stringify(prevItems.filter((product) => product.id !== productId))
  );

  loadCart();
};

const loadCart = () => {
  try {
    const cart = JSON.parse(localStorage.getItem(cartLocalStorageKey));

    if (cart) {
      const productsList = document.querySelector(".productsList");

      productsList.innerHTML = "";
      for (const product of cart) {
        const newChild = document.createElement("div");
        newChild.innerHTML = `
			${productDataToHtml(product)}
			<button onclick='removeProductFromCart(${
        product.id
      })'>Remover do carrinho</button>
		`;

        productsList.appendChild(newChild);
      }
    }
  } catch {
    // Doesn't was products
  }
};

window.onload = () => {
  loadCart();
};

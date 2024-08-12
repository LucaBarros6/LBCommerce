const baseApiUrl = "https://fakestoreapi.com";

const cartLocalStorageKey = "cart-items";

const productRatingToStars = {
  2: `<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>`,
  3: `<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>`,
  4: `<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i>`,
  fallback:
    '<i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>',
};

const productDataToHtml = (product) => {
  return `
	<a href="detalhes.html?id=${product.id}"><img src="${
    product.image
  }" class="imgproducts" alt="${product.title}" /></a>
  <div class="titulopr">${product.title}</div>
  <div class="avprec">${
    productRatingToStars[parseInt(product.rating.rate)] ??
    productRatingToStars.fallback
  }</div>
  <div class="preçopr"><b>R$: ${product.price},00</b></div>
	`;
};

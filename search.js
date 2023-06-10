const fetchCategories = async () => {
  const res = await fetch(`${baseApiUrl}/products/categories`);
  const data = await res.json();

  const categoriesList = document.querySelector(".containercat");

  for (const category of data) {
    const categoryChild = document.createElement("a");
    categoryChild.className = "boxcat";
    categoryChild.href = `categoria.html?categoryName=${category}`;
    categoryChild.innerHTML = `
          <div><h2>${category}</h2></div>
	`;

    categoriesList.appendChild(categoryChild);
  }
};

const watchSearchInput = async () => {
  const input = document.querySelector(".search-input");

  const search = async (e) => {
    const productsList = document.querySelector(".productsList");
    productsList.innerHTML = "";

    if (!e.target.value.trim()) return;

    const res = await fetch(
      `${baseApiUrl}/products/search?query=${e.target.value}`
    );
    const data = await res.json();

    for (const product of data) {
      const newChild = document.createElement("div");
      newChild.innerHTML = productDataToHtml(product);

      productsList.appendChild(newChild);
    }
  };

  input.addEventListener("change", search);
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log(e);
      search(e);
    }
  });
};

window.onload = () => {
  fetchCategories();
  watchSearchInput();
};

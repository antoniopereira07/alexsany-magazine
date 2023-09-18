const catalogProducts = document.getElementById("container-product");

function displayAll() {
  const productsHidden = Array.from(
    catalogProducts.getElementsByClassName("hidden")
  );

  for (const product of productsHidden) {
    product.classList.remove("hidden");
  }
}

function hideMales() {
  displayAll();
  const productsMen = Array.from(
    catalogProducts.getElementsByClassName("males")
  );

  for (const product of productsMen) {
    product.classList.add("hidden");
  }
}

function hideFeminine() {
  displayAll();
  const productsFemale = Array.from(
    catalogProducts.getElementsByClassName("feminine")
  );

  for (const product of productsFemale) {
    product.classList.add("hidden");
  }
}

export function initializeFilters() {
  document
    .getElementById("display-all")
    .addEventListener("click", displayAll);
  document
    .getElementById("display-males")
    .addEventListener("click", hideFeminine);
  document
    .getElementById("display-feminine")
    .addEventListener("click", hideMales);
}

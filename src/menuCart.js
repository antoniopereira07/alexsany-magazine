import { catalog, saveLocalStorage, readLocalStorage } from "./utilities";

const idsProductCartWithQuantity = readLocalStorage("cart") ?? {};

function openCart() {
  document.getElementById("cart").classList.add("right-[0px]");
  document.getElementById("cart").classList.remove("right-[-360px]");
}

function closeCart() {
  document.getElementById("cart").classList.remove("right-[0px]");
  document.getElementById("cart").classList.add("right-[-360px]");
}

function goToCheckout() {
  if (Object.keys(idsProductCartWithQuantity).length === 0) {
    return;
  }
  window.location.href = "./checkout.html";
}

export function initializeCart() {
  const buttonCloseCart = document.getElementById("close-cart");
  const buttonOpenCart = document.getElementById("open-cart");
  const goToCheckoutButton = document.getElementById("finalize-purchase");

  buttonCloseCart.addEventListener("click", closeCart);
  buttonOpenCart.addEventListener("click", openCart);
  goToCheckoutButton.addEventListener("click", goToCheckout);
}

function removeFromCart(idProduct) {
  delete idsProductCartWithQuantity[idProduct];
  saveLocalStorage("cart", idsProductCartWithQuantity);
  updatePriceCart();
  renderProductsCart();
}

function incrementQuantityProduct(idProduct) {
  idsProductCartWithQuantity[idProduct]++;
  saveLocalStorage("cart", idsProductCartWithQuantity);
  updatePriceCart();
  updateInformationQuantity(idProduct);
}

function decreaseQuantityProduct(idProduct) {
  if (idsProductCartWithQuantity[idProduct] === 1) {
    removeFromCart(idProduct);
    return;
  }
  idsProductCartWithQuantity[idProduct]--;
  saveLocalStorage("cart", idsProductCartWithQuantity);
  updatePriceCart();
  updateInformationQuantity(idProduct);
}

function updateInformationQuantity(idProduct) {
  document.getElementById(`quantity-${idProduct}`).innerText =
    idsProductCartWithQuantity[idProduct];
}

function designProductInCart(idProduct) {
  const product = catalog.find((p) => p.id === idProduct);
  const containerProductsCart =
    document.getElementById("products-cart");

  const elementArticle = document.createElement("article"); //<article></article>
  const articleClasses = [
    "flex",
    "bg-slate-100",
    "rounded-lg",
    "p-1",
    "relative",
  ];

  for (const articleClass of articleClasses) {
    elementArticle.classList.add(articleClass);
  }
  //<article class="flex bg-slate-100 rounded-lg p-1 relative"></article>

  const cardProductCart = `<button id="remove-item-${product.id
    }" class="absolute top-0 right-2">
      <i
        class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"
      ></i>
    </button>
    <img
      src="./assets/img/${product.image}"
      alt="Carrinho: ${product.name}"
      class="h-24 rounded-lg"
    />
    <div class="p-2 flex flex-col justify-between">
      <p class="text-slate-900 text-sm">
        ${product.name}
      </p>
      <p class="text-slate-400 text-xs">Tamanho: M</p>
      <p class="text-green-700 text-lg">$${product.price}</p>
    </div>
    <div class='flex text-slate-950 items-end absolute bottom-0 right-2 text-lg'>
        <button id='decrement-product-${product.id}'>-</button>
        <p id='quantity-${product.id}' class='ml-2'>${idsProductCartWithQuantity[product.id]
    }</p>
        <button class='ml-2' id='increase-product-${product.id}'>+</button>
    </div>`;
  //<article class="flex bg-slate-100 rounded-lg p-1 relative">codigo do cartao do produto</article>

  elementArticle.innerHTML = cardProductCart;
  containerProductsCart.appendChild(elementArticle);

  document
    .getElementById(`decrement-product-${product.id}`)
    .addEventListener("click", () => decreaseQuantityProduct(product.id));

  document
    .getElementById(`increase-product-${product.id}`)
    .addEventListener("click", () => incrementQuantityProduct(product.id));

  document
    .getElementById(`remove-item-${product.id}`)
    .addEventListener("click", () => removeFromCart(product.id));
}

export function renderProductsCart() {
  const containerProductsCart =
    document.getElementById("products-cart");
  containerProductsCart.innerHTML = "";

  for (const idProduct in idsProductCartWithQuantity) {
    designProductInCart(idProduct);
  }
}

export function addToCart(idProduct) {
  if (idProduct in idsProductCartWithQuantity) {
    incrementQuantityProduct(idProduct);
    return;
  }
  idsProductCartWithQuantity[idProduct] = 1;
  saveLocalStorage("cart", idsProductCartWithQuantity);
  designProductInCart(idProduct);
  updatePriceCart();
}

export function updatePriceCart() {
  const priceCart = document.getElementById("total-price");
  let priceTotalCart = 0;
  for (const idProductInCart in idsProductCartWithQuantity) {
    priceTotalCart +=
      catalog.find((p) => p.id === idProductInCart).price *
      idsProductCartWithQuantity[idProductInCart];
  }
  priceCart.innerText = `Total: $${priceTotalCart}`;
}

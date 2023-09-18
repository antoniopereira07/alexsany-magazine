import {
  designProductCartSimple,
  readLocalStorage,
  eraseDoLocalStorage,
  saveLocalStorage,
} from "./src/utilities";

function designProductsCheckout() {
  const idsProductCartWithQuantity = readLocalStorage("cart") ?? {};
  for (const idProduct in idsProductCartWithQuantity) {
    designProductCartSimple(
      idProduct,
      "container-products-checkout",
      idsProductCartWithQuantity[idProduct]
    );
  }
}

function finishPurchase(event) {
  event.preventDefault();
  const idsProductCartWithQuantity = readLocalStorage("cart") ?? {};
  if (Object.keys(idsProductCartWithQuantity).length === 0) {
    return;
  }

  const currentDate = new Date();
  const orderPlaced = {
    dateOrder: currentDate,
    order: idsProductCartWithQuantity,
  };
  const orderHistory = readLocalStorage("historic") ?? [];
  const orderHistoryUpdated = [orderPlaced, ...orderHistory];

  saveLocalStorage("historic", orderHistoryUpdated);
  eraseDoLocalStorage("cart");

  window.location.href = "./requests.html";
}

designProductsCheckout();

document.addEventListener("submit", (event) => finishPurchase(event));

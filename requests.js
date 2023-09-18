import {
  readLocalStorage,
  designProductCartSimple,
} from "./src/utilities";

function createOrderHistory(orderDate) {
  const elementOrder = `<p class='text-xl text-bold my-4' >${new Date(
    orderDate.dateOrder
  ).toLocaleDateString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  })}</p>
    <section id='container-requests-${orderDate.dateOrder
    }' class='bg-slate-300 p-3 rounded-md' ></section>
    `;
  const main = document.getElementsByTagName("main")[0];
  main.innerHTML += elementOrder;

  for (const idProduct in orderDate.order) {
    designProductCartSimple(
      idProduct,
      `container-requests-${orderDate.dateOrder}`,
      orderDate.order[idProduct]
    );
  }
}

function renderHistoryOrders() {
  const historic = readLocalStorage("historic");
  for (const orderDate of historic) {
    createOrderHistory(orderDate);
  }
}

renderHistoryOrders();

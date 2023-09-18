export const catalog = [
  {
    id: "1",
    brand: "Zara",
    name: "Camisa Larga com Bolsos",
    price: 70,
    image: "product-1.jpg",
    feminine: false,
  },
  {
    id: "2",
    brand: "Zara",
    name: "Casaco Reto com Lã",
    price: 85,
    image: "product-2.jpg",
    feminine: true,
  },
  {
    id: "3",
    brand: "Zara",
    name: "Jaqueta com Efeito Camurça",
    price: 60,
    image: "product-3.jpg",
    feminine: false,
  },
  {
    id: "4",
    brand: "Zara",
    name: "Sobretudo em Mescla de Lã",
    price: 160,
    image: "product-4.jpg",
    feminine: false,
  },
  {
    id: "5",
    brand: "Zara",
    name: "Camisa Larga Acolchoada de Veludo Cotelê",
    price: 110,
    image: "product-5.jpg",
    feminine: false,
  },
  {
    id: "6",
    brand: "Zara",
    name: "Casaco de Lã com Botões",
    price: 170,
    image: "product-6.jpg",
    feminine: true,
  },
  {
    id: "7",
    brand: "Zara",
    name: "Casaco com Botões",
    price: 75,
    image: "product-7.jpg",
    feminine: true,
  },
  {
    id: "8",
    brand: "Zara",
    name: "Colete Comprido com Cinto",
    price: 88,
    image: "product-8.jpg",
    feminine: true,
  },
];

export function saveLocalStorage(key, information) {
  localStorage.setItem(key, JSON.stringify(information));
}

export function readLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function eraseDoLocalStorage(key) {
  localStorage.removeItem(key);
}

export function designProductCartSimple(
  idProduct,
  idContainerHtml,
  quantityProduct
) {
  const product = catalog.find((p) => p.id === idProduct);
  const containerProductsCart = document.getElementById(idContainerHtml);

  const elementArticle = document.createElement("article"); //<article></article>
  const articleClasses = [
    "flex",
    "bg-stone-200",
    "rounded-lg",
    "p-1",
    "relative",
    "mb-2",
    "w-96",
  ];

  for (const articleClass of articleClasses) {
    elementArticle.classList.add(articleClass);
  }
  //<article class="flex bg-slate-100 rounded-lg p-1 relative"></article>

  const cardProductCart = `
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
        <p id='quantity-${product.id}' class='ml-2'>${quantityProduct}</p>
    </div>`;
  //<article class="flex bg-slate-100 rounded-lg p-1 relative">codigo do cartao do produto</article>

  elementArticle.innerHTML = cardProductCart;
  containerProductsCart.appendChild(elementArticle);
}

import{r as h,c as d,s}from"./utilities-0c9e85c4.js";const n=h("cart")??{};function C(){document.getElementById("cart").classList.add("right-[0px]"),document.getElementById("cart").classList.remove("right-[-360px]")}function x(){document.getElementById("cart").classList.remove("right-[0px]"),document.getElementById("cart").classList.add("right-[-360px]")}function v(){Object.keys(n).length!==0&&(window.location.href="./checkout.html")}function $(){const t=document.getElementById("close-cart"),e=document.getElementById("open-cart"),c=document.getElementById("finalize-purchase");t.addEventListener("click",x),e.addEventListener("click",C),c.addEventListener("click",v)}function u(t){delete n[t],s("cart",n),o(),f()}function m(t){n[t]++,s("cart",n),o(),p(t)}function B(t){if(n[t]===1){u(t);return}n[t]--,s("cart",n),o(),p(t)}function p(t){document.getElementById(`quantity-${t}`).innerText=n[t]}function g(t){const e=d.find(i=>i.id===t),c=document.getElementById("products-cart"),a=document.createElement("article"),y=["flex","bg-slate-100","rounded-lg","p-1","relative"];for(const i of y)a.classList.add(i);const E=`<button id="remove-item-${e.id}" class="absolute top-0 right-2">
      <i
        class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"
      ></i>
    </button>
    <img
      src="./assets/img/${e.image}"
      alt="Carrinho: ${e.name}"
      class="h-24 rounded-lg"
    />
    <div class="p-2 flex flex-col justify-between">
      <p class="text-slate-900 text-sm">
        ${e.name}
      </p>
      <p class="text-slate-400 text-xs">Tamanho: M</p>
      <p class="text-green-700 text-lg">$${e.price}</p>
    </div>
    <div class='flex text-slate-950 items-end absolute bottom-0 right-2 text-lg'>
        <button id='decrement-product-${e.id}'>-</button>
        <p id='quantity-${e.id}' class='ml-2'>${n[e.id]}</p>
        <button class='ml-2' id='increase-product-${e.id}'>+</button>
    </div>`;a.innerHTML=E,c.appendChild(a),document.getElementById(`decrement-product-${e.id}`).addEventListener("click",()=>B(e.id)),document.getElementById(`increase-product-${e.id}`).addEventListener("click",()=>m(e.id)),document.getElementById(`remove-item-${e.id}`).addEventListener("click",()=>u(e.id))}function f(){const t=document.getElementById("products-cart");t.innerHTML="";for(const e in n)g(e)}function I(t){if(t in n){m(t);return}n[t]=1,s("cart",n),g(t),o()}function o(){const t=document.getElementById("total-price");let e=0;for(const c in n)e+=d.find(a=>a.id===c).price*n[c];t.innerText=`Total: $${e}`}function L(){for(const t of d){const e=`<div class='border-solid w-48 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-400 rounded-lg group ${t.feminine?"feminine":"males"}' id="card-product-${t.id}">
        <img
        src="./assets/img/${t.image}"
        alt="Produto 1 do Magazine Hashtag."
        class='group-hover:scale-110 duration-300 my-3 rounded-lg'
        />
        <p class='text-sm'>${t.brand}</p>
        <p class='text-sm'>${t.name}</p>
        <p class='text-sm'>$${t.price}</p>
        <button id='add-${t.id}' class='bg-slate-950 hover:bg-slate-700 text-slate-200'
        ><i class="fa-solid fa-cart-plus"></i></button>
        </div>`;document.getElementById("container-product").innerHTML+=e}for(const t of d)document.getElementById(`add-${t.id}`).addEventListener("click",()=>I(t.id))}const r=document.getElementById("container-product");function l(){const t=Array.from(r.getElementsByClassName("hidden"));for(const e of t)e.classList.remove("hidden")}function b(){l();const t=Array.from(r.getElementsByClassName("males"));for(const e of t)e.classList.add("hidden")}function k(){l();const t=Array.from(r.getElementsByClassName("feminine"));for(const e of t)e.classList.add("hidden")}function T(){document.getElementById("display-all").addEventListener("click",l),document.getElementById("display-males").addEventListener("click",k),document.getElementById("display-feminine").addEventListener("click",b)}L();$();f();o();T();

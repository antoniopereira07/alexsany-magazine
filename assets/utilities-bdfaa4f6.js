(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d=[{id:"1",brand:"Zara",name:"Camisa Larga com Bolsos",price:70,image:"product-1.jpg",feminine:!1},{id:"2",brand:"Zara",name:"Casaco Reto com Lã",price:85,image:"product-2.jpg",feminine:!0},{id:"3",brand:"Zara",name:"Jaqueta com Efeito Camurça",price:60,image:"product-3.jpg",feminine:!1},{id:"4",brand:"Zara",name:"Sobretudo em Mescla de Lã",price:160,image:"product-4.jpg",feminine:!1},{id:"5",brand:"Zara",name:"Camisa Larga Acolchoada de Veludo Cotelê",price:110,image:"product-5.jpg",feminine:!1},{id:"6",brand:"Zara",name:"Casaco de Lã com Botões",price:170,image:"product-6.jpg",feminine:!0},{id:"7",brand:"Zara",name:"Casaco com Botões",price:75,image:"product-7.jpg",feminine:!0},{id:"8",brand:"Zara",name:"Colete Comprido com Cinto",price:88,image:"product-8.jpg",feminine:!0}];function l(a,o){localStorage.setItem(a,JSON.stringify(o))}function m(a){return JSON.parse(localStorage.getItem(a))}function u(a){localStorage.removeItem(a)}function p(a,o,s){const r=d.find(n=>n.id===a),e=document.getElementById(o),t=document.createElement("article"),i=["flex","bg-stone-200","rounded-lg","p-1","relative","mb-2","w-96"];for(const n of i)t.classList.add(n);const c=`
    <img
      src="./assets/img/${r.image}"
      alt="Carrinho: ${r.name}"
      class="h-24 rounded-lg"
    />
    <div class="p-2 flex flex-col justify-between">
      <p class="text-slate-900 text-sm">
        ${r.name}
      </p>
      <p class="text-slate-400 text-xs">Tamanho: M</p>
      <p class="text-green-700 text-lg">$${r.price}</p>
    </div>
    <div class='flex text-slate-950 items-end absolute bottom-0 right-2 text-lg'>
        <p id='quantity-${r.id}' class='ml-2'>${s}</p>
    </div>`;t.innerHTML=c,e.appendChild(t)}export{d as c,p as d,u as e,m as r,l as s};

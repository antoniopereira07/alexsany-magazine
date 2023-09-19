import{r as o,d as i}from"./utilities-0c9e85c4.js";function s(t){const e=`<p class='text-xl text-bold my-4' >${new Date(t.dateOrder).toLocaleDateString("pt-BR",{hour:"2-digit",minute:"2-digit"})}</p>
    <section id='container-requests-${t.dateOrder}' class='bg-slate-300 p-3 rounded-md' ></section>
    `,n=document.getElementsByTagName("main")[0];n.innerHTML+=e;for(const r in t.order)i(r,`container-requests-${t.dateOrder}`,t.order[r])}function d(){const t=o("historic");for(const e of t)s(e)}d();

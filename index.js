import{a as y,i as d}from"./assets/vendor-FQTYvDtO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();function m(r,e){const s={params:{client_id:"DwCHWnjztYkOGjaSpMHjMrexfDmKfCckrOyGxBw2Hwo",query:r,page:e,per_page:12}};return y.get("https://api.unsplash.com/search/photos",s)}function p(r){const{alt_description:e,urls:s}=r;return`   <li>
        <a href="${s.regular}">
          <img src="${s.small}" alt="${e}" class='img'>
            <p>${e}</p>
          </img>
        </a>
      </li>`}let i=1,c="";const g=document.querySelector(".js-form"),u=document.querySelector(".js-gallery"),n=document.querySelector(".js-more");g.addEventListener("submit",h);async function h(r){if(r.preventDefault(),c=r.target.elements.query.value.trim(),!c){d.warning({message:"No query!",position:"center"});return}try{i=1,n.classList.add("hidden");const{data:e}=await m(c,i);if(e.total===0){d.error({title:"Error!",message:"No images found for your query",position:"center"}),u.innerHTML="",g.reset();return}e.total_pages>1&&(n.classList.remove("hidden"),n.addEventListener("click",f));const s=e.results.map(a=>p(a)).join("");u.innerHTML=s,i===e.total_pages&&(n.classList.add("hidden"),n.removeEventListener("click",f))}catch(e){console.log(e)}}async function f(){try{i+=1;const{data:r}=await m(c,i),e=r.results.map(s=>p(s)).join("");u.insertAdjacentHTML("beforeend",e)}catch(r){console.log(r)}}
//# sourceMappingURL=index.js.map

import{S as d,i as m}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const h="44418472-b0d967fab2ad788a724b3e426",y="https://pixabay.com/api/";async function u(s,o=1){const r=`${y}?key=${h}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}`;console.log("Fetching images with URL:",r);try{const n=await fetch(r);if(console.log("Response status:",n.status),!n.ok)throw new Error("Network response was not ok");const e=await n.json();return console.log("Fetched data:",e),e.hits}catch(n){return console.error("Error fetching images:",n),[]}}function g(s){const o=document.querySelector(".gallery");o.innerHTML="";const r=s.map(e=>`
        <div class="gallery-box">
            <a href="${e.largeImageURL}" class="gallery-item">
                <img src="${e.webformatURL}" alt="${e.tags}" class="img"/>
                </a>
                <div class="info">
                    <div class="stats">
                    <div class="info-box>
                        <p class="info-header">Likes:</p>
                        <p class="info-numbers">${e.likes}</p>
                        </div>
                        <div class="info-box>
                        <p class="info-header">Views:</p>
                        <p class="info-numbers">${e.views}</p>
                        </div>
                        <div class="info-box>
                        <p class="info-header">Comments:</p>
                        <p class="info-numbers">${e.comments}</p>
                        </div>
                        <div class="info-box>
                        <p class="info-header">Downloads:</p>
                        <p class="info-numbers">${e.downloads}</p>
                        </div>
                    </div>
                </div>
                </div>
            
        `).join("");o.insertAdjacentHTML("beforeend",r),new d(".gallery a").refresh()}function v(s){const o=document.querySelector(".gallery"),r=s.map(e=>`
           <div class="gallery-box">
            <a href="${e.largeImageURL}" class="gallery-item">
                <img src="${e.webformatURL}" alt="${e.tags}" width="400" height="280"/>
                </a>
                <div class="info">
                    <div class="stats">
                    <div class="info-box>
                        <p class="info-header">Likes:</p>
                        <p class="info-numbers">${e.likes}</p>
                        </div>
                        <div class="info-box>
                        <p class="info-header">Views:</p>
                        <p class="info-numbers">${e.views}</p>
                        </div>
                        <div class="info-box>
                        <p class="info-header">Comments:</p>
                        <p class="info-numbers">${e.comments}</p>
                        </div>
                        <div class="info-box>
                        <p class="info-header">Downloads:</p>
                        <p class="info-numbers">${e.downloads}</p>
                        </div>
                    </div>
                </div>
            </div>
        `).join("");o.insertAdjacentHTML("beforeend",r),new d(".gallery a").refresh()}function c(s){m.error({title:"Error",message:s,position:"topRight"})}function f(){document.querySelector(".loader").classList.remove("hidden")}function p(){document.querySelector(".loader").classList.add("hidden")}let i=1,a="";document.querySelector("#search-form").addEventListener("submit",async s=>{s.preventDefault();const o=s.target.elements.query;if(a=o.value.trim(),i=1,!a){c("Please enter a search query.");return}f();const r=await u(a,i);p(),r.length===0?c("Sorry, there are no images matching your search query. Please try again!"):(g(r),document.querySelector("#load-more").classList.remove("hidden")),o.value=""});document.querySelector("#load-more").addEventListener("click",async()=>{i+=1,f();const s=await u(a,i);p(),s.length===0?(c("No more images found."),document.querySelector("#load-more").classList.add("hidden")):v(s)});
//# sourceMappingURL=commonHelpers.js.map

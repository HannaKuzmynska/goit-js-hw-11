import{S as d,i as a}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const f="44418472-b0d967fab2ad788a724b3e426",u="https://pixabay.com/api/";async function p(s){const t=`${u}?key=${f}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`;try{const r=await fetch(t);if(!r.ok)throw new Error("Network response was not ok");return(await r.json()).hits}catch(r){throw console.error("Error fetching images:",r),r}}function l(s){const t=document.querySelector(".gallery");t.innerHTML="";const r=s.map(e=>`
        <div class="gallery-box">
            <a href="${e.largeImageURL}" class="gallery-item">
                <img src="${e.webformatURL}" alt="${e.tags}" class="img"/>
            </a>
            <div class="info">
                <div class="stats">
                    <div class="info-box">
                        <p class="info-header">Likes:</p>
                        <p class="info-numbers">${e.likes}</p>
                    </div>
                    <div class="info-box">
                        <p class="info-header">Views:</p>
                        <p class="info-numbers">${e.views}</p>
                    </div>
                    <div class="info-box">
                        <p class="info-header">Comments:</p>
                        <p class="info-numbers">${e.comments}</p>
                    </div>
                    <div class="info-box">
                        <p class="info-header">Downloads:</p>
                        <p class="info-numbers">${e.downloads}</p>
                    </div>
                </div>
            </div>
        </div>
        `).join("");t.insertAdjacentHTML("beforeend",r),new d(".gallery a").refresh()}function m(){document.querySelector("#loader").classList.remove("hidden")}function h(){document.querySelector("#loader").classList.add("hidden")}let c="";document.querySelector("#search-form").addEventListener("submit",async s=>{s.preventDefault();const t=s.target.elements.query;if(c=t.value.trim(),!c){a.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}m();try{const r=await p(c);r.length===0?(a.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l([])):l(r)}catch{a.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight"})}finally{h()}t.value=""});
//# sourceMappingURL=commonHelpers.js.map

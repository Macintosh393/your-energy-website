var H=Object.defineProperty;var M=(t,e,i)=>e in t?H(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var g=(t,e,i)=>M(t,typeof e!="symbol"?e+"":e,i);import{a as u,i as m}from"./vendor-XJ88ArH8.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=i(a);fetch(a.href,r)}})();const s={filter:"Muscles",filterValue:"",pagination:null};u.defaults.baseURL="https://your-energy.b.goit.study/api";async function F(){const t=await u.get(`/filters?filter=${s.filter}&page=${s.pagination.page}&limit=${s.pagination.perPage}`);return s.pagination.page===1&&s.pagination.setMaxPage(t.data.totalPages),t.data.results}async function T(t=""){const e=new URLSearchParams({page:s.pagination.page,limit:s.pagination.perPage});switch(t!=""&&e.set("keyword",t),s.filter){case"Muscles":e.set("muscles",s.filterValue);break;case"Body parts":e.set("bodypart",s.filterValue);break;case"Equipment":e.set("equipment",s.filterValue)}const i=await u.get(`/exercises?${e}`);return s.pagination.page===1&&s.pagination.setMaxPage(i.data.totalPages),i.data.results}async function P(t){return(await u.get(`/exercises/${t}`)).data}async function C(){return(await u.get("/quote")).data}async function I(t){try{await u.post("/subscription",{email:t}),m.success({title:"Success",message:"You are now subscribed",position:"bottomCenter"})}catch{m.error({title:"Error",message:"Couldn't subscribe. Email might already registered",position:"bottomCenter"})}}async function O(t,e){await u.patch(`/exercises/${t}/rating`,e)}function c(t){return t.charAt(0).toUpperCase()+t.slice(1)}const N=document.querySelector(".pagination-pages"),L=document.querySelector(".pagination-back-wrapper"),w=document.querySelector(".pagination-next-wrapper");function d(t,e){t===1?L.style.opacity="20%":L.style.opacity="100%",t===e?w.style.opacity="20%":w.style.opacity="100%";let i=[];for(let a=t-2;a<=t+2;a++)a>0&&a<=e&&i.push(a);let n=i.map(a=>`<li class="pagination-page-number ${a==t?"current":""}">${a}</li>`).join("");t<e-2&&(n+='<li class="pagination-page-number">...</li>'),N.innerHTML=n}const R=document.querySelector(".content-list");async function l(t=""){const e=(await T(t)).map(i=>`
      <li class="exercise">
        <div class="exercise-line-wrapper">
            <span class="workout">workout</span>
            <div class="rating">
                <span class="rating-value">${i.rating.toFixed(1)}</span>
                <svg class="star-icon" width="18" height="18">
                    <use href="icon-pack/star-icon.svg"></use>
                </svg>
            </div>
            <button class="start-button" data-id="${i._id}" aria-label="Start exercise">
                Start
                <svg class="start-arrow" width="16" height="16">
                    <use href="icon-pack/start-arrow.svg"></use>
                </svg>
            </button>
        </div>
        <div class="exercise-line-wrapper">
            <div class="exercise-icon-wrapper">
                <svg class="exercise-icon" width="24" height="24">
                    <use href="icon-pack/running-icon.svg"></use>
                </svg>
            </div>
            <p class="exercise-name">${c(i.name)}</p>
        </div>
        <div class="exercise-line-wrapper">
            <p class="exercise-info">Burned calories: <span class="exercise-info-value">${i.burnedCalories} / ${i.time}</span></p>
            <p class="exercise-info">Body part: <span class="exercise-info-value">${c(i.bodyPart)}</span></p>
            <p class="exercise-info">Target: <span class="exercise-info-value">${c(i.target)}</span></p>
        </div>
      </li>`).join("");R.innerHTML=e,d(s.pagination.page,s.pagination.maxPage)}const A=document.querySelector(".content-list");async function p(){const t=(await F()).map(e=>`<li class="filter-tile" data-value="${e.name}" aria-label="${e.name}">
            <img src="${e.imgURL}" class="filter-image" alt="${e.name}"/>
            <h3 class="filter-name">${c(e.name)}</h3>
            <p class="filter-category">${e.filter}</p>
        </li>`).join("");A.innerHTML=t,d(s.pagination.page,s.pagination.maxPage)}class f{constructor(e){g(this,"perPage");g(this,"page");g(this,"maxPage");g(this,"purpose");this.purpose=e,this.page=1,this.maxPage=1,this.purpose==="filters"?window.matchMedia("(min-width: 768px)").matches?this.perPage=12:this.perPage=9:this.purpose==="exercises"&&(window.matchMedia("(min-width: 768px)").matches?this.perPage=10:this.perPage=8),d(this.page,this.maxPage)}getPage(){return this.page}setMaxPage(e){this.maxPage=e}next(){this.page<this.maxPage&&this.page++,d(this.page,this.maxPage),this.purpose==="filters"?p():this.purpose==="exercises"&&l()}back(){this.page>1&&this.page--,d(this.page,this.maxPage),this.purpose==="filters"?p():this.purpose==="exercises"&&l()}reset(){this.page=1,d(this.page,this.maxPage),this.purpose==="filters"?p():this.purpose==="exercises"&&l()}last(){this.page=this.maxPage,d(this.page,this.maxPage),this.purpose==="filters"?p():this.purpose==="exercises"&&l()}}const D=document.querySelector(".main-heading"),_=document.querySelector(".category-heading"),J=document.querySelector(".exercises-search");function V(t){t.addEventListener("click",e=>{const i=e.target.closest(".filter-tabs-item");i&&(s.pagination=new f("filters"),D.innerHTML="Exercises",_.style.display="none",J.style.display="none",document.querySelectorAll(".filter-tabs-item").forEach(n=>n.classList.remove("active")),i.classList.add("active"),s.filter=i.dataset.filter,p())})}function U(){const t=document.querySelector(".pagination-first-button"),e=document.querySelector(".pagination-previous-button"),i=document.querySelector(".pagination-next-button"),n=document.querySelector(".pagination-last-button");t.addEventListener("click",()=>s.pagination.reset()),e.addEventListener("click",()=>s.pagination.back()),i.addEventListener("click",()=>s.pagination.next()),n.addEventListener("click",()=>s.pagination.last())}function z(t,e,i){t.addEventListener("click",()=>{i.classList.add("opened")}),e.addEventListener("click",()=>{i.classList.remove("opened")}),i.addEventListener("click",()=>{i.classList.remove("opened")})}const Q=document.querySelector(".main-heading"),k=document.querySelector(".category-heading"),j=document.querySelector(".exercises-search");function G(t){t.addEventListener("click",e=>{const i=e.target.closest(".filter-tile");i&&(s.pagination=new f("exercises"),Q.innerHTML="Exercises /",k.innerHTML=c(i.dataset.value),k.style.display="block",j.style.display="flex",s.filterValue=i.dataset.value,l())})}const W=document.querySelector(".motivation-text"),Y=document.querySelector(".motivation-author");function Z(t,e){W.innerHTML=e,Y.innerHTML=t}async function K(){let t=JSON.parse(localStorage.getItem("quote"));const e=new Date().getDate();if(!t||t.date!=e){const i=await C();localStorage.setItem("quote",JSON.stringify({...i,date:e})),t=JSON.parse(localStorage.getItem("quote"))}Z(t.author,t.quote)}function B(t){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(t)}function X(t){t.addEventListener("submit",e=>{try{e.preventDefault();const i=document.getElementById("subscription-email");if(!B(i.value))throw new Error;I(i.value),i.value=""}catch{m.error({title:"Error",message:"Invalid email",position:"bottomCenter"})}})}const $=document.getElementById("exercises-search"),b=document.querySelector(".search-delete-button");function ee(t){t.addEventListener("submit",e=>{e.preventDefault(),s.pagination=new f("exercises"),$.value!=""?l($.value):l()}),t.addEventListener("input",e=>{e.target.value!=""?b.style.display="block":b.style.display="none"}),t.addEventListener("reset",()=>{b.style.display="none",s.pagination=new f("exercises"),l()})}let h;se();function S(){return JSON.parse(localStorage.getItem("favorites"))??[]}async function te(t){const e=await P(t),i=S();console.log(i);const n=JSON.stringify([...i,e]);console.log(n),localStorage.setItem("favorites",n),ne(t)}function ie(t){const e=S(),i=JSON.stringify(e.filter(n=>n._id!=t));localStorage.setItem("favorites",i),re(t)}function ae(t){return h.has(t)}function se(){h=new Set(S().map(t=>t._id))}function ne(t){h.add(t)}function re(t){h.delete(t)}const oe=document.querySelector(".modal-backdrop"),E=document.querySelector(".modal-body");async function ce(t){const e=await P(t);E.innerHTML=`
    <div class="exercise-details-wrapper">
        <img src="${e.gifUrl}" class="exercise-gif" alt="Gif example of how to do the exercise"/>
        <div class="exercise-details-container">
            <div class="exercise-header">
                <h3 class="exercise-details-title">${c(e.name)}</h3>
                <div class="exercise-details-rating">
                    <span class="exercise-details-rating-value">${e.rating.toFixed(1)}</span>
                    <div class="rating-stars-container">
                        
                    </div>
                </div>
            </div>
            <ul class="quick-info-list">
                <li class="quick-info-item">
                    <p class="quick-info-parameter">Target</p>
                    <p class="quick-info-value">${c(e.target)}</p>
                </li>
                <li class="quick-info-item">
                    <p class="quick-info-parameter">Body Part</p>
                    <p class="quick-info-value">${c(e.bodyPart)}</p>
                </li>
                <li class="quick-info-item">
                    <p class="quick-info-parameter">Equipment</p>
                    <p class="quick-info-value">${c(e.equipment)}</p>
                </li>
                <li class="quick-info-item">
                    <p class="quick-info-parameter">Popular</p>
                    <p class="quick-info-value">${e.popularity}</p>
                </li>
                <li class="quick-info-item">
                    <p class="quick-info-parameter">Burned Calories</p>
                    <p class="quick-info-value">${e.burnedCalories}/${e.time} min</p>
                </li>
            </ul>
            <p class="exercise-detailed-description">${e.description}</p>

            <div class="exercise-action-buttons">
                ${ae(e._id)?'<button type="button" class="remove-from-favorites-btn" data-id="'+e._id+'" aria-label="Remove from favorites">Remove from favorites<svg class="bin-icon" width="20" height="20"><use href="button-icons/delete.svg"></use></svg></button>':'<button type="button" class="add-to-favorites-btn" data-id="'+e._id+'" aria-label="Add to favorites">Add to favorites<svg class="like-icon" width="20" height="20"><use href="button-icons/like.svg"></use></svg></button>'}
                <button type="button" class="give-rating-btn" data-id="${e._id}" aria-label="Give exercise a rating">
                    Give a rating
                </button>
            </div>
        </div>
    </div>
    `;const i=e.rating,n=E.querySelector(".rating-stars-container");for(let a=1;a<=5;a++){const r=document.createElement("span");r.classList.add("star","filled"),r.innerHTML="★";let o=0;i>=a?o=100:i>a-1?o=(i-(a-1))*100:o=0,r.style.setProperty("--percent",`${o}%`),n.appendChild(r)}oe.classList.remove("is-hidden")}const le=document.querySelector(".content-list"),de=document.querySelector("header"),ue=document.querySelector("body");function pe(){le.addEventListener("click",t=>{const e=t.target.closest(".start-button");e&&(de.style.visibility="hidden",ue.classList.add("modal-open"),ce(e.dataset.id))})}const ge=document.querySelector(".modal-body");function me(t){ge.innerHTML=`
    <form id="rating-form" data-id="${t}">
        <div class="rating-section">
            <label class="rating-label" for="stars-fieldset">Rating</label>
            <div class="rating-line-wrapper">
                <span class="rating-form-value">3.0</span>
                <fieldset id="stars-fieldset">
                    <span class="star-cb-group">
                        <input type="radio" id="rating-5" name="rating" value="5.0" /><label for="rating-5">5</label>
                        <input type="radio" id="rating-4" name="rating" value="4.0" /><label for="rating-4">4</label>
                        <input type="radio" id="rating-3" name="rating" value="3.0" checked="checked" /><label for="rating-3">3</label>
                        <input type="radio" id="rating-2" name="rating" value="2.0" /><label for="rating-2">2</label>
                        <input type="radio" id="rating-1" name="rating" value="1.0" /><label for="rating-1">1</label>
                    </span>
                </fieldset>
            </div>
        </div>
        <div class="rating-text-section">
            <input type="email" id="rating-email-input" placeholder="Email" required/>
            <textarea id="rating-review-text" placeholder="Your comment"></textarea>
        </div>
        <button type="submit" id="submit-rating-button" aria-label="Submit your review about the exercise">Send</button>
    </form>
    `}const v=document.querySelector(".modal-backdrop"),fe=document.querySelector(".modal-close-btn"),y=document.querySelector(".modal-body"),x=document.querySelector("header"),q=document.querySelector("body");function ve(){v.addEventListener("click",()=>{v.classList.add("is-hidden"),q.classList.remove("modal-open"),x.style.visibility="visible"}),fe.addEventListener("click",()=>{v.classList.add("is-hidden"),q.classList.remove("modal-open"),x.style.visibility="visible"}),y.addEventListener("click",t=>{t.stopPropagation()}),y.addEventListener("click",t=>{const e=t.target.closest(".give-rating-btn");e&&me(e.dataset.id)}),y.addEventListener("submit",t=>{try{t.preventDefault();const e=t.target.closest("#rating-form");if(!e)return;const i=Number(e.querySelector(".rating-form-value").innerHTML),n=e.querySelector("#rating-email-input").value,a=e.querySelector("#rating-review-text").value,r={rate:i,email:n,review:a};if(!B(n))throw new Error("Invalid Error");O(e.dataset.id,r),v.classList.add("is-hidden"),q.classList.remove("modal-open"),x.style.visibility="visible",m.success({title:"Success",message:"Posted a review",position:"bottomCenter"})}catch(e){m.error({title:"Error",message:e.message,position:"bottomCenter"})}}),y.addEventListener("change",t=>{if(t.target.type==="radio"){const e=document.querySelector(".rating-form-value");e.innerHTML=t.target.value}})}const ye=document.querySelector(".modal-body");function he(){ye.addEventListener("click",t=>{const e=t.target.closest(".add-to-favorites-btn"),i=t.target.closest(".remove-from-favorites-btn");if(e){const n=e.dataset.id;te(n);const a=`
        <button type="button" class="remove-from-favorites-btn" aria-label="Remove from favorites" data-id="${n}">
            Remove from favorites
            <svg class="bin-icon" width="20" height="20">
                <use href="button-icons/delete.svg"></use>
            </svg>
        </button>
      `,r=new DOMParser().parseFromString(a,"text/html").body.firstChild;e.replaceWith(r)}else if(i){const n=i.dataset.id;ie(n);const a=`
        <button type="button" class="add-to-favorites-btn" aria-label="Add to favorites" data-id="${n}">
            Add to favorites
            <svg class="like-icon" width="20" height="20">
                <use href="button-icons/like.svg"></use>
            </svg>
        </button>
      `,r=new DOMParser().parseFromString(a,"text/html").body.firstChild;i.replaceWith(r)}})}function be(){let t=window.location;const e=document.querySelector(".nav-list"),i=t.pathname.lastIndexOf("/")+1;e.querySelector('a[href="'+t.pathname.slice(i)+'"]').parentNode.classList.add("active"),t.pathname.slice(i)==="index.html"?xe():qe()}async function xe(){const t=document.querySelector(".nav-toggle"),e=document.querySelector(".nav-close"),i=document.querySelector(".mobile-menu-backdrop");z(t,e,i);const n=document.querySelector(".filter-tabs-list"),a=document.querySelector(".content-list");V(n);const r=document.querySelector(".exercises-search");ee(r),s.pagination=new f("filters"),p(),G(a),K(),U(),ve(),pe(),he();const o=document.querySelector(".subscription-form");X(o)}async function qe(){}be();
//# sourceMappingURL=main-CILxhE8X.js.map

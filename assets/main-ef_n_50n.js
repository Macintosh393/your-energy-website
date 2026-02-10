var _=Object.defineProperty;var J=(t,e,i)=>e in t?_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var v=(t,e,i)=>J(t,typeof e!="symbol"?e+"":e,i);import{a as g,i as h}from"./vendor-XJ88ArH8.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(a){if(a.ep)return;a.ep=!0;const r=i(a);fetch(a.href,r)}})();const n={filter:"Muscles",filterValue:"",pagination:null};g.defaults.baseURL="https://your-energy.b.goit.study/api";async function V(){const t=await g.get(`/filters?filter=${n.filter}&page=${n.pagination.page}&limit=${n.pagination.perPage}`);return n.pagination.page===1&&n.pagination.setMaxPage(t.data.totalPages),t.data.results}async function U(t=""){const e=new URLSearchParams({page:n.pagination.page,limit:n.pagination.perPage});switch(t!=""&&e.set("keyword",t),n.filter){case"Muscles":e.set("muscles",n.filterValue);break;case"Body parts":e.set("bodypart",n.filterValue);break;case"Equipment":e.set("equipment",n.filterValue)}const i=await g.get(`/exercises?${e}`);return n.pagination.page===1&&n.pagination.setMaxPage(i.data.totalPages),i.data.results}async function T(t){return(await g.get(`/exercises/${t}`)).data}async function j(){return(await g.get("/quote")).data}async function Q(t){try{await g.post("/subscription",{email:t}),h.success({title:"Success",message:"You are now subscribed",position:"bottomCenter"})}catch{h.error({title:"Error",message:"Couldn't subscribe. Email might be already registered",position:"bottomCenter"})}}async function W(t,e){await g.patch(`/exercises/${t}/rating`,e)}function c(t){return t.charAt(0).toUpperCase()+t.slice(1)}const L=document.querySelector(".pagination"),G=document.querySelector(".pagination-pages"),k=document.querySelector(".pagination-back-wrapper"),$=document.querySelector(".pagination-next-wrapper");function d(t,e){e===1?L.style.display="none":L.style.display="flex",t===1?k.style.opacity="20%":k.style.opacity="100%",t===e?$.style.opacity="20%":$.style.opacity="100%";let i=[];for(let a=t-2;a<=t+2;a++)a>0&&a<=e&&i.push(a);let s=i.map(a=>`<li class="pagination-page-number ${a==t?"current":""}">${a}</li>`).join("");t<e-2&&(s+='<li class="pagination-continues">...</li>'),G.innerHTML=s}const Y=document.querySelector(".content-list");async function l(t=""){const e=(await U(t)).map(i=>`
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
      </li>`).join("");Y.innerHTML=e,d(n.pagination.page,n.pagination.maxPage)}let x;X();function f(){return JSON.parse(localStorage.getItem("favorites"))??[]}async function Z(t){const e=f(),i=JSON.stringify([...e,t]);localStorage.setItem("favorites",i),ee(t)}function F(t){const e=f(),i=JSON.stringify(e.filter(s=>s!=t));localStorage.setItem("favorites",i),te(t),n.pagination.purpose==="favorites"&&(n.pagination.updateSize(f().length),u())}function K(t){return x.has(t)}function X(){x=new Set(f())}function ee(t){x.add(t)}function te(t){x.delete(t)}const P=document.querySelector(".favorite-exercises-list"),ie=document.querySelector(".pagination");async function u(){const t=f();if(t.length===0){P.innerHTML=`
    <li class="favorites-placeholder">
        It appears that you haven't added any exercises to your
        favorites yet. To get started, you can add exercises that you
        like to your favorites for easier access in the future.
    </li>`,ie.style.display="none";return}const e=(n.pagination.page-1)*n.pagination.perPage,i=n.pagination.page*n.pagination.perPage,s=t.slice(e,i),a=await Promise.all(s.map(async r=>{const o=await T(r);return`
          <li class="exercise">
            <div class="exercise-line-wrapper">
                <span class="workout">workout</span>
                <div class="rating">
                    <button type="button" class="remove-favorite-quick-btn" data-id="${o._id}">
                        <svg class="bin-icon" width="18" height="18">
                            <use href="button-icons/delete.svg"></use>
                        </svg>
                    </button>
                </div>
                <button class="start-button" data-id="${o._id}" aria-label="Start exercise">
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
                <p class="exercise-name">${c(o.name)}</p>
            </div>
            <div class="exercise-line-wrapper">
                <p class="exercise-info">Burned calories: <span class="exercise-info-value">${o.burnedCalories} / ${o.time}</span></p>
                <p class="exercise-info">Body part: <span class="exercise-info-value">${c(o.bodyPart)}</span></p>
                <p class="exercise-info">Target: <span class="exercise-info-value">${c(o.target)}</span></p>
            </div>
          </li>`}));P.innerHTML=a.join("")}const ae=document.querySelector(".content-list");async function p(){const t=(await V()).map(e=>`<li class="filter-tile" data-value="${e.name}" aria-label="${e.name}">
            <img src="${e.imgURL}" class="filter-image" alt="${e.name}" loading="lazy"/>
            <h3 class="filter-name">${c(e.name)}</h3>
            <p class="filter-category">${e.filter}</p>
        </li>`).join("");ae.innerHTML=t,d(n.pagination.page,n.pagination.maxPage)}class m{constructor(e,i=null){v(this,"perPage");v(this,"page");v(this,"maxPage");v(this,"purpose");this.purpose=e,this.page=1,this.purpose==="filters"?window.matchMedia("(min-width: 768px)").matches?this.perPage=12:this.perPage=9:this.purpose==="favorites"&&window.matchMedia("(min-width: 1440px)").matches?this.perPage=200:(this.purpose,window.matchMedia("(min-width: 768px)").matches?this.perPage=10:this.perPage=8),i?this.updateSize(i):this.maxPage=1,d(this.page,this.maxPage)}getPage(){return this.page}setMaxPage(e){this.maxPage=e}updateSize(e){this.maxPage=Math.ceil(e/this.perPage)}choosePage(e){this.page=e,d(this.page,this.maxPage),this.purpose==="filters"?p():this.purpose==="exercises"?l():this.purpose==="favorites"&&u()}next(){this.page<this.maxPage&&this.page++,d(this.page,this.maxPage),this.purpose==="filters"?p():this.purpose==="exercises"?l():this.purpose==="favorites"&&u()}back(){this.page>1&&this.page--,d(this.page,this.maxPage),this.purpose==="filters"?p():this.purpose==="exercises"?l():this.purpose==="favorites"&&u()}reset(){this.page=1,d(this.page,this.maxPage),this.purpose==="filters"?p():this.purpose==="exercises"?l():this.purpose==="favorites"&&u()}last(){this.page=this.maxPage,d(this.page,this.maxPage),this.purpose==="filters"?p():this.purpose==="exercises"?l():this.purpose==="favorites"&&u()}}const se=document.querySelector(".main-heading"),ne=document.querySelector(".category-heading"),re=document.querySelector(".exercises-search");function oe(t){t.addEventListener("click",e=>{const i=e.target.closest(".filter-tabs-item");i&&(n.pagination=new m("filters"),se.innerHTML="Exercises",ne.style.display="none",re.style.display="none",document.querySelectorAll(".filter-tabs-item").forEach(s=>s.classList.remove("active")),i.classList.add("active"),n.filter=i.dataset.filter,p())})}function C(){const t=document.querySelector(".pagination-first-button"),e=document.querySelector(".pagination-previous-button"),i=document.querySelector(".pagination-next-button"),s=document.querySelector(".pagination-last-button"),a=document.querySelector(".pagination-pages"),r=function(o){const y=o.target.closest(".pagination-page-number");y&&n.pagination.choosePage(Number(y.innerHTML))};t.addEventListener("click",()=>n.pagination.reset()),e.addEventListener("click",()=>n.pagination.back()),i.addEventListener("click",()=>n.pagination.next()),s.addEventListener("click",()=>n.pagination.last()),a.addEventListener("click",r)}function I(t,e,i){t.addEventListener("click",()=>{i.classList.add("opened")}),e.addEventListener("click",()=>{i.classList.remove("opened")}),i.addEventListener("click",()=>{i.classList.remove("opened")})}const ce=document.querySelector(".main-heading"),E=document.querySelector(".category-heading"),le=document.querySelector(".exercises-search");function de(t){t.addEventListener("click",e=>{const i=e.target.closest(".filter-tile");i&&(n.pagination=new m("exercises"),ce.innerHTML="Exercises /",E.innerHTML=c(i.dataset.value),E.style.display="block",le.style.display="flex",n.filterValue=i.dataset.value,l())})}const ue=document.querySelector(".motivation-text"),pe=document.querySelector(".motivation-author");function ge(t,e){ue.innerHTML=e,pe.innerHTML=t}async function N(){let t=JSON.parse(localStorage.getItem("quote"));const e=new Date().getDate();if(!t||t.date!=e){const i=await j();localStorage.setItem("quote",JSON.stringify({...i,date:e})),t=JSON.parse(localStorage.getItem("quote"))}ge(t.author,t.quote)}function O(t){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(t)}function R(t){t.addEventListener("submit",e=>{try{e.preventDefault();const i=document.getElementById("subscription-email");if(!O(i.value))throw new Error;Q(i.value),i.value=""}catch{h.error({title:"Error",message:"Invalid email",position:"bottomCenter"})}})}const B=document.getElementById("exercises-search"),w=document.querySelector(".search-delete-button");function fe(t){t.addEventListener("submit",e=>{e.preventDefault(),n.pagination=new m("exercises"),B.value!=""?l(B.value):l()}),t.addEventListener("input",e=>{e.target.value!=""?w.style.display="block":w.style.display="none"}),t.addEventListener("reset",()=>{w.style.display="none",n.pagination=new m("exercises"),l()})}const me=document.querySelector(".modal-backdrop"),M=document.querySelector(".modal-body");async function q(t){const e=await T(t);M.innerHTML=`
    <div class="exercise-details-wrapper">
        <img src="${e.gifUrl}" class="exercise-gif" alt="Gif example of how to do the exercise" width="258" height="258"/>
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
                ${K(e._id)?'<button type="button" class="remove-from-favorites-btn" data-id="'+e._id+'" aria-label="Remove from favorites">Remove from<svg class="bin-icon" width="20" height="20"><use href="button-icons/delete.svg"></use></svg></button>':'<button type="button" class="add-to-favorites-btn" data-id="'+e._id+'" aria-label="Add to favorites">Add to favorites<svg class="like-icon" width="20" height="20"><use href="button-icons/like.svg"></use></svg></button>'}
                <button type="button" class="give-rating-btn" data-id="${e._id}" aria-label="Give exercise a rating">
                    Give a rating
                </button>
            </div>
        </div>
    </div>
    `;const i=e.rating,s=M.querySelector(".rating-stars-container");for(let a=1;a<=5;a++){const r=document.createElement("span");r.classList.add("star","filled"),r.innerHTML="★";let o=0;i>=a?o=100:i>a-1?o=(i-(a-1))*100:o=0,r.style.setProperty("--percent",`${o}%`),s.appendChild(r)}me.classList.remove("is-hidden")}const ve=document.querySelector("header"),he=document.querySelector("body");function A(t){t.addEventListener("click",e=>{const i=e.target.closest(".remove-favorite-quick-btn"),s=e.target.closest(".start-button");s?(ve.style.visibility="hidden",he.classList.add("modal-open"),q(s.dataset.id)):i&&(F(i.dataset.id),u())})}const ye=document.querySelector(".modal-body");function be(t){ye.innerHTML=`
    <form id="rating-form" data-id="${t}">
        <div class="rating-section">
            <label class="rating-label" for="stars-fieldset">Rating</label>
            <div class="rating-line-wrapper">
                <span class="rating-form-value">0.0</span>
                <fieldset id="stars-fieldset">
                    <span class="star-cb-group">
                        <input type="radio" id="rating-5" name="rating" value="5.0" /><label for="rating-5">5</label>
                        <input type="radio" id="rating-4" name="rating" value="4.0" /><label for="rating-4">4</label>
                        <input type="radio" id="rating-3" name="rating" value="3.0" /><label for="rating-3">3</label>
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
    `}const H=document.querySelector(".modal-backdrop"),xe=document.querySelector(".modal-close-btn"),b=document.querySelector(".modal-body"),we=document.querySelector("header"),qe=document.querySelector("body");function D(){const t=function(){const i=document.querySelector("#rating-form");i?q(i.dataset.id):(H.classList.add("is-hidden"),qe.classList.remove("modal-open"),we.style.visibility="visible")},e=function(i){i.key==="Escape"&&t()};H.addEventListener("click",t),document.addEventListener("keydown",e),xe.addEventListener("click",t),b.addEventListener("click",i=>{i.stopPropagation()}),b.addEventListener("click",i=>{const s=i.target.closest(".give-rating-btn");if(!s)return;const a=s.dataset.id;be(a)}),b.addEventListener("submit",i=>{try{i.preventDefault();const s=i.target.closest("#rating-form");if(!s)return;const a=Number(s.querySelector(".rating-form-value").innerHTML),r=s.querySelector("#rating-email-input").value,o=s.querySelector("#rating-review-text").value,y={rate:a,email:r,review:o};if(!O(r))throw new Error("Invalid email");if(a==0)throw new Error("Rating can't be 0");const S=s.dataset.id;W(S,y),q(S),h.success({title:"Success",message:"Posted a review",position:"bottomCenter"})}catch(s){h.error({title:"Error",message:s.message,position:"bottomCenter"})}}),b.addEventListener("change",i=>{if(i.target.type==="radio"){const s=document.querySelector(".rating-form-value");s.innerHTML=i.target.value}})}const Se=document.querySelector(".modal-body");function z(){Se.addEventListener("click",t=>{const e=t.target.closest(".add-to-favorites-btn"),i=t.target.closest(".remove-from-favorites-btn");if(e){const s=e.dataset.id;Z(s);const a=`
        <button type="button" class="remove-from-favorites-btn" aria-label="Remove from favorites" data-id="${s}">
            Remove from
            <svg class="bin-icon" width="20" height="20">
                <use href="button-icons/delete.svg"></use>
            </svg>
        </button>
      `,r=new DOMParser().parseFromString(a,"text/html").body.firstChild;e.replaceWith(r)}else if(i){const s=i.dataset.id;F(s);const a=`
        <button type="button" class="add-to-favorites-btn" aria-label="Add to favorites" data-id="${s}">
            Add to favorites
            <svg class="like-icon" width="20" height="20">
                <use href="button-icons/like.svg"></use>
            </svg>
        </button>
      `,r=new DOMParser().parseFromString(a,"text/html").body.firstChild;i.replaceWith(r)}})}function Le(){let t=window.location;const e=document.querySelector(".nav-list"),i=t.pathname.lastIndexOf("/")+1;let s=t.pathname.slice(i);s=s.length>0?s:"index.html",e.querySelector('a[href="'+s+'"]').parentNode.classList.add("active"),s==="index.html"?ke():$e()}async function ke(){const t=document.querySelector(".nav-toggle"),e=document.querySelector(".nav-close"),i=document.querySelector(".mobile-menu-backdrop");I(t,e,i);const s=document.querySelector(".filter-tabs-list"),a=document.querySelector(".content-list");oe(s);const r=document.querySelector(".exercises-search");fe(r),n.pagination=new m("filters"),p(),de(a),N(),C(),D(),A(a),z();const o=document.querySelector(".subscription-form");R(o)}async function $e(){const t=document.querySelector(".nav-toggle"),e=document.querySelector(".nav-close"),i=document.querySelector(".mobile-menu-backdrop");I(t,e,i),N(),n.pagination=new m("favorites",f().length),C(),D();const s=document.querySelector(".favorite-exercises-list");A(s),z(),u();const a=document.querySelector(".subscription-form");R(a)}Le();
//# sourceMappingURL=main-ef_n_50n.js.map

var $=Object.defineProperty;var E=(t,e,i)=>e in t?$(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var g=(t,e,i)=>E(t,typeof e!="symbol"?e+"":e,i);import{a as p,i as v}from"./vendor-XJ88ArH8.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function i(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(a){if(a.ep)return;a.ep=!0;const n=i(a);fetch(a.href,n)}})();const s={filter:"Muscles",filterValue:"",pagination:null};p.defaults.baseURL="https://your-energy.b.goit.study/api";async function P(){const t=await p.get(`/filters?filter=${s.filter}&page=${s.pagination.page}&limit=${s.pagination.perPage}`);return s.pagination.page===1&&s.pagination.setMaxPage(t.data.totalPages),t.data.results}async function H(t=""){const e=new URLSearchParams({page:s.pagination.page,limit:s.pagination.perPage});switch(t!=""&&e.set("keyword",t),s.filter){case"Muscles":e.set("muscles",s.filterValue);break;case"Body parts":e.set("bodypart",s.filterValue);break;case"Equipment":e.set("equipment",s.filterValue)}const i=await p.get(`/exercises?${e}`);return s.pagination.page===1&&s.pagination.setMaxPage(i.data.totalPages),i.data.results}async function B(t){return(await p.get(`/exercises/${t}`)).data}async function M(){return(await p.get("/quote")).data}async function T(t){try{await p.post("/subscription",{email:t}),v.success({title:"Success",message:"You are now subscribed",position:"bottomCenter"})}catch{v.error({title:"Error",message:"Couldn't subscribe. Email might already registered",position:"bottomCenter"})}}function c(t){return t.charAt(0).toUpperCase()+t.slice(1)}const C=document.querySelector(".pagination-pages"),h=document.querySelector(".pagination-back-wrapper"),b=document.querySelector(".pagination-next-wrapper");function d(t,e){t===1?h.style.opacity="20%":h.style.opacity="100%",t===e?b.style.opacity="20%":b.style.opacity="100%";let i=[];for(let a=t-2;a<=t+2;a++)a>0&&a<=e&&i.push(a);let r=i.map(a=>`<li class="pagination-page-number ${a==t?"current":""}">${a}</li>`).join("");t<e-2&&(r+='<li class="pagination-page-number">...</li>'),C.innerHTML=r}const F=document.querySelector(".content-list");async function l(t=""){const e=(await H(t)).map(i=>`
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
      </li>`).join("");F.innerHTML=e,d(s.pagination.page,s.pagination.maxPage)}const I=document.querySelector(".content-list");async function u(){const t=(await P()).map(e=>`<li class="filter-tile" data-value="${e.name}" aria-label="${e.name}">
            <img src="${e.imgURL}" class="filter-image" alt="${e.name}"/>
            <h3 class="filter-name">${c(e.name)}</h3>
            <p class="filter-category">${e.filter}</p>
        </li>`).join("");I.innerHTML=t,d(s.pagination.page,s.pagination.maxPage)}class m{constructor(e){g(this,"perPage");g(this,"page");g(this,"maxPage");g(this,"purpose");this.purpose=e,this.page=1,this.maxPage=1,this.purpose==="filters"?window.matchMedia("(min-width: 768px)").matches?this.perPage=12:this.perPage=9:this.purpose==="exercises"&&(window.matchMedia("(min-width: 768px)").matches?this.perPage=10:this.perPage=8),d(this.page,this.maxPage)}getPage(){return this.page}setMaxPage(e){this.maxPage=e}next(){this.page<this.maxPage&&this.page++,d(this.page,this.maxPage),this.purpose==="filters"?u():this.purpose==="exercises"&&l()}back(){this.page>1&&this.page--,d(this.page,this.maxPage),this.purpose==="filters"?u():this.purpose==="exercises"&&l()}reset(){this.page=1,d(this.page,this.maxPage),this.purpose==="filters"?u():this.purpose==="exercises"&&l()}last(){this.page=this.maxPage,d(this.page,this.maxPage),this.purpose==="filters"?u():this.purpose==="exercises"&&l()}}const N=document.querySelector(".main-heading"),O=document.querySelector(".category-heading"),A=document.querySelector(".exercises-search");function D(t){t.addEventListener("click",e=>{const i=e.target.closest(".filter-tabs-item");i&&(s.pagination=new m("filters"),N.innerHTML="Exercises",O.style.display="none",A.style.display="none",document.querySelectorAll(".filter-tabs-item").forEach(r=>r.classList.remove("active")),i.classList.add("active"),s.filter=i.dataset.filter,u())})}function R(){const t=document.querySelector(".pagination-first-button"),e=document.querySelector(".pagination-previous-button"),i=document.querySelector(".pagination-next-button"),r=document.querySelector(".pagination-last-button");t.addEventListener("click",()=>s.pagination.reset()),e.addEventListener("click",()=>s.pagination.back()),i.addEventListener("click",()=>s.pagination.next()),r.addEventListener("click",()=>s.pagination.last())}function V(t,e,i){t.addEventListener("click",()=>{i.classList.add("opened")}),e.addEventListener("click",()=>{i.classList.remove("opened")}),i.addEventListener("click",()=>{i.classList.remove("opened")})}const U=document.querySelector(".main-heading"),x=document.querySelector(".category-heading"),z=document.querySelector(".exercises-search");function Q(t){t.addEventListener("click",e=>{const i=e.target.closest(".filter-tile");i&&(s.pagination=new m("exercises"),U.innerHTML="Exercises /",x.innerHTML=c(i.dataset.value),x.style.display="block",z.style.display="flex",s.filterValue=i.dataset.value,l())})}const j=document.querySelector(".motivation-text"),G=document.querySelector(".motivation-author");function J(t,e){j.innerHTML=e,G.innerHTML=t}async function Y(){let t=JSON.parse(localStorage.getItem("quote"));const e=new Date().getDate();if(!t||t.date!=e){const i=await M();localStorage.setItem("quote",JSON.stringify({...i,date:e})),t=JSON.parse(localStorage.getItem("quote"))}J(t.author,t.quote)}function Z(t){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(t)}function _(t){t.addEventListener("submit",e=>{try{e.preventDefault();const i=document.getElementById("subscription-email");if(!Z(i.value))throw new Error;T(i.value),i.value=""}catch{v.error({title:"Error",message:"Invalid email",position:"bottomCenter"})}})}const q=document.getElementById("exercises-search"),f=document.querySelector(".search-delete-button");function K(t){t.addEventListener("submit",e=>{e.preventDefault(),s.pagination=new m("exercises"),q.value!=""?l(q.value):l()}),t.addEventListener("input",e=>{e.target.value!=""?f.style.display="block":f.style.display="none"}),t.addEventListener("reset",()=>{f.style.display="none",s.pagination=new m("exercises"),l()})}const W=document.querySelector(".modal-backdrop"),L=document.querySelector(".modal-body");async function X(t){const e=await B(t);L.innerHTML=`
    <div class="exercise-details-wrapper"></div>
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
                <button type="button" class="add-to-favorites-btn" aria-label="Add to favorites">
                    Add to favorites
                    <svg class="like-icon" width="20" height="20">
                        <use href="button-icons/like.svg"></use>
                    </svg>
                </button>
                <button type="button" class="give-rating-btn" aria-label="Give exercise a rating">
                    Give a rating
                </button>
            </div>
        </div>
    </div>
    `;const i=e.rating,r=L.querySelector(".rating-stars-container");for(let a=1;a<=5;a++){const n=document.createElement("span");n.classList.add("star","filled"),n.innerHTML="★";let o=0;i>=a?o=100:i>a-1?o=(i-(a-1))*100:o=0,n.style.setProperty("--percent",`${o}%`),r.appendChild(n)}W.classList.remove("is-hidden")}const ee=document.querySelector(".content-list"),te=document.querySelector("header"),ie=document.querySelector("body");function ae(){ee.addEventListener("click",t=>{const e=t.target.closest(".start-button");e&&(te.style.visibility="hidden",ie.classList.add("modal-open"),X(e.dataset.id))})}const se=document.querySelector(".modal-body");function ne(t){se.innerHTML=`
    <form id="rating-form" data-id="${t}">
        <div class="rating-section">
            <label class="rating-label" for="stars-fieldset">Rating</label>
            <div class="rating-line-wrapper">
                <span class="rating-form-value">0.0</span>
                <fieldset id="stars-fieldset">
                    <span class="star-cb-group">
                        <input type="radio" id="rating-5" name="rating" value="5" /><label for="rating-5">5</label>
                        <input type="radio" id="rating-4" name="rating" value="4" /><label for="rating-4">4</label>
                        <input type="radio" id="rating-3" name="rating" value="3" checked="checked" /><label for="rating-3">3</label>
                        <input type="radio" id="rating-2" name="rating" value="2" /><label for="rating-2">2</label>
                        <input type="radio" id="rating-1" name="rating" value="1" /><label for="rating-1">1</label>
                    </span>
                </fieldset>
            </div>
        </div>
        <div class="rating-text-section">
            <input type="email" id="rating-email-input" placeholder="Email"/>
            <input type="textarea" id="rating-review-text" placeholder="Your comment"/>
        </div>
        <button type="submit" id="submit-rating-button" aria-label="Submit your review about the exercise">Send</button>
    </form>
    `}const y=document.querySelector(".modal-backdrop"),re=document.querySelector(".modal-close-btn"),S=document.querySelector(".modal-body"),w=document.querySelector("header"),k=document.querySelector("body");function oe(){y.addEventListener("click",()=>{y.classList.add("is-hidden"),k.classList.remove("modal-open"),w.style.visibility="visible"}),re.addEventListener("click",()=>{y.classList.add("is-hidden"),k.classList.remove("modal-open"),w.style.visibility="visible"}),S.addEventListener("click",t=>{t.target.closest(".add-to-favorites-btn")}),S.addEventListener("click",t=>{t.stopImmediatePropagation();const e=t.target.closest(".give-rating-btn");e&&ne(e.dataset.id)})}function ce(){let t=window.location;const e=document.querySelector(".nav-list"),i=t.pathname.lastIndexOf("/")+1;e.querySelector('a[href="'+t.pathname.slice(i)+'"]').parentNode.classList.add("active"),t.pathname.slice(i)==="index.html"?le():de()}async function le(){const t=document.querySelector(".nav-toggle"),e=document.querySelector(".nav-close"),i=document.querySelector(".mobile-menu-backdrop");V(t,e,i);const r=document.querySelector(".filter-tabs-list"),a=document.querySelector(".content-list");D(r);const n=document.querySelector(".exercises-search");K(n),s.pagination=new m("filters"),u(),Q(a),Y(),R(),oe(),ae();const o=document.querySelector(".subscription-form");_(o)}async function de(){}ce();
//# sourceMappingURL=main-B3Zb8h0Y.js.map

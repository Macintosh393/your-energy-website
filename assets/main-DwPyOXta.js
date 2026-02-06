var _=Object.defineProperty;var D=(t,e,i)=>e in t?_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var v=(t,e,i)=>D(t,typeof e!="symbol"?e+"":e,i);import{a as p,i as h}from"./vendor-XJ88ArH8.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=i(a);fetch(a.href,r)}})();const s={filter:"Muscles",filterValue:"",pagination:null};p.defaults.baseURL="https://your-energy.b.goit.study/api";async function z(){const t=await p.get(`/filters?filter=${s.filter}&page=${s.pagination.page}&limit=${s.pagination.perPage}`);return s.pagination.page===1&&s.pagination.setMaxPage(t.data.totalPages),t.data.results}async function J(t=""){const e=new URLSearchParams({page:s.pagination.page,limit:s.pagination.perPage});switch(t!=""&&e.set("keyword",t),s.filter){case"Muscles":e.set("muscles",s.filterValue);break;case"Body parts":e.set("bodypart",s.filterValue);break;case"Equipment":e.set("equipment",s.filterValue)}const i=await p.get(`/exercises?${e}`);return s.pagination.page===1&&s.pagination.setMaxPage(i.data.totalPages),i.data.results}async function H(t){return(await p.get(`/exercises/${t}`)).data}async function V(){return(await p.get("/quote")).data}async function U(t){try{await p.post("/subscription",{email:t}),h.success({title:"Success",message:"You are now subscribed",position:"bottomCenter"})}catch{h.error({title:"Error",message:"Couldn't subscribe. Email might be already registered",position:"bottomCenter"})}}async function j(t,e){await p.patch(`/exercises/${t}/rating`,e)}function o(t){return t.charAt(0).toUpperCase()+t.slice(1)}const Q=document.querySelector(".pagination-pages"),L=document.querySelector(".pagination-back-wrapper"),k=document.querySelector(".pagination-next-wrapper");function d(t,e){t===1?L.style.opacity="20%":L.style.opacity="100%",t===e?k.style.opacity="20%":k.style.opacity="100%";let i=[];for(let a=t-2;a<=t+2;a++)a>0&&a<=e&&i.push(a);let n=i.map(a=>`<li class="pagination-page-number ${a==t?"current":""}">${a}</li>`).join("");t<e-2&&(n+='<li class="pagination-page-number">...</li>'),Q.innerHTML=n}const G=document.querySelector(".content-list");async function l(t=""){const e=(await J(t)).map(i=>`
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
            <p class="exercise-name">${o(i.name)}</p>
        </div>
        <div class="exercise-line-wrapper">
            <p class="exercise-info">Burned calories: <span class="exercise-info-value">${i.burnedCalories} / ${i.time}</span></p>
            <p class="exercise-info">Body part: <span class="exercise-info-value">${o(i.bodyPart)}</span></p>
            <p class="exercise-info">Target: <span class="exercise-info-value">${o(i.target)}</span></p>
        </div>
      </li>`).join("");G.innerHTML=e,d(s.pagination.page,s.pagination.maxPage)}let x;Z();function f(){return JSON.parse(localStorage.getItem("favorites"))??[]}async function W(t){const e=await H(t),i=f();console.log(i);const n=JSON.stringify([...i,e]);console.log(n),localStorage.setItem("favorites",n),K(t)}function M(t){const e=f(),i=JSON.stringify(e.filter(n=>n._id!=t));localStorage.setItem("favorites",i),X(t),s.pagination.purpose==="favorites"&&(s.pagination.updateSize(f().length),u())}function Y(t){return x.has(t)}function Z(){x=new Set(f().map(t=>t._id))}function K(t){x.add(t)}function X(t){x.delete(t)}const $=document.querySelector(".favorite-exercises-list");function u(){const t=f();if(t.length===0){$.innerHTML=`
    <p class="favorites-placeholder">
        It appears that you haven't added any exercises to your
        favorites yet. To get started, you can add exercises that you
        like to your favorites for easier access in the future.
    </p>`;return}$.innerHTML=t.slice((s.pagination.page-1)*s.pagination.perPage,s.pagination.page*s.pagination.perPage).map(e=>`
          <li class="exercise">
            <div class="exercise-line-wrapper">
                <span class="workout">workout</span>
                <div class="rating">
                    <button type="button" class="remove-favorite-quick-btn" data-id="${e._id}">
                        <svg class="bin-icon" width="18" height="18">
                            <use href="button-icons/delete.svg"></use>
                        </svg>
                    </button>
                </div>
                <button class="start-button" data-id="${e._id}" aria-label="Start exercise">
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
                <p class="exercise-name">${o(e.name)}</p>
            </div>
            <div class="exercise-line-wrapper">
                <p class="exercise-info">Burned calories: <span class="exercise-info-value">${e.burnedCalories} / ${e.time}</span></p>
                <p class="exercise-info">Body part: <span class="exercise-info-value">${o(e.bodyPart)}</span></p>
                <p class="exercise-info">Target: <span class="exercise-info-value">${o(e.target)}</span></p>
            </div>
          </li>`).join("")}const ee=document.querySelector(".content-list");async function g(){const t=(await z()).map(e=>`<li class="filter-tile" data-value="${e.name}" aria-label="${e.name}">
            <img src="${e.imgURL}" class="filter-image" alt="${e.name}"/>
            <h3 class="filter-name">${o(e.name)}</h3>
            <p class="filter-category">${e.filter}</p>
        </li>`).join("");ee.innerHTML=t,d(s.pagination.page,s.pagination.maxPage)}class m{constructor(e,i=null){v(this,"perPage");v(this,"page");v(this,"maxPage");v(this,"purpose");this.purpose=e,this.page=1,this.purpose==="filters"?window.matchMedia("(min-width: 768px)").matches?this.perPage=12:this.perPage=9:(this.purpose,window.matchMedia("(min-width: 768px)").matches?this.perPage=10:this.perPage=8),i?this.updateSize(i):this.maxPage=1,d(this.page,this.maxPage)}getPage(){return this.page}setMaxPage(e){this.maxPage=e}updateSize(e){this.maxPage=Math.ceil(e/this.perPage)}next(){this.page<this.maxPage&&this.page++,d(this.page,this.maxPage),this.purpose==="filters"?g():this.purpose==="exercises"?l():this.purpose==="favorites"&&u()}back(){this.page>1&&this.page--,d(this.page,this.maxPage),this.purpose==="filters"?g():this.purpose==="exercises"?l():this.purpose==="favorites"&&u()}reset(){this.page=1,d(this.page,this.maxPage),this.purpose==="filters"?g():this.purpose==="exercises"?l():this.purpose==="favorites"&&u()}last(){this.page=this.maxPage,d(this.page,this.maxPage),this.purpose==="filters"?g():this.purpose==="exercises"?l():this.purpose==="favorites"&&u()}}const te=document.querySelector(".main-heading"),ie=document.querySelector(".category-heading"),ae=document.querySelector(".exercises-search");function se(t){t.addEventListener("click",e=>{const i=e.target.closest(".filter-tabs-item");i&&(s.pagination=new m("filters"),te.innerHTML="Exercises",ie.style.display="none",ae.style.display="none",document.querySelectorAll(".filter-tabs-item").forEach(n=>n.classList.remove("active")),i.classList.add("active"),s.filter=i.dataset.filter,g())})}function T(){const t=document.querySelector(".pagination-first-button"),e=document.querySelector(".pagination-previous-button"),i=document.querySelector(".pagination-next-button"),n=document.querySelector(".pagination-last-button");t.addEventListener("click",()=>s.pagination.reset()),e.addEventListener("click",()=>s.pagination.back()),i.addEventListener("click",()=>s.pagination.next()),n.addEventListener("click",()=>s.pagination.last())}function F(t,e,i){t.addEventListener("click",()=>{i.classList.add("opened")}),e.addEventListener("click",()=>{i.classList.remove("opened")}),i.addEventListener("click",()=>{i.classList.remove("opened")})}const ne=document.querySelector(".main-heading"),E=document.querySelector(".category-heading"),re=document.querySelector(".exercises-search");function oe(t){t.addEventListener("click",e=>{const i=e.target.closest(".filter-tile");i&&(s.pagination=new m("exercises"),ne.innerHTML="Exercises /",E.innerHTML=o(i.dataset.value),E.style.display="block",re.style.display="flex",s.filterValue=i.dataset.value,l())})}const ce=document.querySelector(".motivation-text"),le=document.querySelector(".motivation-author");function de(t,e){ce.innerHTML=e,le.innerHTML=t}async function C(){let t=JSON.parse(localStorage.getItem("quote"));const e=new Date().getDate();if(!t||t.date!=e){const i=await V();localStorage.setItem("quote",JSON.stringify({...i,date:e})),t=JSON.parse(localStorage.getItem("quote"))}de(t.author,t.quote)}function I(t){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(t)}function N(t){t.addEventListener("submit",e=>{try{e.preventDefault();const i=document.getElementById("subscription-email");if(!I(i.value))throw new Error;U(i.value),i.value=""}catch{h.error({title:"Error",message:"Invalid email",position:"bottomCenter"})}})}const P=document.getElementById("exercises-search"),q=document.querySelector(".search-delete-button");function ue(t){t.addEventListener("submit",e=>{e.preventDefault(),s.pagination=new m("exercises"),P.value!=""?l(P.value):l()}),t.addEventListener("input",e=>{e.target.value!=""?q.style.display="block":q.style.display="none"}),t.addEventListener("reset",()=>{q.style.display="none",s.pagination=new m("exercises"),l()})}const pe=document.querySelector(".modal-backdrop"),B=document.querySelector(".modal-body");async function ge(t){const e=await H(t);B.innerHTML=`
    <div class="exercise-details-wrapper">
        <img src="${e.gifUrl}" class="exercise-gif" alt="Gif example of how to do the exercise" width="258" height="258"/>
        <div class="exercise-details-container">
            <div class="exercise-header">
                <h3 class="exercise-details-title">${o(e.name)}</h3>
                <div class="exercise-details-rating">
                    <span class="exercise-details-rating-value">${e.rating.toFixed(1)}</span>
                    <div class="rating-stars-container">
                        
                    </div>
                </div>
            </div>
            <ul class="quick-info-list">
                <li class="quick-info-item">
                    <p class="quick-info-parameter">Target</p>
                    <p class="quick-info-value">${o(e.target)}</p>
                </li>
                <li class="quick-info-item">
                    <p class="quick-info-parameter">Body Part</p>
                    <p class="quick-info-value">${o(e.bodyPart)}</p>
                </li>
                <li class="quick-info-item">
                    <p class="quick-info-parameter">Equipment</p>
                    <p class="quick-info-value">${o(e.equipment)}</p>
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
                ${Y(e._id)?'<button type="button" class="remove-from-favorites-btn" data-id="'+e._id+'" aria-label="Remove from favorites">Remove from favorites<svg class="bin-icon" width="20" height="20"><use href="button-icons/delete.svg"></use></svg></button>':'<button type="button" class="add-to-favorites-btn" data-id="'+e._id+'" aria-label="Add to favorites">Add to favorites<svg class="like-icon" width="20" height="20"><use href="button-icons/like.svg"></use></svg></button>'}
                <button type="button" class="give-rating-btn" data-id="${e._id}" aria-label="Give exercise a rating">
                    Give a rating
                </button>
            </div>
        </div>
    </div>
    `;const i=e.rating,n=B.querySelector(".rating-stars-container");for(let a=1;a<=5;a++){const r=document.createElement("span");r.classList.add("star","filled"),r.innerHTML="★";let c=0;i>=a?c=100:i>a-1?c=(i-(a-1))*100:c=0,r.style.setProperty("--percent",`${c}%`),n.appendChild(r)}pe.classList.remove("is-hidden")}const fe=document.querySelector("header"),me=document.querySelector("body");function O(t){t.addEventListener("click",e=>{const i=e.target.closest(".remove-favorite-quick-btn"),n=e.target.closest(".start-button");n?(fe.style.visibility="hidden",me.classList.add("modal-open"),ge(n.dataset.id)):i&&(M(i.dataset.id),u())})}const ve=document.querySelector(".modal-body");function he(t){ve.innerHTML=`
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
    `}const y=document.querySelector(".modal-backdrop"),ye=document.querySelector(".modal-close-btn"),b=document.querySelector(".modal-body"),S=document.querySelector("header"),w=document.querySelector("body");function R(){y.addEventListener("click",()=>{y.classList.add("is-hidden"),w.classList.remove("modal-open"),S.style.visibility="visible"}),ye.addEventListener("click",()=>{y.classList.add("is-hidden"),w.classList.remove("modal-open"),S.style.visibility="visible"}),b.addEventListener("click",t=>{t.stopPropagation()}),b.addEventListener("click",t=>{const e=t.target.closest(".give-rating-btn");e&&he(e.dataset.id)}),b.addEventListener("submit",t=>{try{t.preventDefault();const e=t.target.closest("#rating-form");if(!e)return;const i=Number(e.querySelector(".rating-form-value").innerHTML),n=e.querySelector("#rating-email-input").value,a=e.querySelector("#rating-review-text").value,r={rate:i,email:n,review:a};if(!I(n))throw new Error("Invalid Error");j(e.dataset.id,r),y.classList.add("is-hidden"),w.classList.remove("modal-open"),S.style.visibility="visible",h.success({title:"Success",message:"Posted a review",position:"bottomCenter"})}catch(e){h.error({title:"Error",message:e.message,position:"bottomCenter"})}}),b.addEventListener("change",t=>{if(t.target.type==="radio"){const e=document.querySelector(".rating-form-value");e.innerHTML=t.target.value}})}const be=document.querySelector(".modal-body");function A(){be.addEventListener("click",t=>{const e=t.target.closest(".add-to-favorites-btn"),i=t.target.closest(".remove-from-favorites-btn");if(e){const n=e.dataset.id;W(n);const a=`
        <button type="button" class="remove-from-favorites-btn" aria-label="Remove from favorites" data-id="${n}">
            Remove from favorites
            <svg class="bin-icon" width="20" height="20">
                <use href="button-icons/delete.svg"></use>
            </svg>
        </button>
      `,r=new DOMParser().parseFromString(a,"text/html").body.firstChild;e.replaceWith(r)}else if(i){const n=i.dataset.id;M(n);const a=`
        <button type="button" class="add-to-favorites-btn" aria-label="Add to favorites" data-id="${n}">
            Add to favorites
            <svg class="like-icon" width="20" height="20">
                <use href="button-icons/like.svg"></use>
            </svg>
        </button>
      `,r=new DOMParser().parseFromString(a,"text/html").body.firstChild;i.replaceWith(r)}})}function xe(){let t=window.location;const e=document.querySelector(".nav-list"),i=t.pathname.lastIndexOf("/")+1;e.querySelector('a[href="'+t.pathname.slice(i)+'"]').parentNode.classList.add("active"),t.pathname.slice(i)==="index.html"?qe():Se()}async function qe(){const t=document.querySelector(".nav-toggle"),e=document.querySelector(".nav-close"),i=document.querySelector(".mobile-menu-backdrop");F(t,e,i);const n=document.querySelector(".filter-tabs-list"),a=document.querySelector(".content-list");se(n);const r=document.querySelector(".exercises-search");ue(r),s.pagination=new m("filters"),g(),oe(a),C(),T(),R(),O(a),A();const c=document.querySelector(".subscription-form");N(c)}async function Se(){const t=document.querySelector(".nav-toggle"),e=document.querySelector(".nav-close"),i=document.querySelector(".mobile-menu-backdrop");F(t,e,i),C(),s.pagination=new m("favorites",f().length),T(),R();const n=document.querySelector(".favorite-exercises-list");O(n),A(),u();const a=document.querySelector(".subscription-form");N(a)}xe();
//# sourceMappingURL=main-DwPyOXta.js.map

var A=Object.defineProperty;var _=(e,t,i)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var m=(e,t,i)=>_(e,typeof t!="symbol"?t+"":t,i);import{a as u,i as f}from"./vendor-XJ88ArH8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function i(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(a){if(a.ep)return;a.ep=!0;const r=i(a);fetch(a.href,r)}})();const n={filter:"Muscles",filterValue:"",pagination:null};u.defaults.baseURL="https://your-energy.b.goit.study/api";async function D(){const e=await u.get(`/filters?filter=${n.filter}&page=${n.pagination.page}&limit=${n.pagination.perPage}`);return n.pagination.page===1&&n.pagination.setMaxPage(e.data.totalPages),e.data.results}async function J(e=""){const t=new URLSearchParams({page:n.pagination.page,limit:n.pagination.perPage});switch(e!=""&&t.set("keyword",e),n.filter){case"Muscles":t.set("muscles",n.filterValue);break;case"Body parts":t.set("bodypart",n.filterValue);break;case"Equipment":t.set("equipment",n.filterValue)}const i=await u.get(`/exercises?${t}`);return n.pagination.page===1&&n.pagination.setMaxPage(i.data.totalPages),i.data.results}async function P(e){return(await u.get(`/exercises/${e}`)).data}async function V(){return(await u.get("/quote")).data}async function U(e){try{await u.post("/subscription",{email:e}),f.success({title:"Success",message:"You are now subscribed",position:"bottomCenter"})}catch{f.error({title:"Error",message:"Couldn't subscribe. Email might already registered",position:"bottomCenter"})}}async function j(e,t){await u.patch(`/exercises/${e}/rating`,t)}function o(e){return e.charAt(0).toUpperCase()+e.slice(1)}const z=document.querySelector(".pagination-pages"),w=document.querySelector(".pagination-back-wrapper"),L=document.querySelector(".pagination-next-wrapper");function d(e,t){e===1?w.style.opacity="20%":w.style.opacity="100%",e===t?L.style.opacity="20%":L.style.opacity="100%";let i=[];for(let a=e-2;a<=e+2;a++)a>0&&a<=t&&i.push(a);let s=i.map(a=>`<li class="pagination-page-number ${a==e?"current":""}">${a}</li>`).join("");e<t-2&&(s+='<li class="pagination-page-number">...</li>'),z.innerHTML=s}const Q=document.querySelector(".content-list");async function l(e=""){const t=(await J(e)).map(i=>`
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
      </li>`).join("");Q.innerHTML=t,d(n.pagination.page,n.pagination.maxPage)}const G=document.querySelector(".content-list");async function p(){const e=(await D()).map(t=>`<li class="filter-tile" data-value="${t.name}" aria-label="${t.name}">
            <img src="${t.imgURL}" class="filter-image" alt="${t.name}"/>
            <h3 class="filter-name">${o(t.name)}</h3>
            <p class="filter-category">${t.filter}</p>
        </li>`).join("");G.innerHTML=e,d(n.pagination.page,n.pagination.maxPage)}class g{constructor(t){m(this,"perPage");m(this,"page");m(this,"maxPage");m(this,"purpose");this.purpose=t,this.page=1,this.maxPage=1,this.purpose==="filters"?window.matchMedia("(min-width: 768px)").matches?this.perPage=12:this.perPage=9:(this.purpose,window.matchMedia("(min-width: 768px)").matches?this.perPage=10:this.perPage=8),d(this.page,this.maxPage)}getPage(){return this.page}setMaxPage(t){this.maxPage=t}next(){this.page<this.maxPage&&this.page++,d(this.page,this.maxPage),this.purpose==="filters"?p():this.purpose==="exercises"&&l()}back(){this.page>1&&this.page--,d(this.page,this.maxPage),this.purpose==="filters"?p():this.purpose==="exercises"&&l()}reset(){this.page=1,d(this.page,this.maxPage),this.purpose==="filters"?p():this.purpose==="exercises"&&l()}last(){this.page=this.maxPage,d(this.page,this.maxPage),this.purpose==="filters"?p():this.purpose==="exercises"&&l()}}const W=document.querySelector(".main-heading"),Y=document.querySelector(".category-heading"),Z=document.querySelector(".exercises-search");function K(e){e.addEventListener("click",t=>{const i=t.target.closest(".filter-tabs-item");i&&(n.pagination=new g("filters"),W.innerHTML="Exercises",Y.style.display="none",Z.style.display="none",document.querySelectorAll(".filter-tabs-item").forEach(s=>s.classList.remove("active")),i.classList.add("active"),n.filter=i.dataset.filter,p())})}function B(){const e=document.querySelector(".pagination-first-button"),t=document.querySelector(".pagination-previous-button"),i=document.querySelector(".pagination-next-button"),s=document.querySelector(".pagination-last-button");e.addEventListener("click",()=>n.pagination.reset()),t.addEventListener("click",()=>n.pagination.back()),i.addEventListener("click",()=>n.pagination.next()),s.addEventListener("click",()=>n.pagination.last())}function H(e,t,i){e.addEventListener("click",()=>{i.classList.add("opened")}),t.addEventListener("click",()=>{i.classList.remove("opened")}),i.addEventListener("click",()=>{i.classList.remove("opened")})}const X=document.querySelector(".main-heading"),k=document.querySelector(".category-heading"),ee=document.querySelector(".exercises-search");function te(e){e.addEventListener("click",t=>{const i=t.target.closest(".filter-tile");i&&(n.pagination=new g("exercises"),X.innerHTML="Exercises /",k.innerHTML=o(i.dataset.value),k.style.display="block",ee.style.display="flex",n.filterValue=i.dataset.value,l())})}const ie=document.querySelector(".motivation-text"),ae=document.querySelector(".motivation-author");function se(e,t){ie.innerHTML=t,ae.innerHTML=e}async function M(){let e=JSON.parse(localStorage.getItem("quote"));const t=new Date().getDate();if(!e||e.date!=t){const i=await V();localStorage.setItem("quote",JSON.stringify({...i,date:t})),e=JSON.parse(localStorage.getItem("quote"))}se(e.author,e.quote)}function F(e){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)}function T(e){e.addEventListener("submit",t=>{try{t.preventDefault();const i=document.getElementById("subscription-email");if(!F(i.value))throw new Error;U(i.value),i.value=""}catch{f.error({title:"Error",message:"Invalid email",position:"bottomCenter"})}})}const $=document.getElementById("exercises-search"),x=document.querySelector(".search-delete-button");function ne(e){e.addEventListener("submit",t=>{t.preventDefault(),n.pagination=new g("exercises"),$.value!=""?l($.value):l()}),e.addEventListener("input",t=>{t.target.value!=""?x.style.display="block":x.style.display="none"}),e.addEventListener("reset",()=>{x.style.display="none",n.pagination=new g("exercises"),l()})}let h;ce();function b(){return JSON.parse(localStorage.getItem("favorites"))??[]}async function re(e){const t=await P(e),i=b();console.log(i);const s=JSON.stringify([...i,t]);console.log(s),localStorage.setItem("favorites",s),le(e)}function C(e){const t=b(),i=JSON.stringify(t.filter(s=>s._id!=e));localStorage.setItem("favorites",i),de(e)}function oe(e){return h.has(e)}function ce(){h=new Set(b().map(e=>e._id))}function le(e){h.add(e)}function de(e){h.delete(e)}const ue=document.querySelector(".modal-backdrop"),E=document.querySelector(".modal-body");async function pe(e){const t=await P(e);E.innerHTML=`
    <div class="exercise-details-wrapper">
        <img src="${t.gifUrl}" class="exercise-gif" alt="Gif example of how to do the exercise"/>
        <div class="exercise-details-container">
            <div class="exercise-header">
                <h3 class="exercise-details-title">${o(t.name)}</h3>
                <div class="exercise-details-rating">
                    <span class="exercise-details-rating-value">${t.rating.toFixed(1)}</span>
                    <div class="rating-stars-container">
                        
                    </div>
                </div>
            </div>
            <ul class="quick-info-list">
                <li class="quick-info-item">
                    <p class="quick-info-parameter">Target</p>
                    <p class="quick-info-value">${o(t.target)}</p>
                </li>
                <li class="quick-info-item">
                    <p class="quick-info-parameter">Body Part</p>
                    <p class="quick-info-value">${o(t.bodyPart)}</p>
                </li>
                <li class="quick-info-item">
                    <p class="quick-info-parameter">Equipment</p>
                    <p class="quick-info-value">${o(t.equipment)}</p>
                </li>
                <li class="quick-info-item">
                    <p class="quick-info-parameter">Popular</p>
                    <p class="quick-info-value">${t.popularity}</p>
                </li>
                <li class="quick-info-item">
                    <p class="quick-info-parameter">Burned Calories</p>
                    <p class="quick-info-value">${t.burnedCalories}/${t.time} min</p>
                </li>
            </ul>
            <p class="exercise-detailed-description">${t.description}</p>

            <div class="exercise-action-buttons">
                ${oe(t._id)?'<button type="button" class="remove-from-favorites-btn" data-id="'+t._id+'" aria-label="Remove from favorites">Remove from favorites<svg class="bin-icon" width="20" height="20"><use href="button-icons/delete.svg"></use></svg></button>':'<button type="button" class="add-to-favorites-btn" data-id="'+t._id+'" aria-label="Add to favorites">Add to favorites<svg class="like-icon" width="20" height="20"><use href="button-icons/like.svg"></use></svg></button>'}
                <button type="button" class="give-rating-btn" data-id="${t._id}" aria-label="Give exercise a rating">
                    Give a rating
                </button>
            </div>
        </div>
    </div>
    `;const i=t.rating,s=E.querySelector(".rating-stars-container");for(let a=1;a<=5;a++){const r=document.createElement("span");r.classList.add("star","filled"),r.innerHTML="★";let c=0;i>=a?c=100:i>a-1?c=(i-(a-1))*100:c=0,r.style.setProperty("--percent",`${c}%`),s.appendChild(r)}ue.classList.remove("is-hidden")}const ge=document.querySelector(".favorite-exercises-list");function I(){ge.innerHTML=b().map(e=>`
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
          </li>`).join("")}const me=document.querySelector("header"),fe=document.querySelector("body");function O(e){e.addEventListener("click",t=>{const i=t.target.closest(".remove-favorite-quick-btn"),s=t.target.closest(".start-button");s?(me.style.visibility="hidden",fe.classList.add("modal-open"),pe(s.dataset.id)):i&&(C(i.dataset.id),I())})}const ve=document.querySelector(".modal-body");function ye(e){ve.innerHTML=`
    <form id="rating-form" data-id="${e}">
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
    `}const v=document.querySelector(".modal-backdrop"),he=document.querySelector(".modal-close-btn"),y=document.querySelector(".modal-body"),q=document.querySelector("header"),S=document.querySelector("body");function N(){v.addEventListener("click",()=>{v.classList.add("is-hidden"),S.classList.remove("modal-open"),q.style.visibility="visible"}),he.addEventListener("click",()=>{v.classList.add("is-hidden"),S.classList.remove("modal-open"),q.style.visibility="visible"}),y.addEventListener("click",e=>{e.stopPropagation()}),y.addEventListener("click",e=>{const t=e.target.closest(".give-rating-btn");t&&ye(t.dataset.id)}),y.addEventListener("submit",e=>{try{e.preventDefault();const t=e.target.closest("#rating-form");if(!t)return;const i=Number(t.querySelector(".rating-form-value").innerHTML),s=t.querySelector("#rating-email-input").value,a=t.querySelector("#rating-review-text").value,r={rate:i,email:s,review:a};if(!F(s))throw new Error("Invalid Error");j(t.dataset.id,r),v.classList.add("is-hidden"),S.classList.remove("modal-open"),q.style.visibility="visible",f.success({title:"Success",message:"Posted a review",position:"bottomCenter"})}catch(t){f.error({title:"Error",message:t.message,position:"bottomCenter"})}}),y.addEventListener("change",e=>{if(e.target.type==="radio"){const t=document.querySelector(".rating-form-value");t.innerHTML=e.target.value}})}const be=document.querySelector(".modal-body");function R(){be.addEventListener("click",e=>{const t=e.target.closest(".add-to-favorites-btn"),i=e.target.closest(".remove-from-favorites-btn");if(t){const s=t.dataset.id;re(s);const a=`
        <button type="button" class="remove-from-favorites-btn" aria-label="Remove from favorites" data-id="${s}">
            Remove from favorites
            <svg class="bin-icon" width="20" height="20">
                <use href="button-icons/delete.svg"></use>
            </svg>
        </button>
      `,r=new DOMParser().parseFromString(a,"text/html").body.firstChild;t.replaceWith(r)}else if(i){const s=i.dataset.id;C(s);const a=`
        <button type="button" class="add-to-favorites-btn" aria-label="Add to favorites" data-id="${s}">
            Add to favorites
            <svg class="like-icon" width="20" height="20">
                <use href="button-icons/like.svg"></use>
            </svg>
        </button>
      `,r=new DOMParser().parseFromString(a,"text/html").body.firstChild;i.replaceWith(r)}})}function xe(){let e=window.location;const t=document.querySelector(".nav-list"),i=e.pathname.lastIndexOf("/")+1;t.querySelector('a[href="'+e.pathname.slice(i)+'"]').parentNode.classList.add("active"),e.pathname.slice(i)==="index.html"?qe():Se()}async function qe(){const e=document.querySelector(".nav-toggle"),t=document.querySelector(".nav-close"),i=document.querySelector(".mobile-menu-backdrop");H(e,t,i);const s=document.querySelector(".filter-tabs-list"),a=document.querySelector(".content-list");K(s);const r=document.querySelector(".exercises-search");ne(r),n.pagination=new g("filters"),p(),te(a),M(),B(),N(),O(a),R();const c=document.querySelector(".subscription-form");T(c)}async function Se(){const e=document.querySelector(".nav-toggle"),t=document.querySelector(".nav-close"),i=document.querySelector(".mobile-menu-backdrop");H(e,t,i),M(),n.pagination=new g("favorites"),B(),N();const s=document.querySelector(".favorite-exercises-list");O(s),R(),I();const a=document.querySelector(".subscription-form");T(a)}xe();
//# sourceMappingURL=main-DH_xiANO.js.map

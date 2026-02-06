var A=Object.defineProperty;var _=(e,t,i)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var v=(e,t,i)=>_(e,typeof t!="symbol"?t+"":t,i);import{a as u,i as h}from"./vendor-XJ88ArH8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=i(a);fetch(a.href,r)}})();const s={filter:"Muscles",filterValue:"",pagination:null};u.defaults.baseURL="https://your-energy.b.goit.study/api";async function D(){const e=await u.get(`/filters?filter=${s.filter}&page=${s.pagination.page}&limit=${s.pagination.perPage}`);return s.pagination.page===1&&s.pagination.setMaxPage(e.data.totalPages),e.data.results}async function z(e=""){const t=new URLSearchParams({page:s.pagination.page,limit:s.pagination.perPage});switch(e!=""&&t.set("keyword",e),s.filter){case"Muscles":t.set("muscles",s.filterValue);break;case"Body parts":t.set("bodypart",s.filterValue);break;case"Equipment":t.set("equipment",s.filterValue)}const i=await u.get(`/exercises?${t}`);return s.pagination.page===1&&s.pagination.setMaxPage(i.data.totalPages),i.data.results}async function B(e){return(await u.get(`/exercises/${e}`)).data}async function J(){return(await u.get("/quote")).data}async function V(e){try{await u.post("/subscription",{email:e}),h.success({title:"Success",message:"You are now subscribed",position:"bottomCenter"})}catch{h.error({title:"Error",message:"Couldn't subscribe. Email might be already registered",position:"bottomCenter"})}}async function U(e,t){await u.patch(`/exercises/${e}/rating`,t)}function o(e){return e.charAt(0).toUpperCase()+e.slice(1)}const j=document.querySelector(".pagination-pages"),L=document.querySelector(".pagination-back-wrapper"),k=document.querySelector(".pagination-next-wrapper");function d(e,t){e===1?L.style.opacity="20%":L.style.opacity="100%",e===t?k.style.opacity="20%":k.style.opacity="100%";let i=[];for(let a=e-2;a<=e+2;a++)a>0&&a<=t&&i.push(a);let n=i.map(a=>`<li class="pagination-page-number ${a==e?"current":""}">${a}</li>`).join("");e<t-2&&(n+='<li class="pagination-page-number">...</li>'),j.innerHTML=n}const Q=document.querySelector(".content-list");async function l(e=""){const t=(await z(e)).map(i=>`
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
      </li>`).join("");Q.innerHTML=t,d(s.pagination.page,s.pagination.maxPage)}let x;Y();function f(){return JSON.parse(localStorage.getItem("favorites"))??[]}async function G(e){const t=await B(e),i=f();console.log(i);const n=JSON.stringify([...i,t]);console.log(n),localStorage.setItem("favorites",n),Z(e)}function H(e){const t=f(),i=JSON.stringify(t.filter(n=>n._id!=e));localStorage.setItem("favorites",i),K(e),s.pagination.purpose==="favorites"&&s.pagination.updateSize(f().length)}function W(e){return x.has(e)}function Y(){x=new Set(f().map(e=>e._id))}function Z(e){x.add(e)}function K(e){x.delete(e)}const X=document.querySelector(".favorite-exercises-list");function p(){X.innerHTML=f().slice((s.pagination.page-1)*s.pagination.perPage,s.pagination.page*s.pagination.perPage).map(e=>`
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
          </li>`).join("")}const ee=document.querySelector(".content-list");async function g(){const e=(await D()).map(t=>`<li class="filter-tile" data-value="${t.name}" aria-label="${t.name}">
            <img src="${t.imgURL}" class="filter-image" alt="${t.name}"/>
            <h3 class="filter-name">${o(t.name)}</h3>
            <p class="filter-category">${t.filter}</p>
        </li>`).join("");ee.innerHTML=e,d(s.pagination.page,s.pagination.maxPage)}class m{constructor(t,i=null){v(this,"perPage");v(this,"page");v(this,"maxPage");v(this,"purpose");this.purpose=t,this.page=1,this.purpose==="filters"?window.matchMedia("(min-width: 768px)").matches?this.perPage=12:this.perPage=9:(this.purpose,window.matchMedia("(min-width: 768px)").matches?this.perPage=10:this.perPage=8),i?this.updateSize(i):this.maxPage=1,d(this.page,this.maxPage)}getPage(){return this.page}setMaxPage(t){this.maxPage=t}updateSize(t){this.maxPage=Math.ceil(t/this.perPage)}next(){this.page<this.maxPage&&this.page++,d(this.page,this.maxPage),this.purpose==="filters"?g():this.purpose==="exercises"?l():this.purpose==="favorites"&&p()}back(){this.page>1&&this.page--,d(this.page,this.maxPage),this.purpose==="filters"?g():this.purpose==="exercises"?l():this.purpose==="favorites"&&p()}reset(){this.page=1,d(this.page,this.maxPage),this.purpose==="filters"?g():this.purpose==="exercises"?l():this.purpose==="favorites"&&p()}last(){this.page=this.maxPage,d(this.page,this.maxPage),this.purpose==="filters"?g():this.purpose==="exercises"?l():this.purpose==="favorites"&&p()}}const te=document.querySelector(".main-heading"),ie=document.querySelector(".category-heading"),ae=document.querySelector(".exercises-search");function se(e){e.addEventListener("click",t=>{const i=t.target.closest(".filter-tabs-item");i&&(s.pagination=new m("filters"),te.innerHTML="Exercises",ie.style.display="none",ae.style.display="none",document.querySelectorAll(".filter-tabs-item").forEach(n=>n.classList.remove("active")),i.classList.add("active"),s.filter=i.dataset.filter,g())})}function M(){const e=document.querySelector(".pagination-first-button"),t=document.querySelector(".pagination-previous-button"),i=document.querySelector(".pagination-next-button"),n=document.querySelector(".pagination-last-button");e.addEventListener("click",()=>s.pagination.reset()),t.addEventListener("click",()=>s.pagination.back()),i.addEventListener("click",()=>s.pagination.next()),n.addEventListener("click",()=>s.pagination.last())}function F(e,t,i){e.addEventListener("click",()=>{i.classList.add("opened")}),t.addEventListener("click",()=>{i.classList.remove("opened")}),i.addEventListener("click",()=>{i.classList.remove("opened")})}const ne=document.querySelector(".main-heading"),$=document.querySelector(".category-heading"),re=document.querySelector(".exercises-search");function oe(e){e.addEventListener("click",t=>{const i=t.target.closest(".filter-tile");i&&(s.pagination=new m("exercises"),ne.innerHTML="Exercises /",$.innerHTML=o(i.dataset.value),$.style.display="block",re.style.display="flex",s.filterValue=i.dataset.value,l())})}const ce=document.querySelector(".motivation-text"),le=document.querySelector(".motivation-author");function de(e,t){ce.innerHTML=t,le.innerHTML=e}async function T(){let e=JSON.parse(localStorage.getItem("quote"));const t=new Date().getDate();if(!e||e.date!=t){const i=await J();localStorage.setItem("quote",JSON.stringify({...i,date:t})),e=JSON.parse(localStorage.getItem("quote"))}de(e.author,e.quote)}function C(e){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)}function I(e){e.addEventListener("submit",t=>{try{t.preventDefault();const i=document.getElementById("subscription-email");if(!C(i.value))throw new Error;V(i.value),i.value=""}catch{h.error({title:"Error",message:"Invalid email",position:"bottomCenter"})}})}const P=document.getElementById("exercises-search"),q=document.querySelector(".search-delete-button");function ue(e){e.addEventListener("submit",t=>{t.preventDefault(),s.pagination=new m("exercises"),P.value!=""?l(P.value):l()}),e.addEventListener("input",t=>{t.target.value!=""?q.style.display="block":q.style.display="none"}),e.addEventListener("reset",()=>{q.style.display="none",s.pagination=new m("exercises"),l()})}const pe=document.querySelector(".modal-backdrop"),E=document.querySelector(".modal-body");async function ge(e){const t=await B(e);E.innerHTML=`
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
                ${W(t._id)?'<button type="button" class="remove-from-favorites-btn" data-id="'+t._id+'" aria-label="Remove from favorites">Remove from favorites<svg class="bin-icon" width="20" height="20"><use href="button-icons/delete.svg"></use></svg></button>':'<button type="button" class="add-to-favorites-btn" data-id="'+t._id+'" aria-label="Add to favorites">Add to favorites<svg class="like-icon" width="20" height="20"><use href="button-icons/like.svg"></use></svg></button>'}
                <button type="button" class="give-rating-btn" data-id="${t._id}" aria-label="Give exercise a rating">
                    Give a rating
                </button>
            </div>
        </div>
    </div>
    `;const i=t.rating,n=E.querySelector(".rating-stars-container");for(let a=1;a<=5;a++){const r=document.createElement("span");r.classList.add("star","filled"),r.innerHTML="★";let c=0;i>=a?c=100:i>a-1?c=(i-(a-1))*100:c=0,r.style.setProperty("--percent",`${c}%`),n.appendChild(r)}pe.classList.remove("is-hidden")}const fe=document.querySelector("header"),me=document.querySelector("body");function N(e){e.addEventListener("click",t=>{const i=t.target.closest(".remove-favorite-quick-btn"),n=t.target.closest(".start-button");n?(fe.style.visibility="hidden",me.classList.add("modal-open"),ge(n.dataset.id)):i&&(H(i.dataset.id),p())})}const ve=document.querySelector(".modal-body");function he(e){ve.innerHTML=`
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
    `}const y=document.querySelector(".modal-backdrop"),ye=document.querySelector(".modal-close-btn"),b=document.querySelector(".modal-body"),S=document.querySelector("header"),w=document.querySelector("body");function O(){y.addEventListener("click",()=>{y.classList.add("is-hidden"),w.classList.remove("modal-open"),S.style.visibility="visible"}),ye.addEventListener("click",()=>{y.classList.add("is-hidden"),w.classList.remove("modal-open"),S.style.visibility="visible"}),b.addEventListener("click",e=>{e.stopPropagation()}),b.addEventListener("click",e=>{const t=e.target.closest(".give-rating-btn");t&&he(t.dataset.id)}),b.addEventListener("submit",e=>{try{e.preventDefault();const t=e.target.closest("#rating-form");if(!t)return;const i=Number(t.querySelector(".rating-form-value").innerHTML),n=t.querySelector("#rating-email-input").value,a=t.querySelector("#rating-review-text").value,r={rate:i,email:n,review:a};if(!C(n))throw new Error("Invalid Error");U(t.dataset.id,r),y.classList.add("is-hidden"),w.classList.remove("modal-open"),S.style.visibility="visible",h.success({title:"Success",message:"Posted a review",position:"bottomCenter"})}catch(t){h.error({title:"Error",message:t.message,position:"bottomCenter"})}}),b.addEventListener("change",e=>{if(e.target.type==="radio"){const t=document.querySelector(".rating-form-value");t.innerHTML=e.target.value}})}const be=document.querySelector(".modal-body");function R(){be.addEventListener("click",e=>{const t=e.target.closest(".add-to-favorites-btn"),i=e.target.closest(".remove-from-favorites-btn");if(t){const n=t.dataset.id;G(n);const a=`
        <button type="button" class="remove-from-favorites-btn" aria-label="Remove from favorites" data-id="${n}">
            Remove from favorites
            <svg class="bin-icon" width="20" height="20">
                <use href="button-icons/delete.svg"></use>
            </svg>
        </button>
      `,r=new DOMParser().parseFromString(a,"text/html").body.firstChild;t.replaceWith(r)}else if(i){const n=i.dataset.id;H(n);const a=`
        <button type="button" class="add-to-favorites-btn" aria-label="Add to favorites" data-id="${n}">
            Add to favorites
            <svg class="like-icon" width="20" height="20">
                <use href="button-icons/like.svg"></use>
            </svg>
        </button>
      `,r=new DOMParser().parseFromString(a,"text/html").body.firstChild;i.replaceWith(r)}})}function xe(){let e=window.location;const t=document.querySelector(".nav-list"),i=e.pathname.lastIndexOf("/")+1;t.querySelector('a[href="'+e.pathname.slice(i)+'"]').parentNode.classList.add("active"),e.pathname.slice(i)==="index.html"?qe():Se()}async function qe(){const e=document.querySelector(".nav-toggle"),t=document.querySelector(".nav-close"),i=document.querySelector(".mobile-menu-backdrop");F(e,t,i);const n=document.querySelector(".filter-tabs-list"),a=document.querySelector(".content-list");se(n);const r=document.querySelector(".exercises-search");ue(r),s.pagination=new m("filters"),g(),oe(a),T(),M(),O(),N(a),R();const c=document.querySelector(".subscription-form");I(c)}async function Se(){const e=document.querySelector(".nav-toggle"),t=document.querySelector(".nav-close"),i=document.querySelector(".mobile-menu-backdrop");F(e,t,i),T(),s.pagination=new m("favorites",f().length),M(),O();const n=document.querySelector(".favorite-exercises-list");N(n),R(),p();const a=document.querySelector(".subscription-form");I(a)}xe();
//# sourceMappingURL=main-CYqgsrAt.js.map

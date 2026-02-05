var v=Object.defineProperty;var L=(t,e,i)=>e in t?v(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var l=(t,e,i)=>L(t,typeof e!="symbol"?e+"":e,i);import{a as d}from"./vendor-CLb_lYsF.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const g of r.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&n(g)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}})();const a={filter:"Muscles",filterValue:"",pagination:null};d.defaults.baseURL="https://your-energy.b.goit.study/api";async function b(){const t=await d.get(`/filters?filter=${a.filter}&page=${a.pagination.page}&limit=${a.pagination.perPage}`);return a.pagination.page===1&&a.pagination.setMaxPage(t.data.totalPages),t.data.results}async function w(t=null){const e=new URLSearchParams({page:a.pagination.page,limit:a.pagination.perPage});switch(t!=null&&e.set("keyword",t),a.filter){case"Muscles":e.set("muscles",a.filterValue);break;case"Body parts":e.set("bodypart",a.filterValue);break;case"Equipment":e.set("equipment",a.filterValue)}const i=await d.get(`/exercises?${e}`);return a.pagination.page===1&&a.pagination.setMaxPage(i.data.totalPages),i.data.results}function u(t){return t.charAt(0).toUpperCase()+t.slice(1)}const P=document.querySelector(".pagination-pages"),m=document.querySelector(".pagination-back-wrapper"),h=document.querySelector(".pagination-next-wrapper");function o(t,e){t===1?m.style.opacity="20%":m.style.opacity="100%",t===e?h.style.opacity="20%":h.style.opacity="100%";let i=[];for(let s=t-2;s<=t+2;s++)s>0&&s<=e&&i.push(s);let n=i.map(s=>`<li class="pagination-page-number ${s==t?"current":""}">${s}</li>`).join("");t<e-2&&(n+='<li class="pagination-page-number">...</li>'),P.innerHTML=n}const S=document.querySelector(".content-list");async function p(){const t=(await w()).map(e=>`
      <li class="exercise" data-id="${e._id}">
        <div class="exercise-line-wrapper">
            <span class="workout">workout</span>
            <div class="rating">
                <span class="rating-value">${e.rating.toFixed(1)}</span>
                <svg class="star-icon" width="18" height="18">
                    <use href="icon-pack/star-icon.svg"></use>
                </svg>
            </div>
            <button class="start-button">
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
            <p class="exercise-name">${u(e.name)}</p>
        </div>
        <div class="exercise-line-wrapper">
            <p class="exercise-info">Burned calories: <span class="exercise-info-value">${e.burnedCalories} / ${e.time}</span></p>
            <p class="exercise-info">Body part: <span class="exercise-info-value">${u(e.bodyPart)}</span></p>
            <p class="exercise-info">Target: <span class="exercise-info-value">${u(e.target)}</span></p>
        </div>
      </li>`).join("");S.innerHTML=t,o(a.pagination.page,a.pagination.maxPage)}const q=document.querySelector(".content-list");async function c(){const t=(await b()).map(e=>`<li class="filter-tile" data-value="${e.name}">
            <img src="${e.imgURL}" class="filter-image" alt="${e.name}"/>
            <h3 class="filter-name">${u(e.name)}</h3>
            <p class="filter-category">${e.filter}</p>
        </li>`).join("");q.innerHTML=t,o(a.pagination.page,a.pagination.maxPage)}class f{constructor(e){l(this,"perPage");l(this,"page");l(this,"maxPage");l(this,"purpose");this.purpose=e,this.page=1,this.maxPage=1,this.purpose==="filters"?window.matchMedia("(min-width: 768px)").matches?this.perPage=12:this.perPage=9:this.purpose==="exercises"&&(window.matchMedia("(min-width: 768px)").matches?this.perPage=10:this.perPage=8),o(this.page,this.maxPage)}getPage(){return this.page}setMaxPage(e){this.maxPage=e}next(){this.page<this.maxPage&&this.page++,o(this.page,this.maxPage),this.purpose==="filters"?c():this.purpose==="exercises"&&p()}back(){this.page>1&&this.page--,o(this.page,this.maxPage),this.purpose==="filters"?c():this.purpose==="exercises"&&p()}reset(){this.page=1,o(this.page,this.maxPage),this.purpose==="filters"?c():this.purpose==="exercises"&&p()}last(){this.page=this.maxPage,o(this.page,this.maxPage),this.purpose==="filters"?c():this.purpose==="exercises"&&p()}}const $=document.querySelector(".main-heading"),k=document.querySelector(".category-heading"),E=document.querySelector(".exercises-search");function H(t){t.addEventListener("click",e=>{const i=e.target.closest(".filter-tabs-item");i&&(a.pagination=new f("filters"),$.innerHTML="Exercises",k.style.display="none",E.style.display="none",document.querySelectorAll(".filter-tabs-item").forEach(n=>n.classList.remove("active")),i.classList.add("active"),a.filter=i.dataset.filter,c())})}function M(){const t=document.querySelector(".pagination-first-button"),e=document.querySelector(".pagination-previous-button"),i=document.querySelector(".pagination-next-button"),n=document.querySelector(".pagination-last-button");t.addEventListener("click",()=>a.pagination.reset()),e.addEventListener("click",()=>a.pagination.back()),i.addEventListener("click",()=>a.pagination.next()),n.addEventListener("click",()=>a.pagination.last())}function B(t,e,i){t.addEventListener("click",()=>{i.classList.toggle("opened")}),e.addEventListener("click",()=>{i.classList.toggle("opened")})}const T=document.querySelector(".main-heading"),y=document.querySelector(".category-heading"),F=document.querySelector(".exercises-search");function N(t){t.addEventListener("click",e=>{const i=e.target.closest(".filter-tile");i&&(a.pagination=new f("exercises"),T.innerHTML="Exercises /",y.innerHTML=u(i.dataset.value),y.style.display="block",F.style.display="flex",a.filterValue=i.dataset.value,p())})}let x=window.location;document.querySelector('a[href="'+x.pathname.slice(1)+'"]').parentNode.classList.add("active");async function O(){const t=document.querySelector(".nav-toggle"),e=document.querySelector(".nav-close"),i=document.querySelector("#mobile-menu");B(t,e,i);const n=document.querySelector(".filter-tabs-list"),s=document.querySelector(".content-list");H(n),a.pagination=new f("filters"),c(),N(s),M()}x.pathname==="/index.html"&&O();
//# sourceMappingURL=main-Bmryj3Ez.js.map

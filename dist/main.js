!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(e){const t=document.querySelector("#timer-hours"),n=document.querySelector("#timer-minutes"),o=document.querySelector("#timer-seconds"),r=setInterval((function(){const c=function(){const t=(new Date(e).getTime()-(new Date).getTime())/1e3,n=Math.floor(t%60),o=Math.floor(t/60%60);return{timeRemaining:t,hours:Math.floor(t/60/60),minutes:o,seconds:n}}();t.textContent=c.hours,n.textContent=c.minutes,o.textContent=c.seconds,t.textContent<10&&(t.textContent="0"+c.hours),n.textContent<10&&(n.textContent="0"+c.minutes),o.textContent<10&&(o.textContent="0"+c.seconds),c.timeRemaining<0&&(clearInterval(r),o.textContent="00",n.textContent="00",t.textContent="00")}),1e3)};var r=()=>{const e=document.querySelector("menu"),t=document.querySelector(".close-btn"),n=document.querySelector("body"),o=()=>{e.classList.toggle("active-menu")};n.addEventListener("click",n=>{const r=n.target;(r.closest(".menu")||r===t||e.classList.contains("active-menu")&&r!==e)&&o()})};let c=0;var l=()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=document.querySelector(".popup-content");t.forEach(t=>{t.addEventListener("click",()=>{if(e.style.display="block",n.style.opacity=0,screen.width>768){const e=setInterval((function(){c<=1?c+=.06:clearInterval(e),n.style.opacity=c}),20)}else n.style.opacity=1})}),e.addEventListener("click",t=>{let o=t.target;o.classList.contains("popup-close")?(e.style.display="none",n.style.opacity=0,c=0):(o=o.closest(".popup-content"),o||(e.style.display="none",n.style.opacity=0,c=0))})};var a=()=>{const e=document.querySelector(".service-header"),t=e.querySelectorAll(".service-header-tab"),n=document.querySelectorAll(".service-tab");e.addEventListener("click",e=>{let o=e.target;o=o.closest(".service-header-tab"),o.classList.contains("service-header-tab")&&t.forEach((e,r)=>{e===o&&(e=>{for(let o=0;o<n.length;o++)e===o?(t[o].classList.add("active"),n[o].classList.remove("d-none")):(n[o].classList.add("d-none"),t[o].classList.remove("active"))})(r)})})};var s=()=>{(()=>{const e=document.querySelector(".portfolio-dots"),t=document.querySelectorAll(".portfolio-item");for(let n=0;n<t.length;n++)e.append(document.createElement("li"));const n=e.querySelectorAll("li");for(let t=0;t<n.length;t++)e.querySelectorAll("li")[t].classList.add("dot")})();const e=document.querySelectorAll(".portfolio-item"),t=document.querySelectorAll(".dot"),n=document.querySelector(".portfolio-content");let o=0,r=0;const c=(e,t,n)=>{e[t].classList.remove(n)},l=(e,t,n)=>{e[t].classList.add(n)},a=()=>{c(e,o,"portfolio-item-active"),c(t,o,"dot-active"),o++,o>=e.length&&(o=0),l(e,o,"portfolio-item-active"),l(t,o,"dot-active")},s=(e=3e3)=>{r=setInterval(a,e)};n.addEventListener("click",n=>{n.preventDefault();const r=n.target;r.matches(".portfolio-btn, .dot")&&(c(e,o,"portfolio-item-active"),c(t,o,"dot-active"),r.matches("#arrow-right")?o++:r.matches("#arrow-left")?o--:r.matches(".dot")&&t.forEach((e,t)=>{e===r&&(o=t)}),o>=e.length&&(o=0),o<0&&(o=e.length-1),l(e,o,"portfolio-item-active"),l(t,o,"dot-active"))}),n.addEventListener("mouseover",e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(r)}),n.addEventListener("mouseout",e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&s()}),s(1500)};var u=()=>{const e=document.querySelector(".calc-square"),t=document.querySelector(".calc-count"),n=document.querySelector(".calc-day");e.addEventListener("input",()=>{e.value=e.value.replace(/\D/g,"")}),t.addEventListener("input",()=>{t.value=t.value.replace(/\D/g,"")}),n.addEventListener("input",()=>{n.value=n.value.replace(/\D/g,"")});const o=document.querySelectorAll(".form-phone")[0];o.addEventListener("input",()=>{o.value=o.value.replace(/[^\d+]/,"")});const r=document.querySelectorAll(".form-phone")[1];r.addEventListener("input",()=>{r.value=r.value.replace(/[^\d+]/,"")});const c=document.querySelectorAll(".form-phone")[2];c.addEventListener("input",()=>{c.value=c.value.replace(/[^\d+]/,"")});const l=document.getElementById("form1-name");l.addEventListener("input",()=>{l.value=l.value.replace(/[^А-Яа-яёЁ\s]/,"")});const a=document.getElementById("form2-name");a.addEventListener("input",()=>{a.value=a.value.replace(/[^А-Яа-яёЁ\s]/,"")});const s=document.getElementById("form2-message");s.addEventListener("input",()=>{s.value=s.value.replace(/[^А-Яа-яёЁ\s]/,"")});const u=document.getElementById("form3-name");u.addEventListener("input",()=>{u.value=u.value.replace(/[^А-Яа-яёЁ\s]/,"")})};var i=(e=100)=>{const t=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),o=document.querySelector(".calc-square"),r=document.querySelector(".calc-day"),c=document.querySelector(".calc-count"),l=document.getElementById("total");t.addEventListener("change",t=>{const a=t.target;(a.matches("select")||a.matches("input"))&&(()=>{let t=0,a=1,s=1;const u=n.options[n.selectedIndex].value,i=+o.value;c.value>1&&(a+=(c.value-1)/10),r.value&&r.value<5?s*=2:r.value&&r.value<10?s*=1.5:s*=1.1,u&&i&&(t=e*u*i*a*s);let d=0;const m=setInterval(()=>{Math.ceil(t)>0&&d<=t&&(Math.ceil(t)-l.textContent>1e3?(d+=100,l.textContent=d):Math.ceil(t)-l.textContent>500?(d+=50,l.textContent=d):Math.ceil(t)-l.textContent>100?(d+=10,l.textContent=d):Math.ceil(t)-l.textContent>50?(d+=5,l.textContent=d):Math.ceil(t)-l.textContent>0&&(d+=1,l.textContent=d))},1);setTimeout(()=>{clearInterval(m)},1e4),l.textContent=d})()})};var d=()=>{const e=document.getElementById("command").querySelectorAll("img");for(let t=0;t<e.length;t++)e[t].addEventListener("mouseenter",()=>{const e=event.target.src;event.target.src=event.target.dataset.img,event.target.dataset.img=e}),e[t].addEventListener("mouseleave",()=>{const e=event.target.src;event.target.src=event.target.dataset.img,event.target.dataset.img=e})};document.getElementById("form1"),document.getElementById("form2"),document.getElementById("form3");var m=e=>{const t=document.createElement("div");t.classList.add("status-message"),t.style.cssText="font-size: 2rem;",e.addEventListener("submit",n=>{n.preventDefault(),e.appendChild(t);const o=new FormData(e);t.textContent="Загрузка...";const r=e.querySelectorAll("input");for(let e=0;e<r.length;e++)""!==r[e].value&&(r[e].value="");e===document.getElementById("form3")&&(t.style.color="#fff");setTimeout(()=>{t&&e.removeChild(t)},5e3);(e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:e}))(o).then(e=>{if(200!==e.status)throw new Error("status network not 200");console.log(e),t.textContent="Спасибо! Мы скоро с вами свяжемся!"}).catch(e=>{t.textContent="Что то пошло не так...",console.log(e)})})};o("18 july 2020"),r(),l(),a(),s(),u(),i(100),d(),m(form1),m(form2),m(form3)}]);
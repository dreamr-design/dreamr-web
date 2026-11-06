import{b as V,f as I,j as X}from"./chunk-U7FPSYB7.js";import{f as r}from"./chunk-EYOD5SBO.js";import"./chunk-LR4NGWWI.js";import{a as U}from"./chunk-6LZDTC2F.js";import"./chunk-BGLLAQ3Z.js";import{c as K}from"./chunk-RG5HW3H3.js";import"./chunk-RJIKTNRM.js";var oe=new Map;function H(){return[...oe.values()].filter(t=>t.appliesTo())}var J=U("dev-palette"),Q="omega-test-password",re=2e3,ne='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M288 0L128 0C110.3 0 96 14.3 96 32s14.3 32 32 32L128 215.5 7.5 426.3C2.6 435 0 444.7 0 454.7 0 486.4 25.6 512 57.3 512l333.4 0c31.6 0 57.3-25.6 57.3-57.3 0-10-2.6-19.8-7.5-28.4L320 215.5 320 64c17.7 0 32-14.3 32-32S337.7 0 320 0L288 0zM192 215.5l0-151.5 64 0 0 151.5c0 11.1 2.9 22.1 8.4 31.8l41.6 72.7-164 0 41.6-72.7c5.5-9.7 8.4-20.6 8.4-31.8z"/></svg>',se=`
.omega-devbar-tab {
  position: fixed;
  top: 50%;
  right: 0;
  z-index: 2000;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 3.25rem;
  padding: 0;
  color: #1a1a19;
  background: #facc15;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-right: 0;
  border-radius: 12px 0 0 12px;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.22);
  transition: width 140ms ease, background 140ms ease;
}
.omega-devbar-tab:hover { background: #fde047; width: 3.125rem; }
.omega-devbar {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2001;
  width: min(20rem, 90vw);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.125rem 1.125rem 1.5rem;
  overflow-y: auto;
  color: var(--omega-ink, #1a1a19);
  background: var(--omega-surface, #fff);
  border-left: 1px solid var(--omega-line, #e8e8e6);
  box-shadow: -18px 0 44px rgba(0, 0, 0, 0.14);
  transform: translateX(100%);
  transition: transform 180ms ease;
}
.omega-devbar[data-open="true"] { transform: translateX(0); }
.omega-devbar__head { display: flex; align-items: center; gap: 0.5rem; }
.omega-devbar__badge {
  padding: 0.1875rem 0.5rem;
  font: 700 0.625rem/1 var(--omega-font-ui, system-ui);
  letter-spacing: 0.12em;
  color: #1a1a19;
  background: #facc15;
  border-radius: 4px;
}
.omega-devbar__title { font-weight: 650; font-size: 0.875rem; }
.omega-devbar__close {
  margin-left: auto;
  padding: 0.125rem 0.5rem;
  font-size: 0.875rem;
  color: var(--omega-ink-muted, #6d6d6c);
  background: transparent;
  border: 1px solid var(--omega-line, #e8e8e6);
  border-radius: 6px;
  cursor: pointer;
}
.omega-devbar__starting {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.625rem;
  font-size: 0.78125rem;
  color: var(--omega-ink-muted, #6d6d6c);
  background: var(--omega-surface-2, #ececeb);
  border: 1px solid var(--omega-line, #e8e8e6);
  border-radius: 8px;
}
.omega-devbar__starting[hidden] { display: none; }
.omega-devbar__spinner {
  flex: none;
  width: 0.875rem;
  height: 0.875rem;
  border: 2px solid var(--omega-line-strong, #d8d8d5);
  border-top-color: currentColor;
  border-radius: 50%;
  animation: omega-devbar-spin 700ms linear infinite;
}
@keyframes omega-devbar-spin { to { transform: rotate(360deg); } }
@media (prefers-reduced-motion: reduce) {
  .omega-devbar__spinner { animation: none; }
}
.omega-devbar__label {
  font: 650 0.625rem/1 var(--omega-font-ui, system-ui);
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--omega-ink-faint, #a1a19e);
}
.omega-devbar__who {
  padding: 0.5rem 0.625rem;
  font-size: 0.8125rem;
  background: var(--omega-surface-2, #ececeb);
  border: 1px solid var(--omega-line, #e8e8e6);
  border-radius: 8px;
  word-break: break-all;
  white-space: pre-line;
}
.omega-devbar__grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.375rem; }
.omega-devbar__btn {
  padding: 0.4375rem 0.5rem;
  font-size: 0.78125rem;
  text-align: center;
  text-decoration: none;
  color: var(--omega-ink, #1a1a19);
  background: var(--omega-surface, #fff);
  border: 1px solid var(--omega-line-strong, #d8d8d5);
  border-radius: 8px;
  cursor: pointer;
}
.omega-devbar__btn:hover { background: var(--omega-surface-2, #ececeb); }
.omega-devbar__btn[data-busy="true"],
.omega-devbar__select[data-busy="true"] { opacity: 0.55; pointer-events: none; }
.omega-devbar__note { font-size: 0.6875rem; color: var(--omega-ink-faint, #a1a19e); }
.omega-devbar__toggle {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4375rem 0.5rem;
  font-size: 0.78125rem;
  background: var(--omega-surface, #fff);
  border: 1px solid var(--omega-line-strong, #d8d8d5);
  border-radius: 8px;
  cursor: pointer;
}
.omega-devbar__section { display: flex; flex-direction: column; gap: 0.375rem; }
.omega-devbar__extras { display: contents; }
.omega-devbar__fields { display: flex; flex-direction: column; gap: 0.375rem; }
.omega-devbar__field { display: flex; flex-direction: column; gap: 0.1875rem; }
.omega-devbar__field-label {
  font-size: 0.6875rem;
  color: var(--omega-ink-muted, #6d6d6c);
}
.omega-devbar__select {
  padding: 0.3125rem 1.75rem 0.3125rem 0.5rem;
  font-size: 0.78125rem;
  color: var(--omega-ink, #1a1a19);
  background: var(--omega-surface, #fff);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' fill='none' stroke='%236d6d6c' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  background-size: 0.625rem auto;
  border: 1px solid var(--omega-line-strong, #d8d8d5);
  border-radius: 6px;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
}
.omega-devbar__select:focus-visible {
  outline: 2px solid var(--omega-accent, currentColor);
  outline-offset: 2px;
}
`;function ie(){let t=r.config.brand?.url||r.config.url||"";try{return new URL(t.includes("://")?t:`https://${t}`).hostname.toLowerCase()}catch{return window.location.hostname}}function de(t){return(t||"").startsWith("_test.")}function Z(t,w,s){let i=t.createElement("div");i.className="omega-devbar__section";let p=t.createElement("div");return p.className="omega-devbar__label",p.textContent=w,i.append(p,s),i}function le(){let t=document;if(t.querySelector(".omega-devbar-tab"))return;let w=t.createElement("style");w.textContent=se,t.head.appendChild(w);let s=t.createElement("button");s.type="button",s.className="omega-devbar-tab",s.innerHTML=ne,s.setAttribute("aria-label","Open the dev palette"),s.title="Dev palette";let i=t.createElement("aside");i.className="omega-devbar",i.setAttribute("aria-label","Dev palette");let p=t.createElement("div");p.className="omega-devbar__head";let E=t.createElement("span");E.className="omega-devbar__badge",E.textContent="DEV";let C=t.createElement("span");C.className="omega-devbar__title",C.textContent="Palette";let u=t.createElement("button");u.type="button",u.className="omega-devbar__close",u.textContent="\u2715",u.setAttribute("aria-label","Close the dev palette"),p.append(E,C,u);let m=t.createElement("div");m.className="omega-devbar__starting",m.hidden=!0,m.setAttribute("role","status");let S=t.createElement("span");S.className="omega-devbar__spinner",S.setAttribute("aria-hidden","true");let R=t.createElement("span");R.textContent="Backend starting\u2026",m.append(S,R);let N=t.createElement("div");N.className="omega-devbar__who";let L="Checking auth\u2026",b=null,v=()=>{N.textContent=b?`${L}
\u2715 ${b}. Is the backend emulator running? (npm start at the brand root)`:L};v();let A=ie(),d=t.createElement("select");d.className="omega-devbar__select",d.setAttribute("aria-label","Switch account");let h=t.createElement("option");h.value="",h.disabled=!0,h.selected=!0,h.textContent="Switch account\u2026",d.appendChild(h),d.addEventListener("change",async()=>{let e=d.value;if(e){d.dataset.busy="true";try{await r.auth.signInWithEmailAndPassword(`${e}@${A}`,Q),window.location.reload()}catch(a){d.dataset.busy="false",b=a.message,v()}}});let $=[],q=()=>{let e=(r.auth.user.email||"").split("@")[0];d.value=$.some(a=>a.localpart===e)?e:""},W=async()=>{try{$=(await r.request("/omega/test/roster",{auth:!1}))?.personas||[],$.forEach(a=>{let o=t.createElement("option");o.value=a.localpart,o.textContent=a.label,o.title=`${a.localpart}@${A}`,d.appendChild(o)}),q(),m.hidden||(m.hidden=!0,b=null,v())}catch(e){b=e.message,v(),m.hidden=!1,window.setTimeout(W,re)}},n=t.createElement("button");n.type="button",n.className="omega-devbar__btn",n.textContent="Reset to seed",n.hidden=!0,n.style.marginTop="0.375rem",n.style.width="100%",n.addEventListener("click",async()=>{let e=r.auth.user.email;if(e){n.dataset.busy="true";try{await r.request("/omega/test/reset-account",{method:"POST"}),await r.auth.signInWithEmailAndPassword(e,Q),window.location.reload()}catch(a){n.dataset.busy="false",b=a.message,v()}}});let f=t.createElement("button");f.type="button",f.className="omega-devbar__btn omega-signout",f.textContent="Sign out",f.style.marginTop="0.375rem",f.style.width="100%";let T=t.createElement("div");T.className="omega-devbar__fields";let l=t.createElement("select");l.className="omega-devbar__select",l.setAttribute("aria-label","Storage target");let B=()=>{let e=Object.keys(r.storage.get()||{}),a=l.value;K(l);let o=t.createElement("option");o.value="",o.textContent=`All (${e.length} ${e.length===1?"key":"keys"})`,l.append(o),e.forEach(g=>{let k=t.createElement("option");k.value=g,k.textContent=g,l.append(k)}),l.value=e.includes(a)?a:""},_=t.createElement("button");_.type="button",_.className="omega-devbar__btn",_.textContent="Log",_.addEventListener("click",()=>{let e=l.value;e?J.log(`storage.${e}:`,r.storage.get([e])):J.log("storage:",r.storage.get())});let x=t.createElement("button");x.type="button",x.className="omega-devbar__btn",x.textContent="Clear",x.addEventListener("click",()=>{let e=l.value;e?r.storage.remove([e]):r.storage.clear(),B()});let j=t.createElement("div");j.className="omega-devbar__grid",j.append(_,x),T.append(l,j);let O=t.createElement("div");O.className="omega-devbar__who";let ee=()=>{let e={};try{e=V()}catch{e={}}let a=X(),o=r.storage.get("attribution",{})||{},g=o.last||o.first||{},k=[["gtag",typeof gtag=="function"],["fbq",typeof fbq=="function"],["ttq",typeof ttq<"u"]],ae=Object.values(I).filter(c=>a[c]),G=Object.values(I).filter(c=>!a[c]);O.textContent=[`consent: ${Object.keys(e).filter(c=>e[c]===!0).join(", ")||"none granted"}`,`pixels: ${k.filter(([,c])=>c).map(([c])=>c).join(", ")||"none loaded"}`,`cookies: ${ae.join(", ")||"none"}${G.length?` (missing ${G.join(", ")})`:""}`,`attribution: ${[...Object.keys(g.tags||{}),...Object.keys(g.clickIds||{})].join(", ")||"none stored"}`].join(`
`)},z=t.createElement("div");z.className="omega-devbar__grid",[["Styleguide","/test/styleguide"],["Components","/test/components"],["Admin","/admin"],["Account","/dashboard/account"],["Emulator UI","http://127.0.0.1:4050"]].forEach(([e,a])=>{let o=t.createElement("a");o.className="omega-devbar__btn",o.textContent=e,o.href=a,a.startsWith("http")&&(o.target="_blank",o.rel="noopener"),z.appendChild(o)});let P=t.createElement("p");P.className="omega-devbar__note",P.textContent=`Personas are seeded by the backend emulator (npm start at the brand root) against ${A}; they all use the shared test password.`;let Y=new Map,y=(e,a,o)=>{let g=Z(t,a,o);return Y.set(e,g),g},D=t.createElement("div");D.className="omega-devbar__extras",i.append(p,m,y("auth","Signed in as",N),y("personas","Switch account",d),n,f,y("storage","Storage",T),y("match","Ad match keys",O),D,y("links","Go to",z),P);let F=new Set,te=()=>{H().forEach(e=>{if(F.has(e.id))return;F.add(e.id);let a=e.buildNode(t),o=Y.get(e.id);o?o.append(a):D.append(Z(t,e.title,a))})},M=e=>{i.dataset.open=String(e),s.style.display=e?"none":"",e&&(B(),ee(),te())};s.addEventListener("click",()=>M(!0)),u.addEventListener("click",()=>M(!1)),t.addEventListener("keydown",e=>{e.key==="Escape"&&i.dataset.open==="true"&&M(!1)}),t.body.append(s,i),W(),r.auth.listen({},()=>{let e=r.auth.user;L=e.email||"Signed out",v(),n.hidden=!de(e.email),q()})}export{le as default};
//# sourceMappingURL=dev-palette-YHTOK3UJ.js.map

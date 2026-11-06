import{h}from"./chunk-U7FPSYB7.js";import{f as u}from"./chunk-EYOD5SBO.js";import{a as m}from"./chunk-6LZDTC2F.js";function f(e,o){let r=o.toLowerCase().split(/\s+/).filter(Boolean);if(!r.length)return[];let a=[];return e.forEach((t,s)=>{let i=(t.title||"").toLowerCase(),n=[...t.categories||[],...t.tags||[]].join(" ").toLowerCase(),c=`${(t.desc||"").toLowerCase()} ${n}`,l=0;r.every(d=>i.includes(d)?(l+=2,!0):c.includes(d)?(l+=1,!0):!1)&&a.push({entry:t,score:l,i:s})}),a.sort((t,s)=>s.score-t.score||t.i-s.i).map(t=>t.entry)}function g(e,o){let r=null;return function(){return r||(r=fetch(e).then(t=>{if(!t.ok)throw new Error(`${e} responded ${t.status}`);return t.json()}).then(t=>(o.log(`Loaded ${t.length} posts`),t)).catch(t=>(r=null,o.error(`Could not load ${e}`,t),null))),r}}function p(e){return e?new Date(`${e}T00:00:00Z`).toLocaleDateString("en-US",{timeZone:"UTC",month:"short",day:"numeric",year:"numeric"}):""}var v=m("blog-search"),b="/blog/index.json",S=()=>new Promise(async function(e){return await u.dom.ready(),w(),e()});function w(){let e=document.getElementById("blog-search"),o=document.getElementById("blog-search-results"),r=document.querySelector("[data-blog-listing]");if(!e||!o||!r)return;let a,t=g(b,v),s=async n=>{if(!n){_(o,r);return}let c=await t();if(!c){y(o,r);return}$(o,r,f(c,n),n),x(n)};e.addEventListener("focus",t,{once:!0}),e.addEventListener("input",n=>{clearTimeout(a);let c=n.target.value.trim();if(!c){s("");return}a=setTimeout(()=>s(c),200)}),e.addEventListener("keydown",n=>{n.key==="Enter"&&(n.preventDefault(),clearTimeout(a),s(e.value.trim()))}),document.addEventListener("keydown",n=>{(n.ctrlKey||n.metaKey)&&n.key==="k"&&(n.preventDefault(),e.focus(),e.select())});let i=(new URL(window.location.href).searchParams.get("q")||"").trim();i&&(e.value=i,s(i))}function _(e,o){e.innerHTML="",e.hidden=!0,o.hidden=!1}function $(e,o,r,a){let{escapeHTML:t}=u.utilities,s=t(a),i=r.length?`<p class="omega-blog-search__summary">${r.length} result${r.length===1?"":"s"} for &ldquo;${s}&rdquo;</p>
      <ol class="omega-blog-search__list">${r.map(n=>L(n,t)).join("")}</ol>`:`<div class="omega-blog-search__empty">
        <h2 class="h5">No posts match &ldquo;${s}&rdquo;</h2>
        <p class="mb-0">Try a shorter word, or clear the box to see every post.</p>
      </div>`;e.innerHTML=`<div class="container">${i}</div>`,e.hidden=!1,o.hidden=!0}function y(e,o){e.innerHTML=`<div class="container">
      <div class="omega-blog-search__empty">
        <h2 class="h5">Search is unavailable right now.</h2>
        <p class="mb-0">Try again in a moment, or browse the posts below.</p>
      </div>
    </div>`,e.hidden=!1,o.hidden=!1}function L(e,o){let a=[(e.categories||[])[0],p(e.date)].filter(Boolean).map(o).join(" \xB7 ");return`
    <li class="omega-blog-search__item">
      <a class="omega-blog-search__title" href="${o(e.url)}">${o(e.title)}</a>
      ${a?`<p class="omega-blog-search__meta">${a}</p>`:""}
      ${e.desc?`<p class="omega-blog-search__excerpt">${o(e.desc)}</p>`:""}
    </li>
  `}function x(e){h("search",{search_term:e,content_category:"blog"})}export{S as a};
//# sourceMappingURL=chunk-XSFQNWYH.js.map

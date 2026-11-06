function s(n=document){let o=[...n.querySelectorAll("[data-omega-showcase-frame]")],t=e=>{try{let c=e.contentDocument.documentElement.scrollHeight;c&&(e.style.height=`${c}px`)}catch{}};o.forEach(e=>{e.addEventListener("load",()=>t(e)),t(e)}),window.addEventListener("resize",()=>o.forEach(t))}export{s as a};
//# sourceMappingURL=chunk-WFG5A5LE.js.map

import{a as p}from"../../../chunks/chunk-NDBIXSKZ.js";import{b as h}from"../../../chunks/chunk-3VAUBUE2.js";import{a as u}from"../../../chunks/chunk-DHRUUNXK.js";import{f as c}from"../../../chunks/chunk-EYOD5SBO.js";import"../../../chunks/chunk-LR4NGWWI.js";import"../../../chunks/chunk-6LZDTC2F.js";import"../../../chunks/chunk-BGLLAQ3Z.js";import"../../../chunks/chunk-RG5HW3H3.js";import"../../../chunks/chunk-RJIKTNRM.js";var i=[],l="",w=()=>new Promise(async function(t){return await c.dom.ready(),c.auth.listen({once:!0},async e=>{e.user.authenticated&&(C(),$())}),t()});function C(){let t=document.getElementById("btn-refresh-posts");t&&t.addEventListener("click",()=>$());let e=document.getElementById("posts-filter");e&&e.addEventListener("input",()=>{l=e.value.trim().toLowerCase(),b()})}async function $(){D();try{let t=await fetch(u("/feeds/posts.json"),{cache:"no-store"});if(!t.ok)throw new Error(`Feed returned ${t.status}`);if(i=((await t.json()).items||[]).slice().sort((o,s)=>new Date(s.date_published)-new Date(o.date_published)),y(),i.length===0){g("No posts yet. Write the first one from the editor");return}b()}catch(t){console.error("Failed to load posts feed:",t),y(),g(`Failed to load the posts feed: ${t.message||"Unknown error"}`)}}function y(){let t=document.getElementById("stat-total-posts"),e=document.getElementById("stat-latest-post"),o=document.getElementById("stat-latest-title"),s=document.getElementById("stat-categories"),n=i[0],d=new Set(i.flatMap(a=>a.tags||[]));t&&(t.textContent=i.length.toLocaleString()),e&&(e.textContent=n?p(new Date(n.date_published).getTime()):"\u2014"),o&&(o.textContent=n?n.title:""),s&&(s.textContent=d.size.toLocaleString())}function b(){let t=document.getElementById("posts-loading"),e=document.getElementById("posts-empty"),o=document.getElementById("posts-table"),s=document.getElementById("posts-tbody"),n=document.getElementById("posts-footer"),d=document.getElementById("posts-count"),a=i.filter(T);if(a.length===0){g(l?"No posts match your filter":"No posts yet");return}t&&t.classList.add("d-none"),e&&e.classList.add("d-none"),o&&o.classList.remove("d-none"),n&&n.classList.remove("d-none"),s&&(s.innerHTML=""),a.forEach(r=>{s.appendChild(S(r))}),d&&(d.textContent=l?`${a.length} of ${i.length} posts match \u201C${l}\u201D`:`${i.length} post${i.length!==1?"s":""} \xB7 from the live site feed`)}function T(t){return l?(t.title||"").toLowerCase().includes(l)||(t.url||"").toLowerCase().includes(l)||(t.tags||[]).some(e=>String(e).toLowerCase().includes(l)):!0}function S(t){let e=c.utilities.escapeHTML,o=t.title||"Untitled",s=t.url||"",n=s?new URL(s,window.location.origin).pathname:"",d=t.authors?.[0]?.name||"\u2014",a=t.tags||[],r=t.date_published?new Date(t.date_published):null,E=a.slice(0,3).map(f=>`<span class="omega-chip">${e(String(f))}</span>`).join(" "),L=a.length>3?` <span class="text-muted small">+${a.length-3}</span>`:"",x=r?r.toLocaleDateString():"\u2014",I=r?`<div class="text-muted" style="font-size: 0.7rem;">${e(p(r.getTime()))}</div>`:"",B=u(`/admin/posts/editor?post=${encodeURIComponent(s)}`),m=document.createElement("tr");return m.innerHTML=`
    <td>
      <div class="d-flex align-items-center gap-2">
        <span class="omega-icon-chip omega-icon-chip--neutral"><i class="fa-solid fa-newspaper fa-sm"></i></span>
        <div class="min-w-0">
          <div class="text-truncate fw-semibold" style="max-width: 320px;">${e(o)}</div>
          <div class="font-monospace text-muted text-truncate" style="max-width: 320px; font-size: 0.7rem;">${e(n)}</div>
        </div>
      </div>
    </td>
    <td class="small">${e(d)}</td>
    <td>${E||'<span class="text-muted small">\u2014</span>'}${L}</td>
    <td class="text-muted small">${e(x)}${I}</td>
    <td>
      <div class="dropdown">
        <button class="omega-iconbtn" type="button" data-bs-toggle="dropdown" aria-label="Post actions">
          <i class="fa-solid fa-ellipsis-vertical fa-sm"></i>
        </button>
        <ul class="dropdown-menu dropdown-menu-end">
          <li><a class="dropdown-item small" href="${e(B)}">
            <i class="fa-solid fa-pen fa-sm me-2"></i>
            Edit post
          </a></li>
          <li><a class="dropdown-item small" href="${e(s)}" target="_blank" rel="noopener">
            <i class="fa-solid fa-arrow-up-right-from-square fa-sm me-2"></i>
            View live
          </a></li>
          <li><a class="dropdown-item small btn-copy-url" href="#">
            <i class="fa-solid fa-copy fa-sm me-2"></i>
            Copy URL
          </a></li>
        </ul>
      </div>
    </td>
  `,m.querySelector(".btn-copy-url").addEventListener("click",f=>{f.preventDefault(),navigator.clipboard.writeText(s)}),m}function D(){v();let t=document.getElementById("posts-loading");t&&t.classList.remove("d-none")}function g(t){v();let e=document.getElementById("posts-empty");e&&(e.classList.remove("d-none"),e.textContent=t||"No posts found")}function v(){["posts-loading","posts-empty"].forEach(o=>{let s=document.getElementById(o);s&&s.classList.add("d-none")});let t=document.getElementById("posts-table"),e=document.getElementById("posts-footer");t&&t.classList.add("d-none"),e&&e.classList.add("d-none")}h(w);
//# sourceMappingURL=index-OVBFNMTZ.js.map

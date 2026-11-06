import{a as E}from"../../../chunks/chunk-6D3YVUZR.js";import{b as $}from"../../../chunks/chunk-3VAUBUE2.js";import"../../../chunks/chunk-DHRUUNXK.js";import{f as a}from"../../../chunks/chunk-EYOD5SBO.js";import"../../../chunks/chunk-LR4NGWWI.js";import"../../../chunks/chunk-6LZDTC2F.js";import"../../../chunks/chunk-BGLLAQ3Z.js";import"../../../chunks/chunk-RG5HW3H3.js";import"../../../chunks/chunk-RJIKTNRM.js";var g=null,m=null,i=[],k=()=>new Promise(async function(e){return await a.dom.ready(),a.auth.listen({once:!0},async t=>{t.user.authenticated&&(S(),b())}),e()});function S(){let e=document.getElementById("btn-refresh-verts");e&&e.addEventListener("click",()=>b());let t=document.getElementById("btn-new-vert");t&&t.addEventListener("click",()=>L(null))}async function b(){D();try{let e=new URL(`${a.getApiUrl()}/omega/verts`);e.searchParams.set("limit",100);let t=await a.request(e.toString(),{method:"GET",timeout:3e4,tries:1,log:!0});if(i=Array.isArray(t?.verts)?t.verts:[],h(),i.length===0){v("No verts yet");return}y()}catch(e){console.error("Failed to load verts:",e),v(`Failed to load verts: ${e.message||"Unknown error"}`)}}function h(){let e=i.filter(t=>t.enabled!==!1).length;p("stat-total-verts",i.length),p("stat-enabled-verts",e),p("stat-disabled-verts",i.length-e)}function p(e,t){let n=document.getElementById(e);n&&(n.textContent=String(t))}function y(){let e=document.getElementById("verts-loading"),t=document.getElementById("verts-empty"),n=document.getElementById("verts-table"),s=document.getElementById("verts-tbody"),r=document.getElementById("verts-footer"),u=document.getElementById("verts-count");e&&e.classList.add("d-none"),t&&t.classList.add("d-none"),n&&n.classList.remove("d-none"),r&&r.classList.remove("d-none"),s&&(s.innerHTML=""),i.forEach(f=>{s.appendChild(F(f))}),u&&(u.textContent=`${i.length} vert${i.length!==1?"s":""} in inventory`)}function F(e){let t=a.utilities.escapeHTML,n=e.enabled!==!1,s="\u2014";try{s=new URL(e.link).host}catch{s=e.link||"\u2014"}let r=[].concat(e.targeting?.sites||[],e.targeting?.categories||[],e.targeting?.keywords||[]).filter(Boolean),u=r.slice(0,3).map(l=>`<span class="omega-chip">${t(String(l))}</span>`).join(" "),f=r.length>3?` <span class="text-muted small">+${r.length-3}</span>`:"",w=e.whitelist?.length||e.blacklist?.length?`<div class="text-muted mt-1" style="font-size: 0.7rem;">WL ${e.whitelist?.length||0} \xB7 BL ${e.blacklist?.length||0}</div>`:"",x=r.length?`${u}${f}${w}`:`<span class="text-muted small">\u2014</span>${w}`,B=n?'<span class="omega-status"><span class="omega-dot omega-dot--ok"></span>Enabled</span>':'<span class="omega-status"><span class="omega-dot"></span>Disabled</span>',d=document.createElement("tr");return d.innerHTML=`
    <td>
      <div class="d-flex align-items-center gap-2">
        <span class="omega-icon-chip omega-icon-chip--neutral"><i class="fa-solid fa-rectangle-list fa-sm"></i></span>
        <div class="min-w-0">
          <div class="text-truncate fw-semibold" style="max-width: 220px;">${t(e.title||"Untitled")}</div>
          <div class="font-monospace text-muted text-truncate" style="max-width: 220px; font-size: 0.7rem;">${t(e.id||"")}</div>
        </div>
      </div>
    </td>
    <td class="text-muted small">${t(s)}</td>
    <td>${x}</td>
    <td class="text-muted small">${t(String(e.weight||1))}</td>
    <td>${B}</td>
    <td>
      <div class="dropdown">
        <button class="omega-iconbtn" type="button" data-bs-toggle="dropdown" aria-label="Vert actions">
          <i class="fa-solid fa-ellipsis-vertical fa-sm"></i>
        </button>
        <ul class="dropdown-menu dropdown-menu-end">
          <li><a class="dropdown-item small btn-edit-vert" href="#">
            <i class="fa-solid fa-pen fa-sm me-2"></i>
            Edit vert
          </a></li>
          <li><a class="dropdown-item small btn-toggle-vert" href="#">
            ${n?'<i class="fa-solid fa-toggle-off fa-sm me-2"></i> Disable vert':'<i class="fa-solid fa-toggle-on fa-sm me-2"></i> Enable vert'}
          </a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item small text-danger btn-delete-vert" href="#">
            <i class="fa-solid fa-trash fa-sm me-2"></i>
            Delete vert
          </a></li>
        </ul>
      </div>
    </td>
  `,d.querySelector(".btn-edit-vert").addEventListener("click",l=>{l.preventDefault(),L(e)}),d.querySelector(".btn-toggle-vert").addEventListener("click",l=>{l.preventDefault(),T(e)}),d.querySelector(".btn-delete-vert").addEventListener("click",l=>{l.preventDefault(),C(e)}),d}function L(e){m=e?.id||null;let t=document.getElementById("vert-editor-modal-label");t&&(t.textContent=e?"Edit vert":"New vert"),g?g.reset():U(),o("vert-enabled",e?e.enabled!==!1:!0),o("vert-title",e?.title||""),o("vert-description",e?.description||""),o("vert-button",e?.button||""),o("vert-weight",e?.weight||1),o("vert-link",e?.link||""),o("vert-image",e?.image||""),o("vert-footer",e?.footer||""),o("vert-targeting-sites",(e?.targeting?.sites||[]).join(", ")),o("vert-targeting-categories",(e?.targeting?.categories||[]).join(", ")),o("vert-targeting-keywords",(e?.targeting?.keywords||[]).join(", ")),o("vert-whitelist",(e?.whitelist||[]).join(", ")),o("vert-blacklist",(e?.blacklist||[]).join(", ")),new bootstrap.Modal(document.getElementById("vert-editor-modal")).show()}function o(e,t){let n=document.getElementById(e);n&&(n.type==="checkbox"?n.checked=t===!0:n.value=t)}function U(){g=new E(a,"#vert-editor-form",{allowResubmit:!0,submittingText:"Saving..."}),g.on("submit",async({data:e})=>{let t=e?.vert||{},n={enabled:!!t.enabled,title:(t.title||"").trim(),description:(t.description||"").trim(),button:(t.button||"").trim(),link:(t.link||"").trim(),image:(t.image||"").trim(),footer:(t.footer||"").trim(),weight:parseInt(t.weight,10)||1,targeting:{sites:c(t.targeting?.sites),categories:c(t.targeting?.categories),keywords:c(t.targeting?.keywords)},whitelist:c(t.whitelist),blacklist:c(t.blacklist)};m&&(n.id=m);try{await a.request("/omega/verts",{method:m?"PUT":"POST",timeout:3e4,tries:1,log:!0,body:n}),bootstrap.Modal.getInstance(document.getElementById("vert-editor-modal"))?.hide(),g.showSuccess(m?"Vert updated":"Vert created"),await b()}catch(s){console.error("Failed to save vert:",s),alert(`Failed to save vert: ${s.message||"Unknown error"}`)}})}function c(e){return String(e||"").split(",").map(t=>t.trim()).filter(Boolean)}async function T(e){let t=e.enabled===!1;try{await a.request("/omega/verts",{method:"PUT",timeout:3e4,tries:1,log:!0,body:{id:e.id,enabled:t}}),e.enabled=t,h(),y()}catch(n){console.error("Failed to update vert:",n),alert(`Failed to ${t?"enable":"disable"} vert: ${n.message||"Unknown error"}`)}}async function C(e){if(confirm(`Delete vert "${e.title||e.id}"?

It will stop serving immediately and cannot be recovered.`))try{await a.request("/omega/verts",{method:"DELETE",timeout:3e4,tries:1,log:!0,body:{id:e.id}}),i=i.filter(t=>t.id!==e.id),h(),i.length===0?v("No verts yet"):y()}catch(t){console.error("Failed to delete vert:",t),alert(`Failed to delete vert: ${t.message||"Unknown error"}`)}}function D(){I();let e=document.getElementById("verts-loading");e&&e.classList.remove("d-none")}function v(e){I();let t=document.getElementById("verts-empty");t&&(t.classList.remove("d-none"),t.textContent=e||"No verts yet")}function I(){["verts-loading","verts-empty"].forEach(n=>{let s=document.getElementById(n);s&&s.classList.add("d-none")});let e=document.getElementById("verts-table"),t=document.getElementById("verts-footer");e&&e.classList.add("d-none"),t&&t.classList.add("d-none")}$(k);
//# sourceMappingURL=index-BPPUABUJ.js.map

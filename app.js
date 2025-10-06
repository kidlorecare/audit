function val(id){return document.getElementById(id).value.trim();}
function checked(id){return document.getElementById(id).checked;}
function escapeHtml(s){return s.replace(/[&<>\"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));}
function generateReport(){
  const centre=val('centreName')||'Centre name',sector=val('sector')||'Sector, Gurgaon',hours=val('hours')||'9:00 am - 7:30 pm',ages=val('ages')||'6 months - 8 years',fees=val('fees')||'₹ —',ratios=val('ratios')||'Under 2: 1:4; 2-4y: 1:6',cctv=val('cctv')||'Recorded only',meals=val('meals')||'—',transport=val('transport')||'—',extended=val('extended')||'—',siteUrl=val('siteUrl'),igUrl=val('igUrl'),gbpUrl=val('gbpUrl'),gVis=val('gradeVis'),gTrust=val('gradeTrust'),gFunnel=val('gradeFunnel');
  const lines=[`- Visibility: ${gVis}`,`- Trust signals: ${gTrust}`,`- Funnel health: ${gFunnel}`,`- Top wins this week: add visit CTA on header; seed GBP Q and A; upload a 12 photo set.`];
  const sev=[]; if(checked('sevCritical')) sev.push('Critical: missing visit CTA; inconsistent address or phones; thin GBP.');
  if(checked('sevMajor')) sev.push('Major: unclear policies; weak image set; slow mobile media.');
  if(checked('sevMinor')) sev.push('Minor: social bio clarity; review cadence.');
  const d=['d1','d2','d3','d4','d5','d6','d7'].map(id=>val(id));
  const html=`<h2>${escapeHtml(centre)} — premium audit</h2>
  <h3>0) Executive snapshot</h3><ul>${lines.map(li=>`<li>${escapeHtml(li)}</li>`).join('')}</ul>
  <h3>1) 7 day high impact sprint</h3><ol>${d.map((x,i)=>`<li>Day ${i+1}: ${escapeHtml(x)}</li>`).join('')}</ol>
  <h3>2) Google Business Profile — exact settings</h3>
  <ul>
    <li>Name: ${escapeHtml(centre)} Daycare and Preschool (${escapeHtml(sector)})</li>
    <li>Primary category: Day care center. Secondary: Preschool, After school program.</li>
    <li>Services: part time care, full day care, after school pickup, meals, toilet training, camera policy.</li>
    <li>Attributes: women led, wheelchair accessible entrance, onsite parking.</li>
    <li>Q and A to seed: camera access; staff child ratios; extended hours and fee band; illness rule; trial week.</li>
    <li>Photos: upload 12 now, then 3 per week for 4 weeks.</li>
    ${gbpUrl?`<li>GBP link: <a href="${escapeHtml(gbpUrl)}" target="_blank" rel="noopener">${escapeHtml(gbpUrl)}</a></li>`:''}
  </ul>
  <h3>3) Reviews — natural engine</h3>
  <ul>
    <li>Target: 12 new reviews in 30 days, spread weekly.</li>
    <li>WhatsApp ask: "Hi [Name], if you are comfortable, a short Google review helps parents in ${escapeHtml(sector)} choose safely. A sentence on what felt reliable is perfect. Thank you."</li>
    <li>Topics: handover, hygiene, teacher response time, nap routine, food flexibility.</li>
    <li>Negative review pattern: 3 sentences, factual, offer a private call.</li>
  </ul>
  <h3>4) Website or landing checks</h3>
  <ul>
    <li>Promise on top; right aligned Book a visit WhatsApp CTA.</li>
    <li>Show hours, age bands, fee band range, ${escapeHtml(sector)} tag.</li>
    <li>Safety and Policies: CCTV, staff checks, illness rule, pickup rules.</li>
    <li>Speed: under 2.5 seconds on mobile; compress images.</li>
    ${siteUrl?`<li>Website: <a href="${escapeHtml(siteUrl)}" target="_blank" rel="noopener">${escapeHtml(siteUrl)}</a></li>`:''}
  </ul>
  <h3>5) Instagram — fast polish</h3>
  <ul>
    <li>Bio: "Daycare and Preschool, ${escapeHtml(sector)}. Hours 9 to 7. Visit link below."</li>
    <li>Highlights: Safety, Spaces, Meals, Reviews, Events.</li>
    <li>10 photos: sinks at child height; labelled cubbies; nap room; kitchen prep; teacher floor time; pickup queue; outdoor play; art wall; first aid kit; evacuation map.</li>
    <li>Captions: late pickup; ratios; sample menu; first visit script; why sector saves commute.</li>
    ${igUrl?`<li>Instagram: <a href="${escapeHtml(igUrl)}" target="_blank" rel="noopener">${escapeHtml(igUrl)}</a></li>`:''}
  </ul>
  <h3>6) Admissions funnel</h3>
  <ul>
    <li>Paths: GBP call or WhatsApp, Instagram link, website form, kidlore listing.</li>
    <li>WhatsApp auto reply: "Thanks for reaching out. Would you like a 15 min visit this week Morning or afternoon Our team will confirm in 10 minutes."</li>
    <li>Visit sheet: parent, child age, hours, allergies, commute time.</li>
    <li>Post visit: send 5 photo collage and fee band range with start date options.</li>
  </ul>
  <h3>7) Safety and trust page — publishable points</h3>
  <ul>
    <li>CCTV: ${escapeHtml(cctv)}</li>
    <li>Staff checks: police verification month; CPR trained count.</li>
    <li>Health: daily sanitise checklist; sick child at 99.5 F.</li>
    <li>Emergencies: drill frequency; assembly point photo.</li>
  </ul>
  <h3>8) Professional description — 3 sentences</h3>
  <p>${escapeHtml(centre)} is a daycare and preschool in ${escapeHtml(sector)}. Hours ${escapeHtml(hours)} for children ${escapeHtml(ages)}. Meals ${escapeHtml(meals)}. Ratios ${escapeHtml(ratios)}. Parents can book a short visit and get a fee band based on hours and meals.</p>
  <h3>9) Pricing presentation</h3>
  <ul>
    <li>Part time 3 to 4 hours: ₹6,500 to ₹8,500</li>
    <li>Full day 8 to 9 hours: ₹11,000 to ₹15,000</li>
    <li>Drivers: meals, transport, extended hours</li>
    <li>Rule: sibling 5 percent; quarterly 3 percent</li>
  </ul>
  <h3>10) Partner FOMO block</h3>
  <p>We are onboarding 3 centres per sector this quarter. Listing includes a premium profile, WhatsApp routing, and monthly insights from real parent questions. Sector slots close as soon as we fill 3. Reply with your sector to hold a slot.</p>
  <h3>Severity</h3><ul>${sev.map(s=>`<li>${escapeHtml(s)}</li>`).join('')}</ul>
  <h3>KPI targets — 30 days</h3>
  <table style="width:100%;border-collapse:collapse;border:1px solid #e6e6e6">
    <thead><tr><th style="text-align:left;border-bottom:1px solid #e6e6e6;padding:8px">Metric</th><th style="text-align:left;border-bottom:1px solid #e6e6e6;padding:8px">Target</th></tr></thead>
    <tbody>
      <tr><td style="padding:8px;border-bottom:1px solid #f0f0f0">Profile views</td><td style="padding:8px;border-bottom:1px solid #f0f0f0">+25 percent</td></tr>
      <tr><td style="padding:8px;border-bottom:1px solid #f0f0f0">Inbound enquiries</td><td style="padding:8px;border-bottom:1px solid #f0f0f0">+8</td></tr>
      <tr><td style="padding:8px;border-bottom:1px solid #f0f0f0">Booked visits</td><td style="padding:8px;border-bottom:1px solid #f0f0f0">+6</td></tr>
      <tr><td style="padding:8px">Conversions</td><td style="padding:8px">+3</td></tr>
    </tbody>
  </table>`;
  const report=document.getElementById('report'); report.innerHTML=html; report.contentEditable='true'; window.location.hash='#preview';
}
function copyToClipboard(){const el=document.createElement('textarea'); el.value=document.getElementById('report').innerText; document.body.appendChild(el); el.select(); document.execCommand('copy'); document.body.removeChild(el); alert('Copied the audit text.');}
function downloadHtml(){
  const html='<!doctype html><html><head><meta charset="utf-8"><title>Audit</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800;900&display=swap" rel="stylesheet"><style>body{font-family:Inter,system-ui;line-height:1.7;color:#101318;padding:24px;max-width:900px;margin:0 auto} h2{margin:0 0 4px} h3{margin:18px 0 6px} ul{padding-left:18px} table{font-size:14px}</style></head><body>'+document.getElementById('report').innerHTML+'</body></html>';
  const blob=new Blob([html],{type:'text/html'}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download='kidlore_audit.html'; a.click(); URL.revokeObjectURL(url);
}
function exportPdf(){ if(!document.getElementById('report').innerHTML.trim()){ generateReport(); } window.print(); }
document.getElementById('generateBtn').addEventListener('click', generateReport);
document.getElementById('copyBtn').addEventListener('click', copyToClipboard);
document.getElementById('downloadHtmlBtn').addEventListener('click', downloadHtml);
document.getElementById('exportPdfBtn').addEventListener('click', exportPdf);

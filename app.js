const p = window.PROFILE;
const el = id => document.getElementById(id);
const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
for (const [id,value] of Object.entries({'profile-name':p.name,'english-name':p.englishName,school:p.school,degree:'学历：'+p.degree,major:'专业：'+p.major,headline:p.headline,intro:p.intro,'about-text':p.about,certificate:p.certificate,'footer-name':p.englishName,updated:p.updated,year:new Date().getFullYear()})) el(id).textContent=value;
for (const id of ['sidebar-email','contact-email']) el(id).href='mailto:'+p.email;
el('contact-email').textContent=p.email+' ↗';
el('interests').innerHTML=p.interests.map((x,i)=>`<div><span class="mini-index">0${i+1}</span><h3>${escapeHTML(x.title)}</h3><p>${escapeHTML(x.text)}</p></div>`).join('');
el('project-list').innerHTML=p.projects.map(x=>`<article class="project"><div class="project-no">${escapeHTML(x.id)}</div><div class="project-body"><div class="project-meta"><span>${escapeHTML(x.en)}</span><span>${escapeHTML(x.date)}</span></div><h3>${escapeHTML(x.title)}</h3><p>${escapeHTML(x.summary)}</p><div class="tags">${x.tags.map(t=>`<span>${escapeHTML(t)}</span>`).join('')}</div><details><summary>查看项目细节 <span>＋</span></summary><p class="role">${escapeHTML(x.type)} / ${escapeHTML(x.role)}</p><ul>${x.details.map(t=>`<li>${escapeHTML(t)}</li>`).join('')}</ul></details></div></article>`).join('');
function renderPapers(filter='all') {
  el('paper-list').innerHTML=p.publications.filter(x=>filter==='all'||x.kind===filter).map(x=>`<article class="paper"><span class="paper-year">${escapeHTML(x.year)}</span><div><h3>${escapeHTML(x.title)}</h3><p class="authors">${escapeHTML(x.authors)}</p><p>${escapeHTML(x.venue)}</p><div class="paper-bottom"><span class="status">${escapeHTML(x.status)}</span>${x.link&&/^https:\/\//.test(x.link)?`<a href="${escapeHTML(x.link)}" target="_blank" rel="noopener noreferrer">DOI ↗</a>`:''}</div></div></article>`).join('');
}
renderPapers();
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});renderPapers(button.dataset.filter);}));
el('ip-list').innerHTML=p.intellectualProperty.map(x=>`<article class="ip"><h4>${escapeHTML(x.title)}</h4><p>${escapeHTML(x.meta)}</p><small>${escapeHTML(x.note)}</small></article>`).join('');
el('skill-list').innerHTML=p.skills.map(x=>`<div><h3>${escapeHTML(x.title)}</h3><p>${escapeHTML(x.text)}</p></div>`).join('');
el('award-list').innerHTML=p.awards.map(x=>`<article class="award"><span>${escapeHTML(x.year)}</span><h3>${escapeHTML(x.title)}</h3><p>${escapeHTML(x.detail)}</p></article>`).join('');
const navLinks=[...document.querySelectorAll('nav a')];
const observer=new IntersectionObserver(entries=>{for(const entry of entries) if(entry.isIntersecting) navLinks.forEach(a=>a.classList.toggle('current',a.hash==='#'+entry.target.id));},{rootMargin:'-15% 0px -65% 0px'});
navLinks.forEach(a=>observer.observe(document.querySelector(a.hash)));

function copyBib(){
  const pre = document.getElementById('bibtext');
  if(!pre) return;
  const text = pre.innerText;
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(()=>{
      const btn = document.getElementById('copyBib');
      if(btn){ btn.textContent = 'Copied'; setTimeout(()=>btn.textContent='Copy BibTeX',1500); }
    }).catch(()=>{
      fallbackCopy(text);
    });
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text){
  const ta = document.createElement('textarea');
  ta.value = text;
  document.body.appendChild(ta);
  ta.select();
  try{
    document.execCommand('copy');
    const btn = document.getElementById('copyBib');
    if(btn){ btn.textContent = 'Copied'; setTimeout(()=>btn.textContent='Copy BibTeX',1500); }
  }catch(e){}
  document.body.removeChild(ta);
}

// Simple burger toggle if present
document.addEventListener('DOMContentLoaded', ()=>{
  const burger = document.querySelector('.navbar-burger');
  if(burger){
    burger.addEventListener('click', ()=>{
      const target = document.getElementById(burger.dataset.target);
      burger.classList.toggle('is-active');
      if(target) target.classList.toggle('is-active');
    });
  }
  // Scroll progress bar and back-to-top
  const progressBar = document.getElementById('top-progress-bar');
  const backBtn = document.getElementById('backToTop');

  function updateProgress(){
    if(!progressBar) return;
    const doc = document.documentElement;
    const scrollTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const height = doc.scrollHeight - doc.clientHeight;
    const percent = height > 0 ? (scrollTop / height) * 100 : 0;
    progressBar.style.width = Math.min(100, Math.max(0, percent)) + '%';
  }

  function toggleBack(){
    if(!backBtn) return;
    if(window.scrollY > 220) backBtn.classList.add('show'); else backBtn.classList.remove('show');
  }

  window.addEventListener('scroll', ()=>{ updateProgress(); toggleBack(); });
  updateProgress(); toggleBack();

  if(backBtn){
    backBtn.addEventListener('click', ()=>{
      window.scrollTo({top:0, behavior:'smooth'});
    });
  }

  // Section TOC highlight
  const tocLinks = document.querySelectorAll('#section-toc .toc-link');
  const sections = Array.from(tocLinks).map(a=>document.getElementById(a.getAttribute('href').slice(1))).filter(Boolean);
  if(tocLinks.length && 'IntersectionObserver' in window){
    const obs = new IntersectionObserver(entries=>{
      entries.forEach(ent=>{
        const id = ent.target.id;
        const link = document.querySelector('#section-toc .toc-link[data-target="'+id+'"]');
        if(link) link.classList.toggle('active', ent.isIntersecting && ent.intersectionRatio>0.45);
      });
    },{threshold:[0.45]});
    sections.forEach(s=>obs.observe(s));
    // smooth behavior for toc clicks
    tocLinks.forEach(l=>{
      l.addEventListener('click', (e)=>{
        e.preventDefault();
        const target = document.getElementById(l.getAttribute('href').slice(1));
        if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
      });
    });
  }
});
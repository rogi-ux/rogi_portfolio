const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const menu=document.querySelector('.menu-btn');
const links=document.querySelector('.nav-links');
menu?.addEventListener('click',()=>{links.style.display=links.style.display==='flex'?'none':'flex';links.style.position='absolute';links.style.top='72px';links.style.left='0';links.style.right='0';links.style.padding='18px 30px';links.style.background='rgba(8,14,24,.96)';links.style.flexDirection='column';links.style.gap='18px'});

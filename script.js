
const toggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');
if(toggle && navLinks){
  toggle.addEventListener('click',()=>navLinks.classList.toggle('open'));
}

document.querySelectorAll('[data-filter]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('[data-filter]').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const value = btn.dataset.filter;
    document.querySelectorAll('.dest-card').forEach(card=>{
      const tags=(card.dataset.tags||'').split(',');
      card.style.display = value==='all' || tags.includes(value) ? '' : 'none';
    });
  });
});

const planForm = document.getElementById('planForm');
if(planForm){
 planForm.addEventListener('submit', (e)=>{
   e.preventDefault();
   const f = new FormData(planForm);
   const msg = [
    'Hello Dream Escape Travel & Tours,',
    '',
    'I would like help planning a trip.',
    `Name: ${f.get('name')||''}`,
    `Destination / idea: ${f.get('destination')||''}`,
    `Travel dates: ${f.get('dates')||''}`,
    `Travellers: ${f.get('travellers')||''}`,
    `Trip type: ${f.get('triptype')||''}`,
    `Departure point: ${f.get('departure')||''}`,
    `Notes: ${f.get('notes')||''}`
   ].join('\n');
   window.open('https://wa.me/23059398142?text='+encodeURIComponent(msg),'_blank');
 });
}

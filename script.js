const toggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => navLinks.classList.toggle('open'));
}

document.querySelectorAll('[data-filter]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const value = btn.dataset.filter;
    document.querySelectorAll('.dest-card').forEach(card => {
      const tags = (card.dataset.tags || '').split(',');
      card.style.display = value === 'all' || tags.includes(value) ? '' : 'none';
    });
  });
});

const planForm = document.getElementById('planForm');
if (planForm) {
  planForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const f = new FormData(planForm);
    const services = [...planForm.querySelectorAll('input[name="services"]:checked')].map(el => el.value);

    if (services.length === 0) {
      alert('Please select at least one travel service.');
      return;
    }

    const msg = [
      'Hello Dream Escape Travel & Tours,',
      '',
      'I would like to request a travel quotation.',
      '',
      `Full name: ${f.get('name') || ''}`,
      `WhatsApp / phone: ${f.get('phone') || ''}`,
      `Email: ${f.get('email') || ''}`,
      '',
      `Departure: ${f.get('departure') || ''}`,
      `Destination(s): ${f.get('destination') || ''}`,
      `Departure date: ${f.get('departDate') || 'Flexible / not specified'}`,
      `Return date: ${f.get('returnDate') || 'Flexible / not specified'}`,
      '',
      `Adults: ${f.get('adults') || ''}`,
      `Children: ${f.get('children') || '0'}`,
      `Children ages: ${f.get('childrenAges') || 'N/A'}`,
      '',
      `Services needed: ${services.join(', ')}`,
      `Hotel preference: ${f.get('hotel') || 'No preference'}`,
      `Approximate budget: ${f.get('budget') || 'Not specified'}`,
      `Special occasion: ${f.get('occasion') || 'None / not specified'}`,
      '',
      `Special requests: ${f.get('notes') || 'None'}`,
      '',
      'I understand this is an enquiry and not a confirmed booking.'
    ].join('\\n');

    window.open('https://wa.me/23059398142?text=' + encodeURIComponent(msg), '_blank', 'noopener');
  });
}

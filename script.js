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
      `Travel party type: ${f.get('partyType') || 'Not specified'}`,
      `Guide request: ${f.get('guideRequest') || 'Not specified'}`,
      `Group name / purpose: ${f.get('groupPurpose') || 'N/A'}`,
      '',
      `Services needed: ${services.join(', ')}`,
      `Hotel preference: ${f.get('hotel') || 'No preference'}`,
      `Approximate budget: ${f.get('budget') || 'Not specified'}`,
      `Special occasion: ${f.get('occasion') || 'None / not specified'}`,
      '',
      `Special requests: ${f.get('notes') || 'None'}`,
      '',
      'I understand this is an enquiry and not a confirmed booking.'
    ].join('\n');

    window.open('https://wa.me/23059398142?text=' + encodeURIComponent(msg), '_blank', 'noopener');
  });
}


// Premium destination preview explorer
const destinationData = {"Greece": {"description": "Island light, ancient history and beautiful seaside stays.", "highlights": "Santorini sunsets • Athens history • Island hopping", "season": "summer", "photos": ["https://loremflickr.com/1600/1050/Greece,travel/all?lock=5010", "https://loremflickr.com/1600/1050/Greece,travel/all?lock=5011", "https://loremflickr.com/1600/1050/Greece,travel/all?lock=5012", "https://loremflickr.com/1600/1050/Greece,travel/all?lock=5013", "https://loremflickr.com/1600/1050/Greece,travel/all?lock=5014", "https://loremflickr.com/1600/1050/Greece,travel/all?lock=5015", "https://loremflickr.com/1600/1050/Greece,travel/all?lock=5016"]}, "Italy": {"description": "Art, food, coastlines and elegant city escapes in one timeless journey.", "highlights": "Rome • Amalfi Coast • Tuscany", "season": "summer · spring", "photos": ["https://loremflickr.com/1600/1050/Italy,travel/all?lock=5020", "https://loremflickr.com/1600/1050/Italy,travel/all?lock=5021", "https://loremflickr.com/1600/1050/Italy,travel/all?lock=5022", "https://loremflickr.com/1600/1050/Italy,travel/all?lock=5023", "https://loremflickr.com/1600/1050/Italy,travel/all?lock=5024", "https://loremflickr.com/1600/1050/Italy,travel/all?lock=5025", "https://loremflickr.com/1600/1050/Italy,travel/all?lock=5026"]}, "Spain": {"description": "Discover Spain through a personalised journey shaped around your dates, travel style and the experiences you value most.", "highlights": "Signature sights • Local experiences • Hand-picked stays", "season": "summer · spring", "photos": ["https://loremflickr.com/1600/1050/Spain,travel/all?lock=5030", "https://loremflickr.com/1600/1050/Spain,travel/all?lock=5031", "https://loremflickr.com/1600/1050/Spain,travel/all?lock=5032", "https://loremflickr.com/1600/1050/Spain,travel/all?lock=5033", "https://loremflickr.com/1600/1050/Spain,travel/all?lock=5034", "https://loremflickr.com/1600/1050/Spain,travel/all?lock=5035", "https://loremflickr.com/1600/1050/Spain,travel/all?lock=5036"]}, "France": {"description": "From Parisian elegance to Riviera sunshine and countryside charm.", "highlights": "Paris • Provence • French Riviera", "season": "summer · winter · spring · autumn · romantic", "photos": ["https://loremflickr.com/1600/1050/France,travel/all?lock=5040", "https://loremflickr.com/1600/1050/France,travel/all?lock=5041", "https://loremflickr.com/1600/1050/France,travel/all?lock=5042", "https://loremflickr.com/1600/1050/France,travel/all?lock=5043", "https://loremflickr.com/1600/1050/France,travel/all?lock=5044", "https://loremflickr.com/1600/1050/France,travel/all?lock=5045", "https://loremflickr.com/1600/1050/France,travel/all?lock=5046"]}, "Portugal": {"description": "Discover Portugal through a personalised journey shaped around your dates, travel style and the experiences you value most.", "highlights": "Signature sights • Local experiences • Hand-picked stays", "season": "summer", "photos": ["https://loremflickr.com/1600/1050/Portugal,travel/all?lock=5050", "https://loremflickr.com/1600/1050/Portugal,travel/all?lock=5051", "https://loremflickr.com/1600/1050/Portugal,travel/all?lock=5052", "https://loremflickr.com/1600/1050/Portugal,travel/all?lock=5053", "https://loremflickr.com/1600/1050/Portugal,travel/all?lock=5054", "https://loremflickr.com/1600/1050/Portugal,travel/all?lock=5055", "https://loremflickr.com/1600/1050/Portugal,travel/all?lock=5056"]}, "Turkey": {"description": "Discover Turkey through a personalised journey shaped around your dates, travel style and the experiences you value most.", "highlights": "Signature sights • Local experiences • Hand-picked stays", "season": "summer · spring", "photos": ["https://loremflickr.com/1600/1050/Turkey,travel/all?lock=5060", "https://loremflickr.com/1600/1050/Turkey,travel/all?lock=5061", "https://loremflickr.com/1600/1050/Turkey,travel/all?lock=5062", "https://loremflickr.com/1600/1050/Turkey,travel/all?lock=5063", "https://loremflickr.com/1600/1050/Turkey,travel/all?lock=5064", "https://loremflickr.com/1600/1050/Turkey,travel/all?lock=5065", "https://loremflickr.com/1600/1050/Turkey,travel/all?lock=5066"]}, "Croatia": {"description": "Discover Croatia through a personalised journey shaped around your dates, travel style and the experiences you value most.", "highlights": "Signature sights • Local experiences • Hand-picked stays", "season": "summer", "photos": ["https://loremflickr.com/1600/1050/Croatia,travel/all?lock=5070", "https://loremflickr.com/1600/1050/Croatia,travel/all?lock=5071", "https://loremflickr.com/1600/1050/Croatia,travel/all?lock=5072", "https://loremflickr.com/1600/1050/Croatia,travel/all?lock=5073", "https://loremflickr.com/1600/1050/Croatia,travel/all?lock=5074", "https://loremflickr.com/1600/1050/Croatia,travel/all?lock=5075", "https://loremflickr.com/1600/1050/Croatia,travel/all?lock=5076"]}, "Malta": {"description": "Discover Malta through a personalised journey shaped around your dates, travel style and the experiences you value most.", "highlights": "Signature sights • Local experiences • Hand-picked stays", "season": "summer", "photos": ["https://loremflickr.com/1600/1050/Malta,travel/all?lock=5080", "https://loremflickr.com/1600/1050/Malta,travel/all?lock=5081", "https://loremflickr.com/1600/1050/Malta,travel/all?lock=5082", "https://loremflickr.com/1600/1050/Malta,travel/all?lock=5083", "https://loremflickr.com/1600/1050/Malta,travel/all?lock=5084", "https://loremflickr.com/1600/1050/Malta,travel/all?lock=5085", "https://loremflickr.com/1600/1050/Malta,travel/all?lock=5086"]}, "Cyprus": {"description": "Discover Cyprus through a personalised journey shaped around your dates, travel style and the experiences you value most.", "highlights": "Signature sights • Local experiences • Hand-picked stays", "season": "summer", "photos": ["https://loremflickr.com/1600/1050/Cyprus,travel/all?lock=5090", "https://loremflickr.com/1600/1050/Cyprus,travel/all?lock=5091", "https://loremflickr.com/1600/1050/Cyprus,travel/all?lock=5092", "https://loremflickr.com/1600/1050/Cyprus,travel/all?lock=5093", "https://loremflickr.com/1600/1050/Cyprus,travel/all?lock=5094", "https://loremflickr.com/1600/1050/Cyprus,travel/all?lock=5095", "https://loremflickr.com/1600/1050/Cyprus,travel/all?lock=5096"]}, "Mauritius": {"description": "Luxury resorts, lagoons, Le Morne, culture and warm island hospitality.", "highlights": "Le Morne • Catamarans • Luxury resorts", "season": "summer · romantic · festive · tropical", "photos": ["https://loremflickr.com/1600/1050/mauritius,travel/all?lock=5100", "https://loremflickr.com/1600/1050/mauritius,travel/all?lock=5101", "https://loremflickr.com/1600/1050/mauritius,travel/all?lock=5102", "https://loremflickr.com/1600/1050/mauritius,travel/all?lock=5103", "https://loremflickr.com/1600/1050/mauritius,travel/all?lock=5104", "https://loremflickr.com/1600/1050/mauritius,travel/all?lock=5105", "https://loremflickr.com/1600/1050/mauritius,travel/all?lock=5106"]}, "Dubai": {"description": "High-design hotels, desert experiences and glamorous city energy.", "highlights": "Luxury resorts • Desert • Dining", "season": "summer", "photos": ["https://loremflickr.com/1600/1050/Dubai,travel/all?lock=5110", "https://loremflickr.com/1600/1050/Dubai,travel/all?lock=5111", "https://loremflickr.com/1600/1050/Dubai,travel/all?lock=5112", "https://loremflickr.com/1600/1050/Dubai,travel/all?lock=5113", "https://loremflickr.com/1600/1050/Dubai,travel/all?lock=5114", "https://loremflickr.com/1600/1050/Dubai,travel/all?lock=5115", "https://loremflickr.com/1600/1050/Dubai,travel/all?lock=5116"]}, "Egypt": {"description": "Discover Egypt through a personalised journey shaped around your dates, travel style and the experiences you value most.", "highlights": "Signature sights • Local experiences • Hand-picked stays", "season": "summer", "photos": ["https://loremflickr.com/1600/1050/Egypt,travel/all?lock=5120", "https://loremflickr.com/1600/1050/Egypt,travel/all?lock=5121", "https://loremflickr.com/1600/1050/Egypt,travel/all?lock=5122", "https://loremflickr.com/1600/1050/Egypt,travel/all?lock=5123", "https://loremflickr.com/1600/1050/Egypt,travel/all?lock=5124", "https://loremflickr.com/1600/1050/Egypt,travel/all?lock=5125", "https://loremflickr.com/1600/1050/Egypt,travel/all?lock=5126"]}, "Thailand": {"description": "Tropical islands, vibrant cities, temples and memorable cuisine.", "highlights": "Bangkok • Islands • Wellness", "season": "summer · tropical", "photos": ["https://loremflickr.com/1600/1050/Thailand,travel/all?lock=5130", "https://loremflickr.com/1600/1050/Thailand,travel/all?lock=5131", "https://loremflickr.com/1600/1050/Thailand,travel/all?lock=5132", "https://loremflickr.com/1600/1050/Thailand,travel/all?lock=5133", "https://loremflickr.com/1600/1050/Thailand,travel/all?lock=5134", "https://loremflickr.com/1600/1050/Thailand,travel/all?lock=5135", "https://loremflickr.com/1600/1050/Thailand,travel/all?lock=5136"]}, "Vietnam": {"description": "Discover Vietnam through a personalised journey shaped around your dates, travel style and the experiences you value most.", "highlights": "Signature sights • Local experiences • Hand-picked stays", "season": "summer", "photos": ["https://loremflickr.com/1600/1050/Vietnam,travel/all?lock=5140", "https://loremflickr.com/1600/1050/Vietnam,travel/all?lock=5141", "https://loremflickr.com/1600/1050/Vietnam,travel/all?lock=5142", "https://loremflickr.com/1600/1050/Vietnam,travel/all?lock=5143", "https://loremflickr.com/1600/1050/Vietnam,travel/all?lock=5144", "https://loremflickr.com/1600/1050/Vietnam,travel/all?lock=5145", "https://loremflickr.com/1600/1050/Vietnam,travel/all?lock=5146"]}, "Mexico": {"description": "Discover Mexico through a personalised journey shaped around your dates, travel style and the experiences you value most.", "highlights": "Signature sights • Local experiences • Hand-picked stays", "season": "summer", "photos": ["https://loremflickr.com/1600/1050/Mexico,travel/all?lock=5150", "https://loremflickr.com/1600/1050/Mexico,travel/all?lock=5151", "https://loremflickr.com/1600/1050/Mexico,travel/all?lock=5152", "https://loremflickr.com/1600/1050/Mexico,travel/all?lock=5153", "https://loremflickr.com/1600/1050/Mexico,travel/all?lock=5154", "https://loremflickr.com/1600/1050/Mexico,travel/all?lock=5155", "https://loremflickr.com/1600/1050/Mexico,travel/all?lock=5156"]}, "New Zealand": {"description": "New Zealand brings seasonal atmosphere, striking scenery and memorable winter travel experiences.", "highlights": "Seasonal scenery • City stays • Signature experiences", "season": "winter", "photos": ["https://loremflickr.com/1600/1050/new-zealand,landscape/all?lock=5160", "https://loremflickr.com/1600/1050/new-zealand,landscape/all?lock=5161", "https://loremflickr.com/1600/1050/new-zealand,landscape/all?lock=5162", "https://loremflickr.com/1600/1050/new-zealand,landscape/all?lock=5163", "https://loremflickr.com/1600/1050/new-zealand,landscape/all?lock=5164", "https://loremflickr.com/1600/1050/new-zealand,landscape/all?lock=5165", "https://loremflickr.com/1600/1050/new-zealand,landscape/all?lock=5166"]}, "USA": {"description": "USA brings seasonal atmosphere, striking scenery and memorable winter travel experiences.", "highlights": "Seasonal scenery • City stays • Signature experiences", "season": "winter", "photos": ["https://loremflickr.com/1600/1050/usa,landmark/all?lock=5170", "https://loremflickr.com/1600/1050/usa,landmark/all?lock=5171", "https://loremflickr.com/1600/1050/usa,landmark/all?lock=5172", "https://loremflickr.com/1600/1050/usa,landmark/all?lock=5173", "https://loremflickr.com/1600/1050/usa,landmark/all?lock=5174", "https://loremflickr.com/1600/1050/usa,landmark/all?lock=5175", "https://loremflickr.com/1600/1050/usa,landmark/all?lock=5176"]}, "Germany": {"description": "Germany brings seasonal atmosphere, striking scenery and memorable winter travel experiences.", "highlights": "Seasonal scenery • City stays • Signature experiences", "season": "winter · autumn", "photos": ["https://loremflickr.com/1600/1050/Germany,travel/all?lock=5180", "https://loremflickr.com/1600/1050/Germany,travel/all?lock=5181", "https://loremflickr.com/1600/1050/Germany,travel/all?lock=5182", "https://loremflickr.com/1600/1050/Germany,travel/all?lock=5183", "https://loremflickr.com/1600/1050/Germany,travel/all?lock=5184", "https://loremflickr.com/1600/1050/Germany,travel/all?lock=5185", "https://loremflickr.com/1600/1050/Germany,travel/all?lock=5186"]}, "Czech Republic": {"description": "Czech Republic brings seasonal atmosphere, striking scenery and memorable winter travel experiences.", "highlights": "Seasonal scenery • City stays • Signature experiences", "season": "winter", "photos": ["https://loremflickr.com/1600/1050/prague,czech/all?lock=5190", "https://loremflickr.com/1600/1050/prague,czech/all?lock=5191", "https://loremflickr.com/1600/1050/prague,czech/all?lock=5192", "https://loremflickr.com/1600/1050/prague,czech/all?lock=5193", "https://loremflickr.com/1600/1050/prague,czech/all?lock=5194", "https://loremflickr.com/1600/1050/prague,czech/all?lock=5195", "https://loremflickr.com/1600/1050/prague,czech/all?lock=5196"]}, "Switzerland": {"description": "Alpine scenery, polished cities and effortless rail journeys.", "highlights": "Swiss Alps • Lakes • Scenic trains", "season": "winter · autumn · festive", "photos": ["https://loremflickr.com/1600/1050/Switzerland,travel/all?lock=5200", "https://loremflickr.com/1600/1050/Switzerland,travel/all?lock=5201", "https://loremflickr.com/1600/1050/Switzerland,travel/all?lock=5202", "https://loremflickr.com/1600/1050/Switzerland,travel/all?lock=5203", "https://loremflickr.com/1600/1050/Switzerland,travel/all?lock=5204", "https://loremflickr.com/1600/1050/Switzerland,travel/all?lock=5205", "https://loremflickr.com/1600/1050/Switzerland,travel/all?lock=5206"]}, "Canada": {"description": "Canada brings seasonal atmosphere, striking scenery and memorable winter travel experiences.", "highlights": "Seasonal scenery • City stays • Signature experiences", "season": "winter", "photos": ["https://loremflickr.com/1600/1050/Canada,travel/all?lock=5210", "https://loremflickr.com/1600/1050/Canada,travel/all?lock=5211", "https://loremflickr.com/1600/1050/Canada,travel/all?lock=5212", "https://loremflickr.com/1600/1050/Canada,travel/all?lock=5213", "https://loremflickr.com/1600/1050/Canada,travel/all?lock=5214", "https://loremflickr.com/1600/1050/Canada,travel/all?lock=5215", "https://loremflickr.com/1600/1050/Canada,travel/all?lock=5216"]}, "Japan": {"description": "A refined mix of modern cities, tradition, cuisine and seasonal beauty.", "highlights": "Tokyo • Kyoto • Mount Fuji", "season": "winter · spring · autumn", "photos": ["https://loremflickr.com/1600/1050/Japan,travel/all?lock=5220", "https://loremflickr.com/1600/1050/Japan,travel/all?lock=5221", "https://loremflickr.com/1600/1050/Japan,travel/all?lock=5222", "https://loremflickr.com/1600/1050/Japan,travel/all?lock=5223", "https://loremflickr.com/1600/1050/Japan,travel/all?lock=5224", "https://loremflickr.com/1600/1050/Japan,travel/all?lock=5225", "https://loremflickr.com/1600/1050/Japan,travel/all?lock=5226"]}, "Prague": {"description": "Prague brings seasonal atmosphere, striking scenery and memorable winter travel experiences.", "highlights": "Seasonal scenery • City stays • Signature experiences", "season": "winter · autumn", "photos": ["https://loremflickr.com/1600/1050/Prague,travel/all?lock=5230", "https://loremflickr.com/1600/1050/Prague,travel/all?lock=5231", "https://loremflickr.com/1600/1050/Prague,travel/all?lock=5232", "https://loremflickr.com/1600/1050/Prague,travel/all?lock=5233", "https://loremflickr.com/1600/1050/Prague,travel/all?lock=5234", "https://loremflickr.com/1600/1050/Prague,travel/all?lock=5235", "https://loremflickr.com/1600/1050/Prague,travel/all?lock=5236"]}, "Sweden": {"description": "Sweden brings seasonal atmosphere, striking scenery and memorable winter travel experiences.", "highlights": "Seasonal scenery • City stays • Signature experiences", "season": "winter", "photos": ["https://loremflickr.com/1600/1050/Sweden,travel/all?lock=5240", "https://loremflickr.com/1600/1050/Sweden,travel/all?lock=5241", "https://loremflickr.com/1600/1050/Sweden,travel/all?lock=5242", "https://loremflickr.com/1600/1050/Sweden,travel/all?lock=5243", "https://loremflickr.com/1600/1050/Sweden,travel/all?lock=5244", "https://loremflickr.com/1600/1050/Sweden,travel/all?lock=5245", "https://loremflickr.com/1600/1050/Sweden,travel/all?lock=5246"]}, "Norway": {"description": "Norway brings seasonal atmosphere, striking scenery and memorable winter travel experiences.", "highlights": "Seasonal scenery • City stays • Signature experiences", "season": "winter", "photos": ["https://loremflickr.com/1600/1050/Norway,travel/all?lock=5250", "https://loremflickr.com/1600/1050/Norway,travel/all?lock=5251", "https://loremflickr.com/1600/1050/Norway,travel/all?lock=5252", "https://loremflickr.com/1600/1050/Norway,travel/all?lock=5253", "https://loremflickr.com/1600/1050/Norway,travel/all?lock=5254", "https://loremflickr.com/1600/1050/Norway,travel/all?lock=5255", "https://loremflickr.com/1600/1050/Norway,travel/all?lock=5256"]}, "Finland": {"description": "Finland brings seasonal atmosphere, striking scenery and memorable winter travel experiences.", "highlights": "Seasonal scenery • City stays • Signature experiences", "season": "winter", "photos": ["https://loremflickr.com/1600/1050/Finland,travel/all?lock=5260", "https://loremflickr.com/1600/1050/Finland,travel/all?lock=5261", "https://loremflickr.com/1600/1050/Finland,travel/all?lock=5262", "https://loremflickr.com/1600/1050/Finland,travel/all?lock=5263", "https://loremflickr.com/1600/1050/Finland,travel/all?lock=5264", "https://loremflickr.com/1600/1050/Finland,travel/all?lock=5265", "https://loremflickr.com/1600/1050/Finland,travel/all?lock=5266"]}, "Iceland": {"description": "Iceland brings seasonal atmosphere, striking scenery and memorable winter travel experiences.", "highlights": "Seasonal scenery • City stays • Signature experiences", "season": "winter", "photos": ["https://loremflickr.com/1600/1050/Iceland,travel/all?lock=5270", "https://loremflickr.com/1600/1050/Iceland,travel/all?lock=5271", "https://loremflickr.com/1600/1050/Iceland,travel/all?lock=5272", "https://loremflickr.com/1600/1050/Iceland,travel/all?lock=5273", "https://loremflickr.com/1600/1050/Iceland,travel/all?lock=5274", "https://loremflickr.com/1600/1050/Iceland,travel/all?lock=5275", "https://loremflickr.com/1600/1050/Iceland,travel/all?lock=5276"]}, "Austria": {"description": "Austria brings seasonal atmosphere, striking scenery and memorable winter travel experiences.", "highlights": "Seasonal scenery • City stays • Signature experiences", "season": "winter", "photos": ["https://loremflickr.com/1600/1050/Austria,travel/all?lock=5280", "https://loremflickr.com/1600/1050/Austria,travel/all?lock=5281", "https://loremflickr.com/1600/1050/Austria,travel/all?lock=5282", "https://loremflickr.com/1600/1050/Austria,travel/all?lock=5283", "https://loremflickr.com/1600/1050/Austria,travel/all?lock=5284", "https://loremflickr.com/1600/1050/Austria,travel/all?lock=5285", "https://loremflickr.com/1600/1050/Austria,travel/all?lock=5286"]}, "New York": {"description": "Iconic energy, world-class dining, shopping and unforgettable city views.", "highlights": "Manhattan • Broadway • Rooftops", "season": "winter · spring · festive", "photos": ["https://loremflickr.com/1600/1050/new-york,usa/all?lock=5290", "https://loremflickr.com/1600/1050/new-york,usa/all?lock=5291", "https://loremflickr.com/1600/1050/new-york,usa/all?lock=5292", "https://loremflickr.com/1600/1050/new-york,usa/all?lock=5293", "https://loremflickr.com/1600/1050/new-york,usa/all?lock=5294", "https://loremflickr.com/1600/1050/new-york,usa/all?lock=5295", "https://loremflickr.com/1600/1050/new-york,usa/all?lock=5296"]}, "South Korea": {"description": "Discover South Korea through a personalised journey shaped around your dates, travel style and the experiences you value most.", "highlights": "Signature sights • Local experiences • Hand-picked stays", "season": "spring · autumn", "photos": ["https://loremflickr.com/1600/1050/seoul,korea/all?lock=5300", "https://loremflickr.com/1600/1050/seoul,korea/all?lock=5301", "https://loremflickr.com/1600/1050/seoul,korea/all?lock=5302", "https://loremflickr.com/1600/1050/seoul,korea/all?lock=5303", "https://loremflickr.com/1600/1050/seoul,korea/all?lock=5304", "https://loremflickr.com/1600/1050/seoul,korea/all?lock=5305", "https://loremflickr.com/1600/1050/seoul,korea/all?lock=5306"]}, "United Kingdom": {"description": "Discover United Kingdom through a personalised journey shaped around your dates, travel style and the experiences you value most.", "highlights": "Signature sights • Local experiences • Hand-picked stays", "season": "spring", "photos": ["https://loremflickr.com/1600/1050/london,england/all?lock=5310", "https://loremflickr.com/1600/1050/london,england/all?lock=5311", "https://loremflickr.com/1600/1050/london,england/all?lock=5312", "https://loremflickr.com/1600/1050/london,england/all?lock=5313", "https://loremflickr.com/1600/1050/london,england/all?lock=5314", "https://loremflickr.com/1600/1050/london,england/all?lock=5315", "https://loremflickr.com/1600/1050/london,england/all?lock=5316"]}, "Paris": {"description": "Romance, fashion, art and elegant neighbourhoods made for slow discovery.", "highlights": "Eiffel Tower • Museums • Café culture", "season": "spring · romantic · festive", "photos": ["https://loremflickr.com/1600/1050/paris,france/all?lock=5320", "https://loremflickr.com/1600/1050/paris,france/all?lock=5321", "https://loremflickr.com/1600/1050/paris,france/all?lock=5322", "https://loremflickr.com/1600/1050/paris,france/all?lock=5323", "https://loremflickr.com/1600/1050/paris,france/all?lock=5324", "https://loremflickr.com/1600/1050/paris,france/all?lock=5325", "https://loremflickr.com/1600/1050/paris,france/all?lock=5326"]}, "Netherlands": {"description": "Discover Netherlands through a personalised journey shaped around your dates, travel style and the experiences you value most.", "highlights": "Signature sights • Local experiences • Hand-picked stays", "season": "spring", "photos": ["https://loremflickr.com/1600/1050/Netherlands,travel/all?lock=5330", "https://loremflickr.com/1600/1050/Netherlands,travel/all?lock=5331", "https://loremflickr.com/1600/1050/Netherlands,travel/all?lock=5332", "https://loremflickr.com/1600/1050/Netherlands,travel/all?lock=5333", "https://loremflickr.com/1600/1050/Netherlands,travel/all?lock=5334", "https://loremflickr.com/1600/1050/Netherlands,travel/all?lock=5335", "https://loremflickr.com/1600/1050/Netherlands,travel/all?lock=5336"]}, "California": {"description": "Discover California through a personalised journey shaped around your dates, travel style and the experiences you value most.", "highlights": "Signature sights • Local experiences • Hand-picked stays", "season": "spring", "photos": ["https://loremflickr.com/1600/1050/california,usa/all?lock=5340", "https://loremflickr.com/1600/1050/california,usa/all?lock=5341", "https://loremflickr.com/1600/1050/california,usa/all?lock=5342", "https://loremflickr.com/1600/1050/california,usa/all?lock=5343", "https://loremflickr.com/1600/1050/california,usa/all?lock=5344", "https://loremflickr.com/1600/1050/california,usa/all?lock=5345", "https://loremflickr.com/1600/1050/california,usa/all?lock=5346"]}, "Vancouver": {"description": "Discover Vancouver through a personalised journey shaped around your dates, travel style and the experiences you value most.", "highlights": "Signature sights • Local experiences • Hand-picked stays", "season": "spring", "photos": ["https://loremflickr.com/1600/1050/vancouver,canada/all?lock=5350", "https://loremflickr.com/1600/1050/vancouver,canada/all?lock=5351", "https://loremflickr.com/1600/1050/vancouver,canada/all?lock=5352", "https://loremflickr.com/1600/1050/vancouver,canada/all?lock=5353", "https://loremflickr.com/1600/1050/vancouver,canada/all?lock=5354", "https://loremflickr.com/1600/1050/vancouver,canada/all?lock=5355", "https://loremflickr.com/1600/1050/vancouver,canada/all?lock=5356"]}, "Rome": {"description": "Ancient history, beautiful piazzas and Italian dining around every corner.", "highlights": "Colosseum • Vatican • Trastevere", "season": "spring · romantic", "photos": ["https://loremflickr.com/1600/1050/rome,italy/all?lock=5360", "https://loremflickr.com/1600/1050/rome,italy/all?lock=5361", "https://loremflickr.com/1600/1050/rome,italy/all?lock=5362", "https://loremflickr.com/1600/1050/rome,italy/all?lock=5363", "https://loremflickr.com/1600/1050/rome,italy/all?lock=5364", "https://loremflickr.com/1600/1050/rome,italy/all?lock=5365", "https://loremflickr.com/1600/1050/rome,italy/all?lock=5366"]}, "Quebec": {"description": "Discover Quebec through a personalised journey shaped around your dates, travel style and the experiences you value most.", "highlights": "Signature sights • Local experiences • Hand-picked stays", "season": "autumn", "photos": ["https://loremflickr.com/1600/1050/quebec,canada/all?lock=5370", "https://loremflickr.com/1600/1050/quebec,canada/all?lock=5371", "https://loremflickr.com/1600/1050/quebec,canada/all?lock=5372", "https://loremflickr.com/1600/1050/quebec,canada/all?lock=5373", "https://loremflickr.com/1600/1050/quebec,canada/all?lock=5374", "https://loremflickr.com/1600/1050/quebec,canada/all?lock=5375", "https://loremflickr.com/1600/1050/quebec,canada/all?lock=5376"]}, "Provence": {"description": "Discover Provence through a personalised journey shaped around your dates, travel style and the experiences you value most.", "highlights": "Signature sights • Local experiences • Hand-picked stays", "season": "autumn", "photos": ["https://loremflickr.com/1600/1050/provence,france/all?lock=5380", "https://loremflickr.com/1600/1050/provence,france/all?lock=5381", "https://loremflickr.com/1600/1050/provence,france/all?lock=5382", "https://loremflickr.com/1600/1050/provence,france/all?lock=5383", "https://loremflickr.com/1600/1050/provence,france/all?lock=5384", "https://loremflickr.com/1600/1050/provence,france/all?lock=5385", "https://loremflickr.com/1600/1050/provence,france/all?lock=5386"]}, "London": {"description": "London comes alive with festive atmosphere, city lights and seasonal experiences worth travelling for.", "highlights": "Festive markets • City lights • Seasonal dining", "season": "autumn · festive", "photos": ["https://loremflickr.com/1600/1050/london,england/all?lock=5390", "https://loremflickr.com/1600/1050/london,england/all?lock=5391", "https://loremflickr.com/1600/1050/london,england/all?lock=5392", "https://loremflickr.com/1600/1050/london,england/all?lock=5393", "https://loremflickr.com/1600/1050/london,england/all?lock=5394", "https://loremflickr.com/1600/1050/london,england/all?lock=5395", "https://loremflickr.com/1600/1050/london,england/all?lock=5396"]}, "Scotland": {"description": "Discover Scotland through a personalised journey shaped around your dates, travel style and the experiences you value most.", "highlights": "Signature sights • Local experiences • Hand-picked stays", "season": "autumn", "photos": ["https://loremflickr.com/1600/1050/scotland,highlands/all?lock=5400", "https://loremflickr.com/1600/1050/scotland,highlands/all?lock=5401", "https://loremflickr.com/1600/1050/scotland,highlands/all?lock=5402", "https://loremflickr.com/1600/1050/scotland,highlands/all?lock=5403", "https://loremflickr.com/1600/1050/scotland,highlands/all?lock=5404", "https://loremflickr.com/1600/1050/scotland,highlands/all?lock=5405", "https://loremflickr.com/1600/1050/scotland,highlands/all?lock=5406"]}, "Amsterdam": {"description": "Discover Amsterdam through a personalised journey shaped around your dates, travel style and the experiences you value most.", "highlights": "Signature sights • Local experiences • Hand-picked stays", "season": "autumn", "photos": ["https://loremflickr.com/1600/1050/amsterdam,netherlands/all?lock=5410", "https://loremflickr.com/1600/1050/amsterdam,netherlands/all?lock=5411", "https://loremflickr.com/1600/1050/amsterdam,netherlands/all?lock=5412", "https://loremflickr.com/1600/1050/amsterdam,netherlands/all?lock=5413", "https://loremflickr.com/1600/1050/amsterdam,netherlands/all?lock=5414", "https://loremflickr.com/1600/1050/amsterdam,netherlands/all?lock=5415", "https://loremflickr.com/1600/1050/amsterdam,netherlands/all?lock=5416"]}, "Slovenia": {"description": "Discover Slovenia through a personalised journey shaped around your dates, travel style and the experiences you value most.", "highlights": "Signature sights • Local experiences • Hand-picked stays", "season": "autumn", "photos": ["https://loremflickr.com/1600/1050/Slovenia,travel/all?lock=5420", "https://loremflickr.com/1600/1050/Slovenia,travel/all?lock=5421", "https://loremflickr.com/1600/1050/Slovenia,travel/all?lock=5422", "https://loremflickr.com/1600/1050/Slovenia,travel/all?lock=5423", "https://loremflickr.com/1600/1050/Slovenia,travel/all?lock=5424", "https://loremflickr.com/1600/1050/Slovenia,travel/all?lock=5425", "https://loremflickr.com/1600/1050/Slovenia,travel/all?lock=5426"]}, "Venice": {"description": "Venice is a beautiful choice for couples who want atmosphere, memorable stays and time to slow down.", "highlights": "Romantic stays • Dining • Beautiful views", "season": "romantic", "photos": ["https://loremflickr.com/1600/1050/venice,italy/all?lock=5430", "https://loremflickr.com/1600/1050/venice,italy/all?lock=5431", "https://loremflickr.com/1600/1050/venice,italy/all?lock=5432", "https://loremflickr.com/1600/1050/venice,italy/all?lock=5433", "https://loremflickr.com/1600/1050/venice,italy/all?lock=5434", "https://loremflickr.com/1600/1050/venice,italy/all?lock=5435", "https://loremflickr.com/1600/1050/venice,italy/all?lock=5436"]}, "Santorini": {"description": "Whitewashed villages, caldera views and one of the world's great sunset settings.", "highlights": "Oia • Caldera • Boutique hotels", "season": "romantic", "photos": ["https://loremflickr.com/1600/1050/santorini,greece/all?lock=5440", "https://loremflickr.com/1600/1050/santorini,greece/all?lock=5441", "https://loremflickr.com/1600/1050/santorini,greece/all?lock=5442", "https://loremflickr.com/1600/1050/santorini,greece/all?lock=5443", "https://loremflickr.com/1600/1050/santorini,greece/all?lock=5444", "https://loremflickr.com/1600/1050/santorini,greece/all?lock=5445", "https://loremflickr.com/1600/1050/santorini,greece/all?lock=5446"]}, "Mykonos": {"description": "Mykonos is a beautiful choice for couples who want atmosphere, memorable stays and time to slow down.", "highlights": "Romantic stays • Dining • Beautiful views", "season": "romantic", "photos": ["https://loremflickr.com/1600/1050/mykonos,greece/all?lock=5450", "https://loremflickr.com/1600/1050/mykonos,greece/all?lock=5451", "https://loremflickr.com/1600/1050/mykonos,greece/all?lock=5452", "https://loremflickr.com/1600/1050/mykonos,greece/all?lock=5453", "https://loremflickr.com/1600/1050/mykonos,greece/all?lock=5454", "https://loremflickr.com/1600/1050/mykonos,greece/all?lock=5455", "https://loremflickr.com/1600/1050/mykonos,greece/all?lock=5456"]}, "Maldives": {"description": "Private-island luxury, overwater villas and impossibly clear lagoons.", "highlights": "Overwater villas • Spa • Private beaches", "season": "romantic · tropical", "photos": ["https://loremflickr.com/1600/1050/Maldives,travel/all?lock=5460", "https://loremflickr.com/1600/1050/Maldives,travel/all?lock=5461", "https://loremflickr.com/1600/1050/Maldives,travel/all?lock=5462", "https://loremflickr.com/1600/1050/Maldives,travel/all?lock=5463", "https://loremflickr.com/1600/1050/Maldives,travel/all?lock=5464", "https://loremflickr.com/1600/1050/Maldives,travel/all?lock=5465", "https://loremflickr.com/1600/1050/Maldives,travel/all?lock=5466"]}, "Barcelona": {"description": "Barcelona is a beautiful choice for couples who want atmosphere, memorable stays and time to slow down.", "highlights": "Romantic stays • Dining • Beautiful views", "season": "romantic", "photos": ["https://loremflickr.com/1600/1050/barcelona,spain/all?lock=5470", "https://loremflickr.com/1600/1050/barcelona,spain/all?lock=5471", "https://loremflickr.com/1600/1050/barcelona,spain/all?lock=5472", "https://loremflickr.com/1600/1050/barcelona,spain/all?lock=5473", "https://loremflickr.com/1600/1050/barcelona,spain/all?lock=5474", "https://loremflickr.com/1600/1050/barcelona,spain/all?lock=5475", "https://loremflickr.com/1600/1050/barcelona,spain/all?lock=5476"]}, "Tokyo": {"description": "Tokyo is a beautiful choice for couples who want atmosphere, memorable stays and time to slow down.", "highlights": "Romantic stays • Dining • Beautiful views", "season": "romantic", "photos": ["https://loremflickr.com/1600/1050/tokyo,japan/all?lock=5480", "https://loremflickr.com/1600/1050/tokyo,japan/all?lock=5481", "https://loremflickr.com/1600/1050/tokyo,japan/all?lock=5482", "https://loremflickr.com/1600/1050/tokyo,japan/all?lock=5483", "https://loremflickr.com/1600/1050/tokyo,japan/all?lock=5484", "https://loremflickr.com/1600/1050/tokyo,japan/all?lock=5485", "https://loremflickr.com/1600/1050/tokyo,japan/all?lock=5486"]}, "Bali": {"description": "Wellness, villas, temples and tropical landscapes with a romantic spirit.", "highlights": "Ubud • Villas • Beach clubs", "season": "romantic", "photos": ["https://loremflickr.com/1600/1050/bali,indonesia/all?lock=5490", "https://loremflickr.com/1600/1050/bali,indonesia/all?lock=5491", "https://loremflickr.com/1600/1050/bali,indonesia/all?lock=5492", "https://loremflickr.com/1600/1050/bali,indonesia/all?lock=5493", "https://loremflickr.com/1600/1050/bali,indonesia/all?lock=5494", "https://loremflickr.com/1600/1050/bali,indonesia/all?lock=5495", "https://loremflickr.com/1600/1050/bali,indonesia/all?lock=5496"]}, "Tanzania": {"description": "Safari landscapes paired beautifully with an Indian Ocean finish.", "highlights": "Serengeti • Ngorongoro • Zanzibar", "season": "romantic · tropical", "photos": ["https://loremflickr.com/1600/1050/Tanzania,travel/all?lock=5500", "https://loremflickr.com/1600/1050/Tanzania,travel/all?lock=5501", "https://loremflickr.com/1600/1050/Tanzania,travel/all?lock=5502", "https://loremflickr.com/1600/1050/Tanzania,travel/all?lock=5503", "https://loremflickr.com/1600/1050/Tanzania,travel/all?lock=5504", "https://loremflickr.com/1600/1050/Tanzania,travel/all?lock=5505", "https://loremflickr.com/1600/1050/Tanzania,travel/all?lock=5506"]}, "Seychelles": {"description": "Granite beaches, tropical nature and intimate island luxury.", "highlights": "Mahé • Praslin • Private-island feel", "season": "romantic · tropical", "photos": ["https://loremflickr.com/1600/1050/Seychelles,travel/all?lock=5510", "https://loremflickr.com/1600/1050/Seychelles,travel/all?lock=5511", "https://loremflickr.com/1600/1050/Seychelles,travel/all?lock=5512", "https://loremflickr.com/1600/1050/Seychelles,travel/all?lock=5513", "https://loremflickr.com/1600/1050/Seychelles,travel/all?lock=5514", "https://loremflickr.com/1600/1050/Seychelles,travel/all?lock=5515", "https://loremflickr.com/1600/1050/Seychelles,travel/all?lock=5516"]}, "India": {"description": "India comes alive with festive atmosphere, city lights and seasonal experiences worth travelling for.", "highlights": "Festive markets • City lights • Seasonal dining", "season": "festive", "photos": ["https://loremflickr.com/1600/1050/India,travel/all?lock=5520", "https://loremflickr.com/1600/1050/India,travel/all?lock=5521", "https://loremflickr.com/1600/1050/India,travel/all?lock=5522", "https://loremflickr.com/1600/1050/India,travel/all?lock=5523", "https://loremflickr.com/1600/1050/India,travel/all?lock=5524", "https://loremflickr.com/1600/1050/India,travel/all?lock=5525", "https://loremflickr.com/1600/1050/India,travel/all?lock=5526"]}, "Strasbourg": {"description": "Strasbourg comes alive with festive atmosphere, city lights and seasonal experiences worth travelling for.", "highlights": "Festive markets • City lights • Seasonal dining", "season": "festive", "photos": ["https://loremflickr.com/1600/1050/strasbourg,france/all?lock=5530", "https://loremflickr.com/1600/1050/strasbourg,france/all?lock=5531", "https://loremflickr.com/1600/1050/strasbourg,france/all?lock=5532", "https://loremflickr.com/1600/1050/strasbourg,france/all?lock=5533", "https://loremflickr.com/1600/1050/strasbourg,france/all?lock=5534", "https://loremflickr.com/1600/1050/strasbourg,france/all?lock=5535", "https://loremflickr.com/1600/1050/strasbourg,france/all?lock=5536"]}, "Lapland": {"description": "Lapland comes alive with festive atmosphere, city lights and seasonal experiences worth travelling for.", "highlights": "Festive markets • City lights • Seasonal dining", "season": "festive", "photos": ["https://loremflickr.com/1600/1050/lapland,finland/all?lock=5540", "https://loremflickr.com/1600/1050/lapland,finland/all?lock=5541", "https://loremflickr.com/1600/1050/lapland,finland/all?lock=5542", "https://loremflickr.com/1600/1050/lapland,finland/all?lock=5543", "https://loremflickr.com/1600/1050/lapland,finland/all?lock=5544", "https://loremflickr.com/1600/1050/lapland,finland/all?lock=5545", "https://loremflickr.com/1600/1050/lapland,finland/all?lock=5546"]}, "Geneva": {"description": "Geneva comes alive with festive atmosphere, city lights and seasonal experiences worth travelling for.", "highlights": "Festive markets • City lights • Seasonal dining", "season": "festive", "photos": ["https://loremflickr.com/1600/1050/geneva,switzerland/all?lock=5550", "https://loremflickr.com/1600/1050/geneva,switzerland/all?lock=5551", "https://loremflickr.com/1600/1050/geneva,switzerland/all?lock=5552", "https://loremflickr.com/1600/1050/geneva,switzerland/all?lock=5553", "https://loremflickr.com/1600/1050/geneva,switzerland/all?lock=5554", "https://loremflickr.com/1600/1050/geneva,switzerland/all?lock=5555", "https://loremflickr.com/1600/1050/geneva,switzerland/all?lock=5556"]}, "Zurich": {"description": "Zurich comes alive with festive atmosphere, city lights and seasonal experiences worth travelling for.", "highlights": "Festive markets • City lights • Seasonal dining", "season": "festive", "photos": ["https://loremflickr.com/1600/1050/zurich,switzerland/all?lock=5560", "https://loremflickr.com/1600/1050/zurich,switzerland/all?lock=5561", "https://loremflickr.com/1600/1050/zurich,switzerland/all?lock=5562", "https://loremflickr.com/1600/1050/zurich,switzerland/all?lock=5563", "https://loremflickr.com/1600/1050/zurich,switzerland/all?lock=5564", "https://loremflickr.com/1600/1050/zurich,switzerland/all?lock=5565", "https://loremflickr.com/1600/1050/zurich,switzerland/all?lock=5566"]}, "Milan": {"description": "Milan comes alive with festive atmosphere, city lights and seasonal experiences worth travelling for.", "highlights": "Festive markets • City lights • Seasonal dining", "season": "festive", "photos": ["https://loremflickr.com/1600/1050/milan,italy/all?lock=5570", "https://loremflickr.com/1600/1050/milan,italy/all?lock=5571", "https://loremflickr.com/1600/1050/milan,italy/all?lock=5572", "https://loremflickr.com/1600/1050/milan,italy/all?lock=5573", "https://loremflickr.com/1600/1050/milan,italy/all?lock=5574", "https://loremflickr.com/1600/1050/milan,italy/all?lock=5575", "https://loremflickr.com/1600/1050/milan,italy/all?lock=5576"]}, "Singapore": {"description": "Singapore comes alive with festive atmosphere, city lights and seasonal experiences worth travelling for.", "highlights": "Festive markets • City lights • Seasonal dining", "season": "festive", "photos": ["https://loremflickr.com/1600/1050/Singapore,travel/all?lock=5580", "https://loremflickr.com/1600/1050/Singapore,travel/all?lock=5581", "https://loremflickr.com/1600/1050/Singapore,travel/all?lock=5582", "https://loremflickr.com/1600/1050/Singapore,travel/all?lock=5583", "https://loremflickr.com/1600/1050/Singapore,travel/all?lock=5584", "https://loremflickr.com/1600/1050/Singapore,travel/all?lock=5585", "https://loremflickr.com/1600/1050/Singapore,travel/all?lock=5586"]}, "Hong Kong": {"description": "Hong Kong comes alive with festive atmosphere, city lights and seasonal experiences worth travelling for.", "highlights": "Festive markets • City lights • Seasonal dining", "season": "festive", "photos": ["https://loremflickr.com/1600/1050/hong-kong,china/all?lock=5590", "https://loremflickr.com/1600/1050/hong-kong,china/all?lock=5591", "https://loremflickr.com/1600/1050/hong-kong,china/all?lock=5592", "https://loremflickr.com/1600/1050/hong-kong,china/all?lock=5593", "https://loremflickr.com/1600/1050/hong-kong,china/all?lock=5594", "https://loremflickr.com/1600/1050/hong-kong,china/all?lock=5595", "https://loremflickr.com/1600/1050/hong-kong,china/all?lock=5596"]}, "Fiji": {"description": "Fiji is made for warm-weather escapes, beautiful scenery and relaxed days with a premium edge.", "highlights": "Beach time • Island experiences • Beautiful stays", "season": "tropical", "photos": ["https://loremflickr.com/1600/1050/Fiji,travel/all?lock=5600", "https://loremflickr.com/1600/1050/Fiji,travel/all?lock=5601", "https://loremflickr.com/1600/1050/Fiji,travel/all?lock=5602", "https://loremflickr.com/1600/1050/Fiji,travel/all?lock=5603", "https://loremflickr.com/1600/1050/Fiji,travel/all?lock=5604", "https://loremflickr.com/1600/1050/Fiji,travel/all?lock=5605", "https://loremflickr.com/1600/1050/Fiji,travel/all?lock=5606"]}, "Malaysia": {"description": "Malaysia is made for warm-weather escapes, beautiful scenery and relaxed days with a premium edge.", "highlights": "Beach time • Island experiences • Beautiful stays", "season": "tropical", "photos": ["https://loremflickr.com/1600/1050/Malaysia,travel/all?lock=5610", "https://loremflickr.com/1600/1050/Malaysia,travel/all?lock=5611", "https://loremflickr.com/1600/1050/Malaysia,travel/all?lock=5612", "https://loremflickr.com/1600/1050/Malaysia,travel/all?lock=5613", "https://loremflickr.com/1600/1050/Malaysia,travel/all?lock=5614", "https://loremflickr.com/1600/1050/Malaysia,travel/all?lock=5615", "https://loremflickr.com/1600/1050/Malaysia,travel/all?lock=5616"]}, "Zanzibar": {"description": "Zanzibar is made for warm-weather escapes, beautiful scenery and relaxed days with a premium edge.", "highlights": "Beach time • Island experiences • Beautiful stays", "season": "tropical", "photos": ["https://loremflickr.com/1600/1050/zanzibar,tanzania/all?lock=5620", "https://loremflickr.com/1600/1050/zanzibar,tanzania/all?lock=5621", "https://loremflickr.com/1600/1050/zanzibar,tanzania/all?lock=5622", "https://loremflickr.com/1600/1050/zanzibar,tanzania/all?lock=5623", "https://loremflickr.com/1600/1050/zanzibar,tanzania/all?lock=5624", "https://loremflickr.com/1600/1050/zanzibar,tanzania/all?lock=5625", "https://loremflickr.com/1600/1050/zanzibar,tanzania/all?lock=5626"]}, "Rio de Janeiro": {"description": "Rio de Janeiro is made for warm-weather escapes, beautiful scenery and relaxed days with a premium edge.", "highlights": "Beach time • Island experiences • Beautiful stays", "season": "tropical", "photos": ["https://loremflickr.com/1600/1050/rio,brazil/all?lock=5630", "https://loremflickr.com/1600/1050/rio,brazil/all?lock=5631", "https://loremflickr.com/1600/1050/rio,brazil/all?lock=5632", "https://loremflickr.com/1600/1050/rio,brazil/all?lock=5633", "https://loremflickr.com/1600/1050/rio,brazil/all?lock=5634", "https://loremflickr.com/1600/1050/rio,brazil/all?lock=5635", "https://loremflickr.com/1600/1050/rio,brazil/all?lock=5636"]}, "Jamaica": {"description": "Jamaica is made for warm-weather escapes, beautiful scenery and relaxed days with a premium edge.", "highlights": "Beach time • Island experiences • Beautiful stays", "season": "tropical", "photos": ["https://loremflickr.com/1600/1050/Jamaica,travel/all?lock=5640", "https://loremflickr.com/1600/1050/Jamaica,travel/all?lock=5641", "https://loremflickr.com/1600/1050/Jamaica,travel/all?lock=5642", "https://loremflickr.com/1600/1050/Jamaica,travel/all?lock=5643", "https://loremflickr.com/1600/1050/Jamaica,travel/all?lock=5644", "https://loremflickr.com/1600/1050/Jamaica,travel/all?lock=5645", "https://loremflickr.com/1600/1050/Jamaica,travel/all?lock=5646"]}, "Bora Bora": {"description": "Bora Bora is made for warm-weather escapes, beautiful scenery and relaxed days with a premium edge.", "highlights": "Beach time • Island experiences • Beautiful stays", "season": "tropical", "photos": ["https://loremflickr.com/1600/1050/bora-bora,polynesia/all?lock=5650", "https://loremflickr.com/1600/1050/bora-bora,polynesia/all?lock=5651", "https://loremflickr.com/1600/1050/bora-bora,polynesia/all?lock=5652", "https://loremflickr.com/1600/1050/bora-bora,polynesia/all?lock=5653", "https://loremflickr.com/1600/1050/bora-bora,polynesia/all?lock=5654", "https://loremflickr.com/1600/1050/bora-bora,polynesia/all?lock=5655", "https://loremflickr.com/1600/1050/bora-bora,polynesia/all?lock=5656"]}, "Tahiti": {"description": "Tahiti is made for warm-weather escapes, beautiful scenery and relaxed days with a premium edge.", "highlights": "Beach time • Island experiences • Beautiful stays", "season": "tropical", "photos": ["https://loremflickr.com/1600/1050/tahiti,polynesia/all?lock=5660", "https://loremflickr.com/1600/1050/tahiti,polynesia/all?lock=5661", "https://loremflickr.com/1600/1050/tahiti,polynesia/all?lock=5662", "https://loremflickr.com/1600/1050/tahiti,polynesia/all?lock=5663", "https://loremflickr.com/1600/1050/tahiti,polynesia/all?lock=5664", "https://loremflickr.com/1600/1050/tahiti,polynesia/all?lock=5665", "https://loremflickr.com/1600/1050/tahiti,polynesia/all?lock=5666"]}};

const destinationModal = document.getElementById('destinationModal');
const destinationModalClose = document.getElementById('destinationModalClose');
const destinationSlidePhoto = document.getElementById('destinationSlidePhoto');
const destinationSlidePrev = document.getElementById('destinationSlidePrev');
const destinationSlideNext = document.getElementById('destinationSlideNext');
const destinationSlideDots = document.getElementById('destinationSlideDots');
const destinationSlideCounter = document.getElementById('destinationSlideCounter');
const destinationSlideshow = document.getElementById('destinationSlideshow');

let activeDestination = null;
let activeSlideIndex = 0;
let slideshowTimer = null;
let touchStartX = 0;

function renderDestinationSlide(index) {
  if (!activeDestination || !destinationSlidePhoto) return;
  const photos = activeDestination.photos || [];
  if (!photos.length) return;

  activeSlideIndex = (index + photos.length) % photos.length;
  destinationSlidePhoto.classList.add('changing');

  const nextSrc = photos[activeSlideIndex];
  const preload = new Image();
  preload.onload = () => {
    destinationSlidePhoto.src = nextSrc;
    destinationSlidePhoto.alt = `${document.getElementById('destinationTitle')?.textContent || 'Destination'} travel photo ${activeSlideIndex + 1}`;
    requestAnimationFrame(() => destinationSlidePhoto.classList.remove('changing'));
  };
  preload.src = nextSrc;

  if (destinationSlideCounter) destinationSlideCounter.textContent = `${activeSlideIndex + 1} / ${photos.length}`;

  if (destinationSlideDots) {
    [...destinationSlideDots.children].forEach((dot, i) => {
      dot.classList.toggle('active', i === activeSlideIndex);
      dot.setAttribute('aria-current', i === activeSlideIndex ? 'true' : 'false');
    });
  }
}

function startDestinationSlideshow() {
  clearInterval(slideshowTimer);
  slideshowTimer = setInterval(() => renderDestinationSlide(activeSlideIndex + 1), 5200);
}

function pauseAndRestartDestinationSlideshow() {
  clearInterval(slideshowTimer);
  startDestinationSlideshow();
}

function buildDestinationDots(count) {
  if (!destinationSlideDots) return;
  destinationSlideDots.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'destination-slide-dot';
    dot.setAttribute('aria-label', `View photo ${i + 1}`);
    dot.addEventListener('click', () => {
      renderDestinationSlide(i);
      pauseAndRestartDestinationSlideshow();
    });
    destinationSlideDots.appendChild(dot);
  }
}

function openDestinationPreview(name) {
  if (!destinationModal || !destinationData[name]) return;
  const d = destinationData[name];
  activeDestination = d;
  activeSlideIndex = 0;

  const title = document.getElementById('destinationTitle');
  const season = document.getElementById('destinationSeason');
  const description = document.getElementById('destinationDescription');
  const highlights = document.getElementById('destinationHighlights');
  const planLink = document.getElementById('destinationPlanLink');
  const mauritiusLink = document.getElementById('destinationMauritiusLink');

  title.textContent = name;
  season.textContent = d.season;
  description.textContent = d.description;
  highlights.innerHTML = d.highlights.split(' • ').map(x => `<span>${x}</span>`).join('');
  planLink.href = `plan.html?destination=${encodeURIComponent(name)}`;
  if (mauritiusLink) mauritiusLink.style.display = name === 'Mauritius' ? '' : 'none';

  buildDestinationDots(d.photos.length);
  renderDestinationSlide(0);

  destinationModal.classList.add('open');
  destinationModal.setAttribute('aria-hidden','false');
  document.body.classList.add('modal-open');
  startDestinationSlideshow();
}

function closeDestinationPreview() {
  if (!destinationModal) return;
  clearInterval(slideshowTimer);
  destinationModal.classList.remove('open');
  destinationModal.setAttribute('aria-hidden','true');
  document.body.classList.remove('modal-open');
  activeDestination = null;
}

document.querySelectorAll('.destination-photo-card').forEach(card => {
  const open = () => openDestinationPreview(card.dataset.destination);
  card.addEventListener('click', open);
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      open();
    }
  });
});

if (destinationSlidePrev) destinationSlidePrev.addEventListener('click', e => {
  e.stopPropagation();
  renderDestinationSlide(activeSlideIndex - 1);
  pauseAndRestartDestinationSlideshow();
});

if (destinationSlideNext) destinationSlideNext.addEventListener('click', e => {
  e.stopPropagation();
  renderDestinationSlide(activeSlideIndex + 1);
  pauseAndRestartDestinationSlideshow();
});

if (destinationSlideshow) {
  destinationSlideshow.addEventListener('mouseenter', () => clearInterval(slideshowTimer));
  destinationSlideshow.addEventListener('mouseleave', startDestinationSlideshow);

  destinationSlideshow.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
    clearInterval(slideshowTimer);
  }, {passive:true});

  destinationSlideshow.addEventListener('touchend', e => {
    const delta = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(delta) > 45) {
      renderDestinationSlide(activeSlideIndex + (delta < 0 ? 1 : -1));
    }
    startDestinationSlideshow();
  }, {passive:true});
}

if (destinationModalClose) destinationModalClose.addEventListener('click', closeDestinationPreview);

if (destinationModal) destinationModal.addEventListener('click', e => {
  if (e.target === destinationModal) closeDestinationPreview();
});

document.addEventListener('keydown', e => {
  if (!destinationModal?.classList.contains('open')) return;
  if (e.key === 'Escape') closeDestinationPreview();
  if (e.key === 'ArrowLeft') {
    renderDestinationSlide(activeSlideIndex - 1);
    pauseAndRestartDestinationSlideshow();
  }
  if (e.key === 'ArrowRight') {
    renderDestinationSlide(activeSlideIndex + 1);
    pauseAndRestartDestinationSlideshow();
  }
});

// If a destination is passed from a preview, prefill the enquiry form.
if (planForm) {
  const preselected = new URLSearchParams(window.location.search).get('destination');
  if (preselected) {
    const destinationInput = planForm.querySelector('[name="destination"]');
    if (destinationInput) destinationInput.value = preselected;
  }
}


// Mauritius story slideshow — authentic island imagery
const mauritiusStory = document.getElementById('mauritiusStorySlideshow');
if (mauritiusStory) {
  const storySlides = [...mauritiusStory.querySelectorAll('[data-mauritius-story-slide]')];
  const storyDots = [...mauritiusStory.querySelectorAll('[data-mauritius-story-dot]')];
  const storyPrev = document.getElementById('mauritiusStoryPrev');
  const storyNext = document.getElementById('mauritiusStoryNext');
  const storyCounter = document.getElementById('mauritiusStoryCounter');
  let storyIndex = 0;
  let storyTimer = null;
  let storyTouchStart = 0;

  const showStorySlide = (nextIndex) => {
    storyIndex = (nextIndex + storySlides.length) % storySlides.length;
    storySlides.forEach((slide, i) => slide.classList.toggle('active', i === storyIndex));
    storyDots.forEach((dot, i) => dot.classList.toggle('active', i === storyIndex));
    if (storyCounter) storyCounter.textContent = `${storyIndex + 1} / ${storySlides.length}`;
  };

  const startStory = () => {
    clearInterval(storyTimer);
    storyTimer = setInterval(() => showStorySlide(storyIndex + 1), 5600);
  };

  storyPrev?.addEventListener('click', () => { showStorySlide(storyIndex - 1); startStory(); });
  storyNext?.addEventListener('click', () => { showStorySlide(storyIndex + 1); startStory(); });
  storyDots.forEach((dot, i) => dot.addEventListener('click', () => { showStorySlide(i); startStory(); }));

  mauritiusStory.addEventListener('touchstart', e => {
    storyTouchStart = e.changedTouches[0].screenX;
    clearInterval(storyTimer);
  }, {passive:true});
  mauritiusStory.addEventListener('touchend', e => {
    const delta = e.changedTouches[0].screenX - storyTouchStart;
    if (Math.abs(delta) > 45) showStorySlide(storyIndex + (delta < 0 ? 1 : -1));
    startStory();
  }, {passive:true});

  startStory();
}


// Cruise inspiration slideshow
const cruiseStory = document.getElementById('cruiseStorySlideshow');
if (cruiseStory) {
  const slides = [...cruiseStory.querySelectorAll('[data-cruise-slide]')];
  const dots = [...cruiseStory.querySelectorAll('[data-cruise-dot]')];
  const prev = document.getElementById('cruiseStoryPrev');
  const next = document.getElementById('cruiseStoryNext');
  const counter = document.getElementById('cruiseStoryCounter');
  let i = 0, timer = null, touchX = 0;
  const show = n => { i=(n+slides.length)%slides.length; slides.forEach((s,x)=>s.classList.toggle('active',x===i)); dots.forEach((d,x)=>d.classList.toggle('active',x===i)); if(counter) counter.textContent=`${i+1} / ${slides.length}`; };
  const start = () => { clearInterval(timer); timer=setInterval(()=>show(i+1),5600); };
  prev?.addEventListener('click',()=>{show(i-1);start();}); next?.addEventListener('click',()=>{show(i+1);start();}); dots.forEach((d,x)=>d.addEventListener('click',()=>{show(x);start();}));
  cruiseStory.addEventListener('touchstart',e=>{touchX=e.changedTouches[0].screenX;clearInterval(timer);},{passive:true});
  cruiseStory.addEventListener('touchend',e=>{const dx=e.changedTouches[0].screenX-touchX;if(Math.abs(dx)>45)show(i+(dx<0?1:-1));start();},{passive:true}); start();
}

// Dedicated cruise enquiry -> WhatsApp
const cruiseForm = document.getElementById('cruiseForm');
if (cruiseForm) {
  cruiseForm.addEventListener('submit', e => {
    e.preventDefault();
    const f = new FormData(cruiseForm);
    const all = name => f.getAll(name).filter(Boolean).join(', ') || 'Not specified';
    const msg = [
      'Hello Dream Escape Travel & Tours,','','I would like to request a cruise quotation.','',
      `Full name: ${f.get('name')||''}`,`WhatsApp / phone: ${f.get('phone')||''}`,`Email: ${f.get('email')||''}`,'',
      `Cruise region: ${f.get('region')||''}`,`Countries / ports wanted: ${f.get('places')||'Not specified'}`,`Embarkation port: ${f.get('embarkation')||''}`,`Travelling from: ${f.get('origin')||''}`,
      `Preferred departure date: ${f.get('departDate')||'Flexible'}`,`Date flexibility: ${f.get('flexibility')||''}`,`Cruise length: ${f.get('duration')||'No preference'}`,`Journey type: ${f.get('journeyType')||'No preference'}`,'',
      `Adults: ${f.get('adults')||''}`,`Children: ${f.get('children')||'0'}`,`Children ages: ${f.get('childrenAges')||'N/A'}`,`Cabins / staterooms: ${f.get('cabins')||'1'}`,`Stateroom preference: ${all('stateroom')}`,`Bedding: ${f.get('bedding')||'No preference'}`,`Approximate budget: ${f.get('budget')||'Not specified'}`,'',
      `Preferred cruise line(s): ${all('cruiseLine')}`,`Onboard priorities: ${all('onboard')}`,`Special occasion: ${f.get('occasion')||'None'}`,`Accessibility needs: ${f.get('accessibility')||'None specified'}`,'',
      `Travel extras: ${all('extras')}`,`Notes: ${f.get('notes')||'None'}`,'',
      'I understand this is an enquiry and not a confirmed booking.'
    ].join('\n');
    window.open('https://wa.me/23059398142?text='+encodeURIComponent(msg),'_blank');
  });
}

const dayId = document.body.dataset.day;
const day = tripDayData[dayId];
const dayIds = Object.keys(tripDayData);
const maps = place => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.name)}`;
const mapsQuery = query => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
const supplyKeyByDay = {
  '2026-10-03': 'royal', '2026-10-04': 'royal', '2026-10-05': 'mercure',
  '2026-10-06': 'mhotel', '2026-10-07': 'mhotel', '2026-10-08': 'mhotel', '2026-10-09': 'mhotel'
};

if (!day) throw new Error(`Unknown itinerary day: ${dayId}`);

document.title = `${day.date} ${day.place}｜峴港慢旅行`;
document.querySelector('#day-eyebrow').textContent = day.eyebrow;
document.querySelector('#day-title').textContent = day.title;
document.querySelector('#day-date').textContent = day.date;
document.querySelector('#day-place').textContent = day.place;
document.querySelectorAll('#day-summary, .daily-summary-copy').forEach(element => { element.textContent = day.summary; });
document.querySelector('#day-decision').textContent = day.decision;

if (dayId === '2026-10-05' || dayId === '2026-10-06') {
  const guideLink = document.createElement('a');
  guideLink.className = 'bana-guide-link';
  guideLink.href = '../bana.html';
  guideLink.innerHTML = '<span>2026票券・營運・雨季動線</span><strong>開啟巴拿山住客完整指南 →</strong>';
  document.querySelector('.day-summary-section').after(guideLink);
}

const currentIndex = dayIds.indexOf(dayId);
const previous = dayIds[currentIndex - 1];
const next = dayIds[currentIndex + 1];
const dayNav = document.querySelector('#day-nav');
dayNav.innerHTML = `${previous ? `<a href="${previous}.html">← ${tripDayData[previous].date}</a>` : '<span></span>'}<a href="../index.html#schedule">回總行程</a>${next ? `<a href="${next}.html">${tripDayData[next].date} →</a>` : '<span></span>'}`;

document.querySelector('#timeline').innerHTML = day.timeline.map((item, index) => {
  const place = day.places[item.placeId];
  return `<article class="timeline-item${item.optional ? ' optional' : ''}">
    <div class="timeline-time"><span>${item.optional ? '選配' : String(index + 1).padStart(2, '0')}</span><time>${item.time}</time></div>
    <div class="timeline-copy"><p class="timeline-place">${place.name}</p><h3>${item.title}</h3><p>${item.text}</p>
      <div class="detail-grid"><div><strong>值得留意</strong><ul>${item.highlights.map(text => `<li>${text}</li>`).join('')}</ul></div><div class="caution"><strong>注意事項</strong><ul>${item.warnings.map(text => `<li>${text}</li>`).join('')}</ul></div></div>
      <a class="map-link" href="${maps(place)}" target="_blank" rel="noopener">Google Maps ↗</a>
      ${item.source ? `<a class="map-link" href="${item.source}" target="_blank" rel="noopener">${item.sourceText} ↗</a>` : ''}
    </div>
  </article>`;
}).join('');

document.querySelector('#alternative-list').innerHTML = day.alternatives.map((route, index) => `<article><span>A${index + 1}</span><p>${route.label}</p></article>`).join('');

if (day.choices?.length) {
  const choiceSection = document.createElement('section');
  choiceSection.className = 'day-choices-section';
  choiceSection.innerHTML = `<div class="wrap">
    <div class="day-detail-heading"><p class="eyebrow">CHOICES, NOT EXTRA STOPS</p><h2>當天可以怎麼選</h2><p>主行程不變；只有碰到天氣、體力或興趣差異時，再用這些條件切換。</p></div>
    <div class="choice-grid">${day.choices.map(choice => {
      const place = choice.mapId ? day.places[choice.mapId] : null;
      return `<article class="choice-card">
        <span>${choice.label}</span><h3>${choice.title}</h3><p>${choice.text}</p>
        <div class="choice-when"><strong>什麼時候選</strong><p>${choice.when}</p></div>
        ${(place || choice.source) ? `<div class="choice-links">${place ? `<a href="${maps(place)}" target="_blank" rel="noopener">Google Maps ↗</a>` : ''}${choice.source ? `<a href="${choice.source}" target="_blank" rel="noopener">${choice.sourceText} ↗</a>` : ''}</div>` : ''}
      </article>`;
    }).join('')}</div>
  </div>`;
  document.querySelector('.day-detail').before(choiceSection);
}

const supply = hotelSupplyData[supplyKeyByDay[dayId]];
const supplySection = document.createElement('section');
supplySection.className = 'supply-section';
supplySection.innerHTML = `<div class="wrap">
  <div class="supply-heading">
    <div><p class="eyebrow">NEARBY DRINKS & SNACKS</p><h2>飯店附近補給</h2></div>
    <p>${supply.summary}</p>
  </div>
  <div class="supply-map-frame">
    <div id="supply-map" aria-label="飯店與附近補給店地圖"></div>
    <div class="supply-map-key"><span><i class="hotel-dot"></i>住宿飯店</span><span><i class="store-dot"></i>飲料／零食補給</span></div>
  </div>
  <div class="supply-grid">${supply.stores.map((store, index) => `<article class="supply-card">
    <div class="supply-card-top"><span>S${index + 1}</span><p>${store.type}</p></div>
    <h3>${store.name}</h3>
    <dl><div><dt>距離</dt><dd>${store.distance}</dd></div><div><dt>營業時間</dt><dd>${store.hours}</dd></div></dl>
    <p>${store.description}</p>
    <div class="supply-links"><a href="${mapsQuery(store.mapQuery)}" target="_blank" rel="noopener">Google Maps ↗</a><a href="${store.source}" target="_blank" rel="noopener">${store.sourceText} ↗</a></div>
  </article>`).join('')}</div>
  <p class="supply-checked">${supply.checked}</p>
</div>`;
document.querySelector('.day-detail').after(supplySection);

const map = L.map('route-map', { scrollWheelZoom: false });
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const mainUnique = [...new Set(day.mainRoute)];
const alternativeUnique = [...new Set(day.alternatives.flatMap(route => route.ids))].filter(id => !mainUnique.includes(id));
const bounds = [];

if (day.mapArea) {
  bounds.push(...day.mapArea.coords);
  L.polygon(day.mapArea.coords, {
    color: '#176047', weight: 3, opacity: 0.96, dashArray: '9 8', fillColor: '#a9d2bd', fillOpacity: 0.16
  }).addTo(map).bindTooltip(day.mapArea.label, {
    permanent: true, direction: 'center', className: 'map-area-label'
  }).bindPopup(`<strong>${day.mapArea.label}</strong><br>${day.mapArea.note}`);
  document.querySelector('.map-key').insertAdjacentHTML('beforeend', '<span><i class="area"></i>會安老街核心範圍</span>');
}

const markerIcon = label => L.divIcon({
  className: 'numbered-marker-shell',
  html: `<span>${label}</span>`,
  iconSize: [34, 34],
  iconAnchor: [17, 17],
  popupAnchor: [0, -18]
});

mainUnique.forEach((id, index) => {
  const place = day.places[id];
  bounds.push(place.coords);
  L.marker(place.coords, { icon: markerIcon(index + 1) }).addTo(map)
    .bindPopup(`<strong>${index + 1}. ${place.name}</strong><br>${place.note}<br><a href="${maps(place)}" target="_blank" rel="noopener">Google Maps</a>`);
});

alternativeUnique.forEach((id, index) => {
  const place = day.places[id];
  bounds.push(place.coords);
  L.marker(place.coords, { icon: markerIcon(`A${index + 1}`) }).addTo(map)
    .bindPopup(`<strong>替代：${place.name}</strong><br>${place.note}<br><a href="${maps(place)}" target="_blank" rel="noopener">Google Maps</a>`);
});

const coordsFor = ids => ids.map(id => day.places[id].coords);
L.polyline(coordsFor(day.mainRoute), { color: '#d66b4b', weight: 4, opacity: 0.88 }).addTo(map);
day.alternatives.forEach((route, index) => {
  L.polyline(coordsFor(route.ids), { color: index % 2 ? '#d7a843' : '#167a80', weight: 3, opacity: 0.82, dashArray: '8 8' }).addTo(map);
});
map.fitBounds(bounds, { padding: [34, 34], maxZoom: 15 });

setTimeout(() => map.invalidateSize(), 100);

const supplyMap = L.map('supply-map', { scrollWheelZoom: false });
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(supplyMap);

const supplyBounds = [supply.hotel.coords, ...supply.stores.map(store => store.coords)];
const supplyIcon = (label, kind) => L.divIcon({
  className: 'supply-marker-shell',
  html: `<span class="${kind}">${label}</span>`,
  iconSize: [38, 38],
  iconAnchor: [19, 19],
  popupAnchor: [0, -20]
});

L.marker(supply.hotel.coords, { icon: supplyIcon('H', 'hotel') }).addTo(supplyMap)
  .bindPopup(`<strong>${supply.hotel.name}</strong><br>${supply.hotel.note}<br><a href="${maps(supply.hotel)}" target="_blank" rel="noopener">Google Maps</a>`);

supply.stores.forEach((store, index) => {
  L.marker(store.coords, { icon: supplyIcon(`S${index + 1}`, 'store') }).addTo(supplyMap)
    .bindPopup(`<strong>${store.name}</strong><br>${store.distance}<br>${store.hours}<br><a href="${mapsQuery(store.mapQuery)}" target="_blank" rel="noopener">Google Maps</a>`);
  L.polyline([supply.hotel.coords, store.coords], { color: '#d66b4b', weight: 2, opacity: 0.72, dashArray: '6 7' }).addTo(supplyMap);
});

supplyMap.fitBounds(supplyBounds, { padding: [48, 48], maxZoom: 17 });
setTimeout(() => supplyMap.invalidateSize(), 100);

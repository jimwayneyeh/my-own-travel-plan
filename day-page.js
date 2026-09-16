const dayId = document.body.dataset.day;
const day = tripDayData[dayId];
const dayIds = Object.keys(tripDayData);
const maps = place => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.name)}`;

if (!day) throw new Error(`Unknown itinerary day: ${dayId}`);

document.title = `${day.date} ${day.place}｜峴港慢旅行`;
document.querySelector('#day-eyebrow').textContent = day.eyebrow;
document.querySelector('#day-title').textContent = day.title;
document.querySelector('#day-date').textContent = day.date;
document.querySelector('#day-place').textContent = day.place;
document.querySelectorAll('#day-summary, .daily-summary-copy').forEach(element => { element.textContent = day.summary; });
document.querySelector('#day-decision').textContent = day.decision;

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
    </div>
  </article>`;
}).join('');

document.querySelector('#alternative-list').innerHTML = day.alternatives.map((route, index) => `<article><span>A${index + 1}</span><p>${route.label}</p></article>`).join('');

const map = L.map('route-map', { scrollWheelZoom: false });
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const mainUnique = [...new Set(day.mainRoute)];
const alternativeUnique = [...new Set(day.alternatives.flatMap(route => route.ids))].filter(id => !mainUnique.includes(id));
const bounds = [];

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

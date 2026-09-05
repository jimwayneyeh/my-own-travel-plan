const maps = name => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name)}`;

const days = [
  { date: '10/3（六）', place: '會安', title: '抵達後，只做一件浪漫的小事', image: 'https://izitour.com/media/ckeditor/hoi-an-vietnam-1.webp', alt: '會安河岸燈籠', focus: '峴港機場 → Hotel Royal Hoi An', plan: ['18:10 抵達峴港，直接包車前往會安飯店。', '入住、梳洗後只在飯店周邊或秋盆河岸吃晚餐。', '若精神尚可，散步到安會橋一帶看燈籠；不排古蹟、不追夜市。'], map: 'Hotel Royal Hoi An Danang, The Legacy Riverfront Resort & Spa', tag: '抵達日留白' },
  { date: '10/4（日）', place: '會安', title: '古城慢走，午後回飯店休息', image: 'https://image.vietnam.travel/sites/default/files/inline-images/Pho%20co%20Hoi%20An.jpeg', alt: '會安燈籠河岸', focus: '古城 + 河岸夜色', plan: ['睡飽、早餐後 10:30 才進古城：日本橋＋ 2 至 3 個古蹟即可。', '午餐後回飯店游泳、午睡或享用河景。', '傍晚再回古城吃晚餐；想加一項體驗，再選短程河船或放水燈。'], map: 'Hoi An Ancient Town', tag: '一天一主題' },
  { date: '10/5（一）', place: '巴拿山', title: '住進雲裡，慢慢走法國村', image: 'https://sunworldsbanahills.com/wp-content/uploads/2024/07/cau-vang-ba-na-hills-1.jpg', alt: '巴拿山金橋', focus: '會安 → Mercure Bà Nà Hills', plan: ['早餐後退房，包車前往巴拿山入口、搭纜車上山。', '入住 Mercure 後只安排法國村、咖啡與飯店周邊。', '傍晚視天氣到金橋拍照，晚餐留在山上。'], map: 'Mercure Danang French Village Bana Hills', tag: '山上住一晚' },
  { date: '10/6（二）', place: '峴港海邊', title: '趁早再看金橋，午後換成海', image: 'https://vcdn1-dulich.vnecdn.net/2023/03/01/bai-mykhe-jpeg-167763815-6011-1898-1677638252.jpg?dpr=1&fit=crop&h=0&q=100&s=NeyKbOipMzANDXNICpGlRA&w=1200', alt: '美溪海灘', focus: '巴拿山 → M Hotel Danang', plan: ['早上利用住山上的優勢，再去金橋或花園；天候不佳就改飯店早餐與法國村。', '中午前後下山、前往 M Hotel 寄放行李或辦理入住。', '下午完全留給海景房、下午茶、迷你吧與美溪海灘日落。'], map: 'M Hotel Danang', tag: '山海切換日' },
  { date: '10/7（三）', place: '山茶半島', title: '晚一點出門，去看山與海', image: 'https://danang.gov.vn/documents/20121/0/chua-linh-ung-son-tra.jpg', alt: '山茶半島靈應寺', focus: 'M Hotel 的渡假日 + 靈應寺', plan: ['上午睡晚一點，在飯店吃早餐、泳池或沙灘放空。', '約 15:30 包車去山茶半島靈應寺看海景，停留 1.5 至 2 小時。', '晚上回市區或飯店附近吃海鮮，不追完整個半島。'], map: 'Linh Ung Pagoda Son Tra', tag: '景色半日' },
  { date: '10/8（四）', place: '自由選擇', title: '留給天氣，也留給當下的心情', image: 'https://media.mia.vn/uploads/blog-du-lich/bai-bien-my-khe-da-nang-lang-nguoi-ngam-nhin-1-trong-6-bai-bien-dep-nhat-hanh-tinh-01-1636298582.jpeg', alt: '峴港海灘', focus: 'SPA / 五行山 / 海邊，三選一', plan: ['晴天想出門：上午五行山，午後回飯店休息。', '下雨或只想渡假：直接排 SPA、下午茶與海景浴缸。', '晚上可去韓江河畔吃飯看夜景；這天不安排硬性活動。'], map: 'Marble Mountains Da Nang', tag: '彈性保留日' },
  { date: '10/9（五）', place: '回程', title: '把最後半天留給舒服的收尾', image: 'https://hopjourneys.com/wp-content/uploads/2024/05/My-Khe-Beach.png', alt: '美溪海灘晨景', focus: '海邊早餐 → DAD 19:45', plan: ['早餐後最後一次海邊散步；退房後寄放行李。', '午餐、按摩或咖啡館三選一，避免長途景點。', '約 16:30 - 16:45 出發往機場，搭 IT552 回桃園。'], map: 'Da Nang International Airport', tag: '從容返程' }
];

const stays = [
  { dates: '10/3 - 10/5', name: 'Hotel Royal Hoi An Danang', room: '豪華大床房 · 2 位', notes: '含早餐、停車、Wi‑Fi、健身中心。此訂單不可退款。', map: 'Hotel Royal Hoi An Danang, The Legacy Riverfront Resort & Spa' },
  { dates: '10/5 - 10/6', name: 'Mercure Danang French Village Bana Hills', room: 'Superior King Room · 2 位', notes: '含早餐、Wi‑Fi。此訂單不可退款；憑證未列園區與纜車門票，需另確認。', map: 'Mercure Danang French Village Bana Hills' },
  { dates: '10/6 - 10/9', name: 'M HOTEL DANANG', room: '海景雙床浴缸房 · 2 位', notes: '每日早餐、下午茶、迷你吧、迎賓水果與餐飲 9 折；10/1 前可免費取消。', map: 'M HOTEL DANANG' }
];

const events = [
  { status: '推薦納入', title: '10/3 會安燈籠河岸夜色', body: '你們抵達的第一晚正好住在古城附近。這不是要趕正式活動，而是把燈籠、河岸、晚餐當作抵達後最輕盈的儀式；會安古城官方說明門票可在停留期間使用最多 3 天。', link: 'https://hoianheritage.danang.gov.vn/en/news/news-events/announcement-of-the-visiting-in-hoi-an-ancient-town-125.html', linkText: '查看會安古城官方資訊' },
  { status: '適合當日查看', title: '10/5 - 10/6 巴拿山現場演出與夜間氛圍', body: '你們住在山上，適合把園區演出、金橋拍照與法國村夜景當成「看當天安排再決定」的加分體驗。官方公告目前列園區與纜車約 08:00 - 22:00，但節目與路線可能調整。', link: 'https://sunworld.vn/en/banahills/sunworld-news/announcement-daily-operation-schedule-at-sun-world-ba-na-hillshtml', linkText: '查看巴拿山官方營運公告' },
  { status: '不列入既定行程', title: '10 月初的公開大型活動仍有資訊落差', body: '峴港官方年度清單曾列 10/2 - 10/8 的「Global Heritage Beauty 2026」，但其他近期公開報導的日期與地點互相矛盾，尚無可靠可參加的節目、售票或場地資訊。因此不把它排入行程；出發前一週若有正式公告再評估。', link: 'https://danangfantasticity.com/en/kham-pha/danh-muc-su-kien-va-le-hoi-da-nang-nam-2026', linkText: '查看峴港官方年度活動清單' },
  { status: '已確認不重疊', title: '巴拿山 Sun Festival 已在 8/31 結束', body: '2026 的 Sun Festival 官方標示為 4/10 - 8/31，和你們 10 月行程沒有重疊；因此不會將它誤列為可參加活動。', link: 'https://sunworld.vn/en/banahills/activities/ba-na-hills-co-gi-moi-nhung-trai-nghiem-khong-nen-bo-lo-20996', linkText: '查看巴拿山 2026 資訊' }
];

const places = [
  { name: '會安古城', type: '住兩晚，最適合慢走', image: 'https://image.vietnam.travel/sites/default/files/inline-images/Pho%20co%20Hoi%20An.jpeg', map: 'Hoi An Ancient Town', text: '白天看老屋與日本橋，晚上留給河岸燈籠。核心是分兩次造訪，而不是一次走完。' },
  { name: '金橋與巴拿山', type: '已住山上，不必趕一日團', image: 'https://sunworldsbanahills.com/wp-content/uploads/2024/07/cau-vang-ba-na-hills-1.jpg', map: 'Golden Bridge Ba Na Hills', text: '入住前後各安排一小段，取代一日團式的大量移動。高海拔早晚較涼，記得帶薄外套。' },
  { name: '美溪海灘', type: 'M Hotel 的前院', image: 'https://vcdn1-dulich.vnecdn.net/2023/03/01/bai-mykhe-jpeg-167763815-6011-1898-1677638252.jpg?dpr=1&fit=crop&h=0&q=100&s=NeyKbOipMzANDXNICpGlRA&w=1200', map: 'My Khe Beach Da Nang', text: '最適合早晨散步或看日落；10 月海況與天候變化快，游泳以現場旗幟與飯店建議為準。' },
  { name: '靈應寺・山茶半島', type: '一趟景色半日', image: 'https://danang.gov.vn/documents/20121/0/chua-linh-ung-son-tra.jpg', map: 'Linh Ung Pagoda Son Tra', text: '山與海同框的輕量景點。只安排靈應寺與沿途觀景，避免把半島騎成高強度行程。' },
  { name: '五行山', type: '10/8 的晴天備案', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1000&q=80', map: 'Marble Mountains Da Nang', text: '有石階與洞穴，適合早上去、午後回飯店；若下雨或不想爬，就直接換成 SPA 日。' }
];

function render() {
  document.querySelector('#schedule-grid').innerHTML = days.map(day => `<article class="day-card"><img src="${day.image}" alt="${day.alt}" loading="lazy" /><div class="day-content"><div class="day-meta"><span>${day.date}</span><span>${day.place}</span></div><h3>${day.title}</h3><p class="focus">${day.focus}</p><ol>${day.plan.map(item => `<li>${item}</li>`).join('')}</ol><div class="card-bottom"><span>${day.tag}</span><a href="${maps(day.map)}" target="_blank" rel="noopener">Google Maps ↗</a></div></div></article>`).join('');
  document.querySelector('#stay-grid').innerHTML = stays.map(stay => `<article class="stay-card"><p>${stay.dates}</p><h3>${stay.name}</h3><strong>${stay.room}</strong><p class="stay-notes">${stay.notes}</p><a href="${maps(stay.map)}" target="_blank" rel="noopener">在 Google Maps 開啟 ↗</a></article>`).join('');
  document.querySelector('#event-grid').innerHTML = events.map(event => `<article class="event-card"><span class="event-status">${event.status}</span><h3>${event.title}</h3><p>${event.body}</p><a href="${event.link}" target="_blank" rel="noopener">${event.linkText} ↗</a></article>`).join('');
  document.querySelector('#place-grid').innerHTML = places.map(place => `<article class="place-card"><img src="${place.image}" alt="${place.name}" loading="lazy" /><div><span>${place.type}</span><h3>${place.name}</h3><p>${place.text}</p><a href="${maps(place.map)}" target="_blank" rel="noopener">Google Maps ↗</a></div></article>`).join('');
}

const noteKey = 'danang-slow-2026-notes';
const noteBox = document.querySelector('#trip-notes');
const status = document.querySelector('#save-status');
noteBox.value = localStorage.getItem(noteKey) || '';
document.querySelector('#save-notes').addEventListener('click', () => { localStorage.setItem(noteKey, noteBox.value); status.textContent = '已儲存在這台裝置'; });
render();

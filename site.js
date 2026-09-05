const maps = name => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name)}`;

const days = [
  { date: '10/3（六）', place: '會安', title: '抵達後，只做一件浪漫的小事', image: 'https://izitour.com/media/ckeditor/hoi-an-vietnam-1.webp', alt: '會安河岸燈籠', focus: '峴港機場 → Hotel Royal Hoi An', plan: ['18:10 - 19:30｜落地、入境、提領行李。接送不要約太早，預留排隊與延誤緩衝。', '約 19:40 - 21:00｜包車或 Grab 直接到會安飯店；今晚不進峴港市區。', '21:15 後｜飯店周邊或河岸晚餐，精神好才散步到安會橋看燈籠。'], fallback: '班機延誤就改飯店晚餐或外送；河岸散步可直接取消。', map: 'Hotel Royal Hoi An Danang, The Legacy Riverfront Resort & Spa', tag: '抵達日留白' },
  { date: '10/4（日）', place: '會安', title: '古城慢走，午後回飯店休息', image: 'https://bvhttdl.mediacdn.vn/2019/12/4/22-1575444930391357177624-1575454914343-15754549150641583342735.jpg', alt: '會安日本橋', focus: '古城 + 河岸夜色', plan: ['09:30 - 10:30｜慢早餐後步行進古城，先買票；日本橋、福建會館與一間老屋就夠。', '12:15 - 15:30｜午餐後回飯店游泳、午睡或河景咖啡，這段不安排任何必去景點。', '16:30 - 18:00｜黃昏二訪古城；河岸慢走，喜歡才坐約 20 分鐘的短程河船。', '18:30 後｜會安晚餐與自由逛街，飯後步行回飯店。'], fallback: '午後下雨就把古城集中在上午，晚上只保留近距離晚餐。', map: 'Hoi An Ancient Town', tag: '一天一主題' },
  { date: '10/5（一）', place: '巴拿山', title: '住進雲裡，慢慢走法國村', image: 'https://mediaen.vietnamplus.vn/images/cc571c067c64d4f85fb35f04673bf2968c14e8b40b6bd340d8146a8023dc5221ece1bcdfc256efeeae6dd06768e18dfb/7_1.jpg', alt: '巴拿山金橋', focus: '會安 → Mercure Bà Nà Hills', plan: ['08:00 - 09:00｜早餐、退房；隨身包放薄外套、雨具與一套保暖衣物。', '09:00 - 11:00｜包車到巴拿山入口、搭纜車；先確認園區與纜車門票是否需另購。', '11:30 - 15:00｜寄放行李、午餐、法國村與咖啡；房間未好也不急。', '16:30 - 晚餐｜天氣好就去金橋；雲霧或下雨則留在法國村、室內設施與飯店周邊。'], fallback: '金橋拍照可以留到隔天早上；不要因雲霧硬撐。', map: 'Mercure Danang French Village Bana Hills', tag: '山上住一晚' },
  { date: '10/6（二）', place: '峴港海邊', title: '趁早再看金橋，午後換成海', image: 'https://vcdn1-dulich.vnecdn.net/2023/03/01/bai-mykhe-jpeg-167763815-6011-1898-1677638252.jpg?dpr=1&fit=crop&h=0&q=100&s=NeyKbOipMzANDXNICpGlRA&w=1200', alt: '美溪海灘', focus: '巴拿山 → M Hotel Danang', plan: ['07:30 - 09:30｜依天氣二選一：金橋回訪，或法國村早餐散步。', '10:30 - 13:00｜退房、下山、前往峴港；確認最晚退房與當日纜車下山安排。', '14:00 - 17:30｜M Hotel 下午：下午茶、迷你吧、海景浴缸、泳池四選二。', '日落後｜美溪海灘散步加飯店周邊晚餐，不再塞景點。'], fallback: '海況以現場旗幟和飯店建議為準；10 月不把游泳當作必做。', map: 'M Hotel Danang', tag: '山海切換日' },
  { date: '10/7（三）', place: '山茶半島', title: '晚一點出門，去看山與海', image: 'https://vcdn1-dulich.vnecdn.net/2023/03/01/bai-mykhe-jpeg-167763815-6011-1898-1677638252.jpg?dpr=1&fit=crop&h=0&q=100&s=NeyKbOipMzANDXNICpGlRA&w=1200', alt: '峴港海岸與山景', focus: 'M Hotel 渡假日 + 靈應寺', plan: ['09:30 - 13:30｜不設鬧鐘的飯店上午：早餐、房間、泳池或沙灘任選。', '14:00 - 15:30｜回房整理、下午茶或午睡，把出門留給較舒服的光線。', '15:30 - 18:00｜包車到靈應寺與山茶海景；只停寺院與一處觀景點，不環半島。', '18:30 後｜回市區或海邊晚餐，選離飯店順路的地點。'], fallback: '下雨就改成 M Hotel 下午茶＋SPA／咖啡館，完全不需補課。', map: 'Linh Ung Pagoda Son Tra', tag: '景色半日' },
  { date: '10/8（四）', place: '自由選擇', title: '留給天氣，也留給當下的心情', image: 'https://media.mia.vn/uploads/blog-du-lich/bai-bien-my-khe-da-nang-lang-nguoi-ngam-nhin-1-trong-6-bai-bien-dep-nhat-hanh-tinh-01-1636298582.jpeg', alt: '峴港海灘', focus: 'SPA / 五行山 / 海邊，三選一', plan: ['09:00 - 12:00｜晴天選五行山；雨天或想完全放空就預約 SPA。五行山有石階，穿好走的鞋。', '12:30 - 16:30｜回飯店午餐與休息，再用一次下午茶；這是最後一個完整渡假下午。', '17:30 - 晚上｜韓江河畔晚餐或海邊日落二選一；伴手禮最多保留一小段時間。'], fallback: '前三天若有因下雨取消的景點，才移到今天；否則保持 SPA 日。', map: 'Marble Mountains Da Nang', tag: '彈性保留日' },
  { date: '10/9（五）', place: '回程', title: '把最後半天留給舒服的收尾', image: 'https://hopjourneys.com/wp-content/uploads/2024/05/My-Khe-Beach.png', alt: '美溪海灘晨景', focus: '海邊早餐 → DAD 19:45', plan: ['08:30 - 10:30｜早餐、最後一次海邊散步；先把行李與證件收好。', '11:00 - 15:30｜退房寄放行李，午餐、按摩、咖啡三選一，別再安排長途景點。', '16:30 - 16:45｜由飯店出發往機場，對應 IT552 19:45 起飛。'], fallback: '下雨就把散步換成飯店附近咖啡，行程仍然完整。', map: 'Da Nang International Airport', tag: '從容返程' }
];

const stays = [
  { dates: '10/3 - 10/5', name: 'Hotel Royal Hoi An Danang', room: '豪華大床房 · 2 位', notes: '含早餐、停車、Wi‑Fi、健身中心。此訂單不可退款。', map: 'Hotel Royal Hoi An Danang, The Legacy Riverfront Resort & Spa' },
  { dates: '10/5 - 10/6', name: 'Mercure Danang French Village Bana Hills', room: 'Superior King Room · 2 位', notes: '含早餐、Wi‑Fi。此訂單不可退款；憑證未列園區與纜車門票，需另確認。', map: 'Mercure Danang French Village Bana Hills' },
  { dates: '10/6 - 10/9', name: 'M HOTEL DANANG', room: '海景雙床浴缸房 · 2 位', notes: '每日早餐、下午茶、迷你吧、迎賓水果與餐飲 9 折；10/1 前可免費取消。', map: 'M HOTEL DANANG' }
];

const events = [
  { status: '推薦納入', title: '10/3 會安燈籠河岸夜色', body: '抵達第一晚住在古城附近，適合用燈籠、河岸和晚餐作最輕盈的開場；會安古城官方說明門票可在停留期間使用最多 3 天。', link: 'https://hoianheritage.danang.gov.vn/en/news/news-events/announcement-of-the-visiting-in-hoi-an-ancient-town-125.html', linkText: '查看會安古城官方資訊' },
  { status: '適合當日查看', title: '10/5 - 10/6 巴拿山現場演出與夜間氛圍', body: '你們住在山上，適合把園區演出、金橋拍照與法國村夜景當作加分體驗。官方公告目前列園區與纜車約 08:00 - 22:00，但節目與路線可能調整。', link: 'https://sunworld.vn/en/banahills/sunworld-news/announcement-daily-operation-schedule-at-sun-world-ba-na-hillshtml', linkText: '查看巴拿山官方營運公告' },
  { status: '不列入既定行程', title: '10 月初的公開大型活動仍有資訊落差', body: '峴港官方年度清單曾列 10/2 - 10/8 的 Global Heritage Beauty 2026，但未找到可靠的旅客節目、場地或售票資訊。因此只列為出發前再確認，不放進主行程。', link: 'https://danangfantasticity.com/en/kham-pha/danh-muc-su-kien-va-le-hoi-da-nang-nam-2026', linkText: '查看峴港官方年度活動清單' },
  { status: '已確認不重疊', title: '巴拿山 Sun Festival 已在 8/31 結束', body: '2026 的 Sun Festival 官方標示為 4/10 - 8/31，和你們 10 月行程沒有重疊；因此不會將它誤列為可參加活動。', link: 'https://sunworld.vn/en/banahills/activities/ba-na-hills-co-gi-moi-nhung-trai-nghiem-khong-nen-bo-lo-20996', linkText: '查看巴拿山 2026 資訊' }
];

const places = [
  { name: '會安古城', type: '住兩晚，最適合慢走', image: 'https://image.vietnam.travel/sites/default/files/inline-images/Pho%20co%20Hoi%20An.jpeg', map: 'Hoi An Ancient Town', text: '白天看老屋與日本橋，晚上留給河岸燈籠。核心是分兩次造訪，而不是一次走完。' },
  { name: '金橋與巴拿山', type: '已住山上，不必趕一日團', image: 'https://mediaen.vietnamplus.vn/images/cc571c067c64d4f85fb35f04673bf2968c14e8b40b6bd340d8146a8023dc5221ece1bcdfc256efeeae6dd06768e18dfb/7_1.jpg', map: 'Golden Bridge Ba Na Hills', text: '入住前後各安排一小段，取代一日團式的大量移動。高海拔早晚較涼，記得帶薄外套。' },
  { name: '美溪海灘', type: 'M Hotel 的前院', image: 'https://vcdn1-dulich.vnecdn.net/2023/03/01/bai-mykhe-jpeg-167763815-6011-1898-1677638252.jpg?dpr=1&fit=crop&h=0&q=100&s=NeyKbOipMzANDXNICpGlRA&w=1200', map: 'My Khe Beach Da Nang', text: '最適合早晨散步或看日落；10 月海況與天候變化快，游泳以現場旗幟與飯店建議為準。' },
  { name: '靈應寺・山茶半島', type: '一趟景色半日', image: 'https://danang.gov.vn/documents/20121/0/chua-linh-ung-son-tra.jpg', map: 'Linh Ung Pagoda Son Tra', text: '山與海同框的輕量景點。只安排靈應寺與沿途觀景，避免把半島騎成高強度行程。' },
  { name: '五行山', type: '10/8 的晴天備案', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1000&q=80', map: 'Marble Mountains Da Nang', text: '有石階與洞穴，適合早上去、午後回飯店；若下雨或不想爬，就直接換成 SPA 日。' }
];

function render() {
  document.querySelector('#schedule-grid').innerHTML = days.map(day => `<article class="day-card"><img src="${day.image}" alt="${day.alt}" loading="lazy" /><div class="day-content"><div class="day-meta"><span>${day.date}</span><span>${day.place}</span></div><h3>${day.title}</h3><p class="focus">${day.focus}</p><ol>${day.plan.map(item => `<li>${item}</li>`).join('')}</ol><p class="weather-plan"><b>雨天／彈性：</b>${day.fallback}</p><div class="card-bottom"><span>${day.tag}</span><a href="${maps(day.map)}" target="_blank" rel="noopener">Google Maps ↗</a></div></div></article>`).join('');
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

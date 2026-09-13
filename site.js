const maps = name => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name)}`;

const days = [
  { date: '10/3（六）', place: '會安', title: '抵達後，只試探性地看一眼燈籠', image: 'https://izitour.com/media/ckeditor/hoi-an-vietnam-1.webp', alt: '會安河岸燈籠', focus: '峴港機場 → Hotel Royal Hoi An', plan: ['18:10 - 19:30｜落地、入境、提領行李；保留排隊與延誤緩衝。', '約 19:40 - 21:00｜包車或 Grab 直接到會安飯店，途中不繞峴港市區。', '21:15 後｜先辦入住與找近距離餐食；還有精神才去安會橋／河岸散步 20–30 分鐘。'], fallback: 'Red Bean 最後點餐雖到 21:45，但抵達日變數太多，不建議訂今晚。', map: 'Hotel Royal Hoi An Danang, The Legacy Riverfront Resort & Spa', tag: '抵達日留白' },
  { date: '10/4（日）', place: '會安', title: '睡飽逛古城，下午順路挑絲巾', image: 'https://bvhttdl.mediacdn.vn/2019/12/4/22-1575444930391357177624-1575454914343-15754549150641583342735.jpg', alt: '會安日本橋', focus: '古城 + Metiseko + Red Bean + 選配 Memories', plan: ['09:00 - 10:15｜起床、慢慢吃飯店早餐與準備；不設早場景點。', '10:45 - 13:30｜從日本橋往東逛陳富街，中途吃午餐，只選一間會館。', '13:30 - 15:10｜續走古城核心，14:25 左右抵達 Metiseko 挑絲巾；這是順路停點，不需折返。', '15:15 後｜先回飯店休息；想看秀則 16:45 Red Bean→18:35 Memories Land→20:00 主秀，不看秀則 18:30 再吃晚餐。'], fallback: 'Memories Show 通常雨中照演；若雷雨、積水或交通不穩，仍以當日官方與飯店判斷為準。', map: 'Metiseko Hoi An 140 Tran Phu', tag: '下午購物最順路' },
  { date: '10/5（一）', place: '巴拿山', title: '睡飽再上山，用午後與翌日看兩次天氣', image: 'https://mediaen.vietnamplus.vn/images/cc571c067c64d4f85fb35f04673bf2968c14e8b40b6bd340d8146a8023dc5221ece1bcdfc256efeeae6dd06768e18dfb/7_1.jpg', alt: '巴拿山金橋', focus: '會安 → Mercure Bà Nà Hills', plan: ['09:00 - 10:15｜起床、早餐與退房；確認山頂即時天氣和 Mercure 房客入口。', '10:30 - 12:30｜包車前往巴拿山，山腳辦票、交接行李並拍下當日纜車圖。', '12:30 - 14:30｜上山、午餐與寄放行李；不再把第一站硬排成金橋。', '15:00 - 晚餐｜依能見度選金橋或法國村／室內區；金橋另保留 10/6 上午的第二次機會。'], fallback: '晚出發會放棄上午第一個天氣窗口，但換來符合你們作息的節奏；住宿一晚仍有兩個觀察雲況的時段。', map: 'Mercure Danang French Village Bana Hills', tag: '午後＋翌日上午看雲' },
  { date: '10/6（二）', place: '巴拿山 → 峴港', title: '早餐後看雲，下午再換成海', image: 'https://vcdn1-dulich.vnecdn.net/2023/03/01/bai-mykhe-jpeg-167763815-6011-1898-1677638252.jpg?dpr=1&fit=crop&h=0&q=100&s=NeyKbOipMzANDXNICpGlRA&w=1200', alt: '美溪海灘', focus: 'Mercure Bà Nà Hills → M Hotel Danang', plan: ['09:00 - 10:15｜起床、早餐、確認能見度與跨區纜車；先辦退房並寄放行李。', '10:30 - 12:00｜天晴走金橋與花園；霧雨就留法國村或室內區，不追景點。', '12:00 - 14:30｜午餐、取行李、搭纜車下山；接車時間保留天候緩衝。', '14:30 - 16:00｜包車前往峴港，入住後只留飯店休息與海邊晚餐。'], fallback: '若上午仍是濃霧，就接受「雲中巴拿山」版本；不為等待雲開犧牲後續住宿時間。', map: 'Golden Bridge Ba Na Hills', tag: '晚起版山海切換' },
  { date: '10/7（三）', place: '山茶半島', title: '晚一點出門，去看山與海', image: 'https://vcdn1-dulich.vnecdn.net/2023/03/01/bai-mykhe-jpeg-167763815-6011-1898-1677638252.jpg?dpr=1&fit=crop&h=0&q=100&s=NeyKbOipMzANDXNICpGlRA&w=1200', alt: '峴港海岸與山景', focus: 'M Hotel 渡假日 + 靈應寺', plan: ['09:30 - 13:30｜不設鬧鐘的飯店上午：早餐、房間、泳池或沙灘任選。', '14:00 - 15:30｜回房整理、下午茶或午睡，把出門留給較舒服的光線。', '15:30 - 18:00｜包車到靈應寺與山茶海景；只停寺院與一處觀景點，不環半島。', '18:30 後｜回市區或海邊晚餐，選離飯店順路的地點。'], fallback: '下雨就改成 M Hotel 下午茶＋SPA／咖啡館，完全不需補課。', map: 'Linh Ung Pagoda Son Tra', tag: '景色半日' },
  { date: '10/8（四）', place: '自由選擇', title: '留給天氣，也留給當下的心情', image: 'https://media.mia.vn/uploads/blog-du-lich/bai-bien-my-khe-da-nang-lang-nguoi-ngam-nhin-1-trong-6-bai-bien-dep-nhat-hanh-tinh-01-1636298582.jpeg', alt: '峴港海灘', focus: 'SPA / 五行山 / 海邊，三選一', plan: ['09:00 - 10:30｜早餐、換裝與看天氣；不在早餐前塞活動。', '10:30 - 13:00｜晴天選五行山；雨天或想完全放空就預約 SPA。五行山有石階，穿好走的鞋。', '13:00 - 16:30｜回飯店午餐與休息，再用一次下午茶；這是最後一個完整渡假下午。', '17:30 - 晚上｜韓江河畔晚餐或海邊日落二選一；伴手禮最多保留一小段時間。'], fallback: '前三天若有因下雨取消的景點，才移到今天；否則保持 SPA 日。', map: 'Marble Mountains Da Nang', tag: '彈性保留日' },
  { date: '10/9（五）', place: '回程', title: '把最後半天留給舒服的收尾', image: 'https://hopjourneys.com/wp-content/uploads/2024/05/My-Khe-Beach.png', alt: '美溪海灘晨景', focus: '海邊早餐 → DAD 19:45', plan: ['09:00 - 10:30｜早餐、整理行李與證件；不設鬧鐘追日出。', '10:30 - 15:30｜依退房時間寄放行李，海邊散步、午餐、按摩或咖啡擇二。', '16:30 - 16:45｜由飯店出發往機場，對應 IT552 19:45 起飛。'], fallback: '下雨就把散步換成飯店附近咖啡，行程仍然完整。', map: 'Da Nang International Airport', tag: '從容返程' }
];

const hoiAnPlan = [
  { day: '10/3 · 抵達夜', title: '不預約，用體力決定', steps: [
    ['18:10–19:30', '入境與行李', '接送預留延誤；不在機場排任何非必要行程。'],
    ['19:40–21:00', '直接前往 Hotel Royal', '抵達會安後先入住，若餓就以飯店或附近餐食為主。'],
    ['21:15–21:45', '選配河岸短走', '班機準時且精神好，才去安會橋看燈籠；最晚半小時就回飯店。']
  ]},
  { day: '10/4 · 完整日', title: '睡飽後由西向東，絲巾是下午的順路停點', steps: [
    ['09:00–10:15', '起床、飯店早餐', '保留梳洗與準備時間，最早 10:30、建議 10:45 再出發。'],
    ['10:45–12:15', '日本橋 → 古城西段', '由飯店步行進古城，沿陳富街往東；看日本橋、廣肇會館與街巷即可。'],
    ['12:15–13:30', '古城午餐／咖啡', '在動線中段找順眼的店，不為名店跨城。'],
    ['13:30–14:25', '古城中段 → 福建會館', '慢慢往東走，只挑一間會館入內；下雨則改成有騎樓與室內的停點。'],
    ['14:25–15:10', 'Metiseko 絲巾購物', '140 Trần Phú 位於這條東行路線後段；直接說只看 mulberry silk scarves，不做衣服。'],
    ['15:10–16:30', '回飯店休息', '購物後叫車或慢走回飯店，至少留約 75 分鐘放行李、午睡或換裝。'],
    ['16:30–18:10', 'Red Bean 提早晚餐', '若要看秀，建議訂 16:45；也能利用 16:30–18:30 的飲品 Happy Hour。'],
    ['18:15–19:40', '前往 Memories Land', '叫車前往，先逛園區與小型演出；19:40 前往主舞台。'],
    ['20:00–21:00', 'Hoi An Memories Show', '目前官方時刻為 20:00–21:00。雨季優先選 HIGH／VIP 遮蔽座位。'],
    ['21:15 後', '回飯店', '今晚不再加河船或宵夜行程。']
  ]},
  { day: '10/5 · 離開會安', title: '照平常節奏退房，不補塞購物', steps: [
    ['09:00–10:15', '起床、早餐、退房', '確認山頂天氣、車輛與 Mercure 房客入口。'],
    ['10:30', '出發前往巴拿山', '不再安排絲綢村或補買；晚出發的代價是少一個上午天氣窗口，但住宿仍保有當日下午與翌日上午兩次機會。']
  ]}
];

const hoiAnPlaces = [
  { name: 'Metiseko Hoi An', label: '首選｜真正以絲巾為目標', image: 'https://metiseko.com/cdn/shop/files/banner-2_370x230%402x.jpg?v=1613739097', text: '官方有獨立桑蠶絲絲巾系列，越南製絲料與手工網版印花；旗艦店在古城 140 Trần Phú，每日 08:30–21:30。設計感、材質資訊與口碑最完整。', map: 'Metiseko 140 Tran Phu Hoi An', site: 'https://metiseko.com/collections/the-scarf-collection', siteText: '先看絲巾款式' },
  { name: 'Hoi An Silk Village', label: '選配｜想理解真絲工藝', image: 'https://statics.vinpearl.com/Hoi-An-Silk-Village-2_1693229081.jpg', text: '在 28 Nguyễn Tất Thành 展示養蠶、抽絲與織造，也有商品區。適合把購物變成約 60 分鐘文化體驗；不同來源所列時段不一致，去前應先電話確認。', map: 'Hoi An Silk Village 28 Nguyen Tat Thanh', site: 'https://dltm.vnptit3.vn/en/langluahoian', siteText: '查看旅遊單位介紹' },
  { name: 'Red Bean Hoi An', label: '已指定｜建議提早晚餐', image: 'https://lasiestaresorts.com/wp-content/uploads/2025/12/smallRed-Bean-Restaurant_5083.jpg', text: '位於 132 Hùng Vương，午餐至晚餐 11:30 開始、最後點餐 21:45；若搭配主秀，16:45–18:10 最順，也正好碰上 16:30–18:30 Happy Hour。', map: 'Red Bean Hoi An 132 Hung Vuong', site: 'https://hoian.redbeanrestaurants.com/story', siteText: '查看官方餐廳資訊' },
  { name: 'Hoi An Memories Land', label: '選配｜10/4 晚上', image: 'https://hoianmemoriesland.com/public/media/bigshow_kuha_m1.webp', text: '園區小型演出約 17:00–20:00，主秀 20:00–21:00。主秀為戶外大型舞台；官方稱一般下雨仍演出，HIGH／VIP 為遮蔽席，ECO 通常提供雨衣。', map: 'Hoi An Memories Land 88 Tran Quang Khai', site: 'https://hoianmemoriesland.com/en/performance-schedule', siteText: '查看官方表演時刻' }
];

const banaPlan = [
  { day: '10/5 · 第一天', title: '午間上山，午後依雲況選區', steps: [
    ['09:00–10:15', '會安慢早餐、退房', '出門前看巴拿山山頂即時雲況；把外套、雨具與防水袋放隨身包。'],
    ['10:30–12:00', '包車到山腳', '車程抓 75–90 分鐘並留緩衝；房客入口與一般遊客入口不同，照 Mercure 指示報到。'],
    ['12:00–12:30', '辦票、交接行李、問末班車', '確認票券是否含纜車／園區、7 號線及跨區路線；拍下最新地圖和當日表演時刻。'],
    ['12:30–14:15', '上山與午餐', '先抵達法國村或飯店端，不把午餐與金橋綁在一起；找有座位的餐廳即可。'],
    ['14:15–15:00', '寄放行李／入住休息', '房間準備好就休息 30–45 分鐘，保留體力與乾衣服。'],
    ['15:15–17:15', '法國村 → 月亮城堡', '晴天散步看教堂、日蝕廣場；下雨改 Fantasy Park 或月亮城堡 4D 室內體驗。'],
    ['17:15–18:15', '第二個天氣判斷點', '若雲開且跨區纜車仍運行，可去金橋看晚光；務必先問回程末班。否則留在法國村看入夜。'],
    ['18:30 後', '晚餐與飯店夜色', '日遊團退去後慢慢拍法國村。冷、濕或累就提早回房，今晚不安排硬性表演。']
  ]},
  { day: '10/6 · 第二天', title: '睡飽後再用一次金橋機會', steps: [
    ['09:00–10:00', '早餐與能見度確認', '照平常時間起床；邊吃早餐邊向櫃檯確認跨區纜車、退房與行李寄放。'],
    ['10:00–10:30', '退房、寄放行李', '先完成退房再遊覽，避免為了回房收拾把時間壓到最後。'],
    ['10:30–11:45', '金橋 → Le Jardin d’Amour', '天晴才依現場路線前往；金橋先拍全景與合照，花園選一小段即可。'],
    ['11:45–12:30', '回法國村／雨天室內替代', '若階梯濕滑或雨勢轉大，靈應寺可刪；霧雨直接改 Fantasy Park 或咖啡。'],
    ['12:30–13:30', '午餐、取行李', '不執著單一餐廳；預留纜車排隊和路線切換時間。'],
    ['13:30–14:30', '搭纜車下山', '實際班次向 Mercure 確認；若天候延誤，立即通知接車司機。'],
    ['14:30–16:00', '包車前往 M Hotel', '抵達後不再排景點，把傍晚留給房間、泳池或海邊。']
  ]}
];

const banaZones = [
  { name: '金橋・花園・靈應寺', label: '中層｜好天氣優先', image: 'https://mediaen.vietnamplus.vn/images/cc571c067c64d4f85fb35f04673bf2968c14e8b40b6bd340d8146a8023dc5221ece1bcdfc256efeeae6dd06768e18dfb/7_1.jpg', text: '金橋、Le Jardin d’Amour、酒窖與靈應寺集中在同一層。建議順走，不在雲霧中反覆排拍照隊。', map: 'Golden Bridge Ba Na Hills' },
  { name: '法國村・飯店', label: '山頂｜住宿主場', image: 'https://sun-ecommerce-cdn.azureedge.net/ecommerce/service-sites/asset/SunWorldBaNaHill/google-doc/post_id_19250/AD_4nXdF633gp80gags3DvLJz51Uip9Z-DP6kbmCXDZStDBa6tbfSiE1yYvNSIeY-eRTaHF2HsI9kycQG_SMUIakCkDAn20qc2P8dTRR2UbBt0eK9BCjuYo3FQKrUqQkeZy2oPzlqA3rVE91g8BTYRLGxr5t8y6WUpqngQx-HzBXbQ-LcDuWuT0=s2048.webp', text: '教堂、廣場、餐飲與 Mercure 都在這一帶；最適合傍晚日遊客散去後，以及隔天清晨慢拍。', map: 'French Village Ba Na Hills' },
  { name: 'Fantasy Park・月亮城堡', label: '雨天保底｜室內為主', image: 'https://sun-ecommerce-cdn.azureedge.net/ecommerce/service-sites/asset/SunWorldBaNaHill/google-doc/post_id_5560/AD_4nXei4aLd6DTvJ9O-T4IPzY4G-f9hHJLgkf-a7Ig7OeUli09H27gkvl-gEu--gqNBnqkHMA9CuSi__zx5XP9R6_d4bgBlv4AsVmpCUA1vrEnnRFnbjSUyXDuj87bVqHSiLIILjpbqJsPzqtPrqdypFIEsmkUZ1XneGN_mRwrSmb_c8xk9=s2048.webp', text: 'Fantasy Park 與月亮城堡可接住霧雨時段；部分遊戲、蠟像館或酒窖需另付費，現場再決定即可。', map: 'Fantasy Park Ba Na Hills' }
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
  document.querySelector('#hoian-plan').innerHTML = hoiAnPlan.map(block => `<article class="hoian-day"><p>${block.day}</p><h3>${block.title}</h3><ol>${block.steps.map(step => `<li><time>${step[0]}</time><div><strong>${step[1]}</strong><p>${step[2]}</p></div></li>`).join('')}</ol></article>`).join('');
  document.querySelector('#hoian-places').innerHTML = hoiAnPlaces.map(place => `<article class="hoian-place"><img src="${place.image}" alt="${place.name}" loading="lazy" /><div><span>${place.label}</span><h3>${place.name}</h3><p>${place.text}</p><div class="place-links"><a href="${maps(place.map)}" target="_blank" rel="noopener">Google Maps ↗</a><a href="${place.site}" target="_blank" rel="noopener">${place.siteText} ↗</a></div></div></article>`).join('');
  document.querySelector('#bana-plan').innerHTML = banaPlan.map(block => `<article class="bana-day"><p>${block.day}</p><h3>${block.title}</h3><ol>${block.steps.map(step => `<li><time>${step[0]}</time><div><strong>${step[1]}</strong><p>${step[2]}</p></div></li>`).join('')}</ol></article>`).join('');
  document.querySelector('#bana-zones').innerHTML = banaZones.map(zone => `<article class="bana-zone"><img src="${zone.image}" alt="${zone.name}" loading="lazy" /><div><span>${zone.label}</span><h3>${zone.name}</h3><p>${zone.text}</p><a href="${maps(zone.map)}" target="_blank" rel="noopener">Google Maps ↗</a></div></article>`).join('');
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

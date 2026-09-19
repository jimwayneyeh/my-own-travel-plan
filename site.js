const maps = name => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name)}`;

const days = [
  { date: '10/3（六）', place: '會安', title: '抵達後，只試探性地看一眼燈籠', image: 'https://izitour.com/media/ckeditor/hoi-an-vietnam-1.webp', alt: '會安河岸燈籠', focus: '峴港機場 → Hotel Royal Hoi An', plan: ['18:10 - 19:30｜落地、入境、提領行李；保留排隊與延誤緩衝。', '約 19:40 - 21:00｜包車或 Grab 直接到會安飯店，途中不繞峴港市區。', '21:15 後｜先辦入住與找近距離餐食；還有精神才去安會橋／河岸散步 20–30 分鐘。'], fallback: 'Red Bean 最後點餐雖到 21:45，但抵達日變數太多，不建議訂今晚。', map: 'Hotel Royal Hoi An Danang, The Legacy Riverfront Resort & Spa', tag: '抵達日留白' },
  { date: '10/4（日）', place: '會安', title: '睡飽逛古城，下午順路挑絲巾', image: 'https://bvhttdl.mediacdn.vn/2019/12/4/22-1575444930391357177624-1575454914343-15754549150641583342735.jpg', alt: '會安日本橋', focus: '古城 + Metiseko + Red Bean + 會安夜', plan: ['09:00 - 10:15｜起床、慢慢吃飯店早餐與準備；不設早場景點。', '10:45 - 13:30｜從日本橋往東逛陳富街，中途吃午餐，只選一間會館。', '13:30 - 15:10｜續走古城核心，14:25 左右抵達 Metiseko 挑絲巾；這是順路停點，不需折返。', '15:15 後｜先回飯店休息；夜間在 Memories Show 與 Red Bean 後的河岸散步之間二選一。'], fallback: '若下大雨或不想受票券約束，就正常吃晚餐後回飯店。', map: 'Metiseko Hoi An 140 Tran Phu', tag: '整晚留在會安' },
  { date: '10/5（一）', place: '巴拿山', title: '10:30 準時離開會安，先到房客櫃檯再上山', image: 'https://mediaen.vietnamplus.vn/images/cc571c067c64d4f85fb35f04673bf2968c14e8b40b6bd340d8146a8023dc5221ece1bcdfc256efeeae6dd06768e18dfb/7_1.jpg', alt: '巴拿山金橋', focus: '會安 → Thác Tóc Tiên 山下櫃檯 → Mercure', plan: ['09:00 - 10:15｜早餐、最後收拾與退房；向 Mercure 確認當日上山纜車狀態。', '10:30 - 12:00｜預約包車直達 Thác Tóc Tiên Station，不在途中加景點。', '12:00 - 13:00｜到山下 Front Desk 核對訂房、處理房客纜車票並交接行李。', '13:00 - 15:00｜依當日指定路線搭纜車到法國村，午餐後 14:00 起入住休息。'], fallback: '飯店目前列上山纜車 08:00–16:30；10:30 出發有足夠緩衝，但不建議拖到中午後才離開會安。', map: 'Thac Toc Tien Station Ba Na Hills', tag: '10:30 準時出發' },
  { date: '10/6（二）', place: '巴拿山 → 峴港', title: '早餐後看雲，入住後去吃東林', image: 'https://danangfantasticity.com/wp-content/uploads/2024/03/chiem-nguong-bien-my-khe-1-trong-10-bai-bien-dep-nhat-chau-a-05.jpg', alt: '美溪海灘', focus: 'Mercure Bà Nà Hills → M Hotel → ★ Đông Lâm', plan: ['09:00 - 10:15｜早餐、退房與最後一次確認金橋能見度。', '10:30 - 14:30｜依天氣走金橋或室內區，午餐後取行李、搭纜車下山。', '14:30 - 17:30｜包車前往峴港、入住並使用下午茶。', '19:00 - 20:30｜前往 55 Trần Bạch Đằng 的東林晚餐；訂位時確認烤鴨是否需預訂。'], fallback: '若巴拿山延誤到無法準時用餐，改吃飯店旁 4SEAs，東林與 10/7 晚餐對調。', map: 'Dong Lam Restaurant 55 Tran Bach Dang Da Nang', tag: '★ 餐廳優先' },
  { date: '10/7（三）', place: '峴港北線', title: '飯店待到下午，再去山茶半島看海', image: 'https://danangfantasticity.com/wp-content/uploads/2022/01/linh-ung-pagoda-must-see-destination-for-tourists-to-da-nang-3.png', alt: '山茶半島靈應寺', focus: 'M Hotel 渡假上午 + 靈應寺 + 海鮮／越南菜', plan: ['09:00 - 10:30｜早餐；上午繼續使用房間、泳池、海灘或下午茶權益。', '15:30 - 16:00｜包車沿海岸往北，不安排棋盤頂或繞完整座半島。', '16:00 - 17:20｜靈應寺、觀音像與海景；寺院慢走約一小時。', '18:30 後｜Ăn Thôi 越南菜正選；若更想吃海鮮 buffet，改訂回程順路的 Poseidon。'], fallback: '山區雨大就取消寺院；4SEAs 與 Galina 都在飯店旁，可臨時改成近距離晚餐。', map: 'An Thoi Restaurant 114 Bach Dang Da Nang', tag: '晚餐二選一' },
  { date: '10/8（四）', place: '峴港南線＋河岸', title: '五行山是唯一大景點，晚上吃 Gang Yu', image: 'https://danangfantasticity.com/wp-content/uploads/2025/08/danh-thang-ngu-hanh-son-da-nang-002.jpg', alt: '五行山玄空洞', focus: '五行山 + 飯店午休 + APEC 公園／龍橋 + ★ Gang Yu', plan: ['09:00 - 10:30｜早餐、看雨勢與地面狀況；10:45 左右搭車南下。', '11:05 - 13:30｜五行山只走水山、玄空洞與一處觀景台；可搭電梯上山。', '13:45 - 17:00｜簡單午餐後回 M Hotel，午睡、下午茶或泳池。', '17:30 - 20:30｜APEC 公園與龍橋短走，19:00 到 87 Yên Bái 吃 Gang Yu Hot Pot。'], fallback: '下雨改占婆博物館；Gang Yu 照常保留，景點縮短後回飯店休息再出門。', map: 'Gang Yu Hot Pot 87 Yen Bai Da Nang', tag: '★ 19:00 建議訂位' },
  { date: '10/9（五）', place: '峴港市中心 → 回程', title: '漢市場接 LUK LAK，留足機場緩衝', image: 'https://danangfantasticity.com/wp-content/uploads/2023/10/nhung-khu-cho-noi-tieng-tai-da-nang-khong-the-bo-qua-scaled.jpg', alt: '峴港漢市場', focus: '漢市場 → ★ LUK LAK → DAD 19:45', plan: ['09:00 - 10:30｜早餐、整理行李與證件；依飯店時間退房並寄放行李。', '11:15 - 12:40｜漢市場買咖啡、零食與乾貨；先列清單，不逛服飾樓層。', '13:00 - 14:15｜步行到 28 Bạch Đằng 的 LUK LAK；務必在 13:45 最後點餐前完成點餐。', '14:15 - 16:30｜只留咖啡或短散步，回飯店取行李後最晚 16:30–16:45 前往機場。'], fallback: '若前一天雨天已去漢市場，仍保留 LUK LAK；上午改成飯店休息，不再安排按摩。', map: 'LUK LAK Da Nang 28 Bach Dang', tag: '★ 回程午餐' }
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
    ['09:00–10:15', '起床、早餐、退房', '確認山頂天氣、預約車輛，以及 Thác Tóc Tiên 山下櫃檯與上山纜車狀態。'],
    ['10:30', '準時出發前往巴拿山', '由會安直達 Thác Tóc Tiên Station；不再安排絲綢村或補買，也不把出發延到中午之後。']
  ]}
];

const hoiAnPlaces = [
  { name: 'Metiseko Hoi An', label: '首選｜真正以絲巾為目標', image: 'https://metiseko.com/cdn/shop/files/banner-2_370x230%402x.jpg?v=1613739097', text: '官方有獨立桑蠶絲絲巾系列，越南製絲料與手工網版印花；旗艦店在古城 140 Trần Phú，每日 08:30–21:30。設計感、材質資訊與口碑最完整。', map: 'Metiseko 140 Tran Phu Hoi An', site: 'https://metiseko.com/collections/the-scarf-collection', siteText: '先看絲巾款式' },
  { name: 'Hoi An Silk Village', label: '選配｜想理解真絲工藝', image: 'https://statics.vinpearl.com/Hoi-An-Silk-Village-2_1693229081.jpg', text: '在 28 Nguyễn Tất Thành 展示養蠶、抽絲與織造，也有商品區。適合把購物變成約 60 分鐘文化體驗；不同來源所列時段不一致，去前應先電話確認。', map: 'Hoi An Silk Village 28 Nguyen Tat Thanh', site: 'https://dltm.vnptit3.vn/en/langluahoian', siteText: '查看旅遊單位介紹' },
  { name: 'Red Bean Hoi An', label: '已指定｜建議提早晚餐', image: 'https://lasiestaresorts.com/wp-content/uploads/2025/12/smallRed-Bean-Restaurant_5083.jpg', text: '位於 132 Hùng Vương，午餐至晚餐 11:30 開始、最後點餐 21:45；若搭配主秀，16:45–18:10 最順，也正好碰上 16:30–18:30 Happy Hour。', map: 'Red Bean Hoi An 132 Hung Vuong', site: 'https://hoian.redbeanrestaurants.com/story', siteText: '查看官方餐廳資訊' },
  { name: 'Hoi An Memories Land', label: '選配｜10/4 晚上', image: 'https://hoianmemoriesland.com/public/media/bigshow_kuha_m1.webp', text: '園區小型演出約 17:00–20:00，主秀 20:00–21:00。主秀為戶外大型舞台；官方稱一般下雨仍演出，HIGH／VIP 為遮蔽席，ECO 通常提供雨衣。', map: 'Hoi An Memories Land 88 Tran Quang Khai', site: 'https://hoianmemoriesland.com/en/performance-schedule', siteText: '查看官方表演時刻' }
];

const banaPlan = [
  { day: '10/5 · 第一天', title: '10:30 離開會安，先完成房客報到再上山', steps: [
    ['09:00–10:15', '會安慢早餐、最後收拾與退房', '邊吃早餐邊向 Mercure 確認當日纜車狀態與合適抵達時間；把證件、藥品、電子用品、外套與雨具放隨身包。'],
    ['10:30–12:00', '預約包車直達 Thác Tóc Tiên Station', '官方估會安古城到山腳約 75–90 分鐘；車輛無法直達山上飯店，因此請司機以 Mercure 的 Downhill Front Desk 為下車目標。'],
    ['12:00–13:00', '山下櫃檯報到、辦票與交接行李', '出示訂房確認，在 Thác Tóc Tiên Station 的飯店櫃檯確認房客優惠票、當日上山路線與跨區班次；bellman 會協助把大件行李送往纜車登車區。'],
    ['13:00–14:00', '依工作人員指示搭纜車到法國村', '纜車線會隨天候與營運調整，不預設固定 7 號線；抵達山頂後再由 bellman 協助把行李送往飯店報到區。'],
    ['14:00–15:00', '入住、簡單午餐與休息', '官方列 14:00 起入住；若提早抵達或房間未好，就先寄放行李、吃簡單午餐，不先繞去金橋。'],
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

const danangPlan = [
  { day: '10/6 · 入住日', title: '把移動疲勞留在飯店裡', note: '今天沒有市區清單', steps: [
    ['16:00–17:30', '入住、下午茶、休息', '先使用 M Hotel 已含的下午茶與房間設施；巴拿山若延誤，這段自然縮短。'],
    ['17:30–18:30', '美溪沙灘短走', '看當天風浪與警示旗；只沿飯店正前方散步，不特地叫車追日落。'],
    ['19:00–20:30', '★ 東林餐廳', '55 Trần Bạch Đằng 距飯店不遠；建議訂位並先問烤鴨是否需要預訂。']
  ]},
  { day: '10/7 · 北線', title: '下午才出發的山茶半島', note: '唯一主角：靈應寺', steps: [
    ['09:00–15:15', '早餐＋完整飯店上午', '房間、泳池、海灘、午餐與午睡自由組合；不要為了「半日遊」提早起床。'],
    ['15:30–16:00', '沿海岸北上', '建議包車往返並請司機等候；不騎機車挑戰山路。'],
    ['16:00–17:20', '山茶靈應寺', '看 67 公尺觀音像、寺院與回望峴港海岸；衣著遮肩過膝、降低音量。'],
    ['17:20–18:10', '沿海返回', '視天候停一處安全觀景點即可，不追猴、不餵食，也不再上棋盤頂。'],
    ['18:30 後', 'Ăn Thôi／Poseidon 二選一', '想吃越南菜選 Ăn Thôi；想吃海鮮 buffet 選山茶回程順路的 Vincom Poseidon，不要兩間都排。']
  ]},
  { day: '10/8 · 南線＋河岸', title: '一個大景點，搭配一個城市夜晚', note: '晴天版／雨天可整段替換', steps: [
    ['09:00–10:30', '早餐與天氣決定', '地面乾、雨勢小才選五行山；連續降雨就直接啟動博物館版本。'],
    ['10:45–13:30', '五行山・水山精華', '搭車約 15–20 分鐘；電梯上山後走玄空洞、寺院與一處觀景台，不加走全部洞窟。'],
    ['13:45–17:00', '午餐＋M Hotel 午休', '回海邊吃午餐、午睡或下午茶，傍晚才再次出門。'],
    ['17:30–18:15', 'APEC 公園', '在韓江南岸散步看建築與河景；下雨可直接略過。'],
    ['18:15–20:30', '龍橋短走＋★ Gang Yu', '把龍橋當夜景；約 19:00 到 87 Yên Bái 吃火鍋，避免午餐也選 buffet。']
  ]},
  { day: '10/9 · 回程日', title: '中心區一次完成，然後去機場', note: '最晚 16:30–16:45 離開飯店', steps: [
    ['09:00–10:45', '早餐、收拾、寄放行李', '退房時間依飯店當日規定；護照、票券與易碎品留隨身。'],
    ['11:15–12:45', '漢市場伴手禮', '主攻咖啡、腰果、餅乾與包裝乾貨；確認保存期限、密封與入境規範。'],
    ['13:00–14:15', '★ LUK LAK 午餐', '28 Bạch Đằng 距漢市場步行可達；官方列午餐最後點餐 13:45，不要延後入座。'],
    ['14:15–15:30', '咖啡或河岸短走', '不再塞按摩，避免回飯店取行李與叫車變得倉促。'],
    ['15:30–16:30', '取行李、前往機場', 'IT552 19:45 起飛；保留市區車流、報到與安檢緩衝。']
  ]}
];

const danangPlaces = [
  { name: '美溪沙灘・M Hotel', label: '基地｜10/6–10/9', image: 'https://danangfantasticity.com/wp-content/uploads/2024/03/chiem-nguong-bien-my-khe-1-trong-10-bai-bien-dep-nhat-chau-a-05.jpg', text: '三晚都以海邊飯店為主場。10/6 只短走、10/7 上午完整留白；十月海況變化快，游泳以現場旗幟與飯店建議為準。', map: 'M Hotel Danang My Khe Beach', site: 'https://danangfantasticity.com/en/discovery/my-khe-beach-one-of-the-ten-most-beautiful-beaches-in-asia', siteText: '峴港官方介紹' },
  { name: '山茶半島靈應寺', label: '10/7｜北線唯一主角', image: 'https://danangfantasticity.com/wp-content/uploads/2022/01/linh-ung-pagoda-must-see-destination-for-tourists-to-da-nang-3.png', text: '距市中心約 10 公里，寺院面海，可看 67 公尺觀音像與整段城市海岸。官方建議停留約一小時；這次不再追加棋盤頂。', map: 'Linh Ung Pagoda Son Tra Da Nang', site: 'https://danangfantasticity.com/en/linh-ung-pagoda-must-see-destination-for-tourists-to-da-nang', siteText: '峴港官方介紹' },
  { name: '五行山・水山', label: '10/8｜晴天大景點', image: 'https://danangfantasticity.com/wp-content/uploads/2025/08/danh-thang-ngu-hanh-son-da-nang-002.jpg', text: '文章建議抓 3–4 小時；你們採晚起精華版，只走水山、玄空洞、寺院與一處觀景台。即使搭電梯仍有石階，雨天不去。', map: 'The Marble Mountains Da Nang Gate 2', site: 'https://danangfantasticity.com/en/the-marble-mountains', siteText: '峴港官方資訊' },
  { name: 'APEC 公園・龍橋河岸', label: '10/8｜城市夜色', image: 'https://danangfantasticity.com/wp-content/uploads/2024/05/cau-rong-phun-nuoc-phun-lua-trong-cac-dem-dien-ra-dai-hoi-the-thao-hoc-sinh-dong-nam-a-lan-thu-13-1.jpg', text: '兩處同在韓江南側，適合五行山午休後再出門。官方目前列龍橋噴火為週五、六、日 21:00；10/8 週四只看橋景即可。', map: 'APEC Park Da Nang', site: 'https://danangfantasticity.com/en/key-times-to-save-for-your-da-nang-travel-itinerary', siteText: '查看官方時刻' },
  { name: '漢市場', label: '10/9｜最後採買', image: 'https://danangfantasticity.com/wp-content/uploads/2023/10/nhung-khu-cho-noi-tieng-tai-da-nang-khong-the-bo-qua-scaled.jpg', text: '位於 119 Trần Phú，官方資料列每日 06:00–19:00。把咖啡、乾貨與零食留到回程日購買，較好整理行李；不安排大宗生鮮。', map: 'Han Market Da Nang 119 Tran Phu', site: 'https://danangfantasticity.com/en/discovery/famous-local-markets-in-danang', siteText: '峴港官方市場資訊' },
  { name: '占婆雕刻博物館', label: '10/8｜雨天替換', image: 'https://danangfantasticity.com/wp-content/uploads/2020/07/tong-quan-bao-tang-dieu-khac-cham-da-nang-01.jpg', text: '若五行山濕滑，改來這裡看占婆砂岩雕刻約一小時，再接漢市場。2026 官方資料列 07:30–17:00、一般票 60,000 越南盾；出發前仍需重查。', map: 'Da Nang Museum of Cham Sculpture', site: 'https://danangfantasticity.com/en/news/plan-your-da-nang-journey-2026-updated-admission-prices-for-attractions-and-tourist-sites', siteText: '查看 2026 官方資訊' }
];

const danangOptions = [
  { fit: '最符合你的玩水動機｜半日至一日', name: 'Mikazuki Water Park 365', time: '建議 10/7 臨時取代飯店上午＋靈應寺', text: '你不用為刺激滑水道而去：室內有 140 公尺溫水漂漂河、造浪池與龍滑道，戶外另有 450 公尺 Fuji River。官方列 09:00–19:00，2026 參考票價平日成人 350,000 越南盾。', plan: '前一晚看天氣與心情再決定；若只想漂漂河，抓 11:30–17:00 已足夠。十月先電話確認戶外 Fuji River 是否營運；即使下雨，室內區仍可玩。', map: 'Mikazuki Water Park 365 Da Nang', source: 'https://www.mikazukiwaterpark.com/service-information', sourceText: '官方設施與開放資訊' },
  { fit: '雨天最好用｜2–3 小時', name: '峴港博物館＋三輪車城市巡遊', time: '可替換 10/7 靈應寺或 10/8 五行山', text: '新館位於 42–44 Bạch Đằng，08:00–17:00；看完可從占婆博物館出發，選 45 分鐘河岸三輪車，或約 80 分鐘的三輪車＋越南咖啡手沖體驗。', plan: '這組比單逛博物館更有參與感，又不需要穿泳衣。咖啡體驗需至少 2 人並建議提前 2 小時預約；若只想隨興，就選短版三輪車。', map: 'Da Nang Museum 42 Bach Dang', source: 'https://danangfantasticity.com/en/discover-da-nang-with-cyclo-tour', sourceText: '峴港官方三輪車方案' },
  { fit: '晚上想有節目｜約 60 分鐘', name: 'The Heritage Show', time: '優先放 10/7；17:00 場後再吃晚餐', text: '2026 新演出，以音樂、舞蹈與互動舞台串起順化、占婆與會安；官方列 17:00–18:00、19:45–20:45，地點在 02 Vũ Văn Dũng。', plan: '如果 10/4 已看 Memories Show，兩者題材略有重疊，可不選；若 10/4 沒看秀或 10/7 下雨，17:00 場接 18:30 晚餐很順。訂票前再次確認當日場次。', map: 'The Heritage Show 02 Vu Van Dung Da Nang', source: 'https://theheritageshow.com.vn/', sourceText: '官方節目資訊' },
  { fit: '零壓力無聊救援｜1–4 小時', name: 'AEON Mall Thanh Khê・Timezone', time: '任何雨天傍晚皆可臨時啟動', text: '2026/7 新開的商場；Timezone 在 3 樓，主打街機、VR 與保齡球，同棟還有 Galaxy CineX。平日商場時段約 10:00–22:00，適合不想再看古蹟時直接去玩。', plan: '這不是必看景點，但最適合「現在很無聊，兩小時內想找事做」：不用預約、玩多少付多少，累了就吃飯或回飯店。電影是否有英文／中文字幕要看當日場次。', map: 'AEON Mall Da Nang Thanh Khe', source: 'https://danangthanhkhe.aeonmall-vietnam.com/vi/danh-muc-cua-hang/timezone', sourceText: 'AEON 官方店舖資訊' }
];

const restaurants = [
  { name: '★ Đông Lâm Restaurant', status: '已排入｜10/6 19:00', tone: 'must', hours: '參考時段 11:00–14:00、17:00–22:00', address: '2F, 55 Trần Bạch Đằng', plan: '距 M Hotel 不遠，最適合入住夜。巴拿山若延誤，就先吃隔壁 4SEAs，並把東林移到 10/7。不同平台的晚間結束時間有 21:00／22:00 落差，訂位時請直接確認。', map: 'Dong Lam Restaurant 55 Tran Bach Dang Da Nang', source: 'https://khamphadanang.vn/dia-diem/dong-lam-restaurant/', sourceText: '地址與時段' },
  { name: '★ Gang Yu Hot Pot', status: '已排入｜10/8 19:00', tone: 'must', hours: '官方 10:30–14:00、17:00–22:30', address: '87 Yên Bái, Hải Châu', plan: '位在龍橋與海州市區一帶，接 APEC 公園／龍橋最順。火鍋用餐時間較長，建議 19:00 訂位；當天午餐保持簡單。', map: 'Gang Yu Hot Pot 87 Yen Bai Da Nang', source: 'https://gangyuhotpot.vn/', sourceText: '官方網站' },
  { name: '★ LUK LAK', status: '已排入｜10/9 13:00', tone: 'must', hours: '官方 07:00–14:30、18:00–22:00；午餐 13:45 最後點餐', address: '28 Bạch Đằng, Hải Châu', plan: '與漢市場同在市中心，步行銜接非常順。唯一風險是午餐最後點餐較早，因此漢市場 12:40 就要收尾，不能把午餐延到 14:00。', map: 'LUK LAK Da Nang 28 Bach Dang', source: 'https://luklak.vn/slideshow_home/luklak-da-nang/', sourceText: '官方地址與時段' },
  { name: 'Ăn Thôi', status: '10/7 晚餐正選', tone: 'primary', hours: 'MICHELIN 10:30–21:30', address: '114 Bạch Đằng, Hải Châu', plan: '山茶半島後跨到韓江西岸，約 18:30 用餐。適合把海鮮之外的越南菜補進來；若決定吃 Poseidon buffet，就刪除這間。', map: 'An Thoi Restaurant 114 Bach Dang Da Nang', source: 'https://guide.michelin.com/hk/zh_HK/da-nang-region/da-nang_2984390/restaurant/an-thoi', sourceText: 'MICHELIN Guide' },
  { name: 'Poseidon Đà Nẵng Premium', status: '10/7 晚餐替代', tone: 'choice', hours: '參考 11:00–14:00、17:30–22:00', address: 'L3 Vincom Plaza, 910A Ngô Quyền', plan: '位置在山茶半島回 M Hotel 的路上，動線比 Ăn Thôi 更直接。它是完整海鮮 buffet，應與 Ăn Thôi 二選一，並建議事先訂位。', map: 'Buffet Poseidon Da Nang Premium Vincom Plaza', source: 'https://buffetposeidon.com/', sourceText: '官方分店資料' },
  { name: 'Buffet Hải Sản 4SEAs', status: '近飯店備案', tone: 'backup', hours: '官方 11:00–14:00、17:00–22:00', address: '268 Võ Nguyên Giáp', plan: 'M Hotel 在 286 Võ Nguyên Giáp，兩者幾乎相鄰，是巴拿山延誤、下雨或不想過橋時最好用的備案。10/8 五行山後接午餐會太趕，不建議硬趕 14:00 收餐。', map: '4SEAs Buffet Hai San 268 Vo Nguyen Giap Da Nang', source: 'https://4seas.vn/lien-he/', sourceText: '官方聯絡資訊' },
  { name: 'Galina Restaurant Đà Nẵng', status: '可行但不優先', tone: 'hold', hours: '近期公告 08:00–22:00', address: '254 Võ Nguyên Giáp', plan: '同樣就在 M Hotel 旁，地點完全不難；但餐廳也以婚宴、團體與活動場地為主，海鮮 buffet 是否每日固定供應不夠明確。若沒有搭配泥漿浴，這趟可先不排；想去務必先問當日散客供餐形式。', map: 'Galina Restaurant Da Nang 254 Vo Nguyen Giap', source: 'https://www.haidanggroup.com/en/ve-chung-toi', sourceText: '品牌與地址' }
];

const stays = [
  { dates: '10/3 - 10/5', name: 'Hotel Royal Hoi An Danang', room: '豪華大床房 · 2 位', notes: '含早餐、停車、Wi‑Fi、健身中心。此訂單不可退款。', map: 'Hotel Royal Hoi An Danang, The Legacy Riverfront Resort & Spa' },
  { dates: '10/5 - 10/6', name: 'Mercure Danang French Village Bana Hills', room: 'Superior King Room · 2 位', notes: '含早餐、Wi‑Fi。此訂單不可退款；憑證未列園區與纜車門票，需另確認。', map: 'Mercure Danang French Village Bana Hills' },
  { dates: '10/6 - 10/9', name: 'M HOTEL DANANG', room: '海景雙床浴缸房 · 2 位', notes: '每日早餐、下午茶、迷你吧、迎賓水果與餐飲 9 折；10/1 前可免費取消。', map: 'M HOTEL DANANG' }
];

const events = [
  { status: '目前不能排', title: '亞洲樂園／Da Nang Downtown 已停業改造', body: '原 Asia Park 已更名為 Da Nang Downtown，但當地官方媒體公告自 2025/9/3 起停止營運、準備新計畫；截至目前沒有足以把它排進 2026/10 行程的重開公告。出發前若有正式重開消息再評估。', link: 'https://dnrt.vn/chi_tiet-159566', linkText: '查看峴港廣播電視台公告' },
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
  document.querySelector('#schedule-grid').innerHTML = days.map((day, index) => `<article class="day-card"><img src="${day.image}" alt="${day.alt}" loading="lazy" /><div class="day-content"><div class="day-meta"><span>${day.date}</span><span>${day.place}</span></div><h3>${day.title}</h3><p class="focus">${day.focus}</p><ol>${day.plan.map(item => `<li>${item}</li>`).join('')}</ol><p class="weather-plan"><b>雨天／彈性：</b>${day.fallback}</p><div class="card-bottom"><span>${day.tag}</span><div class="day-links"><a href="days/2026-10-${String(index + 3).padStart(2, '0')}.html">每日地圖與細節 →</a><a href="${maps(day.map)}" target="_blank" rel="noopener">Google Maps ↗</a></div></div></div></article>`).join('');
  document.querySelector('#hoian-plan').innerHTML = hoiAnPlan.map(block => `<article class="hoian-day"><p>${block.day}</p><h3>${block.title}</h3><ol>${block.steps.map(step => `<li><time>${step[0]}</time><div><strong>${step[1]}</strong><p>${step[2]}</p></div></li>`).join('')}</ol></article>`).join('');
  document.querySelector('#hoian-places').innerHTML = hoiAnPlaces.map(place => `<article class="hoian-place"><img src="${place.image}" alt="${place.name}" loading="lazy" /><div><span>${place.label}</span><h3>${place.name}</h3><p>${place.text}</p><div class="place-links"><a href="${maps(place.map)}" target="_blank" rel="noopener">Google Maps ↗</a><a href="${place.site}" target="_blank" rel="noopener">${place.siteText} ↗</a></div></div></article>`).join('');
  document.querySelector('#bana-plan').innerHTML = banaPlan.map(block => `<article class="bana-day"><p>${block.day}</p><h3>${block.title}</h3><ol>${block.steps.map(step => `<li><time>${step[0]}</time><div><strong>${step[1]}</strong><p>${step[2]}</p></div></li>`).join('')}</ol></article>`).join('');
  document.querySelector('#bana-zones').innerHTML = banaZones.map(zone => `<article class="bana-zone"><img src="${zone.image}" alt="${zone.name}" loading="lazy" /><div><span>${zone.label}</span><h3>${zone.name}</h3><p>${zone.text}</p><a href="${maps(zone.map)}" target="_blank" rel="noopener">Google Maps ↗</a></div></article>`).join('');
  document.querySelector('#danang-plan').innerHTML = danangPlan.map(block => `<article class="danang-day"><div class="danang-day-head"><p>${block.day}</p><span>${block.note}</span></div><h3>${block.title}</h3><ol>${block.steps.map(step => `<li><time>${step[0]}</time><div><strong>${step[1]}</strong><p>${step[2]}</p></div></li>`).join('')}</ol></article>`).join('');
  document.querySelector('#danang-places').innerHTML = danangPlaces.map(place => `<article class="danang-place"><img src="${place.image}" alt="${place.name}" loading="lazy" /><div><span>${place.label}</span><h3>${place.name}</h3><p>${place.text}</p><div class="place-links"><a href="${maps(place.map)}" target="_blank" rel="noopener">Google Maps ↗</a><a href="${place.site}" target="_blank" rel="noopener">${place.siteText} ↗</a></div></div></article>`).join('');
  document.querySelector('#danang-options').innerHTML = danangOptions.map(option => `<article class="activity-option"><div class="activity-option-head"><span>${option.fit}</span><small>${option.time}</small></div><h3>${option.name}</h3><p>${option.text}</p><div class="activity-plan"><strong>怎麼啟動</strong><p>${option.plan}</p></div><div class="place-links"><a href="${maps(option.map)}" target="_blank" rel="noopener">Google Maps ↗</a><a href="${option.source}" target="_blank" rel="noopener">${option.sourceText} ↗</a></div></article>`).join('');
  document.querySelector('#restaurant-grid').innerHTML = restaurants.map(place => `<article class="restaurant-card ${place.tone}"><div class="restaurant-card-head"><span>${place.status}</span><span>${place.hours}</span></div><h3>${place.name}</h3><p class="restaurant-address">${place.address}</p><p>${place.plan}</p><div class="place-links"><a href="${maps(place.map)}" target="_blank" rel="noopener">Google Maps ↗</a><a href="${place.source}" target="_blank" rel="noopener">${place.sourceText} ↗</a></div></article>`).join('');
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

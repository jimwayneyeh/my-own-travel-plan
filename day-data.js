const hotelSupplyData = {
  royal: {
    hotel: { name: 'Hotel Royal Hoi An Danang', coords: [15.8766713, 108.3198424], note: '39 Đào Duy Từ；10/3–10/5 住宿' },
    summary: '最近的 King Minimart 就在同一條 Đào Duy Từ 街上，適合臨時補水、飲料與包裝零食；不用為了採買繞進古城。',
    checked: '店家與營業時間於 2026/09/27 依 Google Maps 核對；出發前仍建議再點連結確認。',
    stores: [
      {
        name: 'Tạp Hóa King Minimart', type: '最近的便利店', coords: [15.8767773, 108.320855],
        distance: '約 110 公尺・步行 1–2 分鐘', hours: '每日 06:00–23:00',
        description: '小型街坊便利店，可買瓶裝水、汽水、啤酒、泡麵、餅乾與簡單日用品。距離最有優勢；結帳前看清標價並保留收據即可。',
        mapQuery: 'Tạp Hóa King Minimart, 33 Đào Duy Từ, Hội An',
        source: 'https://www.tripadvisor.co.nz/Attraction_Review-g298082-d19085776-Reviews-Mini_Mart_King-Hoi_An_Quang_Nam_Province.html',
        sourceText: '地址與店家介紹'
      }
    ]
  },
  mercure: {
    hotel: { name: 'Mercure Danang French Village Bana Hills', coords: [15.997428, 107.988292], note: '法國村山頂住宿；10/5–10/6' },
    summary: '山頂查不到可可靠定位的一般超商；以下是飯店建築群內最實用的飲料／點心補給點。想買平價包裝零食，最好在離開會安前先買好，並於現場確認攜入規定。',
    checked: 'Café Postal 採飯店官網 2026/09/27 公布時間；Starbucks 採同日 Google Maps 時間。山區營運可能隨纜車、天候或活動調整。',
    stores: [
      {
        name: 'Café Postal', type: '飯店內咖啡與點心', coords: [15.9974291, 107.9878834],
        distance: '飯店建築群內・步行約 1–2 分鐘', hours: '06:30–21:30；正餐菜單 11:00–21:00',
        description: '位於 Hôtel de Paris，可外帶咖啡，也有每日蛋糕、烘焙點心與甜點；比一般超商貴，但晚上想補飲料或甜食最方便。',
        mapQuery: 'Cafe Postal Ba Na Hills',
        source: 'https://www.mercure-danang-banahills-french-village.com/restaurant-bars/cafe-postal/',
        sourceText: 'Mercure 官方營業資訊'
      },
      {
        name: 'Starbucks Ba Na Hills', type: '日間外帶飲料', coords: [15.9974352, 107.9882701],
        distance: 'Morin Hotel 1 樓・步行約 1–2 分鐘', hours: '每日 08:30–16:30',
        description: '提供外帶咖啡、冷飲與糕點，適合白天順手補給；16:30 後不要把它當晚間備案。',
        mapQuery: 'Starbucks Ba Na Hills',
        source: 'https://www.starbucks.vn/', sourceText: '品牌官網'
      }
    ]
  },
  mhotel: {
    hotel: { name: 'M Hotel Danang', coords: [16.05165, 108.248034], note: '286 Võ Nguyên Giáp；10/6–10/9 住宿' },
    summary: '臨時補水或宵夜零食首選 24 小時的 TD MART；想買咖啡、果乾、糖果等在地伴手禮，Quà Đà Nẵng 更近。',
    checked: '店家位置與營業時間於 2026/09/27 核對；節慶或臨時調整仍以當日 Google Maps／店門公告為準。',
    stores: [
      {
        name: 'Quà Đà Nẵng', type: '最近的特產零食店', coords: [16.0520849, 108.2478592],
        distance: '約 50 公尺・步行不到 1 分鐘', hours: '每日 06:30–23:00',
        description: '以峴港伴手禮為主，可找咖啡、茶、果乾、糖果與包裝零食；不是日常型超商，但非常適合回程前補買可帶走的零嘴。',
        mapQuery: 'Quà Đà Nẵng, Đỗ Bá, Đà Nẵng',
        source: 'https://evendo.com/locations/vietnam/da-nang/ngu-hanh-son-district/shop/qua-da-nang',
        sourceText: '營業時間與商品概況'
      },
      {
        name: 'Cửa Hàng Tiện Lợi TD MART', type: '24 小時便利店', coords: [16.0540323, 108.2470521],
        distance: '約 300 公尺・步行 4–5 分鐘', hours: '每日 24 小時',
        description: '位於 Nesta Danang Hotel，商品比伴手禮店更接近日常超商，可買水、飲料、泡麵、巧克力、餅乾與簡單生活用品。',
        mapQuery: 'Cửa Hàng Tiện Lợi TD MART, 268 Võ Nguyên Giáp, Đà Nẵng',
        source: 'https://www.google.com/maps/search/?api=1&query=C%E1%BB%ADa%20H%C3%A0ng%20Ti%E1%BB%87n%20L%E1%BB%A3i%20TD%20MART%20268%20V%C3%B5%20Nguy%C3%AAn%20Gi%C3%A1p',
        sourceText: 'Google Maps 店家資訊'
      }
    ]
  }
};

const tripDayData = {
  '2026-10-03': {
    date: '10/3（六）', place: '峴港機場 → 會安', eyebrow: 'ARRIVAL DAY · KEEP IT LIGHT',
    title: '抵達後，只試探性地看一眼燈籠',
    summary: 'IT551 表定 16:30 由桃園起飛，預計 15:50–16:00 左右開始登機，實際以登機證為準。在桃園 T1 報到前買少量密封包裝零嘴並放進託運箱，通關後再吃完整正餐；零嘴不帶進客艙，留到峴港領到行李、完成海關後才取出。',
    decision: '去程是桃園直飛峴港，不經香港。機上不吃、不攜帶非虎航販售外食進客艙；在峴港出關後從託運箱取出零嘴，先與司機會合再於上車前吃，到 Hotel Royal 辦好入住後仍去 Bới Cơm 吃熱食晚餐。',
    places: {
      tpe: { name: '桃園國際機場第一航廈', coords: [25.0797, 121.2342], note: '報到、通關與登機前正餐' },
      dad: { name: '峴港國際機場', coords: [16.0439, 108.1993], note: '入境、行李與接送集合點' },
      royal: { name: 'Hotel Royal Hoi An Danang', coords: [15.8766713, 108.3198424], note: '兩晚住宿基地' },
      anhoi: { name: '安會橋／河岸', coords: [15.8775, 108.3268], note: '有體力才去的短散步' }
    },
    mainRoute: ['dad', 'royal'],
    alternatives: [{ label: '精神尚可：飯店 → 安會橋短走 → 飯店', ids: ['royal', 'anhoi', 'royal'] }],
    choices: [
      { label: '時間已校正', title: '16:30 是起飛，約 15:50–16:00 登機', text: '10/3 IT551 為桃園 T1 16:30 起飛、18:10 抵達峴港 T2。台灣比越南快一小時，實際飛行約 2 小時 40 分；16:00 左右應已在登機門或機上，不是到機場的時間。', when: '建議 13:30 前抵達桃園第一航廈；當天以航空公司通知、機場看板與登機證時間為準。', source: 'https://legacy-www.tigerairtw.com/zh-tw/useful-link/conditions-carriage', sourceText: '台灣虎航官方報到與登機規定' },
      { label: '虎航外食規定', title: '可在桃園買，但要報到前放進託運箱', text: '虎航 FAQ 明文寫著「請勿攜帶非本機販售之外食上機」，因此落地零嘴不放手提包。在 T1 非管制區購買後，先放入託運箱再到虎航櫃檯辦理託運。', when: '只買少量、常溫耐放、密封原包裝的餅乾、能量棒或堅果；避開鮮果、蔬菜、散裝食物與含肉製品。', source: 'https://www.tigerairtw.com/zh-TW/support/faq/about-baggages', sourceText: '台灣虎航官方外食 FAQ' },
      { label: '不買機上餐的吃法', title: '桃園完整正餐＋峴港託運箱零嘴＋會安晚餐', text: '先把落地零嘴放進託運箱，14:30–15:15 再於 T1 通關後吃由主食、蛋白質與青菜組成的完整正餐。機上不吃外食；落地領箱、完成海關後才取出零嘴。', when: '桃園正餐不吃過量油炸、辛辣或高鹽食物，但要有足夠主食與蛋白質，才能支撐到峴港落地。', source: 'https://map.taoyuan-airport.com/', sourceText: '桃園機場官方室內地圖' },
      { label: '已確認接送', title: 'Klook 7 人座接機', text: 'KPN_Airport Transfer 已確認 Toyota Fortuner／Innova 或同級，2 位乘客，司機追蹤 IT551，於入境出口舉牌接人並從實際抵達起免費等候 120 分鐘。', when: '出發前在 Klook App 再確認兩件大型行李與供應商聯絡方式；私人訂單編號不放在公開網站。' },
      { label: '峴港機場只留快速備案', title: '出關後先找司機，不坐下吃正餐', text: '峴港 T2 官方列出的多數餐飲在出境管制區，入境旅客出關後不能回去使用。公開到達區若當時有咖啡、麵包或便利店，只做 5–10 分鐘快速採買。', when: '必須先與舉牌司機會合，並請司機同意等待；不臨時點餐、不讓已會合的司機無消息久等。', source: 'https://explore.danangairportterminal.vn/facility/burger-king/', sourceText: '峴港 T2 官方餐飲位置範例' },
      { label: '晚餐主方案', title: 'Bới Cơm：同條路上的越南家常菜', text: '飯店在 39 Dao Duy Tu，餐廳在 20 Dao Duy Tu；官網標示每日 07:30–23:00。辦好入住後直接步行前往，吃飯、青菜與一道主菜即可，不用再叫車。', when: '預計 21:15–21:30 入座；當天下午用電話或訂位表單再確認廚房最後點餐時間。', source: 'https://boicomhoianrestaurant.com/contact/', sourceText: '餐廳官方地址與營業時間' },
      { label: '不出飯店的備案', title: 'The Deck：塔帕斯與飲料，不當作保證有正餐', text: '館內頂樓 The Deck 官方標示飲料服務到午夜，菜色定位是 tapas 搭酒。入住時先請櫃檯確認當晚廚房最後點餐與還有哪些熱食，有接單才上樓。', when: '下大雨、已很累，或只想簡單吃一點時選；Wakaku 雖營業到 22:00，但 21:00 後才抵達太趕，不列主方案。', source: 'https://hotelroyalhoian.vn/restaurants-bars/the-deck/', sourceText: 'Hotel Royal 官方餐飲資訊' },
      { label: '有體力才啟動', title: '安會橋與河岸短走', text: '完成入住、吃到東西，而且沒有大雨時才去；只看燈籠與河岸 20–30 分鐘，不搭船。', when: '若晚餐後已超過 22:15 或感到疲累，直接取消。', mapId: 'anhoi' }
    ],
    timeline: [
      { time: '13:30–14:30（台灣）', title: '買落地零嘴、報到與通關', placeId: 'tpe', text: '在 T1 非管制區先買少量密封包裝零嘴，放進託運箱後才到台灣虎航當日指定櫃檯辦報到與行李託運；接著通過安檢與證照查驗。', highlights: ['台灣虎航由桃園第一航廈出發', '零嘴不放手提包、不帶進客艙', '選餅乾、能量棒或堅果，不選鮮果與含肉食品'], warnings: ['報到截止為表定起飛前 45 分鐘，但不以截止時間倒推到場', '當天若排隊較長，不為了買零嘴拖延報到'] },
      { time: '14:30–15:15（台灣）', title: '桃園 T1 管制區內完整正餐', placeId: 'tpe', text: '選有米飯或麵食、蛋白質與適量青菜的簡單套餐，吃到足以支撐下機、但不會腹脹的程度，不用追名店或跨區找餐廳。', highlights: ['用餐時同時補充水分', '登機前不再購買準備帶上飛機的外食', '15:35–15:40 前抵達登機門'], warnings: ['不吃過量油炸、辛辣或高鹽食物，減少機上口渴與腸胃不適'] },
      { time: '約 15:50（台灣）–18:10（越南）', title: '登機與 IT551 飛行', placeId: 'tpe', text: '16:30 是桃園表定起飛；登機時間尚未能事先確定，實際以登機證為準。台灣與越南有一小時時差，18:10 為越南當地時間。', highlights: ['不預購機上餐點', '不攜帶、不食用非虎航販售的外食', '若機上需要飲料或食物，只使用機上販售品'], warnings: ['除沖泡牛奶與服藥等人道考量外，虎航機上不提供冷、熱水', '登機程序會在起飛前 10 分鐘結束，不要在最後時間離開登機門'] },
      { time: '18:10–19:30', title: '落地、入境、提領行李與會合', placeId: 'dad', text: '完成入境與提領行李後，到第 2 航廈入境出口找 KLOOK 標誌與主要旅客姓名牌。', highlights: ['司機會追蹤 IT551 航班動態', '免費等候時間從實際抵達起算 120 分鐘', '出航廈前可處理網路與少量現金'], warnings: ['航班明顯延誤時仍用 Klook App 聯絡供應商確認接送'] },
      { time: '約 19:40–21:00', title: '取出託運箱零嘴、搭接送前往會安', placeId: 'royal', text: '領到行李、完成海關並進入公開到達區後，才從託運箱取出桃園購買的零嘴。先與舉牌司機會合；若已明顯飢餓，告知司機後於上車前吃少量，然後搭車直達 Hotel Royal。', highlights: ['KPN_Airport Transfer；Toyota Fortuner／Innova 或同級', '上車前核對司機、車牌、目的地與行李件數', '落地零嘴只是擔保、不是代替會安晚餐'], warnings: ['不在車內吃湯汁、掉屑或強烈氣味食物', '訂單規則最多 2 件 28 吋特大行李；若最後帶 29 吋箱，行前先在 App 向供應商確認'] },
      { time: '21:00–22:15', title: '入住、步行去吃 Bới Cơm', placeId: 'royal', text: '先辦入住、放好證件與行李；主方案是步行到同條 Dao Duy Tu 街上的 Bới Cơm。若大雨或已非常疲累，就在入住時先問 The Deck 還能否點熱食。', highlights: ['Bới Cơm 官方營業至 23:00', 'The Deck 飲料服務到午夜，但熱食截單時間需現場確認', '順便詢問隔日早餐時間、退房規定與叫車方式'], warnings: ['不把 Red Bean 排在今晚，班機與入境變數太大', '飯店官網說明不允許外帶熟食進入，不規劃買外食回房吃'] },
      { time: '22:15 後', title: '選配：安會橋與河岸', placeId: 'anhoi', optional: true, text: '只有吃完晚餐、沒有下大雨而且精神仍好才出發，最多走 20–30 分鐘。', highlights: ['看燈籠倒影與古城夜色即可，不排河船'], warnings: ['已經很晚，吃飽或潮濕地滑就直接回房'] }
    ]
  },
  '2026-10-04': {
    date: '10/4（日）', place: '會安古城', eyebrow: 'HOI AN · ONE FULL DAY',
    title: '由西向東慢走，下午順路挑絲巾',
    summary: '09:00 起床吃早餐，約 10:45 才離開飯店。白天沿古城由日本橋往福建會館與 Metiseko 前進；購物後先回房休息。晚上留在會安，在 Memories Show 與 Red Bean 後的河岸散步之間二選一。',
    decision: '今晚只留在會安，在演出與自由散步之間二選一，保住晚餐、古城夜色與休息品質。',
    places: {
      royal: { name: 'Hotel Royal Hoi An Danang', coords: [15.8766713, 108.3198424], note: '早餐、午休與住宿' },
      bridge: { name: '日本橋', coords: [15.8772, 108.3262], note: '古城西側起點' },
      canton: { name: '廣肇會館', coords: [15.8770, 108.3281], note: '沿陳富街順路停靠' },
      fujian: { name: '福建會館', coords: [15.8764, 108.3323], note: '主殿、天井與華人建築' },
      metiseko: { name: 'Metiseko Hoi An', coords: [15.8765, 108.3336], note: '桑蠶絲絲巾購物' },
      redbean: { name: 'Red Bean Hoi An', coords: [15.8862, 108.3243], note: '指定餐廳' },
      memories: { name: 'Hoi An Memories Land', coords: [15.8724, 108.3425], note: '選配園區與 20:00 主秀' },
      river: { name: '會安河岸', coords: [15.8760, 108.3287], note: '不看秀時的輕鬆替代' }
    },
    mainRoute: ['royal', 'bridge', 'canton', 'fujian', 'metiseko', 'royal', 'redbean', 'memories', 'royal'],
    alternatives: [{ label: '不看秀：Red Bean → 河岸散步 → 飯店', ids: ['redbean', 'river', 'royal'] }],
    choices: [
      { label: '晚間方案 A', title: 'Red Bean ＋ Memories Show', text: '16:45 提早晚餐，18:35 左右前往園區，20:00 看主秀。適合想把會安夜晚變成完整表演體驗。', when: '願意配合表演時間，且已確認當日演出與座位。', mapId: 'memories', source: 'https://hoianmemoriesland.com/en/performance-schedule', sourceText: '官方表演時刻' },
      { label: '晚間方案 B', title: 'Red Bean ＋ 河岸自由散步', text: '18:30 左右正常吃晚餐，餐後依體力走河岸，不被票券與進場時間綁住。', when: '下雨、想更慢，或不想連續看表演時選這個。', mapId: 'river' },
      { label: '購物補充', title: 'Metiseko 主攻；Silk Village 不硬加', text: 'Metiseko 直接看 100% mulberry silk 絲巾並確認尺寸、收邊與洗滌方式。Silk Village 只有想多花約一小時了解工藝時才加。', when: '購物後仍保留回飯店休息，不用為了比較店家折返。', mapId: 'metiseko', source: 'https://metiseko.com/collections/the-scarf-collection', sourceText: '先看官方絲巾款式' }
    ],
    timeline: [
      { time: '09:00–10:15', title: '飯店早餐與準備', placeId: 'royal', text: '照平常作息慢慢吃，不設任何早場預約。', highlights: ['隨身帶雨具、防水袋和可裝絲巾的乾燥袋'], warnings: ['午後可能陣雨，鞋子以防滑好走為優先'] },
      { time: '10:45–12:15', title: '日本橋 → 古城西段', placeId: 'bridge', text: '由飯店步行進古城，從日本橋沿陳富街向東慢走。', highlights: ['日本橋看木構、屋頂與橋寺一體的空間', '廣肇會館看入口石雕、天井與會館格局'], warnings: ['古城票券與開放房舍依現場公告；不用每間會館都進'] },
      { time: '12:15–13:30', title: '古城午餐／咖啡', placeId: 'canton', text: '在動線中段找順眼的店，不為名店跨城。', highlights: ['午餐保持適量，晚上仍有 Red Bean'], warnings: ['室內冷氣和戶外濕熱切換大，薄外套可留包內'] },
      { time: '13:30–14:25', title: '福建會館', placeId: 'fujian', text: '下午只選一間代表性會館，保留購物和休息時間。', highlights: ['看三進空間、媽祖信仰、天井採光與屋脊裝飾'], warnings: ['尊重祭祀空間；香爐與供桌前避免久站拍攝'] },
      { time: '14:25–15:10', title: 'Metiseko 絲巾購物', placeId: 'metiseko', text: '直接說只看 mulberry silk scarves，不做衣服。', highlights: ['確認 100% mulberry silk、尺寸、印花正反面和收邊', '保留材質清楚的收據與洗滌方式'], warnings: ['不要只憑光澤判斷真絲；預留 30–45 分鐘就足夠'] },
      { time: '15:10–16:30', title: '回飯店休息', placeId: 'royal', text: '放好絲巾、午睡或換裝，至少保留 75 分鐘。', highlights: ['這段是整天不疲累的關鍵留白'], warnings: ['若午間已淋雨，先更換乾衣鞋再出門'] },
      { time: '16:45–18:10', title: 'Red Bean 提早晚餐', placeId: 'redbean', text: '選 Memories Show 建議 16:45 入座；不看表演可改 18:30 正常晚餐。', highlights: ['先決定夜間方案，再依離席時間訂位'], warnings: ['若用餐延誤，不要冒險趕秀；改成河岸散步即可'] },
      { time: '18:35–21:00', title: '選配：Memories Land', placeId: 'memories', optional: true, text: '先看園區小型演出，19:40 前進主舞台，主秀預計 20:00–21:00。', highlights: ['主舞台看服裝、燈光與大型群舞，不需要再加河船'], warnings: ['戶外演出遇雨以官方當日公告為準；雨季優先 HIGH／VIP 遮蔽席'] }
    ]
  },
  '2026-10-05': {
    date: '10/5（一）', place: '會安 → 巴拿山', eyebrow: 'BÀ NÀ · WEATHER WINDOW 1',
    title: '10:30 離開會安，下午先收山頂核心與室內設施',
    summary: '12:00 左右到 Thác Tóc Tiên 的 Mercure 山下櫃檯，先辦住客優惠票、跨夜／FaceID確認與行李交接；再搭直達法國村的住客線上山。下午先趕17:00關閉的 Moon Castle 影院，傍晚看天氣選法國村、高山滑車或 Fantasy Park，晚上留給住客才有的安靜街景。',
    decision: '10月是雨季高峰：能見度一好立刻走戶外；雷雨、強風或濃霧就留在室內。金橋正選留給10/6住客早班，避免第一天下午跨區來回。',
    places: {
      royal: { name: 'Hotel Royal Hoi An Danang', coords: [15.8766713, 108.3198424], note: '早餐與退房' },
      gate: { name: 'Thác Tóc Tiên Station・Mercure 山下櫃檯', coords: [16.02695, 108.03105], note: '訂房核對、房客纜車票與行李交接' },
      mercure: { name: 'Mercure French Village', coords: [15.9976, 107.9880], note: '住宿與山頂基地' },
      village: { name: '法國村', coords: [15.9972, 107.9874], note: '教堂、廣場與夜景' },
      moon: { name: '月亮城堡', coords: [15.9990, 107.9896], note: '雨天較穩定的室內體驗' },
      golden: { name: '金橋', coords: [15.9950, 107.9963], note: '雲開才前往的選配支線' },
      fantasy: { name: 'Fantasy Park', coords: [15.9975, 107.9890], note: '濃霧或雨勢較大時的備案' },
      coaster: { name: 'Alpine Coaster', coords: [15.9970, 107.9886], note: '晴乾才玩；另付費' }
    },
    mainRoute: ['royal', 'gate', 'mercure', 'village', 'moon', 'village', 'mercure'],
    alternatives: [
      { label: '晴乾選配：法國村 → 高山滑車 → 法國村', ids: ['village', 'coaster', 'village'] },
      { label: '雷雨濃霧：飯店／法國村 → Fantasy Park', ids: ['mercure', 'fantasy', 'mercure'] }
    ],
    choices: [
      { label: '交通已決定', title: '預約 Grab 6 人座', text: '這條路線目前在 App 可正常估價與預約，10:30 日間通常不算難叫；兩人帶兩件 26–29 吋行李仍要選 6 人座，不選一般 4 人座。Grab 可提前最多 90 天預約。', when: '設定 10/5 10:30；上車點選 Hotel Royal Hoi An Danang，下車點選 Toc Tien Station。前一晚確認訂單，當天 10:00 再檢查車況通知。', source: 'https://www.grab.com/vn/en/transport/advance-booking/', sourceText: 'Grab 官方預約說明' },
      { label: '晴乾方案', title: '法國村＋高山滑車', text: '高山滑車有3個入口，官方時段08:30–19:00；16:30–17:30單次參考價VND 70,000。它不含在基本票內，且只在天候允許時運轉。', when: '軌道乾、沒有強風雷雨，而且Moon Castle已玩完。', mapId: 'coaster', source: 'https://sunworld.vn/en/banahills/activities/tube-sliding-boards', sourceText: 'Sun World滑車時間' },
      { label: '霧雨方案', title: 'Moon Castle＋Fantasy Park', text: 'Moon Castle的4D與Flying Eyes官方列08:30–17:00，先玩；Fantasy Park開至19:00，可接住後段雨勢。', when: '濃霧、小雨或戶外設施暫停。', mapId: 'fantasy', source: 'https://sunworld.vn/banahills/tin-tuc-sunworld/sun-world-ba-na-hills-so-do-chi-tiet-huong-dan-tham-quan-tron-ven-2026-19250', sourceText: 'Sun World 2026設施圖解' },
      { label: '上山必要流程', title: '山下櫃檯先辦票、再交行李', text: '車輛只能到 Thác Tóc Tiên Station。先到 Mercure Downhill Front Desk 核對訂房、票券與當日路線，大件行李交由 bellman。', when: '這是固定流程，不把車輛目的地直接設成山頂飯店。', mapId: 'gate', source: 'https://www.mercure-danang-banahills-french-village.com/hotel/getting-here/', sourceText: 'Mercure 抵達說明' }
    ],
    timeline: [
      { time: '09:00–10:15', title: '早餐、最後收拾與退房', placeId: 'royal', text: '邊吃早餐邊向 Mercure 確認當日上山纜車狀態與合適抵達時間；10:15 前完成退房。', highlights: ['訂房憑證、護照、藥品、電子用品、薄外套、雨衣與防水袋放隨身包'], warnings: ['山下天氣不能代表山頂；若遇強風大雨，先直接問飯店纜車是否正常'] },
      { time: '10:30–12:00', title: 'Grab 6 人座前往 Thác Tóc Tiên Station', placeId: 'gate', text: '由 Hotel Royal 出發，途中不加景點。Mercure 官網明確說車輛不能直達山頂飯店，Grab 目的地必須選 Toc Tien Station，並請司機停在 Mercure Downhill Front Desk。', highlights: ['預約資料：10/5 10:30、2 人、2 件大型行李、6 人座', '可傳給司機：Please drop us at Mercure Downhill Front Desk, Thac Toc Tien Station (Ga Thác Tóc Tiên), not the mountaintop hotel.', 'Grab 預約行程的司機聊天室最早可在出發前 45 分鐘使用'], warnings: ['不要只輸入 Mercure 飯店本體後讓司機自行猜下車點', '若 App 顯示取消或無法派車，立即請 Hotel Royal 櫃檯協助叫 7 人座計程車／包車，不要改搭 4 人座'], source: 'https://www.mercure-danang-banahills-french-village.com/hotel/getting-here/', sourceText: 'Mercure 官方抵達與車輛說明' },
      { time: '12:00–13:15', title: '山下櫃檯報到、辦票、FaceID與交接行李', placeId: 'gate', text: '出示Agoda訂房確認；房價只有早餐與Wi‑Fi，所以在這裡詢價購買住客優惠基本票。確認同一張票可用到10/6下午；若住客票適用2026三日政策，必須在第一次刷票前於散客售票處完成FaceID。', highlights: ['直接問：Can we keep visiting after check-out tomorrow and take the cable car down in the afternoon?', '確認可否刷信用卡、拍下兩天開線表與翌日住客早班', '登記10/6清晨金橋班次並確認集合地點'], warnings: ['先確認完票種才刷QR；一般三日票權益需在首次入園前升級', '飯店公布住客抵達／上山窗口08:00–16:30'], source: 'https://www.mercure-danang-banahills-french-village.com/', sourceText: 'Mercure住客票與時間' },
      { time: '13:15–14:00', title: 'Thác Tóc Tiên → L’Indochine 上山', placeId: 'mercure', text: '住客通常由Thác Tóc Tiên搭直達L’Indochine的纜車到法國村；纜車本身估17–20分鐘，加候車、步行與行李交接共抓30–45分鐘。基本／住客票已含，不要另買單段票。', highlights: ['證件、貴重物品、薄外套與雨衣留在隨身包', '抵達後先認清L’Indochine站、巴黎館櫃檯與房間棟別'], warnings: ['實際開線由工作人員指定；雷電或強風可能延誤／暫停'] },
      { time: '14:00–15:00', title: '入住、簡單午餐與休息', placeId: 'mercure', text: '官方建議 14:00 起辦理入住；若房間未好就先寄放行李、吃簡單午餐，不把第一站硬排成金橋。', highlights: ['房間準備好就休息 30–45 分鐘', '確認晚餐、隔日 10:30 前退房與行李寄放安排'], warnings: ['午餐保持簡單，避免排隊名店吃掉午後能見度窗口'] },
      { time: '15:10–16:50', title: '法國村 → 登山小火車2 → Moon Castle', placeId: 'moon', text: '由法國村步行到Giếng Thần站，搭登山小火車2到Hang Rồng；車程很短，但連步行與候車抓10–20分鐘。先玩17:00關閉的Moon Junction 4D與Flying Eyes，兩項都含在基本票內。', highlights: ['沿途順看Eclipse日蝕廣場與Moon Castle建築', '回程同樣搭小火車2，不需另買票'], warnings: ['小火車沒有公開固定日常班表；到站先看當日末班', '濕石板易滑，不為拍照跑動'] },
      { time: '17:00–18:15', title: '晴乾玩滑車；下雨改 Fantasy Park', placeId: 'village', text: '回法國村後依即時天氣切換：晴乾可玩一次高山滑車並逛教堂廣場；雨霧則進Fantasy Park挑2–3項室內設施。', highlights: ['Fantasy Park官方時間08:30–19:00，大多數設施含基本票', '滑車16:30–17:30單次參考價VND 70,000，需另付費'], warnings: ['滑車08:30–19:00但受天候限制；濕軌、強風、雷雨就不要等', '第一天下午不把金橋列正選；除非飯店通知隔日早班取消且此刻視野極佳'] },
      { time: '18:30 後', title: '晚餐與法國村夜色', placeId: 'mercure', text: '日遊客退去後慢慢用餐、看廣場入夜。', highlights: ['這是住山上的優勢，不必再追表演'], warnings: ['冷、濕或累就提早回房，隔天仍有金橋窗口'] }
    ]
  },
  '2026-10-06': {
    date: '10/6（二）', place: '巴拿山 → 峴港', eyebrow: 'BÀ NÀ · WEATHER WINDOW 2',
    title: '清晨住客專車看金橋，中午補一區再從容下山',
    summary: '05:30起床，搭飯店確認的06:00–06:45住客班次前往金橋；08:00左右回法國村吃早餐，10:30前退房寄放行李。之後依天氣只補一區：晴天走花園／心靈區，雨霧進Fantasy Park；約14:00開始下山。',
    decision: '金橋以「人少」優先，不以「保證有遠景」為前提。若雷雨、強風導致早班取消，不硬闖；早餐後再用一次天氣窗口，最晚14:00左右開始回山腳。',
    places: {
      mercure: { name: 'Mercure French Village', coords: [15.9976, 107.9880], note: '早餐、退房與行李' },
      golden: { name: '金橋', coords: [15.9950, 107.9963], note: '第二個能見度窗口' },
      garden: { name: "Le Jardin d'Amour", coords: [15.9952, 107.9954], note: '金橋旁選走一小段' },
      fantasy: { name: 'Fantasy Park', coords: [15.9975, 107.9890], note: '霧雨室內替代' },
      gate: { name: '巴拿山山腳', coords: [15.9981, 107.9960], note: '與司機會合' },
      mhotel: { name: 'M Hotel Danang', coords: [16.05165, 108.248034], note: '峴港三晚住宿基地' },
      beach: { name: '美溪沙灘', coords: [16.0543, 108.2478], note: '有餘裕才短走' },
      donglam: { name: 'Đông Lâm Restaurant', coords: [16.0509, 108.2448], note: '★ 19:00 晚餐' },
      fourseas: { name: 'Buffet Hải Sản 4SEAs', coords: [16.0519, 108.2472], note: '巴拿山延誤備案' }
    },
    mainRoute: ['mercure', 'golden', 'garden', 'mercure', 'gate', 'mhotel', 'beach', 'donglam', 'mhotel'],
    alternatives: [
      { label: '霧雨：飯店 → Fantasy Park → 飯店', ids: ['mercure', 'fantasy', 'mercure'] },
      { label: '下山延誤：M Hotel → 4SEAs', ids: ['mhotel', 'fourseas', 'mhotel'] }
    ],
    choices: [
      { label: '清晨正選', title: '住客早班金橋', text: '官方住宿方案列06:00、06:15、06:30，另有方案列06:15、06:45；實際以10/5晚櫃檯登記為準。由法國村Louvre到Bordeaux的纜車約5分鐘，連步行與候車抓15–25分鐘，票內含。', when: '沒有雷電、強風警報，住客班次照常。', mapId: 'golden', source: 'https://www.mercure-danang-banahills-french-village.com/offers/early-booking-special/', sourceText: 'Mercure清晨金橋班次' },
      { label: '霧雨替代', title: 'Fantasy Park 後提早下山', text: '早班取消或戶外不安全，就先吃早餐退房，10:40後進Fantasy Park；不用為完全沒有視野的金橋跨區等待。', when: '雷雨、強風、濃霧或纜車調整。', mapId: 'fantasy' },
      { label: '晚餐備案', title: '下山延誤就吃 4SEAs', text: '保護纜車與接車緩衝；若無法準時到 Đông Lâm，改吃 M Hotel 旁的 4SEAs，東林再與隔日晚餐對調。', when: '16:30 後才抵達 M Hotel，或不想再叫車。', mapId: 'fourseas' }
    ],
    timeline: [
      { time: '05:30–06:00', title: '起床、看窗外與住客班次', placeId: 'mercure', text: '帶房卡／住客憑證、票券QR、雨衣、薄外套與手機；不用先吃完整早餐。', highlights: ['若能看清對面建築或雲層正在移動，仍值得出發', '可先帶一點乾糧，回程再吃飯店早餐'], warnings: ['強風時不要撐大傘；雷電或飯店取消班次就留在室內'] },
      { time: '06:00–08:00', title: '住客早班：Louvre → Bordeaux → 金橋', placeId: 'golden', text: '依前晚登記搭06:00–06:45間住客班次。Louvre到Bordeaux纜車約5分鐘，連候車與步行估15–25分鐘；抵達先拍金橋，再視能見度與濕滑程度加Le Jardin一小段或靈應寺。有效住客／基本票已含，不另買單段纜車票。', highlights: ['先完成合照與橋身全景，再決定要不要延伸花園', '人少是住宿可控制的優勢；日出與遠景則受雲雨影響'], warnings: ['先問回法國村班次；不要為等雲散錯過09:30早餐截止'] },
      { time: '08:00–09:20', title: '回法國村吃早餐', placeId: 'mercure', text: '沿原路回Bordeaux，搭約5分鐘纜車至Louvre後走回飯店；Mercure早餐06:30–09:30，建議09:20前入場。', highlights: ['早餐已含在訂房中', '回房前再次看天氣，決定退房後補戶外或室內'], warnings: ['不同住宿棟早餐地點可能不同，以入住時餐券／櫃檯說明為準'] },
      { time: '09:20–10:30', title: '收拾、退房並寄放行李', placeId: 'mercure', text: '退房截止10:30；寄放大件行李，確認14:00左右回來取件及下山指定車站。', highlights: ['證件、藥物、電子用品、防水層放隨身包', '通知山下接車司機：預估15:00–15:30到Thác Tóc Tiên，抵達再更新'], warnings: ['不要帶大型行李再次跨區'] },
      { time: '10:40–12:30', title: '只補一區：晴走半山，雨進 Fantasy Park', placeId: 'garden', text: '清晨若只看金橋且現在轉晴，可補花園／心靈區；若雨霧持續，留在法國村一側玩Fantasy Park。基本票包含兩者大多數設施。', highlights: ['Fantasy Park開放08:30–19:00', '晴天也只選花園或心靈區一組，不逐點蒐集'], warnings: ['不要臨時再跨去Moon Castle與金橋兩頭跑', '攀岩、10D、幸運遊戲仍需另付費'] },
      { time: '12:30–15:30', title: '午餐、取行李、纜車下山並接車', placeId: 'gate', text: '12:30回法國村簡單午餐，13:30–14:00取行李後依現場指定線前往L’Indochine，搭Thác Tóc Tiên直達線下山。纜車估17–20分鐘，連步行、候車與領行李抓45–75分鐘；回程已含，不需買第二天基本票。', highlights: ['到山腳後再把實際抵達時間傳給司機', '接車點仍是Mercure Downhill Front Desk／Thác Tóc Tiên'], warnings: ['雷雨或強風可能延誤；寧可取消海邊短走，也不要壓縮安全緩衝'] },
      { time: '16:00–18:30', title: '入住、下午茶、選配海灘短走', placeId: 'mhotel', text: '先使用已含的下午茶與房間設施；有餘裕才去飯店正前方沙灘。', highlights: ['確認早餐、下午茶和泳池使用時段'], warnings: ['海況看警示旗；風浪大就留在飯店'] },
      { time: '19:00–20:30', title: '★ Đông Lâm 晚餐', placeId: 'donglam', text: '短程叫車前往 55 Trần Bạch Đằng，用餐後直接回飯店。', highlights: ['訂位時詢問烤鴨是否必須預訂'], warnings: ['不同平台晚間結束時間有落差，出發前直接向餐廳確認'] }
    ]
  },
  '2026-10-07': {
    date: '10/7（三）', place: '峴港北線', eyebrow: 'DA NANG · RESORT MORNING',
    title: '把上午留給飯店，下午只看山茶半島',
    summary: '正選仍是早餐後留在 M Hotel，15:30 才沿海岸北上靈應寺；但若上午已開始無聊，可以整段換成 Mikazuki、博物館＋表演，或 AEON Timezone，不需要勉強躺到下午。',
    decision: '先保留飯店版，不預購選配；10/6 晚上或 10/7 早餐時，再依天氣與「今天想動多少」決定是否替換。',
    places: {
      mhotel: { name: 'M Hotel Danang', coords: [16.05165, 108.248034], note: '完整渡假上午' },
      linhung: { name: '山茶靈應寺', coords: [16.1004, 108.2775], note: '今日唯一主景點' },
      anthoi: { name: 'Ăn Thôi', coords: [16.0680, 108.2242], note: '18:30 越南菜正選' },
      poseidon: { name: 'Poseidon Premium・Vincom', coords: [16.0712, 108.2292], note: '海鮮 buffet 替代' },
      fourseas: { name: 'Buffet Hải Sản 4SEAs', coords: [16.0519, 108.2472], note: '雨天近飯店備案' },
      galina: { name: 'Galina Restaurant', coords: [16.0513, 108.2474], note: '需先確認散客供餐形式' },
      mikazuki: { name: 'Mikazuki Water Park 365', coords: [16.0935, 108.1485], note: '想玩漂漂河時的半日替換' },
      museum: { name: '峴港博物館', coords: [16.0709, 108.2242], note: '雨天文化選配' },
      heritage: { name: 'The Heritage Show', coords: [16.0738, 108.2380], note: '17:00 場後再吃晚餐' },
      aeon: { name: 'AEON Mall Thanh Khê・Timezone', coords: [16.0665, 108.2043], note: '保齡球、街機、VR 與電影' }
    },
    mainRoute: ['mhotel', 'linhung', 'anthoi', 'mhotel'],
    alternatives: [
      { label: '海鮮 buffet：靈應寺 → Poseidon → 飯店', ids: ['linhung', 'poseidon', 'mhotel'] },
      { label: '大雨近距離：M Hotel → 4SEAs／Galina', ids: ['mhotel', 'fourseas', 'galina', 'mhotel'] },
      { label: '想玩水：M Hotel → Mikazuki → 市區晚餐', ids: ['mhotel', 'mikazuki', 'anthoi', 'mhotel'] },
      { label: '雨天文化：博物館 → 17:00 Heritage Show → 晚餐', ids: ['mhotel', 'museum', 'heritage', 'anthoi', 'mhotel'] },
      { label: '無聊救援：M Hotel → AEON Timezone → 飯店', ids: ['mhotel', 'aeon', 'mhotel'] }
    ],
    choices: [
      { label: '正選', title: '飯店上午＋山茶靈應寺', text: '早餐後留在房間、泳池或海灘，15:30 才出發；下午只看靈應寺與一段海岸景色。', when: '天氣可接受，而且仍想維持渡假節奏。', mapId: 'linhung', source: 'https://danangfantasticity.com/en/linh-ung-pagoda-must-see-destination-for-tourists-to-da-nang', sourceText: '峴港官方介紹' },
      { label: '想玩水', title: 'Mikazuki 半日取代整段北線', text: '11:00 左右出發，以室內漂漂河與溫和設施為主；不再疊加靈應寺。', when: '前一晚確認票價與戶外區營運，而且早上真的想離開飯店。', mapId: 'mikazuki', source: 'https://www.mikazukiwaterpark.com/service-information', sourceText: '官方設施資訊' },
      { label: '下雨文化版', title: '峴港博物館＋選配 Heritage Show', text: '下午先看博物館，若 10/4 沒看 Memories Show，再接 17:00 表演；看過秀就保留博物館與咖啡即可。', when: '戶外不適合、但不想整天待飯店。', mapId: 'museum', source: 'https://theheritageshow.com.vn/', sourceText: 'Heritage Show 官方資訊' },
      { label: '即刻救援', title: 'AEON Timezone', text: '保齡球、街機、VR 或電影任選，玩多久算多久；這是臨時無聊或大雨時最省心的方案。', when: '想現在就出門，又不想預約或看古蹟。', mapId: 'aeon' },
      { label: '晚餐選擇', title: 'Ăn Thôi／Poseidon 二選一', text: '想吃越南菜選 Ăn Thôi；想吃完整海鮮 buffet 選回程順路的 Poseidon，不再加第二間海鮮店。', when: '最晚當天下午決定，Poseidon 建議先訂位。', mapId: 'anthoi' }
    ],
    timeline: [
      { time: '09:00–15:15', title: '早餐＋完整飯店上午', placeId: 'mhotel', text: '房間、泳池、海灘、午餐與午睡自由組合，不為半日遊提早起床。', highlights: ['優先用已含的飯店權益', '午餐保持適量，晚餐才有胃口'], warnings: ['先確認泳池與下午茶的實際時段'] },
      { time: '15:30–16:00', title: '沿海岸北上', placeId: 'linhung', text: '建議包車往返並請司機等候，不騎機車挑戰濕滑山路。', highlights: ['沿途安全位置看峴港海岸線即可'], warnings: ['不追猴、不餵食，也不把棋盤頂加進今天'] },
      { time: '16:00–17:20', title: '山茶靈應寺', placeId: 'linhung', text: '寺院慢走約一小時，主看觀音像、寺院軸線與回望城市海岸。', highlights: ['看 67 公尺觀音像與殿前視野', '留意庭園羅漢像與海天背景'], warnings: ['衣著遮肩過膝、降低音量；地濕時避開邊坡與陡階'] },
      { time: '17:20–18:10', title: '沿海返回', placeId: 'mhotel', text: '視天候停一處安全觀景點，不繞完整座半島。', highlights: ['把夕色當加分，不追固定拍照點'], warnings: ['雨勢或視線轉差就直接回市區'] },
      { time: '18:30–20:00', title: 'Ăn Thôi 越南菜', placeId: 'anthoi', text: '正選是 114 Bạch Đằng 的越南餐廳；若更想吃 buffet，改去回程順路的 Poseidon。', highlights: ['這餐補充越南菜，避免連續大型 buffet'], warnings: ['兩間只選一間；Poseidon 建議事先訂位'] },
      { time: '11:00–17:00', title: '選配：Mikazuki 漂漂河半日', placeId: 'mikazuki', optional: true, text: '若早上已覺得飯店太無聊，就把整段飯店上午與靈應寺換成水上樂園；抵達後先玩室內漂漂河、造浪池，再看天候決定戶外 Fuji River。', highlights: ['室內水溫較不受十月天氣影響', '只挑漂漂河與溫和設施，不必勉強玩高速滑道'], warnings: ['前一晚確認戶外區營運與票價；這是半日替換，不和靈應寺疊加'] },
      { time: '13:30–18:00', title: '選配：博物館＋The Heritage Show', placeId: 'museum', optional: true, text: '雨天可先看峴港博物館，再選 45 分鐘三輪車短遊；16:30 左右前往 17:00 的 The Heritage Show，18:00 結束後吃晚餐。', highlights: ['文化內容、城市移動與舞台表演都有，不會只是一直逛展櫃'], warnings: ['若 10/4 已看 Memories Show，可刪除 Heritage Show，只保留博物館與咖啡體驗'] },
      { time: '隨時 1–4 小時', title: '選配：AEON Timezone', placeId: 'aeon', optional: true, text: '最不需要計畫的救援方案：想走就去玩保齡球、街機或 VR，也可臨時看電影。', highlights: ['適合雨天與「現在就很無聊」的時刻'], warnings: ['電影語言與字幕看當日場次；不要為商場刪掉已訂的星號餐廳'] }
    ]
  },
  '2026-10-08': {
    date: '10/8（四）', place: '峴港南線＋河岸', eyebrow: 'DA NANG · ONE BIG SIGHT',
    title: '五行山是唯一大景點，午休後再進市區',
    summary: '10:45 左右出發去五行山，只走水山、玄空洞與一處觀景台；午後回 M Hotel 完整休息。傍晚再到 APEC 公園與龍橋短走，19:00 吃特別想去的 Gang Yu Hot Pot。',
    decision: '若持續下雨或石階濕滑，整段五行山直接換成占婆雕刻博物館＋漢市場，不挪到隔天補課。',
    places: {
      mhotel: { name: 'M Hotel Danang', coords: [16.05165, 108.248034], note: '早餐、午休與住宿' },
      marble: { name: '五行山・水山', coords: [16.0034, 108.2636], note: '晴天唯一大景點' },
      cham: { name: '占婆雕刻博物館', coords: [16.0604, 108.2236], note: '雨天室內替代' },
      han: { name: '漢市場', coords: [16.0683, 108.2241], note: '雨天替代，可提前買伴手禮' },
      apec: { name: 'APEC 公園', coords: [16.0551, 108.2241], note: '傍晚短走' },
      dragon: { name: '龍橋', coords: [16.0610, 108.2270], note: '只看夜景，不等噴火' },
      gangyu: { name: 'Gang Yu Hot Pot', coords: [16.0648, 108.2217], note: '★ 19:00 晚餐' }
    },
    mainRoute: ['mhotel', 'marble', 'mhotel', 'apec', 'dragon', 'gangyu', 'mhotel'],
    alternatives: [{ label: '雨天：M Hotel → 占婆博物館 → 漢市場 → M Hotel', ids: ['mhotel', 'cham', 'han', 'mhotel'] }],
    choices: [
      { label: '晴天正選', title: '五行山精華版', text: '搭電梯上山後只走水山、玄空洞、寺院與一處觀景台，13:30 左右離開，保住午後休息。', when: '地面乾、雨勢小，而且願意走濕滑石階。', mapId: 'marble', source: 'https://danangfantasticity.com/en/the-marble-mountains', sourceText: '峴港官方資訊' },
      { label: '雨天替代', title: '占婆博物館＋漢市場', text: '五行山整段取消，不挪到回程日補課；先看博物館，再視體力採買，完成後回飯店午休。', when: '持續下雨、石階濕滑或今天不想爬。', mapId: 'cham' },
      { label: '傍晚保留', title: 'APEC、龍橋與 Gang Yu', text: '公園與橋只短走，19:00 準時吃火鍋；週四沒有例行噴火，不為表演延長行程。', when: '下雨可刪除散步，但保留晚餐。', mapId: 'gangyu' }
    ],
    timeline: [
      { time: '09:00–10:30', title: '早餐與天氣決定', placeId: 'mhotel', text: '看即時雨勢與地面狀況；地乾、雨小才選五行山。', highlights: ['準備防滑鞋、飲水與輕便雨具'], warnings: ['不要因為已排進行程就勉強走濕滑石階'] },
      { time: '10:45–13:30', title: '五行山・水山精華', placeId: 'marble', text: '搭電梯上山後走玄空洞、寺院與一處觀景台，不蒐集全部洞窟。', highlights: ['玄空洞看天然採光、岩壁與佛像空間', '觀景台看海岸、市區與石灰岩山群'], warnings: ['洞內與石階潮濕；扶手不足處放慢，不穿拖鞋'] },
      { time: '13:45–17:00', title: '簡單午餐＋飯店午休', placeId: 'mhotel', text: '回美溪一帶吃簡單午餐，午睡、下午茶或泳池自由選擇。', highlights: ['完整保留約三小時恢復體力'], warnings: ['不要趕 4SEAs 14:00 午餐收餐，會讓整段變得太急'] },
      { time: '17:30–18:15', title: 'APEC 公園', placeId: 'apec', text: '在韓江南岸看風箏造型建築與河岸城市景觀。', highlights: ['上層平台看建築曲線與龍橋同框'], warnings: ['下雨可直接略過，不影響晚餐'] },
      { time: '18:15–18:50', title: '龍橋短走', placeId: 'dragon', text: '把龍橋當城市夜景，不等待噴火表演。', highlights: ['由河岸側看龍身與韓江燈光'], warnings: ['10/8 是週四，官方例行時段沒有 21:00 噴火秀'] },
      { time: '19:00–20:30', title: '★ Gang Yu Hot Pot', placeId: 'gangyu', text: '前往 87 Yên Bái 吃火鍋，吃完直接回飯店。', highlights: ['建議事先訂 19:00；午餐保持簡單'], warnings: ['火鍋用餐時間較長，今晚不再加景點'] },
      { time: '雨天版', title: '占婆博物館＋漢市場', placeId: 'cham', optional: true, text: '若五行山取消，先看占婆砂岩雕刻，再到漢市場；完成後回飯店午休。', highlights: ['博物館看濕婆、象神與美山／茶喬展區的風格差異'], warnings: ['若今天已買完伴手禮，10/9 上午就改留在飯店'] }
    ]
  },
  '2026-10-09': {
    date: '10/9（五）', place: '峴港市中心 → 機場', eyebrow: 'DEPARTURE DAY · PROTECT THE FLIGHT',
    title: '漢市場接 LUK LAK，然後從容去機場',
    summary: '早餐後整理行李並寄放，11:15 去漢市場做最後採買，13:00 步行到 LUK LAK 午餐。下午只留咖啡或短河岸散步，15:30 回飯店取行李，最晚 16:30–16:45 前往機場。',
    decision: 'LUK LAK 午餐最後點餐 13:45，是今天唯一不能拖延的節點；不再安排按摩，以免影響取行李與機場緩衝。',
    places: {
      mhotel: { name: 'M Hotel Danang', coords: [16.05165, 108.248034], note: '早餐、退房與寄放行李' },
      han: { name: '漢市場', coords: [16.0683, 108.2241], note: '最後採買' },
      luklak: { name: 'LUK LAK Danang', coords: [16.0754, 108.2238], note: '★ 13:00 午餐' },
      river: { name: '白藤街河岸', coords: [16.0718, 108.2240], note: '餐後短走／咖啡' },
      dad: { name: '峴港國際機場', coords: [16.0439, 108.1993], note: 'IT552 19:45' }
    },
    mainRoute: ['mhotel', 'han', 'luklak', 'river', 'mhotel', 'dad'],
    alternatives: [{ label: '若前日已買伴手禮：M Hotel → LUK LAK → M Hotel → 機場', ids: ['mhotel', 'luklak', 'mhotel', 'dad'] }],
    choices: [
      { label: '正常版本', title: '漢市場＋LUK LAK', text: '11:15 到漢市場集中買咖啡、腰果與包裝乾貨，12:40 收尾後步行去吃午餐。', when: '伴手禮尚未買齊，且 13:00 能準時入座。', mapId: 'han' },
      { label: '更慢版本', title: '上午留飯店，午餐照常', text: '若 10/8 已去漢市場，就取消重複採買；睡飽、整理行李後直接前往 LUK LAK。', when: '前一天已買完，或回程日想降低移動量。', mapId: 'luklak' },
      { label: '不可壓縮', title: '16:30 左右前往機場', text: '餐後只選咖啡或短河岸散步，不安排按摩與跨區景點；15:30 回飯店取行李。', when: 'IT552 19:45 起飛，回程緩衝優先於最後加行程。', mapId: 'dad' }
    ],
    timeline: [
      { time: '09:00–10:45', title: '早餐、收拾、寄放行李', placeId: 'mhotel', text: '照平常時間起床，退房後把大件行李交給飯店保管。', highlights: ['護照、票券、藥品、行動電源與易碎品留隨身'], warnings: ['向飯店確認取行李憑證與叫車上車點'] },
      { time: '11:15–12:40', title: '漢市場伴手禮', placeId: 'han', text: '主攻咖啡、腰果、餅乾與包裝乾貨，不逛服飾樓層。', highlights: ['先列清單，確認保存期限、密封與價格', '易碎或怕壓商品另外裝袋'], warnings: ['12:40 必須收尾，不能犧牲 LUK LAK 最後點餐時間'] },
      { time: '13:00–14:15', title: '★ LUK LAK 午餐', placeId: 'luklak', text: '由漢市場沿白藤街步行前往 28 Bạch Đằng。', highlights: ['13:00 入座能從容點餐與用餐'], warnings: ['官方午餐最後點餐 13:45；不要把入座時間推到 14:00'] },
      { time: '14:15–15:30', title: '咖啡或河岸短走', placeId: 'river', text: '活動留在海州市中心，依天氣選咖啡或河岸散步。', highlights: ['只選一件事，作為旅行收尾'], warnings: ['不安排按摩，也不跨去山茶半島或五行山'] },
      { time: '15:30–16:45', title: '取行李、前往機場', placeId: 'mhotel', text: '回 M Hotel 取行李，建議 16:30 左右出發，最晚不超過 16:45。', highlights: ['上車前確認護照、手機、錢包與所有行李件數'], warnings: ['IT552 19:45 起飛；保留市區車流、報到與安檢緩衝'] },
      { time: '約 17:00 後', title: '峴港機場報到', placeId: 'dad', text: '完成報到、托運與出境流程後再用剩餘時間逛免稅區。', highlights: ['核對 IT552 航班與登機門資訊'], warnings: ['行動電源與備用鋰電池依航空規定隨身攜帶'] }
    ]
  }
};

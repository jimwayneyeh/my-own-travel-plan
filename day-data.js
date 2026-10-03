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
    summary: 'IT551 表定 16:30 由桃園起飛，預計 15:50–16:00 左右開始登機，實際以登機證為準。搭機捷直達第一航廈後，先領取已預約的外幣，再辦理報到、托運與通關；所有出境手續完成後才在管制區內用正餐。',
    decision: '去程是桃園直飛峴港，不經香港。抵達峴港出關、領到行李後，先完成少量當地現金與接送會合，再直達 Hotel Royal；辦好入住後仍以 Bới Cơm 熱食晚餐為主。',
    places: {
      tpe: { name: '桃園國際機場第一航廈', coords: [25.0797, 121.2342], note: '報到、通關與登機前正餐' },
      dad: { name: '峴港國際機場', coords: [16.0439, 108.1993], note: '入境、行李與接送集合點' },
      royal: { name: 'Hotel Royal Hoi An Danang', coords: [15.8766713, 108.3198424], note: '兩晚住宿基地' },
      anhoi: { name: '安會橋／河岸', coords: [15.8775, 108.3268], note: '有體力才去的短散步' }
    },
    mainRoute: ['dad', 'royal'],
    alternatives: [{ label: '精神尚可：飯店 → 安會橋短走 → 飯店', ids: ['royal', 'anhoi', 'royal'] }],
    choices: [
      { label: '時間已校正', title: '16:30 是起飛，約 15:50–16:00 登機', text: '10/3 IT551 為桃園 T1 16:30 起飛、18:10 抵達峴港 T2。台灣比越南快一小時，實際飛行約 2 小時 40 分；16:00 左右應已在登機門或機上，不是到機場的時間。', when: '13:25 由 A3 搭機捷直達車，約 13:50 抵達桃園第一航廈；當天以航空公司通知、機場看板與登機證時間為準。', source: 'https://legacy-www.tigerairtw.com/zh-tw/useful-link/conditions-carriage', sourceText: '台灣虎航官方報到與登機規定' },
      { label: '出發流程已調整', title: '機捷直達 T1 → 領取預約外幣 → 報到與托運', text: '搭乘 13:25 機捷直達車抵達桃園第一航廈後，先完成預約外幣領取，再直接到台灣虎航櫃檯報到與托運；不把用餐或採買放在報到之前。', when: '外幣領取後就前往櫃檯；若現場排隊較長，放棄其他停留，先完成報到與託運。' },
      { label: '不買機上餐的吃法', title: '桃園通關後完整正餐＋會安晚餐', text: '完成安檢與證照查驗後，再於 T1 管制區內選有主食、蛋白質與青菜的簡單套餐。機上不吃外食；抵達會安後仍以 Bới Cơm 熱食晚餐為主。', when: '桃園正餐不吃過量油炸、辛辣或高鹽食物，但要有足夠主食與蛋白質，才能支撐到峴港落地。', source: 'https://map.taoyuan-airport.com/', sourceText: '桃園機場官方室內地圖' },
      { label: '已確認接送', title: 'Klook 7 人座接機', text: 'KPN_Airport Transfer 已確認 Toyota Fortuner／Innova 或同級，2 位乘客，司機追蹤 IT551，於入境出口舉牌接人並從實際抵達起免費等候 120 分鐘。', when: '出發前在 Klook App 再確認兩件大型行李與供應商聯絡方式；私人訂單編號不放在公開網站。' },
      { label: '峴港機場只留快速備案', title: '出關後先找司機，不坐下吃正餐', text: '峴港 T2 官方列出的多數餐飲在出境管制區，入境旅客出關後不能回去使用。公開到達區若當時有咖啡、麵包或便利店，只做 5–10 分鐘快速採買。', when: '必須先與舉牌司機會合，並請司機同意等待；不臨時點餐、不讓已會合的司機無消息久等。', source: 'https://explore.danangairportterminal.vn/facility/burger-king/', sourceText: '峴港 T2 官方餐飲位置範例' },
      { label: '晚餐主方案', title: 'Bới Cơm：同條路上的越南家常菜', text: '飯店在 39 Dao Duy Tu，餐廳在 20 Dao Duy Tu；官網標示每日 07:30–23:00。辦好入住後直接步行前往，吃飯、青菜與一道主菜即可，不用再叫車。', when: '預計 21:15–21:30 入座；當天下午用電話或訂位表單再確認廚房最後點餐時間。', source: 'https://boicomhoianrestaurant.com/contact/', sourceText: '餐廳官方地址與營業時間' },
      { label: '不出飯店的備案', title: 'The Deck：塔帕斯與飲料，不當作保證有正餐', text: '館內頂樓 The Deck 官方標示飲料服務到午夜，菜色定位是 tapas 搭酒。入住時先請櫃檯確認當晚廚房最後點餐與還有哪些熱食，有接單才上樓。', when: '下大雨、已很累，或只想簡單吃一點時選；Wakaku 雖營業到 22:00，但 21:00 後才抵達太趕，不列主方案。', source: 'https://hotelroyalhoian.vn/restaurants-bars/the-deck/', sourceText: 'Hotel Royal 官方餐飲資訊' },
      { label: '有體力才啟動', title: '安會橋與河岸短走', text: '完成入住、吃到東西，而且沒有大雨時才去；只看燈籠與河岸 20–30 分鐘，不搭船。', when: '若晚餐後已超過 22:15 或感到疲累，直接取消。', mapId: 'anhoi' }
    ],
    timeline: [
      { time: '13:25–14:10（台灣）', title: '機捷直達 T1、領取預約外幣', placeId: 'tpe', text: '由新北產業園區站搭機捷直達車至桃園第一航廈；抵達後先領取已預約的外幣，完成後直接前往台灣虎航櫃檯。', highlights: ['只保留交通與領取外幣這兩件事', '抵達航廈後不先用餐或採買', '隨身保管護照與旅行文件'], warnings: ['列車與現場動線以當日公告為準；若延誤，先完成報到與托運'] },
      { time: '14:10–15:15（台灣）', title: '報到、托運、通關後再用正餐', placeId: 'tpe', text: '先完成報到、託運、安檢與證照查驗；進入管制區後再選有米飯或麵食、蛋白質與適量青菜的簡單套餐。', highlights: ['台灣虎航由桃園第一航廈出發', '用餐時同時補充水分', '15:35–15:40 前抵達登機門'], warnings: ['報到截止為表定起飛前 45 分鐘，不以截止時間倒推到場', '不為了用餐追名店或跨區找餐廳'] },
      { time: '約 15:50（台灣）–18:10（越南）', title: '登機與 IT551 飛行', placeId: 'tpe', text: '16:30 是桃園表定起飛；登機時間尚未能事先確定，實際以登機證為準。台灣與越南有一小時時差，18:10 為越南當地時間。', highlights: ['不預購機上餐點', '不攜帶、不食用非虎航販售的外食', '若機上需要飲料或食物，只使用機上販售品'], warnings: ['除沖泡牛奶與服藥等人道考量外，虎航機上不提供冷、熱水', '登機程序會在起飛前 10 分鐘結束，不要在最後時間離開登機門'] },
      { time: '18:10–19:30', title: '落地、入境、提領行李與會合', placeId: 'dad', text: '完成入境與提領行李後，先在第 2 航廈到達區備妥少量當地現金，再到入境出口找 KLOOK 標誌與主要旅客姓名牌。', highlights: ['司機會追蹤 IT551 航班動態', '免費等候時間從實際抵達起算 120 分鐘', '出航廈前可處理網路與少量當地現金'], warnings: ['航班明顯延誤時仍用 Klook App 聯絡供應商確認接送'] },
      { time: '約 19:40–21:00', title: '完成會合、搭接送前往會安', placeId: 'royal', text: '完成入境、行李、當地現金與接送會合後，直接搭車前往 Hotel Royal。若已明顯飢餓，只做快速補水或小點，不把它當成正餐。', highlights: ['KPN_Airport Transfer；Toyota Fortuner／Innova 或同級', '上車前核對司機、車牌、目的地與行李件數', '會安熱食晚餐才是主餐'], warnings: ['不在車內吃湯汁、掉屑或強烈氣味食物', '訂單規則最多 2 件 28 吋特大行李；若最後帶 29 吋箱，行前先在 App 向供應商確認'] },
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
      morningglory: { name: 'Morning Glory Signature', coords: [15.8754, 108.3271], note: '★ 12:15 會安午餐；41 Nguyễn Phúc Chu（安會河岸）' },
      fujian: { name: '福建會館', coords: [15.8764, 108.3323], note: '主殿、天井與華人建築' },
      metiseko: { name: 'Metiseko Hoi An', coords: [15.8765, 108.3336], note: '桑蠶絲絲巾購物' },
      redbean: { name: 'Red Bean Hoi An', coords: [15.8862, 108.3243], note: '指定餐廳' },
      memories: { name: 'Hoi An Memories Land', coords: [15.8724, 108.3425], note: '選配園區與 20:00 主秀' },
      river: { name: '會安河岸', coords: [15.8760, 108.3287], note: '不看秀時的輕鬆替代' }
    },
    mainRoute: ['royal', 'bridge', 'canton', 'morningglory', 'fujian', 'metiseko', 'royal', 'redbean', 'memories', 'royal'],
    alternatives: [{ label: '不看秀：Red Bean → 河岸散步 → 飯店', ids: ['redbean', 'river', 'royal'] }],
    choices: [
      { label: '晚間方案 A', title: 'Red Bean ＋ Memories Show', text: '16:45 提早晚餐，18:35 左右前往園區，20:00 看主秀。適合想把會安夜晚變成完整表演體驗。', when: '願意配合表演時間，且已確認當日演出與座位。', mapId: 'memories', source: 'https://hoianmemoriesland.com/en/performance-schedule', sourceText: '官方表演時刻' },
      { label: '晚間方案 B', title: 'Red Bean ＋ 河岸自由散步', text: '18:30 左右正常吃晚餐，餐後依體力走河岸，不被票券與進場時間綁住。', when: '下雨、想更慢，或不想連續看表演時選這個。', mapId: 'river' },
      { label: '購物補充', title: 'Metiseko 主攻；Silk Village 不硬加', text: 'Metiseko 直接看 100% mulberry silk 絲巾並確認尺寸、收邊與洗滌方式。Silk Village 只有想多花約一小時了解工藝時才加。', when: '購物後仍保留回飯店休息，不用為了比較店家折返。', mapId: 'metiseko', source: 'https://metiseko.com/collections/the-scarf-collection', sourceText: '先看官方絲巾款式' }
    ],
    timeline: [
      { time: '09:00–10:15', title: '飯店早餐與準備', placeId: 'royal', text: '照平常作息慢慢吃，不設任何早場預約。', highlights: ['隨身帶雨具、防水袋和可裝絲巾的乾燥袋'], warnings: ['午後可能陣雨，鞋子以防滑好走為優先'] },
      { time: '10:45–12:15', title: '日本橋 → 古城西段', placeId: 'bridge', text: '由飯店步行進古城，從日本橋沿陳富街向東慢走。', highlights: ['日本橋看木構、屋頂與橋寺一體的空間', '廣肇會館看入口石雕、天井與會館格局'], warnings: ['古城票券與開放房舍依現場公告；不用每間會館都進'] },
      { time: '12:15–13:30', title: '★ Morning Glory Signature 午餐', placeId: 'morningglory', text: '從廣肇會館步行至安會河岸的 41 Nguyễn Phúc Chu；以高樓麵或海鮮廣麵為主，兩人分一份白玫瑰即可。', highlights: ['這餐選 Signature 的較精緻越式菜，不另外增加越式餐次', '午餐留七分飽，晚上仍有 Red Bean', '吃完過橋接福建會館，不需要折返飯店'], warnings: ['建議先訂位；若超過 20 分鐘仍無位，改附近用餐並準時接下午行程', '露台座位可能較熱，訂位時可依天氣指定室內'], source: 'https://hoianlocal.com/business/morning-glory-signature/', sourceText: '餐廳位置與菜色資訊' },
      { time: '13:30–14:25', title: '福建會館', placeId: 'fujian', text: '下午只選一間代表性會館，保留購物和休息時間。', highlights: ['看三進空間、媽祖信仰、天井採光與屋脊裝飾'], warnings: ['尊重祭祀空間；香爐與供桌前避免久站拍攝'] },
      { time: '14:25–15:10', title: 'Metiseko 絲巾購物', placeId: 'metiseko', text: '直接說只看 mulberry silk scarves，不做衣服。', highlights: ['確認 100% mulberry silk、尺寸、印花正反面和收邊', '保留材質清楚的收據與洗滌方式'], warnings: ['不要只憑光澤判斷真絲；預留 30–45 分鐘就足夠'] },
      { time: '15:10–16:30', title: '回飯店休息', placeId: 'royal', text: '放好絲巾、午睡或換裝，至少保留 75 分鐘。', highlights: ['這段是整天不疲累的關鍵留白'], warnings: ['若午間已淋雨，先更換乾衣鞋再出門'] },
      { time: '16:45–18:10', title: 'Red Bean 提早晚餐', placeId: 'redbean', text: '選 Memories Show 建議 16:45 入座；不看表演可改 18:30 正常晚餐。', highlights: ['先決定夜間方案，再依離席時間訂位'], warnings: ['若用餐延誤，不要冒險趕秀；改成河岸散步即可'] },
      { time: '18:35–21:00', title: '選配：Memories Land', placeId: 'memories', optional: true, text: '先看園區小型演出，19:40 前進主舞台，主秀預計 20:00–21:00。', highlights: ['主舞台看服裝、燈光與大型群舞，不需要再加河船'], warnings: ['戶外演出遇雨以官方當日公告為準；雨季優先 HIGH／VIP 遮蔽席'] }
    ]
  },
  '2026-10-05': {
    date: '10/5（一）', place: '會安 → 巴拿山', eyebrow: 'BÀ NÀ · WEATHER WINDOW 1',
    title: '10:30 離開會安：下午有晴窗就先金橋，霧雨轉室內',
    summary: '12:00 左右到 Thác Tóc Tiên 的 Mercure 山下櫃檯，先辦住客優惠票、跨夜／FaceID確認與行李交接；再搭直達法國村的住客線上山。下午看山頂即時能見度：若真的放晴，先用短程拍金橋；若濃霧或下雨，先趕17:00關閉的 Moon Castle，傍晚再進 Fantasy Park。晚上留給住客才有的安靜街景。',
    decision: '10/6清晨雖能避人潮，但雨霧預報較高，不把遠景當保證。10/5下午若無雨、能看清遠處山稜或建築，就先完成金橋；若霧雨持續，不跨區苦等，改走 Moon Castle／Fantasy Park。',
    places: {
      royal: { name: 'Hotel Royal Hoi An Danang', coords: [15.8766713, 108.3198424], note: '早餐與退房' },
      gate: { name: 'Thác Tóc Tiên Station・Mercure 山下櫃檯', coords: [16.02695, 108.03105], note: '訂房核對、房客纜車票與行李交接' },
      mercure: { name: 'Mercure French Village', coords: [15.9976, 107.9880], note: '住宿與山頂基地' },
      village: { name: '法國村', coords: [15.9972, 107.9874], note: '教堂、廣場與夜景' },
      moon: { name: '月亮城堡', coords: [15.9990, 107.9896], note: '雨天較穩定的室內體驗' },
      golden: { name: '金橋', coords: [15.9950, 107.9963], note: '雲開才前往的選配支線' },
      fantasy: { name: 'Fantasy Park', coords: [15.9975, 107.9890], note: '濃霧或雨勢較大時的備案' },
      coaster: { name: 'Alpine Coaster', coords: [15.9970, 107.9886], note: '晴乾才玩；另付費' },
      maison: { name: 'Maison du Roi', coords: [15.9975, 107.9881], note: '★ 14:00 亞洲料理午餐' },
      letable: { name: 'L’Étable', coords: [15.9974, 107.9878], note: '★ 18:30 法式晚餐' }
    },
    mainRoute: ['royal', 'gate', 'mercure', 'maison', 'village', 'moon', 'village', 'letable', 'mercure'],
    alternatives: [
      { label: '晴乾選配：法國村 → 高山滑車 → 法國村', ids: ['village', 'coaster', 'village'] },
      { label: '雷雨濃霧：飯店／法國村 → Fantasy Park', ids: ['mercure', 'fantasy', 'mercure'] }
    ],
    choices: [
      { label: '下午晴窗優先', title: '放晴就先用短程完成金橋', text: '入住與午餐後，若飯店或纜車站確認無雷雨、沒有持續降雨，而且能見度足以看清遠處山稜或建築，就先去金橋拍照；這是替10/6雨霧預報保留的備份窗口。', when: '只在15:00前後確實放晴時啟動；最多留約45–60分鐘，視野轉差就回法國村，不為等雲散犧牲晚餐。', mapId: 'golden' },
      { label: '交通已決定', title: '預約 Grab 6 人座', text: '這條路線目前在 App 可正常估價與預約，10:30 日間通常不算難叫；兩人帶兩件 26–29 吋行李仍要選 6 人座，不選一般 4 人座。Grab 可提前最多 90 天預約。', when: '設定 10/5 10:30；上車點選 Hotel Royal Hoi An Danang，下車點選 Toc Tien Station。前一晚確認訂單，當天 10:00 再檢查車況通知。', source: 'https://www.grab.com/vn/en/transport/advance-booking/', sourceText: 'Grab 官方預約說明' },
      { label: '晴乾方案', title: '法國村＋高山滑車', text: '高山滑車有3個入口，官方時段08:30–19:00；16:30–17:30單次參考價VND 70,000。它不含在基本票內，且只在天候允許時運轉。', when: '軌道乾、沒有強風雷雨，而且Moon Castle已玩完。', mapId: 'coaster', source: 'https://sunworld.vn/en/banahills/activities/tube-sliding-boards', sourceText: 'Sun World滑車時間' },
      { label: '霧雨方案', title: 'Moon Castle＋Fantasy Park', text: 'Moon Castle的4D與Flying Eyes官方列08:30–17:00，先玩；Fantasy Park開至19:00，可接住後段雨勢。', when: '濃霧、小雨或戶外設施暫停。', mapId: 'fantasy', source: 'https://sunworld.vn/banahills/tin-tuc-sunworld/sun-world-ba-na-hills-so-do-chi-tiet-huong-dan-tham-quan-tron-ven-2026-19250', sourceText: 'Sun World 2026設施圖解' },
      { label: '用餐已選定', title: 'Maison du Roi 午餐＋L’Étable 晚餐', text: '第一天下午抵達後先在 Maison du Roi 吃亞洲料理，晚餐再用 L’Étable 的歐式單點收尾；兩間都在法國村，不增加移動。', when: '抵達山頂後依實際房間交付、天候與 Moon Castle 截止時間微調，但午餐不拖過 15:00。', mapId: 'maison', source: 'https://www.mercure-danang-banahills-french-village.com/restaurant-bars/maison-du-roi/', sourceText: 'Maison du Roi 官方資訊' },
      { label: '上山必要流程', title: '山下櫃檯先辦票、再交行李', text: '車輛只能到 Thác Tóc Tiên Station。先到 Mercure Downhill Front Desk 核對訂房、票券與當日路線，大件行李交由 bellman。', when: '這是固定流程，不把車輛目的地直接設成山頂飯店。', mapId: 'gate', source: 'https://www.mercure-danang-banahills-french-village.com/hotel/getting-here/', sourceText: 'Mercure 抵達說明' }
    ],
    timeline: [
      { time: '09:00–10:15', title: '早餐、最後收拾與退房', placeId: 'royal', text: '邊吃早餐邊向 Mercure 確認當日上山纜車狀態與合適抵達時間；10:15 前完成退房。', highlights: ['訂房憑證、護照、藥品、電子用品、薄外套、雨衣與防水袋放隨身包'], warnings: ['山下天氣不能代表山頂；若遇強風大雨，先直接問飯店纜車是否正常'] },
      { time: '10:30–12:00', title: 'Grab 6 人座前往 Thác Tóc Tiên Station', placeId: 'gate', text: '由 Hotel Royal 出發，途中不加景點。Mercure 官網明確說車輛不能直達山頂飯店，Grab 目的地必須選 Toc Tien Station，並請司機停在 Mercure Downhill Front Desk。', highlights: ['預約資料：10/5 10:30、2 人、2 件大型行李、6 人座', '可傳給司機：Please drop us at Mercure Downhill Front Desk, Thac Toc Tien Station (Ga Thác Tóc Tiên), not the mountaintop hotel.', 'Grab 預約行程的司機聊天室最早可在出發前 45 分鐘使用'], warnings: ['不要只輸入 Mercure 飯店本體後讓司機自行猜下車點', '若 App 顯示取消或無法派車，立即請 Hotel Royal 櫃檯協助叫 7 人座計程車／包車，不要改搭 4 人座'], source: 'https://www.mercure-danang-banahills-french-village.com/hotel/getting-here/', sourceText: 'Mercure 官方抵達與車輛說明' },
      { time: '12:00–13:15', title: '山下櫃檯報到、辦票、FaceID與交接行李', placeId: 'gate', text: '出示Agoda訂房確認；房價只有早餐與Wi‑Fi，所以在這裡詢價購買住客優惠基本票。確認同一張票可用到10/6下午；若住客票適用2026三日政策，必須在第一次刷票前於散客售票處完成FaceID。', highlights: ['直接問：Can we keep visiting after check-out tomorrow and take the cable car down in the afternoon?', '確認可否刷信用卡、拍下兩天開線表與翌日住客早班', '登記10/6清晨金橋班次並確認集合地點'], warnings: ['先確認完票種才刷QR；一般三日票權益需在首次入園前升級', '飯店公布住客抵達／上山窗口08:00–16:30'], source: 'https://www.mercure-danang-banahills-french-village.com/', sourceText: 'Mercure住客票與時間' },
      { time: '13:15–14:00', title: 'Thác Tóc Tiên → L’Indochine 上山', placeId: 'mercure', text: '住客通常由Thác Tóc Tiên搭直達L’Indochine的纜車到法國村；纜車本身估17–20分鐘，加候車、步行與行李交接共抓30–45分鐘。基本／住客票已含，不要另買單段票。', highlights: ['證件、貴重物品、薄外套與雨衣留在隨身包', '抵達後先認清L’Indochine站、巴黎館櫃檯與房間棟別'], warnings: ['實際開線由工作人員指定；雷電或強風可能延誤／暫停'] },
      { time: '14:00–15:00', title: '入住、Maison du Roi 午餐與能見度確認', placeId: 'maison', text: '房間未好就先寄放行李，步行到 Maison du Roi 吃湯麵、飯類或一份烤物共享；用餐後直接問飯店／纜車站金橋方向是否有清楚視野。', highlights: ['Maison du Roi 官方時段為 11:30–21:30', '吃完保留 30 分鐘整理與看即時天氣'], warnings: ['午餐不要點大型套餐；15:00 必須決定走金橋或 Moon Castle，不兩邊硬塞'] },
      { time: '15:00–16:50', title: '晴窗去金橋；霧雨改 Moon Castle', placeId: 'moon', text: '晴而看得見遠景時，先搭纜車去金橋拍照，最多留45–60分鐘；濃霧、下雨或纜車調整時，直接由法國村搭登山小火車2到 Moon Castle，先玩17:00關閉的 Moon Junction 4D與Flying Eyes。', highlights: ['金橋只求完成合照與橋身，不為雲散久等', 'Moon Castle 路線沿途可順看 Eclipse 日蝕廣場'], warnings: ['小火車沒有公開固定日常班表；到站先看當日末班', '濕石板易滑，不為拍照跑動'] },
      { time: '17:00–18:15', title: '回法國村；雨霧進 Fantasy Park', placeId: 'village', text: '完成金橋後回法國村慢走；若霧雨持續，直接進 Fantasy Park 挑2–3項室內設施。高山滑車只在軌道乾、無強風雷雨時才作選配。', highlights: ['Fantasy Park官方時間08:30–19:00，大多數設施含基本票', '滑車16:30–17:30單次參考價VND 70,000，需另付費'], warnings: ['濕軌、強風、雷雨就不要等滑車', '若下午已去金橋，Moon Castle可改為隔天雨天室內備案'] },
      { time: '18:30–20:00', title: '★ L’Étable 法式晚餐與法國村夜色', placeId: 'letable', text: '到 Hôtel de Marseille 的 L’Étable，兩人點一份主菜搭配前菜或甜點即可；日遊客退去後再慢慢走回飯店。', highlights: ['官方列為歐式單點餐廳，時段 11:30–21:30', '這是山頂住宿晚最值得保留的正式晚餐'], warnings: ['建議抵達後或入住時訂 18:30；若天候與遊園延誤，先通知餐廳'] }
    ]
  },
  '2026-10-06': {
    date: '10/6（二）', place: '巴拿山 → 峴港', eyebrow: 'BÀ NÀ · WEATHER WINDOW 2',
    title: '清晨兩次判斷試金橋；霧雨不硬等，提早下山',
    summary: '05:30起床，先看窗外與飯店對金橋方向的能見度；只有無持續雨、視野足夠時才搭06:00–06:45住客班次。若第一輪是濃霧或下雨，早餐後只再確認一次短暫晴窗；仍不佳就退房後進 Fantasy Park，約14:00開始下山。',
    decision: '住客早班的優勢是人少，不是避雨或保證遠景。每次金橋嘗試最多45–60分鐘；雷雨、強風、持續雨或白牆濃霧就停止等待，保住下山與入住峴港的緩衝。',
    places: {
      mercure: { name: 'Mercure French Village', coords: [15.9976, 107.9880], note: '早餐、退房與行李' },
      golden: { name: '金橋', coords: [15.9950, 107.9963], note: '第二個能見度窗口' },
      garden: { name: "Le Jardin d'Amour", coords: [15.9952, 107.9954], note: '金橋旁選走一小段' },
      fantasy: { name: 'Fantasy Park', coords: [15.9975, 107.9890], note: '霧雨室內替代' },
      cafepostal: { name: 'Café Postal', coords: [15.9974291, 107.9878834], note: '★ 12:30 輕午餐；Hôtel de Paris' },
      gate: { name: '巴拿山山腳', coords: [15.9981, 107.9960], note: '與司機會合' },
      mhotel: { name: 'M Hotel Danang', coords: [16.05165, 108.248034], note: '峴港三晚住宿基地' },
      beach: { name: '美溪沙灘', coords: [16.0543, 108.2478], note: '有餘裕才短走' },
      fourseas: { name: 'Buffet Hải Sản 4SEAs', coords: [16.0519, 108.2472], note: '★ 19:00 晚餐；近飯店的海鮮 buffet' }
    },
    mainRoute: ['mercure', 'golden', 'garden', 'cafepostal', 'mercure', 'gate', 'mhotel', 'beach', 'fourseas', 'mhotel'],
    alternatives: [
      { label: '霧雨：飯店 → Fantasy Park → 飯店', ids: ['mercure', 'fantasy', 'mercure'] },
      { label: '下山延誤：M Hotel → 4SEAs', ids: ['mhotel', 'fourseas', 'mhotel'] }
    ],
    choices: [
      { label: '清晨優先但有停損', title: '住客早班金橋', text: '官方住宿方案列06:00、06:15、06:30，另有方案列06:15、06:45；實際以10/5晚櫃檯登記為準。只有無持續雨、沒有雷電強風警報，且能看清遠處建築／山稜時才出發。', when: '05:30第一眼能見度符合；每次最多45–60分鐘，不站在橋上等雲散。', mapId: 'golden', source: 'https://www.mercure-danang-banahills-french-village.com/offers/early-booking-special/', sourceText: 'Mercure清晨金橋班次' },
      { label: '霧雨替代', title: '早餐後只再確認一次，否則 Fantasy Park', text: '第一輪濃霧或下雨時，先吃早餐並問櫃檯能見度；若仍看不清就退房，10:40後進 Fantasy Park，不為完全沒有視野的金橋跨區等待。', when: '雷雨、強風、持續雨、白牆濃霧，或纜車調整。', mapId: 'fantasy' },
      { label: '晚餐已選定', title: '4SEAs：轉移日就近吃海鮮 buffet', text: '4SEAs 在 268 Võ Nguyên Giáp，從 M Hotel 沿海步行即可到。下山、入住與下午茶後再吃，不需要為晚餐多叫一次車。', when: '抵達 M Hotel 後仍有胃口吃完整 buffet；建議先訂 19:00。', mapId: 'fourseas', source: 'https://4seas.vn/', sourceText: '4SEAs 官方地址與時段' }
    ],
    timeline: [
      { time: '05:30–06:00', title: '起床：第一次能見度判斷', placeId: 'mercure', text: '帶房卡／住客憑證、票券QR、雨衣、薄外套與手機；從窗外看對面建築與山稜，並向櫃檯確認金橋方向有無持續雨、雷電或濃霧。', highlights: ['看得清遠處、雲層正在散且班次正常才值得出發', '若已白牆濃霧或下雨，直接改吃早餐，不要因人少硬去'], warnings: ['強風時不要撐大傘；雷電或飯店取消班次就留在室內'] },
      { time: '06:00–07:20', title: '符合條件才去：住客早班金橋', placeId: 'golden', text: '依前晚登記搭06:00–06:45間住客班次；由法國村Louvre到Bordeaux纜車約5分鐘，連候車與步行估15–25分鐘。抵達先拍金橋，視野轉差或開始下雨就回程，不等雲散。', highlights: ['先完成合照與橋身全景，不加長線步道', '人少是住宿可控制的優勢；遠景完全受雲雨影響'], warnings: ['單次最多45–60分鐘；先問回法國村班次'] },
      { time: '07:20–09:20', title: '早餐與第二次短暫確認', placeId: 'mercure', text: '回法國村吃早餐；若第一輪沒去，早餐後只問一次櫃檯／看窗外是否已轉為無雨且有清楚視野。符合才做短程補拍，否則直接接受室內方案。', highlights: ['早餐已含在訂房中', '第二次確認是決策，不是無限等待'], warnings: ['不同住宿棟早餐地點可能不同，以入住時餐券／櫃檯說明為準'] },
      { time: '09:20–10:30', title: '收拾、退房並寄放行李', placeId: 'mercure', text: '退房截止10:30；寄放大件行李，確認14:00左右回來取件及下山指定車站。', highlights: ['證件、藥物、電子用品、防水層放隨身包', '通知山下接車司機：預估15:00–15:30到Thác Tóc Tiên，抵達再更新'], warnings: ['不要帶大型行李再次跨區'] },
      { time: '10:40–12:30', title: '只補一區：晴走半山，雨進 Fantasy Park', placeId: 'garden', text: '清晨若只看金橋且現在轉晴，可補花園／心靈區；若雨霧持續，留在法國村一側玩Fantasy Park。基本票包含兩者大多數設施。', highlights: ['Fantasy Park開放08:30–19:00', '晴天也只選花園或心靈區一組，不逐點蒐集'], warnings: ['不要臨時再跨去Moon Castle與金橋兩頭跑', '攀岩、10D、幸運遊戲仍需另付費'] },
      { time: '12:30–15:30', title: 'Café Postal 輕午餐、取行李、纜車下山並接車', placeId: 'cafepostal', text: '12:30 回法國村到 Hôtel de Paris 的 Café Postal，點湯、三明治或一份輕食；13:30–14:00 取行李後依現場指定線前往 L’Indochine，搭 Thác Tóc Tiên 直達線下山。', highlights: ['午餐有餐廳但不佔用太多下山緩衝', '到山腳後再把實際抵達時間傳給司機', '接車點仍是 Mercure Downhill Front Desk／Thác Tóc Tiên'], warnings: ['雷雨或強風可能延誤；寧可取消海邊短走，也不要壓縮安全緩衝'] },
      { time: '16:00–18:30', title: '入住、下午茶、選配海灘短走', placeId: 'mhotel', text: '先使用已含的下午茶與房間設施；有餘裕才去飯店正前方沙灘。', highlights: ['確認早餐、下午茶和泳池使用時段'], warnings: ['海況看警示旗；風浪大就留在飯店'] },
      { time: '19:00–20:30', title: '★ 4SEAs 海鮮 buffet 晚餐', placeId: 'fourseas', text: '從 M Hotel 沿 Võ Nguyên Giáp 短程步行到 268 號；這天只做入住後的近距離晚餐。', highlights: ['官方時段為 17:00–22:00；建議訂 19:00', '轉移日只選一間餐廳，不再加海邊夜間行程'], warnings: ['下午茶淺嚐即可，晚餐才有胃口', '海鮮與燒烤一次拿少量，覺得合口味再續'] }
    ]
  },
  '2026-10-07': {
    date: '10/7（三）', place: '美溪海灘・慢日子', eyebrow: 'DA NANG · BEACH & REST',
    title: '不去山茶半島：雨天也能在飯店把一天放慢',
    summary: '這天不再安排山茶半島。正選是睡飽後用房間、Spa、下午茶與室內 Lounge；只有雨停、風浪小才下樓到 Maia Beach Bar 喝椰子或咖啡。想換冷氣環境或購物才用一小段 Grab 時間去 AEON Mall Thanh Khê。',
    decision: '不預約、不硬排時段。預報有較高雨勢時，海灘與泳池都降為選配：下雨就留飯店／Mê Man Lounge，想出門吹冷氣購物才去 AEON；海況有警示旗便不下水。',
    places: {
      mhotel: { name: 'M Hotel Danang', coords: [16.05165, 108.248034], note: '無邊際泳池、下午茶、Mê Man Lounge 與午睡' },
      maia: { name: 'Maia Beach Bar', coords: [16.05159, 108.24819], note: '飯店樓下的沙灘座位、椰子、咖啡與調酒' },
      holiday: { name: 'The Holiday Beach Club & Dining', coords: [16.05214, 108.24824], note: '步行幾分鐘的海景躺椅備案' },
      aeon: { name: 'AEON Mall Đà Nẵng Thanh Khê', coords: [16.0665, 108.2043], note: '約 15–20 分鐘 Grab 的冷氣購物選配' },
      meman: { name: 'Mê Man Dining & Lounge', coords: [16.05165, 108.248034], note: '飯店 4 樓，雨天或不想曬太陽時喝飲料' },
      donglam: { name: 'Đông Lâm Restaurant', coords: [16.0509, 108.2448], note: '★ 12:00 中式午餐' },
      anthoiseafood: { name: 'Ăn Thôi Hải Sản', coords: [16.05165, 108.248034], note: '★ 18:30 海景海鮮晚餐；290 Võ Nguyên Giáp' },
      galina: { name: 'Galina Restaurant', coords: [16.0513, 108.2474], note: '午餐臨時替換；先確認散客供餐形式' }
    },
    mainRoute: ['mhotel', 'donglam', 'mhotel', 'maia', 'anthoiseafood', 'mhotel'],
    alternatives: [
      { label: '最懶正選：M Hotel → Maia Beach Bar → 飯店', ids: ['mhotel', 'maia', 'mhotel'] },
      { label: '沙灘換場：M Hotel → The Holiday Beach Club → 飯店', ids: ['mhotel', 'holiday', 'mhotel'] },
      { label: '下雨／想買東西：M Hotel → AEON Mall Thanh Khê → 飯店', ids: ['mhotel', 'aeon', 'mhotel'] },
      { label: '午餐臨時替換：M Hotel → Galina → 飯店', ids: ['mhotel', 'galina', 'mhotel'] }
    ],
    choices: [
      { label: '天氣穩定才選', title: '飯店放空＋Maia Beach Bar', text: '早餐後不設鬧鐘；在房間、無邊際泳池與已含下午茶之間自由切換。只有雨停、風浪小又真的想看海，才下樓到 Maia 點椰子、咖啡或果汁。', when: '天氣穩定、你們想把時間花在休息而非移動。下雨時改待房間、SPA 或 Mê Man Lounge。', mapId: 'maia', source: 'https://mhotel.vn/property/m-hotel-da-nang/', sourceText: 'M Hotel 官方設施資訊' },
      { label: '沙灘換景', title: 'The Holiday Beach Club', text: '若 Maia 當下太熱、太吵或客滿，就沿海步行幾分鐘到 The Holiday；可坐躺椅喝飲料看海，不必把它當成一場正式行程。', when: '想換座位，仍不想搭車；下午較舒服，晚間會比白天熱鬧。', mapId: 'holiday', source: 'https://danangfantasticity.com/en/discovery/the-holiday-beach-club-dining-the-ultimate-entertainment-hub-at-my-khe-beach-da-nang-2026', sourceText: '峴港旅遊局介紹' },
      { label: '購物選配', title: 'AEON Mall Thanh Khê', text: '只有真的想購物才出發：搭 Grab 約 15–20 分鐘，集中逛服飾、鞋包、美妝、超市／熟食與餐飲，逛到累就直接回飯店，不再接景點。', when: '下雨、太曬，或想買衣物、伴手禮與日用品；平日商場 10:00–22:00。', mapId: 'aeon', source: 'https://danangthanhkhe.aeonmall-vietnam.com/vi/danh-muc-cua-hang', sourceText: 'AEON Mall 官方店鋪與營業資訊' },
      { label: '午餐正選', title: '東林：近飯店的中式單點', text: '中午走到 55 Trần Bạch Đằng 吃中式料理；點兩、三道共享菜即可，避免影響下午茶與晚上吃海鮮的胃口。', when: '11:45–12:00 抵達最從容；預計 13:15 前回飯店。', mapId: 'donglam', source: 'https://restaurantguru.com/Dong-Lam-Restaurant-Da-Nang', sourceText: '東林地址與時段' },
      { label: '晚餐正選', title: 'Ăn Thôi Hải Sản：海景海鮮晚餐', text: '18:30 到 290 Võ Nguyên Giáp，選現撈海鮮、蒜香蝦或一份熱湯即可；它與 M Hotel 同在海濱路段，不需要為晚餐進市中心。', when: '下午在飯店休息得夠、想吃一餐正式海鮮時；建議先訂位。', mapId: 'anthoiseafood', source: 'https://www.tripadvisor.com/Restaurant_Review-g298085-d34194756-Reviews-An_Thoi_Hai_San-Da_Nang.html', sourceText: 'An Thoi Seafood 地址、時段與訂位資訊' },
      { label: '午餐備案', title: 'Galina Restaurant', text: '若東林當天休息或你們突然想改吃較多樣的餐點，就去 254 Võ Nguyên Giáp 的 Galina；出發前先電話確認兩人散客當日是單點還是 buffet。', when: '只用於午餐替換，不再和 An Thoi Seafood 疊成兩頓海鮮大餐。', mapId: 'galina', source: 'https://galinarestaurant.com/nha-hang', sourceText: 'Galina 官方地址與聯絡資訊' }
    ],
    timeline: [
      { time: '睡到自然醒–11:30', title: '早餐後繼續待在飯店', placeId: 'mhotel', text: '不設第二個目的地：回房補眠、慢慢整理照片、或到無邊際泳池發呆都可以。', highlights: ['優先使用已含早餐與下午茶', '今天的核心是少移動、少決策'], warnings: ['泳池與下午茶實際時段以入住時飯店公告為準'] },
      { time: '12:00–13:15', title: '★ 東林中式午餐', placeId: 'donglam', text: '到 55 Trần Bạch Đằng 吃中式單點；點菜以蔬菜、豆腐或一道主菜為主，份量不要過多。', highlights: ['避開 buffet，讓午餐更可控', '13:15 前離席，完整保留下午茶與午休'], warnings: ['東林午餐常見時段為 11:00–14:00；當天仍以電話或地圖公告為準'] },
      { time: '13:15–15:30', title: '回飯店下午茶、午睡、Spa 或室內 Lounge', placeId: 'mhotel', text: '回房休息，下午茶淺嚐即可；下雨時就做 SPA 或到 Mê Man Lounge，不把泳池／海灘當必做。', highlights: ['不為了夕陽硬撐到傍晚', '雨天與雷雨時優先室內 Mê Man Lounge'], warnings: ['十月海況與雷雨變化快，看到警示旗就不下水'] },
      { time: '15:30–日落前', title: '雨停才下樓：Maia Beach Bar', placeId: 'maia', text: '只在雨停、風浪小時從 M Hotel 走到沙灘座位，點一杯飲料看海、躺著聊天或滑手機；下雨就繼續留飯店，不需要為看海冒雨出門。', highlights: ['椰子、果汁、咖啡比烈酒更適合下午放空', '選遮陽座位，海景仍然完整'], warnings: ['若風雨、浪大或座位太吵，改留飯店 4 樓 Lounge'] },
      { time: '隨時 2–4 小時', title: '選配：AEON Mall Thanh Khê 購物', placeId: 'aeon', optional: true, text: '只有購物意願明確才搭 Grab 前往；先鎖定清單（衣物鞋包、美妝、超市／伴手禮），逛完就回 M Hotel 休息。', highlights: ['有冷氣、餐飲與超市，不受下雨影響', '平日 10:00–22:00，避免太晚才出發'], warnings: ['它不在飯店附近，約 15–20 分鐘 Grab；不要再加市區景點'] },
      { time: '18:30–20:00', title: '★ An Thoi Seafood 晚餐', placeId: 'anthoiseafood', text: '到 290 Võ Nguyên Giáp 吃海鮮晚餐；照當天胃口從現撈區選兩樣海鮮，再配一份青菜或熱湯，不必追求大份量。', highlights: ['同在海濱路段，餐後可直接步行回 M Hotel', '晚餐提早入座，避開較晚時段的人潮'], warnings: ['海鮮依重量計價時，點餐前確認單價、重量與料理費', '若午餐吃得較多，改點熱湯和一、兩樣小份海鮮即可'] }
    ]
  },
  '2026-10-08': {
    date: '10/8（四）', place: '峴港市區・室內慢遊', eyebrow: 'DA NANG · RAIN-FIRST PLAN',
    title: '雨天以占婆博物館與漢市場為主；乾爽才去五行山',
    summary: '預報有連日雨勢時，10:45 左右先去占婆雕刻博物館，再視體力到漢市場，午後回 M Hotel 完整休息；19:00 保留 Gang Yu Hot Pot。只有早上地面乾、沒有持續降雨時，才改走五行山水山、玄空洞與一處觀景台。',
    decision: '五行山不再是必做；只要持續下雨、雷雨或石階濕滑，整段直接換成占婆雕刻博物館＋漢市場，不挪到隔天補課。傍晚 APEC 與龍橋可直接刪除。',
    places: {
      mhotel: { name: 'M Hotel Danang', coords: [16.05165, 108.248034], note: '早餐、午休與住宿' },
      marble: { name: '五行山・水山', coords: [16.0034, 108.2636], note: '晴天唯一大景點' },
      cham: { name: '占婆雕刻博物館', coords: [16.0604, 108.2236], note: '雨天室內替代' },
      han: { name: '漢市場', coords: [16.0683, 108.2241], note: '雨天替代，可提前買伴手禮' },
      apec: { name: 'APEC 公園', coords: [16.0551, 108.2241], note: '傍晚短走' },
      dragon: { name: '龍橋', coords: [16.0610, 108.2270], note: '只看夜景，不等噴火' },
      galina: { name: 'Galina Restaurant', coords: [16.0513, 108.2474], note: '★ 13:45 午餐；254 Võ Nguyên Giáp' },
      gangyu: { name: 'Gang Yu Hot Pot', coords: [16.0648, 108.2217], note: '★ 19:00 晚餐' }
    },
    mainRoute: ['mhotel', 'cham', 'han', 'galina', 'mhotel', 'gangyu', 'mhotel'],
    alternatives: [{ label: '地乾、雨小才選：M Hotel → 五行山 → Galina → M Hotel', ids: ['mhotel', 'marble', 'galina', 'mhotel'] }],
    choices: [
      { label: '雨天正選', title: '占婆博物館＋漢市場', text: '五行山整段取消，不挪到回程日補課；先看博物館，再視體力採買，完成後回飯店午休。', when: '持續下雨、雷雨、石階濕滑，或今天只想輕鬆走。', mapId: 'cham' },
      { label: '乾爽選配', title: '五行山精華版', text: '搭電梯上山後只走水山、玄空洞、寺院與一處觀景台，13:30 左右離開，保住午後休息。', when: '地面乾、雨勢小，而且願意走石階。', mapId: 'marble', source: 'https://danangfantasticity.com/en/the-marble-mountains', sourceText: '峴港官方資訊' },
      { label: '乾爽才加', title: 'APEC、龍橋與 Gang Yu', text: '傍晚乾爽且有興致才短走公園與橋；19:00 準時吃火鍋。週四沒有例行噴火，不為表演延長行程。', when: '下雨、積水或風大時刪除散步，直接保留晚餐。', mapId: 'gangyu' }
    ],
    timeline: [
      { time: '09:00–10:30', title: '早餐與天氣決定', placeId: 'mhotel', text: '看即時雨勢與地面狀況；預報持續有雨時直接選占婆博物館與漢市場，地乾、雨小才選五行山。', highlights: ['準備防滑鞋、飲水與輕便雨具'], warnings: ['不要因為已排進行程就勉強走濕滑石階'] },
      { time: '10:45–13:30', title: '雨天正選：占婆博物館＋漢市場', placeId: 'cham', text: '先在室內看占婆砂岩雕刻，再視雨勢與體力到漢市場完成伴手禮；不趕行程，約13:30離開即可。', highlights: ['博物館看濕婆、象神與美山／茶喬展區的風格差異', '漢市場買完後，10/9可直接留飯店或去 LUK LAK'], warnings: ['雷雨較強或路面積水時，以 Grab 點到點移動，不走河岸'] },
      { time: '13:45–17:00', title: '★ Galina 午餐＋飯店午休', placeId: 'galina', text: '占婆博物館／漢市場結束後搭 Grab 到 254 Võ Nguyên Giáp 的 Galina；選單點或少量 buffet，13:45 左右開始用餐，吃完回 M Hotel 午睡、下午茶或留在室內。', highlights: ['Galina 位在飯店附近，午餐後不需要繞進市中心', '完整保留約三小時恢復體力'], warnings: ['出發前確認當日兩人散客的單點／buffet 形式與價格；避免吃太飽，晚上仍有 Gang Yu 火鍋'] },
      { time: '17:30–18:50', title: '留在飯店或直接去晚餐', placeId: 'mhotel', text: '雨天不安排 APEC 公園與龍橋；在飯店休息、叫車前往火鍋即可。若傍晚乾爽且有興致，才短走河岸。', highlights: ['刪掉戶外段不影響晚餐', '多留一點時間整理行李或休息'], warnings: ['雷雨、積水或風大時不要為夜景出門'] },
      { time: '19:00–20:30', title: '★ Gang Yu Hot Pot', placeId: 'gangyu', text: '前往 87 Yên Bái 吃火鍋，吃完直接回飯店。', highlights: ['建議事先訂 19:00；午餐保持簡單'], warnings: ['火鍋用餐時間較長，今晚不再加景點'] },
      { time: '乾爽選配', title: '五行山・水山精華', placeId: 'marble', optional: true, text: '只有地面乾、雨小時才搭電梯上山走玄空洞、寺院與一處觀景台，不蒐集全部洞窟。', highlights: ['玄空洞看天然採光、岩壁與佛像空間', '觀景台看海岸、市區與石灰岩山群'], warnings: ['洞內與石階潮濕；扶手不足處放慢，不穿拖鞋'] }
    ]
  },
  '2026-10-09': {
    date: '10/9（五）', place: '峴港市中心 → 機場', eyebrow: 'DEPARTURE DAY · PROTECT THE FLIGHT',
    title: 'LUK LAK 午餐後提早去機場，預留雨天車程',
    summary: '早餐後整理行李並寄放；若10/8已買完伴手禮，上午直接留飯店，13:00 吃 LUK LAK。雨天不排河岸散步，14:45 左右回 M Hotel 取行李，約15:45–16:00 就前往機場。',
    decision: 'LUK LAK 午餐最後點餐 13:45，是今天唯一不能拖延的節點；雨天以航班緩衝優先，不安排按摩、河岸散步或跨區景點，叫車時間提前到15:45–16:00。',
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
      { label: '不可壓縮', title: '15:45–16:00 前往機場', text: '餐後不安排按摩、河岸散步與跨區景點；14:45 左右回飯店取行李，雨天就直接叫車。', when: 'IT552 19:45 起飛；預留雨天市區車流、報到與安檢緩衝。', mapId: 'dad' }
    ],
    timeline: [
      { time: '09:00–10:45', title: '早餐、收拾、寄放行李', placeId: 'mhotel', text: '照平常時間起床，退房後把大件行李交給飯店保管。', highlights: ['護照、票券、藥品、行動電源與易碎品留隨身'], warnings: ['向飯店確認取行李憑證與叫車上車點'] },
      { time: '11:15–12:40', title: '漢市場伴手禮', placeId: 'han', text: '主攻咖啡、腰果、餅乾與包裝乾貨，不逛服飾樓層。', highlights: ['先列清單，確認保存期限、密封與價格', '易碎或怕壓商品另外裝袋'], warnings: ['12:40 必須收尾，不能犧牲 LUK LAK 最後點餐時間'] },
      { time: '13:00–14:15', title: '★ LUK LAK 午餐', placeId: 'luklak', text: '由漢市場沿白藤街步行前往 28 Bạch Đằng。', highlights: ['13:00 入座能從容點餐與用餐'], warnings: ['官方午餐最後點餐 13:45；不要把入座時間推到 14:00'] },
      { time: '14:15–14:45', title: '雨天直接收尾；乾爽才短喝咖啡', placeId: 'river', text: '雨天直接回 M Hotel；只有乾爽且時間充裕才在海州市中心短喝咖啡，不走河岸。', highlights: ['回程日只選一件事，且可隨時取消'], warnings: ['不安排按摩，也不跨去山茶半島或五行山'] },
      { time: '14:45–16:00', title: '取行李、提早前往機場', placeId: 'mhotel', text: '回 M Hotel 取行李；雨天建議15:45出發，天氣穩定也不晚於16:00。', highlights: ['上車前確認護照、手機、錢包與所有行李件數'], warnings: ['IT552 19:45 起飛；保留雨天市區車流、報到與安檢緩衝'] },
      { time: '約 17:00 後', title: '峴港機場報到', placeId: 'dad', text: '完成報到、托運與出境流程後再用剩餘時間逛免稅區。', highlights: ['核對 IT552 航班與登機門資訊'], warnings: ['行動電源與備用鋰電池依航空規定隨身攜帶'] }
    ]
  }
};

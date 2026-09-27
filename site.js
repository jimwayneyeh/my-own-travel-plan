const days = [
  { id: '2026-10-03', date: '10/3（六）', place: '峴港機場 → 會安', title: 'Klook 接機、入住，晚間視體力短走', stay: 'Hotel Royal Hoi An', image: 'https://izitour.com/media/ckeditor/hoi-an-vietnam-1.webp', alt: '會安河岸燈籠', plan: ['18:10 抵達峴港', 'Klook 7 人座接機直達會安', '有精神才看河岸夜色'], tag: '接機已確認' },
  { id: '2026-10-04', date: '10/4（日）', place: '會安古城', title: '古城慢走、挑絲巾與會安夜', stay: 'Hotel Royal Hoi An', image: 'https://bvhttdl.mediacdn.vn/2019/12/4/22-1575444930391357177624-1575454914343-15754549150641583342735.jpg', alt: '會安日本橋', plan: ['睡飽後由日本橋往東散步', 'Metiseko 挑絲巾', 'Red Bean 與夜間方案'], tag: '完整會安日' },
  { id: '2026-10-05', date: '10/5（一）', place: '會安 → 巴拿山', title: '10:30 離開會安，辦理房客上山', stay: 'Mercure Bana Hills', image: 'https://mediaen.vietnamplus.vn/images/cc571c067c64d4f85fb35f04673bf2968c14e8b40b6bd340d8146a8023dc5221ece1bcdfc256efeeae6dd06768e18dfb/7_1.jpg', alt: '巴拿山金橋', plan: ['預約 Grab 6 人座到 Toc Tien Station', '山下櫃檯辦票與交接行李', '法國村與山頂夜色'], tag: 'Grab 轉場日' },
  { id: '2026-10-06', date: '10/6（二）', place: '巴拿山 → 峴港', title: '金橋天氣窗口、下山入住海邊', stay: 'M HOTEL DANANG', image: 'https://danangfantasticity.com/wp-content/uploads/2024/03/chiem-nguong-bien-my-khe-1-trong-10-bai-bien-dep-nhat-chau-a-05.jpg', alt: '美溪海灘', plan: ['上午依能見度走金橋', '下午下山入住 M Hotel', '19:00 Đông Lâm 晚餐'], tag: '山海轉場' },
  { id: '2026-10-07', date: '10/7（三）', place: '峴港北線', title: '飯店上午與山茶半島', stay: 'M HOTEL DANANG', image: 'https://danangfantasticity.com/wp-content/uploads/2022/01/linh-ung-pagoda-must-see-destination-for-tourists-to-da-nang-3.png', alt: '山茶半島靈應寺', plan: ['上午使用飯店設施', '下午靈應寺與海岸景色', 'Ăn Thôi／Poseidon 二選一'], tag: '渡假主場' },
  { id: '2026-10-08', date: '10/8（四）', place: '峴港南線＋河岸', title: '五行山、完整午休與城市夜色', stay: 'M HOTEL DANANG', image: 'https://danangfantasticity.com/wp-content/uploads/2025/08/danh-thang-ngu-hanh-son-da-nang-002.jpg', alt: '五行山玄空洞', plan: ['上午五行山精華', '午後回飯店休息', 'APEC／龍橋與 Gang Yu'], tag: '一個大景點' },
  { id: '2026-10-09', date: '10/9（五）', place: '峴港市中心 → 機場', title: '最後採買、LUK LAK 與回程', stay: '回程航班 IT552', image: 'https://danangfantasticity.com/wp-content/uploads/2023/10/nhung-khu-cho-noi-tieng-tai-da-nang-khong-the-bo-qua-scaled.jpg', alt: '峴港漢市場', plan: ['漢市場最後採買', '13:00 LUK LAK 午餐', '16:30 左右前往機場'], tag: '保護回程緩衝' }
];

const stays = [
  { dates: '10/3 - 10/5 · 2 晚', name: 'Hotel Royal Hoi An Danang', room: '豪華大床房 · 2 位', role: '會安古城基地', notes: '含早餐。抵達後直接入住，10/5 早餐後退房前往巴拿山。' },
  { dates: '10/5 - 10/6 · 1 晚', name: 'Mercure Danang French Village Bana Hills', room: 'Superior King Room · 2 位', role: '巴拿山天氣窗口', notes: '含早餐與 Wi‑Fi；園區及纜車票仍需依訂房與現場確認。' },
  { dates: '10/6 - 10/9 · 3 晚', name: 'M HOTEL DANANG', room: '海景雙床浴缸房 · 2 位', role: '峴港海邊主場', notes: '含每日早餐、下午茶、迷你吧、迎賓水果與餐飲 9 折。' }
];

document.querySelector('#schedule-grid').innerHTML = days.map(day => `
  <a class="day-card" href="days/${day.id}.html" aria-label="查看 ${day.date} ${day.place} 詳細規劃">
    <img src="${day.image}" alt="${day.alt}" loading="lazy" />
    <div class="day-content">
      <div class="day-meta"><span>${day.date}</span><span>${day.place}</span></div>
      <h3>${day.title}</h3>
      <p class="stay-line">今晚｜${day.stay}</p>
      <ul>${day.plan.map(item => `<li>${item}</li>`).join('')}</ul>
      <div class="card-bottom"><span>${day.tag}</span><strong>查看當日細節 <b aria-hidden="true">→</b></strong></div>
    </div>
  </a>`).join('');

document.querySelector('#stay-grid').innerHTML = stays.map(stay => `
  <article class="stay-card">
    <p>${stay.dates}</p><h3>${stay.name}</h3><strong>${stay.room}</strong>
    <span class="stay-role">${stay.role}</span><p class="stay-notes">${stay.notes}</p>
  </article>`).join('');

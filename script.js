/* ---------- Data ---------- */
// cat: museum 博物館 / history 歷史街區 / canal 運河水岸 / nature 公園綠地 / free 免費
const attractions = [
  { name: "國家博物館 Rijksmuseum", emoji: "🖼️", cat: ["museum"], price: "約 €25", time: "3 小時",
    hours: "每日 09:00–17:00", closed: "全年開放，少數節日可能調整",
    desc: "荷蘭最大藝術與歷史博物館，收藏林布蘭〈夜巡〉與維梅爾〈倒牛奶的女僕〉，建築本身也值得細看。",
    bg: "linear-gradient(135deg,#c9a66b,#7a5a2b)" },
  { name: "梵谷博物館 Van Gogh Museum", emoji: "🌻", cat: ["museum"], price: "約 €22", time: "2 小時",
    hours: "每日約 09:00–17:00（部分時段週五延長）", closed: "全年開放，少數節日可能調整",
    desc: "全球最完整的梵谷收藏，從早期暗沉畫風到〈向日葵〉、〈杏花〉，依創作歷程一路看下來。",
    bg: "linear-gradient(135deg,#f4c542,#c47f0a)" },
  { name: "安妮之家 Anne Frank House", emoji: "📖", cat: ["museum", "history"], price: "約 €16", time: "1–1.5 小時",
    hours: "每日約 09:00–19:00（夏季延長至 22:00）", closed: "少數猶太節日與國定假日，依官網公告",
    desc: "安妮日記的藏身之處，以真實空間見證二戰歷史。需提前線上訂票，不接受現場購票。",
    bg: "linear-gradient(135deg,#8a9bb0,#3b4a5e)" },
  { name: "阿姆斯特丹市立博物館 Stedelijk", emoji: "🎨", cat: ["museum"], price: "約 €22", time: "2 小時",
    hours: "每日 10:00–18:00（週五延長至 22:00）", closed: "無固定休館日，聖誕節、元旦等節日可能調整",
    desc: "現代與當代藝術、設計的重鎮，蒙德里安、馬列維奇等大師作品齊全，就在博物館廣場旁。",
    bg: "linear-gradient(135deg,#ef6f6c,#b23a48)" },
  { name: "林布蘭之家 Museum Het Rembrandthuis", emoji: "🖌️", cat: ["museum", "history"], price: "約 €17", time: "1.5 小時",
    hours: "每日 10:00–17:00", closed: "聖誕節（12/25）、元旦等少數節日",
    desc: "林布蘭生活與作畫近 20 年的故居，重現 17 世紀畫室與蝕刻版畫工藝。",
    bg: "linear-gradient(135deg,#b08968,#6f4e37)" },
  { name: "Moco 現代藝術館", emoji: "🎭", cat: ["museum"], price: "約 €24", time: "1.5 小時",
    hours: "每日約 09:00–18:00（週末可能延長）", closed: "全年開放，展覽換檔期間可能調整",
    desc: "以 Banksy、Kusama 等街頭與當代藝術為主，展間現代好拍，是博物館廣場的人氣景點。",
    bg: "linear-gradient(135deg,#9d4edd,#5a189a)" },
  { name: "運河環線 UNESCO 世界遺產", emoji: "🚤", cat: ["canal", "history"], price: "船遊約 €18", time: "1–1.5 小時",
    desc: "17 世紀規劃的同心圓運河與窄長山牆屋，搭運河遊船或沿岸散步，最能感受城市的靈魂。",
    bg: "linear-gradient(135deg,#5fa8d3,#1b4965)" },
  { name: "九條小街 De 9 Straatjes", emoji: "🛍️", cat: ["history", "free"], price: "免費", time: "1.5–2 小時",
    desc: "運河環之間九條小街，密集分布獨立設計店、二手古著與咖啡館，適合慢慢逛。",
    bg: "linear-gradient(135deg,#e5989b,#b5838d)" },
  { name: "水壩廣場與王宮 Dam Square", emoji: "👑", cat: ["history", "free"], price: "廣場免費", time: "1 小時",
    desc: "城市的起點與中心，鄰近王宮、新教堂與國家紀念碑，是逛老城區的最佳基地。",
    bg: "linear-gradient(135deg,#a8b5c2,#5c6f82)" },
  { name: "喬丹區 Jordaan", emoji: "🏘️", cat: ["history", "canal", "free"], price: "免費", time: "2 小時",
    desc: "昔日工人區，如今是最有味道的住宅街區，畫廊、小酒館與運河旁的週六市集都很迷人。",
    bg: "linear-gradient(135deg,#84a98c,#354f52)" },
  { name: "隆德爾公園 Vondelpark", emoji: "🌳", cat: ["nature", "free"], price: "免費", time: "1–2 小時",
    desc: "市中心最大的都會公園，夏日草地野餐、租車環湖，博物館看累了來這裡放鬆。",
    bg: "linear-gradient(135deg,#8fc98a,#3a7d44)" },
  { name: "花市 Bloemenmarkt", emoji: "🌷", cat: ["canal", "free"], price: "免費", time: "30–45 分鐘",
    desc: "全球唯一的漂浮花市，攤位開在運河上，販售鬱金香球莖、乾燥花與紀念品。",
    bg: "linear-gradient(135deg,#f28482,#f6bd60)" },
  { name: "Albert Cuyp 市集", emoji: "🧀", cat: ["history", "free"], price: "免費入場", time: "1–1.5 小時",
    desc: "位於 De Pijp 的荷蘭最大露天市集，鯡魚、起司、焦糖煎餅與熱騰騰的小吃通通有。",
    bg: "linear-gradient(135deg,#f4a261,#bc6c25)" },
  { name: "A'DAM Lookout 觀景台", emoji: "🎡", cat: ["canal"], price: "約 €17", time: "1–1.5 小時",
    desc: "搭免費渡輪到北區，登上 20 層高樓，360° 俯瞰阿姆斯特丹，還有高空鞦韆可挑戰。",
    bg: "linear-gradient(135deg,#48cae4,#0077b6)" },
];

const nearby = [
  { name: "桑斯安斯風車村 Zaanse Schans", emoji: "🌬️", price: "村區免費，博物館另計", time: "半天", from: "🚆 火車＋步行約 25–30 分",
    desc: "保存完好的傳統風車與木造民宅，可參觀榨油、鋸木風車，還有木鞋工坊與起司農場試吃。",
    bg: "linear-gradient(135deg,#7fb069,#386641)" },
  { name: "庫肯霍夫花園 Keukenhof", emoji: "🌷", price: "約 €20 起", time: "半天–全天", from: "🚌 巴士約 45–60 分",
    desc: "世界最大的球根花卉公園，數百萬朵鬱金香盛開。每年僅開放約 3 月下旬至 5 月中，出發前請確認日期。",
    bg: "linear-gradient(135deg,#f06292,#ad1457)" },
  { name: "哈倫 Haarlem", emoji: "⛪", price: "免費逛街", time: "半天", from: "🚆 火車約 15 分",
    desc: "氣質小城，有聖巴福大教堂、荷蘭最古老的慈善庭院與弗蘭斯・哈爾斯博物館，步行即可走完。",
    bg: "linear-gradient(135deg,#a2b9d6,#4a6fa5)" },
  { name: "沃倫丹 Volendam 與馬爾肯 Marken", emoji: "⛵", price: "免費，渡輪約 €10", time: "半天", from: "🚌 巴士約 30–40 分",
    desc: "傳統漁村與綠色木屋，可換上傳統服飾拍照、品嚐炸魚，搭渡輪連遊兩個小鎮。",
    bg: "linear-gradient(135deg,#90e0ef,#0096c7)" },
  { name: "阿克馬爾起司市集 Alkmaar", emoji: "🧀", price: "免費觀賞", time: "半天", from: "🚆 火車約 40 分",
    desc: "傳統起司市集，搬運工抬著整塊金黃起司叫賣，約 4–9 月每週五上午舉行，出發前請再確認。",
    bg: "linear-gradient(135deg,#ffd166,#e09f3e)" },
  { name: "台夫特 Delft", emoji: "🏺", price: "免費逛街", time: "半天–1 天", from: "🚆 火車約 1 小時",
    desc: "維梅爾的故鄉、藍白陶瓷發源地。運河小城氣氛悠閒，可參觀皇家台夫特工廠與新教堂。",
    bg: "linear-gradient(135deg,#8ecae6,#023e8a)" },
  { name: "烏特勒支 Utrecht", emoji: "🏰", price: "免費逛街", time: "半天–1 天", from: "🚆 火車約 30 分",
    desc: "全荷蘭最有活力的大學城，獨特的雙層運河與碼頭咖啡館，可登上 Dom 塔遠眺全城。",
    bg: "linear-gradient(135deg,#b7b7a4,#6b705c)" },
  { name: "羊角村 Giethoorn", emoji: "🛶", price: "免費，船約 €20 起", time: "1 天", from: "🚆＋🚌 約 2 小時",
    desc: "沒有汽車的水鄉，茅草屋頂與木橋沿運河散布，可租電動小船或騎腳踏車慢遊。",
    bg: "linear-gradient(135deg,#95d5b2,#2d6a4f)" },
];

const foods = [
  { name: "荷式煎餅屋 Pannenkoekenhuis", emoji: "🥞", price: "約 €10–18",
    desc: "比法式可麗餅更厚更大，可選鹹（培根、起司、蘑菇）或甜（蘋果、糖漿、水果）口味。",
    tryit: "必試：培根蘋果煎餅、Poffertjes 小鬆餅" },
  { name: "布朗咖啡館 Bruin Café", emoji: "🍺", price: "啤酒約 €5–7",
    desc: "木質裝潢、燭光與百年歷史的荷式小酒館，傍晚來杯啤酒配下酒菜是在地習慣。",
    tryit: "必試：Bitterballen 炸肉丸、荷蘭起司拼盤" },
  { name: "印尼飯桌 Indonesian Rijsttafel", emoji: "🍛", price: "約 €30–50／人",
    desc: "殖民歷史帶來的荷蘭國民級料理，一次上桌十多道小菜，配白飯與沙嗲，可多人分食。",
    tryit: "必試：沙嗲串、仁當牛肉、Nasi Goreng" },
  { name: "海鮮攤與鯡魚 Haringhandel", emoji: "🐟", price: "約 €4–10",
    desc: "街頭與市集的海鮮小攤，生醃鯡魚配洋蔥與酸黃瓜，是最道地的荷蘭小吃。",
    tryit: "必試：Hollandse Nieuwe 新鮮鯡魚、炸魚 Kibbeling" },
  { name: "起司專賣店 Kaaswinkel", emoji: "🧀", price: "試吃免費，購買 €5 起",
    desc: "Gouda、Edam、Leerdammer 等各式熟成起司可試吃，也販售真空包裝，適合帶回國當伴手禮。",
    tryit: "必試：陳年高達 Oude Gouda、香草起司" },
  { name: "街頭炸物與薯條 Snackbar", emoji: "🍟", price: "約 €3–7",
    desc: "牆上的自動販賣炸物與現炸薯條，佐美乃滋是荷式吃法，宵夜與趕行程都適合。",
    tryit: "必試：Patat 薯條、Kroket 可樂餅、FEBO 自動販賣機" },
  { name: "咖啡館與甜點 Koffiehuis", emoji: "☕", price: "約 €4–9",
    desc: "手工烘焙的蘋果派、焦糖煎餅與濃縮咖啡，很多小店位於運河邊，適合歇腳。",
    tryit: "必試：Appeltaart 蘋果派、Stroopwafel 焦糖煎餅" },
  { name: "傳統家常菜 Eetcafé", emoji: "🥔", price: "約 €18–28",
    desc: "以馬鈴薯泥、香腸、燉菜與豌豆湯為主的暖心料理，天冷時特別受歡迎。",
    tryit: "必試：Stamppot 馬鈴薯泥、Erwtensoep 豌豆湯" },
  { name: "多元文化料理", emoji: "🌯", price: "約 €8–20",
    desc: "蘇利南、土耳其、摩洛哥與中東移民帶來的平價美食，在 De Pijp 與 Oost 區尤其密集。",
    tryit: "必試：蘇利南 Roti 捲餅、土耳其 Pide 披薩" },
];

const stays = [
  { area: "中央車站周邊 Centrum", badge: "交通最方便", desc: "鐵路、地鐵、電車與往週邊的火車都在此集散，前往史基浦機場與風車村最方便；周邊熱鬧，夜間較吵。", price: "€110–300／晚" },
  { area: "運河環／九條小街／喬丹區", badge: "氛圍最浪漫", desc: "住在運河屋改建的精品旅館，走路可到安妮之家、九條小街與水壩廣場，是首次造訪的首選。", price: "€180–450／晚" },
  { area: "博物館區 Museumkwartier", badge: "安靜舒適", desc: "緊鄰國家博物館、梵谷博物館與隆德爾公園，環境優雅安靜，適合以博物館為主的行程。", price: "€170–400／晚" },
  { area: "De Pijp", badge: "美食與市集", desc: "年輕、多元又有生活感，Albert Cuyp 市集與各國餐廳環繞，搭電車 10 分鐘左右到市中心。", price: "€120–260／晚" },
  { area: "東區 Oost／Oosterpark", badge: "高 CP 值", desc: "住宅氣息濃厚，價格較市中心親民，交通便利，適合想省預算又不想離市區太遠的旅客。", price: "€90–200／晚" },
  { area: "北區 Noord／NDSM", badge: "文青創意", desc: "搭免費渡輪 5–10 分鐘過河，舊船廠改建的藝文區，特色旅館與工業風咖啡館聚集，價格較低。", price: "€80–200／晚" },
];

/* ---------- Helpers ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

/* Favorites (persisted per browser) */
let favs = new Set();
try { favs = new Set(JSON.parse(localStorage.getItem("ams-favs") || "[]")); } catch (e) {}
const saveFavs = () => {
  try { localStorage.setItem("ams-favs", JSON.stringify([...favs])); } catch (e) {}
};

/* ---------- Render ---------- */
function cardHTML(a, withFav) {
  const on = favs.has(a.name);
  const free = /^免費|^廣場免費|^村區免費/.test(a.price);
  return `
    <article class="card" data-name="${a.name}">
      ${withFav ? `<button class="fav-btn ${on ? "on" : ""}" aria-label="收藏 ${a.name}" aria-pressed="${on}">${on ? "♥" : "♡"}</button>` : ""}
      <div class="card-visual" style="background:${a.bg}" aria-hidden="true">${a.emoji}</div>
      <div class="card-body">
        <h3>${a.name}</h3>
        <p>${a.desc}</p>
        <div class="meta">
          <span class="tag ${free ? "free" : ""}">${a.price}</span>
          <span class="tag">⏱ ${a.time}</span>
          ${a.from ? `<span class="tag from">${a.from}</span>` : ""}
        </div>
        ${a.hours ? `<ul class="hours">
          <li><span>🕘 營業</span>${a.hours}</li>
          <li><span>🚫 休館</span>${a.closed}</li>
        </ul>` : ""}
      </div>
    </article>`;
}

function renderAttractions() {
  $("#attractionGrid").innerHTML = attractions.map(a => cardHTML(a, true)).join("");
}

function renderNearby() {
  $("#nearbyGrid").innerHTML = nearby.map(a => cardHTML(a, false)).join("");
}

function renderFood() {
  $("#foodGrid").innerHTML = foods.map(f => `
    <article class="food">
      <span class="emoji" aria-hidden="true">${f.emoji}</span>
      <h3>${f.name}</h3>
      <div class="price">${f.price}</div>
      <p>${f.desc}</p>
      <p class="try">${f.tryit}</p>
    </article>`).join("");
}

function renderStays() {
  $("#stayGrid").innerHTML = stays.map(s => `
    <article class="stay">
      <span class="badge">${s.badge}</span>
      <h3>${s.area}</h3>
      <p>${s.desc}</p>
      <div class="price">${s.price}</div>
    </article>`).join("");
}

/* ---------- Interactions ---------- */
let activeFilter = "all";

function applyFilters() {
  const q = $("#search").value.trim().toLowerCase();
  let shown = 0;
  $$("#attractionGrid .card").forEach(card => {
    const a = attractions.find(x => x.name === card.dataset.name);
    const byFilter = activeFilter === "all"
      || (activeFilter === "fav" ? favs.has(a.name)
        : activeFilter === "free" ? a.cat.includes("free")
        : a.cat.includes(activeFilter));
    const byText = !q || (a.name + a.desc).toLowerCase().includes(q);
    const visible = byFilter && byText;
    card.classList.toggle("hidden", !visible);
    if (visible) shown++;
  });
  $("#empty").hidden = shown > 0;
  $("#favCount").textContent = favs.size;
}

$$(".chip").forEach(chip => chip.addEventListener("click", () => {
  $$(".chip").forEach(c => c.classList.toggle("active", c === chip));
  activeFilter = chip.dataset.filter;
  applyFilters();
}));

$("#search").addEventListener("input", applyFilters);

$("#attractionGrid").addEventListener("click", e => {
  const btn = e.target.closest(".fav-btn");
  if (!btn) return;
  const name = btn.closest(".card").dataset.name;
  favs.has(name) ? favs.delete(name) : favs.add(name);
  saveFavs();
  const on = favs.has(name);
  btn.classList.toggle("on", on);
  btn.textContent = on ? "♥" : "♡";
  btn.setAttribute("aria-pressed", on);
  applyFilters();
});

/* Budget calculator (EUR) */
const fmt = n => "€" + Math.round(n).toLocaleString("en-US");
function calcBudget() {
  const days = +$("#days").value;
  const people = +$("#people").value;
  const stayOpt = $("#stayLevel").selectedOptions[0];
  const stayRate = +stayOpt.value;
  const nights = Math.max(days - 1, 0);
  // 床位以「每人」計價，其餘以「每房」計價（2 人一房）
  const stay = stayOpt.dataset.unit === "person"
    ? stayRate * people * nights
    : stayRate * Math.ceil(people / 2) * nights;
  const food = +$("#foodLevel").value * people * days;
  const act = +$("#actLevel").value * people * days;
  const total = stay + food + act;
  $("#daysVal").textContent = days;
  $("#peopleVal").textContent = people;
  $("#bStay").textContent = fmt(stay);
  $("#bFood").textContent = fmt(food);
  $("#bAct").textContent = fmt(act);
  $("#total").textContent = fmt(total);
  $("#perPerson").textContent = `平均每人約 ${fmt(total / people)}（不含機票與購物）`;
}
["days", "people", "stayLevel", "foodLevel", "actLevel"].forEach(id =>
  $("#" + id).addEventListener("input", calcBudget));

/* Nav */
const menuBtn = $(".menu-btn");
const nav = $("#nav");
menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
nav.addEventListener("click", e => {
  if (e.target.tagName === "A") {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", false);
  }
});

/* Newsletter */
$("#subscribeForm").addEventListener("submit", e => {
  e.preventDefault();
  const email = $("#email").value.trim();
  const msg = $("#formMsg");
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  msg.className = "form-msg " + (ok ? "ok" : "err");
  msg.textContent = ok ? "訂閱成功！我們會把私房路線寄給你 ✈️" : "請輸入有效的 Email 位址";
  if (ok) e.target.reset();
});

/* Planner */
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const placeNames = [...attractions, ...nearby].map(a => a.name);
const esc = s => s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// 以 yyyy-mm-dd 拆解後用本地時間建立日期，避免時區造成差一天
function parseDate(v) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(v);
  return m ? { month: +m[2], day: +m[3], weekday: WEEKDAYS[new Date(+m[1], +m[2] - 1, +m[3]).getDay()] } : null;
}

/* Supabase（專案 Test0920）：以 REST API 存取 public.trip_plans。
   publishable key 可公開；資料由 RLS 依 x-client-id 限制只能讀寫自己的紀錄。 */
const SUPABASE_URL = "https://vvvurdkfppuxuxobmgyl.supabase.co";
const SUPABASE_KEY = "sb_publishable_2SR5eGRk7X5xFZZjAyf9RA_ZddH4Ejo";

// 每個瀏覽器一組隨機 ID（非登入機制：清除瀏覽器資料或換裝置就看不到原本的紀錄）
function getClientId() {
  try {
    let id = localStorage.getItem("ams-client-id");
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem("ams-client-id", id);
    }
    return id;
  } catch (e) {
    return crypto.randomUUID();
  }
}
const clientId = getClientId();

async function api(path, options = {}) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    ...options,
    headers: {
      apikey: SUPABASE_KEY,
      "x-client-id": clientId,
      "Content-Type": "application/json",
      ...options.headers,
    },
  });
  if (!res.ok) throw new Error(`Supabase ${res.status}: ${await res.text()}`);
  return res.status === 204 ? null : res.json();
}

let plans = [];
let plansState = "loading"; // loading | ready | error

async function loadPlans() {
  try {
    plans = await api("trip_plans?select=id,place,plan_date,note&order=plan_date.asc,created_at.asc");
    plansState = "ready";
  } catch (e) {
    console.error(e);
    plansState = "error";
  }
  renderPlans();
}

function renderPlans() {
  const list = $("#planList");
  if (plansState === "loading") {
    list.innerHTML = `<li class="plan-empty">載入中…</li>`;
    return;
  }
  if (plansState === "error") {
    list.innerHTML = `<li class="plan-empty">無法連線到資料庫，請稍後重新整理頁面。</li>`;
    return;
  }
  if (!plans.length) {
    list.innerHTML = `<li class="plan-empty">還沒有記錄，先從上方加入第一個景點吧。</li>`;
    return;
  }
  list.innerHTML = plans.map(p => {
    const d = parseDate(p.plan_date);
    return `
    <li class="plan-item" data-id="${p.id}">
      <div class="plan-date"><b>${d.month}/${d.day}</b><span>${d.weekday}</span></div>
      <div><h3>${esc(p.place)}</h3>${p.note ? `<p>${esc(p.note)}</p>` : ""}</div>
      <button class="plan-del" type="button" aria-label="刪除 ${esc(p.place)}">刪除</button>
    </li>`;
  }).join("");
}

function updateWeekday() {
  const d = parseDate($("#planDate").value);
  const out = $("#planWeekday");
  out.textContent = d ? `${d.month}月${d.day}日 ${d.weekday}` : "—";
  out.classList.toggle("set", !!d);
}

$("#placeList").innerHTML = placeNames.map(n => `<option value="${esc(n)}"></option>`).join("");
$("#planDate").addEventListener("input", updateWeekday);
$("#planNote").addEventListener("input", e => {
  $("#noteCount").textContent = `${e.target.value.length} / 200`;
});

$("#planForm").addEventListener("submit", async e => {
  e.preventDefault();
  const form = e.target;
  const place = $("#planPlace").value.trim();
  const date = $("#planDate").value;
  const note = $("#planNote").value.trim();
  const msg = $("#planMsg");
  const submitBtn = $("button[type=submit]", form);
  const fail = text => { msg.className = "form-msg err"; msg.textContent = text; };
  if (!placeNames.includes(place)) return fail("景點須從清單中選擇，請輸入關鍵字後點選建議項目");
  if (!parseDate(date)) return fail("請選擇日期");

  submitBtn.disabled = true;
  try {
    const [row] = await api("trip_plans?select=id,place,plan_date,note", {
      method: "POST",
      headers: { Prefer: "return=representation" },
      body: JSON.stringify({ client_id: clientId, place, plan_date: date, note }),
    });
    plans.push(row);
    plans.sort((a, b) => a.plan_date.localeCompare(b.plan_date));
    plansState = "ready";
    renderPlans();
    form.reset();
    updateWeekday();
    $("#noteCount").textContent = "0 / 200";
    msg.className = "form-msg ok";
    msg.textContent = "已儲存到資料庫 ✓";
  } catch (err) {
    console.error(err);
    fail("儲存失敗，請稍後再試");
  } finally {
    submitBtn.disabled = false;
  }
});

$("#planList").addEventListener("click", async e => {
  const btn = e.target.closest(".plan-del");
  if (!btn) return;
  const id = btn.closest(".plan-item").dataset.id;
  btn.disabled = true;
  try {
    await api(`trip_plans?id=eq.${encodeURIComponent(id)}`, { method: "DELETE", headers: { Prefer: "return=minimal" } });
    plans = plans.filter(p => p.id !== id);
    renderPlans();
  } catch (err) {
    console.error(err);
    btn.disabled = false;
    const msg = $("#planMsg");
    msg.className = "form-msg err";
    msg.textContent = "刪除失敗，請稍後再試";
  }
});

renderPlans();
loadPlans();

renderAttractions();
renderNearby();
renderFood();
renderStays();
calcBudget();
applyFilters();

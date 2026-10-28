// 所有系列和照片都在这里，首页和系列页共用这一份。
// 每个系列：slug（网址里用的名字，英文小写）、标题、年份、类型、一句介绍、照片列表。
// 每张照片：src 图片路径、w/h 宽高、place 地点、date 日期、gear 器材（可以留空 ""）。
// 每个文件夹里的 thumbs/ 放的是同名小图（长边 480px），给首页的 Archive 方格用；没有也能显示，只是加载慢一些。
// 首页封面默认是第一张，想用别的就写 cover: 第几张（从 0 开始数，第三张写 2）；feature: true 的照片在系列页里会铺满整个屏幕宽度。

const local = (src, w, h) => ({ src, w, h });

const SERIES = [
  { slug: "seokjojeon", title: "Seokjojeon", year: "2026", kind: "Architecture", cover: 5,
    text: "Seokjojeon Hall in Deoksugung Palace, Seoul, September 2026.",
    photos: [
      { ...local("photos/seokjojeon/01.jpg", 1440, 960), place: "Seokjojeon, Deoksugung, Seoul", date: "2026.09", gear: "Ricoh GR IV · 28mm", feature: true },
      { ...local("photos/seokjojeon/02.jpg", 1333, 2000), place: "Seokjojeon, Deoksugung, Seoul", date: "2026.09", gear: "Ricoh GR IV · 28mm" },
      { ...local("photos/seokjojeon/03.jpg", 1440, 960), place: "Seokjojeon, Deoksugung, Seoul", date: "2026.09", gear: "Ricoh GR IV · 28mm" },
      { ...local("photos/seokjojeon/04.jpg", 1440, 960), place: "Seokjojeon, Deoksugung, Seoul", date: "2026.09", gear: "Ricoh GR IV · 28mm" },
      { ...local("photos/seokjojeon/05.jpg", 1440, 960), place: "Seokjojeon, Deoksugung, Seoul", date: "2026.09", gear: "Ricoh GR IV · 28mm" },
      { ...local("photos/seokjojeon/06.jpg", 1440, 960), place: "Seokjojeon, Deoksugung, Seoul", date: "2026.09", gear: "Ricoh GR IV · 28mm" },
      { ...local("photos/seokjojeon/07.jpg", 1440, 960), place: "Seokjojeon, Deoksugung, Seoul", date: "2026.09", gear: "Ricoh GR IV · 28mm" },
      { ...local("photos/seokjojeon/08.jpg", 1333, 2000), place: "Seokjojeon, Deoksugung, Seoul", date: "2026.09", gear: "Ricoh GR IV · 28mm" } ] },

  { slug: "huangshan", title: "Huangshan", year: "2026", kind: "Travel", cover: 3,
    text: "Old villages, lanterns and summer fireworks in Huangshan, Anhui, July 2026.",
    photos: [
      { ...local("photos/huangshan/01.jpg", 1333, 2000), place: "Huangshan, Anhui", date: "2026.07", gear: "Ricoh GR IV · 28mm" },
      { ...local("photos/huangshan/02.jpg", 1440, 960), place: "Huangshan, Anhui", date: "2026.07", gear: "Ricoh GR IV · 28mm" },
      { ...local("photos/huangshan/03.jpg", 1440, 960), place: "Huangshan, Anhui", date: "2026.07", gear: "Ricoh GR IV · 28mm" },
      { ...local("photos/huangshan/04.jpg", 1440, 960), place: "Huangshan, Anhui", date: "2026.07", gear: "Ricoh GR IV · 28mm", feature: true },
      { ...local("photos/huangshan/05.jpg", 1440, 960), place: "Huangshan, Anhui", date: "2026.07", gear: "Ricoh GR IV · 28mm" },
      { ...local("photos/huangshan/06.jpg", 1440, 960), place: "Huangshan, Anhui", date: "2026.07", gear: "Ricoh GR IV · 28mm" } ] },

  { slug: "shanghai", title: "Shanghai", year: "2026", kind: "City", cover: 4,
    text: "Old buildings and quiet streets in Shanghai, July 2026.",
    photos: [
      { ...local("photos/shanghai/01.jpg", 1440, 960), place: "Shanghai", date: "2026.07", gear: "Ricoh GR IV · 28mm" },
      { ...local("photos/shanghai/02.jpg", 1333, 2000), place: "Shanghai", date: "2026.07", gear: "Ricoh GR IV · 28mm" },
      { ...local("photos/shanghai/03.jpg", 1333, 2000), place: "Shanghai", date: "2026.07", gear: "Ricoh GR IV · 28mm" },
      { ...local("photos/shanghai/04.jpg", 1440, 960), place: "Suzhou Creek, Shanghai", date: "2026.07", gear: "Ricoh GR IV · 28mm" },
      { ...local("photos/shanghai/05.jpg", 1440, 960), place: "Chinese YMCA Building, Shanghai", date: "2026.07", gear: "Ricoh GR IV · 28mm", feature: true },
      { ...local("photos/shanghai/06.jpg", 1333, 2000), place: "East Beijing Road, Shanghai", date: "2026.07", gear: "Ricoh GR IV · 28mm" } ] },

  { slug: "nanjing", title: "Nanjing", year: "2026", kind: "City", cover: 1,
    text: "Plane trees, lake sunsets and a rainy street in Nanjing, July 2026.",
    photos: [
      { ...local("photos/nanjing/01.jpg", 1440, 982), place: "Nanjing", date: "2026.07", gear: "Canon AE-1 · 50mm" },
      { ...local("photos/nanjing/02.jpg", 1368, 2000), place: "Nanjing", date: "2026.07", gear: "Canon AE-1 · 50mm" },
      { ...local("photos/nanjing/03.jpg", 1363, 2000), place: "Xuanwu Lake, Nanjing", date: "2026.07", gear: "Canon AE-1 · 50mm" },
      { ...local("photos/nanjing/04.jpg", 1440, 982), place: "Xuanwu Lake, Nanjing", date: "2026.07", gear: "Canon AE-1 · 50mm" },
      { ...local("photos/nanjing/05.jpg", 1440, 985), place: "Librairie Avant-Garde, Nanjing", date: "2026.07", gear: "Canon AE-1 · 50mm" },
      { ...local("photos/nanjing/06.jpg", 1369, 2000), place: "Nanjing", date: "2026.07", gear: "Canon AE-1 · 50mm" },
      { ...local("photos/nanjing/07.jpg", 1367, 2000), place: "Nanjing", date: "2026.07", gear: "Canon AE-1 · 50mm" } ] },

  { slug: "kyoto", title: "Kyoto", year: "2026", kind: "Travel", cover: 2,
    text: "Temples, gardens and a train platform in early summer, June 2026.",
    photos: [
      { ...local("photos/kyoto/01.jpg", 2000, 1333), place: "Kyoto", date: "2026.06", gear: "Ricoh GR IV · 28mm", feature: true },
      { ...local("photos/kyoto/02.jpg", 1333, 2000), place: "Kyoto", date: "2026.06", gear: "Ricoh GR IV · 28mm" },
      { ...local("photos/kyoto/03.jpg", 1333, 2000), place: "Kyoto", date: "2026.06", gear: "Ricoh GR IV · 28mm" },
      { ...local("photos/kyoto/04.jpg", 2000, 1500), place: "Kyoto", date: "2026.06", gear: "Ricoh GR IV · 28mm" },
      { ...local("photos/kyoto/05.jpg", 1558, 1039), place: "Kyoto", date: "2026.06", gear: "Ricoh GR IV · 28mm" },
      { ...local("photos/kyoto/06.jpg", 2000, 1333), place: "Tambabashi Station, Kyoto", date: "2026.06", gear: "Ricoh GR IV · 28mm" } ] },

  { slug: "vietnam", title: "Vietnam", year: "2026", kind: "Travel", cover: 4,
    text: "Hội An, Da Nang and Saigon, June 2026.",
    photos: [
      { ...local("photos/vietnam/01.jpg", 2000, 1333), place: "Bảy Mẫu Coconut Forest, Hội An", date: "2026.06", gear: "Ricoh GR IV · 28mm", feature: true },
      { ...local("photos/vietnam/02.jpg", 1333, 2000), place: "Homestay, Hội An", date: "2026.06", gear: "Ricoh GR IV · 28mm" },
      { ...local("photos/vietnam/03.jpg", 2000, 1333), place: "Central Post Office, Saigon", date: "2026.06", gear: "Ricoh GR IV · 28mm" },
      { ...local("photos/vietnam/04.jpg", 2000, 1333), place: "Trần Phú Street, Hội An", date: "2026.06", gear: "Ricoh GR IV · 28mm" },
      { ...local("photos/vietnam/05.jpg", 1440, 960), place: "Mỹ Khê Beach, Da Nang", date: "2026.06", gear: "Ricoh GR IV · 28mm" } ] },

  { slug: "gyeongju", title: "Gyeongju", year: "2026", kind: "Travel", cover: 3,
    text: "Silla tombs, a museum and a slow tea in Gyeongju, February 2026.",
    photos: [
      { ...local("photos/gyeongju/01.jpg", 1080, 1920), place: "Gyeongju National Museum", date: "2026.02", gear: "Fujifilm X-A7" },
      { ...local("photos/gyeongju/02.jpg", 1922, 1080), place: "Gyeongju National Museum", date: "2026.02", gear: "Fujifilm X-A7" },
      { ...local("photos/gyeongju/03.jpg", 1922, 1080), place: "Gyeongju", date: "2026.02", gear: "Fujifilm X-A7" },
      { ...local("photos/gyeongju/04.jpg", 1922, 1080), place: "Daereungwon Tomb Complex, Gyeongju", date: "2026.02", gear: "Fujifilm X-A7", feature: true },
      { ...local("photos/gyeongju/05.jpg", 1922, 1080), place: "Gyeongju", date: "2026.02", gear: "Fujifilm X-A7" },
      { ...local("photos/gyeongju/06.jpg", 1922, 1080), place: "Gyeongju", date: "2026.02", gear: "Fujifilm X-A7" },
      { ...local("photos/gyeongju/07.jpg", 1080, 1919), place: "Gyeongju National Museum", date: "2026.02", gear: "Fujifilm X-A7" } ] },

  { slug: "paris", title: "Paris", year: "2025", kind: "Travel", cover: 6,
    text: "Winter in Paris, December 2025.",
    photos: [
      { ...local("photos/paris/01.jpg", 1210, 802), place: "Seine, Paris", date: "2025.12", gear: "Minolta TC-1 · 28mm" },
      { ...local("photos/paris/02.jpg", 1022, 678), place: "Montmartre, Paris", date: "2025.12", gear: "Minolta TC-1 · 28mm" },
      { ...local("photos/paris/03.jpg", 680, 1024), place: "Paris", date: "2025.12", gear: "Minolta TC-1 · 28mm" },
      { ...local("photos/paris/04.jpg", 1546, 1024), place: "Paris", date: "2025.12", gear: "Minolta TC-1 · 28mm" },
      { ...local("photos/paris/05.jpg", 950, 630), place: "Montmartre, Paris", date: "2025.12", gear: "Minolta TC-1 · 28mm" },
      { ...local("photos/paris/06.jpg", 1546, 1024), place: "Arc de Triomphe, Paris", date: "2025.12", gear: "Minolta TC-1 · 28mm" },
      { ...local("photos/paris/07.jpg", 768, 510), place: "Montmartre, Paris", date: "2025.12", gear: "Minolta TC-1 · 28mm" } ] },

  { slug: "turkey", title: "Turkey", year: "2025", kind: "Travel",
    text: "Istanbul and the south coast, July 2025.",
    photos: [
      { ...local("photos/turkey/01.jpg", 2000, 1333), place: "Kaputaş Beach, Kaş", date: "2025.07", gear: "Ricoh GR IV · 28mm", feature: true },
      { ...local("photos/turkey/03.jpg", 2000, 1333), place: "Galata, Istanbul", date: "2025.07", gear: "Ricoh GR IV · 28mm" },
      { ...local("photos/turkey/04.jpg", 1333, 2000), place: "Galata Bridge, Istanbul", date: "2025.07", gear: "Ricoh GR IV · 28mm" },
      { ...local("photos/turkey/05.jpg", 2000, 1333), place: "Bosphorus, Istanbul", date: "2025.07", gear: "Ricoh GR IV · 28mm" },
      { ...local("photos/turkey/06.jpg", 2000, 1333), place: "Old Town, Kaş", date: "2025.07", gear: "Ricoh GR IV · 28mm" },
      { ...local("photos/turkey/07.jpg", 1333, 2000), place: "Hadrian's Gate, Antalya", date: "2025.07", gear: "Ricoh GR IV · 28mm" } ] },

  { slug: "taipei", title: "Taipei", year: "2025", kind: "City", cover: 5,
    text: "Rainy streets and small shops in Taipei, May 2025.",
    photos: [
      { ...local("photos/taipei/01.jpg", 1629, 1080), place: "Taipei", date: "2025.05", gear: "", feature: true },
      { ...local("photos/taipei/02.jpg", 1080, 1629), place: "Taipei", date: "2025.05", gear: "" },
      { ...local("photos/taipei/03.jpg", 1629, 1080), place: "Taipei", date: "2025.05", gear: "" },
      { ...local("photos/taipei/04.jpg", 1629, 1080), place: "Taipei", date: "2025.05", gear: "" },
      { ...local("photos/taipei/05.jpg", 1629, 1080), place: "Taipei 101, Taipei", date: "2025.05", gear: "" },
      { ...local("photos/taipei/06.jpg", 1629, 1080), place: "Taipei", date: "2025.05", gear: "" } ] },

  { slug: "seoul", title: "Seoul Spring", year: "2025", kind: "City", cover: 4,
    text: "Spring in Seoul, April 2025.",
    photos: [
      { ...local("photos/seoul/01.jpg", 2000, 1326), place: "Seoul", date: "2025.04", gear: "Canon AE-1 · 50mm", feature: true },
      { ...local("photos/seoul/02.jpg", 1440, 954), place: "Seoul", date: "2025.04", gear: "Canon AE-1 · 50mm" },
      { ...local("photos/seoul/03.jpg", 1440, 954), place: "Seoul", date: "2025.04", gear: "Canon AE-1 · 50mm" },
      { ...local("photos/seoul/04.jpg", 1440, 954), place: "Seoul", date: "2025.04", gear: "Canon AE-1 · 50mm" },
      { ...local("photos/seoul/05.jpg", 1440, 954), place: "Seoul", date: "2025.04", gear: "Canon AE-1 · 50mm" },
      { ...local("photos/seoul/06.jpg", 1440, 954), place: "Seoul", date: "2025.04", gear: "Canon AE-1 · 50mm" },
      { ...local("photos/seoul/07.jpg", 1440, 954), place: "Seoul", date: "2025.04", gear: "Canon AE-1 · 50mm" },
      { ...local("photos/seoul/08.jpg", 1440, 955), place: "Seoul", date: "2025.04", gear: "Canon AE-1 · 50mm" } ] },
  { slug: "seoul-streets", title: "Seoul Streets", year: "2025", kind: "City", cover: 4,
    text: "Galleries, shops and cafés in Seoul, March 2025.",
    photos: [
      { ...local("photos/seoul-march/01.jpg", 1545, 1024), place: "Yoon Gallery, Seoul", date: "2025.03", gear: "" },
      { ...local("photos/seoul-march/02.jpg", 1545, 1024), place: "Seoul Sticker Shop, Seoul", date: "2025.03", gear: "" },
      { ...local("photos/seoul-march/03.jpg", 1545, 1024), place: "Seoul", date: "2025.03", gear: "" },
      { ...local("photos/seoul-march/04.jpg", 1545, 1024), place: "Seoul", date: "2025.03", gear: "" },
      { ...local("photos/seoul-march/05.jpg", 1545, 1024), place: "Seoul", date: "2025.03", gear: "" },
      { ...local("photos/seoul-march/06.jpg", 1545, 1024), place: "Tamburins, Seoul", date: "2025.03", gear: "" },
      { ...local("photos/seoul-march/07.jpg", 1545, 1024), place: "Seoul", date: "2025.03", gear: "" },
      { ...local("photos/seoul-march/08.jpg", 1545, 1024), place: "Seoul", date: "2025.03", gear: "" } ] }
];

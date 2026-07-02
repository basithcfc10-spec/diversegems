const images = {
  hero: "assets/homepage-gem-inspection.png",
  collection: "assets/collection-gems.jpg",
  heritage: "assets/heritage-artisan.jpg",
  private: "assets/private-viewing.jpg",
  logo: "assets/diverse-gems-logo-provided.jpg",
};

const contact = {
  phone: "+94 77 738 6202",
  phoneHref: "tel:+94777386202",
  address: "No 07 3/1, Kotalawala Gardens, Colombo 00400, Sri Lanka",
  mapsHref: "https://maps.google.com/?q=No%2007%203%2F1%2C%20Kotalawala%20Gardens%2C%20Colombo%2000400%2C%20Sri%20Lanka",
  email: "diversegemsofficial@gmail.com",
  emailHref: "mailto:diversegemsofficial@gmail.com",
  instagram: "@diversegems",
  instagramHref: "https://www.instagram.com/diversegems/",
};

const certificationBadges = ["GIA", "AGL", "Gübelin", "SSEF", "IGI"];

const currencies = {
  USD: { rate: 1, locale: "en-US" },
  LKR: { rate: 304, locale: "en-LK" },
  AUD: { rate: 1.52, locale: "en-AU" },
  EUR: { rate: 0.93, locale: "de-DE" },
  GBP: { rate: 0.79, locale: "en-GB" },
  CNY: { rate: 7.24, locale: "zh-CN" },
  THB: { rate: 36.5, locale: "th-TH" },
  JPY: { rate: 157, locale: "ja-JP" },
  SGD: { rate: 1.35, locale: "en-SG" },
  AED: { rate: 3.67, locale: "ar-AE" },
  CAD: { rate: 1.37, locale: "en-CA" },
  NZD: { rate: 1.66, locale: "en-NZ" },
  HKD: { rate: 7.81, locale: "zh-HK" },
  INR: { rate: 83.5, locale: "en-IN" },
  MYR: { rate: 4.71, locale: "ms-MY" },
  IDR: { rate: 16250, locale: "id-ID" },
  KRW: { rate: 1380, locale: "ko-KR" },
  CHF: { rate: 0.9, locale: "de-CH" },
  SAR: { rate: 3.75, locale: "ar-SA" },
  QAR: { rate: 3.64, locale: "ar-QA" },
  KWD: { rate: 0.31, locale: "ar-KW" },
  ZAR: { rate: 18.2, locale: "en-ZA" },
};

const currencyLabels = {
  USD: "USD - United States",
  LKR: "LKR - Sri Lanka",
  AUD: "AUD - Australia",
  EUR: "EUR - Europe",
  GBP: "GBP - United Kingdom",
  CNY: "CNY - China",
  THB: "THB - Thailand",
  JPY: "JPY - Japan",
  SGD: "SGD - Singapore",
  AED: "AED - United Arab Emirates",
  CAD: "CAD - Canada",
  NZD: "NZD - New Zealand",
  HKD: "HKD - Hong Kong",
  INR: "INR - India",
  MYR: "MYR - Malaysia",
  IDR: "IDR - Indonesia",
  KRW: "KRW - South Korea",
  CHF: "CHF - Switzerland",
  SAR: "SAR - Saudi Arabia",
  QAR: "QAR - Qatar",
  KWD: "KWD - Kuwait",
  ZAR: "ZAR - South Africa",
};

let selectedCurrency = localStorage.getItem("dgCurrency") || "USD";
let selectedLanguage = localStorage.getItem("dgLanguage") || "en";

const translations = {
  en: {
    nav: ["Home", "Our Collection", "Sri Lankan Heritage", "New Arrivals", "Custom Sourcing", "About Us", "Book a Private Viewing", "Contact"],
    languageLabel: "Country / Language",
    currencyLabel: "Currency",
    loginLabel: "Log in",
    savedLabel: "Saved collection",
    announcements: [
      "Private gemstone viewings available by appointment in Sri Lanka.",
      "View the new collection of recently acquired stones.",
      "Mainly sourced from Sri Lanka, with select collector stones from Madagascar.",
    ],
    mega: {
      collectionEyebrow: "The Collection",
      collectionTitle: "Natural stones selected for rarity, origin and quiet brilliance.",
      heritageEyebrow: "Sri Lankan Heritage",
      heritageTitle: "From Ratnapura tradition to rare stones selected with care.",
      collectionLinks: ["Sapphires", "Rubies", "Emeralds", "Spinels", "Alexandrites", "Other Precious Gemstones", "New Arrivals"],
      heritageLinks: ["Sri Lankan Heritage", "Ceylon Sapphire Story", "Madagascar Sourcing", "Treatment Disclosure", "Private Consultation"],
    },
    home: {
      eyebrow: "Natural Sri Lankan gemstones",
      title: "Rarity, quietly assured.",
      lead: "A private digital showroom by Diverse Gems for Ceylon sapphires and rare fine gemstones, mainly sourced from Sri Lanka with select collector stones from Madagascar.",
      primary: "Explore the Collection",
      secondary: "Book a Private Viewing",
      featuredEyebrow: "Featured collections",
      featuredTitle: "Fine stones, presented with restraint.",
      featuredLead: "Browse by gemstone family, compare pricing in your selected currency, then enquire privately for certification and viewing details.",
      standardEyebrow: "The Diverse Gems standard",
      standardTitle: "Selected for origin, beauty and confidence.",
      standardLead: "Each gemstone is considered for colour, crystal, cut, treatment disclosure, certification and suitability for high jewellery or long-term collecting, with sourcing focused on Sri Lanka and select Madagascar stones.",
      rules: [["Provenance", "Documented origin wherever available"], ["Certification", "Recognised laboratories on important stones"], ["Discretion", "Private enquiries for serious buyers"]],
      heritageEyebrow: "Sri Lankan heritage",
      heritageTitle: "From island geology to modern connoisseurship.",
      heritageButton: "Discover the Heritage",
      appointmentEyebrow: "Private appointments",
      appointmentTitle: "Inspect selected stones in person.",
      appointmentLead: "Clients in Sri Lanka may request a private viewing for shortlisted gemstones in an intimate consultation setting.",
      appointmentButton: "Request an Appointment",
    },
    pages: {
      collection: ["Our collection", "A catalogue without hurry.", "Explore natural sapphires, rubies, emeralds, spinels, alexandrites and rare collector stones, mainly from Sri Lanka with select pieces from Madagascar."],
      newArrivals: ["New Arrivals", "Recently acquired stones.", "A fresh selection of collector gemstones now available for private enquiry."],
      customSourcing: ["Custom sourcing", "Rare stones, sourced with discretion.", "For clients seeking a particular origin, colour, size, treatment profile or certification standard, Diverse Gems conducts private sourcing with a focus on Sri Lanka and selected Madagascar supply."],
      heritage: ["Sri Lankan heritage", "An island renowned for sapphire.", "Sri Lanka remains our primary sourcing heritage, complemented by selected Madagascar gemstones where rarity, beauty and documentation meet our standard."],
      about: ["About Diverse Gems", "A private house for exceptional natural gemstones.", "Diverse Gems exports fine Sri Lankan sapphires and rare coloured stones, with select Madagascar acquisitions, to collectors, jewellers and trade clients who expect discretion, documentation and refined service."],
      privateViewing: ["Private viewing", "A discreet appointment in Sri Lanka.", "Private inspections are available only within Sri Lanka and are arranged for clients with a genuine interest in selected gemstones."],
      contact: ["Contact", "Begin a private enquiry.", "For collection requests, sourcing briefs or private appointments, contact the Diverse Gems concierge team."],
      login: ["Client Account", "Private access, coming soon.", "The Diverse Gems client account area will support saved stones, enquiry history and private shortlist access. For now, please contact client care for assistance."],
      saved: ["Saved Favourites", "Your private shortlist.", "Saved gemstone favourites will be available in the client account experience. Until then, use the enquire button on any stone and our team will build a private shortlist for you."],
    },
    common: {
      collectionEyebrow: "Collection",
      enquire: "Enquire",
      browseCollection: "Browse Collection",
      contactClientCare: "Contact Client Care",
      beginConversation: "Begin a Conversation",
      specs: ["Origin", "Weight", "Dimensions", "Colour", "Treatment", "Certification"],
      status: { Available: "Available", "By enquiry": "By enquiry", Reserved: "Reserved" },
    },
    categories: [
      ["Sapphires", "Ceylon blue, padparadscha and fancy sapphire selections."],
      ["Rubies", "Rich red stones with fine cutting and documentation."],
      ["Emeralds", "Elegant greens selected for life, tone and presence."],
      ["Spinels", "Rare natural spinels in exceptional collector colours."],
      ["Alexandrites", "Colour-change stones for connoisseurs."],
      ["Other Precious Gemstones", "Distinctive rare stones sourced for private clients."],
    ],
    collectionTitles: {
      sapphires: ["Sri Lankan Sapphires", "Ceylon sapphires selected for saturation, crystal, provenance and enduring collector appeal."],
      rubies: ["Rubies", "Fine rubies with rich red colour, balanced cutting and documentation for discerning jewellery houses."],
      emeralds: ["Emeralds", "Elegant emeralds chosen for life, garden, tone and suitability for important bespoke pieces."],
      spinels: ["Spinels", "Collector spinels in refined reds, greys, violets and cobalt blues with crisp brilliance."],
      alexandrites: ["Alexandrites", "Rare colour-change chrysoberyl sourced for strength of phenomenon, clarity and collector value."],
      "other-precious-gemstones": ["Other Precious Gemstones", "Rare collector stones sourced on request, from chrysoberyl and garnet to exceptional tourmaline and zircon."],
    },
    sections: {
      customSteps: [["Brief", "Define the desired stone and acquisition context."], ["Search", "Review suitable stones from vetted suppliers and cutters."], ["Verification", "Confirm treatment, origin evidence and documentation."], ["Presentation", "Share a private shortlist for inspection or remote review."]],
      heritageTitle: "Heritage expressed through care.",
      heritageLead: "Our work honours Sri Lankan gemstone heritage through careful selection, transparent disclosure and a presentation style that lets each stone remain the centre of attention. Select Madagascar stones are included only when they meet the same standard.",
      heritageRules: [["Ratnapura", "The historic city of gems"], ["Ceylon sapphire", "Celebrated for luminous blue tones"], ["Craftsmanship", "Cutting decisions guided by beauty and yield"]],
      storyCards: [["Origin", "Stones are assessed with origin, traceability and documentation in mind wherever reliable evidence is available."], ["Treatment", "Heating and enhancement status are disclosed clearly, with laboratory reports recommended for significant stones."], ["Stewardship", "Long-term relationships with cutters, dealers and clients shape a more considered way to acquire gems."]],
      aboutTitle: "Quiet expertise, carefully presented.",
      aboutLead: "The company combines local gemstone heritage with international luxury expectations: rigorous selection, honest treatment disclosure, and a showroom experience designed for serious acquisition.",
    },
    form: {
      name: "Full name",
      email: "Email",
      phone: "Phone",
      date: "Preferred date",
      time: "Preferred time",
      selectTime: "Select a time",
      interest: "Gemstones of interest",
      interestPlaceholder: "Sapphires, rubies, alexandrites...",
      notes: "Notes",
      notesPlaceholder: "Share preferred origin, carat range, certification or viewing requirements.",
      submit: "Request Appointment",
      confirmation: "Thank you. Your private viewing request has been received for concierge review. Appointments are available only within Sri Lanka.",
    },
    contactCards: [["Phone", ""], ["Email", ""], ["Location", "Private viewings by appointment only."], ["Instagram", ""], ["Certifications Accepted", ""], ["Response", "Serious enquiries are reviewed discreetly with collection or sourcing recommendations."]],
    footer: {
      description: "Natural Sri Lankan sapphires and rare collector gemstones for jewellers, investors and private collectors.",
      showroom: "Showroom",
      company: "Company",
      contact: "Contact",
      copyright: "© 2026 DIVERSE GEMS. All rights reserved.",
      ethics: "Ethically sourced natural gemstones.",
    },
  },
  zh: {
    nav: ["首页", "我们的珍藏", "斯里兰卡传承", "新品", "定制寻石", "关于我们", "预约私人鉴赏", "联系"],
    languageLabel: "国家 / 语言",
    currencyLabel: "货币",
    loginLabel: "登录",
    savedLabel: "已收藏",
    announcements: [
      "斯里兰卡可预约私人宝石鉴赏。",
      "浏览全新珍藏与近期入库宝石。",
      "主要源自斯里兰卡，并精选马达加斯加收藏级宝石。",
    ],
    mega: {
      collectionEyebrow: "珍藏系列",
      collectionTitle: "以稀有度、产地与含蓄光彩精心甄选的天然宝石。",
      heritageEyebrow: "斯里兰卡传承",
      heritageTitle: "源自拉特纳普勒传统，以细致眼光甄选稀有宝石。",
      collectionLinks: ["蓝宝石", "红宝石", "祖母绿", "尖晶石", "变石", "其他珍贵宝石", "新品"],
      heritageLinks: ["斯里兰卡传承", "锡兰蓝宝石故事", "马达加斯加采购", "处理披露", "私人咨询"],
    },
    home: {
      eyebrow: "斯里兰卡天然宝石",
      title: "稀有，静默自信。",
      lead: "Diverse Gems 私人数字展厅，呈现锡兰蓝宝石与稀有高级宝石，主要源自斯里兰卡，并精选马达加斯加收藏级宝石。",
      primary: "探索珍藏",
      secondary: "预约私人鉴赏",
      featuredEyebrow: "精选系列",
      featuredTitle: "以克制方式呈现高级宝石。",
      featuredLead: "按宝石类别浏览，以所选货币比较价格，并私下咨询证书与鉴赏细节。",
      standardEyebrow: "Diverse Gems 标准",
      standardTitle: "为产地、美感与信心而甄选。",
      standardLead: "每颗宝石都会从颜色、晶体、切工、处理披露、证书以及高级珠宝或长期收藏适配性进行考量，采购重点为斯里兰卡与精选马达加斯加宝石。",
      rules: [["产地", "尽可能提供可靠产地记录"], ["证书", "重要宝石配备认可实验室文件"], ["私密", "为认真买家提供私人咨询"]],
      heritageEyebrow: "斯里兰卡传承",
      heritageTitle: "从岛屿地质到现代鉴赏。",
      heritageButton: "了解传承",
      appointmentEyebrow: "私人预约",
      appointmentTitle: "亲自鉴赏甄选宝石。",
      appointmentLead: "在斯里兰卡的客户可申请私密环境下鉴赏已筛选宝石。",
      appointmentButton: "申请预约",
    },
    pages: {
      collection: ["我们的珍藏", "从容浏览的目录。", "探索天然蓝宝石、红宝石、祖母绿、尖晶石、变石及稀有收藏宝石，主要源自斯里兰卡，并精选马达加斯加宝石。"],
      newArrivals: ["新品", "近期入库宝石。", "全新精选收藏级宝石，现可私人咨询。"],
      customSourcing: ["定制寻石", "以私密方式寻找稀有宝石。", "针对指定产地、颜色、尺寸、处理状态或证书标准的客户，Diverse Gems 提供以斯里兰卡与精选马达加斯加供应为重点的私人寻石服务。"],
      heritage: ["斯里兰卡传承", "以蓝宝石闻名的岛屿。", "斯里兰卡是我们的主要采购传承，并辅以符合稀有度、美感与文件标准的精选马达加斯加宝石。"],
      about: ["关于 Diverse Gems", "面向卓越天然宝石的私人品牌。", "Diverse Gems 向收藏家、珠宝商与贸易客户出口高级斯里兰卡蓝宝石和稀有彩色宝石，并提供精选马达加斯加宝石。"],
      privateViewing: ["私人鉴赏", "在斯里兰卡的私密预约。", "私人鉴赏仅在斯里兰卡提供，并为对甄选宝石有真实兴趣的客户安排。"],
      contact: ["联系", "开启私人咨询。", "如需珍藏咨询、寻石需求或私人预约，请联系 Diverse Gems 礼宾团队。"],
      login: ["客户账户", "私人访问即将推出。", "Diverse Gems 客户账户将支持收藏宝石、咨询记录与私人候选清单。当前请联系客户服务。"],
      saved: ["已收藏", "您的私人候选清单。", "已收藏宝石功能将在客户账户中提供。当前可在任意宝石页面点击咨询，我们会为您建立私人清单。"],
    },
    common: {
      collectionEyebrow: "珍藏",
      enquire: "咨询",
      browseCollection: "浏览珍藏",
      contactClientCare: "联系客户服务",
      beginConversation: "开始沟通",
      specs: ["产地", "重量", "尺寸", "颜色", "处理", "证书"],
      status: { Available: "可购买", "By enquiry": "请咨询", Reserved: "已预留" },
    },
    categories: [["蓝宝石", "锡兰蓝、帕帕拉恰与彩色蓝宝石精选。"], ["红宝石", "色泽浓郁、切工精细并配有文件。"], ["祖母绿", "为光彩、色调与存在感甄选的优雅绿色宝石。"], ["尖晶石", "卓越收藏色彩的天然尖晶石。"], ["变石", "为鉴赏家准备的变色宝石。"], ["其他珍贵宝石", "为私人客户采购的独特稀有宝石。"]],
    collectionTitles: {
      sapphires: ["斯里兰卡蓝宝石", "锡兰蓝宝石因饱和度、晶体、产地与长期收藏吸引力而甄选。"],
      rubies: ["红宝石", "色泽浓郁、切工均衡并配有文件的高级红宝石。"],
      emeralds: ["祖母绿", "为光彩、内含花园、色调与高级定制适配性而甄选。"],
      spinels: ["尖晶石", "红、灰、紫与钴蓝等精致色彩的收藏级尖晶石。"],
      alexandrites: ["变石", "按变色强度、净度与收藏价值甄选的稀有金绿宝石。"],
      "other-precious-gemstones": ["其他珍贵宝石", "按需求采购的稀有收藏宝石，包括金绿宝石、石榴石、碧玺与锆石。"],
    },
    sections: {
      customSteps: [["需求", "确定理想宝石与购买背景。"], ["搜索", "从可靠供应商与切割师处筛选合适宝石。"], ["验证", "确认处理、产地证据与文件。"], ["呈现", "提供私人候选清单用于现场或远程鉴赏。"]],
      heritageTitle: "以细致表达传承。",
      heritageLead: "我们通过严谨甄选、透明披露与克制呈现来尊重斯里兰卡宝石传统，让每颗宝石成为焦点。精选马达加斯加宝石仅在符合相同标准时纳入。",
      heritageRules: [["拉特纳普勒", "历史悠久的宝石之城"], ["锡兰蓝宝石", "以明亮蓝色调闻名"], ["工艺", "切割决策兼顾美感与保重"]],
      storyCards: [["产地", "在可靠证据可得时，宝石会结合产地、可追溯性与文件进行评估。"], ["处理", "加热与优化状态清晰披露，重要宝石建议配备实验室报告。"], ["守护", "与切割师、经销商和客户的长期关系塑造更审慎的购石方式。"]],
      aboutTitle: "安静的专业，细致呈现。",
      aboutLead: "公司结合本地宝石传承与国际奢华期待：严格甄选、诚实披露处理状态，并为认真采购设计精致展厅体验。",
    },
    form: {
      name: "姓名",
      email: "电子邮箱",
      phone: "电话",
      date: "期望日期",
      time: "期望时间",
      selectTime: "选择时间",
      interest: "感兴趣的宝石",
      interestPlaceholder: "蓝宝石、红宝石、变石...",
      notes: "备注",
      notesPlaceholder: "请说明期望产地、克拉范围、证书或鉴赏要求。",
      submit: "申请预约",
      confirmation: "谢谢。您的私人鉴赏申请已提交给礼宾团队审核。预约仅限斯里兰卡。",
    },
    contactCards: [["电话", ""], ["电子邮箱", ""], ["地点", "仅限预约私人鉴赏。"], ["Instagram", ""], ["认可证书", ""], ["回复", "认真咨询将以私密方式审核，并提供珍藏或寻石建议。"]],
    footer: {
      description: "面向珠宝商、投资者与私人收藏家的天然斯里兰卡蓝宝石和稀有收藏宝石。",
      showroom: "展厅",
      company: "公司",
      contact: "联系",
      copyright: "© 2026 DIVERSE GEMS. 版权所有。",
      ethics: "符合伦理的天然宝石采购。",
    },
  },
  th: {
    nav: ["หน้าแรก", "คอลเลกชัน", "มรดกศรีลังกา", "สินค้าใหม่", "จัดหาเฉพาะ", "เกี่ยวกับเรา", "จองชมแบบส่วนตัว", "ติดต่อ"],
    languageLabel: "ประเทศ / ภาษา",
    currencyLabel: "สกุลเงิน",
    loginLabel: "เข้าสู่ระบบ",
    savedLabel: "คอลเลกชันที่บันทึก",
    announcements: [
      "นัดชมอัญมณีแบบส่วนตัวในศรีลังกาได้ตามเวลานัดหมาย",
      "ชมคอลเลกชันใหม่ของอัญมณีที่เพิ่งคัดสรรมา",
      "คัดสรรจากศรีลังกาเป็นหลัก พร้อมอัญมณีนักสะสมจากมาดากัสการ์",
    ],
    mega: {
      collectionEyebrow: "คอลเลกชัน",
      collectionTitle: "อัญมณีธรรมชาติที่คัดสรรจากความหายาก แหล่งกำเนิด และประกายอย่างสงบงาม",
      heritageEyebrow: "มรดกศรีลังกา",
      heritageTitle: "จากธรรมเนียมรัตนปุระสู่อัญมณีหายากที่คัดสรรด้วยความประณีต",
      collectionLinks: ["แซฟไฟร์", "ทับทิม", "มรกต", "สปิเนล", "อเล็กซานไดรต์", "อัญมณีล้ำค่าอื่นๆ", "สินค้าใหม่"],
      heritageLinks: ["มรดกศรีลังกา", "เรื่องราวแซฟไฟร์ซีลอน", "การจัดหาจากมาดากัสการ์", "การเปิดเผยการปรับปรุงคุณภาพ", "ปรึกษาส่วนตัว"],
    },
    home: {
      eyebrow: "อัญมณีธรรมชาติจากศรีลังกา",
      title: "หายาก อย่างมั่นใจเงียบงาม",
      lead: "โชว์รูมดิจิทัลแบบส่วนตัวของ Diverse Gems สำหรับแซฟไฟร์ซีลอนและอัญมณีชั้นสูงหายาก คัดสรรจากศรีลังกาเป็นหลัก พร้อมอัญมณีนักสะสมจากมาดากัสการ์",
      primary: "สำรวจคอลเลกชัน",
      secondary: "จองชมแบบส่วนตัว",
      featuredEyebrow: "คอลเลกชันเด่น",
      featuredTitle: "อัญมณีชั้นดีที่นำเสนออย่างสง่างาม",
      featuredLead: "เลือกชมตามประเภทอัญมณี เปรียบเทียบราคาในสกุลเงินที่เลือก แล้วสอบถามรายละเอียดใบรับรองและการนัดชมแบบส่วนตัว",
      standardEyebrow: "มาตรฐาน Diverse Gems",
      standardTitle: "คัดสรรจากแหล่งกำเนิด ความงาม และความมั่นใจ",
      standardLead: "อัญมณีแต่ละเม็ดได้รับการพิจารณาด้านสี เนื้อคริสตัล การเจียระไน การเปิดเผยการปรับปรุงคุณภาพ ใบรับรอง และความเหมาะสมสำหรับเครื่องประดับชั้นสูงหรือการสะสมระยะยาว โดยเน้นศรีลังกาและอัญมณีมาดากัสการ์ที่คัดพิเศษ",
      rules: [["แหล่งกำเนิด", "มีเอกสารแหล่งกำเนิดเมื่อสามารถยืนยันได้"], ["ใบรับรอง", "อัญมณีสำคัญใช้เอกสารจากห้องปฏิบัติการที่ได้รับการยอมรับ"], ["ความเป็นส่วนตัว", "สอบถามแบบส่วนตัวสำหรับผู้ซื้อจริงจัง"]],
      heritageEyebrow: "มรดกศรีลังกา",
      heritageTitle: "จากธรณีวิทยาของเกาะสู่การสะสมสมัยใหม่",
      heritageButton: "ค้นพบมรดก",
      appointmentEyebrow: "นัดหมายส่วนตัว",
      appointmentTitle: "ชมอัญมณีที่คัดสรรด้วยตนเอง",
      appointmentLead: "ลูกค้าในศรีลังกาสามารถขอนัดชมอัญมณีที่คัดไว้ในบรรยากาศการปรึกษาที่เป็นส่วนตัว",
      appointmentButton: "ขอนัดหมาย",
    },
    pages: {
      collection: ["คอลเลกชัน", "แคตตาล็อกที่ไม่เร่งรีบ", "สำรวจแซฟไฟร์ ทับทิม มรกต สปิเนล อเล็กซานไดรต์ และอัญมณีนักสะสมหายากจากศรีลังกาเป็นหลัก พร้อมชิ้นที่คัดจากมาดากัสการ์"],
      newArrivals: ["สินค้าใหม่", "อัญมณีที่เพิ่งคัดสรรมา", "อัญมณีนักสะสมชุดใหม่พร้อมให้สอบถามแบบส่วนตัว"],
      customSourcing: ["จัดหาเฉพาะ", "อัญมณีหายากที่จัดหาอย่างเป็นส่วนตัว", "สำหรับลูกค้าที่ต้องการแหล่งกำเนิด สี ขนาด ลักษณะการปรับปรุง หรือมาตรฐานใบรับรองเฉพาะ Diverse Gems ให้บริการจัดหาแบบส่วนตัวโดยเน้นศรีลังกาและแหล่งมาดากัสการ์ที่คัดสรร"],
      heritage: ["มรดกศรีลังกา", "เกาะที่มีชื่อเสียงด้านแซฟไฟร์", "ศรีลังกาคือมรดกหลักด้านการจัดหาของเรา เสริมด้วยอัญมณีมาดากัสการ์ที่ผ่านมาตรฐานด้านความหายาก ความงาม และเอกสาร"],
      about: ["เกี่ยวกับ Diverse Gems", "บ้านส่วนตัวสำหรับอัญมณีธรรมชาติชั้นเลิศ", "Diverse Gems ส่งออกแซฟไฟร์ศรีลังกาชั้นดีและอัญมณีสีหายาก พร้อมชิ้นคัดจากมาดากัสการ์ ให้กับนักสะสม ช่างอัญมณี และลูกค้าการค้าที่ต้องการความเป็นส่วนตัว เอกสาร และบริการประณีต"],
      privateViewing: ["ชมแบบส่วนตัว", "นัดหมายอย่างเป็นส่วนตัวในศรีลังกา", "การชมแบบส่วนตัวมีเฉพาะในศรีลังกา และจัดให้ลูกค้าที่สนใจอัญมณีที่คัดสรรอย่างแท้จริง"],
      contact: ["ติดต่อ", "เริ่มการสอบถามแบบส่วนตัว", "สำหรับคำขอคอลเลกชัน รายละเอียดการจัดหา หรือการนัดหมายส่วนตัว ติดต่อทีมคอนเซียจของ Diverse Gems"],
      login: ["บัญชีลูกค้า", "การเข้าถึงส่วนตัวกำลังจะมา", "พื้นที่บัญชีลูกค้าของ Diverse Gems จะรองรับอัญมณีที่บันทึกไว้ ประวัติการสอบถาม และรายการคัดเลือกส่วนตัว ขณะนี้โปรดติดต่อฝ่ายดูแลลูกค้า"],
      saved: ["รายการที่บันทึก", "รายการคัดเลือกส่วนตัวของคุณ", "รายการอัญมณีที่บันทึกไว้จะพร้อมใช้งานในประสบการณ์บัญชีลูกค้า ระหว่างนี้ใช้ปุ่มสอบถามบนอัญมณีแต่ละเม็ด แล้วทีมของเราจะจัดทำรายการคัดเลือกส่วนตัวให้คุณ"],
    },
    common: {
      collectionEyebrow: "คอลเลกชัน",
      enquire: "สอบถาม",
      browseCollection: "ชมคอลเลกชัน",
      contactClientCare: "ติดต่อฝ่ายดูแลลูกค้า",
      beginConversation: "เริ่มพูดคุย",
      specs: ["แหล่งกำเนิด", "น้ำหนัก", "ขนาด", "สี", "การปรับปรุง", "ใบรับรอง"],
      status: { Available: "พร้อมจำหน่าย", "By enquiry": "สอบถามเพิ่มเติม", Reserved: "จองแล้ว" },
    },
    categories: [["แซฟไฟร์", "แซฟไฟร์ซีลอนบลู พัดพารัดชา และสีแฟนซี"], ["ทับทิม", "อัญมณีสีแดงเข้มพร้อมการเจียระไนและเอกสารที่ดี"], ["มรกต", "สีเขียวสง่างามที่คัดจากชีวิตชีวา โทนสี และบุคลิก"], ["สปิเนล", "สปิเนลธรรมชาติหายากในสีสะสมโดดเด่น"], ["อเล็กซานไดรต์", "อัญมณีเปลี่ยนสีสำหรับผู้รู้จริง"], ["อัญมณีล้ำค่าอื่นๆ", "อัญมณีหายากโดดเด่นที่จัดหาให้ลูกค้าส่วนตัว"]],
    collectionTitles: {
      sapphires: ["แซฟไฟร์ศรีลังกา", "แซฟไฟร์ซีลอนที่คัดจากความอิ่มสี เนื้อคริสตัล แหล่งกำเนิด และคุณค่าสะสมระยะยาว"],
      rubies: ["ทับทิม", "ทับทิมชั้นดีที่มีสีแดงเข้ม การเจียระไนสมดุล และเอกสารสำหรับเรือนเครื่องประดับชั้นนำ"],
      emeralds: ["มรกต", "มรกตสง่างามที่คัดจากประกาย ลักษณะภายใน โทนสี และความเหมาะสมกับงานสั่งทำสำคัญ"],
      spinels: ["สปิเนล", "สปิเนลนักสะสมในแดง เทา ม่วง และโคบอลต์บลูที่ให้ประกายคมชัด"],
      alexandrites: ["อเล็กซานไดรต์", "คริสโซเบริลเปลี่ยนสีหายากที่คัดจากความแรงของปรากฏการณ์ ความใส และคุณค่าสะสม"],
      "other-precious-gemstones": ["อัญมณีล้ำค่าอื่นๆ", "อัญมณีนักสะสมหายากที่จัดหาตามคำขอ ตั้งแต่คริสโซเบริลและโกเมนถึงทัวร์มาลีนและเซอร์คอนพิเศษ"],
    },
    sections: {
      customSteps: [["บรีฟ", "กำหนดอัญมณีที่ต้องการและบริบทการซื้อ"], ["ค้นหา", "คัดเลือกอัญมณีที่เหมาะจากซัพพลายเออร์และช่างเจียระไนที่ไว้ใจได้"], ["ตรวจสอบ", "ยืนยันการปรับปรุง แหล่งกำเนิด และเอกสาร"], ["นำเสนอ", "แชร์รายการคัดเลือกส่วนตัวเพื่อชมจริงหรือทางไกล"]],
      heritageTitle: "ถ่ายทอดมรดกผ่านความใส่ใจ",
      heritageLead: "เรายกย่องมรดกอัญมณีศรีลังกาผ่านการคัดสรรอย่างรอบคอบ การเปิดเผยอย่างโปร่งใส และการนำเสนอที่ให้ตัวอัญมณีเป็นจุดศูนย์กลาง อัญมณีมาดากัสการ์จะถูกเพิ่มเมื่อผ่านมาตรฐานเดียวกันเท่านั้น",
      heritageRules: [["รัตนปุระ", "เมืองอัญมณีเก่าแก่"], ["แซฟไฟร์ซีลอน", "โดดเด่นด้วยโทนสีน้ำเงินเปล่งประกาย"], ["งานฝีมือ", "การเจียระไนที่คำนึงถึงความงามและผลลัพธ์"]],
      storyCards: [["แหล่งกำเนิด", "อัญมณีได้รับการประเมินจากแหล่งกำเนิด การติดตามที่มา และเอกสารเมื่อมีหลักฐานเชื่อถือได้"], ["การปรับปรุง", "สถานะการเผาและการปรับปรุงจะเปิดเผยชัดเจน พร้อมแนะนำรายงานห้องปฏิบัติการสำหรับอัญมณีสำคัญ"], ["การดูแล", "ความสัมพันธ์ระยะยาวกับช่างเจียระไน ผู้ค้า และลูกค้าช่วยสร้างวิธีซื้ออัญมณีที่รอบคอบยิ่งขึ้น"]],
      aboutTitle: "ความเชี่ยวชาญที่สงบ นำเสนออย่างประณีต",
      aboutLead: "บริษัทผสานมรดกอัญมณีท้องถิ่นกับความคาดหวังแบบลักชัวรีสากล ได้แก่ การคัดสรรเข้มงวด การเปิดเผยการปรับปรุงอย่างซื่อตรง และประสบการณ์โชว์รูมสำหรับการซื้ออย่างจริงจัง",
    },
    form: {
      name: "ชื่อเต็ม",
      email: "อีเมล",
      phone: "โทรศัพท์",
      date: "วันที่ต้องการ",
      time: "เวลาที่ต้องการ",
      selectTime: "เลือกเวลา",
      interest: "อัญมณีที่สนใจ",
      interestPlaceholder: "แซฟไฟร์ ทับทิม อเล็กซานไดรต์...",
      notes: "หมายเหตุ",
      notesPlaceholder: "แจ้งแหล่งกำเนิด ช่วงกะรัต ใบรับรอง หรือข้อกำหนดการชมที่ต้องการ",
      submit: "ขอนัดหมาย",
      confirmation: "ขอบคุณ คำขอนัดชมส่วนตัวของคุณได้รับแล้วเพื่อให้ทีมคอนเซียจตรวจสอบ การนัดหมายมีเฉพาะในศรีลังกา",
    },
    contactCards: [["โทรศัพท์", ""], ["อีเมล", ""], ["สถานที่", "ชมแบบส่วนตัวตามนัดหมายเท่านั้น"], ["Instagram", ""], ["ใบรับรองที่ยอมรับ", ""], ["การตอบกลับ", "คำถามจากผู้สนใจจริงจะได้รับการพิจารณาอย่างเป็นส่วนตัว พร้อมคำแนะนำคอลเลกชันหรือการจัดหา"]],
    footer: {
      description: "แซฟไฟร์ธรรมชาติจากศรีลังกาและอัญมณีนักสะสมหายากสำหรับช่างอัญมณี นักลงทุน และนักสะสมส่วนตัว",
      showroom: "โชว์รูม",
      company: "บริษัท",
      contact: "ติดต่อ",
      copyright: "© 2026 DIVERSE GEMS. สงวนลิขสิทธิ์",
      ethics: "อัญมณีธรรมชาติที่จัดหาอย่างมีจริยธรรม",
    },
  },
};

const collectionImages = {
  sapphires: "assets/gem-sapphires.jpg",
  rubies: "assets/gem-rubies.jpg",
  emeralds: "assets/gem-emeralds.jpg",
  spinels: "assets/gem-spinels.jpg",
  alexandrites: "assets/gem-alexandrites.jpg",
  "other-precious-gemstones": "assets/gem-other-precious-gemstones.jpg",
};

const stoneImages = {
  "Royal Blue Cushion Sapphire": "assets/stone-royal-blue-cushion-sapphire.jpg",
  "Cornflower Oval Sapphire": "assets/stone-cornflower-oval-sapphire.jpg",
  "Padparadscha Sapphire": "assets/stone-padparadscha-sapphire.jpg",
  "Velvet Blue Emerald Cut": "assets/stone-velvet-blue-emerald-cut.jpg",
  "Pink Oval Sapphire": "assets/stone-pink-sapphire.jpg",
  "Yellow Cushion Sapphire": "assets/stone-yellow-sapphire.jpg",
  "Green Oval Sapphire": "assets/stone-green-sapphire.jpg",
  "Teal Pear Sapphire": "assets/stone-teal-sapphire.jpg",
  "Violet Round Sapphire": "assets/stone-violet-sapphire.jpg",
  "Orange Oval Sapphire": "assets/stone-orange-sapphire.jpg",
  "Pigeon Blood Oval Ruby": "assets/gem-rubies.jpg",
  "Classic Cushion Ruby": "assets/stone-classic-cushion-ruby.jpg",
  "Madagascar Emerald Cut": "assets/gem-emeralds.jpg",
  "Sri Lankan Octagon Emerald": "assets/stone-zambian-octagon-emerald.jpg",
  "Cobalt Blue Spinel": "assets/gem-spinels.jpg",
  "Madagascar Pink Spinel": "assets/stone-mahenge-pink-spinel.jpg",
  "Oval Alexandrite": "assets/gem-alexandrites.jpg",
  "Collector Cushion Alexandrite": "assets/stone-collector-cushion-alexandrite.jpg",
  "Cat's Eye Chrysoberyl": "assets/gem-other-precious-gemstones.jpg",
  "Paraiba Tourmaline": "assets/stone-paraiba-tourmaline.jpg",
};

const announcementItems = [
  {
    href: "#/private-viewing",
  },
  {
    href: "#/new-arrivals",
  },
  {
    href: "#/heritage",
  },
];

const megaContent = {
  collection: {
    eyebrow: "The Collection",
    title: "Natural stones selected for rarity, origin and quiet brilliance.",
    image: "assets/collection-gems.jpg",
    alt: "Fine gemstones arranged on a white surface",
    links: [
      ["Sapphires", "#/sapphires"],
      ["Rubies", "#/rubies"],
      ["Emeralds", "#/emeralds"],
      ["Spinels", "#/spinels"],
      ["Alexandrites", "#/alexandrites"],
      ["Other Precious Gemstones", "#/other-precious-gemstones"],
      ["New Arrivals", "#/new-arrivals"],
    ],
  },
  heritage: {
    eyebrow: "Sri Lankan Heritage",
    title: "From Ratnapura tradition to rare stones selected with care.",
    image: "assets/heritage-artisan.jpg",
    alt: "Gemstone artisan inspecting a sapphire",
    links: [
      ["Sri Lankan Heritage", "#/heritage"],
      ["Ceylon Sapphire Story", "#/sapphires"],
      ["Madagascar Sourcing", "#/custom-sourcing"],
      ["Treatment Disclosure", "#/about"],
      ["Private Consultation", "#/private-viewing"],
    ],
  },
};

const collections = {
  sapphires: {
    title: "Sri Lankan Sapphires",
    intro:
      "Ceylon sapphires selected for saturation, crystal, provenance and enduring collector appeal.",
    stones: [
      ["Royal Blue Cushion Sapphire", "Sri Lanka", "5.42 ct", "10.1 x 8.8 x 5.3 mm", "Royal blue", "Heated", "GIA", 18400, "Available"],
      ["Cornflower Oval Sapphire", "Ratnapura, Sri Lanka", "3.18 ct", "9.2 x 7.4 x 4.6 mm", "Cornflower blue", "No indication of heat", "GRS", 14200, "By enquiry"],
      ["Padparadscha Sapphire", "Sri Lanka", "2.06 ct", "8.0 x 6.5 x 3.9 mm", "Pinkish orange", "Heated", "Lotus", 22800, "Reserved"],
      ["Velvet Blue Emerald Cut", "Elahera, Sri Lanka", "4.81 ct", "9.8 x 7.1 x 4.8 mm", "Velvet blue", "No indication of heat", "SSEF", 19600, "Available"],
      ["Pink Oval Sapphire", "Sri Lanka", "2.44 ct", "8.6 x 6.7 x 4.2 mm", "Vivid pink", "Heated", "Lotus", 11800, "Available"],
      ["Yellow Cushion Sapphire", "Sri Lanka", "3.72 ct", "8.9 x 8.1 x 5.0 mm", "Golden yellow", "Heated", "GIA", 9200, "Available"],
      ["Green Oval Sapphire", "Madagascar", "2.96 ct", "8.8 x 7.0 x 4.5 mm", "Forest green", "No indication of heat", "GRS", 10900, "By enquiry"],
      ["Teal Pear Sapphire", "Sri Lanka", "2.58 ct", "9.4 x 6.6 x 4.3 mm", "Blue-green teal", "No indication of heat", "SSEF", 12600, "Available"],
      ["Violet Round Sapphire", "Sri Lanka", "1.84 ct", "7.1 x 7.1 x 4.1 mm", "Violet purple", "Heated", "GIA", 7800, "Available"],
      ["Orange Oval Sapphire", "Madagascar", "2.21 ct", "8.2 x 6.4 x 4.0 mm", "Mandarin orange", "Heated", "Lotus", 8400, "By enquiry"],
    ],
  },
  rubies: {
    title: "Rubies",
    intro:
      "Fine rubies with rich red colour, balanced cutting and documentation for discerning jewellery houses.",
    stones: [
      ["Pigeon Blood Oval Ruby", "Madagascar", "2.74 ct", "8.4 x 6.7 x 4.1 mm", "Vivid red", "Heated", "Gubelin", 16500, "Available"],
      ["Classic Cushion Ruby", "Madagascar", "1.92 ct", "7.1 x 6.4 x 3.8 mm", "Deep red", "No indication of heat", "GRS", 9800, "By enquiry"],
    ],
  },
  emeralds: {
    title: "Emeralds",
    intro:
      "Elegant emeralds chosen for life, garden, tone and suitability for important bespoke pieces.",
    stones: [
      ["Madagascar Emerald Cut", "Madagascar", "3.62 ct", "9.7 x 7.2 x 5.0 mm", "Vivid green", "Minor oil", "SSEF", 12800, "Available"],
      ["Sri Lankan Octagon Emerald", "Sri Lanka", "4.24 ct", "10.2 x 8.1 x 5.2 mm", "Bluish green", "Insignificant oil", "GIA", 15400, "By enquiry"],
    ],
  },
  spinels: {
    title: "Spinels",
    intro:
      "Collector spinels in refined reds, greys, violets and cobalt blues with crisp brilliance.",
    stones: [
      ["Cobalt Blue Spinel", "Sri Lanka", "1.64 ct", "7.2 x 5.8 x 3.7 mm", "Cobalt blue", "No treatment", "Lotus", 7200, "Available"],
      ["Madagascar Pink Spinel", "Madagascar", "3.33 ct", "8.8 x 7.3 x 4.9 mm", "Vivid pink", "No treatment", "GRS", 6800, "Available"],
    ],
  },
  alexandrites: {
    title: "Alexandrites",
    intro:
      "Rare colour-change chrysoberyl sourced for strength of phenomenon, clarity and collector value.",
    stones: [
      ["Oval Alexandrite", "Sri Lanka", "1.47 ct", "7.4 x 6.1 x 3.9 mm", "Green to purplish red", "No treatment", "GIA", 12400, "By enquiry"],
      ["Collector Cushion Alexandrite", "Madagascar", "2.12 ct", "7.8 x 6.9 x 4.2 mm", "Teal to raspberry", "No treatment", "SSEF", 17100, "Available"],
    ],
  },
  "other-precious-gemstones": {
    title: "Other Precious Gemstones",
    intro:
      "Rare collector stones sourced on request, from chrysoberyl and garnet to exceptional tourmaline and zircon.",
    stones: [
      ["Cat's Eye Chrysoberyl", "Sri Lanka", "5.88 ct", "9.9 x 8.2 x 6.1 mm", "Honey green", "No treatment", "GIA", 5900, "Available"],
      ["Paraiba Tourmaline", "Madagascar", "1.21 ct", "7.0 x 5.5 x 3.4 mm", "Neon blue-green", "Heated", "Gubelin", 14300, "By enquiry"],
    ],
  },
};

const categories = [
  ["Sapphires", "sapphires", "Ceylon blue, padparadscha and fancy sapphire selections."],
  ["Rubies", "rubies", "Rich red stones with fine cutting and documentation."],
  ["Emeralds", "emeralds", "Elegant greens selected for life, tone and presence."],
  ["Spinels", "spinels", "Rare natural spinels in exceptional collector colours."],
  ["Alexandrites", "alexandrites", "Colour-change stones for connoisseurs."],
  ["Other Precious Gemstones", "other-precious-gemstones", "Distinctive rare stones sourced for private clients."],
];

const accountCopy = {
  en: {
    signInTitle: "Sign In",
    signInLead: "Please sign in to your Diverse Gems account.",
    email: "Email",
    password: "Password",
    signInButton: "Sign In",
    forgot: "Forgot your password?",
    registerTitle: "Create an Account",
    registerLead: "Save selected stones, view your private shortlist and access enquiry history from any device.",
    registerButton: "Register",
  },
  zh: {
    signInTitle: "登录",
    signInLead: "请登录您的 Diverse Gems 账户。",
    email: "电子邮箱",
    password: "密码",
    signInButton: "登录",
    forgot: "忘记密码？",
    registerTitle: "创建账户",
    registerLead: "保存甄选宝石，查看私人候选清单，并在任何设备访问咨询记录。",
    registerButton: "注册",
  },
  th: {
    signInTitle: "เข้าสู่ระบบ",
    signInLead: "กรุณาเข้าสู่ระบบบัญชี Diverse Gems ของคุณ",
    email: "อีเมล",
    password: "รหัสผ่าน",
    signInButton: "เข้าสู่ระบบ",
    forgot: "ลืมรหัสผ่าน?",
    registerTitle: "สร้างบัญชี",
    registerLead: "บันทึกอัญมณีที่เลือก ดูรายการคัดเลือกส่วนตัว และเข้าถึงประวัติการสอบถามได้จากทุกอุปกรณ์",
    registerButton: "ลงทะเบียน",
  },
};

const routes = {
  "/": renderHome,
  "/collection": renderCollectionIndex,
  "/new-arrivals": renderNewArrivals,
  "/custom-sourcing": renderCustomSourcing,
  "/heritage": renderHeritage,
  "/about": renderAbout,
  "/private-viewing": renderPrivateViewing,
  "/contact": renderContact,
  "/login": renderLogin,
  "/saved": renderSaved,
};

Object.keys(collections).forEach((slug) => {
  routes[`/${slug}`] = () => renderCollectionPage(slug);
});

function getCopy() {
  return translations[selectedLanguage] || translations.en;
}

function pageShell({ eyebrow, title, lead }) {
  return `
    <section class="page-hero reveal">
      <div class="page-hero-inner">
        <p class="eyebrow">${eyebrow}</p>
        <h1>${title}</h1>
        <p class="lead">${lead}</p>
      </div>
    </section>
  `;
}

function formatPrice(priceUsd) {
  const currency = currencies[selectedCurrency] ? selectedCurrency : "USD";
  const { rate, locale } = currencies[currency];
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(priceUsd * rate);
}

function renderHome() {
  const copy = getCopy();
  const home = copy.home;
  return `
    <section class="hero">
      <div class="hero-copy reveal">
        <p class="eyebrow">${home.eyebrow}</p>
        <h1>${home.title}</h1>
        <p class="lead">${home.lead}</p>
        <div class="button-row">
          <a class="btn" href="#/collection">${home.primary}</a>
          <a class="btn secondary home-invert" href="#/private-viewing">${home.secondary}</a>
        </div>
      </div>
      <div class="hero-media reveal">
        <img src="${images.hero}" alt="A royal blue Sri Lankan sapphire on a white gallery surface" loading="eager" />
      </div>
    </section>

    <section class="section">
      <div class="section-header reveal">
        <div>
          <p class="eyebrow">${home.featuredEyebrow}</p>
          <h2>${home.featuredTitle}</h2>
        </div>
        <p>${home.featuredLead}</p>
      </div>
      <div class="category-grid">
        ${categories.map(categoryCard).join("")}
      </div>
    </section>

    <section class="section compact">
      <div class="split">
        <div class="editorial-image reveal"><img src="${images.collection}" alt="A refined selection of sapphires, rubies, emeralds and rare gemstones" loading="lazy" /></div>
        <div class="text-stack reveal">
          <p class="eyebrow">${home.standardEyebrow}</p>
          <h2>${home.standardTitle}</h2>
          <p>${home.standardLead}</p>
          <ul class="rule-list">
            ${home.rules.map(([label, value]) => `<li><span>${label}</span><span>${value}</span></li>`).join("")}
          </ul>
        </div>
      </div>
    </section>

    <section class="section navy-band">
      <div class="section-header reveal">
        <div>
          <p class="eyebrow">${home.heritageEyebrow}</p>
          <h2>${home.heritageTitle}</h2>
        </div>
        <a class="btn secondary home-invert" href="#/heritage">${home.heritageButton}</a>
      </div>
    </section>

    <section class="section compact">
      <div class="split">
        <div class="text-stack reveal">
          <p class="eyebrow">${home.appointmentEyebrow}</p>
          <h2>${home.appointmentTitle}</h2>
          <p>${home.appointmentLead}</p>
          <a class="btn" href="#/private-viewing">${home.appointmentButton}</a>
        </div>
        <div class="appointment-media reveal"><img src="${images.private}" alt="Private gemstone viewing salon with stones on a marble table" loading="lazy" /></div>
      </div>
    </section>
  `;
}

function renderCollectionIndex() {
  const copy = getCopy();
  const [eyebrow, title, lead] = copy.pages.collection;
  return `
    ${pageShell({
      eyebrow,
      title,
      lead,
    })}
    <section class="section">
      <div class="category-grid">${categories.map(categoryCard).join("")}</div>
    </section>
  `;
}

function renderCollectionPage(slug) {
  const copy = getCopy();
  const collection = collections[slug];
  const [title, lead] = copy.collectionTitles[slug] || [collection.title, collection.intro];
  return `
    ${pageShell({ eyebrow: copy.common.collectionEyebrow, title, lead })}
    <section class="section">
      <div class="catalogue-grid">
        ${collection.stones.map((stone) => stoneCard([...stone, stoneImages[stone[0]] || collectionImages[slug] || images.collection])).join("")}
      </div>
    </section>
  `;
}

function renderNewArrivals() {
  const copy = getCopy();
  const [eyebrow, title, lead] = copy.pages.newArrivals;
  const newArrivalStones = [
    [...collections.sapphires.stones[1], stoneImages["Cornflower Oval Sapphire"]],
    [...collections.sapphires.stones[2], stoneImages["Padparadscha Sapphire"]],
    [...collections.alexandrites.stones[1], stoneImages["Collector Cushion Alexandrite"]],
    [...collections["other-precious-gemstones"].stones[1], stoneImages["Paraiba Tourmaline"]],
  ];

  return `
    ${pageShell({
      eyebrow,
      title,
      lead,
    })}
    <section class="section">
      <div class="catalogue-grid">
        ${newArrivalStones.map(stoneCard).join("")}
      </div>
    </section>
  `;
}

function renderCustomSourcing() {
  const copy = getCopy();
  const [eyebrow, title, lead] = copy.pages.customSourcing;
  return `
    ${pageShell({
      eyebrow,
      title,
      lead,
    })}
    <section class="section compact">
      <div class="showcase-grid">
        ${copy.sections.customSteps.map(([item, text], index) => `
          <article class="showcase-item reveal">
            <p class="eyebrow">0${index + 1}</p>
            <h3>${item}</h3>
            <p>${text}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderHeritage() {
  const copy = getCopy();
  const [eyebrow, title, lead] = copy.pages.heritage;
  return `
    ${pageShell({
      eyebrow,
      title,
      lead,
    })}
    <section class="section compact">
      <div class="split">
        <div class="story-media reveal"><img src="${images.heritage}" alt="An artisan inspecting a sapphire with a loupe" loading="lazy" /></div>
        <div class="text-stack reveal">
          <h2>${copy.sections.heritageTitle}</h2>
          <p>${copy.sections.heritageLead}</p>
          <ul class="rule-list">
            ${copy.sections.heritageRules.map(([label, value]) => `<li><span>${label}</span><span>${value}</span></li>`).join("")}
          </ul>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="story-grid">
        ${copy.sections.storyCards.map(([cardTitle, text]) => `<article class="story-card reveal"><h3>${cardTitle}</h3><p>${text}</p></article>`).join("")}
      </div>
    </section>
  `;
}

function renderAbout() {
  const copy = getCopy();
  const [eyebrow, title, lead] = copy.pages.about;
  return `
    ${pageShell({
      eyebrow,
      title,
      lead,
    })}
    <section class="section compact">
      <div class="split">
        <div class="text-stack reveal">
          <h2>${copy.sections.aboutTitle}</h2>
          <p>${copy.sections.aboutLead}</p>
          <a class="btn" href="#/contact">${copy.common.beginConversation}</a>
        </div>
        <div class="editorial-image reveal"><img src="${images.collection}" alt="Loose precious gemstones arranged on white stone" loading="lazy" /></div>
      </div>
    </section>
  `;
}

function renderPrivateViewing() {
  const copy = getCopy();
  const [eyebrow, title, lead] = copy.pages.privateViewing;
  const form = copy.form;
  return `
    ${pageShell({
      eyebrow,
      title,
      lead,
    })}
    <section class="section compact">
      <div class="appointment-shell">
        <div class="appointment-media reveal"><img src="${images.private}" alt="Luxury gemstone appointment room" loading="lazy" /></div>
        <div class="text-stack reveal">
          <form class="form" id="bookingForm">
            <div class="field"><label for="name">${form.name}</label><input id="name" required autocomplete="name" /></div>
            <div class="field"><label for="email">${form.email}</label><input id="email" type="email" required autocomplete="email" /></div>
            <div class="field"><label for="phone">${form.phone}</label><input id="phone" autocomplete="tel" /></div>
            <div class="field"><label for="date">${form.date}</label><input id="date" type="date" required /></div>
            <div class="field">
              <label for="time">${form.time}</label>
              <select id="time" required>
                <option value="">${form.selectTime}</option>
                <option>10:00 AM</option>
                <option>12:30 PM</option>
                <option>3:00 PM</option>
                <option>5:30 PM</option>
              </select>
            </div>
            <div class="field"><label for="interest">${form.interest}</label><input id="interest" placeholder="${form.interestPlaceholder}" /></div>
            <div class="field"><label for="notes">${form.notes}</label><textarea id="notes" placeholder="${form.notesPlaceholder}"></textarea></div>
            <button class="btn" type="submit">${form.submit}</button>
          </form>
          <p class="confirmation" id="confirmation">${form.confirmation}</p>
        </div>
      </div>
    </section>
  `;
}

function renderContact() {
  const copy = getCopy();
  const [eyebrow, title, lead] = copy.pages.contact;
  const cards = copy.contactCards;
  return `
    ${pageShell({
      eyebrow,
      title,
      lead,
    })}
    <section class="section compact">
      <div class="contact-grid">
        <article class="contact-card reveal"><h3>${cards[0][0]}</h3><p><a href="${contact.phoneHref}">${contact.phone}</a></p></article>
        <article class="contact-card reveal"><h3>${cards[1][0]}</h3><p><a href="${contact.emailHref}">${contact.email}</a></p></article>
        <article class="contact-card reveal"><h3>${cards[2][0]}</h3><p><a href="${contact.mapsHref}" target="_blank" rel="noreferrer">${contact.address}</a>. ${cards[2][1]}</p></article>
        <article class="contact-card reveal"><h3>${cards[3][0]}</h3><p><a href="${contact.instagramHref}" target="_blank" rel="noreferrer">${contact.instagram}</a></p></article>
        <article class="contact-card reveal"><h3>${cards[4][0]}</h3><p class="badge-row">${certificationBadges.map((badge) => `<span>${badge}</span>`).join("")}</p></article>
        <article class="contact-card reveal"><h3>${cards[5][0]}</h3><p>${cards[5][1]}</p></article>
      </div>
    </section>
  `;
}

function renderLogin() {
  const account = accountCopy[selectedLanguage] || accountCopy.en;
  return `
    <section class="section account-section">
      <div class="account-shell reveal">
        <div class="account-panel">
          <h1>${account.signInTitle}</h1>
          <p>${account.signInLead}</p>
          <form class="account-form" data-account-form>
            <input type="email" autocomplete="email" placeholder="${account.email}" aria-label="${account.email}" />
            <input type="password" autocomplete="current-password" placeholder="${account.password}" aria-label="${account.password}" />
            <button class="btn account-action" type="submit">${account.signInButton}</button>
          </form>
          <a class="forgot-link" href="#/contact">${account.forgot} <span aria-hidden="true">›</span></a>
        </div>
        <div class="account-divider" aria-hidden="true"></div>
        <div class="account-panel">
          <h1>${account.registerTitle}</h1>
          <p>${account.registerLead}</p>
          <form class="account-form" data-account-form>
            <button class="btn account-action" type="submit">${account.registerButton}</button>
          </form>
        </div>
      </div>
    </section>
  `;
}

function renderSaved() {
  const copy = getCopy();
  const [eyebrow, title, lead] = copy.pages.saved;
  return `
    ${pageShell({
      eyebrow,
      title,
      lead,
    })}
    <section class="section compact">
      <a class="btn" href="#/collection">${copy.common.browseCollection}</a>
    </section>
  `;
}

function categoryCard([name, slug, text], index) {
  const translated = getCopy().categories[index] || [name, text];
  const [displayName, displayText] = translated;
  return `
    <a class="category-card reveal" href="#/${slug}">
      <img src="${collectionImages[slug]}" alt="${name} gemstone collection" loading="lazy" />
      <div>
        <span>${displayName}</span>
        <h3>${displayName}</h3>
        <p>${displayText}</p>
      </div>
    </a>
  `;
}

function stoneCard(stone) {
  const copy = getCopy();
  const [name, origin, weight, dimensions, color, treatment, certification, priceUsd, availability, image] = stone;
  const specs = copy.common.specs;
  return `
    <article class="catalogue-card reveal">
      <div class="image-wrap"><img src="${image}" alt="${name}" loading="lazy" /></div>
      <h3>${name}</h3>
      <div class="spec-grid">
        <span><b>${specs[0]}</b>${origin}</span>
        <span><b>${specs[1]}</b>${weight}</span>
        <span><b>${specs[2]}</b>${dimensions}</span>
        <span><b>${specs[3]}</b>${color}</span>
        <span><b>${specs[4]}</b>${treatment}</span>
        <span><b>${specs[5]}</b>${certification}</span>
      </div>
      <div class="card-commercial">
        <p class="price">${formatPrice(priceUsd)}</p>
        <p class="availability">${copy.common.status[availability] || availability}</p>
      </div>
      <a class="btn secondary" href="#/contact">${copy.common.enquire}</a>
    </article>
  `;
}

function getPath() {
  return window.location.hash.replace("#", "") || "/";
}

function render() {
  const path = getPath();
  const renderer = routes[path] || renderHome;
  document.querySelector("#main").innerHTML = renderer();
  document.querySelectorAll("[data-route]").forEach((link) => {
    link.classList.toggle("is-active", link.dataset.route === path);
  });
  document.title = path === "/" ? "Diverse Gems | Fine Sri Lankan Gemstones" : `Diverse Gems | ${path.slice(1).replaceAll("-", " ")}`;
  window.scrollTo({ top: 0, behavior: "instant" });
  setupReveals();
  setupBooking();
  setupAccountForms();
  setupControls();
}

function setupReveals() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
    { threshold: 0.12 }
  );
  items.forEach((item) => observer.observe(item));
}

function setupBooking() {
  const form = document.querySelector("#bookingForm");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    document.querySelector("#confirmation").classList.add("is-visible");
    form.reset();
  });
}

function setupAccountForms() {
  document.querySelectorAll("[data-account-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  });
}

function setupControls() {
  const currencySelect = document.querySelector("#currencySelect");
  const languageSelect = document.querySelector("#languageSelect");
  if (currencySelect) {
    currencySelect.innerHTML = Object.keys(currencies)
      .map((code) => `<option value="${code}">${currencyLabels[code] || code}</option>`)
      .join("");
    currencySelect.value = selectedCurrency;
  }
  if (languageSelect) {
    languageSelect.value = selectedLanguage;
    document.documentElement.lang = languageSelect.value;
  }
  applyLanguage();
}

const nav = document.querySelector(".nav-links");
const toggle = document.querySelector(".menu-toggle");
const mega = document.querySelector("#megaPanel");
const header = document.querySelector("#siteHeader");
const announcementLink = document.querySelector("#announcementLink");
const currencySelect = document.querySelector("#currencySelect");
const languageSelect = document.querySelector("#languageSelect");
const megaEyebrow = document.querySelector("#megaEyebrow");
const megaTitle = document.querySelector("#megaTitle");
const megaLinks = document.querySelector("#megaLinks");
const megaImage = document.querySelector("#megaImage");
let announcementIndex = 0;

function updateAnnouncement(nextIndex) {
  announcementIndex = (nextIndex + announcementItems.length) % announcementItems.length;
  const item = announcementItems[announcementIndex];
  const language = translations[selectedLanguage] ? selectedLanguage : "en";
  announcementLink.classList.remove("is-changing");
  window.requestAnimationFrame(() => {
    announcementLink.classList.add("is-changing");
    announcementLink.textContent = translations[language].announcements[announcementIndex];
    announcementLink.href = item.href;
  });
}

function applyLanguage() {
  const language = translations[selectedLanguage] ? selectedLanguage : "en";
  const copy = translations[language];
  document.documentElement.lang = language;
  document.querySelectorAll(".nav-links a").forEach((link, index) => {
    if (copy.nav[index]) link.textContent = copy.nav[index];
  });
  const selectorLabels = document.querySelectorAll(".selector-label span");
  if (selectorLabels[0]) selectorLabels[0].textContent = copy.languageLabel;
  if (selectorLabels[1]) selectorLabels[1].textContent = copy.currencyLabel;
  const accountLink = document.querySelector(".utility-right a[href='#/login']");
  const savedLink = document.querySelector(".utility-right a[href='#/saved']");
  if (accountLink) {
    accountLink.setAttribute("aria-label", copy.loginLabel);
    accountLink.title = copy.loginLabel;
  }
  if (savedLink) {
    savedLink.setAttribute("aria-label", copy.savedLabel);
    savedLink.title = copy.savedLabel;
  }
  const collectionPanel = document.querySelector(".mega-collection-panel");
  const heritagePanel = document.querySelector(".mega-heritage-panel");
  if (collectionPanel) {
    collectionPanel.querySelector(".eyebrow").textContent = copy.mega.collectionEyebrow;
    collectionPanel.querySelector("h2").textContent = copy.mega.collectionTitle;
    collectionPanel.querySelector(".mega-grid").innerHTML = megaContent.collection.links
      .map(([, href], index) => `<a href="${href}">${copy.mega.collectionLinks[index]}</a>`)
      .join("");
  }
  if (heritagePanel) {
    heritagePanel.querySelector(".eyebrow").textContent = copy.mega.heritageEyebrow;
    heritagePanel.querySelector("h2").textContent = copy.mega.heritageTitle;
    heritagePanel.querySelector(".mega-grid").innerHTML = megaContent.heritage.links
      .map(([, href], index) => `<a href="${href}">${copy.mega.heritageLinks[index]}</a>`)
      .join("");
  }
  const footerColumns = document.querySelectorAll(".footer-grid > div");
  if (footerColumns.length) {
    const footer = copy.footer;
    const footerLinks = [
      [copy.nav[1], copy.mega.collectionLinks[0], copy.nav[4], copy.nav[6]],
      [copy.nav[2], copy.nav[5], copy.nav[7]],
    ];
    footerColumns[0].querySelector("p").textContent = footer.description;
    footerColumns[1].querySelector("h3").textContent = footer.showroom;
    footerColumns[1].querySelectorAll("a").forEach((link, index) => {
      if (footerLinks[0][index]) link.textContent = footerLinks[0][index];
    });
    footerColumns[2].querySelector("h3").textContent = footer.company;
    footerColumns[2].querySelectorAll("a").forEach((link, index) => {
      if (footerLinks[1][index]) link.textContent = footerLinks[1][index];
    });
    footerColumns[3].querySelector("h3").textContent = footer.contact;
  }
  const footerBottom = document.querySelectorAll(".footer-bottom span");
  if (footerBottom[0]) footerBottom[0].textContent = copy.footer.copyright;
  if (footerBottom[1]) footerBottom[1].textContent = copy.footer.ethics;
  updateAnnouncement(announcementIndex);
}

function updateMega(type) {
  const content = megaContent[type] || megaContent.collection;
  const copy = getCopy().mega;
  const labels = type === "heritage" ? copy.heritageLinks : copy.collectionLinks;
  megaEyebrow.textContent = type === "heritage" ? copy.heritageEyebrow : copy.collectionEyebrow;
  megaTitle.textContent = type === "heritage" ? copy.heritageTitle : copy.collectionTitle;
  megaLinks.innerHTML = content.links.map(([, href], index) => `<a href="${href}">${labels[index]}</a>`).join("");
  megaImage.src = content.image;
  megaImage.alt = content.alt;
}

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll("[data-menu]").forEach((link) => {
  const openMenu = () => {
    if (link.dataset.menu === "collection") {
      updateMega("collection");
      mega.classList.add("is-open");
      return;
    }
    mega.classList.remove("is-open");
  };
  link.addEventListener("pointerover", openMenu);
  link.addEventListener("mouseover", openMenu);
  link.addEventListener("mouseenter", openMenu);
  link.addEventListener("focus", openMenu);
});

document.querySelector("[data-announcement-prev]").addEventListener("click", () => updateAnnouncement(announcementIndex - 1));
document.querySelector("[data-announcement-next]").addEventListener("click", () => updateAnnouncement(announcementIndex + 1));
window.setInterval(() => updateAnnouncement(announcementIndex + 1), 5200);

currencySelect.addEventListener("change", () => {
  selectedCurrency = currencySelect.value;
  localStorage.setItem("dgCurrency", selectedCurrency);
  render();
});

languageSelect.addEventListener("change", () => {
  selectedLanguage = languageSelect.value;
  localStorage.setItem("dgLanguage", selectedLanguage);
  render();
});

header.addEventListener("mouseleave", () => mega.classList.remove("is-open"));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    mega.classList.remove("is-open");
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }
});

window.addEventListener("hashchange", () => {
  nav.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
  mega.classList.remove("is-open");
  render();
});

render();

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
let savedWishlist = JSON.parse(localStorage.getItem("dgWishlist") || "[]");

const translations = {
  en: {
    nav: ["Home", "Our Collection", "Services", "Private Viewing", "Events & Exhibitions", "About Us"],
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
      heritageEyebrow: "About Us",
      heritageTitle: "From Ratnapura tradition to rare stones selected with care.",
      servicesEyebrow: "Services",
      servicesTitle: "Private gemstone services for collectors and jewellers.",
      privateEyebrow: "Private Viewing",
      privateTitle: "Arrange a discreet appointment or speak with our team.",
      collectionLinks: ["Sapphires", "Rubies", "Emeralds", "Spinels", "Alexandrites", "Other Precious Gemstones", "New Arrivals"],
      heritageLinks: ["Sri Lankan Heritage", "Ceylon Sapphire Story", "Madagascar Sourcing", "Treatment Disclosure"],
      servicesLinks: ["Custom Sourcing", "Customisation"],
      privateLinks: ["Book a Private Viewing", "Contact"],
      featured: "Featured",
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
      reviewsEyebrow: "Client words",
      reviewsTitle: "What our clients say.",
      reviewsLead: "",
      eventsEyebrow: "Events & exhibitions",
      eventsTitle: "Showing Sri Lankan gemstones on the world stage.",
      eventsIntro: "Diverse Gems presents selected natural sapphires and rare coloured gemstones at leading international gem and jewellery exhibitions, connecting private collectors, jewellers and trade clients with carefully documented stones.",
      eventsNext: "Next exhibition",
      eventsLearnMore: "Learn More",
      eventsViewAll: "View All Events",
      eventsReadMore: "Read More",
    },
    pages: {
      collection: ["Our collection", "A catalogue without hurry.", "Explore natural sapphires, rubies, emeralds, spinels, alexandrites and rare collector stones, mainly from Sri Lanka with select pieces from Madagascar."],
      newArrivals: ["New Arrivals", "Recently acquired stones.", "A fresh selection of collector gemstones now available for private enquiry."],
      customSourcing: ["Custom sourcing", "Rare stones, sourced with discretion.", "For clients seeking a particular origin, colour, size, treatment profile or certification standard, Diverse Gems conducts private sourcing with a focus on Sri Lanka and selected Madagascar supply."],
      customisation: ["Customisation", "Personal gemstone presentation and jewellery planning.", "For clients refining a shortlist into a bespoke piece or private collection direction, our team can assist with stone matching, setting considerations and presentation guidance."],
      heritage: ["Sri Lankan heritage", "An island renowned for sapphire.", "Sri Lanka remains our primary sourcing heritage, complemented by selected Madagascar gemstones where rarity, beauty and documentation meet our standard."],
      about: ["About Diverse Gems", "A private house for exceptional natural gemstones.", "Diverse Gems exports fine Sri Lankan sapphires and rare coloured stones, with select Madagascar acquisitions, to collectors, jewellers and trade clients who expect discretion, documentation and refined service."],
      privateViewing: ["Private viewing", "A discreet appointment in Sri Lanka.", "Private inspections are available only within Sri Lanka and are arranged for clients with a genuine interest in selected gemstones."],
      events: ["Events & Exhibitions", "International showcases and private exhibition appointments.", "Explore upcoming appearances and past exhibitions where Diverse Gems has presented natural sapphires, rubies, emeralds and rare collector gemstones to clients around the world."],
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
      specs: ["Origin", "Weight", "Shape", "Dimensions", "Colour", "Clarity", "Treatment", "Certification"],
      status: { Available: "Available", "By enquiry": "By enquiry", Reserved: "Reserved" },
      filters: {
        filters: "Filters",
        sort: "Sort",
        featured: "Featured",
        newest: "Newest",
        priceAsc: "Price low to high",
        priceDesc: "Price high to low",
        caratDesc: "Carats high to low",
        caratAsc: "Carats low to high",
        allOrigins: "All origins",
        allClarity: "All clarity",
        allShapes: "All shapes",
        allColours: "All colours",
        minPrice: "Min price",
        maxPrice: "Max price",
        reset: "Reset",
        stoneShown: "stone shown",
        stonesShown: "stones shown",
      },
      product: {
        bookPrivateViewing: "Book a Private Viewing",
        backTo: "Back to",
        colourGrade: "Colour Grade",
        clarityGrade: "Clarity Grade",
        gemstoneType: "Gemstone Type",
        availability: "Availability",
        chemicalFormula: "Chemical Formula",
        mohsHardness: "Mohs Hardness",
        specifications: "Specifications",
        certification: "Certification",
        certificationLab: "Certification laboratory",
        certificateNumber: "Certificate number",
        certificateIssueDate: "Certificate issue date",
        certificateStatus: "Status",
        naturalSynthetic: "Natural / Synthetic",
        geographicOrigin: "Geographic origin",
        treatmentDisclosure: "Treatment disclosure",
        colourDescription: "Colour description",
        natural: "Natural",
        verifiedReport: "Verified report available",
        verifyCertificate: "Verify Certificate",
        reportIntro: "report details are provided for customer verification with the issuing laboratory.",
        primaryView: "Primary view",
        macroView: "Macro close-up",
        collectionContext: "Collection context",
        studioComparison: "Studio comparison",
        productInfo: "Product information",
        imageViews: "Product image views",
        similarTitle: "You May Also Like",
        similarLead: "",
        reviewsTitle: "Review",
        reviewsLead: "Private client notes on service, presentation and gemstone quality.",
        leaveReviewTitle: "Leave a Review",
        rateService: "How would you rate our service?",
        rateProduct: "How would you rate this gemstone?",
        reviewNotes: "Additional notes",
        reviewNotesPlaceholder: "Share your experience with our service, documentation, viewing or gemstone quality.",
        submitReview: "Submit Review",
        reviewThanks: "Thank you. Your review has been received for moderation.",
        olderReviews: "Client Reviews",
        olderReviewsNote: "Reviews from similar gemstone purchases.",
        noSaved: "No gemstones saved yet.",
        exploreCollection: "Explore Collection",
        save: "Save",
      },
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
      customisationSteps: [["Stone matching", "Compare colour, shape, carat and certification options for a refined shortlist."], ["Jewellery planning", "Consider setting direction, proportions and long-term wearability with the selected stone."], ["Private presentation", "Prepare a collector-ready or jeweller-ready presentation with documentation notes."]],
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
      colour: "Preferred colour",
      cut: "Preferred cut",
      size: "Preferred size",
      weight: "Preferred weight",
      additional: "Additional details",
      additionalPlaceholder: "Share preferred origin, certificate needs, jewellery plans or timing.",
      colourOptions: ["Royal blue", "Cornflower blue", "Pink", "Yellow", "Green", "Teal", "Violet", "Orange", "Ruby red", "Emerald green", "Open to guidance"],
      cutOptions: ["Cushion", "Oval", "Emerald", "Round", "Pear", "Radiant", "Asscher", "Open to guidance"],
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
      newsletter: "Latest from Diverse Gems",
      newsletterLead: "Private notes on new stones, sourcing windows and viewing availability.",
      newsletterPlaceholder: "Email address",
      newsletterButton: "Sign Up",
      newsletterSuccess: "Thank you. We will send only considered updates.",
      copyright: "© 2026 DIVERSE GEMS. All rights reserved.",
      ethics: "Ethically sourced natural gemstones.",
    },
  },
  zh: {
    nav: ["首页", "我们的珍藏", "服务", "私人鉴赏", "展会活动", "关于我们"],
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
      heritageEyebrow: "关于我们",
      heritageTitle: "源自拉特纳普勒传统，以细致眼光甄选稀有宝石。",
      servicesEyebrow: "服务",
      servicesTitle: "为收藏家与珠宝商提供私人宝石服务。",
      privateEyebrow: "私人鉴赏",
      privateTitle: "安排私密预约或联系我们团队。",
      collectionLinks: ["蓝宝石", "红宝石", "祖母绿", "尖晶石", "变石", "其他珍贵宝石", "新品"],
      heritageLinks: ["斯里兰卡传承", "锡兰蓝宝石故事", "马达加斯加采购", "处理披露"],
      servicesLinks: ["定制寻石", "定制服务"],
      privateLinks: ["预约私人鉴赏", "联系"],
      featured: "精选",
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
      reviewsEyebrow: "客户评价",
      reviewsTitle: "客户如何评价我们。",
      reviewsLead: "精选购买客户对服务、文件与宝石品质的真实反馈。",
      eventsEyebrow: "展会活动",
      eventsTitle: "在国际舞台展示斯里兰卡宝石。",
      eventsIntro: "Diverse Gems 在国际宝石与珠宝展会上展示甄选天然蓝宝石及稀有彩色宝石，让私人收藏家、珠宝商与贸易客户了解文件齐备的优质宝石。",
      eventsNext: "下一场展会",
      eventsLearnMore: "了解更多",
      eventsViewAll: "查看全部活动",
      eventsReadMore: "阅读更多",
    },
    pages: {
      collection: ["我们的珍藏", "从容浏览的目录。", "探索天然蓝宝石、红宝石、祖母绿、尖晶石、变石及稀有收藏宝石，主要源自斯里兰卡，并精选马达加斯加宝石。"],
      newArrivals: ["新品", "近期入库宝石。", "全新精选收藏级宝石，现可私人咨询。"],
      customSourcing: ["定制寻石", "以私密方式寻找稀有宝石。", "针对指定产地、颜色、尺寸、处理状态或证书标准的客户，Diverse Gems 提供以斯里兰卡与精选马达加斯加供应为重点的私人寻石服务。"],
      customisation: ["定制服务", "私人宝石呈现与珠宝规划。", "当客户希望将候选宝石发展为定制珠宝或私人收藏方向时，我们可协助宝石搭配、镶嵌考量与呈现建议。"],
      heritage: ["斯里兰卡传承", "以蓝宝石闻名的岛屿。", "斯里兰卡是我们的主要采购传承，并辅以符合稀有度、美感与文件标准的精选马达加斯加宝石。"],
      about: ["关于 Diverse Gems", "面向卓越天然宝石的私人品牌。", "Diverse Gems 向收藏家、珠宝商与贸易客户出口高级斯里兰卡蓝宝石和稀有彩色宝石，并提供精选马达加斯加宝石。"],
      privateViewing: ["私人鉴赏", "在斯里兰卡的私密预约。", "私人鉴赏仅在斯里兰卡提供，并为对甄选宝石有真实兴趣的客户安排。"],
      events: ["展会活动", "国际展示与私人展会预约。", "浏览 Diverse Gems 展示天然蓝宝石、红宝石、祖母绿及稀有收藏宝石的未来与过往展会。"],
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
      specs: ["产地", "重量", "形状", "尺寸", "颜色", "净度", "处理", "证书"],
      status: { Available: "可购买", "By enquiry": "请咨询", Reserved: "已预留" },
      filters: {
        filters: "筛选",
        sort: "排序",
        featured: "精选",
        newest: "最新",
        priceAsc: "价格由低到高",
        priceDesc: "价格由高到低",
        caratDesc: "克拉由高到低",
        caratAsc: "克拉由低到高",
        allOrigins: "所有产地",
        allClarity: "所有净度",
        allShapes: "所有形状",
        allColours: "所有颜色",
        minPrice: "最低价格",
        maxPrice: "最高价格",
        reset: "重置",
        stoneShown: "颗宝石显示",
        stonesShown: "颗宝石显示",
      },
      product: {
        bookPrivateViewing: "预约私人鉴赏",
        backTo: "返回",
        colourGrade: "颜色等级",
        clarityGrade: "净度等级",
        gemstoneType: "宝石类型",
        availability: "状态",
        chemicalFormula: "化学式",
        mohsHardness: "莫氏硬度",
        specifications: "规格",
        certification: "证书",
        certificationLab: "认证实验室",
        certificateNumber: "证书编号",
        certificateIssueDate: "证书日期",
        certificateStatus: "状态",
        naturalSynthetic: "天然 / 合成",
        geographicOrigin: "地理产地",
        treatmentDisclosure: "处理披露",
        colourDescription: "颜色描述",
        natural: "天然",
        verifiedReport: "报告可验证",
        verifyCertificate: "验证证书",
        reportIntro: "报告详情可通过签发实验室进行验证。",
        primaryView: "主视图",
        macroView: "微距特写",
        collectionContext: "系列场景",
        studioComparison: "工作室对比",
        productInfo: "产品信息",
        imageViews: "产品图片视图",
        similarTitle: "您可能也喜欢",
        similarLead: "",
        reviewsTitle: "客户评价",
        reviewsLead: "私人客户对服务、呈现与宝石品质的反馈。",
        leaveReviewTitle: "留下评价",
        rateService: "您如何评价我们的服务？",
        rateProduct: "您如何评价这颗宝石？",
        reviewNotes: "补充说明",
        reviewNotesPlaceholder: "分享您对服务、文件、鉴赏或宝石品质的体验。",
        submitReview: "提交评价",
        reviewThanks: "谢谢。您的评价已收到并将进行审核。",
        olderReviews: "客户评价",
        olderReviewsNote: "来自类似宝石购买的评价。",
        noSaved: "尚未收藏宝石。",
        exploreCollection: "探索珍藏",
        save: "收藏",
      },
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
      customisationSteps: [["宝石搭配", "比较颜色、形状、克拉与证书选项，形成精致候选清单。"], ["珠宝规划", "结合所选宝石考虑镶嵌方向、比例与长期佩戴性。"], ["私人呈现", "准备适合收藏家或珠宝商使用的展示资料与文件说明。"]],
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
      colour: "偏好颜色",
      cut: "偏好切工",
      size: "偏好尺寸",
      weight: "偏好重量",
      additional: "补充说明",
      additionalPlaceholder: "请说明偏好产地、证书需求、珠宝计划或时间安排。",
      colourOptions: ["皇家蓝", "矢车菊蓝", "粉色", "黄色", "绿色", "蓝绿色", "紫色", "橙色", "红宝石红", "祖母绿", "接受建议"],
      cutOptions: ["枕形", "椭圆形", "祖母绿形", "圆形", "梨形", "雷地恩形", "阿斯切形", "接受建议"],
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
      newsletter: "Diverse Gems 最新资讯",
      newsletterLead: "接收新宝石、寻石机会与私人鉴赏时间的简短通知。",
      newsletterPlaceholder: "电子邮箱",
      newsletterButton: "订阅",
      newsletterSuccess: "谢谢。我们只会发送精心筛选的更新。",
      copyright: "© 2026 DIVERSE GEMS. 版权所有。",
      ethics: "符合伦理的天然宝石采购。",
    },
  },
  th: {
    nav: ["หน้าแรก", "คอลเลกชัน", "บริการ", "ชมแบบส่วนตัว", "งานแสดง", "เกี่ยวกับเรา"],
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
      heritageEyebrow: "เกี่ยวกับเรา",
      heritageTitle: "จากธรรมเนียมรัตนปุระสู่อัญมณีหายากที่คัดสรรด้วยความประณีต",
      servicesEyebrow: "บริการ",
      servicesTitle: "บริการอัญมณีแบบส่วนตัวสำหรับนักสะสมและช่างจิวเวลรี",
      privateEyebrow: "ชมแบบส่วนตัว",
      privateTitle: "นัดหมายอย่างเป็นส่วนตัวหรือติดต่อทีมของเรา",
      collectionLinks: ["แซฟไฟร์", "ทับทิม", "มรกต", "สปิเนล", "อเล็กซานไดรต์", "อัญมณีล้ำค่าอื่นๆ", "สินค้าใหม่"],
      heritageLinks: ["มรดกศรีลังกา", "เรื่องราวแซฟไฟร์ซีลอน", "การจัดหาจากมาดากัสการ์", "การเปิดเผยการปรับปรุงคุณภาพ"],
      servicesLinks: ["จัดหาเฉพาะ", "ปรับแต่งเฉพาะ"],
      privateLinks: ["จองชมแบบส่วนตัว", "ติดต่อ"],
      featured: "แนะนำ",
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
      reviewsEyebrow: "เสียงจากลูกค้า",
      reviewsTitle: "ลูกค้าพูดถึงเราอย่างไร",
      reviewsLead: "รีวิวคัดสรรจากลูกค้าที่ให้ความสำคัญกับบริการ เอกสาร และคุณภาพอัญมณี",
      eventsEyebrow: "งานแสดง",
      eventsTitle: "นำเสนออัญมณีศรีลังกาบนเวทีนานาชาติ",
      eventsIntro: "Diverse Gems นำเสนอแซฟไฟร์ธรรมชาติและอัญมณีสีหายากในงานอัญมณีและจิวเวลรีระดับนานาชาติ เพื่อเชื่อมต่อนักสะสม ช่างจิวเวลรี และลูกค้าการค้ากับอัญมณีที่มีเอกสารครบถ้วน",
      eventsNext: "งานถัดไป",
      eventsLearnMore: "ดูเพิ่มเติม",
      eventsViewAll: "ดูงานทั้งหมด",
      eventsReadMore: "อ่านเพิ่มเติม",
    },
    pages: {
      collection: ["คอลเลกชัน", "แคตตาล็อกที่ไม่เร่งรีบ", "สำรวจแซฟไฟร์ ทับทิม มรกต สปิเนล อเล็กซานไดรต์ และอัญมณีนักสะสมหายากจากศรีลังกาเป็นหลัก พร้อมชิ้นที่คัดจากมาดากัสการ์"],
      newArrivals: ["สินค้าใหม่", "อัญมณีที่เพิ่งคัดสรรมา", "อัญมณีนักสะสมชุดใหม่พร้อมให้สอบถามแบบส่วนตัว"],
      customSourcing: ["จัดหาเฉพาะ", "อัญมณีหายากที่จัดหาอย่างเป็นส่วนตัว", "สำหรับลูกค้าที่ต้องการแหล่งกำเนิด สี ขนาด ลักษณะการปรับปรุง หรือมาตรฐานใบรับรองเฉพาะ Diverse Gems ให้บริการจัดหาแบบส่วนตัวโดยเน้นศรีลังกาและแหล่งมาดากัสการ์ที่คัดสรร"],
      customisation: ["ปรับแต่งเฉพาะ", "การนำเสนออัญมณีและวางแผนจิวเวลรีแบบส่วนตัว", "สำหรับลูกค้าที่ต้องการพัฒนารายการคัดเลือกไปสู่ชิ้นงานเฉพาะหรือทิศทางการสะสม ทีมของเราช่วยให้คำแนะนำด้านการจับคู่ การตั้งตัวเรือน และการนำเสนอ"],
      heritage: ["มรดกศรีลังกา", "เกาะที่มีชื่อเสียงด้านแซฟไฟร์", "ศรีลังกาคือมรดกหลักด้านการจัดหาของเรา เสริมด้วยอัญมณีมาดากัสการ์ที่ผ่านมาตรฐานด้านความหายาก ความงาม และเอกสาร"],
      about: ["เกี่ยวกับ Diverse Gems", "บ้านส่วนตัวสำหรับอัญมณีธรรมชาติชั้นเลิศ", "Diverse Gems ส่งออกแซฟไฟร์ศรีลังกาชั้นดีและอัญมณีสีหายาก พร้อมชิ้นคัดจากมาดากัสการ์ ให้กับนักสะสม ช่างอัญมณี และลูกค้าการค้าที่ต้องการความเป็นส่วนตัว เอกสาร และบริการประณีต"],
      privateViewing: ["ชมแบบส่วนตัว", "นัดหมายอย่างเป็นส่วนตัวในศรีลังกา", "การชมแบบส่วนตัวมีเฉพาะในศรีลังกา และจัดให้ลูกค้าที่สนใจอัญมณีที่คัดสรรอย่างแท้จริง"],
      events: ["งานแสดง", "การจัดแสดงระดับนานาชาติและนัดหมายส่วนตัว", "สำรวจงานแสดงที่กำลังจะมาถึงและงานที่ผ่านมา ซึ่ง Diverse Gems ได้นำเสนอแซฟไฟร์ รูบี้ มรกต และอัญมณีหายากสำหรับนักสะสม"],
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
      specs: ["แหล่งกำเนิด", "น้ำหนัก", "รูปทรง", "ขนาด", "สี", "ความสะอาด", "การปรับปรุง", "ใบรับรอง"],
      status: { Available: "พร้อมจำหน่าย", "By enquiry": "สอบถามเพิ่มเติม", Reserved: "จองแล้ว" },
      filters: {
        filters: "ตัวกรอง",
        sort: "เรียงลำดับ",
        featured: "แนะนำ",
        newest: "ใหม่ล่าสุด",
        priceAsc: "ราคาต่ำไปสูง",
        priceDesc: "ราคาสูงไปต่ำ",
        caratDesc: "กะรัตมากไปน้อย",
        caratAsc: "กะรัตน้อยไปมาก",
        allOrigins: "ทุกแหล่งกำเนิด",
        allClarity: "ทุกระดับความสะอาด",
        allShapes: "ทุกรูปทรง",
        allColours: "ทุกสี",
        minPrice: "ราคาต่ำสุด",
        maxPrice: "ราคาสูงสุด",
        reset: "รีเซ็ต",
        stoneShown: "รายการที่แสดง",
        stonesShown: "รายการที่แสดง",
      },
      product: {
        bookPrivateViewing: "จองชมแบบส่วนตัว",
        backTo: "กลับไปที่",
        colourGrade: "ระดับสี",
        clarityGrade: "ระดับความสะอาด",
        gemstoneType: "ประเภทอัญมณี",
        availability: "สถานะ",
        chemicalFormula: "สูตรเคมี",
        mohsHardness: "ความแข็งโมห์ส",
        specifications: "รายละเอียด",
        certification: "ใบรับรอง",
        certificationLab: "ห้องแล็บรับรอง",
        certificateNumber: "เลขที่ใบรับรอง",
        certificateIssueDate: "วันที่ออกใบรับรอง",
        certificateStatus: "สถานะ",
        naturalSynthetic: "ธรรมชาติ / สังเคราะห์",
        geographicOrigin: "แหล่งกำเนิดทางภูมิศาสตร์",
        treatmentDisclosure: "การเปิดเผยการปรับปรุง",
        colourDescription: "คำอธิบายสี",
        natural: "ธรรมชาติ",
        verifiedReport: "มีรายงานให้ตรวจสอบ",
        verifyCertificate: "ตรวจสอบใบรับรอง",
        reportIntro: "รายละเอียดรายงานมีไว้ให้ลูกค้าตรวจสอบกับห้องแล็บผู้ออกใบรับรอง",
        primaryView: "ภาพหลัก",
        macroView: "ภาพมาโคร",
        collectionContext: "ภาพในคอลเลกชัน",
        studioComparison: "ภาพเปรียบเทียบในสตูดิโอ",
        productInfo: "ข้อมูลสินค้า",
        imageViews: "มุมมองภาพสินค้า",
        similarTitle: "คุณอาจชอบ",
        similarLead: "",
        reviewsTitle: "รีวิวจากลูกค้า",
        reviewsLead: "บันทึกจากลูกค้าเกี่ยวกับบริการ การนำเสนอ และคุณภาพอัญมณี",
        leaveReviewTitle: "เขียนรีวิว",
        rateService: "คุณให้คะแนนบริการของเราอย่างไร?",
        rateProduct: "คุณให้คะแนนอัญมณีเม็ดนี้อย่างไร?",
        reviewNotes: "หมายเหตุเพิ่มเติม",
        reviewNotesPlaceholder: "เล่าประสบการณ์เกี่ยวกับบริการ เอกสาร การชม หรือคุณภาพอัญมณี",
        submitReview: "ส่งรีวิว",
        reviewThanks: "ขอบคุณ เราได้รับรีวิวของคุณแล้วและจะตรวจสอบก่อนเผยแพร่",
        olderReviews: "รีวิวจากลูกค้า",
        olderReviewsNote: "รีวิวจากการซื้ออัญมณีที่คล้ายกัน",
        noSaved: "ยังไม่มีอัญมณีที่บันทึกไว้",
        exploreCollection: "ชมคอลเลกชัน",
        save: "บันทึก",
      },
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
      customisationSteps: [["จับคู่อัญมณี", "เปรียบเทียบสี รูปทรง กะรัต และใบรับรองสำหรับรายการคัดเลือกที่ประณีต"], ["วางแผนจิวเวลรี", "พิจารณาทิศทางตัวเรือน สัดส่วน และความเหมาะสมระยะยาวกับอัญมณีที่เลือก"], ["นำเสนอส่วนตัว", "จัดเตรียมการนำเสนอพร้อมบันทึกเอกสารสำหรับนักสะสมหรือช่างจิวเวลรี"]],
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
      colour: "สีที่ต้องการ",
      cut: "ทรงเจียระไนที่ต้องการ",
      size: "ขนาดที่ต้องการ",
      weight: "น้ำหนักที่ต้องการ",
      additional: "รายละเอียดเพิ่มเติม",
      additionalPlaceholder: "แจ้งแหล่งกำเนิด ใบรับรอง แผนจิวเวลรี หรือช่วงเวลาที่ต้องการ",
      colourOptions: ["รอยัลบลู", "คอร์นฟลาวเวอร์บลู", "ชมพู", "เหลือง", "เขียว", "ทีล", "ม่วง", "ส้ม", "แดงทับทิม", "เขียวมรกต", "เปิดรับคำแนะนำ"],
      cutOptions: ["คุชชั่น", "โอวัล", "เอเมอรัลด์", "กลม", "หยดน้ำ", "เรเดียนท์", "แอสเชอร์", "เปิดรับคำแนะนำ"],
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
      newsletter: "ข่าวล่าสุดจาก Diverse Gems",
      newsletterLead: "รับข่าวอัญมณีใหม่ ช่วงเวลาจัดหา และการนัดชมแบบส่วนตัว",
      newsletterPlaceholder: "อีเมล",
      newsletterButton: "สมัคร",
      newsletterSuccess: "ขอบคุณ เราจะส่งเฉพาะข่าวที่คัดสรรแล้วเท่านั้น",
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
  "Royal Blue Sapphire": "assets/stone-royal-blue-cushion-sapphire.jpg",
  "Cornflower Sapphire": "assets/stone-cornflower-oval-sapphire.jpg",
  "Padparadscha Sapphire": "assets/stone-padparadscha-sapphire.jpg",
  "Velvet Blue Sapphire": "assets/stone-velvet-blue-emerald-cut.jpg",
  "Pink Sapphire": "assets/stone-pink-sapphire.jpg",
  "Yellow Sapphire": "assets/stone-yellow-sapphire.jpg",
  "Green Sapphire": "assets/stone-green-sapphire.jpg",
  "Teal Sapphire": "assets/stone-teal-sapphire.jpg",
  "Violet Sapphire": "assets/stone-violet-sapphire.jpg",
  "Orange Sapphire": "assets/stone-orange-sapphire.jpg",
  "Pigeon Blood Ruby": "assets/gem-rubies.jpg",
  "Classic Ruby": "assets/stone-classic-cushion-ruby.jpg",
  "Madagascar Emerald": "assets/gem-emeralds.jpg",
  "Sri Lankan Emerald": "assets/stone-zambian-octagon-emerald.jpg",
  "Cobalt Blue Spinel": "assets/gem-spinels.jpg",
  "Madagascar Pink Spinel": "assets/stone-mahenge-pink-spinel.jpg",
  "Alexandrite": "assets/gem-alexandrites.jpg",
  "Collector Alexandrite": "assets/stone-collector-cushion-alexandrite.jpg",
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
    groups: [
      { labelKey: "collectionEyebrow", start: 0, end: 6 },
      { labelKey: "featured", start: 6, end: 7 },
    ],
  },
  heritage: {
    eyebrow: "About Us",
    title: "From Ratnapura tradition to rare stones selected with care.",
    image: "assets/heritage-artisan.jpg",
    alt: "Gemstone artisan inspecting a sapphire",
    links: [
      ["Sri Lankan Heritage", "#/heritage"],
      ["Ceylon Sapphire Story", "#/sapphires"],
      ["Madagascar Sourcing", "#/custom-sourcing"],
      ["Treatment Disclosure", "#/about"],
    ],
    groups: [{ labelKey: "heritageEyebrow", start: 0, end: 4 }],
  },
  services: {
    eyebrow: "Services",
    title: "Private gemstone services for collectors and jewellers.",
    image: "assets/private-viewing.jpg",
    alt: "Private gemstone consultation",
    links: [
      ["Custom Sourcing", "#/custom-sourcing"],
      ["Customisation", "#/customisation"],
    ],
    groups: [{ labelKey: "servicesEyebrow", start: 0, end: 2 }],
  },
  private: {
    eyebrow: "Private Viewing",
    title: "Arrange a discreet appointment or speak with our team.",
    image: "assets/private-viewing.jpg",
    alt: "Private gemstone viewing salon",
    links: [
      ["Book a Private Viewing", "#/private-viewing"],
      ["Contact", "#/contact"],
    ],
    groups: [{ labelKey: "privateEyebrow", start: 0, end: 2 }],
  },
};

const exhibitionImages = {
  bangkok: images.collection,
  hongKong: "assets/gem-sapphires.jpg",
  sriLanka: "assets/private-viewing.jpg",
  singapore: "assets/collection-gems.jpg",
  geneva: "assets/heritage-artisan.jpg",
};

const exhibitions = [
  {
    slug: "bangkok-gems-2026",
    status: "upcoming",
    name: "Bangkok Gems & Jewelry Fair",
    location: "Bangkok, Thailand",
    dates: "September 9-13, 2026",
    year: "2026",
    booth: "Sri Lanka Pavilion, booth to be confirmed",
    image: exhibitionImages.bangkok,
    gallery: [exhibitionImages.bangkok, "assets/gem-sapphires.jpg", "assets/stone-teal-sapphire.jpg", images.private],
    short: "A private presentation of Ceylon sapphires, fancy sapphires and selected collector stones for regional buyers and jewellery houses.",
    overview: "Diverse Gems will present a focused selection of documented natural gemstones with private appointments available during the fair.",
    detail: "The Bangkok showcase is designed for collectors, designers and trade clients seeking refined Sri Lankan sapphire supply, calibrated fancy colours and discreet sourcing support.",
    highlights: ["Private buyer appointments", "Ceylon sapphire suite presentations", "Fancy sapphire and spinel shortlist reviews"],
    gemstones: ["Royal blue sapphires", "Padparadscha sapphires", "Teal sapphires", "Natural spinels"],
    achievement: "Upcoming showcase focused on relationship-led sourcing and private collection building.",
  },
  {
    slug: "hong-kong-jewellery-2026",
    status: "upcoming",
    name: "Jewellery & Gem WORLD Hong Kong",
    location: "Hong Kong",
    dates: "September 17-21, 2026",
    year: "2026",
    booth: "By appointment",
    image: exhibitionImages.hongKong,
    gallery: [exhibitionImages.hongKong, "assets/stone-royal-blue-cushion-sapphire.jpg", "assets/stone-yellow-sapphire.jpg", images.collection],
    short: "A curated appointment calendar for international clients reviewing high-value sapphires and rare coloured stones.",
    overview: "The Hong Kong presentation centres on private collection previews, certification review and quiet trade introductions.",
    detail: "Clients can request focused appointments for specific colour, carat, origin and documentation preferences ahead of the exhibition week.",
    highlights: ["International private viewings", "Certification-led stone reviews", "Collector sapphire sourcing briefs"],
    gemstones: ["Cornflower sapphires", "Royal blue sapphires", "Yellow sapphires", "Alexandrites"],
    achievement: "Upcoming appointment-led presentation for serious international buyers.",
  },
  {
    slug: "facets-sri-lanka-2025",
    status: "past",
    name: "FACETS Sri Lanka",
    location: "Colombo, Sri Lanka",
    dates: "January 4-7, 2025",
    year: "2025",
    booth: "Private viewing suite",
    image: exhibitionImages.sriLanka,
    gallery: [exhibitionImages.sriLanka, images.hero, "assets/stone-royal-blue-cushion-sapphire.jpg", "assets/stone-padparadscha-sapphire.jpg"],
    short: "An intimate Colombo showcase of Ceylon sapphires and rare natural gemstones for local and visiting clients.",
    overview: "Diverse Gems presented a refined Sri Lankan collection in a private consultation setting.",
    detail: "The exhibition focused on gemstone education, treatment disclosure and careful comparison of colour, clarity and cutting across blue and fancy sapphire selections.",
    highlights: ["Private gemstone viewings in Colombo", "Treatment and certification discussions", "Collector sapphire shortlist building"],
    gemstones: ["Royal blue sapphire", "Cornflower sapphire", "Padparadscha sapphire", "Cat's eye chrysoberyl"],
    achievement: "Memorable client consultations around Sri Lankan origin and long-term collector suitability.",
  },
  {
    slug: "singapore-gem-preview-2024",
    status: "past",
    name: "Singapore Private Gem Preview",
    location: "Singapore",
    dates: "October 18-20, 2024",
    year: "2024",
    booth: "Invitation-only salon",
    image: exhibitionImages.singapore,
    gallery: [exhibitionImages.singapore, "assets/gem-rubies.jpg", "assets/gem-emeralds.jpg", "assets/gem-spinels.jpg"],
    short: "A private salon event for jewellery designers, collectors and sourcing partners across Southeast Asia.",
    overview: "The Singapore preview introduced selected coloured stones to a small group of established jewellery clients.",
    detail: "The presentation balanced important sapphires with rubies, emeralds and spinels, allowing clients to compare colour families and discuss bespoke jewellery suitability.",
    highlights: ["Designer-focused stone appointments", "Comparative colour presentations", "Bespoke jewellery sourcing conversations"],
    gemstones: ["Rubies", "Emeralds", "Cobalt spinels", "Teal sapphires"],
    achievement: "Strengthened private sourcing relationships with regional jewellery studios.",
  },
  {
    slug: "geneva-collector-showcase-2023",
    status: "past",
    name: "Geneva Collector Showcase",
    location: "Geneva, Switzerland",
    dates: "May 11-13, 2023",
    year: "2023",
    booth: "Private appointment room",
    image: exhibitionImages.geneva,
    gallery: [exhibitionImages.geneva, "assets/stone-collector-cushion-alexandrite.jpg", "assets/stone-paraiba-tourmaline.jpg", "assets/gem-other-precious-gemstones.jpg"],
    short: "A collector-focused presentation of rare stones, colour-change gems and important certified sapphires.",
    overview: "The Geneva showcase centred on quiet, appointment-only meetings for collectors reviewing rare gemstone opportunities.",
    detail: "Sessions explored rarity, provenance, certification and long-term collection value, with particular attention to colour-change and exceptional blue stones.",
    highlights: ["Collector appointments", "Rare gemstone education", "Long-term acquisition planning"],
    gemstones: ["Alexandrites", "Paraiba tourmaline", "Royal blue sapphires", "Rare chrysoberyl"],
    achievement: "A refined archive presentation that reinforced the company's discreet international client service.",
  },
];

const collections = {
  sapphires: {
    title: "Sri Lankan Sapphires",
    intro:
      "Ceylon sapphires selected for saturation, crystal, provenance and enduring collector appeal.",
    stones: [
      ["Royal Blue Sapphire", "Sri Lanka", "5.42 ct", "Cushion", "10.1 x 8.8 x 5.3 mm", "Royal blue", "Eye clean", "Heated", "GIA", 18400, "Available"],
      ["Cornflower Sapphire", "Ratnapura, Sri Lanka", "3.18 ct", "Oval", "9.2 x 7.4 x 4.6 mm", "Cornflower blue", "Very slightly included", "No indication of heat", "GRS", 14200, "By enquiry"],
      ["Padparadscha Sapphire", "Sri Lanka", "2.06 ct", "Cushion", "8.0 x 6.5 x 3.9 mm", "Pinkish orange", "Eye clean", "Heated", "Lotus", 22800, "Reserved"],
      ["Velvet Blue Sapphire", "Elahera, Sri Lanka", "4.81 ct", "Emerald cut", "9.8 x 7.1 x 4.8 mm", "Velvet blue", "Eye clean", "No indication of heat", "SSEF", 19600, "Available"],
      ["Pink Sapphire", "Sri Lanka", "2.44 ct", "Oval", "8.6 x 6.7 x 4.2 mm", "Vivid pink", "Eye clean", "Heated", "Lotus", 11800, "Available"],
      ["Yellow Sapphire", "Sri Lanka", "3.72 ct", "Cushion", "8.9 x 8.1 x 5.0 mm", "Golden yellow", "Slightly included", "Heated", "GIA", 9200, "Available"],
      ["Green Sapphire", "Madagascar", "2.96 ct", "Oval", "8.8 x 7.0 x 4.5 mm", "Forest green", "Eye clean", "No indication of heat", "GRS", 10900, "By enquiry"],
      ["Teal Sapphire", "Sri Lanka", "2.58 ct", "Pear", "9.4 x 6.6 x 4.3 mm", "Blue-green teal", "Very slightly included", "No indication of heat", "SSEF", 12600, "Available"],
      ["Violet Sapphire", "Sri Lanka", "1.84 ct", "Round", "7.1 x 7.1 x 4.1 mm", "Violet purple", "Eye clean", "Heated", "GIA", 7800, "Available"],
      ["Orange Sapphire", "Madagascar", "2.21 ct", "Oval", "8.2 x 6.4 x 4.0 mm", "Mandarin orange", "Slightly included", "Heated", "Lotus", 8400, "By enquiry"],
    ],
  },
  rubies: {
    title: "Rubies",
    intro:
      "Fine rubies with rich red colour, balanced cutting and documentation for discerning jewellery houses.",
    stones: [
      ["Pigeon Blood Ruby", "Madagascar", "2.74 ct", "Oval", "8.4 x 6.7 x 4.1 mm", "Vivid red", "Eye clean", "Heated", "Gubelin", 16500, "Available"],
      ["Classic Ruby", "Madagascar", "1.92 ct", "Cushion", "7.1 x 6.4 x 3.8 mm", "Deep red", "Slightly included", "No indication of heat", "GRS", 9800, "By enquiry"],
    ],
  },
  emeralds: {
    title: "Emeralds",
    intro:
      "Elegant emeralds chosen for life, garden, tone and suitability for important bespoke pieces.",
    stones: [
      ["Madagascar Emerald", "Madagascar", "3.62 ct", "Emerald cut", "9.7 x 7.2 x 5.0 mm", "Vivid green", "Moderately included", "Minor oil", "SSEF", 12800, "Available"],
      ["Sri Lankan Emerald", "Sri Lanka", "4.24 ct", "Octagon", "10.2 x 8.1 x 5.2 mm", "Bluish green", "Slightly included", "Insignificant oil", "GIA", 15400, "By enquiry"],
    ],
  },
  spinels: {
    title: "Spinels",
    intro:
      "Collector spinels in refined reds, greys, violets and cobalt blues with crisp brilliance.",
    stones: [
      ["Cobalt Blue Spinel", "Sri Lanka", "1.64 ct", "Cushion", "7.2 x 5.8 x 3.7 mm", "Cobalt blue", "Eye clean", "No treatment", "Lotus", 7200, "Available"],
      ["Madagascar Pink Spinel", "Madagascar", "3.33 ct", "Cushion", "8.8 x 7.3 x 4.9 mm", "Vivid pink", "Eye clean", "No treatment", "GRS", 6800, "Available"],
    ],
  },
  alexandrites: {
    title: "Alexandrites",
    intro:
      "Rare colour-change chrysoberyl sourced for strength of phenomenon, clarity and collector value.",
    stones: [
      ["Alexandrite", "Sri Lanka", "1.47 ct", "Oval", "7.4 x 6.1 x 3.9 mm", "Green to purplish red", "Very slightly included", "No treatment", "GIA", 12400, "By enquiry"],
      ["Collector Alexandrite", "Madagascar", "2.12 ct", "Cushion", "7.8 x 6.9 x 4.2 mm", "Teal to raspberry", "Eye clean", "No treatment", "SSEF", 17100, "Available"],
    ],
  },
  "other-precious-gemstones": {
    title: "Other Precious Gemstones",
    intro:
      "Rare collector stones sourced on request, from chrysoberyl and garnet to exceptional tourmaline and zircon.",
    stones: [
      ["Cat's Eye Chrysoberyl", "Sri Lanka", "5.88 ct", "Cabochon", "9.9 x 8.2 x 6.1 mm", "Honey green", "Translucent", "No treatment", "GIA", 5900, "Available"],
      ["Paraiba Tourmaline", "Madagascar", "1.21 ct", "Oval", "7.0 x 5.5 x 3.4 mm", "Neon blue-green", "Slightly included", "Heated", "Gubelin", 14300, "By enquiry"],
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

const reviewClients = [
  ["Amara W.", "Private Collector", "The stone arrived exactly as presented, with careful guidance on treatment and documentation. The service felt considered from first enquiry to final handover.", 5],
  ["Nalin P.", "Bespoke Jeweller", "Diverse Gems understood the colour brief quickly and supplied a stone with excellent life. Communication was discreet, precise and very professional.", 5],
  ["Mei L.", "Collector Client", "I appreciated the certificate explanation and the way the team helped compare colour and clarity without pressure. The gemstone quality was exceptional.", 5],
  ["Arun S.", "Private Buyer", "The viewing was calm and beautifully prepared. Every question about origin, cutting and long-term suitability was answered with confidence.", 5],
  ["Sophia R.", "Fine Jewellery Client", "A rare buying experience where the presentation matched the stone. The follow-up, packaging and documentation were all handled with real care.", 5],
  ["Kavindi J.", "Collector Client", "The team made a significant purchase feel clear and comfortable. The gem had the colour depth promised in the images and looked even better in person.", 5],
];

function getStoneReviewSet(stone, collectionSlug) {
  const [name, origin, weight, shape, , color, clarity, treatment, certification] = stone;
  const seed = Math.abs([...getStoneId(stone, collectionSlug)].reduce((total, char) => total + char.charCodeAt(0), 0));
  const first = reviewClients[seed % reviewClients.length];
  const second = reviewClients[(seed + 2) % reviewClients.length];
  const third = reviewClients[(seed + 4) % reviewClients.length];
  return [
    {
      client: first[0],
      role: first[1],
      rating: first[3],
      stone: name,
      quote: first[2],
    },
    {
      client: second[0],
      role: second[1],
      rating: second[3],
      stone: name,
      quote: `The ${color.toLowerCase()} colour and ${shape.toLowerCase()} cutting were represented honestly. The ${certification} paperwork and ${treatment.toLowerCase()} disclosure made the decision much easier.`,
    },
    {
      client: third[0],
      role: third[1],
      rating: third[3],
      stone: name,
      quote: `A beautiful ${weight} stone with the presence we wanted. The team explained the ${clarity.toLowerCase()} clarity and ${origin} sourcing with patience and care.`,
    },
  ];
}

function getFeaturedReviews() {
  return Object.entries(collections)
    .flatMap(([slug, collection]) =>
      collection.stones.slice(0, 2).flatMap((stone) =>
        getStoneReviewSet(stone, slug).slice(0, 1).map((review) => ({
          ...review,
          path: getStonePath(stone, slug),
        }))
      )
    )
    .slice(0, 5);
}

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
    createTitle: "Create Your Account",
    createLead: "Register for private shortlist access, saved stones and enquiry history.",
    firstName: "First name",
    lastName: "Last name",
    phone: "Phone number",
    confirmPassword: "Confirm password",
    createButton: "Create Account",
    backToSignIn: "Already have an account?",
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
    createTitle: "创建您的账户",
    createLead: "注册以访问私人候选清单、收藏宝石和咨询记录。",
    firstName: "名",
    lastName: "姓",
    phone: "电话号码",
    confirmPassword: "确认密码",
    createButton: "创建账户",
    backToSignIn: "已有账户？",
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
    createTitle: "สร้างบัญชีของคุณ",
    createLead: "ลงทะเบียนเพื่อเข้าถึงรายการส่วนตัว อัญมณีที่บันทึกไว้ และประวัติการสอบถาม",
    firstName: "ชื่อ",
    lastName: "นามสกุล",
    phone: "หมายเลขโทรศัพท์",
    confirmPassword: "ยืนยันรหัสผ่าน",
    createButton: "สร้างบัญชี",
    backToSignIn: "มีบัญชีอยู่แล้ว?",
  },
};

const viewingGateCopy = {
  en: {
    close: "Close",
    eyebrow: "Private appointment",
    title: "Sign in to request a private viewing.",
    lead: "Private gemstone viewings are arranged through a client account. Do you already have an account?",
    signIn: "Sign In",
    signUp: "Sign Up",
  },
  zh: {
    close: "关闭",
    eyebrow: "私人预约",
    title: "请登录后申请私人鉴赏。",
    lead: "私人宝石鉴赏需通过客户账户安排。您已经有账户了吗？",
    signIn: "登录",
    signUp: "注册",
  },
  th: {
    close: "ปิด",
    eyebrow: "นัดหมายส่วนตัว",
    title: "กรุณาเข้าสู่ระบบเพื่อขอชมแบบส่วนตัว",
    lead: "การชมอัญมณีแบบส่วนตัวจะจัดผ่านบัญชีลูกค้า คุณมีบัญชีอยู่แล้วหรือไม่?",
    signIn: "เข้าสู่ระบบ",
    signUp: "สมัครสมาชิก",
  },
};

const eventsUiCopy = {
  en: {
    upcoming: "Upcoming",
    upcomingEyebrow: "Upcoming exhibitions",
    upcomingTitle: "Upcoming showcases",
    archiveEyebrow: "Archive",
    archiveTitle: "Past exhibitions",
    location: "Location",
    dates: "Dates",
    booth: "Booth",
    overview: "Event overview",
    notesTitle: "Exhibition notes",
    highlights: "Highlights",
    gemstones: "Notable gemstones",
  },
  zh: {
    upcoming: "即将举行",
    upcomingEyebrow: "即将举行的展会",
    upcomingTitle: "未来展示",
    archiveEyebrow: "档案",
    archiveTitle: "过往展会",
    location: "地点",
    dates: "日期",
    booth: "展位",
    overview: "活动概览",
    notesTitle: "展会记录",
    highlights: "亮点",
    gemstones: "重点宝石",
  },
  th: {
    upcoming: "กำลังจะมาถึง",
    upcomingEyebrow: "งานแสดงที่กำลังจะมาถึง",
    upcomingTitle: "งานแสดงถัดไป",
    archiveEyebrow: "คลังงาน",
    archiveTitle: "งานแสดงที่ผ่านมา",
    location: "สถานที่",
    dates: "วันที่",
    booth: "บูธ",
    overview: "ภาพรวมงาน",
    notesTitle: "บันทึกงานแสดง",
    highlights: "ไฮไลต์",
    gemstones: "อัญมณีเด่น",
  },
};

const routes = {
  "/": renderHome,
  "/collection": renderCollectionIndex,
  "/new-arrivals": renderNewArrivals,
  "/events-exhibitions": renderEventsPage,
  "/custom-sourcing": renderCustomSourcing,
  "/customisation": renderCustomisation,
  "/heritage": renderHeritage,
  "/about": renderAbout,
  "/private-viewing": renderPrivateViewing,
  "/contact": renderContact,
  "/login": renderLogin,
  "/register": renderRegister,
  "/saved": renderSaved,
};

Object.keys(collections).forEach((slug) => {
  routes[`/${slug}`] = () => renderCollectionPage(slug);
});

function getCopy() {
  return translations[selectedLanguage] || translations.en;
}

function getEventsCopy() {
  return eventsUiCopy[selectedLanguage] || eventsUiCopy.en;
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

function getStoneImage(stone, slug) {
  return stoneImages[stone[0]] || collectionImages[slug] || images.collection;
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function getStonePath(stone, collectionSlug) {
  return `#/stone/${collectionSlug}/${slugify(stone[0])}`;
}

function findStoneByPath(path) {
  const [, collectionSlug, stoneSlug] = path.match(/^\/stone\/([^/]+)\/([^/]+)$/) || [];
  const collection = collections[collectionSlug];
  if (!collection) return null;
  const index = collection.stones.findIndex((stone) => slugify(stone[0]) === stoneSlug);
  if (index < 0) return null;
  const stone = collection.stones[index];
  return {
    collection,
    collectionSlug,
    index,
    stone,
    image: getStoneImage(stone, collectionSlug),
  };
}

function findExhibitionByPath(path) {
  const [, eventSlug] = path.match(/^\/events-exhibitions\/([^/]+)$/) || [];
  if (!eventSlug) return null;
  return exhibitions.find((event) => event.slug === eventSlug) || null;
}

function getPageLabel(path) {
  const copy = getCopy();
  const labels = {
    "/collection": copy.nav[1],
    "/new-arrivals": copy.pages.newArrivals[0],
    "/events-exhibitions": copy.nav[4],
    "/custom-sourcing": copy.pages.customSourcing[0],
    "/customisation": copy.pages.customisation[0],
    "/heritage": copy.mega.heritageLinks[0],
    "/about": copy.nav[5],
    "/private-viewing": copy.nav[3],
    "/contact": copy.pages.contact[0],
    "/login": copy.loginLabel,
    "/register": (accountCopy[selectedLanguage] || accountCopy.en).registerButton,
    "/saved": copy.savedLabel,
  };
  if (labels[path]) return labels[path];
  const slug = path.replace("/", "");
  return getCopy().collectionTitles[slug]?.[0] || collections[slug]?.title || "Diverse Gems";
}

function renderBreadcrumb(path, stoneMatch = null, eventMatch = null) {
  if (path === "/") return "";
  const items = [{ label: getCopy().nav[0], href: "#/" }];
  if (stoneMatch) {
    const collectionTitle = getCopy().collectionTitles[stoneMatch.collectionSlug]?.[0] || stoneMatch.collection.title;
    items.push({ label: getCopy().nav[1], href: "#/collection" });
    items.push({ label: collectionTitle, href: `#/${stoneMatch.collectionSlug}` });
    items.push({ label: stoneMatch.stone[5], href: `#/${stoneMatch.collectionSlug}` });
    items.push({ label: stoneMatch.stone[0] });
  } else if (eventMatch) {
    items.push({ label: getCopy().nav[4], href: "#/events-exhibitions" });
    items.push({ label: eventMatch.name });
  } else if (collections[path.slice(1)]) {
    items.push({ label: getCopy().nav[1], href: "#/collection" });
    items.push({ label: getPageLabel(path) });
  } else {
    items.push({ label: getPageLabel(path) });
  }
  return `
    <nav class="breadcrumb" aria-label="Breadcrumb">
      ${items
        .map((item, index) =>
          item.href && index < items.length - 1 ? `<a href="${item.href}">${item.label}</a>` : `<span aria-current="page">${item.label}</span>`
        )
        .join("<span>/</span>")}
    </nav>
  `;
}

function getStoneId(stone, collectionSlug) {
  return `${collectionSlug}:${slugify(stone[0])}`;
}

function isSavedStone(stone, collectionSlug) {
  return savedWishlist.includes(getStoneId(stone, collectionSlug));
}

function saveWishlist() {
  localStorage.setItem("dgWishlist", JSON.stringify(savedWishlist));
}

function getCertificationDetails(stone) {
  const [name, origin, weight, shape, dimensions, color, clarity, treatment, certification] = stone;
  const product = getCopy().common.product;
  const lab = certification === "Gubelin" ? "Gübelin" : certification;
  const labUrls = {
    GIA: "https://www.gia.edu/report-check-landing",
    GRS: "https://www.gemresearch.ch/",
    Lotus: "https://www.lotusgemology.com/",
    SSEF: "https://www.ssef.ch/",
    Gubelin: "https://www.gubelingemlab.com/",
    "Gübelin": "https://www.gubelingemlab.com/",
  };
  const certificateNumber = `${certification.toUpperCase().replace(/[^A-Z]/g, "")}-${String(Math.round(getCarat(weight) * 1000)).padStart(4, "0")}-${slugify(name).slice(0, 4).toUpperCase()}`;
  return {
    lab,
    certificateNumber,
    issueDate: "January 15, 2026",
    status: product.verifiedReport,
    verifyUrl: labUrls[certification] || labUrls[lab] || "https://www.gia.edu/report-check-landing",
    rows: [
      [product.certificationLab, lab],
      [product.certificateNumber, certificateNumber],
      [product.certificateIssueDate, "January 15, 2026"],
      [product.certificateStatus, product.verifiedReport],
      [product.naturalSynthetic, product.natural],
      [product.geographicOrigin, origin],
      [product.treatmentDisclosure, treatment],
      [product.colourDescription, color],
    ],
  };
}

function getStoneGallery(match) {
  const product = getCopy().common.product;
  return [
    { src: match.image, label: product.primaryView, view: "front" },
    { src: match.image, label: product.macroView, view: "macro" },
    { src: match.image, label: "Side angle", view: "side" },
    { src: match.image, label: "Lower angle", view: "bottom" },
    { src: collectionImages[match.collectionSlug] || match.image, label: product.collectionContext, view: "collection" },
    { src: images.collection, label: product.studioComparison, view: "wide" },
  ];
}

function getSimilarStones(match) {
  const current = match.stone;
  const currentCarat = getCarat(current[2]);
  return Object.entries(collections)
    .flatMap(([slug, collection]) =>
      collection.stones
        .filter((stone) => !(slug === match.collectionSlug && stone[0] === current[0]))
        .map((stone, index) => {
          const score =
            (slug === match.collectionSlug ? 4 : 0) +
            (stone[3] === current[3] ? 3 : 0) +
            (stone[5].toLowerCase().split(/\s|-/).some((word) => current[5].toLowerCase().includes(word)) ? 2 : 0) +
            (Math.abs(getCarat(stone[2]) - currentCarat) <= 1 ? 1 : 0);
          return { slug, stone, index, score };
        })
    )
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, 4);
}

function getCarat(weight) {
  return Number.parseFloat(String(weight).replace(/[^\d.]/g, "")) || 0;
}

function normaliseFilterValue(value) {
  return String(value || "").toLowerCase();
}

function getUniqueValues(stones, index) {
  return [...new Set(stones.map((stone) => stone[index]).filter(Boolean))].sort((a, b) => a.localeCompare(b));
}

function optionList(values, label) {
  return [`<option value="">${label}</option>`, ...values.map((value) => `<option value="${value}">${value}</option>`)].join("");
}

function renderCollectionToolbar(collection, slug) {
  const filters = getCopy().common.filters;
  const prices = collection.stones.map((stone) => stone[9]);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  return `
    <div class="collection-tools reveal" data-collection-tools>
      <div class="filter-header">
        <button class="filter-toggle" type="button" data-filter-toggle aria-expanded="false">${filters.filters}</button>
        <label class="sort-control">
          <span>${filters.sort}</span>
          <select data-sort>
            <option value="featured">${filters.featured}</option>
            <option value="newest">${filters.newest}</option>
            <option value="price-asc">${filters.priceAsc}</option>
            <option value="price-desc">${filters.priceDesc}</option>
            <option value="carat-desc">${filters.caratDesc}</option>
            <option value="carat-asc">${filters.caratAsc}</option>
          </select>
        </label>
      </div>
      <div class="filter-panel is-collapsed" data-filter-panel>
        <label><span>${getCopy().common.specs[0]}</span><select data-filter="origin">${optionList(getUniqueValues(collection.stones, 1), filters.allOrigins)}</select></label>
        <label><span>${getCopy().common.specs[5]}</span><select data-filter="clarity">${optionList(getUniqueValues(collection.stones, 6), filters.allClarity)}</select></label>
        <label><span>${getCopy().common.specs[2]}</span><select data-filter="shape">${optionList(getUniqueValues(collection.stones, 3), filters.allShapes)}</select></label>
        <label><span>${getCopy().common.specs[4]}</span><select data-filter="color">${optionList(getUniqueValues(collection.stones, 5), filters.allColours)}</select></label>
        <label><span>${filters.minPrice}</span><input data-filter="minPrice" type="number" min="${minPrice}" max="${maxPrice}" step="100" placeholder="${minPrice}" /></label>
        <label><span>${filters.maxPrice}</span><input data-filter="maxPrice" type="number" min="${minPrice}" max="${maxPrice}" step="100" placeholder="${maxPrice}" /></label>
        <button class="filter-reset" type="button" data-filter-reset>${filters.reset}</button>
      </div>
      <p class="filter-count" data-filter-count>${collection.stones.length} ${collection.stones.length === 1 ? filters.stoneShown : filters.stonesShown}</p>
    </div>
  `;
}

function renderStars(rating = 5) {
  return `<span aria-label="${rating} out of 5 stars">${"★".repeat(rating)}${"☆".repeat(5 - rating)}</span>`;
}

function gemHeartIcon() {
  return `
    <svg class="gem-heart" viewBox="0 0 24 24" aria-hidden="true">
      <path class="gem-heart-outline" d="M12 20.5 4.7 13.4C2 10.7 2.2 6.4 5.3 4.8c2-1 4.2-.4 5.4 1.2L12 7.5l1.3-1.5c1.2-1.6 3.5-2.2 5.4-1.2 3.1 1.6 3.3 5.9.6 8.6L12 20.5Z"/>
      <path class="gem-heart-facet" d="M6.2 6.2 9.2 12 12 20.5 14.8 12l3-5.8M4.6 13.2h14.8M9.2 12h5.6M12 7.5v13"/>
    </svg>
  `;
}

function reviewCard(review, compact = false) {
  return `
    <article class="review-card reveal ${compact ? "is-compact" : ""}">
      <div class="review-stars">${renderStars(review.rating)}</div>
      <blockquote>${review.quote}</blockquote>
      <div class="review-client">
        <strong>${review.client}</strong>
        <span>${review.role}</span>
      </div>
      ${review.path ? `<a href="${review.path}">${review.stone}</a>` : `<span class="review-stone">${review.stone}</span>`}
    </article>
  `;
}

function renderHome() {
  const copy = getCopy();
  const home = copy.home;
  const featuredReviews = getFeaturedReviews();
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

    ${renderHomeEventsPreview()}

    <section class="section client-reviews-section home-final-reviews">
      <div class="section-header reveal">
        <div>
          <p class="eyebrow">${home.reviewsEyebrow}</p>
          <h2>${home.reviewsTitle}</h2>
        </div>
        ${home.reviewsLead ? `<p>${home.reviewsLead}</p>` : ""}
      </div>
      <div class="review-grid">
        ${featuredReviews.slice(0, 5).map((review) => reviewCard(review, true)).join("")}
      </div>
    </section>
  `;
}

function eventPath(event) {
  return `#/events-exhibitions/${event.slug}`;
}

function renderHomeEventsPreview() {
  const home = getCopy().home;
  const eventText = getEventsCopy();
  const sliderEvents = exhibitions.filter((event) => event.status === "past").slice(0, 4);
  const nextEvent = exhibitions.find((event) => event.status === "upcoming") || exhibitions[0];
  return `
    <section class="section events-preview-section">
      <div class="section-header reveal">
        <div>
          <p class="eyebrow">${home.eventsEyebrow}</p>
          <h2>${home.eventsTitle}</h2>
        </div>
      </div>
      <div class="events-preview-grid">
        <div class="event-slider reveal" data-event-slider>
          ${sliderEvents
            .map(
              (event, index) => `
                <article class="event-slide ${index === 0 ? "is-active" : ""}" data-event-slide>
                  <img src="${event.image}" alt="${event.name}" loading="${index === 0 ? "eager" : "lazy"}" />
                  <div class="event-slide-content">
                    <p class="eyebrow">${event.location} · ${event.year}</p>
                    <h3>${event.name}</h3>
                    <a class="btn secondary home-invert" href="${eventPath(event)}">${home.eventsReadMore}</a>
                  </div>
                </article>
              `
            )
            .join("")}
          <div class="event-slider-dots" aria-label="${home.eventsTitle}">
            ${sliderEvents
              .map((event, index) => `<button class="${index === 0 ? "is-active" : ""}" type="button" data-event-dot="${index}" aria-label="${event.name}"></button>`)
              .join("")}
          </div>
        </div>
        <div class="events-preview-copy reveal">
          <p>${home.eventsIntro}</p>
          <article class="next-event-card">
            <p class="eyebrow">${home.eventsNext}</p>
            <h3>${nextEvent.name}</h3>
            <dl class="event-facts">
              <div><dt>${eventText.location}</dt><dd>${nextEvent.location}</dd></div>
              <div><dt>${eventText.dates}</dt><dd>${nextEvent.dates}</dd></div>
              <div><dt>${eventText.booth}</dt><dd>${nextEvent.booth}</dd></div>
            </dl>
            <p>${nextEvent.short}</p>
            <div class="button-row">
              <a class="btn" href="${eventPath(nextEvent)}">${home.eventsLearnMore}</a>
              <a class="btn secondary" href="#/events-exhibitions">${home.eventsViewAll}</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  `;
}

function renderEventCard(event) {
  const home = getCopy().home;
  const eventText = getEventsCopy();
  return `
    <article class="event-card reveal">
      <a class="event-card-image" href="${eventPath(event)}">
        <img src="${event.image}" alt="${event.name}" loading="lazy" />
      </a>
      <div class="event-card-body">
        <p class="eyebrow">${event.status === "upcoming" ? eventText.upcoming : event.year}</p>
        <h3><a href="${eventPath(event)}">${event.name}</a></h3>
        <dl class="event-facts">
          <div><dt>${eventText.dates}</dt><dd>${event.dates}</dd></div>
          <div><dt>${eventText.location}</dt><dd>${event.location}</dd></div>
          <div><dt>${eventText.booth}</dt><dd>${event.booth}</dd></div>
        </dl>
        <p>${event.short}</p>
        <a class="btn secondary" href="${eventPath(event)}">${home.eventsLearnMore}</a>
      </div>
    </article>
  `;
}

function renderEventsPage() {
  const copy = getCopy();
  const eventText = getEventsCopy();
  const [eyebrow, title, lead] = copy.pages.events;
  const upcoming = exhibitions.filter((event) => event.status === "upcoming");
  const past = exhibitions.filter((event) => event.status === "past");
  return `
    ${pageShell({ eyebrow, title, lead })}
    <section class="section events-page-section">
      <div class="section-header reveal">
        <div>
          <p class="eyebrow">${eventText.upcomingEyebrow}</p>
          <h2>${eventText.upcomingTitle}</h2>
        </div>
      </div>
      <div class="event-card-grid">
        ${upcoming.map(renderEventCard).join("")}
      </div>
    </section>
    <section class="section events-page-section">
      <div class="section-header reveal">
        <div>
          <p class="eyebrow">${eventText.archiveEyebrow}</p>
          <h2>${eventText.archiveTitle}</h2>
        </div>
      </div>
      <div class="event-card-grid">
        ${past.map(renderEventCard).join("")}
      </div>
    </section>
  `;
}

function renderExhibitionDetail(event) {
  const eventText = getEventsCopy();
  return `
    <section class="event-detail-hero">
      <div class="event-detail-copy reveal">
        <p class="eyebrow">${event.location} · ${event.year}</p>
        <h1>${event.name}</h1>
        <p class="lead">${event.overview}</p>
        <dl class="event-facts">
          <div><dt>${eventText.dates}</dt><dd>${event.dates}</dd></div>
          <div><dt>${eventText.location}</dt><dd>${event.location}</dd></div>
          <div><dt>${eventText.booth}</dt><dd>${event.booth}</dd></div>
        </dl>
      </div>
      <div class="event-detail-media reveal">
        <img src="${event.image}" alt="${event.name}" loading="eager" />
      </div>
    </section>
    <section class="section event-detail-section">
      <div class="event-detail-gallery reveal">
        ${event.gallery.map((src, index) => `<img src="${src}" alt="${event.name} gallery image ${index + 1}" loading="lazy" />`).join("")}
      </div>
      <div class="event-detail-grid">
        <article class="text-stack reveal">
          <p class="eyebrow">${eventText.overview}</p>
          <h2>${eventText.notesTitle}</h2>
          <p>${event.detail}</p>
          <p>${event.achievement}</p>
        </article>
        <article class="event-list-block reveal">
          <h3>${eventText.highlights}</h3>
          <ul>${event.highlights.map((item) => `<li>${item}</li>`).join("")}</ul>
        </article>
        <article class="event-list-block reveal">
          <h3>${eventText.gemstones}</h3>
          <ul>${event.gemstones.map((item) => `<li>${item}</li>`).join("")}</ul>
        </article>
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
    <section class="section collection-listing-section">
      ${renderCollectionToolbar(collection, slug)}
      <div class="catalogue-grid" data-catalogue-grid>
        ${collection.stones.map((stone, index) => stoneTile([...stone, getStoneImage(stone, slug)], index, slug)).join("")}
      </div>
    </section>
  `;
}

function renderStoneDetail(match) {
  const copy = getCopy();
  const product = copy.common.product;
  const [name, origin, weight, shape, dimensions, color, clarity, treatment, certification, priceUsd, availability] = match.stone;
  const specs = copy.common.specs;
  const gallery = getStoneGallery(match);
  const cert = getCertificationDetails(match.stone);
  const saved = isSavedStone(match.stone, match.collectionSlug);
  const collectionTitle = copy.collectionTitles[match.collectionSlug]?.[0] || match.collection.title;
  const similarStones = getSimilarStones(match);
  const productReviews = getStoneReviewSet(match.stone, match.collectionSlug);
  const keySpecs = [
    [specs[1], weight],
    [specs[2], shape],
    [product.colourGrade, color],
    [specs[5], clarity],
    [specs[6], treatment],
    [specs[0], origin],
  ];
  const rows = [
    [product.gemstoneType, collectionTitle.replace(/^Sri Lankan /, "").replace(/s$/, "")],
    [specs[0], origin],
    [specs[1], weight],
    [specs[2], shape],
    [specs[3], dimensions],
    [product.colourGrade, color],
    [product.clarityGrade, clarity],
    [specs[6], treatment],
    [specs[7], certification],
    [product.availability, copy.common.status[availability] || availability],
    [product.chemicalFormula, match.collectionSlug === "emeralds" ? "Be3Al2(SiO3)6" : match.collectionSlug === "alexandrites" ? "BeAl2O4" : "Al2O3"],
    [product.mohsHardness, match.collectionSlug === "emeralds" ? "7.5 / 10" : "9 / 10"],
  ];
  return `
    <section class="stone-detail">
      <div class="product-gallery reveal" data-product-gallery>
        <div class="stone-detail-media">
          <img src="${gallery[0].src}" alt="${name}" loading="eager" data-gallery-main data-gallery-view="${gallery[0].view}" data-gallery-index="0" />
          <button class="gallery-arrow gallery-prev" type="button" data-gallery-prev aria-label="Previous image">‹</button>
          <button class="gallery-arrow gallery-next" type="button" data-gallery-next aria-label="Next image">›</button>
          <button class="gallery-zoom" type="button" data-gallery-zoom aria-pressed="false" aria-label="Zoom image">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="10.5" cy="10.5" r="6.5"></circle>
              <path d="M15.5 15.5 21 21"></path>
              <path d="M10.5 7.5v6"></path>
              <path d="M7.5 10.5h6"></path>
            </svg>
          </button>
        </div>
        <div class="gallery-thumbs" aria-label="${product.imageViews}">
          ${gallery
            .map(
              (item, index) => `
                <button class="${index === 0 ? "is-active" : ""}" type="button" data-gallery-thumb data-src="${item.src}" data-view="${item.view}" data-index="${index}" aria-label="${item.label}">
                  <img src="${item.src}" alt="" loading="lazy" />
                </button>
              `
            )
            .join("")}
        </div>
      </div>
      <div class="stone-detail-copy reveal">
        <p class="eyebrow">${collectionTitle}</p>
        <h1>${name}</h1>
        <p class="stone-detail-price">${formatPrice(priceUsd)}</p>
        <button class="wishlist-button product-wishlist ${saved ? "is-saved" : ""}" type="button" data-wishlist data-stone-id="${getStoneId(match.stone, match.collectionSlug)}" aria-pressed="${saved}" aria-label="${product.save} ${name}">
          ${gemHeartIcon()}
        </button>
        <div class="key-spec-grid">
          ${keySpecs.map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join("")}
        </div>
        <div class="button-row">
          <a class="btn" href="#/contact">${copy.common.enquire}</a>
          <a class="btn secondary" href="#/private-viewing">${product.bookPrivateViewing}</a>
        </div>
        <a class="back-link" href="#/${match.collectionSlug}">${product.backTo} ${collectionTitle}</a>
      </div>
    </section>
    <section class="section product-tabs-section">
      <div class="product-tabs reveal" data-product-tabs>
        <div class="tab-list" role="tablist" aria-label="${product.productInfo}">
          <button class="is-active" type="button" role="tab" aria-selected="true" data-tab-target="specifications">${product.specifications}</button>
          <button type="button" role="tab" aria-selected="false" data-tab-target="certification">${product.certification}</button>
        </div>
        <div class="tab-panel is-active" data-tab-panel="specifications" role="tabpanel">
          <div class="spec-table">
            ${rows.map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join("")}
          </div>
        </div>
        <div class="tab-panel" data-tab-panel="certification" role="tabpanel" hidden>
          <div class="certification-card">
            <div class="certification-intro">
              <div class="cert-icon" aria-hidden="true">${cert.lab.slice(0, 3).toUpperCase()}</div>
              <div>
                <h2>${cert.lab} ${product.certification}</h2>
                <p>${cert.lab} ${product.reportIntro}</p>
              </div>
            </div>
            <div class="spec-table">
              ${cert.rows.map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join("")}
            </div>
            <a class="btn secondary verify-btn" href="${cert.verifyUrl}" target="_blank" rel="noreferrer">${product.verifyCertificate}</a>
          </div>
        </div>
      </div>
    </section>
    <section class="section similar-section">
      <div class="section-header reveal">
        <div>
          <p class="eyebrow">${collectionTitle}</p>
          <h2>${product.similarTitle}</h2>
        </div>
      </div>
      <div class="catalogue-grid" data-catalogue-grid>
        ${similarStones.map(({ stone, slug, index }) => stoneTile([...stone, getStoneImage(stone, slug)], index, slug)).join("")}
      </div>
    </section>
    <section class="section product-reviews-section">
      <div class="section-header reveal">
        <div>
          <p class="eyebrow">${name}</p>
          <h2>${product.reviewsTitle}</h2>
        </div>
      </div>
      <div class="review-entry-shell reveal">
        <form class="review-form" data-review-form>
          <h3>${product.leaveReviewTitle}</h3>
          <div class="rating-fields">
            <label>
              <span>${product.rateService}</span>
              <select required name="serviceRating">
                <option value="5">5 / 5</option>
                <option value="4">4 / 5</option>
                <option value="3">3 / 5</option>
                <option value="2">2 / 5</option>
                <option value="1">1 / 5</option>
              </select>
            </label>
            <label>
              <span>${product.rateProduct}</span>
              <select required name="productRating">
                <option value="5">5 / 5</option>
                <option value="4">4 / 5</option>
                <option value="3">3 / 5</option>
                <option value="2">2 / 5</option>
                <option value="1">1 / 5</option>
              </select>
            </label>
          </div>
          <label>
            <span>${product.reviewNotes}</span>
            <textarea name="reviewNotes" placeholder="${product.reviewNotesPlaceholder}" required></textarea>
          </label>
          <button class="btn" type="submit">${product.submitReview}</button>
          <p class="review-confirmation" data-review-confirmation hidden>${product.reviewThanks}</p>
        </form>
      </div>
      <div class="older-reviews-heading reveal">
        <h3 class="older-reviews-title">${product.olderReviews}</h3>
        <p>${product.olderReviewsNote}</p>
      </div>
      <div class="review-grid product-review-grid">
        ${productReviews.map((review) => reviewCard(review)).join("")}
      </div>
    </section>
  `;
}

function renderNewArrivals() {
  const copy = getCopy();
  const [eyebrow, title, lead] = copy.pages.newArrivals;
  const newArrivalStones = [
    [...collections.sapphires.stones[1], stoneImages["Cornflower Sapphire"]],
    [...collections.sapphires.stones[2], stoneImages["Padparadscha Sapphire"]],
    [...collections.alexandrites.stones[1], stoneImages["Collector Alexandrite"]],
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
        ${newArrivalStones.map((stone, index) => {
          const sourceSlug = Object.keys(collections).find((slug) => collections[slug].stones.some((item) => item[0] === stone[0])) || "collection";
          return stoneTile(stone, index, sourceSlug);
        }).join("")}
      </div>
    </section>
  `;
}

function getAllStoneCards() {
  return Object.entries(collections).flatMap(([slug, collection]) =>
    collection.stones.map((stone, index) => ({
      slug,
      collection,
      stone,
      index,
      image: getStoneImage(stone, slug),
      path: getStonePath(stone, slug),
    }))
  );
}

function getPopularStoneCards() {
  const preferred = ["Royal Blue Sapphire", "Padparadscha Sapphire", "Pigeon Blood Ruby", "Madagascar Emerald", "Teal Sapphire", "Collector Alexandrite"];
  const allCards = getAllStoneCards();
  return preferred
    .map((name) => allCards.find((item) => item.stone[0] === name))
    .filter(Boolean);
}

function renderSearchProduct(item) {
  const href = item.href || item.path;
  const label = item.label || item.stone?.[0] || "";
  const image = item.image;
  const price = item.price || (item.stone ? formatPrice(item.stone[9]) : "");
  return `
    <a class="search-product" href="${href}">
      <img src="${image}" alt="${label}" loading="lazy" />
      ${price ? `<span>${price}</span>` : ""}
      <strong>${label}</strong>
    </a>
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

function renderCustomisation() {
  const copy = getCopy();
  const [eyebrow, title, lead] = copy.pages.customisation;
  const form = copy.form;
  return `
    ${pageShell({ eyebrow, title, lead })}
    <section class="section compact">
      <div class="customisation-form-shell reveal">
        <form class="form customisation-form" id="bookingForm">
          <div class="field"><label for="customName">${form.name}</label><input id="customName" required autocomplete="name" /></div>
          <div class="field"><label for="customEmail">${form.email}</label><input id="customEmail" type="email" required autocomplete="email" /></div>
          <div class="field"><label for="customPhone">${form.phone}</label><input id="customPhone" autocomplete="tel" /></div>
          <div class="field">
            <label for="customColour">${form.colour}</label>
            <select id="customColour">
              ${form.colourOptions.map((option) => `<option>${option}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="customCut">${form.cut}</label>
            <select id="customCut">
              ${form.cutOptions.map((option) => `<option>${option}</option>`).join("")}
            </select>
          </div>
          <div class="field"><label for="customSize">${form.size}</label><input id="customSize" /></div>
          <div class="field"><label for="customWeight">${form.weight}</label><input id="customWeight" /></div>
          <div class="field full"><label for="customDetails">${form.additional}</label><textarea id="customDetails" placeholder="${form.additionalPlaceholder}"></textarea></div>
          <button class="btn" type="submit">${form.submit}</button>
        </form>
        <p class="confirmation" id="confirmation">${form.confirmation}</p>
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
          <a class="btn account-action" href="#/register">${account.registerButton}</a>
        </div>
      </div>
    </section>
  `;
}

function renderRegister() {
  const account = accountCopy[selectedLanguage] || accountCopy.en;
  return `
    <section class="section account-section">
      <div class="account-shell account-shell-single reveal">
        <div class="account-panel">
          <h1>${account.createTitle}</h1>
          <p>${account.createLead}</p>
          <form class="account-form account-form-register" data-account-form>
            <div class="account-form-grid">
              <input type="text" autocomplete="given-name" placeholder="${account.firstName}" aria-label="${account.firstName}" required />
              <input type="text" autocomplete="family-name" placeholder="${account.lastName}" aria-label="${account.lastName}" required />
            </div>
            <input type="email" autocomplete="email" placeholder="${account.email}" aria-label="${account.email}" required />
            <input type="tel" autocomplete="tel" placeholder="${account.phone}" aria-label="${account.phone}" />
            <div class="account-form-grid">
              <input type="password" autocomplete="new-password" placeholder="${account.password}" aria-label="${account.password}" required />
              <input type="password" autocomplete="new-password" placeholder="${account.confirmPassword}" aria-label="${account.confirmPassword}" required />
            </div>
            <button class="btn account-action" type="submit">${account.createButton}</button>
          </form>
          <a class="forgot-link" href="#/login">${account.backToSignIn} <span aria-hidden="true">›</span></a>
        </div>
      </div>
    </section>
  `;
}

function renderSaved() {
  const copy = getCopy();
  const product = copy.common.product;
  const [eyebrow, title, lead] = copy.pages.saved;
  const savedStones = Object.entries(collections).flatMap(([slug, collection]) =>
    collection.stones
      .filter((stone) => savedWishlist.includes(getStoneId(stone, slug)))
      .map((stone, index) => stoneTile([...stone, getStoneImage(stone, slug)], index, slug))
  );
  return `
    ${pageShell({
      eyebrow,
      title,
      lead,
    })}
    <section class="section compact">
      ${
        savedStones.length
          ? `<div class="catalogue-grid" data-catalogue-grid>${savedStones.join("")}</div>`
          : `<div class="empty-state"><p>${product.noSaved}</p><a class="btn" href="#/collection">${copy.common.browseCollection}</a></div>`
      }
    </section>
  `;
}

function categoryCard([name, slug, text], index) {
  const copy = getCopy();
  const translated = copy.categories[index] || [name, text];
  const [displayName, displayText] = translated;
  return `
    <a class="category-card reveal" href="#/${slug}">
      <img src="${collectionImages[slug]}" alt="${name} gemstone collection" loading="lazy" />
      <div class="category-card-copy">
        <span>${displayName}</span>
        <h3>${displayName}</h3>
        <p>${displayText}</p>
        <strong>${copy.common.product.exploreCollection}</strong>
      </div>
    </a>
  `;
}

function stoneTile(stone, index = 0, collectionSlug = "collection") {
  const [name, origin, weight, shape, dimensions, color, clarity, treatment, certification, priceUsd, availability, image] = stone;
  const copy = getCopy();
  const saved = isSavedStone(stone, collectionSlug);
  const stonePath = getStonePath(stone, collectionSlug);
  return `
    <article class="catalogue-card reveal" data-stone-card data-index="${index}" data-origin="${origin}" data-clarity="${clarity}" data-shape="${shape}" data-color="${color}" data-price="${priceUsd}" data-carat="${getCarat(weight)}">
      <button class="wishlist-button ${saved ? "is-saved" : ""}" type="button" data-wishlist data-stone-id="${getStoneId(stone, collectionSlug)}" aria-pressed="${saved}" aria-label="${copy.common.product.save} ${name}">
        ${gemHeartIcon()}
      </button>
      <a class="stone-image-link" href="${stonePath}" aria-label="View ${name}">
        <div class="image-wrap"><img src="${image}" alt="${name}" loading="lazy" /></div>
      </a>
      <div class="stone-card-body">
        <p class="stone-card-price">${formatPrice(priceUsd)}</p>
        <h3><a href="${stonePath}">${name}</a></h3>
        <div class="stone-tile-meta">
          <span>${weight}</span>
          <span>${origin}</span>
        </div>
        <a class="btn secondary card-enquire" href="#/contact">${copy.common.enquire}</a>
      </div>
    </article>
  `;
}

function getPath() {
  return window.location.hash.replace("#", "") || "/";
}

function render() {
  const path = getPath();
  const stoneMatch = findStoneByPath(path);
  const eventMatch = findExhibitionByPath(path);
  const renderer = routes[path] || renderHome;
  rememberViewedStone(stoneMatch);
  const pageContent = stoneMatch ? renderStoneDetail(stoneMatch) : eventMatch ? renderExhibitionDetail(eventMatch) : renderer();
  document.querySelector("#main").innerHTML = `${renderBreadcrumb(path, stoneMatch, eventMatch)}${pageContent}`;
  document.querySelectorAll("[data-route]").forEach((link) => {
    const route = link.dataset.route;
    const active =
      route === path ||
      (route === "/collection" && ["/new-arrivals"].includes(path)) ||
      (route === "/events-exhibitions" && path.startsWith("/events-exhibitions/")) ||
      (route === "/custom-sourcing" && ["/custom-sourcing", "/customisation"].includes(path)) ||
      (route === "/private-viewing" && ["/private-viewing", "/contact"].includes(path)) ||
      (route === "/about" && path === "/heritage");
    link.classList.toggle("is-active", active);
  });
  document.title = path === "/" ? "Diverse Gems | Fine Sri Lankan Gemstones" : `Diverse Gems | ${path.slice(1).replaceAll("-", " ")}`;
  window.scrollTo({ top: 0, behavior: "instant" });
  setupReveals();
  setupBooking();
  setupAccountForms();
  setupNewsletter();
  setupReviewForms();
  setupCollectionFilters();
  setupWishlist();
  setupProductGallery();
  setupProductTabs();
  setupEventSlider();
  setupControls();
  updateHeaderHeight();
  handleHeaderScroll();
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

function setupNewsletter() {
  document.querySelectorAll("[data-newsletter-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      form.classList.add("is-sent");
      form.parentElement?.querySelector("[data-newsletter-confirmation]")?.removeAttribute("hidden");
      form.reset();
    });
  });
}

function setupEventSlider() {
  eventSliderTimers.forEach((timer) => window.clearInterval(timer));
  eventSliderTimers = [];
  document.querySelectorAll("[data-event-slider]").forEach((slider) => {
    const slides = [...slider.querySelectorAll("[data-event-slide]")];
    const dots = [...slider.querySelectorAll("[data-event-dot]")];
    if (slides.length <= 1) return;
    let activeIndex = slides.findIndex((slide) => slide.classList.contains("is-active"));
    if (activeIndex < 0) activeIndex = 0;
    const setActive = (nextIndex) => {
      activeIndex = (nextIndex + slides.length) % slides.length;
      slides.forEach((slide, index) => slide.classList.toggle("is-active", index === activeIndex));
      dots.forEach((dot, index) => dot.classList.toggle("is-active", index === activeIndex));
    };
    dots.forEach((dot) => {
      dot.addEventListener("click", () => setActive(Number(dot.dataset.eventDot)));
    });
    eventSliderTimers.push(window.setInterval(() => setActive(activeIndex + 1), 5200));
  });
}

function setupReviewForms() {
  document.querySelectorAll("[data-review-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      form.querySelector("[data-review-confirmation]")?.removeAttribute("hidden");
      form.reset();
    });
  });
}

function setupWishlist() {
  document.querySelectorAll("[data-wishlist]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const id = button.dataset.stoneId;
      if (!id) return;
      if (savedWishlist.includes(id)) {
        savedWishlist = savedWishlist.filter((item) => item !== id);
      } else {
        savedWishlist = [...savedWishlist, id];
      }
      const active = savedWishlist.includes(id);
      document.querySelectorAll(`[data-wishlist][data-stone-id="${id}"]`).forEach((item) => {
        item.classList.toggle("is-saved", active);
        item.setAttribute("aria-pressed", String(active));
      });
      saveWishlist();
      if (getPath() === "/saved") render();
    });
  });
}

function setupProductGallery() {
  const gallery = document.querySelector("[data-product-gallery]");
  if (!gallery) return;
  const main = gallery.querySelector("[data-gallery-main]");
  const media = gallery.querySelector(".stone-detail-media");
  const thumbs = [...gallery.querySelectorAll("[data-gallery-thumb]")];
  const zoom = gallery.querySelector("[data-gallery-zoom]");

  const showImage = (index) => {
    if (!main || !thumbs.length) return;
    const nextIndex = (index + thumbs.length) % thumbs.length;
    const button = thumbs[nextIndex];
    main.src = button.dataset.src;
    main.dataset.galleryView = button.dataset.view || "front";
    main.dataset.galleryIndex = String(nextIndex);
    thumbs.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    media?.classList.remove("is-zoomed");
    if (zoom) zoom.setAttribute("aria-pressed", "false");
    main.style.transformOrigin = "50% 50%";
  };

  thumbs.forEach((button) => {
    button.addEventListener("click", () => {
      showImage(Number(button.dataset.index) || 0);
    });
  });

  gallery.querySelector("[data-gallery-prev]")?.addEventListener("click", () => {
    showImage((Number(main?.dataset.galleryIndex) || 0) - 1);
  });

  gallery.querySelector("[data-gallery-next]")?.addEventListener("click", () => {
    showImage((Number(main?.dataset.galleryIndex) || 0) + 1);
  });

  zoom?.addEventListener("click", () => {
    const active = media?.classList.toggle("is-zoomed") || false;
    zoom.setAttribute("aria-pressed", String(active));
    if (!active && main) main.style.transformOrigin = "50% 50%";
  });

  media?.addEventListener("pointermove", (event) => {
    if (!media.classList.contains("is-zoomed") || !main) return;
    const rect = media.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    main.style.transformOrigin = `${Math.max(0, Math.min(100, x))}% ${Math.max(0, Math.min(100, y))}%`;
  });
}

function setupProductTabs() {
  const tabs = document.querySelector("[data-product-tabs]");
  if (!tabs) return;
  const buttons = tabs.querySelectorAll("[data-tab-target]");
  const panels = tabs.querySelectorAll("[data-tab-panel]");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.tabTarget;
      buttons.forEach((item) => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-selected", String(active));
      });
      panels.forEach((panel) => {
        const active = panel.dataset.tabPanel === target;
        panel.classList.toggle("is-active", active);
        panel.hidden = !active;
      });
    });
  });
}

function setupCollectionFilters() {
  const tools = document.querySelector("[data-collection-tools]");
  const grid = document.querySelector("[data-catalogue-grid]");
  if (!tools || !grid) return;

  const filterCopy = getCopy().common.filters;
  const cards = [...grid.querySelectorAll("[data-stone-card]")];
  const filters = [...tools.querySelectorAll("[data-filter]")];
  const sort = tools.querySelector("[data-sort]");
  const count = tools.querySelector("[data-filter-count]");
  const panel = tools.querySelector("[data-filter-panel]");
  const toggle = tools.querySelector("[data-filter-toggle]");

  const apply = () => {
    const state = Object.fromEntries(filters.map((input) => [input.dataset.filter, input.value]));
    const minPrice = Number.parseFloat(state.minPrice) || 0;
    const maxPrice = Number.parseFloat(state.maxPrice) || Number.POSITIVE_INFINITY;

    let visibleCards = cards.filter((card) => {
      const price = Number.parseFloat(card.dataset.price) || 0;
      return (
        (!state.origin || normaliseFilterValue(card.dataset.origin).includes(normaliseFilterValue(state.origin))) &&
        (!state.clarity || card.dataset.clarity === state.clarity) &&
        (!state.shape || card.dataset.shape === state.shape) &&
        (!state.color || card.dataset.color === state.color) &&
        price >= minPrice &&
        price <= maxPrice
      );
    });

    const sortValue = sort?.value || "featured";
    visibleCards.sort((a, b) => {
      if (sortValue === "newest") return Number(b.dataset.index) - Number(a.dataset.index);
      if (sortValue === "price-asc") return Number(a.dataset.price) - Number(b.dataset.price);
      if (sortValue === "price-desc") return Number(b.dataset.price) - Number(a.dataset.price);
      if (sortValue === "carat-desc") return Number(b.dataset.carat) - Number(a.dataset.carat);
      if (sortValue === "carat-asc") return Number(a.dataset.carat) - Number(b.dataset.carat);
      return Number(a.dataset.index) - Number(b.dataset.index);
    });

    cards.forEach((card) => {
      card.hidden = true;
    });
    visibleCards.forEach((card) => {
      card.hidden = false;
      grid.appendChild(card);
    });
    if (count) count.textContent = `${visibleCards.length} ${visibleCards.length === 1 ? filterCopy.stoneShown : filterCopy.stonesShown}`;
  };

  filters.forEach((input) => input.addEventListener("input", apply));
  sort?.addEventListener("change", apply);
  tools.querySelector("[data-filter-reset]")?.addEventListener("click", () => {
    filters.forEach((input) => {
      input.value = "";
    });
    if (sort) sort.value = "featured";
    apply();
  });
  toggle?.addEventListener("click", () => {
    const open = panel?.classList.toggle("is-collapsed") === false;
    toggle.setAttribute("aria-expanded", String(open));
  });
  apply();
}

function setupControls() {
  const currencySelect = document.querySelector("#currencySelect");
  const languageSelect = document.querySelector("#languageSelect");
  const mobileCurrencySelect = document.querySelector("#mobileCurrencySelect");
  const mobileLanguageSelect = document.querySelector("#mobileLanguageSelect");
  const currencyOptions = Object.keys(currencies)
      .map((code) => `<option value="${code}">${currencyLabels[code] || code}</option>`)
      .join("");
  [currencySelect, mobileCurrencySelect].filter(Boolean).forEach((select) => {
    select.innerHTML = currencyOptions;
    select.value = selectedCurrency;
  });
  [languageSelect, mobileLanguageSelect].filter(Boolean).forEach((select) => {
    select.value = selectedLanguage;
  });
  document.documentElement.lang = selectedLanguage;
  applyLanguage();
}

const nav = document.querySelector(".nav-links");
const toggle = document.querySelector(".menu-toggle");
const megaPanels = [...document.querySelectorAll("[data-mega-panel]")];
const header = document.querySelector("#siteHeader");
const announcementLink = document.querySelector("#announcementLink");
const currencySelect = document.querySelector("#currencySelect");
const languageSelect = document.querySelector("#languageSelect");
const mobileCurrencySelect = document.querySelector("#mobileCurrencySelect");
const mobileLanguageSelect = document.querySelector("#mobileLanguageSelect");
const viewingGate = document.querySelector("[data-viewing-gate]");
const searchOverlay = document.querySelector("[data-search-overlay]");
const searchInput = document.querySelector("[data-search-input]");
let announcementIndex = 0;
let lastScrollY = window.scrollY;
let headerScrollTicking = false;
let headerAutoHideArmed = false;
let eventSliderTimers = [];

function updateHeaderHeight() {
  if (!header) return;
  if (nav?.classList.contains("is-open")) return;
  document.documentElement.style.setProperty("--site-header-height", `${header.offsetHeight}px`);
}

function showHeader() {
  header?.classList.remove("is-hidden");
}

function handleHeaderScroll() {
  if (!header) return;
  const currentY = Math.max(window.scrollY, 0);
  const menuOpen =
    nav.classList.contains("is-open") ||
    megaPanels.some((panel) => panel.classList.contains("is-open")) ||
    !viewingGate?.hidden ||
    !searchOverlay?.hidden;
  header.classList.toggle("is-at-top", currentY <= 8);
  if (!headerAutoHideArmed || menuOpen || currentY <= 8) {
    showHeader();
    lastScrollY = currentY;
    return;
  }
  if (currentY > lastScrollY + 8) {
    header.classList.add("is-hidden");
  } else if (currentY < lastScrollY - 8) {
    showHeader();
  }
  lastScrollY = currentY;
}

function armHeaderAutoHide() {
  headerAutoHideArmed = true;
}

function requestHeaderScrollUpdate() {
  if (headerScrollTicking) return;
  headerScrollTicking = true;
  window.requestAnimationFrame(() => {
    handleHeaderScroll();
    headerScrollTicking = false;
  });
}

function applyViewingGateLanguage() {
  if (!viewingGate) return;
  const copy = viewingGateCopy[selectedLanguage] || viewingGateCopy.en;
  viewingGate.querySelector(".viewing-gate-close")?.setAttribute("aria-label", copy.close);
  viewingGate.querySelector("[data-viewing-gate-eyebrow]").textContent = copy.eyebrow;
  viewingGate.querySelector("[data-viewing-gate-title]").textContent = copy.title;
  viewingGate.querySelector("[data-viewing-gate-lead]").textContent = copy.lead;
  const actions = viewingGate.querySelectorAll("[data-viewing-gate-action]");
  if (actions[0]) actions[0].textContent = copy.signIn;
  if (actions[1]) actions[1].textContent = copy.signUp;
}

function openViewingGate() {
  if (!viewingGate) return;
  applyViewingGateLanguage();
  showHeader();
  viewingGate.hidden = false;
  document.body.style.overflow = "hidden";
  viewingGate.querySelector("[data-viewing-gate-action]")?.focus();
}

function closeViewingGate() {
  if (!viewingGate) return;
  viewingGate.hidden = true;
  document.body.style.overflow = "";
}

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

function closeSearch() {
  if (!searchOverlay) return;
  searchOverlay.hidden = true;
  activeSearchIndex = -1;
}

const searchStorageKeys = {
  history: "dgRecentSearches",
  viewed: "dgRecentlyViewed",
  stats: "dgSearchStats",
};

let activeSearchIndex = -1;

function readStoredJson(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "");
    return value || fallback;
  } catch {
    return fallback;
  }
}

function writeStoredJson(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Browser storage can be unavailable in private contexts; search still works without it.
  }
}

function uniqueByHref(items) {
  const seen = new Set();
  return items.filter((item) => {
    if (!item?.href || seen.has(item.href)) return false;
    seen.add(item.href);
    return true;
  });
}

function saveRecentSearch(query) {
  const term = query.trim();
  if (!term) return;
  const existing = readStoredJson(searchStorageKeys.history, []);
  const next = [term, ...existing.filter((item) => item.toLowerCase() !== term.toLowerCase())].slice(0, 6);
  writeStoredJson(searchStorageKeys.history, next);
}

function incrementSearchStat(label) {
  if (!label) return;
  const stats = readStoredJson(searchStorageKeys.stats, {});
  stats[label] = (stats[label] || 0) + 1;
  writeStoredJson(searchStorageKeys.stats, stats);
}

function rememberViewedStone(stoneMatch) {
  if (!stoneMatch) return;
  const item = {
    href: getStonePath(stoneMatch.stone, stoneMatch.collectionSlug),
    label: stoneMatch.stone[0],
    image: getStoneImage(stoneMatch.stone, stoneMatch.collectionSlug),
    price: formatPrice(stoneMatch.stone[9]),
  };
  const existing = readStoredJson(searchStorageKeys.viewed, []);
  writeStoredJson(searchStorageKeys.viewed, uniqueByHref([item, ...existing]).slice(0, 4));
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;",
  })[char]);
}

function highlightMatch(label, query) {
  const escaped = escapeHtml(label);
  const term = query.trim();
  if (!term) return escaped;
  const pattern = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return escaped.replace(new RegExp(`(${pattern})`, "ig"), "<mark>$1</mark>");
}

function getSearchIndex() {
  const copy = getCopy();
  const stones = getAllStoneCards().map((item) => ({
    label: item.stone[0],
    href: item.path,
    type: "Gemstone",
    image: item.image,
    price: formatPrice(item.stone[9]),
    keywords: [item.stone[0], item.stone[1], item.stone[2], item.stone[3], item.stone[5], item.stone[6], item.stone[7], item.collection.title].join(" "),
  }));
  const collectionItems = Object.entries(collections).map(([slug, collection]) => ({
    label: collection.title,
    href: `#/${slug}`,
    type: "Collection",
    keywords: `${collection.title} gemstones ${collection.lead}`,
  }));
  const pageItems = [
    [copy.nav[0], "#/", "Page", "home diverse gems"],
    [copy.nav[1], "#/collection", "Collection", "collection gemstones sapphires rubies emeralds"],
    [copy.pages.newArrivals[0], "#/new-arrivals", "Collection", "new arrivals recently acquired stones"],
    [copy.mega.heritageLinks[0], "#/heritage", "Page", "sri lankan heritage ratnapura ceylon sapphire story"],
    [copy.nav[4], "#/events-exhibitions", "Page", "events exhibitions gemstone shows"],
    [copy.pages.customSourcing[0], "#/custom-sourcing", "Service", "custom sourcing gemstone search"],
    [copy.pages.customisation[0], "#/customisation", "Service", "customisation color cut size weight"],
    [copy.nav[3], "#/private-viewing", "Service", "book private viewing appointment"],
    ["Contact", "#/contact", "Page", "contact email phone"],
    ["Log in", "#/login", "Account", "login sign in account"],
    ["Register", "#/register", "Account", "create account sign up register"],
  ].map(([label, href, type, keywords]) => ({ label, href, type, keywords }));
  return [...stones, ...collectionItems, ...pageItems];
}

function scoreSearchItem(item, term) {
  const label = item.label.toLowerCase();
  const keywords = item.keywords.toLowerCase();
  if (label === term) return 100;
  if (label.startsWith(term)) return 80;
  if (label.includes(term)) return 60;
  if (keywords.includes(term)) return 35;
  return 0;
}

function getPopularSearchItems() {
  const stats = readStoredJson(searchStorageKeys.stats, {});
  const seeded = ["Royal Blue Sapphire", "Padparadscha Sapphire", "Emerald", "Private Viewing", "New Arrivals", "Custom Sourcing"];
  const labels = Object.keys(stats).sort((a, b) => stats[b] - stats[a]);
  const combined = [...labels, ...seeded].filter((label, index, list) => list.findIndex((item) => item.toLowerCase() === label.toLowerCase()) === index);
  const index = getSearchIndex();
  return combined.slice(0, 6).map((label) => {
    const match = index.find((item) => item.label.toLowerCase().includes(label.toLowerCase()) || label.toLowerCase().includes(item.label.toLowerCase()));
    return match || { label, href: "#/collection", type: "Popular Search", keywords: label };
  });
}

function renderSearchLinkItem(item, query = "") {
  return `<a href="${item.href}" data-search-label="${escapeHtml(item.label)}">${highlightMatch(item.label, query)}</a>`;
}

function renderSearchSuggestion(item, query, index) {
  return `
    <a class="search-suggestion" href="${item.href}" data-search-result data-search-index="${index}" data-search-label="${escapeHtml(item.label)}">
      <strong>${highlightMatch(item.label, query)}</strong>
      <span>${escapeHtml(item.type)}</span>
    </a>
  `;
}

function renderDefaultSearchView() {
  if (!searchOverlay) return;
  const history = readStoredJson(searchStorageKeys.history, []);
  const viewed = readStoredJson(searchStorageKeys.viewed, []);
  const popular = getPopularSearchItems();
  const historyContainer = searchOverlay.querySelector("[data-search-history]");
  const viewedContainer = searchOverlay.querySelector("[data-search-recent]");
  const popularContainer = searchOverlay.querySelector("[data-search-popular]");
  const hasPersonalizedContent = history.length > 0 || viewed.length > 0;
  const index = getSearchIndex();
  const historyItems = history.map((label) => {
    const term = label.toLowerCase();
    const match = index
      .map((item) => ({ ...item, score: scoreSearchItem(item, term) }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)[0];
    return { label, href: match?.href || "#/collection" };
  });
  historyContainer.closest("section").hidden = history.length === 0;
  viewedContainer.closest("section").hidden = viewed.length === 0;
  popularContainer.closest("section").hidden = hasPersonalizedContent;
  historyContainer.innerHTML = historyItems.map((item) => renderSearchLinkItem(item)).join("");
  viewedContainer.innerHTML = viewed.map(renderSearchProduct).join("");
  popularContainer.innerHTML = popular.map((item) => renderSearchLinkItem(item)).join("");
}

function openSearch() {
  if (!searchOverlay) return;
  closeMegaPanels();
  showHeader();
  if (searchInput) searchInput.value = "";
  renderDefaultSearchView();
  updateSearchResults("");
  searchOverlay.hidden = false;
  window.requestAnimationFrame(() => searchInput?.focus());
}

function updateSearchResults(query) {
  if (!searchOverlay) return;
  const term = query.trim().toLowerCase();
  const defaultView = searchOverlay.querySelector("[data-search-default]");
  const liveView = searchOverlay.querySelector("[data-search-live]");
  const results = searchOverlay.querySelector("[data-search-results]");
  const empty = searchOverlay.querySelector("[data-search-empty]");
  activeSearchIndex = -1;
  if (!term) {
    renderDefaultSearchView();
    defaultView.hidden = false;
    liveView.hidden = true;
    return;
  }
  const matches = getSearchIndex()
    .map((item) => ({ ...item, score: scoreSearchItem(item, term) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.label.localeCompare(b.label))
    .slice(0, 9);
  defaultView.hidden = true;
  liveView.hidden = false;
  results.innerHTML = matches.map((item, index) => renderSearchSuggestion(item, query, index)).join("");
  empty.hidden = matches.length > 0;
}

function getMegaLabels(type, copy = getCopy()) {
  if (type === "heritage") return copy.mega.heritageLinks;
  if (type === "services") return copy.mega.servicesLinks;
  if (type === "private") return copy.mega.privateLinks;
  return copy.mega.collectionLinks;
}

function renderMegaLinks(type, copy = getCopy()) {
  const content = megaContent[type] || megaContent.collection;
  const labels = getMegaLabels(type, copy);
  const groups = content.groups || [{ labelKey: `${type}Eyebrow`, start: 0, end: content.links.length }];
  return groups
    .map((group) => {
      const heading = copy.mega[group.labelKey] || group.labelKey;
      const links = content.links
        .slice(group.start, group.end)
        .map(([, href], offset) => {
          const index = group.start + offset;
          return `<a href="${href}">${labels[index]}</a>`;
        })
        .join("");
      return `<div class="mega-link-group"><span class="mega-group-title">${heading}</span>${links}</div>`;
    })
    .join("");
}

function renderMobileSubmenu(type, copy = getCopy()) {
  const content = megaContent[type] || megaContent.collection;
  const labels = getMegaLabels(type, copy);
  const groups = content.groups || [{ labelKey: `${type}Eyebrow`, start: 0, end: content.links.length }];
  return groups
    .map((group) => {
      const heading = copy.mega[group.labelKey] || group.labelKey;
      const links = content.links
        .slice(group.start, group.end)
        .map(([, href], offset) => {
          const index = group.start + offset;
          return `<a href="${href}">${labels[index]}</a>`;
        })
        .join("");
      return `<div class="mobile-submenu-group"><span>${heading}</span>${links}</div>`;
    })
    .join("");
}

function applyLanguage() {
  const language = translations[selectedLanguage] ? selectedLanguage : "en";
  const copy = translations[language];
  document.documentElement.lang = language;
  document.querySelectorAll(".primary-nav-link").forEach((link, index) => {
    if (copy.nav[index]) link.textContent = copy.nav[index];
  });
  [document.querySelector("#languageSelect"), document.querySelector("#mobileLanguageSelect")].filter(Boolean).forEach((select) => {
    const labelText = select.closest(".selector-label")?.querySelector("span");
    if (labelText) labelText.textContent = copy.languageLabel;
  });
  [document.querySelector("#currencySelect"), document.querySelector("#mobileCurrencySelect")].filter(Boolean).forEach((select) => {
    const labelText = select.closest(".selector-label")?.querySelector("span");
    if (labelText) labelText.textContent = copy.currencyLabel;
  });
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
    collectionPanel.querySelector(".mega-grid").innerHTML = renderMegaLinks("collection", copy);
    document.querySelector("[data-mobile-submenu-panel='collection']").innerHTML = renderMobileSubmenu("collection", copy);
  }
  if (heritagePanel) {
    heritagePanel.querySelector(".eyebrow").textContent = copy.mega.heritageEyebrow;
    heritagePanel.querySelector("h2").textContent = copy.mega.heritageTitle;
    heritagePanel.querySelector(".mega-grid").innerHTML = renderMegaLinks("heritage", copy);
    document.querySelector("[data-mobile-submenu-panel='heritage']").innerHTML = renderMobileSubmenu("heritage", copy);
  }
  const servicesPanel = document.querySelector(".mega-services-panel");
  if (servicesPanel) {
    servicesPanel.querySelector(".eyebrow").textContent = copy.mega.servicesEyebrow;
    servicesPanel.querySelector("h2").textContent = copy.mega.servicesTitle;
    servicesPanel.querySelector(".mega-grid").innerHTML = renderMegaLinks("services", copy);
    document.querySelector("[data-mobile-submenu-panel='services']").innerHTML = renderMobileSubmenu("services", copy);
  }
  const privatePanel = document.querySelector(".mega-private-panel");
  if (privatePanel) {
    privatePanel.querySelector(".eyebrow").textContent = copy.mega.privateEyebrow;
    privatePanel.querySelector("h2").textContent = copy.mega.privateTitle;
    privatePanel.querySelector(".mega-grid").innerHTML = renderMegaLinks("private", copy);
    document.querySelector("[data-mobile-submenu-panel='private']").innerHTML = renderMobileSubmenu("private", copy);
  }
  const footerColumns = document.querySelectorAll(".footer-grid > div");
  if (footerColumns.length) {
    const footer = copy.footer;
    const footerLinks = [
      [copy.nav[1], copy.mega.collectionLinks[0], copy.nav[4], copy.mega.servicesLinks[0], copy.mega.privateLinks[0]],
      [copy.mega.heritageLinks[0], copy.nav[5], copy.mega.privateLinks[1]],
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
    if (footerColumns[4]) {
      footerColumns[4].querySelector("h3").textContent = footer.newsletter;
      footerColumns[4].querySelector("p").textContent = footer.newsletterLead;
      const newsletterInput = footerColumns[4].querySelector("input");
      const newsletterButton = footerColumns[4].querySelector("button");
      const newsletterConfirmation = footerColumns[4].querySelector("[data-newsletter-confirmation]");
      if (newsletterInput) {
        newsletterInput.placeholder = footer.newsletterPlaceholder;
        newsletterInput.setAttribute("aria-label", footer.newsletterPlaceholder);
      }
      if (newsletterButton) newsletterButton.textContent = footer.newsletterButton;
      if (newsletterConfirmation) newsletterConfirmation.textContent = footer.newsletterSuccess;
    }
  }
  const footerBottom = document.querySelectorAll(".footer-bottom span");
  if (footerBottom[0]) footerBottom[0].textContent = copy.footer.copyright;
  if (footerBottom[1]) footerBottom[1].textContent = copy.footer.ethics;
  applyViewingGateLanguage();
  updateAnnouncement(announcementIndex);
}

function closeMegaPanels() {
  megaPanels.forEach((panel) => {
    panel.classList.remove("is-open");
    panel.setAttribute("aria-hidden", "true");
  });
}

function openMegaPanel(type) {
  closeMegaPanels();
  const panel = document.querySelector(`[data-mega-panel="${type}"]`);
  if (!panel) return;
  showHeader();
  panel.classList.add("is-open");
  panel.setAttribute("aria-hidden", "false");
}

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
  showHeader();
  updateHeaderHeight();
  if (!open) {
    document.querySelectorAll(".nav-menu-item.is-open").forEach((item) => item.classList.remove("is-open"));
    document.querySelectorAll("[data-mobile-submenu]").forEach((button) => button.setAttribute("aria-expanded", "false"));
  }
});

document.querySelector("[data-search-open]")?.addEventListener("click", openSearch);
document.querySelector("[data-search-close]")?.addEventListener("click", closeSearch);
searchInput?.addEventListener("input", () => updateSearchResults(searchInput.value));
searchInput?.addEventListener("keydown", (event) => {
  const results = Array.from(searchOverlay?.querySelectorAll("[data-search-result]") || []);
  if (event.key === "Escape") {
    closeSearch();
    return;
  }
  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
    if (!results.length) return;
    event.preventDefault();
    const movement = event.key === "ArrowDown" ? 1 : -1;
    activeSearchIndex = (activeSearchIndex + movement + results.length) % results.length;
    results.forEach((item, index) => item.classList.toggle("is-active", index === activeSearchIndex));
    results[activeSearchIndex].scrollIntoView({ block: "nearest" });
    return;
  }
  if (event.key === "Enter") {
    const selected = activeSearchIndex >= 0 ? results[activeSearchIndex] : results[0];
    const query = searchInput.value.trim();
    if (selected) {
      event.preventDefault();
      saveRecentSearch(query || selected.dataset.searchLabel || "");
      incrementSearchStat(selected.dataset.searchLabel || query);
      window.location.hash = selected.getAttribute("href");
      closeSearch();
    } else if (query) {
      saveRecentSearch(query);
      incrementSearchStat(query);
    }
  }
});
searchOverlay?.addEventListener("click", (event) => {
  if (event.target === searchOverlay) closeSearch();
  const link = event.target.closest?.("a");
  if (link) {
    const label = link.dataset.searchLabel || link.textContent.trim();
    const query = searchInput?.value.trim() || label;
    saveRecentSearch(query);
    incrementSearchStat(label);
    closeSearch();
  }
});

document.querySelectorAll("[data-menu]").forEach((link) => {
  const openMenu = () => {
    openMegaPanel(link.dataset.menu);
  };
  link.addEventListener("pointerover", openMenu);
  link.addEventListener("mouseover", openMenu);
  link.addEventListener("mouseenter", openMenu);
  link.addEventListener("focus", openMenu);
});

document.querySelectorAll(".primary-nav-link:not([data-menu])").forEach((link) => {
  link.addEventListener("pointerover", closeMegaPanels);
  link.addEventListener("focus", closeMegaPanels);
});

document.querySelectorAll("[data-mobile-submenu]").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".nav-menu-item");
    const open = !item.classList.contains("is-open");
    document.querySelectorAll(".nav-menu-item.is-open").forEach((openItem) => {
      if (openItem !== item) {
        openItem.classList.remove("is-open");
        openItem.querySelector("[data-mobile-submenu]")?.setAttribute("aria-expanded", "false");
      }
    });
    item.classList.toggle("is-open", open);
    button.setAttribute("aria-expanded", String(open));
  });
});

document.addEventListener("click", (event) => {
  if (
    searchOverlay &&
    !searchOverlay.hidden &&
    !searchOverlay.contains(event.target) &&
    !event.target.closest("[data-search-open]")
  ) {
    closeSearch();
  }
  const privateViewingLink = event.target.closest("a[href='#/private-viewing']");
  if (privateViewingLink) {
    event.preventDefault();
    nav.classList.remove("is-open");
    closeMegaPanels();
    closeSearch();
    document.querySelectorAll(".nav-menu-item.is-open").forEach((item) => item.classList.remove("is-open"));
    document.querySelectorAll("[data-mobile-submenu]").forEach((button) => button.setAttribute("aria-expanded", "false"));
    toggle.setAttribute("aria-expanded", "false");
    openViewingGate();
    return;
  }
  if (event.target.closest("[data-viewing-gate-close]")) {
    closeViewingGate();
  }
});

document.querySelectorAll("[data-viewing-gate-action]").forEach((action) => {
  action.addEventListener("click", () => closeViewingGate());
});

document.querySelector("[data-announcement-prev]").addEventListener("click", () => updateAnnouncement(announcementIndex - 1));
document.querySelector("[data-announcement-next]").addEventListener("click", () => updateAnnouncement(announcementIndex + 1));
window.setInterval(() => updateAnnouncement(announcementIndex + 1), 5200);

function handleCurrencyChange(value) {
  selectedCurrency = value;
  localStorage.setItem("dgCurrency", selectedCurrency);
  render();
}

function handleLanguageChange(value) {
  selectedLanguage = value;
  localStorage.setItem("dgLanguage", selectedLanguage);
  render();
}

[currencySelect, mobileCurrencySelect].filter(Boolean).forEach((select) => {
  select.addEventListener("change", () => handleCurrencyChange(select.value));
});

[languageSelect, mobileLanguageSelect].filter(Boolean).forEach((select) => {
  select.addEventListener("change", () => handleLanguageChange(select.value));
});

header.addEventListener("mouseleave", closeMegaPanels);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeViewingGate();
    closeMegaPanels();
    closeSearch();
    nav.classList.remove("is-open");
    document.querySelectorAll(".nav-menu-item.is-open").forEach((item) => item.classList.remove("is-open"));
    document.querySelectorAll("[data-mobile-submenu]").forEach((button) => button.setAttribute("aria-expanded", "false"));
    toggle.setAttribute("aria-expanded", "false");
  }
});

window.addEventListener("hashchange", () => {
  headerAutoHideArmed = false;
  lastScrollY = 0;
  showHeader();
  nav.classList.remove("is-open");
  document.querySelectorAll(".nav-menu-item.is-open").forEach((item) => item.classList.remove("is-open"));
  document.querySelectorAll("[data-mobile-submenu]").forEach((button) => button.setAttribute("aria-expanded", "false"));
  toggle.setAttribute("aria-expanded", "false");
  closeMegaPanels();
  closeSearch();
  render();
});

render();
updateHeaderHeight();
showHeader();
handleHeaderScroll();
["wheel", "touchmove", "mousedown"].forEach((eventName) => {
  window.addEventListener(eventName, armHeaderAutoHide, { passive: true });
});
window.addEventListener("keydown", (event) => {
  if (["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "].includes(event.key)) {
    armHeaderAutoHide();
  }
});
window.addEventListener("scroll", requestHeaderScrollUpdate, { passive: true });
window.addEventListener("resize", () => {
  updateHeaderHeight();
  handleHeaderScroll();
});

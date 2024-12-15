const products = [
  {
    id: 1,
    name: "Смартфон Apple iPhone 13",
    price: 79990,
    oldPrice: 89990,
    image: ["/productCardImg/Apple iPhone 13.png", "/productCardImg/Apple iPhone 13 2.png", "/productCardImg/Apple iPhone 13 3.png"],
    discount: "10%",
    inStock: true,
    
      "Factory Data": {
        "Seller Warranty": "12 мес.",
        "Country of Manufacturer": "Индия"
      },
      "General Parameters": {
        "Type": "смартфон",
        "Model": "Apple iPhone 13",
        "Manufacturer Code": "[MLPK3HN/A]",
        "Release Year": 2021
      },
      "Appearance": {
        "Back Panel Color": "синий",
        "Edge Color": "синий",
        "Manufacturer Declared Color": "синий"
      },
      "Mobile Connectivity": {
        "2G Frequency Bands": "GSM 850 (B5), GSM 900 (B8), GSM 1800 (B3), GSM 1900 (B2)",
        "3G Frequency Bands": "UMTS 850 (B5), UMTS 900 (B8), UMTS 1700 (B4), UMTS 1900 (B2), UMTS 2100 (B1)",
        "4G (LTE) Network Support": "есть",
        "4G (LTE) Frequency Bands": "FDD-LTE 700 (B12), FDD-LTE 700 (B13), FDD-LTE 700 (B17), FDD-LTE 700 (B28), FDD-LTE 800 (B20), ещё",
        "4G LTE-Advanced Support": "есть",
        "LTE-Advanced Speed Categories": "LTE Cat. 18",
        "VoLTE Support": "есть",
        "5G Network Support": "есть",
        "5G Frequency Bands": "FDD-5G 700 (B12), FDD-5G 700 (B28), FDD-5G 800 (B20), FDD-5G 850 (B5), FDD-5G 900 (B8), ещё",
        "SIM Card Format": "Nano-SIM, eSIM",
        "Number of Physical SIM Cards": 1,
        "Number of eSIM": 1
      },
      "Display": {
        "Screen Diagonal (inch)": "6.1\"",
        "Screen Resolution": "2532x1170",
        "Matrix Manufacturing Technology": "AMOLED",
        "Matrix Type (detailed)": "Super Retina XDR",
        "Brightness": "1200 Кд/м²",
        "Screen Refresh Rate": "60 Гц",
        "Pixel Density": "460 ppi",
        "Aspect Ratio": "19.5:9",
        "Number of Screen Colors": "16.7 млн",
        "Screen Construction Features": "вырез на экране"
      },
      "Construction and Protection": {
        "Body Type": "классический",
        "Body Material": "металл, стекло",
        "Protection": "защита от пыли и влаги, защитное покрытие экрана от царапин, олеофобное покрытие",
        "Screen Protective Coating": "Ceramic Shield",
        "IP Protection Rating": "IP68",
        "Screen Notch Type": "вырез-челка"
      },
      "Operating System and Processor": {
        "Operating System": "iOS",
        "OS Version": "iOS 15",
        "Processor Model": "Apple A15 Bionic",
        "Number of Cores": 6,
        "Maximum Processor Frequency": "3.23 ГГц",
        "Processor Configuration": "2x Avalanche 3.23 ГГц, 4x Blizzard 2.02 ГГц",
        "Technological Process": "5 нм",
        "Graphics Accelerator": "Apple A15 GPU"
      },
      "Memory": {
        "RAM Type": "LPDDR4X",
        "RAM Capacity": "4 ГБ",
        "Virtual RAM Expansion": "0 ГБ",
        "Internal Storage Capacity": "128 ГБ",
        "Memory Card Slot": "нет"
      },
      "Main (Rear) Camera": {
        "Number of Main (Rear) Cameras": 2,
        "Main Camera Megapixels": "12+12 Мп",
        "Camera Module Types": "основная камера, сверхширокоугольная камера",
        "Main Camera Sensor Model": "Sony IMX372, Sony IMX603",
        "Main Camera Aperture": "1.6, 2.4",
        "Main Camera Autofocus": "есть",
        "Flash Type": "двойная светодиодная",
        "Lens Viewing Angle (degrees)": 120,
        "Optical Stabilization": "есть",
        "Digital Zoom (photo)": "5 x",
        "Main Camera Photo Resolution": "4032x3024",
        "DxOMark Rating (main camera)": 125,
        "Rear Optics Features and Technologies": "2-кратный оптический зум на уменьшение, 5-элементная линза, 7-элементная линза, ещё",
        "Photo Shooting Modes and Functions": "географические метки, коррекция искажений объектива, ночной режим, панорамная съемка, портретная съемка, ещё"
      },
      "Video Recording (Main Camera)": {
        "Video Recording Format": "Full HD, HD, Ultra HD 4K",
        "Video Resolution and Frame Rate": "1280x720 (30 кадр./сек.), 1920x1080 (25 кадр./сек.), 1920x1080 (30 кадр./сек.), 1920x1080 (60 кадр./сек.), ещё",
        "Slow Motion Video Recording": "есть",
        "Zoom (video)": "3-кратный цифровой зум",
        "Video Playback Formats": "AVI, M4V, MOV, MP4, ProRes",
        "Video Recording Features and Functions": "2-кратный оптический зум на уменьшение, HDR‑видео, аудиозум, вспышка True Tone, ещё"
      },
      "Front Camera": {
        "Dual Front Camera": "нет",
        "Front Camera Megapixels": "12 Мп",
        "Front Camera Sensor Model": "Sony IMX514",
        "Front Camera Aperture": 2.2,
        "Autofocus": "нет",
        "Built-in Flash": "нет",
        "Front Camera Photo Resolution": "4032x3024",
        "Video Recording Resolution": "1920x1080 (25 кадр./сек.), 1920x1080 (30 кадр./сек.), 1920x1080 (60 кадр./сек.), ещё",
        "DxOMark Rating (selfie camera)": 134,
        "Front Optics Features and Technologies": "автоматическая стабилизация изображения, вспышка Retina Flash, технология Deep Fusion",
        "Shooting Modes and Functions": "Animoji и Memoji, кинематографическая стабилизация видео, коррекция искажений объектива, ночной режим, ещё"
      },
      "Audio": {
        "Stereo Speakers": "есть",
        "Audio File Formats": "AA, AAC‑LC, AAX, AAX+, AC3, Apple Lossless (ALAC), EAC3, FLAC, HE‑AAC, HE‑AAC v2, LPCM, M4P (защищенный AAC), MP3",
        "FM Radio": "нет"
      },
      "Communications": {
        "Bluetooth Version": 5.0,
        "Wi-Fi Standard": "4 (802.11n), 5 (802.11ac), 6 (802.11ax)",
        "NFC": "есть",
        "Navigation Systems": "A-GPS, BeiDou, GPS, Galileo, QZSS, ГЛОНАСС",
        "IR Port": "нет",
        "Other Data Transmission Technologies": "Wi-Fi Hotspot, Wi-Fi MiMO"
      },
      "Ports and Sensors": {
        "Charging Interface": "Lightning 8-pin",
        "Headphone Jack": "Lightning 8-pin",
        "OTG Support": "есть",
        "Sensors": "акселерометр, барометр, гироскоп, датчик освещенности, датчик приближения, компас"
      },
      "Power": {
        "Battery Type": "Li-Ion",
        "Battery Capacity": "3240 мА*ч",
        "Power Adapter Voltage": "нет ЗУ в комплекте",
        "Power Adapter Output Power": "0 Вт",
        "Fast Charging": "есть",
        "Fast Charging Standards": "Power Delivery 3.0",
        "Wireless Charging Support": "есть",
        "Wireless Reverse Charging Support": "нет",
        "Music Playback Time": "75 ч",
        "Video Playback Time": "19 ч"
      },
      "Additional Information": {
        "Biometric Protection": "распознавание лица",
        "Headphones Included": "нет",
        "Charger Included": "нет",
        "Package Contents": "документация, кабель Lightning, скрепка для извлечения слота SIM-карты / карты памяти",
        "Additional Features": "голосовой помощник Siri, поддержка аксессуаров и устройств беспроводной зарядки MagSafe, ещё",
        "Delivery Features": "работоспособность FaceTime не гарантируется"
      },
      "Dimensions and Weight": {
        "Width": "71.5 мм",
        "Height": "146.7 мм",
        "Thickness": "7.7 мм",
        "Phone Weight": "173 г",
        "Package Width": "90 мм",
        "Package Height": "165 мм",
        "Package Depth": "30 мм",
        "Package Weight": "320 г"
      }
    
  },

  {
    id: 2,
    name: "Ноутбук Apple MacBook Air",
    price: 99990,
    oldPrice: 109990,
    image: ["/productCardImg/Apple MacBook Air.png", "/productCardImg/Apple MacBook Air 2.png", "/productCardImg/Apple MacBook Air 3.png", "/productCardImg/Apple MacBook Air 4.png"],
    discount: "9%",
    inStock: true,
  },

  {
    id: 3,
    name: "Умные часы Samsung Galaxy Watch 5",
    price: 19990,
    oldPrice: 22990,
    image: ["/productCardImg/Samsung Galaxy Watch 5.png", "/productCardImg/Samsung Galaxy Watch 5 2.png", "/productCardImg/Samsung Galaxy Watch 5 3.png"],
    discount: "13%",
    inStock: false,
  },

  {
    id: 4,
    name: 'Телевизор Samsung QLED 55',
    price: 64990,
    oldPrice: 72990,
    image: ["/productCardImg/SamsungQLED55.png", "/productCardImg/SamsungQLED55 2.png","/productCardImg/SamsungQLED55 3.png"],
    discount: "11%",
    inStock: true,
  },

  { 
    id: 5,
    name: "Планшет Apple iPad Air 2022",
    price: 59990,
    oldPrice: 64990,
    image: ["/productCardImg/Apple iPad Air 2022.png"],
    discount: "8%",
    inStock: true,
  },

  {
    id: 6,
    name: "Беспроводные наушники Sony WH-1000XM5",
    price: 34990,
    oldPrice: 37990,
    image: ["/productCardImg/Sony WH-1000XM5.png", "/productCardImg/Sony WH-1000XM5 2.png"],
    discount: "7%",
    inStock: false,
  },

  {
    id: 7,
    name: "Игровая приставка Sony PlayStation 5",
    price: 54990,
    oldPrice: null,
    image: ["/productCardImg/Sony PlayStation 5.png", "/productCardImg/Sony PlayStation 5 2.png"],
    discount: null,
    inStock: true,
  },

  {
    id: 8,
    name: "Смартфон Xiaomi Redmi Note 12 Pro",
    price: 29990,
    oldPrice: 34990,
    image: ["/productCardImg/Xiaomi Redmi Note 12 Pro.png"],
    discount: "14%",
    inStock: true,
  },

  {
    id: 9,
    name: "Пылесос Dyson V15 Detect",
    price: 69990,
    oldPrice: 79990,
    image: ["/productCardImg/Dyson V15 Detect.png"],
    discount: "12%",
    inStock: true,
  },

  {
    id: 10,
    name: "Колонка JBL Charge 5",
    price: 15990,
    oldPrice: 17990,
    image: ["/productCardImg/JBL Charge 5.png", "/productCardImg/JBL Charge 5 2.png"],
    discount: "11%",
    inStock: true,
  },
];

const categories = [
  { id: 1, title: "Смартфоны", image: "/catalog/phone.png"},
  { id: 2, title: "Ноутбуки", image: "/catalog/loptop.png"},
  { id: 3, title: "Компьютеры", image: "/catalog/computer.png"},
  { id: 4, title: "Телевизоры", image: "/catalog/tv.png"},
  { id: 5, title: "Планшеты", image: "catalog/tablet.png"},
  { id: 6, title: "Колонки", image: "catalog/speaker.png"},
  { id: 7, title: "Наушники", image: "https://cdn1.smartprix.com/rx-iInRgBqmb-w1200-h1200/InRgBqmb.jpg"  },
  { id: 8, title: "Часы", image: "/catalog/smart watch.png"},
  { id: 9, title: "Камеры", image: ""  },
  { id: 10, title: "Игровые приставки", image: ""  },
  { id: 11, title: "Мониторы", image: ""  },
  { id: 12, title: "Мыши", image: ""  },
  { id: 13, title: "Клавиатуры", image: ""  },
  { id: 14, title: "Портативные зарядки", image: ""  },
  { id: 15, title: "Дроны", image: ""  },
  { id: 16, title: "Умные колонки", image: ""  },
  { id: 17, title: "Видеокарты", image: ""  },
  { id: 18, title: "Процессоры", image: ""  },
  { id: 19, title: "Материнские платы", image: ""  },
  { id: 20, title: "SSD диски", image: ""  },
  { id: 21, title: "Оперативная память", image: ""  },
];

export { products, categories };

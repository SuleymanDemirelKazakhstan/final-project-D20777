var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  },
  function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");

    let newCafe = [
      {
        instagram: "https://instagram.com/littlebrazil_almaty/",
        adress_url: "https://yandex.kz/maps/162/almaty/house/Y08YfwViTEEOQFppfX5wcn1jZA==/?ll=76.922549%2C43.213100&z=16",
        name: "Little Brazil",
        description: "Первый Уникальный в Казахстане Бразильский мясной ресторан Little Brazil Churrasco Grill – несет в себе Яркий Бразильский, латино-американский дух и атмосферу динамики.",
        img_url: "newCafe/littleBrazil.jpg",
        food: "Латино-американская",
        adress: "г. Алматы, пр. Аль-Фараби, 140а/4 (Villa boutiques & restaurants)",
        time: "пн-чт 12:00–02:00; пт-сб 12:00–04:00; вс 12:00–02:00",
        money: "10000-15000 тг",
        sets: "240",
        pay: "Наличные, Оплата картой",
        car: "Неохраняемая бесплатная",
        features: "Караоке, Фоновая музыка, Живая музыка, DJ, Шоу-программа"

      },
      {
        instagram: "https://www.instagram.com/est.hinkali/",
        adress_url: "https://yandex.kz/maps/162/almaty/house/Y08YfwFhTEUOQFppfX50dHpgYg==/?ll=76.961509%2C43.255636&z=16",
        name: "Есть Хинкали, Пить Вино",
        description: "Современный взгляд на Грузинскую кухню. Вас ждут 15 видов хинкали. Ресторан открылся в августе 2020.",
        img_url: "newCafe/hinkali.jpg",
        food: "Грузинская",
        adress: "г. Алматы, ​Толе би, 4Б (уг. Каирбекова)",
        time: "пн-вс 12:00–01:00",
        money: "3000-4500",
        sets: "40",
        pay: "Наличные, Оплата картой",
        car: "Городская",
        features: "Есть летняя терасса"
      },
      {
        instagram: "https://www.instagram.com/cocos_restobar/",
        adress_url: "https://yandex.kz/maps/162/almaty/house/Y08YfwJkT0wGQFppfX5zdHhjYQ==/?ll=76.954691%2C43.225405&z=16",
        name: "Cocos",
        description: "Коктейльный бар с вкуснейшей кухней открылся в августе 2020.",
        img_url: "newCafe/cocos.jpg",
        food: "Европейская, Азиатская",
        adress: "г. Алматы, ул. Кажымукана, 49 (​ЖК Royal​)",
        time: "пн-вс 12:00–23:00",
        money: "4500-7000 тг",
        sets: "50",
        pay: "Наличные, Оплата картой",
        car: "Неохраняемая бесплатная",
        features: "WiFi, Винная карта, VIP-зал"
      }
    ];

    newCafe.forEach(el => {
      dbo.collection("new").insert(el);
    })

    let delivery = [{
      instagram: "https://www.instagram.com/kfc_kz/",
      adress_url: "https://yandex.kz/maps/162/almaty/?ll=76.945465%2C43.238293&z=12",
      name: "KFC",
      description: "Kentucky Fried Chicken”, основанная Гарландом Сандерсом, стала одной из крупнейших сетей быстрого питания в мире. На сегодняшний день в более чем 100 странах мира “Kentucky Fried Chicken” ежегодно продает более миллиарда обедов.",
      img_url: "delivery/kfc.jpg",
      food: "Ламериканская",
      adress: "г. Алматы, по всему городу",
      time: "круглосуточно, без выходных",
      site: "www.kfc-kazakhstan.kz",
      pay: "Наличные, Оплата картой",
      car: "Неохраняемая бесплатная",
      features: "На вынос, Детское меню"
    },
    {
      instagram: "https://www.instagram.com/basilic_kz/",
      adress_url: "https://yandex.kz/maps/162/almaty/house/Y08YfwJgQEwHQFppfX52c3RjbQ==/?ll=76.950989%2C43.272810&z=16",
      name: "Basilic на Суюнбая",
      description: "На Территории вкусной еды для вас представлены блюда кухонь мира. Наше меню формируется по-сезонно с использованием сезонных продуктов, а  также вы можете всегда найти что-то интересное в наших в специальных предложениях.",
      img_url: "delivery/basilic.jpg",
      food: "Восточная, Европейская",
      adress: "г. Алматы, пр. ​Суюнбая, 15 (ниже пр. Райымбека)",
      time: "круглосуточно, без выходных",
      site: "basilic.kz",
      pay: "Наличные, Оплата картой",
      car: "Неохраняемая бесплатная",
      features: "Есть доставка, Бизнес-ланч, Завтраки"
    },
    {
      instagram: "https://www.instagram.com/mcdonalds.kaz/",
      adress_url: "https://yandex.kz/maps/162/almaty/?ll=76.949211%2C43.255662&mode=search&sll=76.949285%2C43.255693&text=43.255693%2C76.949285&z=16",
      name: "McDonald's",
      description: "Доставка в Алматы на дом любимых бургеров из McDonald's (Макдоналдс).",
      img_url: "delivery/mcds.jpg",
      food: "Американская",
      adress: "г. Алматы, по всему городу",
      time: "пн-вс 09:00–22:00",
      site: "mcdonalds.kz",
      pay: "Наличные, Оплата картой",
      car: "Неохраняемая бесплатная",
      features: "Есть доставка"
    }

    ];
    delivery.forEach(el => {
      dbo.collection("bt1").insert(el);
    })
    let restorans = [
      {
        instagram: "https://instagram.com/u_afanasicha/",
        adress_url: "https://yandex.kz/maps/162/almaty/house/Y08YfwFkTU0FQFppfX5wd35jbA==/?ll=76.964483%2C43.216208&z=16",
        name: "У Афанасича",
        description: "Ресторан У Афанасича зарекомендовал себя, как любимое место в городе Алматы, формата Classic Fine Dinig Restaurant (ресторан высокой изысканной кухни premium класса).",
        img_url: "restorans/afan.jpg",
        food: "Американская, Кавказская, Русская, Японская, Европейская, Вегетарианская, Восточная",
        adress: "г. Алматы, пр. Достык, 123/8",
        time: "пн-вс 10:00–02:00",
        money: "7000-10000 тг",
        sets: "50",
        pay: "Наличные, Оплата картой",
        car: "Неохраняемая бесплатная",
        features: "WiFi, Бизнес-ланч, Фоновая музыка, Живая музыка, Танцпол, VIP-зал, Детская площадка, Есть летняя терасса, Фонтан, Кейтеринг, Есть доставка"
      },
      {
        instagram: "https://instagram.com/narsharab.resto/",
        adress_url: "https://yandex.kz/maps/162/almaty/house/Y08YfwJlQU0BQFppfX51dnlnYg==/?ll=76.955886%2C43.247546&z=16",
        name: "Narsharab",
        description: "Азербайджанская кухня в Алматы. Бренд-шеф с Баку. Уютный ресторан с летней террасой ",
        img_url: "restorans/narsharab.jpg",
        food: "Азербайджанская",
        adress: "г. Алматы, пр. Достык, 63 (уг.ул. Шевченко)",
        time: "пн-вс 12:00–22:00",
        money: "3000-4500 тг",
        sets: "50",
        pay: "Наличные, Оплата картой",
        car: "Городская",
        features: "Есть доставка"
      },
      {
        instagram: "https://instagram.com/shashlikoff_almaty/",
        adress_url: "https://yandex.kz/maps/162/almaty/house/Y08YfwJmSEMDQFppfX50cn5gbQ==/?ll=76.956164%2C43.253239&z=16",
        name: "ШашлыкоFF Grill & Bar",
        description: "Мы знаем толк в гриле. Новый стандарт заказа 20 минут.",
        img_url: "restorans/shashlyk.jpg",
        food: "Гриль меню, Американская, Кавказская, Европейская",
        adress: "г. Алматы, пр. Достык, 36​ (уг. Богенбай батыра)",
        time: "пн-чт 11:00–02:00; пт-сб 11:00–03:00; вс 11:00–02:00",
        money: "3000-4500 тг",
        sets: "50",
        pay: "Наличные, Оплата картой",
        car: "Городская",
        features: "Бизнес-ланч, Есть летняя терасса"
      }
    ];
    restorans.forEach(el => {
      dbo.collection("bt2").insert(el);
    })
    let cafe = [
      {
        instagram: "https://instagram.com/teplo_na_mira/",
        adress_url: "https://yandex.kz/maps/?text=43.24902307452835,76.93987749999994",
        name: "Teplo",
        description: "Teplo – это сочетание различных блюд и напитков, которые обязательно придутся вам по вкусу.",
        img_url: "cafe/teplo.jpg",
        food: "Европейская",
        adress: "г. Алматы, ​ул. Кабанбай батыра, 122 (уг. Желтоксан)",
        time: "пн-вс 09:00–00:00",
        money: "3000-4500 тг",
        sets: "50",
        pay: "Наличные, Оплата картой",
        car: "Городская",
        features: "Завтраки, Кальян"
      },
      {
        instagram: "https://instagram.com/asianbbq/",
        adress_url: "https://yandex.kz/maps/162/almaty/?ll=76.889015%2C43.236553&mode=search&sll=76.888997%2C43.236611&text=43.236611%2C76.888997&z=16",
        name: "ASIAN BarBeQue",
        description: "Уютный ресторанчик «Asian BarBeQue» предлагает такую услугу, как круглосуточная доставка еды в городе Алматы.Ваши домочадцы и гости по достоинству оценят стремление угостить их вкусной изысканной пищей.",
        img_url: "cafe/asianbbq.jpg",
        food: "Корейская, Паназиатская, Японская, Гриль меню",
        adress: "г.Алматы, ул. Мынбаева, 117 (уг. Абая)",
        time: "круглосуточно",
        money: "1500-3000 тг",
        sets: "70",
        pay: "Наличные, Оплата картой",
        car: "Неохраняемая бесплатная",
        features: "WiFi, На вынос, Детский уголок, ТВ-экран, Есть доставка"
      },
      {
        instagram: "https://www.instagram.com/pizzaleoncafe/",
        adress_url: "https://yandex.kz/maps/162/almaty/house/Y08Yfg5gT00BQFppfX5ydHtgbA==/?ll=76.890686%2C43.235738&z=16",
        name: "Leon",
        description: "С Любовью в каждом ингредиенте.",
        img_url: "cafe/leon.jpg",
        food: "Итальянская",
        adress: "г. Алматы, ул. ​Розыбакиева, 136/1 (ниже Сатпаева)",
        time: "круглосуточно, без выходных",
        money: "1500-3000 тг",
        sets: "15",
        pay: "Наличные, Оплата картой",
        car: "Неохраняемая бесплатная",
        features: "Есть летняя терасса"
      }
    ];
    cafe.forEach(el => {
      dbo.collection("bt3").insert(el);
    })

    let pabs = [
      {
        instagram: "https://www.instagram.com/z.bar.almaty/",
        adress_url: "https://yandex.kz/maps/162/almaty/house/Y08YfwNlQUIPQFppfX50d3VjbQ==/?ll=76.945878%2C43.256910&z=16",
        name: "Z Live & jazz bar",
        description: "Live music every Friday and Saturday.",
        img_url: "pabs/jazzbar.jpg",
        food: "Европейская",
        adress: "г. Алматы, ул. ​Казыбек би, 65 (пр. Назарбаева)",
        time: "пн-вс 12:00–00:00",
        money: "4500-7000 тг",
        sets: "350",
        pay: "Наличные, Оплата картой",
        car: "Городская",
        features: "Живая музыка, Фоновая музыка, Танцпол, Есть летняя терасса"
      },
      {
        instagram: "https://www.instagram.com/overpack_lounge_bar/",
        adress_url: "https://yandex.kz/maps/162/almaty/house/Y08Yfg5oQUYDQFppfX5xeHhgYA==/?ll=76.898834%2C43.209434&z=16",
        name: "Overpack",
        description: "Лучшие стейки на Хоспере",
        img_url: "pabs/overack.jpg",
        food: "Европейская",
        adress: "г. Алматы, пр. ​Гагарина, 250 (уг. Ходжанова)",
        time: "пн-вс 11:00–22:00",
        money: "3000-4500 тг",
        sets: "70",
        pay: "Наличные, Оплата картой",
        car: "Городская",
        features: "Кальян"
      },
      {
        instagram: "https://instagram.com/myata_food_ayezova/",
        adress_url: "https://yandex.kz/maps/162/almaty/house/Y08YfwdjS00HQFppfX5yeHxmYQ==/?ll=76.903280%2C43.239055&z=16",
        name: "МЯТА FOOD",
        description: "Myata Food - ТЕРРИТОРИЯ ВКУСА",
        img_url: "pabs/myata.jpeg",
        food: "Европейская",
        adress: "г. Алматы, пр. ​Абая, 76 (уг. Ауэзова)",
        time: "пн-вс 12:00–23:00",
        money: "3000-4500 тг",
        sets: "50",
        pay: "Наличные, Оплата картой",
        car: "Городская",
        features: "Кальян, Есть летняя терасса"
      }
    ];
    pabs.forEach(el => {
      dbo.collection("bt4").insert(el);
    })

    let fastfood = [
      {
        instagram: "https://instagram.com/kaz_blackstarburger/",
        adress_url: "https://yandex.kz/maps/162/almaty/house/Y08YfwVlS0EDQFppfX51cX1gZg==/?ll=76.925244%2C43.240132&z=16",
        name: "Black Star Burger",
        description: "#СоччныйМощщный теперь в Казахстане!",
        img_url: "fastfood/blackstar.jpg",
        food: "Американская",
        adress: "г. Алматы, ​пр. Абая, 44а (ТЦ Promenade)",
        time: "пн-вс 10:00–00:00",
        site: "blackstarburger.ru",
        pay: "Наличные, Оплата картой",
        car: "Городская",
        features: "Кальян, Есть летняя терасса"
      },
      {
        instagram: "https://instagram.com/6inch.kazakhstan/",
        adress_url: "https://yandex.kz/maps/?text=43.22784257449859,76.95913749999991",
        name: "6inch",
        description: "6inch- это свобода | огромные и безумно вкусные сэндвичи.",
        img_url: "fastfood/6inch.jpg",
        food: "Американская",
        adress: "г. Алматы, Самал 3-й микрорайон, 1 (ТЦ Ритц-Палас)",
        time: "пн-вс 10:00-21:00",
        money: "1500-3000 тг",
        sets: "на вынос",
        pay: "Наличные, Оплата картой",
        car: "Городская",
        features: "Собери сам свой сэндвич"
      },
      {
        instagram: "https://instagram.com/box.lagman/",
        adress_url: "https://yandex.kz/maps/162/almaty/house/Y08Yfg5mS0UFQFppfX5zdX9nbA==/?ll=76.896202%2C43.224348&z=16",
        name: "Box Lagman",
        description: "Мастера Вкусного Лагмана.",
        img_url: "fastfood/boxlagman.jpeg",
        food: "Уйгурская, Китайская",
        adress: "г. Алматы, ул. Гагарина, 139 (выше Тимирзева)",
        time: "пн-вс 11:00–22:00",
        money: "700-1500 тг",
        sets: "на вынос",
        pay: "Наличные, Оплата картой",
        car: "Городская",
        features: "На вынос"
      }
    ];
    fastfood.forEach(el => {
      dbo.collection("bt5").insert(el);
    })

    let coffeine = [
      {
        instagram: "https://www.instagram.com/dali.almaty/",
        adress_url: "https://yandex.kz/maps/162/almaty/?ll=76.943471%2C43.260035&mode=search&sll=76.943922%2C43.260050&text=43.260050%2C76.943922&z=16",
        name: "Dali Coffee and Bakery",
        description: "Огромные стаканы кофе и безумно вкусные сэндвичи.",
        img_url: "coffeine/daily.jpg",
        food: "Европейская",
        adress: " г. Алматы, ул. ​Панфилова, 111 (уг. Гоголя)",
        time: "пн-вс 08:00–23:00",
        money: "1500-3000 тг",
        sets: "12",
        pay: "Наличные, Оплата картой",
        car: "Городская",
        features: "Есть летняя терасса, На вынос"
      },
      {
        instagram: "https://www.instagram.com/utepia_kz/",
        adress_url: "https://yandex.kz/maps/162/almaty/house/Y08YfwNlS0QDQFppfX53cX1lYg==/?ll=76.945214%2C43.260166&z=16",
        name: "Utepia",
        description: "Utepia, чайный дом.",
        img_url: "coffeine/utepia.jpg",
        food: "Нет кухни",
        adress: "г. Алматы, ул. ​Гоголя, 77 (уг. Панфилова)​",
        time: "пн-вс 09:00–20:00",
        money: "700-1500 тг",
        sets: "на вынос",
        pay: "Наличные, Оплата картой",
        car: "Городская",
        features: "Есть летняя терасса"
      },
      {
        instagram: "https://instagram.com/bestbrew_coffee/",
        adress_url: "https://yandex.kz/maps/162/almaty/house/Y08YfwZjSEQAQFppfX51dHVrZw==/?ll=76.913117%2C43.245983&z=16",
        name: "Best Brew Coffee",
        description: "BB Coffee Almaty. Coffee & Sandwiches. Вкусно. Уютно. Хорошо",
        img_url: "coffeine/bestbrew.jpg",
        food: "Американская",
        adress: "г. Алматы, ул. Жамбыла, 155 к.2 (уг. Байзакова)",
        time: "пн-вс 08:00–22:00",
        money: "1500-3000 тг",
        sets: "12",
        pay: "Наличные, Оплата картой",
        car: "Городская",
        features: "Есть летняя терасса"
      }
    ];
    coffeine.forEach(el => {
      dbo.collection("bt6").insert(el);
    })

    let center = [
      {
        instagram: "https://www.instagram.com/barbossa.almaty/",
        adress_url: "https://yandex.kz/maps/162/almaty/?ll=76.946256%2C43.308887&mode=search&sll=76.946213%2C43.308935&text=43.308935%2C76.946213&z=16",
        name: "BarBossa",
        description: "Летняя Терраса и Бассейн BarBOSSA.",
        img_url: "center/barbossa.jpg",
        food: "Нет кухни",
        adress: "г. Алматы, ул. ​Акан Серы, 156",
        time: "пн-вс 10:00–21:00",
        money: "3000-4500 тг",
        sets: "50",
        pay: "Наличные, Оплата картой",
        car: "Неохраняемая бесплатная",
        features: "Топчаны, Бассейн, Есть летняя терасса"
      },
      {
        instagram: "https://www.instagram.com/lemon_studio_almaty/",
        adress_url: "https://yandex.kz/maps/162/almaty/house/Y08YfwRlSUADQFppfX51cnlqZw==/?ll=76.935054%2C43.243593&z=16",
        name: "Lemon, кулинарная студия",
        description: "Кулинарные курсы и мастер-классы.Гастро ужины.Мастер-классы для детей.Кулинарные тимбилдинги",
        img_url: "center/lemon.jpg",
        food: "Нет кухни",
        adress: "г. Алматы, ул. Курмангазы, 90 (уг. Сейфуллина)",
        time: "пн выходной; вт-вс 10:00–23:00",
        money: "3000-4500 тг",
        sets: "50",
        pay: "Наличные, Оплата картой",
        car: "Городская",
        features: "WiFi"
      },
      {
        instagram: "https://instagram.com/aspanpark_kz/",
        adress_url: "https://yandex.kz/maps/162/almaty/?ll=76.935404%2C43.233781&mode=search&sll=76.935990%2C43.234101&text=43.234101%2C76.935990&z=16",
        name: "Aspan Park",
        description: "🤸🏻‍♂️ Батуты 🧗🏻 Скалодром 🏎 Автодром 🎠 Аттракционы 👶🏻Детский городок 🤹🏻 Аниматоры 🎉 Party-Rooms для праздников",
        img_url: "center/aspanpark.jpg",
        food: "Европейская",
        adress: "г. Алматы, пр. Сейфуллина, 617 (ТРЦ Forum, 5 этаж)",
        time: "пн-вс 10:00–22:00",
        money: "3000-4500 тг",
        sets: "40",
        pay: "Наличные, Оплата картой",
        car: "Охраняемая бесплатная",
        features: "Детская площадка, Детский уголок, Детские стульчики, Детское меню, Аниматоры"
      }
    ];
    center.forEach(el => {
      dbo.collection("bt7").insert(el);
    })
    let clubs = [
      {
        instagram: "https://www.instagram.com/dont.tell.mom.bar/",
        adress_url: "https://yandex.kz/maps/162/almaty/house/Y08YfwJmT00CQFppfX53cHRrYg==/?ll=76.956685%2C43.261886&z=16",
        name: "Don't Tell Mom bar",
        description: "Безлимит на бар за 3000тг . С 00:00 до 04:00 вход 3000тг (депозит).",
        img_url: "clubs/mombar.jpg",
        food: "Европейская",
        adress: "г. Алматы, ул. Калдаякова, 17 (уг. Гоголя)",
        time: "пт-сб 22:00–06:00",
        money: "4500-7000 тг",
        sets: "100",
        pay: "Наличные, Оплата картой",
        car: "Неохраняемая бесплатная",
        features: "DJ, Танцпол, Шоу-программа, GO-GO"
      },
      {
        instagram: "https://www.instagram.com/motor_club_almaty/",
        adress_url: "https://yandex.kz/maps/162/almaty/house/Y08YfgJoSUUCQFppfX5zdnpkZg==/?ll=76.858005%2C43.227672&z=16",
        name: "Motor club",
        description: "На территории клуба:Огромная концертная площадка. Разноформатный алко-бар. Кальянный бар. Караоке зал. Собственная охраняемая парковка.",
        img_url: "clubs/motorclub.jpg",
        food: "Европейская",
        adress: "г. Алматы, 4-й микрорайон, 1а (за кинотеатром Сары-Арка)",
        time: "пн 18:00–03:00; вт выходной; ср 18:00–03:00; чт 20:00–04:00; пт-сб 21:00–06:00; вс 18:00–03:00",
        money: "4500-7000 тг",
        sets: "100",
        pay: "Наличные, Оплата картой",
        car: "Охраняемая бесплатная",
        features: "Фоновая музыка, Живая музыка, Танцпол, Караоке, Кальян, Шоу-программа, GO-GO, Стриптиз, Своя парковка"
      },
      {
        instagram: "https://www.instagram.com/fizika_almaty/",
        adress_url: "https://yandex.kz/maps/162/almaty/house/Y08YfwRjSU0BQFppfX51dH1rZg==/?ll=76.933087%2C43.245182&z=16",
        name: "Fizika",
        description: "РЕСТОРАН | БАР | КЛУБ | БАНКЕТНЫЙ ЗАЛ",
        img_url: "clubs/fizika.jpg",
        food: "Европейская, Паназиатская",
        adress: "г. Алматы, ул. Шевченко, 100 (уг. Сейфуллина)",
        time: "пн выходной; вт-чт 18:00–01:00; пт-сб 18:00–05:00; вс выходной",
        money: "4500-7000 тг",
        sets: "200",
        pay: "Наличные, Оплата картой",
        car: "Городская",
        features: "DJ, Живая музыка, Танцпол, Крафтовое пиво, VIP-зал"
      }
    ];
    clubs.forEach(el => {
      dbo.collection("bt8").insert(el);
    })
    let sushi = [
      {
        instagram: "https://www.instagram.com/dve_palochky.kz/",
        adress_url: "https://yandex.kz/maps/162/almaty/house/Y08YfwNhSkMOQFppfX50c3xgYw==/?ll=76.941369%2C43.252038&z=16",
        name: "Две палочки",
        description: "Главное , что душа счастлива, а фигура подождёт!🤗🤭",
        img_url: "sushi/dvepal.jpg",
        food: "Японская, Итальянская",
        adress: "г. Алматы, пр. Абылай хана, 113 (ул. Богенбай батыра)",
        time: "пн-вс 10:00–00:00",
        money: "1500-3000 тг",
        sets: "45",
        pay: "Наличные",
        car: "Городская",
        features: "Есть летняя терасса"
      },
      {
        instagram: "https://www.instagram.com/baoalmaty/",
        adress_url: "https://yandex.kz/maps/162/almaty/house/Y08YfgJoSUUCQFppfX5zdnpkZg==/?ll=76.858005%2C43.227672&z=16",
        name: "BAO Sushi & Noodles Bar",
        description: "BAO Noodles & Sushi Bar - демократичное, современное городское кафе, где представлена азиатская кухня.",
        img_url: "sushi/bao.jpg",
        food: "Азиатская, Японская",
        adress: "г. Алматы, ​ул. ​Розыбакиева, 247а (ТРЦ Mega Center Alma-Ata)",
        time: "пн-вс 12:00–22:00",
        money: "1500-3000 тг",
        sets: "20",
        pay: "Наличные, Оплата картой",
        car: "Охраняемая бесплатная",
        features: "На вынос"
      },
      {
        instagram: "https://www.instagram.com/yasudasushi/",
        adress_url: "https://yandex.kz/maps/162/almaty/house/Y08YfwNhS0AFQFppfX53c35lZA==/?ll=76.941252%2C43.262260&z=16",
        name: "Yasuda Sushi",
        description: "🍣 Yasuda Суши бар 🍣 Единственный суши бар в Алматы в формате Кайтэн 🔝 Ленточный конвейер на барной стойке 👨‍🍳 Открытая кухня",
        img_url: "sushi/yasuda.jpg",
        food: "Японская",
        adress: "г. Алматы, пр. Абылай Хана, 62",
        time: "пн-вс 12:00–00:00",
        money: "3000-4500 тг",
        sets: "20",
        pay: "Наличные, Оплата картой",
        car: "Городская",
        features: "Открытая кухня"
      }
    ];
    sushi.forEach(el => {
      dbo.collection("bt9").insert(el);
    })
    let karaoke = [
      {
        instagram: "https://www.instagram.com/wallstreetalmaty/",
        adress_url: "https://yandex.kz/maps/162/almaty/?ll=76.878505%2C43.243855&mode=search&sll=76.878774%2C43.243882&text=43.243882%2C76.878774&z=16",
        name: "Wall Street",
        description: "🎙ПРОФЕССИОНАЛЬНЫЙ ЗВУК 🎙KARAOKE ОБЩИЙ ЗАЛ 🎙AST 250 🎙VIP ROOMS",
        img_url: "karaoke/wallStreet.jpg",
        food: "Восточная, Европейская",
        adress: "г. Алматы, ул. Брусиловского, 134а​",
        time: "пн-вс 18:00–06:00",
        money: "3000-4500 тг",
        sets: "70",
        pay: "Наличные, Оплата картой",
        car: "Неохраняемая бесплатная",
        features: "WiFi, Караоке"
      },
      {
        instagram: "https://www.instagram.com/wallstreetalmaty/",
        adress_url: "https://yandex.kz/maps/162/almaty/?ll=76.878505%2C43.243855&mode=search&sll=76.878774%2C43.243882&text=43.243882%2C76.878774&z=16",
        name: "Wall Street",
        description: "🎙ПРОФЕССИОНАЛЬНЫЙ ЗВУК 🎙KARAOKE ОБЩИЙ ЗАЛ 🎙AST 250 🎙VIP ROOMS",
        img_url: "karaoke/wallStreet.jpg",
        food: "Восточная, Европейская",
        adress: "г. Алматы, ул. Брусиловского, 134а​",
        time: "пн-вс 18:00–06:00",
        money: "3000-4500 тг",
        sets: "70",
        pay: "Наличные, Оплата картой",
        car: "Неохраняемая бесплатная",
        features: "WiFi, Караоке"
      },
      {
        instagram: "https://www.instagram.com/wallstreetalmaty/",
        adress_url: "https://yandex.kz/maps/162/almaty/?ll=76.878505%2C43.243855&mode=search&sll=76.878774%2C43.243882&text=43.243882%2C76.878774&z=16",
        name: "Wall Street",
        description: "🎙ПРОФЕССИОНАЛЬНЫЙ ЗВУК 🎙KARAOKE ОБЩИЙ ЗАЛ 🎙AST 250 🎙VIP ROOMS",
        img_url: "karaoke/wallStreet.jpg",
        food: "Восточная, Европейская",
        adress: "г. Алматы, ул. Брусиловского, 134а​",
        time: "пн-вс 18:00–06:00",
        money: "3000-4500 тг",
        sets: "70",
        pay: "Наличные, Оплата картой",
        car: "Неохраняемая бесплатная",
        features: "WiFi, Караоке"
      }
    ];
    karaoke.forEach(el => {
      dbo.collection("bt10").insert(el);
    })
    let pizza = [
      {
        instagram: "https://www.instagram.com/partyfood.almaty/",
        adress_url: "https://yandex.kz/maps/162/almaty/?ll=76.895725%2C43.213606&mode=search&sll=76.895683%2C43.213606&text=43.213606%2C76.895683&z=16",
        name: "Party Food",
        description: "Сеть ресторанов быстрого обслуживания 🍕 Пицца 🍔 Бургеры 🍗 Чикен меню 🥙 Вок 🥗 Салаты Много начинки! Очень много начинки!",
        img_url: "pizza/pizza.jpeg",
        food: "Американская, Европейская",
        adress: "г. Алматы, ул. ​Радостовца, 230 (уг. Байкадамова)",
        time: "пн-вс 09:00–23:00",
        money: "1500-3000 тг",
        sets: "30",
        pay: "Наличные, Оплата картой",
        car: "Неохраняемая бесплатная",
        features: "Есть доставка, На вынос"
      },
      {
        instagram: "https://www.instagram.com/partyfood.almaty/",
        adress_url: "https://yandex.kz/maps/162/almaty/?ll=76.895725%2C43.213606&mode=search&sll=76.895683%2C43.213606&text=43.213606%2C76.895683&z=16",
        name: "Party Food",
        description: "Сеть ресторанов быстрого обслуживания 🍕 Пицца 🍔 Бургеры 🍗 Чикен меню 🥙 Вок 🥗 Салаты Много начинки! Очень много начинки!",
        img_url: "pizza/pizza.jpeg",
        food: "Американская, Европейская",
        adress: "г. Алматы, ул. ​Радостовца, 230 (уг. Байкадамова)",
        time: "пн-вс 09:00–23:00",
        money: "1500-3000 тг",
        sets: "30",
        pay: "Наличные, Оплата картой",
        car: "Неохраняемая бесплатная",
        features: "Есть доставка, На вынос"
      },
      {
        instagram: "https://www.instagram.com/partyfood.almaty/",
        adress_url: "https://yandex.kz/maps/162/almaty/?ll=76.895725%2C43.213606&mode=search&sll=76.895683%2C43.213606&text=43.213606%2C76.895683&z=16",
        name: "Party Food",
        description: "Сеть ресторанов быстрого обслуживания 🍕 Пицца 🍔 Бургеры 🍗 Чикен меню 🥙 Вок 🥗 Салаты Много начинки! Очень много начинки!",
        img_url: "pizza/pizza.jpeg",
        food: "Американская, Европейская",
        adress: "г. Алматы, ул. ​Радостовца, 230 (уг. Байкадамова)",
        time: "пн-вс 09:00–23:00",
        money: "1500-3000 тг",
        sets: "30",
        pay: "Наличные, Оплата картой",
        car: "Неохраняемая бесплатная",
        features: "Есть доставка, На вынос"
      }
    ];
    pizza.forEach(el => {
      dbo.collection("bt11").insert(el);
    })
    let stolov = [
      {
        instagram: "https://www.instagram.com/basilic_kz/",
        adress_url: "https://yandex.kz/maps/162/almaty/house/Y08YfwJgQEwHQFppfX52c3RjbQ==/?ll=76.950989%2C43.272810&z=16",
        name: "Basilic на Суюнбая",
        description: "На Территории вкусной еды для вас представлены блюда кухонь мира. Наше меню формируется по-сезонно с использованием сезонных продуктов.",
        img_url: "delivery/basilic.jpg",
        food: "Восточная, Европейская",
        adress: "г. Алматы, пр. ​Суюнбая, 15 (ниже пр. Райымбека)",
        time: "круглосуточно, без выходных",
        site: "basilic.kz",
        pay: "Наличные, Оплата картой",
        car: "Неохраняемая бесплатная",
        features: "Есть доставка, Бизнес-ланч, Завтраки"
      },
      {
        instagram: "https://www.instagram.com/basilic_kz/",
        adress_url: "https://yandex.kz/maps/162/almaty/house/Y08YfwJgQEwHQFppfX52c3RjbQ==/?ll=76.950989%2C43.272810&z=16",
        name: "Basilic на Суюнбая",
        description: "На Территории вкусной еды для вас представлены блюда кухонь мира. Наше меню формируется по-сезонно с использованием сезонных продуктов.",
        img_url: "delivery/basilic.jpg",
        food: "Восточная, Европейская",
        adress: "г. Алматы, пр. ​Суюнбая, 15 (ниже пр. Райымбека)",
        time: "круглосуточно, без выходных",
        site: "basilic.kz",
        pay: "Наличные, Оплата картой",
        car: "Неохраняемая бесплатная",
        features: "Есть доставка, Бизнес-ланч, Завтраки"
      },
      {
        instagram: "https://www.instagram.com/basilic_kz/",
        adress_url: "https://yandex.kz/maps/162/almaty/house/Y08YfwJgQEwHQFppfX52c3RjbQ==/?ll=76.950989%2C43.272810&z=16",
        name: "Basilic на Суюнбая",
        description: "На Территории вкусной еды для вас представлены блюда кухонь мира. Наше меню формируется по-сезонно с использованием сезонных продуктов.",
        img_url: "delivery/basilic.jpg",
        food: "Восточная, Европейская",
        adress: "г. Алматы, пр. ​Суюнбая, 15 (ниже пр. Райымбека)",
        time: "круглосуточно, без выходных",
        site: "basilic.kz",
        pay: "Наличные, Оплата картой",
        car: "Неохраняемая бесплатная",
        features: "Есть доставка, Бизнес-ланч, Завтраки"
      }
    ];
    stolov.forEach(el => {
      dbo.collection("bt12").insert(el);
    })
    let meat = [
      {
        instagram: "https://www.instagram.com/gg_steak/",
        adress_url: "https://yandex.kz/maps/162/almaty/house/Y08YfwJhSkIBQFppfX5wdnpqbQ==/?ll=76.951376%2C43.217700&z=16",
        name: "GG Steak House",
        description: "Семейный ресторан в Горном Гиганте. Уютный интерьер GG STEAK HOUSE располагает к неторопливой приятной беседе.",
        img_url: "meat/meat.jpg",
        food: "Американская, Европейская",
        adress: "г. Алматы, мкрн. Горный Гигант, ул. Искендерова, 58",
        time: "пн-вс 10:00–00:00",
        money: "3000-4500 тг",
        sets: "100",
        pay: "Наличные, Оплата картой",
        car: "Неохраняемая бесплатная",
        features: "WiFi, Бизнес-ланч"
      },
      {
        instagram: "https://www.instagram.com/gg_steak/",
        adress_url: "https://yandex.kz/maps/162/almaty/house/Y08YfwJhSkIBQFppfX5wdnpqbQ==/?ll=76.951376%2C43.217700&z=16",
        name: "GG Steak House",
        description: "Семейный ресторан в Горном Гиганте. Уютный интерьер GG STEAK HOUSE располагает к неторопливой приятной беседе.",
        img_url: "meat/meat.jpg",
        food: "Американская, Европейская",
        adress: "г. Алматы, мкрн. Горный Гигант, ул. Искендерова, 58",
        time: "пн-вс 10:00–00:00",
        money: "3000-4500 тг",
        sets: "100",
        pay: "Наличные, Оплата картой",
        car: "Неохраняемая бесплатная",
        features: "WiFi, Бизнес-ланч"
      },
      {
        instagram: "https://www.instagram.com/gg_steak/",
        adress_url: "https://yandex.kz/maps/162/almaty/house/Y08YfwJhSkIBQFppfX5wdnpqbQ==/?ll=76.951376%2C43.217700&z=16",
        name: "GG Steak House",
        description: "Семейный ресторан в Горном Гиганте. Уютный интерьер GG STEAK HOUSE располагает к неторопливой приятной беседе.",
        img_url: "meat/meat.jpg",
        food: "Американская, Европейская",
        adress: "г. Алматы, мкрн. Горный Гигант, ул. Искендерова, 58",
        time: "пн-вс 10:00–00:00",
        money: "3000-4500 тг",
        sets: "100",
        pay: "Наличные, Оплата картой",
        car: "Неохраняемая бесплатная",
        features: "WiFi, Бизнес-ланч"
      }
    ];
    meat.forEach(el => {
      dbo.collection("bt13").insert(el);
    })


  });

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

    let newCafe = [{ instagram: "https://instagram.com/littlebrazil_almaty/", adress_url: "https://yandex.kz/maps/162/almaty/house/Y08YfwViTEEOQFppfX5wcn1jZA==/?ll=76.922549%2C43.213100&z=16", name: "Little Brazil", description: "Первый Уникальный в Казахстане Бразильский мясной ресторан Little Brazil Churrasco Grill – несет в себе Яркий Бразильский, латино-американский дух и атмосферу динамики.", img_url: "newCafe/littleBrazil.jpg", food: "Латино-американская", adress: "г. Алматы, пр. Аль-Фараби, 140а/4 (Villa boutiques & restaurants)", time: "пн-чт 12:00–02:00; пт-сб 12:00–04:00; вс 12:00–02:00", money: "10000-15000 тг", sets: "240" },
    { instagram: "https://www.instagram.com/est.hinkali/", adress_url: "https://yandex.kz/maps/162/almaty/house/Y08YfwFhTEUOQFppfX50dHpgYg==/?ll=76.961509%2C43.255636&z=16", name: "Есть Хинкали, Пить Вино", description: "Современный взгляд на Грузинскую кухню. Вас ждут 15 видов хинкали. Ресторан открылся в августе 2020.", img_url: "newCafe/hinkali.jpg", food: "Грузинская", adress: "г. Алматы, ​Толе би, 4Б (уг. Каирбекова)", time: "пн-вс 12:00–01:00", money: "3000-4500", sets: "40" },
    { instagram: "https://instagram.com/loopita_bar/", adress_url: "https://yandex.kz/maps/162/almaty/house/Y08YfwNkQU0GQFppfX50c3RgZg==/?ll=76.944882%2C43.252832&z=16", name: "Loopita", description: "Мексиканский бар Loopita открылся в июле 2020.", img_url: "newCafe/loopita.jpg", food: "Мексиканская", adress: "г. Алматы, ул. Панфилова, 125 (уг. Богенбай батыра)", time: "пн-вс 12:00–22:00", money: "3000-4500 тг", sets: "40" },
    { instagram: "https://instagram.com/ktown_almaty/", adress_url: "https://yandex.kz/maps/162/almaty/house/Y08YfwNmQUAPQFppfX50eXlmYw==/?ll=76.946858%2C43.258558&z=16", name: "K-town", description: "Рестобар с корейской кухней открылся в сентябре 2020.", img_url: "newCafe/k-town.jpg", food: "Корейская, Европейская", adress: "г. Алматы, у​л. Айтеке би, 53 (уг. Назарбаева)", time: "пн-вс 12:00–01:00", money: "3000-4500 тг", sets: "50" },
    { instagram: "https://instagram.com/malenkiy_princ_almaty/", adress_url: "https://yandex.kz/maps/162/almaty/house/Y08YfgBhSUYGQFppfX51eH5iYA==/?ll=76.871031%2C43.249214&z=16", name: "Маленький принц", description: "Детский ресторан Маленький принц приглашает в гости. Заведение открылось в июле 2020.", img_url: "newCafe/litprince.jpg", food: "Европейская", adress: "г. Алматы, ул. ​Толе би, 265​ (уг. Тлендиева)", time: "пн-вс 10:00–22:00", money: "4500-7000 тг", sets: "50" },
    { instagram: "https://www.instagram.com/cocos_restobar/", adress_url: "https://yandex.kz/maps/162/almaty/house/Y08YfwJkT0wGQFppfX5zdHhjYQ==/?ll=76.954691%2C43.225405&z=16", name: "Cocos", description: "Коктейльный бар с вкуснейшей кухней открылся в августе 2020.", img_url: "newCafe/cocos.jpg", food: "Европейская, Азиатская", adress: "г. Алматы, ул. Кажымукана, 49 (​ЖК Royal​)", time: "пн-вс 12:00–23:00", money: "4500-7000 тг", sets: "50" },
    ];

    // newCafe.forEach(el => {
    //   dbo.collection("new").insert(el);
    // })

    let delivery = [{
      instagram: "https://www.instagram.com/kfc_kz/",
      adress_url: "https://yandex.kz/maps/162/almaty/?ll=76.945465%2C43.238293&z=12",
      name: "KFC",
      description: "Kentucky Fried Chicken”, основанная Гарландом Сандерсом, стала одной из крупнейших сетей быстрого питания в мире. На сегодняшний день в более чем 100 странах мира “Kentucky Fried Chicken” ежегодно продает более миллиарда обедов.",
      img_url: "delivery/kfc.jpg",
      food: "Ламериканская",
      adress: "г. Алматы, по всему городу",
      time: "круглосуточно, без выходных", 
      site: "www.kfc-kazakhstan.kz"
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
      site: "basilic.kz"
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
      site: "mcdonalds.kz"
    },
    {
      instagram: "https://www.instagram.com/burgerking_kz/",
      adress_url: "https://yandex.kz/maps/162/almaty/?ll=76.949211%2C43.https://yandex.kz/maps/162/almaty/?ll=76.904412%2C43.240152&mode=search&sll=76.904460%2C43.240107&text=43.240107%2C76.904460&z=16&mode=search&sll=76.949285%2C43.255693&text=43.255693%2C76.949285&z=16",
      name: "Burger King",
      description: "Доставка в Алматы на дом любимых бургеров из Burger King (Бургер Кинг).",
      img_url: "delivery/bk.jpg",
      food: "Американская",
      adress: "г. Алматы, по всему городу",
      time: "пн-вс 10:00–22:00",
      site: "burgerking.kz"
    },
    {
      instagram: "https://www.instagram.com/lanzhou_kafe/",
      adress_url: "https://yandex.kz/maps/162/almaty/house/Y08YfgBlSEQPQFppfX5wc31kYA==/?ll=76.875118%2C43.212174&z=16",
      name:"Lanzhou Таугуль",
      description: "Китайская кухня. Лапша, тянутая вручную. Наше уютное кафе быстрого питания приглашает Вас попробовать настоящую китайскую лапшу из ее родины города Lanzhou. Ее уникальность в мастерстве наших поваров, которые приготовят ее за три минуты на ваших глазах. Впервые в Казахстане!!! Мы любим свою работу и ценим Ваше время.",
      img_url: "delivery/lanzhou.jpg",
      food: "Китайская, Уйгурская",
      adress: "г. Алматы, мкрн. Таугуль, ​ул. Пятницкого, 15/16",
      time: "пн-вс 11:00–00:00",
      site: "lapsha.kz"
    },
    {
      instagram: "https://instagram.com/dodopizza.almaty/",
      adress_url: "https://yandex.kz/maps/?text=43.23241407453515,76.87937599999998",
      name:"ДоДо пицца",
      description: "Международная сеть пиццерий. Быстрая бесплатная доставка домой и в офис. Показываем в прямом эфире, как готовим вашу пиццу.",
      img_url: "delivery/dodo.jpg",
      food: "Итальянская",
      adress: "г. Алматы, ул. Сатпаева, 90 (ТРК ADK, 2 этаж)",
      time: "пн-вс 10:00–22:00",
      site: "dodopizza.kz"
    },
    ];
    // delivery.forEach(el => {
    //   dbo.collection("bt1").insert(el);
    // })
    let restorans = [
      {
      instagram: "https://instagram.com/u_afanasicha/",
      adress_url: "https://yandex.kz/maps/162/almaty/house/Y08YfwFkTU0FQFppfX5wd35jbA==/?ll=76.964483%2C43.216208&z=16",
      name: "У Афанасича",
      description: "Ресторан У Афанасича зарекомендовал себя, как любимое место в городе Алматы, формата Classic Fine Dinig Restaurant (ресторан высокой изысканной кухни premium класса). Основной особенностью ресторана является его история более 15 лет существующая в сегменте Horeca, ресторан включает в себя 7 Традиционных гастромических кухонь таких как: Американская, Кавказская, Японская, Русская, Итальянская, Восточная, Вегетарианская, кроме того, на территории ресторана у Афанасича расположен рыбный ресторан Sea Marine.",
      img_url: "restorans/afan.jpg",
      food: "Американская, Кавказская, Русская, Японская, Европейская, Вегетарианская, Восточная",
      adress: "г. Алматы, пр. Достык, 123/8",
      time: "пн-вс 10:00–02:00", 
      money:"7000-10000 тг",
      sets:"50",
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
      money:"3000-4500 тг",
      sets:"50",
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
      money:"3000-4500 тг",
      sets:"50",
    },
    ];
    // restorans.forEach(el => {
    //   dbo.collection("bt2").insert(el);
    // })
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
      money:"3000-4500 тг",
      sets:"50",
    },
    {
      instagram: "https://instagram.com/asianbbq/",
      adress_url: "https://yandex.kz/maps/162/almaty/?ll=76.889015%2C43.236553&mode=search&sll=76.888997%2C43.236611&text=43.236611%2C76.888997&z=16",
      name: "ASIAN BarBeQue",
      description: "Уютный ресторанчик «Asian BarBeQue» предлагает такую услугу, как круглосуточная доставка еды в городе Алматы.Ваши домочадцы и гости по достоинству оценят стремление угостить их вкусной изысканной пищей. Тем более что в «Asian BBQ» готовят только из самых свежих продуктов и здесь всегда огромный выбор различных блюд, а лучшие повара Алматы удовлетворяют запросы самых требовательных гурманов. В ассортименте блюда из корейской и японской кухни, супы, салаты, мясные сеты, вторые блюда, мясо барбекю, гарниры, кукси, роллы, суши, лёгкие закуски, десерты и напитки. Богатый выбор в «Asian BarBeQue» исключает однообразную скучную еду, и вы можете радовать себя и своих гостей необычными оригинальными блюдами каждый день. Посетите наш  ресторан Азиатской кухни —  Asianbbq, в любое время. Мы готовим и принимаем заказы на доставку еды  для наших гостей — круглосуточно.",
      img_url: "cafe/asianbbq.jpg",
      food: "Корейская, Паназиатская, Японская, Гриль меню",
      adress: "г.Алматы, ул. Мынбаева, 117 (уг. Абая)",
      time: "круглосуточно",
      money:"1500-3000 тг",
      sets:"70",
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
      money:"1500-3000 тг",
      sets:"15",
    },
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
      money:"4500-7000 тг",
      sets:"350",
    },
    {
      instagram: "https://www.instagram.com/overpack_lounge_bar/",
      adress_url: "https://yandex.kz/maps/162/almaty/house/Y08Yfg5oQUYDQFppfX5xeHhgYA==/?ll=76.898834%2C43.209434&z=16",
      name: "Overpack",
      description: "Overpack",
      img_url: "pabs/overack.jpg",
      food: "Европейская",
      adress: "г. Алматы, пр. ​Гагарина, 250 (уг. Ходжанова)",
      time: "пн-вс 11:00–22:00",
      money:"3000-4500 тг",
      sets:"70",
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
      money:"3000-4500 тг",
      sets:"50",
    },
    ];
    // pabs.forEach(el => {
    //   dbo.collection("bt4").insert(el);
    // })

    let pfastfood = [
      {
      instagram: "https://instagram.com/kaz_blackstarburger/",
      adress_url: "https://yandex.kz/maps/162/almaty/house/Y08YfwVlS0EDQFppfX51cX1gZg==/?ll=76.925244%2C43.240132&z=16",
      name: "Black Star Burger",
      description: "#СоччныйМощщный теперь в Казахстане!",
      img_url: "pabs/jazzbar.jpg",
      food: "Европейская",
      adress: "г. Алматы, ул. ​Казыбек би, 65 (пр. Назарбаева)",
      time: "пн-вс 12:00–00:00", 
      money:"4500-7000 тг",
      sets:"350",
    },
    {
      instagram: "https://www.instagram.com/overpack_lounge_bar/",
      adress_url: "https://yandex.kz/maps/162/almaty/house/Y08Yfg5oQUYDQFppfX5xeHhgYA==/?ll=76.898834%2C43.209434&z=16",
      name: "Overpack",
      description: "Overpack",
      img_url: "pabs/overack.jpg",
      food: "Европейская",
      adress: "г. Алматы, пр. ​Гагарина, 250 (уг. Ходжанова)",
      time: "пн-вс 11:00–22:00",
      money:"3000-4500 тг",
      sets:"70",
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
      money:"3000-4500 тг",
      sets:"50",
    },
    ];
    pabs.forEach(el => {
      dbo.collection("bt4").insert(el);
    })
  });

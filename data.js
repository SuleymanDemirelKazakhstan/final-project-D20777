var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,
 {
     useUnifiedTopology: true, 
     useNewUrlParser: true
  },
 function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  let newCafe = [{instagram:"https://instagram.com/littlebrazil_almaty/",adress_url:"https://yandex.kz/maps/162/almaty/house/Y08YfwViTEEOQFppfX5wcn1jZA==/?ll=76.922549%2C43.213100&z=16",name:"Little Brazil", description:"Первый Уникальный в Казахстане Бразильский мясной ресторан Little Brazil Churrasco Grill – несет в себе Яркий Бразильский, латино-американский дух и атмосферу динамики.", img_url:"newCafe/littleBrazil.jpg", food:"Латино-американская", adress:"г. Алматы, пр. Аль-Фараби, 140а/4 (Villa boutiques & restaurants)",time:"пн-чт 12:00–02:00; пт-сб 12:00–04:00; вс 12:00–02:00", money:"10000-15000 тг", sets:"240"},
{instagram:"https://www.instagram.com/est.hinkali/",adress_url:"https://yandex.kz/maps/162/almaty/house/Y08YfwFhTEUOQFppfX50dHpgYg==/?ll=76.961509%2C43.255636&z=16",name:"Есть Хинкали, Пить Вино", description:"Современный взгляд на Грузинскую кухню. Вас ждут 15 видов хинкали. Ресторан открылся в августе 2020.", img_url:"newCafe/hinkali.jpg", food:"Грузинская",adress:"г. Алматы, ​Толе би, 4Б (уг. Каирбекова)",time:"пн-вс 12:00–01:00", money:"3000-4500 тг", sets:"40"},
{instagram:"https://instagram.com/loopita_bar/",adress_url:"https://yandex.kz/maps/162/almaty/house/Y08YfwNkQU0GQFppfX50c3RgZg==/?ll=76.944882%2C43.252832&z=16",name:"Loopita", description:"Мексиканский бар Loopita открылся в июле 2020.", img_url:"newCafe/loopita.jpg", food:"Мексиканская",adress:"г. Алматы, ул. Панфилова, 125 (уг. Богенбай батыра)"time:"пн-вс 12:00–22:00", money:"3000-4500 тг", sets:"40"},
{instagram:"https://instagram.com/ktown_almaty/",adress_url:"https://yandex.kz/maps/162/almaty/house/Y08YfwNmQUAPQFppfX50eXlmYw==/?ll=76.946858%2C43.258558&z=16",name:"K-town", description:"Рестобар с корейской кухней открылся в сентябре 2020.", img_url:"newCafe/k-town.jpg", food:"Корейская, Европейская",adress:"г. Алматы, у​л. Айтеке би, 53 (уг. Назарбаева)"},
{instagram:"https://instagram.com/malenkiy_princ_almaty/",adress_url:"https://yandex.kz/maps/162/almaty/house/Y08YfgBhSUYGQFppfX51eH5iYA==/?ll=76.871031%2C43.249214&z=16",name:"Маленький принц", description:"Детский ресторан Маленький принц приглашает в гости. Заведение открылось в июле 2020.", img_url:"newCafe/litprince.jpg", food:"Европейская",adress:"г. Алматы, ул. ​Толе би, 265​ (уг. Тлендиева)"},
{instagram:"https://www.instagram.com/cocos_restobar/",adress_url:"https://yandex.kz/maps/162/almaty/house/Y08YfwJkT0wGQFppfX5zdHhjYQ==/?ll=76.954691%2C43.225405&z=16",name:"Cocos", description:"Коктейльный бар с вкуснейшей кухней открылся в августе 2020.", img_url:"newCafe/cocos.jpg", food:"Европейская, Азиатская",adress:"г. Алматы, ул. Кажымукана, 49 (​ЖК Royal​)"},
];
  var size = newCafe.length;
  newCafe.forEach(el => {
  	dbo.collection("new").insert(el);
  })
});

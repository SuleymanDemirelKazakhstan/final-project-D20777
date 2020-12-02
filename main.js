let about = document.querySelector(".about");
about.addEventListener('click', f1);
let information = document.querySelector(".information");
function f1(){
  information.innerHTML = "";
  information.style.display  = "block";
  sector.style.display = "none";
  let inf = document.createElement("p");
  inf.textContent = "Добро пожаловать в Caffe Cupitor. Здесь вы можете нацти информацию о ";
  information.appendChild(inf);
  let logo = document.createElement("img");
  logo.src = "images/logo.png";
  logo.classList.add('logo');
  information.appendChild(logo);
}

let home = document.querySelector(".creative");
home.addEventListener('click',f2);
function f2(){
  information.innerHTML = "";
  information.style.display  = "none";
  sector.style.display = "none";
}

let newC = document.querySelector(".new");
newC.addEventListener('click', f3);
let newCafe = [{instagram:"https://instagram.com/littlebrazil_almaty/",adress_url:"https://yandex.kz/maps/162/almaty/house/Y08YfwViTEEOQFppfX5wcn1jZA==/?ll=76.922549%2C43.213100&z=16",name:"Little Brazil", description:"Первый Уникальный в Казахстане Бразильский мясной ресторан Little Brazil Churrasco Grill – несет в себе Яркий Бразильский, латино-американский дух и атмосферу динамики.", img_url:"newCafe/littleBrazil.jpg", food:"Латино-американская", adress:"г. Алматы, пр. Аль-Фараби, 140а/4 (Villa boutiques & restaurants)"},
{instagram:"https://www.instagram.com/est.hinkali/",adress_url:"https://yandex.kz/maps/162/almaty/house/Y08YfwFhTEUOQFppfX50dHpgYg==/?ll=76.961509%2C43.255636&z=16",name:"Есть Хинкали, Пить Вино", description:"Современный взгляд на Грузинскую кухню. Вас ждут 15 видов хинкали. Ресторан открылся в августе 2020.", img_url:"newCafe/hinkali.jpg", food:"Грузинская",adress:"г. Алматы, ​Толе би, 4Б (уг. Каирбекова)"},
{instagram:"https://instagram.com/loopita_bar/",adress_url:"https://yandex.kz/maps/162/almaty/house/Y08YfwNkQU0GQFppfX50c3RgZg==/?ll=76.944882%2C43.252832&z=16",name:"Loopita", description:"Мексиканский бар Loopita открылся в июле 2020.", img_url:"newCafe/loopita.jpg", food:"Мексиканская",adress:"г. Алматы, ул. Панфилова, 125 (уг. Богенбай батыра)"},
{instagram:"https://instagram.com/ktown_almaty/",adress_url:"https://yandex.kz/maps/162/almaty/house/Y08YfwNmQUAPQFppfX50eXlmYw==/?ll=76.946858%2C43.258558&z=16",name:"K-town", description:"Рестобар с корейской кухней открылся в сентябре 2020.", img_url:"newCafe/k-town.jpg", food:"Корейская, Европейская",adress:"г. Алматы, у​л. Айтеке би, 53 (уг. Назарбаева)"},
{instagram:"https://instagram.com/malenkiy_princ_almaty/",adress_url:"https://yandex.kz/maps/162/almaty/house/Y08YfgBhSUYGQFppfX51eH5iYA==/?ll=76.871031%2C43.249214&z=16",name:"Маленький принц", description:"Детский ресторан Маленький принц приглашает в гости. Заведение открылось в июле 2020.", img_url:"newCafe/litprince.jpg", food:"Европейская",adress:"г. Алматы, ул. ​Толе би, 265​ (уг. Тлендиева)"},
{instagram:"https://www.instagram.com/cocos_restobar/",adress_url:"https://yandex.kz/maps/162/almaty/house/Y08YfwJkT0wGQFppfX5zdHhjYQ==/?ll=76.954691%2C43.225405&z=16",name:"Cocos", description:"Коктейльный бар с вкуснейшей кухней открылся в августе 2020.", img_url:"newCafe/cocos.jpg", food:"Европейская, Азиатская",adress:"г. Алматы, ул. Кажымукана, 49 (​ЖК Royal​)"},
];
let sector = document.querySelector(".sector");
let second = document.querySelector(".second");

let id = 0;
function f3(){
  sector.innerHTML = "";
  information.innerHTML = "";
   information.style.display  = "block";
  sector.style.display = "block";
  let aboutNew = document.createElement("p");
  aboutNew.classList.add("aboutNew");
  aboutNew.textContent = "6 новых ресторанов и кафе в Алматы, лето-осень 2020";
  information.appendChild(aboutNew);

  let aboutNewCafe = document.createElement("p");
  aboutNewCafe.classList.add("aboutNewCafe");
  aboutNewCafe.textContent = "Предлагаем Вашему вниманию подборку самых новых заведений, открывшихся в Алматы этим летом, а также в самом начале осени. Многие из этих заведений уже успели полюбиться жителям города. Все заведения без исключения, рекомендуются нами к посещению";
  information.appendChild(aboutNewCafe);

  let arrow = document.createElement("div");
  arrow.classList.add("arrow");
  information.appendChild(arrow);
  let span1 = document.createElement("span");
  arrow.appendChild(span1);
  let span2= document.createElement("span");
  arrow.appendChild(span2);
  let span3 = document.createElement("span");
  arrow.appendChild(span3);
  for (let i = 0; i < newCafe.length; i++) {
   let cart = document.createElement("div");
   cart.classList.add("cart");
   sector.appendChild(cart);
   cart.id = id++;

   let name = document.createElement("a");
   name.textContent = newCafe[i].name;
   name.href = newCafe[i].instagram;
   name.classList.add("name");
   cart.appendChild(name);

   let description = document.createElement("p");
   description.textContent = newCafe[i].description;
   description.classList.add("description");
   cart.appendChild(description);

   let img = document.createElement("img");
   img.classList.add("img");
   img.src = newCafe[i].img_url;
   cart.appendChild(img);

   let food = document.createElement("p");
   food.classList.add("food");
   food.textContent = newCafe[i].food;
   cart.appendChild(food); 

   let adress = document.createElement("a");
   adress.classList.add("adress");
   adress.textContent = newCafe[i].adress;
   adress.href = newCafe[i].adress_url;
   cart.appendChild(adress);
  }

} 
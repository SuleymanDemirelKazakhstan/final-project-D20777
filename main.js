let about = document.querySelector(".about");
about.addEventListener('click', f1);
let information = document.querySelector(".information");
function f1(){
  information.innerHTML = "";
  information.style.display  = "block";
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
let newCafe = [
{name:"Little Brazil", description:"Первый Уникальный в Казахстане Бразильский мясной ресторан Little Brazil Churrasco Grill – несет в себе Яркий Бразильский, латино-американский дух и атмосферу динамики.", img_url:"newCafe/littleBrazil.jpg", food:"Латино-американская", adress:" г. Алматы, пр. Аль-Фараби, 140а/4 (Villa boutiques & restaurants)"}
];
let sector = document.querySelector(".sector");
let second = document.querySelector(".second")
function f3(){
  sector.innerHTML = "";
  information.style.display  = "none";
  sector.style.display = "block";
  for (let i = 0; i < newCafe.length; i++) {
   let cart = document.createElement("div");
   cart.classList.add("cart");
   sector.appendChild(cart);
   let name = document.createElement("p");
   name.textContent = newCafe[i].name;
   cart.appendChild(name);
   let description = document.createElement("p");
   description.textContent = newCafe[i].description;
   cart.appendChild(description);
   let img = document.createElement("img");
   img.src = newCafe[i].img_url;
   cart.appendChild(img);
  }
  



} 
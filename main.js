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
let newCafe = [];
fetch("http://localhost:3000/info/newCafe").then(res => {
  res.json().then(data=>{
    newCafe = data;
  })
})
let sector = document.querySelector(".sector");
let second = document.querySelector(".second");
let id = 0;

let nameClick = document.querySelectorAll(".name");
for (var i = 0; i < nameClick.length; i++) {
  nameClick[i].addEventListener('click', infoAboutCafe);
}
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
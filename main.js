let about = document.querySelector(".about");
about.addEventListener('click', f1);
let information = document.querySelector(".information");
function f1() {
  information.innerHTML = "";
  information.style.display = "block";
  sector.style.display = "none";
  let inf = document.createElement("p");
  inf.textContent = "Добро пожаловать в Caffe Cupitor. Здесь вы можете найти информацию о различных заведениях, которые находятся в городе Алматы. Все новые, а также популярные заведения разных категории можете увидеть только здесь. ";
  inf.classList.add("inf");
  information.appendChild(inf);
  let logo = document.createElement("img");
  logo.src = "images/logo.png";
  logo.classList.add('logo');
  information.appendChild(logo);
}

let home = document.querySelector(".creative");
home.addEventListener('click', f2);
function f2() {
  information.innerHTML = "";
  information.style.display = "none";
  sector.style.display = "none";
}

let newC = document.querySelector(".new");
newC.addEventListener('click', f3);
let newCafe = [];
fetch("http://localhost:3000/info/new").then(res => {
  res.json().then(data => {
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
function f3() {
  sector.innerHTML = "";
  information.innerHTML = "";
  information.style.display = "block";
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
  let span2 = document.createElement("span");
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

    let time = document.createElement("p");
    time.classList.add("time");
    time.textContent = newCafe[i].time;
    cart.appendChild(time);

    let money = document.createElement("p");
    money.classList.add("money");
    money.textContent = newCafe[i].money;
    cart.appendChild(money);

    let set = document.createElement("p");
    set.classList.add("set");
    set.textContent = newCafe[i].sets;
    cart.appendChild(set);
  }
}


let buttons = document.querySelectorAll(".foods");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', getData);
  buttons[i].id = "bt" + (i + 1);
}
function getData(event){
  
fetch("http://localhost:3000/info/" + event.target.id).then(res => {
  res.json().then(data => {

    // console.log(event.target.id);
    f4(data,event.target.id);
    
  })
  })
}

function f4(delivering,idType) {
  sector.innerHTML = "";
  information.innerHTML = "";
  information.style.display = "block";
  sector.style.display = "block";

  let price = document.createElement('div');
  price.classList.add("price");
  information.appendChild(price);
  let b1 = document.createElement('button');
  b1.textContent = "700-1500 тг";
  b1.classList.add("filt");
  price.appendChild(b1);
  let b2 = document.createElement('button');
  b2.textContent = "1500-3000 тг";
  b2.classList.add("filt");
  price.appendChild(b2);
  let b3 = document.createElement('button');
  b3.textContent = "3000-4500 тг";
  b3.classList.add("filt");
  price.appendChild(b3);
  let b4 = document.createElement('button');
  b4.textContent = "4500-7000 тг";
  b4.classList.add("filt");
  price.appendChild(b4);
  let b5 = document.createElement('button');
  b5.textContent = "7000-10000 тг";
  b5.classList.add("filt");
  price.appendChild(b5);
  let filte = document.querySelectorAll(".filt");
  for (var i = 0; i < filte.length; i++) {
    filte[i].addEventListener('click', filtering);
  }

  for (let i = 0; i < delivering.length; i++) {
    let cart = document.createElement("div");
    cart.classList.add("cart");
    sector.appendChild(cart);
    cart.id = id++;


    let name = document.createElement("a");

    name.textContent = delivering[i].name;
    name.href = "elementPage.html?id="+idType+"&name=" + name.textContent;
    name.classList.add("name");
    cart.appendChild(name);


    let description = document.createElement("p");
    description.textContent = delivering[i].description;
    description.classList.add("description");
    cart.appendChild(description);

    let img = document.createElement("img");
    img.classList.add("img");
    img.src = delivering[i].img_url;
    cart.appendChild(img);

    let food = document.createElement("p");
    food.classList.add("food");
    food.textContent = delivering[i].food;
    cart.appendChild(food);

    let adress = document.createElement("a");
    adress.classList.add("adress");
    adress.textContent = delivering[i].adress;
    adress.href = delivering[i].adress_url;
    cart.appendChild(adress);

    let time = document.createElement("p");
    time.classList.add("time");
    time.textContent = delivering[i].time;
    cart.appendChild(time);
    if(delivering[i].site){
    let site = document.createElement("a");
    site.textContent = delivering[i].site;
    site.href = "http://"+delivering[i].site + "/";
    site.classList.add("site");
    cart.appendChild(site);
    }
    else{
      let money = document.createElement("p");
      money.classList.add("money");
      money.textContent = delivering[i].money;
      cart.appendChild(money);
  
      let set = document.createElement("p");
      set.classList.add("set");
      set.textContent = delivering[i].sets;
      cart.appendChild(set);
    }
    }

  }

function filtering(event){
  const arr = document.querySelectorAll(".cart");
  for (var i = 0; i < arr.length; i++) {
    const cost = arr[i].querySelector(".money");
    if(!cost || cost.textContent === event.currentTarget.innerHTML ){
      arr[i].style.display = "flex";
    }
    else{
      arr[i].style.display = "none";
    }
  }
}


let contacts = document.querySelector(".contact");
contacts.addEventListener('click', contact);

function contact(){
  sector.innerHTML = "";
  information.innerHTML = "";
  information.style.display = "block";
  sector.style.display = "none";
  let text = document.createElement("p");
  text.innerHTML =  "Вы знаете хорошие заведения в городе Алматы? Тогда вы можете поделиться с информацией с нами, написав нам на почту. Или позвонив нам по данному номеру"+ "<br>" + "Контактный номер: +7 756 365 70 21" + "<br>" + "Mail: cupitor@gmail.com";
  text.classList.add("inf");
  information.appendChild(text);
  let logo = document.createElement("img");
  logo.src = "images/logo.png";
  logo.classList.add('logo');
  information.appendChild(logo);
}
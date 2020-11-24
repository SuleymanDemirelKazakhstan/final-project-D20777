
let forStudy = [{title: "Angel In Us", image:"study/angelinus.jpg", instagram:"https://instagram.com/angelinuscoffee_kz/",description1:"Время работы: пн-вс 10:00-22:00 ", description2:"Средний счёт: 1500-3000 тг"},
{title: "Cafeteria", image:"study/cafeteria.jpg", instagram:"https://www.instagram.com/cafeteria_almaty/",description1:"Время работы: пн-вс 10:00–20:00", description2:"Средний счёт: 1500-3000 тг"},
{title: "Bowler Coffee Roasters", image:"study/bowlercoffee.jpg", instagram:"https://www.instagram.com/bowler_coffeeroasters/",description1:"Время работы: пн-вс 08:00–20:00 ", description2:"Средний счёт: 700-1500 тг"}];
let click1 = document.querySelector(".active");
click1.addEventListener('click', fS);
function fS(){
  let mainSection = document.querySelector(".main_section");
  mainSection.innerHTML = "";

  for (let i = 0; i < forStudy.length; i++) {
  let div2 = document.createElement('div');
  div2.classList.add("card");
  mainSection.appendChild(div2);
  let title = document.createElement('p');
  title.textContent= forStudy[i].title;
  title.classList.add("title");
  div2.appendChild(title); 
  let image = document.createElement('img');
  image.src = forStudy[i].image;
  image.classList.add("cafe");
  div2.appendChild(image);
  let instagram = document.createElement('a');
  instagram.textContent = "instagram";
  instagram.href = forStudy[i].instagram;
  instagram.classList.add("instagram");
  div2.appendChild(instagram);
  console.log(instagram);
  let description1 = document.createElement('p');
  description1.textContent = forStudy[i].description1;
  description1.classList.add("description");
  div2.appendChild(description1);
  let description2 = document.createElement('p');
  description2.textContent = forStudy[i].description2;
  description2.classList.add("description");
  div2.appendChild(description2);
}
}

let friday = [{title: "TabakOFF Hookah Bar", image:"friday/hookahLoungeBar.jpg", instagram:"https://www.instagram.com/tabakoff.kz/",description1:"Время работы: пн-вс 15:00–03:00", description2:"Средний счёт: 3000-4500 тг"},
{title: "Lugo Bar", image:"friday/lugoBar.jpg", instagram:"https://instagram.com/lugo_almaty/",description1:"Время работы: пн-вс 12:00–03:00", description2:"Средний счёт: 3000-4500 тг"},
{title: "Awesome Bar", image:"fridaawesome.jpg", instagram:"https://www.instagram.com/awesome_bar/",description1:"Время работы: пн-вс 07:00–03:00", description2:"Средний счёт: 3000-4500 тг"}];
let click2 = document.querySelector(".friday");
click2.addEventListener('click', fR);
function fR(){
  let mainSection = document.querySelector(".main_section");
  mainSection.innerHTML = "";

  for (let i = 0; i < friday.length; i++) {
  let div2 = document.createElement('div');
  div2.classList.add("card");
  mainSection.appendChild(div2);
  let title = document.createElement('p');
  title.textContent= friday[i].title;
  title.classList.add("title");
  div2.appendChild(title); 
  let image = document.createElement('img');
  image.src = friday[i].image;
  image.classList.add("cafe");
  div2.appendChild(image);
  let instagram = document.createElement('a');
  instagram.textContent = "instagram";
  instagram.href = friday[i].instagram;
  instagram.classList.add("instagram");
  div2.appendChild(instagram);
  console.log(instagram);
  let description1 = document.createElement('p');
  description1.textContent = friday[i].description1;
  description1.classList.add("description");
  div2.appendChild(description1);
  let description2 = document.createElement('p');
  description2.textContent = friday[i].description2;
  description2.classList.add("description");
  div2.appendChild(description2);
}
}
let click = document.querySelector(".mainPage");
click.addEventListener('click',main);
function main(){
  let mainSection = document.querySelector(".main_section");
  mainSection.innerHTML = "";
  let cafe = document.createElement('img');
  cafe.src = "cupitor.jpg";
  cafe.classList.add("cupitor");
  mainSection.appendChild(cafe);
  
}


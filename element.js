let back = document.querySelector(".triangle-left");
back.addEventListener('click', goBack);
function goBack(){
    history.go(-1);
}
// let center = document.querySelector(".center");
const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const id= urlParams.get('id')
console.log(id);
const name= urlParams.get('name')
console.log(name);
fetch("http://localhost:3000/info/" + id + "/" + name).then(res => {
  res.json().then(data => {
    f4(data[0]);
  })
})

  let information = document.querySelector(".information");
  let cat = document.querySelector(".categories");
function f4(delivering) {

  information.innerHTML = "";
  information.style.border="none";
  information.style.display = "block";
    let cart = document.createElement("div");
    cart.classList.add("cart");
    cat.appendChild(cart);
    let name = document.createElement("a");

    name.textContent = delivering.name;
    name.classList.add("name");
    cart.appendChild(name);


    let description = document.createElement("p");
    description.textContent = delivering.description;
    description.classList.add("description");
    cart.appendChild(description);

    let img = document.createElement("img");
    img.classList.add("img");
    img.src = delivering.img_url;
    cart.appendChild(img);

    let secondCart = document.createElement("div");
    information.appendChild(secondCart);

    let food = document.createElement("p");
    food.classList.add("food");
    food.textContent = delivering.food;
    secondCart.appendChild(food);

    let adress = document.createElement("a");
    adress.classList.add("adress");
    adress.textContent = delivering.adress;
    adress.href = delivering.adress_url;
    secondCart.appendChild(adress);

    let time = document.createElement("p");
    time.classList.add("time");
    time.textContent = delivering.time;
    secondCart.appendChild(time);

    let pay = document.createElement("p");
    pay.textContent = delivering.pay;
    pay.classList.add("pay");
    secondCart.appendChild(pay);

    let car = document.createElement("p");
    car.textContent = delivering.car;
    car.classList.add("car");
    secondCart.appendChild(car);
    let instagram = document.createElement("a");
    instagram.innerHTML = "Instagram"+ "<br>";
    instagram.href = delivering.instagram;
    instagram.classList.add("instagram");
    secondCart.appendChild(instagram);

    let features = document.createElement("p");
    features.textContent = delivering.features;
    features.classList.add("features");
    secondCart.appendChild(features);

    


    if(delivering.site){
    let site = document.createElement("a");
    site.textContent = delivering.site;
    site.href = "http://"+delivering.site + "/";
    site.classList.add("site");
    secondCart.appendChild(site);
    }
    else{
      let money = document.createElement("p");
      money.classList.add("money");
      money.textContent = delivering.money;
      secondCart.appendChild(money);
  
      let set = document.createElement("p");
      set.classList.add("set");
      set.textContent = delivering.sets;
      secondCart.appendChild(set);
    }
    }

  
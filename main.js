let about = document.querySelector(".about");
about.addEventListener('click',f1);

let main = document.querySelector(".centre");
let information = document.querySelector(".information");
function f1(){
  information.innerHTML = "";
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
}
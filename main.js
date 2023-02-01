// console.log("hello");

// var title = document.getElementById("title");
// console.log(title);
// var paras = document.getElementsByClassName("para");
// console.log(paras);
// var input = document.getElementsByTagName("input");
// console.log(input);
// var title = document.querySelector("#title");
// console.log(title);
// var div = document.querySelector("div");
// console.log(div.innerText);

// title.style.color = "red";
// var para = document.querySelectorAll(".para");
// console.log(para);

// var btn = document.querySelector(".submit");
// var input = document.querySelector("input");
// function handleAlert() {
//   alert("Nawress");
// }
// btn.addEventListener("click", function () {
//   alert("Hello " + input.value);
// });

// var btnPlus = document.querySelector(".btnPlus");
// var quantity = document.querySelector(".quantity");
// var btnMinus = document.querySelector(".btnMinus");

// btnPlus.addEventListener("click", function () {
//   //   quantity.innerText = Number(quantity.innerText) + 1;
//   quantity.innerText++;
// });

// btnMinus.addEventListener("click", function () {
//   if (quantity.innerText > 0) {
//     quantity.innerText--;
//   }
// });

var btnsPlus = document.querySelectorAll(".btnPlus");
var btnsMinus = document.querySelectorAll(".btnMinus");
var quantities = document.querySelectorAll(".quantity");

for (let i = 0; i < btnsPlus.length; i++) {
  btnsPlus[i].addEventListener("click", function () {
    quantities[i].innerText++;
  });
}
for (let i = 0; i < btnsMinus.length; i++) {
  btnsMinus[i].addEventListener("click", function () {
    if (quantities[i].innerText > 0) {
      quantities[i].innerText--;
    }
  });
}

const pass = document.querySelector(".password");
const msg = document.querySelector(".message");
const str = document.querySelector("#strength");
const btn = document.querySelector(".toggler");
// conditions
var nums=/^[0-9]+$/
var characters=/^[a-zA-Z]+$/
var combinecharnum=/^[a-z0-9]+$/
var uppercharnum=/^[0-9A-Z]+$/
var combinespecialcharnum=/[0-9A-Z!@#$%^&*(),.?":{}|<>]+$/
pass.addEventListener("input", () => {
 if (pass.value.length > 0) {
 msg.style.display = "block";
 } else {
 msg.style.display = "none";
 }
 if ((pass.value.match(nums) || pass.value.match(characters)) && pass.value.length < 7) {
 if(pass.value.length<7)
 str.innerText = "weak";
 pass.style.borderColor = "red";
 msg.style.color = "red";
 } else if ((pass.value.match(combinecharnum)) && pass.value.length < 10) {
 str.innerText = "medium";
 pass.style.borderColor = "orange";
 msg.style.color = "orange";
 } else if ((pass.value.match(uppercharnum)) && pass.value.length < 16) {
 str.innerText = "strong";
 pass.style.borderColor = "blue";
 msg.style.color = "blue";
 } else if ((pass.value.match(combinespecialcharnum)) && pass.value.length > 16) {
 str.innerText = "uncrackable";
 pass.style.borderColor = "#26d730";
 msg.style.color = "#26d730";
 }
 if (pass.value.startsWith(" ")) {
 str.innerText = "Password can't start with space !";
 pass.value = "";
 }
});

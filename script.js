//Global Vars
const header = document.querySelector('header')
const addButton = document.querySelector(".add-button");
const textBox = document.querySelector(".text-field");
const listWrapper = document.querySelector(".list-wrapper");

const mainList = document.querySelector(".list-wrapper");
const mainListChildren = mainList.getElementsByTagName('div');

//Listeners
addButton.addEventListener("click", newListItem);
textBox.addEventListener("keydown", function (event) {
  if (event.key === 'Enter') {newListItem()} 
  });

//core app functionality 
function newListItem () {
  //checks for user text input in textBox
  if (textBox.value) {
    var uniq = 'id' + (new Date()).getTime(); // a simple way to get a unique id based on time but could cause collisions if you were quick to spam submit.
    const element = `<div class="list-item"> <p id="${uniq}"> </p> </div>`

    listWrapper.innerHTML+= element
    const mainList = document.getElementById(uniq);
    mainList.textContent = `${mainListChildren.length}. ${textBox.value}`;
  };
  textBox.value = "";
};
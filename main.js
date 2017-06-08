

var title = document.createElement('h1');
title.textContent = 'Sign up for my web app';
var container = document.querySelector('#container');
container.appendChild(title);

for (var i = 0; i <formData.length; i++) {

 var control = formData[i];
  if (control.type === "textarea") {
    var inputElement = document.createElement('textarea');

 }else if (control.type === "select") {
    var inputElement = document.createElement('select');

 }
  else {
    var inputElement = document.createElement('input');

 }

 inputElement.id = control.id;
  inputElement.type = control.type;
  inputElement.placeholder = control.label;
  container.appendChild(inputElement);
  }
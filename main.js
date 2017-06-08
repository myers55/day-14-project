

var title = document.createElement('h1');
title.textContent = 'Sign up for my web app';
var container = document.querySelector('#container');
container.appendChild(title);

for ( var i = 0; i < formData.length; i++){
    var control = formData[i];
var input = document.createElement('input');
input.id = control.id;
input.type = control.type;
input.placeholder = control.label;
var label = document.createElement("label");
    label.setAttribute('for', control.id);
    container.appendChild(label);
    container.appendChild(input);
    if(input.type === "email"){
        
}
container.appendChild(input)
}

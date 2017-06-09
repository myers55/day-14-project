// The Form Data
// Write your code below this array
let formData = [
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current website url",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// Hints -----------

// Accessing specific properties.
//formData[0].label // this will give us "First Name"
// as you can see we access the first element in the array
// with [0] and then grab the property "label" using the "." character

// Looping
// Sample of how to loop over the formData
//for(let i=0; i<formData.length; i++){

  // Check your dev tools console for what the items in formData have
  //console.log(formData[i])




// -------- Your Code Goes Here --------


var container = document.querySelector('.fields');


for (var i = 0; i <formData.length; i++) {

 var control = formData[i];
  if (control.type === "textarea") {
    var inputElement = document.createElement('textarea');

 }else if (control.type === "select") {
    var inputElement = document.createElement('select');

    for( var j = 0; j < control.options.length; j++){

      var optionElemet = document.createElement('option');

      optionElemet.label = formData[i].options[j].label;
      optionElemet.value = formData[i].options[j].value;
      inputElement.appendChild(optionElemet);
  }

 }
  else {
    var inputElement = document.createElement('input');

 }

 inputElement.id = control.id;
  inputElement.type = control.type;
  inputElement.placeholder = control.label;
  container.appendChild(inputElement);
  }
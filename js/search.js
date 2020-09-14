alert("Codice js innestato, controlla la console...");

let oldBody = document.body;
let newBody = document.createElement("body");

let img = document.createElement("img");
let att = document.createAttribute("src");
att.value = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Badge_js-strict.svg/555px-Badge_js-strict.svg.png";
img.setAttributeNode(att); 
newBody.appendChild(img);

document.body = newBody;

let source = document.createElement("source");
let att1 = document.createAttribute("src");
//att1.value = "https://code.jquery.com/jquery-3.5.0.min.js";
source.setAttributeNode(att1);

document.body.appendChild(source);

console.log(oldBody);
console.log("Vecchio <body>");

//console.log($('img'));
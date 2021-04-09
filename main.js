var i = 1;
var j=1;
var ii = 1;
var admin = 1;
function start() {
    i = i * (-1);
    if (i < 0)
    {
    document.getElementById('flymenu').setAttribute('style', 'display: block');
    document.getElementById("photo").src="photos/def.png";
    }
    else {
        document.getElementById('flymenu').setAttribute('style', 'display: none');
        document.getElementById("photo").src="photos/menu.png";
    }
};
function reg() {
    j = j * (-1);
    if (j < 0)
    {
    document.getElementById('flymenu2').setAttribute('style', 'display: block');
    }
    else {
        document.getElementById('flymenu2').setAttribute('style', 'display: none');
    }
};
function mail() {
    ii = ii * (-1);
    if (ii < 0)
    {
    document.getElementById('mail').setAttribute('style', 'display: block');
    }
    else {
        document.getElementById('mail').setAttribute('style', 'display: none');
    }
};

function adm() {
    admin = admin * (-1);
    if (admin < 0)
    {
    document.getElementById('users').setAttribute('style', 'visibility: visible');
    document.getElementById('users2').setAttribute('style', 'visibility: visible');
    }
    else {
      document.getElementById('users').setAttribute('style', 'visibility: hidden');
        document.getElementById('users2').setAttribute('style', 'visibility: hidden');
    }
};
var x = document.getElementById("contain");

x.addEventListener("click", myFunction);

function myFunction() {
  var element = document.getElementById("nav");
  element.classList.toggle("open");
  
  x.classList.toggle("change");
};


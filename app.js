'use strict';

var img = new Image();
img.src = "./img/hr-img.png"
for (var i = 0; i < 10; i++) {      
   document.body.appendChild(img)
}
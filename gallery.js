$(document).ready(function() { 

    $(".image").click(function(){    
          var img = $(this);    // Получаем изображение, на которое кликнули
        var src = img.attr('src'); // Достаем из этого изображения путь до картинки
        $("body").append("<div class='main-gallery' id='mg'>"+ 
                         "<div class='main-gallery-bg'></div>"+ 
                         "<img src='"+src+"' class='gallery_img' />"+ 
                         "</div>"); 
        $(".main-gallery").fadeIn(800); // Медленно выводим изображение
        $(".main-gallery-bg").click(function(){    // Событие клика на затемненный фон
            $(".main-gallery").fadeOut(800);    // Медленно убираем всплывающее окно
            setTimeout(function() {    
              $(".main-gallery").remove(); // Удаляем разметку всплывающего окна
            }, 800);
        });
    });
});

let viewport = document.getElementById("viewport").offsetWidth;
let btnNext = document.getElementById("next");
let btnPrev = document.getElementById("prev");
let slider = document.querySelector("div.slider");
let viewSliders = document.querySelectorAll(".viewSlide");
let viewSlide = 0;

viewSliders[0].style.backgroundColor = "#487eb0";

btnNext.addEventListener("click", function () {
    viewSliders[viewSlide].style.backgroundColor = "grey";
    if (viewSlide < 7) {
        viewSlide++;
    } else {
        viewSlide = 0;
    }
    viewSliders[viewSlide].style.backgroundColor = "#487eb0";
    slider.style.left = -viewSlide * viewport + "px";

});

btnPrev.addEventListener("click", function () {
    viewSliders[viewSlide].style.backgroundColor = "grey";
    if (viewSlide > 0) {
        viewSlide--;
    } else {
        viewSlide = 7;
    }
    viewSliders[viewSlide].style.backgroundColor = "#487eb0";
    slider.style.left = -viewSlide * viewport + "px";
});



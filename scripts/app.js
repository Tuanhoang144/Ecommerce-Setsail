const btnsearch = document.querySelector(".header-icon-search");
const modal = document.querySelector(".modal");
const btnclose = document.querySelector(".modal-icon");
const modalContainer = document.querySelector(".modal-container");

const activeClass = "open";


btnsearch.addEventListener("click" , () => {
    modal.classList.add(activeClass);
});

btnclose.addEventListener("click" , () => {
    modal.classList.remove(activeClass);
});

modal.addEventListener("click" , () => {
    modal.classList.remove(activeClass);
})

modalContainer.addEventListener('click' , function(event) {
    event.stopPropagation();
});


const listMap = document.querySelector(".list-map");
const onClickList = document.querySelector(".header-icon-list");
const closeListMap = document.querySelector(".list-map-close");

const activeClassMap = "is-show";

onClickList.addEventListener("click" , () => {
    listMap.classList.add(activeClassMap);
})
closeListMap.addEventListener("click" , () => {
    listMap.classList.remove(activeClassMap);
})

// slider 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


$(".service-list").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay:true,
    breakpoint: 1600,
    responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            arrows: false,
          },
        },
        {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              arrows: false,
            },
          },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
          },
        },
      ],
    });

$(".review-list").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
          },
        },
        {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              arrows: false,
            },
          },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
          },
        },
      ],
});


$(".user-imgs").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true,
    responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
          },
        },
        {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              arrows: false,
            },
          },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
          },
        },
      ],
});


// number
var $findme = $('#numbers');
var exec = false;
function Scrolled() {
  $findme.each(function() {
    var $section = $(this),
      findmeOffset = $section.offset(),
      findmeTop = findmeOffset.top,
      findmeBottom = $section.height() + findmeTop,
      scrollTop = $(document).scrollTop(),
      visibleBottom = window.innerHeight,
      prevVisible = $section.prop('_visible');

    if ((findmeTop > scrollTop + visibleBottom) ||
      findmeBottom < scrollTop) {
      visible = false;
    } else visible = true;

    if (!prevVisible && visible) {
    	if(!exec){
              $('.fig-number').each(function() {
          $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
          }, {
            duration: 1000,

            step: function(now) {
              $(this).text(Math.ceil(now));
              exec = true;
            }
          });
        });
      }
    }
    $section.prop('_visible', visible);
  });

}

function Setup() {
  var $top = $('#top'),
    $bottom = $('#bottom');

  $top.height(500);
  $bottom.height(500);

  $(window).scroll(function() {
    Scrolled();
  });
}
$(document).ready(function() {
  Setup();
});



const labelClick = document.querySelector('#sub3')
labelClick.addEventListener('click',(e)=>{
  console.log(e.target);
})

const hiddenClick = document.querySelectorAll('.hidden-click')
const myArray = Array.from(hiddenClick)

function abc(value){
  const myArrayfilter = myArray.filter(value1 => {
    return value1.matches(`${value}`)
  })

 const arr = myArray.filter(e => e !== myArrayfilter[0])
 arr.forEach(element => {
     element.checked = false
 })
}


const navToggleMobile = document.querySelector('.mobile-btn-nav')
const headerMenu = document.querySelector('.header-menu')
navToggleMobile.addEventListener('click',()=>{
  headerMenu.classList.toggle('is-show-nav-mobile')
  myArray.forEach(e => {
    e.checked = false
  })
})

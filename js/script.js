document.addEventListener("DOMContentLoaded", () => {
    const headerSlides = [
      "./assets/slides/banner_slides/img_vinyls.webp",
      "./assets/slides/banner_slides/collection_3.webp",
      "./assets/slides/banner_slides/collection_2.webp",
      "./assets/slides/banner_slides/collection.webp",
      "./assets/slides/banner_slides/bar.webp",
    ];
  
    const random = Math.floor(Math.random() * headerSlides.length);
  
    const target = document.querySelector(".banner-img");
    target.src = `${headerSlides[random]}`;
  });
  
/*const headerSlides = [
	{
		"image": "img_vinyls.webp",
	},
	{
		"image": "collection_3.webp",
	},
	{
		"image": "collection_2.webp",
	},
	{
		"image": "collection.webp",
	},
    {
		"image": "bar.webp",
	},
]; */

const mainSlides = [
    {
        "image": "muse_simulation_theory.webp",
        "alt": "album Muse Simulation Theory",
        "artiste": "muse",
        "album": "simulation theory "
    },
    {
        "image": "metallica_sm.webp",
        "alt": "album Metallica symphony & metallica",
        "artiste": "metallica",
        "album": "symphony & metallica"
    },
    {
        "image": "oasis_definitely_maybe.webp",
        "alt": "album Oasis definitely maybe",
        "artiste": "oasis",
        "album": "definitely maybe"
    },
    {
        "image": "the_doors_la_woman.webp",
        "alt": "album The Doors L.A woman",
        "artiste": "the doors",
        "album": "L.A woman"
    },
    {
        "image": "nirvana_nevermind.webp",
        "alt": "album Nirvana nevermind",
        "artiste": "nirvana",
        "album": "nevermind"
    },
];


/// Slides header 
/* const headerBanner = document.getElementById('banner');
const headerImg = document.querySelector('.banner-img');
const nbreImages = headerSlides.length;
let indexSlides = 0;

    const changeSlide = (indexSlides) => {
	if (indexSlides < 0)
    indexSlides = nbreImages.length - 1;
	if (indexSlides > nbreImages.length - 1)
    indexSlides = 0;
	headerImg.src = "./assets/slides/banner_slides/" + headerSlides[indexSlides].image;
        //mainSlider.style.transform = "translateX(" + (-100 * indexMainSlides) + "%)";

}

const interval = 5000;
const intervalSec = setInterval(() => {
	changeSlide(indexSlides);
	indexSlides++;
	    if(indexSlides > nbreImages -1) {
	    indexSlides = 0;
	}
}, interval); */


/// Main Slider 
const mainSlider = document.getElementById('main-slider');
const mainSliderImg = document.querySelector('.main-slider-img');
const artisteName = document.querySelector('h3');
const albumName = document.querySelector('h4');
const nbreSlides = mainSlides.length;
let indexMainSlides = 0;

const changeMainSlides = (indexMainSlides) => {
    if (indexMainSlides < 0)
    indexMainSlides = nbreSlides.length - 1;
	if (indexMainSlides > nbreSlides.length - 1)
    indexMainSlides = 0;
    //mainSliderImg.style.animation = "fadeinout";
    mainSliderImg.src = "assets/slides/main_slides/" + mainSlides[indexMainSlides].image;
    mainSliderImg.alt = mainSlides[indexMainSlides].alt;
    artisteName.innerHTML = mainSlides[indexMainSlides].artiste;
    albumName.innerHTML = mainSlides[indexMainSlides].album;
}

const intervalMain = 5000;
setInterval(() => {
	changeMainSlides(indexMainSlides);
	indexMainSlides++;
	    if(indexMainSlides > nbreSlides -1) {
	    indexMainSlides = 0;
	}
}, intervalMain); 


/// Products slider
/*const slidesContainer = document.getElementById("slides-container");
const slider = document.querySelector(".slider");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");
const interval2 = 5000;
const intervalSec2 = setInterval(() => {
	const slideWidth = slider.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
}, interval);

nextButton.addEventListener('click', (e) => {
    const slideWidth = slider.clientWidth;
      slidesContainer.scrollLeft += slideWidth;
  });
prevButton.addEventListener('click', (e) => {
    const slideWidth = slider.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
  }); 
*/



/// Bouton menu slider
const menuSlider = document.getElementById('menu-slider');
const btSlider = document.querySelector('.sliderbtn');
let i = 0;
btSlider.addEventListener('click', (e) => {
    btSlider.classList.toggle('change');

    if (i === 0) {
        menuSlider.style.animation = "anim-slider-on .7s forwards";
        i = 1;
    } else {
        menuSlider.style.animation = "anim-slider-off .7s forwards";
        i = 0;
    }
})



const delay = 10000;
const timeOut = setTimeout(() => {
	openModal(data, l, h);
}, delay);

window.addEventListener('click', () => {
	//clearTimeout(timeOut);
    closeModal();
})


/// Modal
    const data = "NEWSLETTER";
    const l = 520;
    const h = 400;

    const openModal = (data, l, h) => {
    const bodyTagDoc = document.body;
    const htmlModal = `
    <div id="modal">
        <div id="popup">
            <h4>${data}</h4>
            <p>Rejoignez vite le club "La Boite à Vinyles" pour recevoir les dernières nouveautés et exclusivités.
             Vous pourrez également accéder à notre forum de discussion et échanger sur tout l'univers du vinyle.</p>
            <a href="#" style="color: white; border: 2px solid white">INSCRIPTION</a>
        </div>
    </div>
    `;

    bodyTagDoc.insertAdjacentHTML('afterbegin', htmlModal);
    const modal = document.getElementById("modal");
    modal.style.width = "100vw";
    modal.style.height = "100vh";
    modal.style.background = "rgba(0,0,0,.6)";
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.position = "fixed";
    modal.style.zIndex = 100;

    const popup = document.getElementById('popup');
    popup.style.width = l + "px";
    popup.style.height = h + "px";
    popup.style.borderRadius = "30px";
    popup.style.border = "3px solid white";
    popup.style.background = "black";
    popup.style.color = "white";
    popup.style.fontSize = "20px";
    popup.style.display = "flex";
    popup.style.flexDirection = "column";
    popup.style.justifyContent = "space-evenly";
    popup.style.textAlign = "center";
    popup.style.padding = "30px";
    popup.style.position = "relative";
    popup.insertAdjacentHTML("afterbegin", '<div id="close">X</div>');

    const btClose = document.getElementById("close");
    btClose.style.position = "absolute";
    btClose.style.right = "20px";
    btClose.style.top = "10px";
    btClose.style.cursor = "pointer";
    btClose.style.color = "white";
    btClose.style.fontSize = "20px";
}


    const closeModal = () => {
    const modal = document.getElementById("modal");
    modal.remove();
}

// openModal(data, l, h);


const btClose = document.getElementById("close");
const modal = document.getElementById("modal");
// btClose.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
}) 

/*const delay = 10000;
const timeOut = setTimeout(() => {
	openModal(data, l, h);
}, delay);

window.addEventListener('click', () => {
	//clearTimeout(timeOut);
    closeModal();
})*/


/// Fleche back to top
const btToTop = document.getElementById("back-to-top");
        btToTop.style.display = 'none',
        btToTop.style.animation = "fadeIn .7s ease-in forwards";
        btToTop.addEventListener('click', (e) => {
            window.scrollTo({
                top:0,
                behavior:'smooth'
            })
        })

        window.addEventListener('scroll', ()=> {
            if(window.scrollY > 3000) {
                btToTop.style.display = 'block';
            } else {
                btToTop.style.display = 'none';
            }
        })


/// Dark/Light Mode
document.querySelectorAll('#dark-mode li').forEach(item => {
    item.addEventListener('click', darkMode);
    });
          
    function darkMode() {
    let body = document.querySelector('body');
    let mode = this.dataset.mode;
    body.dataset.theme = mode;
    }


/*const articlePop = document.getElementById("pop");
        articlePop.addEventListener('mouseover', (e) => {
        articlePop.style.transition = ".5s ease-in";
        //articlePop.style.transform = "rotateY(180deg)";
        //articlePop.style.backfaceVisibility = "hidden";
    })*/

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        centeredSlides: true,
        effect: 'fade',
        fadeEffect: {
            crossFade:true
        },
        autoplay: {
            delay: 5000,
          },
        
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

      /*let position = 0;
  let images = document.querySelectorAll(".main-slider img");
  console.log(images);
  setInterval(() => {
    // Met l'opacité de toutes les images à 0
    for (let i = 0; i < images.length; i++) {
      images[i].style.opacity = "0";
    }

    // Change la position de l'image actuelle
    position = position !== images.length - 1 ? position + 1 : 0;
  
    // Met l'opacité de l'image en cours à 1
    images[position].style.opacity = "1";
  }, 2500);*/
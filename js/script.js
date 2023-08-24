let slideList = document.querySelector('.gallery-list')
let slideItems = document.querySelectorAll('.gallery-item')

slideList.addEventListener('click', (e) => {
  let target = e.target;
  if (target.classList.contains('gallery-item')) {
    slideList.classList.add('slider-container');
    slideItems.forEach(item => item.classList.add('slide'));
  } else return
  slidesPlugin(target.id-1);
})

function slidesPlugin(activeSlide = 0) {

  const slides = document.querySelectorAll('.slide')

  slides[activeSlide].classList.add('active')

  for (const slide of slides) {
      slide.addEventListener('click', () => {
          clearActiveClasses();

          slide.classList.add('active');
      })
  }

  function clearActiveClasses () {
      slides.forEach((slide) => {
          slide.classList.remove('active');
      })
  }
}

let catalogList = document.querySelectorAll('.catalog-item');

catalogList.forEach(item => {
  item.addEventListener('click', (e) => {
    if (document.querySelector('.catalog-item-advanced')) {
      document.querySelector('.catalog-item-advanced').classList.remove('catalog-item-advanced');
    }

    if (e.target.classList.contains('button-close')) {
      return;
    }
    document.body.style.overflow = 'hidden';
    item.classList.add('catalog-item-advanced');
  })
})

let catalogButtons = document.querySelectorAll('.button-close');
catalogButtons.forEach(item => {
  item.addEventListener('click', (e) => {
    document.querySelector('.catalog-item-advanced').classList.remove('catalog-item-advanced');
    document.body.style.overflow = 'inherit';
  })
})


function burgerMenu(icon) {
  icon.classList.toggle("change");
}





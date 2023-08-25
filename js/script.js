// Open close menu

const menuButton = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu-container');
menuButton.addEventListener('click', () => {
  menu.classList.toggle('hidden');
})

function burgerMenu(icon) {
  icon.classList.toggle("change");
}


// Call form

const callForm = document.querySelector('.call');
const callButtonClose = document.querySelector('.call-button-close');
const callButtonHeader = document.querySelector('.btn-header');
const callButtonPrimary = document.querySelector('.primary-button');

callButtonHeader.addEventListener('click', () => {
  callForm.classList.remove('hidden');
  callForm.classList.add('call-visible');
})

callButtonPrimary.addEventListener('click', () => {
  callForm.classList.remove('hidden');
  callForm.classList.add('call-visible');
})

callButtonClose.addEventListener('click', () => {
  callForm.classList.add('hidden');
  callForm.classList.remove('call-visible');
})

document.addEventListener('click', (e) => {
  let call = document.querySelector('.call')
  let callContainer = call.querySelector('.call-container')
  if (call.classList.contains('call-visible')
   && !callContainer.contains(e.target)) {
    callForm.classList.add('hidden');
    callForm.classList.remove('call-visible');
  }
})

// Slider of photo gallery

let slideList = document.querySelector('.gallery-list')
let slideItems = document.querySelectorAll('.gallery-item')

slideList.addEventListener('click', (e) => {
  const breakpoint = window.matchMedia("(max-width: 767px)");
  if (breakpoint.matches) {
    return;
  }
  let target = e.target;
  if (target.classList.contains('gallery-item')) {
    slideList.classList.add('slider-container');
    slideItems.forEach(item => item.classList.add('slide'));
  }
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


document.addEventListener('click', (e) => {
  let catalogItemAdvanced = document.querySelector('.catalog-item-advanced')
  let catalogCard = catalogItemAdvanced.querySelector('.catalog-card')
  console.log(45);
  if (catalogItemAdvanced.classList.contains('catalog-item-advanced')
   && !catalogCard.contains(e.target)) {
    console.log(334);
    document.querySelector('.catalog-item-advanced').classList.remove('catalog-item-advanced');
    document.body.style.overflow = 'inherit';
  }
})

// Catalog order
let orderFormDiv


function createForm() {
  orderFormDiv = document.createElement('div');
  let orderDiv = addElement('div', '', 'order');
  let orderContainer = addElement('div', '', 'order-container');
  let orderWrapper = addElement('div', '', 'order-wrapper');
  let orderButton = addElement('button', '', 'order-button-close');
  let orderTitle = addElement('h2', 'Заполните форму', 'order-title');
  let orderForm = addElement('form', '', 'order-form');
  let labelName = addElement('label', 'Введите имя');
  let inputName = addElement('input', '', 'order-input');
  let labelEmail = addElement('label', 'Введите E-mail');
  let inputEmail = addElement('input', '', 'order-input');
  let labelPhone = addElement('label', 'Введите номер телефона');
  let inputPhone = addElement('input', '', 'order-input');

  
  orderFormDiv.appendChild(orderContainer);
  orderContainer.appendChild(orderWrapper);
  orderWrapper.appendChild(orderButton);
  orderWrapper.appendChild(orderTitle);
  orderWrapper.appendChild(orderForm);
  orderForm.appendChild(labelName);
  orderForm.appendChild(inputName);
  orderForm.appendChild(labelEmail);
  orderForm.appendChild(inputEmail);
  return orderFormDiv;
}

let orderForm = createForm()

document.querySelector('.header').appendChild(orderForm)


function addElement(tagName, content, tagClass) {
  let element = document.createElement(tagName);
  if (tagClass) element.classList.add(tagClass);
  if (content) element.insertAdjacentHTML ('beforeEnd', content);
  return element;
}
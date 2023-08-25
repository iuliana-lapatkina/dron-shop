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

// document.addEventListener('click', (e) => {
//   let callContainer = callForm.querySelector('.call-container')
//   if (callForm.classList.contains('call-visible')
//    && !callContainer.contains(e.target)) {
//     callForm.classList.add('hidden');
//     callForm.classList.remove('call-visible');
//   }
// })

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
  if (catalogItemAdvanced.classList.contains('catalog-item-advanced')
   && !catalogCard.contains(e.target)
   && !document.querySelector('.order').contains(e.target)) {
    document.querySelector('.catalog-item-advanced').classList.remove('catalog-item-advanced');
    document.body.style.overflow = 'inherit';
  }
})

// Catalog order
let orderDiv;

function createForm() {
  let orderDiv = addElement('div', '', 'order');
  let orderContainer = addElement('div', '', 'order-container');
  let orderWrapper = addElement('div', '', 'order-wrapper');
  let orderButtonClose = addElement('button', '', 'order-button-close');
  let orderTitle = addElement('h2', 'Оставить заявку', 'order-title');
  let orderForm = addElement('form', '', 'order-form');
  orderForm.action = "#";
  let labelName = addElement('label', 'Введите имя');
  labelName.for = "name";
  let inputName = addElement('input', '', 'order-input');
  inputName.type = "text";
  inputName.name = "name";
  inputName.id = "name";
  inputName.placeholder = "Введите имя";
  inputName.attributes.required = "required";
  let labelEmail = addElement('label', 'Введите E-mail');
  labelEmail.for = "email";
  let inputEmail = addElement('input', '', 'order-input');
  inputEmail.type = "email";
  inputName.name = "email";
  inputName.id = "email";
  inputName.placeholder = "Введите Email";
  inputEmail.attributes.required = "required";
  let labelPhone = addElement('label', 'Введите номер телефона');
  labelPhone.for = "phone-number";
  let inputPhone = addElement('input', '', 'order-input');
  inputPhone.type = "tel";
  inputName.name = "phone-number";
  inputName.id = "phone-number";
  inputName.placeholder = "ххх-ххх-ххх";
  inputPhone.attributes.required = "required";
  let orderButton = addElement('button', 'Отправить', 'call-form-button');
  orderButton.name = "submit";
  let orderText = addElement('p', '', 'order-text');
  orderText.innerHTML = 'Нажимая на кнопку, Вы принимаете <a class="text-a" href="#">Положение</a> и <a class="text-a" href="#">Согласие</a> на обработку персональных данных.';

  orderDiv.appendChild(orderContainer);
  orderContainer.appendChild(orderWrapper);
  orderWrapper.appendChild(orderButtonClose);
  orderWrapper.appendChild(orderTitle);
  orderWrapper.appendChild(orderForm);
  orderForm.appendChild(labelName);
  orderForm.appendChild(inputName);
  orderForm.appendChild(labelEmail);
  orderForm.appendChild(inputEmail);
  orderForm.appendChild(labelPhone);
  orderForm.appendChild(inputPhone);
  orderForm.appendChild(orderButton);
  orderForm.appendChild(orderText);

  return orderDiv;
}

function addElement(tagName, content, tagClass) {
  let element = document.createElement(tagName);
  if (tagClass) element.classList.add(tagClass);
  if (content) element.insertAdjacentHTML ('beforeEnd', content);
  return element;
}

if (document.querySelector('.catalog-item-advanced')) {
  (document.querySelector('.catalog-item-advanced')).
    querySelector('.btn-order').addEventListener('click', () => {
    document.querySelector('.catalog-item-advanced').
    appendChild(createForm())
  })
}

document.addEventListener('click', (e) => {
  let catalogItemAdvanced = document.querySelector('.catalog-item-advanced')
  let orderButton = catalogItemAdvanced.querySelector('.btn-order')
  if (catalogItemAdvanced.classList.contains('catalog-item-advanced')
   && orderButton.contains(e.target)) {
    document.querySelector('.catalog-item-advanced').
    appendChild(createForm())
  }
})

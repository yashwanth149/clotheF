const buttn = document.querySelector(".load");
buttn.addEventListener("click", function () {
  alert("Sorry still creating shoping list..");
});

const menuBtn = document.querySelector('.burger');
const fullBar = document.querySelector('.respons-nav');

menuBtn.addEventListener('click', () =>  {
  fullBar.classList.toggle('is-active');
});

const animate = document.querySelector('.burger');
animate.classList.add('unToggled');
animate.addEventListener('click', () => {
  animate.classList.toggle('toggled');      
  animate.classList.toggle('unToggled');
})


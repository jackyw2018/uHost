const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButtons = document.querySelectorAll('.plan button');
const modalNoButton = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector('.mobile-nav');
const ctaButton = document.querySelector('.main-nav__item--cta');
// console.log(backdrop);

// console.dir(selectPlanButtons)

// add event listner to 'select plan' buttons 
// backdrop and modal emerge when one button is clicked
for (let i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function () {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        modal.classList.add('open');
        backdrop.style.display = 'block';
        setTimeout(function () {
            backdrop.classList.add('open');
        }, 10)
    });
}

// backdrop and modal display returns to none
function closeModal() {
    // modal.style.display = 'none';
    // backdrop.style.display = 'none';
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
    setTimeout(function () {
        backdrop.style.display = 'none';
    }, 200)
}

// add event listener to modal backdrop and 'NO' button

if (modalNoButton) {
    modalNoButton.addEventListener('click', closeModal);
}

backdrop.addEventListener('click', function () {
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    closeModal();
});

toggleButton.addEventListener('click', function () {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.style.display = 'block';
    setTimeout(function () {
        backdrop.classList.add('open');
    }, 10)
})

ctaButton.addEventListener('animationstart', function(){
    console.log('Animation started', event);
})

ctaButton.addEventListener('animationend', function(){
    console.log('Animation ended', event);
})

ctaButton.addEventListener('animationiteration', function(){
    console.log('Animation iteration', event);
})
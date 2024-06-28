let burger = document.querySelector('.top-nav__burger');

burger.addEventListener('click', function () {
    this.classList.toggle('open');
    document.querySelector('.mobile-menu').classList.toggle('open');
});
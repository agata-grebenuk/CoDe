'use strict';

document.addEventListener('DOMContentLoaded', function () {

    /**
     * Hero slider
    */
    (function () {
        let slider = new Swiper(".hero__slider .slider__container", {
            wrapperClass: 'slider__wrapper',
            slideClass: 'slider__slide',
            slidesPerView: 1,
            spaceBetween: 0,
            // autoplay: {
            //     delay: 5000,
            //     disableOnInteraction: false,
            // },
            grabCursor: false,
            loop: true,
            navigation: {
                nextEl: '.slider__button-next',
                prevEl: '.slider__button-prev',
            },
        });
    })();


    (function () {
        ymaps.ready(init);

        function init() {
            let map = new ymaps.Map("map", {
                center: [55.041479, 82.934615],
                zoom: 15
            });

            let placemark = new ymaps.Placemark([55.041479, 82.934615], {
                hintContent: 'Новосибирск, Депутатская улица, 46',
                balloonContent: 'Новосибирск, Депутатская улица, 46'
            });

            map.geoObjects.add(placemark);
        }
    })();

    (function () {
        Fancybox.bind("[data-fancybox]", {
        });
    })();


    (function () {
        let toggleBtn = document.querySelectorAll('.menu-toggle');
        for (let btn of toggleBtn) {
            btn.addEventListener('click', function () {
                document.querySelector('.mobile-menu')?.classList.toggle('open');
            });
        }
    })();
    
    /**
    * popup
    */

    const triggerElements = document.querySelectorAll('.popup-link');
    const modal = document.querySelector('.popup');
    const closeButton = document.querySelector('.close-popup');

    function openModal() {
        modal.classList.add('open');
        const modalContent = modal.querySelector('.popup__content');
        modalContent.classList.add('open');
    }

    function closeModal() {
        modal.classList.remove('open');
    }

    triggerElements.forEach(trigger => {
        trigger.addEventListener('click', openModal);
    });

    closeButton.addEventListener('click', closeModal);

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});

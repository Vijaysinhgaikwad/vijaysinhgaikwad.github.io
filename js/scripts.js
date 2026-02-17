/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {

    /* ===============================
       BOOTSTRAP SCROLLSPY
    ================================ */
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    }

    /* ===============================
       COLLAPSE RESPONSIVE NAVBAR
    ================================ */
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );

    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    /* ===============================
       TYPING ANIMATION (ABOUT SECTION)
    ================================ */
    const typingText = document.getElementById('typing-text');

    // Safety check: run only if element exists
    if (typingText) {

        const textArray = [
            "Data Analyst",
            "Data Scientist",
            "PhD Scholar",
            "AI Engineer"
        ];

        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeEffect() {
            const currentText = textArray[textIndex];

            if (!isDeleting) {
                typingText.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;

                if (charIndex === currentText.length) {
                    setTimeout(() => isDeleting = true, 1200);
                }
            } else {
                typingText.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;

                if (charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % textArray.length;
                }
            }

            const speed = isDeleting ? 60 : 120;
            setTimeout(typeEffect, speed);
        }

        // Start typing animation
        typeEffect();
    }

});

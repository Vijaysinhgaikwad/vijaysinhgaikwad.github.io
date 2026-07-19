/*!
* Start Bootstrap - Resume v7.0.6
*/

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
       TYPING ANIMATION
    ================================ */
    const typingText = document.getElementById('typing-text');

    if (typingText) {
        const textArray = [
            "Data Analyst",
            "Gen AI Engineer",
            "Data Scientist",
            "PhD Scholar",
            "AI Researcher",
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

        typeEffect();
    }

    /* ===============================
       EXPERIENCE CARD ANIMATION
    ================================ */
    const expCards = document.querySelectorAll('.exp-card');

    if (expCards.length > 0) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }
            });
        }, { threshold: 0.1 });

        expCards.forEach(card => {
            card.style.opacity = "0";
            card.style.transform = "translateY(40px)";
            card.style.transition = "all 0.6s ease";
            observer.observe(card);
        });
    }

});


/* ===============================
     LANGUAGE SELECTION
================================ */

document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("langBtn");
    const menu = document.getElementById("langMenu");
    const items = menu.querySelectorAll("div[data-lang]");

    // Populate labels
    items.forEach(item => {
        item.textContent = item.getAttribute("data-label");
    });

    // Toggle menu open/close
    btn.addEventListener("click", function (e) {
        e.stopPropagation();
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    });

    // Close menu when clicking outside
    document.addEventListener("click", function () {
        menu.style.display = "none";
    });

    // Language click handler — cookie-based, works in place, no redirect
    items.forEach(item => {
        item.addEventListener("click", function () {
            const lang = this.getAttribute("data-lang");
            setLanguage(lang);
            menu.style.display = "none";
        });
    });

    function setLanguage(lang) {
        const domain = window.location.hostname;

        // Clear any existing translation cookie first
        document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + domain;

        if (lang === "") {
            // Restore original English
            location.reload();
        } else {
            // Set translation cookie, Google's widget reads this on load
            document.cookie = "googtrans=/en/" + lang + "; path=/";
            document.cookie = "googtrans=/en/" + lang + "; path=/; domain=" + domain;
            location.reload();
        }
    }
});

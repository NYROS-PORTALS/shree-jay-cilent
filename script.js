/* =====================================================
   SHREE JAY PRINTS
   JAVASCRIPT
===================================================== */


/* ================= LOADER ================= */

window.addEventListener("load", function () {

    const loader =
        document.getElementById("loader");

    setTimeout(function () {

        loader.classList.add("hide");

    }, 900);

});


/* ================= NAVBAR ================= */

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 60) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* ================= MOBILE MENU ================= */

const menuButton =
    document.getElementById("menuButton");

const navMenu =
    document.getElementById("navMenu");


menuButton.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


/* Close menu when link clicked */

document.querySelectorAll("#navMenu a")
    .forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("active");

        });

    });


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(function (element) {

    observer.observe(element);

});


/* ================= IMAGE ERROR HANDLING ================= */

document.querySelectorAll("img")
    .forEach(function (image) {

        image.addEventListener("error", function () {

            console.log(
                "Image not found:",
                image.src
            );

        });

    });


/* ================= BUTTON EFFECT ================= */

document.querySelectorAll(
    ".btn-primary, .btn-outline, .btn-light"
)
.forEach(function (button) {

    button.addEventListener("click", function () {

        button.style.transform =
            "scale(.97)";

        setTimeout(function () {

            button.style.transform = "";

        }, 150);

    });

});
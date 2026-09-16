/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("show");

    });

}


/* =========================================
   CLOSE MOBILE MENU
========================================= */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function () {

        if (navLinks) {
            navLinks.classList.remove("show");
        }

    });

});


/* =========================================
   GALLERY MODAL
========================================= */

const galleryItems =
    document.querySelectorAll(".gallery-item");

const galleryModal =
    document.getElementById("galleryModal");

const modalImage =
    document.getElementById("modalImage");

const closeModal =
    document.getElementById("closeModal");


if (galleryItems.length > 0 && galleryModal) {

    galleryItems.forEach(item => {

        item.addEventListener("click", function () {

            const image =
                item.querySelector("img");

            modalImage.src = image.src;

            galleryModal.style.display = "flex";

        });

    });

}


if (closeModal) {

    closeModal.addEventListener("click", function () {

        galleryModal.style.display = "none";

    });

}


if (galleryModal) {

    galleryModal.addEventListener("click", function (event) {

        if (event.target === galleryModal) {

            galleryModal.style.display = "none";

        }

    });

}


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape" && galleryModal) {

        galleryModal.style.display = "none";

    }

});


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        if (formMessage) {

            formMessage.style.display = "block";

        }

        contactForm.reset();


        setTimeout(function () {

            if (formMessage) {

                formMessage.style.display = "none";

            }

        }, 5000);

    });


}
/* =========================================
   MONVÉ JAVASCRIPT
========================================= */


/* =========================================
   MOBILE NAVIGATION
========================================= */

const monveMenuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (monveMenuBtn && navMenu) {

    monveMenuBtn.addEventListener("click", function () {

        navMenu.classList.toggle("show");

    });

}


/* =========================================
   FAQ ACCORDION
========================================= */

const faqQuestions =
    document.querySelectorAll(".faq-question");


faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        const currentItem =
            this.parentElement;

        const currentAnswer =
            currentItem.querySelector(".faq-answer");


        /* Close other FAQ */

        document
            .querySelectorAll(".faq-item")
            .forEach(function (item) {

                if (item !== currentItem) {

                    item.classList.remove("active");

                    item
                        .querySelector(".faq-answer")
                        .style.maxHeight = null;
                }

            });


        /* Toggle current FAQ */

        currentItem.classList.toggle("active");


        if (
            currentItem.classList.contains("active")
        ) {

            currentAnswer.style.maxHeight =
                currentAnswer.scrollHeight + "px";

        } else {

            currentAnswer.style.maxHeight =
                null;

        }

    });

});
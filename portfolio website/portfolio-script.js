// ========================================
// NAMISHA CHOPRA - PORTFOLIO JAVASCRIPT
// ========================================


// Get required HTML elements
const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");

const navItems = document.querySelectorAll(".nav-links a");

const sections = document.querySelectorAll("main section");

const revealElements = document.querySelectorAll(".reveal");


// ========================================
// MOBILE NAVIGATION MENU
// ========================================

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("open");


    // Change menu icon
    if (navLinks.classList.contains("open")) {

        menuBtn.textContent = "✕";

    } else {

        menuBtn.textContent = "☰";

    }

});


// ========================================
// CLOSE MOBILE MENU AFTER CLICKING LINK
// ========================================

navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("open");

        menuBtn.textContent = "☰";

    });

});


// ========================================
// SCROLL REVEAL ANIMATION
// ========================================

const revealObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.12
    }

);


// Observe all elements having reveal class
revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


// ========================================
// ACTIVE NAVIGATION LINK
// ========================================

function updateActiveNavigation() {

    let currentSection = "home";


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;


        if (window.scrollY >= sectionTop) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navItems.forEach(function (item) {

        // Remove active class
        item.classList.remove("active");


        // Add active class to current section
        if (
            item.getAttribute("href") ===
            "#" + currentSection
        ) {

            item.classList.add("active");

        }

    });

}


// Run function when page is scrolled
window.addEventListener(
    "scroll",
    updateActiveNavigation
);


// Run once when website loads
updateActiveNavigation();


// ========================================
// AUTOMATIC COPYRIGHT YEAR
// ========================================

const copyright =
    document.getElementById("copyright");


if (copyright) {

    const currentYear =
        new Date().getFullYear();


    copyright.textContent =
        "© " +
        currentYear +
        " Namisha Chopra";

}

const nav = document.querySelector(nav);

window.addEventListener(scroll, () => {
    if (window.scrolly > 50) {
        nav.classList.add(nav-scrolled);
    } else {
        nav.classList.remove(nav-scrolled);
    }
});

const reveals = document.querySelectorAll("reveals");

window.addEventListener(scroll, () => {
    reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
})

const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("nav ul");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});
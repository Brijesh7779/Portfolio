let lastScrollY = window.scrollY;
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY + 10) {
        nav.style.transform = "translateY(-100%)";
    } 
    else if (window.scrollY < lastScrollY - 10) {
        nav.style.transform = "translateY(0)";
    }

    lastScrollY = window.scrollY;
});
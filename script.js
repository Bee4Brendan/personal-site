document.body.classList.add("loading");

window.addEventListener("load", () => {
    setTimeout(() => {
        document.body.classList.remove("loading");
        document.querySelector(".loader").classList.add("hidden");
        window.scrollTo(0, 0);
    }, 3000);
});

let menu_icon = document.querySelector(".desktop-navbar .menu-icon");
let navbar = document.querySelector(".desktop-navbar");

menu_icon.addEventListener("click", () => {
    const isOpen = menu_icon.classList.toggle("open");
    menu_icon.setAttribute("aria-expanded", isOpen);
    navbar.classList.toggle("open");
    console.log("menu-icon clicked");
});

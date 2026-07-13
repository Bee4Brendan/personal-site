window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".loader").classList.add("hidden");
        window.scrollTo(0, 0);
    }, 5000);
});

let menu_icon = document.querySelector(".desktop-navbar .menu-icon");
let navbar = document.querySelector(".desktop-navbar");

menu_icon.addEventListener("click", () => {
    menu_icon.classList.toggle("ex-active");
    navbar.classList.toggle("ex-active");
    console.log("menu-icon clicked");
});

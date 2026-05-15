let body = document.querySelector('body');
let lang = document.documentElement.lang;

let light = document.querySelector('#light');
let lightMobile = document.querySelector('.mode-mob');

let savedMode = localStorage.getItem("light");

if(savedMode != null && savedMode != ""){
    body.classList = savedMode;
}
else {
    const prefersLightMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    if (prefersLightMode) {
        body.classList.add('lightmode');
    }
}

function updateModeButtons() {
    let isLightMode = body.classList.contains('lightmode');

    if(light){
        if (lang == "hu") {
            light.innerHTML = isLightMode ? '<i class="ri-moon-fill"></i>Sötét mód':'<i class="ri-sun-fill"></i>Világos mód';
        }
        else {
            light.innerHTML = isLightMode ? '<i class="ri-moon-fill"></i>Dark mode':'<i class="ri-sun-fill"></i>Light mode';
        }
    }

    if(lightMobile) {
        lightMobile.innerHTML = isLightMode ? '<i class="ri-moon-fill"></i>':'<i class="ri-sun-fill"></i>';
    }
}

updateModeButtons();

if(light){
    light.addEventListener('click', function(e) {
        e.preventDefault();
        body.classList.toggle('lightmode');
        localStorage.setItem("light", body.classList);
        updateModeButtons();
    });
}

if(lightMobile){
    lightMobile.addEventListener('click', function(e) {
        e.preventDefault();
        body.classList.toggle('lightmode');
        localStorage.setItem("light", body.classList);
        updateModeButtons();
    });
}

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('header');

if(menu) {
    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('open');
        if(header) header.classList.toggle('open');
    }
}
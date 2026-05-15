let body = document.querySelector('body');
let lang = document.documentElement.lang;

let light = document.querySelector('#light');
let lightMobile = document.querySelector('.mode-mob');

let savedMode = localStorage.getItem("light");

if(savedMode != null && savedMode != ""){
    if (savedMode.includes("lightmode")) {
        body.classList.add("lightmode");
    }
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
        localStorage.setItem("light", body.classList.contains('lightmode') ? "lightmode" : "darkmode");
        updateModeButtons();
    });
}

if(lightMobile){
    lightMobile.addEventListener('click', function(e) {
        e.preventDefault();
        body.classList.toggle('lightmode');
        localStorage.setItem("light", body.classList.contains('lightmode') ? "lightmode" : "darkmode");
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

const submitBtn = document.querySelector('#submit-btn');

if(submitBtn) {
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const movie = document.getElementById('movie-title').value;

        const rating = document.querySelector('input[name="rate-radio"]:checked')?.value || "Nincs megadva";

        const opinion = document.getElementById('opinion').value;
        const newsletter = document.getElementById('newsletter-toggle').checked ? "Igen" : "Nem";

        const recipient = "osz.abel@gmail.com"
        const subject = encodeURIComponent("Film értékelés • Szekler Pictures");

        const bodyText = `Szia! Új értékelés érkezett a weboldalról:\n\n` +
                         `Név: ${name}\n` +
                         `E-mail: ${email}\n` +
                         `Film címe: ${movie}\n` +
                         `Értékelés: ${rating}/5\n` +
                         `Hírlevél feliratkozás: ${newsletter}\n\n` +
                         `Vélemény:\n${opinion}`;

        const body = encodeURIComponent(bodyText);

        window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    });
}

const contrastToggle = document.getElementById('contrast-toggle');
const largeTextToggle = document.getElementById('text-toggle');

if(localStorage.getItem('contrastMode') === 'true') {
    document.body.classList.add('contrast-mode');
    if(contrastToggle) contrastToggle.checked = true;
}

if(localStorage.getItem('largeTextMode') === 'true') {
    document.body.classList.add('large-text-mode');
    if(largeTextToggle) largeTextToggle.checked = true;
}

if(contrastToggle) {
    contrastToggle.addEventListener('change', function() {
        if(this.checked) {
            document.body.classList.add('contrast-mode');
            localStorage.setItem('contrastMode', 'true');
        }
        else {
            document.body.classList.remove('contrast-mode');
            localStorage.setItem('contrastMode', 'false');
        }
    });
}

if(largeTextToggle) {
    largeTextToggle.addEventListener('change', function() {
        if(this.checked) {
            document.body.classList.add('large-text-mode');
            localStorage.setItem('largeTextMode', 'true');
        }
        else {
            document.body.classList.remove('large-text-mode');
            localStorage.setItem('largeTextMode', 'false');
        }
    });
}
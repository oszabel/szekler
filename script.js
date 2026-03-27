let body = document.querySelector('body');
try{
    body.classList=localStorage.getItem("light");
} catch (e) {
    console.log(e)
}

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
    header.classList.toggle('open');
}

let light = document.querySelector('#light');

light.addEventListener('click',function(){
    body.classList.toggle('lightmode');
    // document.getElementById('light').innerHTML = 'Sötét mód';
    localStorage.setItem("light",body.classList);
    document.querySelector('#light').innerHTML = body.classList.contains('lightmode')? '<i class="ri-moon-fill"></i>Dark mode':'<i class="ri-sun-fill"></i>Light mode';
    // document.querySelector('.light').innerHTML = body.classList.contains('lightmode')? 'Dark mode':'Light mode';
});

let light2 = document.querySelector('.mode-mob');

light2.addEventListener('click', function(){
    body.classList.toggle('lightmode');
    // document.getElementById('light').innerHTML = 'Sötét mód';
    localStorage.setItem("light",body.classList);
    document.querySelector('.mode-mob').innerHTML = body.classList.contains('lightmode')? '<i class="ri-moon-fill"></i>':'<i class="ri-sun-fill"></i>';
    // document.querySelector('.light').innerHTML = body.classList.contains('lightmode')? 'Dark mode':'Light mode';
});
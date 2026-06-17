
let itmes = {
    article: document.querySelector('article'),
    onBtn: document.querySelector('#on-btn'),
    OffBtn: document.querySelector('#off-btn'),
    Btn1: document.querySelector('#btn1'),
    Btn2: document.querySelector('#btn2'),
    Btn3: document.querySelector('#btn3'),
}

function onfun() {
    itmes.article.classList.add("onanima")
}
function offfun() {
    itmes.article.style.animationDuration = 0 + 's'
}
function onefun() {
    itmes.article.style.animationDuration = 0.4 + 's'
}
function twofun() {
    itmes.article.style.animationDuration = 0.6 + 's'
}
function threefun() {
    itmes.article.style.animationDuration = 1.3 + 's'
}

itmes.onBtn.addEventListener('click', onfun)
itmes.OffBtn.addEventListener('click', offfun)
itmes.Btn1.addEventListener('click', onefun)
itmes.Btn2.addEventListener('click', twofun)
itmes.Btn3.addEventListener('click', threefun)
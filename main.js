const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle ('open')) {
navBtnImg.src = "./img/ikons/nav-close.svg";
    } else {
navBtnImg.src = "./img/ikons/nav-open.svg";
    }
}

AOS.init();
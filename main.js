const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');



    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
         navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/5+0.5}s`;
            }
         });
         //Burger Animation
         burger.classList.toggle('toggle');
    });

}
navSlide();

const nav = document.querySelector('.nav');

window.onscroll = function(){
    var top = window.scrollY;
    console.log(top);
    if (top >= 900){
        nav.classList.add('active')
    }else{
        nav.classList.remove('active')
    }
}
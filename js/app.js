var typed = new Typed(".typing",{
    strings: ["Web Designer", "Web Developer", "Youtuber", "Blogger"],
    typeSpeed: 80,
    backSpeed: 80,
});

var typed = new Typed(".typing_2",{
    strings: ["Web developer", "Web Designer", "Student", "Blogger"],
    typeSpeed: 100,
    backSpeed: 60,
});

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('.faq_icon i');
        if (icon.className === 'fa-solid fa-plus'){
            icon.className = 'fa-solid fa-minus';
        }
        else{
            icon.className = 'fa-solid fa-plus';
        }

    })
})



const manu = document.querySelector('.nav_manu');
const manuBtn = document.querySelector('#open_manu_btn');
const closeBtn = document.querySelector('#close_manu_btn');

manuBtn.addEventListener('click', () => {
    manu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    manuBtn.style.display = "none";
})

const closeNav = () => {
    manu.style.display = "none";
    closeBtn.style.display = "none";
    manuBtn.style.display = "inline-block"
}

closeBtn.addEventListener('click', closeNav)


window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>100);
})


const navOpen = document.querySelector(".nav-open");
const navClose = document.querySelector(".nav-close");
const navMobileCon = document.querySelector(".nav-mobile-con");
const sections = document.querySelectorAll("section")
const links = document.querySelectorAll(".links");
const sumbitBtn = document.querySelector(".submitBtn");

const openMobileMenu = () => {
    navOpen.classList.remove("show");
    navOpen.classList.add("hide");
    navClose.classList.remove("hide");
    navClose.classList.add("show");
    navMobileCon.classList.remove("hide");
    navMobileCon.classList.add("show");
    navMobileCon.classList.add("slide_open");
    navMobileCon.classList.remove("slide_close");
}

const closeMobileMenu = () => {
    navOpen.classList.remove("hide");
    navOpen.classList.add("show");
    navClose.classList.remove("show");
    navClose.classList.add("hide");
    navMobileCon.classList.remove("show");
    navMobileCon.classList.remove("slide_open");
    navMobileCon.classList.add("slide_close");
    setTimeout(() => {
        navMobileCon.classList.add("hide");
    }, 300);
}


window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop - sectionHeight / 10)) {
            current = section.getAttribute("id");
            console.log(current);
        }
    })

    links.forEach( link => {
        link.classList.remove("active");
        if(link.classList.contains(current)) {
            link.classList.add("active");
        }
    })
    if (window.scrollY > 160) {
        document.querySelector(".nav-main").classList.add("shadow-sm", "border-b", "border-gray-100")
    }
    else {
        document.querySelector(".nav-main").classList.remove("shadow-sm", "border-b", "border-gray-100")
    }
})

sumbitBtn.addEventListener("click", (e) => {
    
})

// Show and Hide Mobile Navigation
const toggleShow = document.getElementById('toggleShow');
const toggleHide = document.getElementById('toggleHide');
toggleShow.addEventListener('click', (e) => {
    const mbNavContents = document.getElementById('mbNavContents');
    mbNavContents.classList.add('slide_down');
    mbNavContents.classList.remove('hide');
    mbNavContents.classList.add('show');
    toggleHide.style.display = "block";
    toggleShow.style.display = "none";
});


toggleHide.addEventListener('click', (e) => {
    const mbNavContents = document.getElementById('mbNavContents');
    mbNavContents.classList.remove('slide_down');
    mbNavContents.classList.add('slide_up');
    setTimeout(() => {
         mbNavContents.classList.remove('show');
         mbNavContents.classList.add('hide');
    }, 800);
    toggleHide.style.display = "none";
    toggleShow.style.display = "block";
});

function getQueryString(field, url) {
    const href = url ? url : window.location.href;
    const reg = new RegExp("[?&]" + field + "=([^&#]*)", "i");
    const string = reg.exec(href);
    return string ? string[1] : null;
  }
  const URL = location.hash.split('#')[1];



  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
        const section = link.children[0];
        navLinks.forEach(link => {
            link.classList.remove("active");
            link.children[0].style.color = "#222222";
        })
        link.classList.add("active");
        link.children[0].style.color = "#248df0";
    })
 });


 window.onload =  function () {
     location.hash=''
 };

 const headerNav = document.querySelector('.header-nav');
 console.log(headerNav);

 window.onscroll = function () {
    headerNav.classList.add('nav-scrolled');
 }

 
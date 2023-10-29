window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 100) {
        navbar.classList.add('nav-scroll');
    } else {
        navbar.classList.remove('nav-scroll')
    }
});

document.querySelector('.wringin').addEventListener('click', () => {
    const link = "https://google.com";
    const openInNewTab = true;

    if (openInNewTab) {
        window.open(link, "_blank");
    } else {
        window.location.href = link;
    }
})
  
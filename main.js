function onScroll() {
    console.log(scrollY > 0)
    if (scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }

}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}


ScrollReveal({
    origin:'top',
    distance:'30px',
    duration: 700,
}).reveal('#home');

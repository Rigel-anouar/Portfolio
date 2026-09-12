$(document).ready(function () {

    // Hamburger menu
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 80) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });
});

// Tab title
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === "visible") {
        document.title = "Projects | Anouar Bensmail";
    } else {
        document.title = "Come Back! 👋";
    }
});

// VanillaTilt on project cards
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 10,
    speed: 400,
    glare: false,
});

// ScrollReveal
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 800,
    reset: false
});
sr.reveal('.work .box', { interval: 150 });
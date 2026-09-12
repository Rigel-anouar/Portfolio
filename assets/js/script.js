$(document).ready(function () {

    // Hamburger menu toggle
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        // Scroll-to-top button visibility
        if (window.scrollY > 80) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // Scroll spy — highlight active nav link
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 220;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // Smooth scrolling for internal anchor links
    $('a[href^="#"]').on('click', function (e) {
        let target = $($(this).attr('href'));
        if (target.length) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 60
            }, 500, 'linear');
        }
    });

    // Contact form — EmailJS (replace credentials with your own)
    $("#contact-form").submit(function (event) {
        event.preventDefault();
        emailjs.init("user_TTDmetQLYgWCLzHTDgqxm"); // ← replace with your EmailJS public key

        emailjs.sendForm('contact_service', 'template_contact', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Message sent successfully!");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Failed to send. Please email me directly at anouar.bensmail26@gmail.com");
            });
    });

});

// Tab title change on visibility
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === "visible") {
        document.title = "Anouar Bensmail | Portfolio";
        $("#favicon").attr("href", "photo/emoji.png");
    } else {
        document.title = "Come Back! 👋";
        $("#favicon").attr("href", "assets/images/favhand.png");
    }
});

// Typed.js — hero typing effect
var typed = new Typed(".typing-text", {
    strings: [
        "Full-Stack Web Apps",
        "Python Automation",
        "AI-Powered APIs",
        "Chrome Extensions",
        "Real Projects That Work"
    ],
    loop: true,
    typeSpeed: 55,
    backSpeed: 28,
    backDelay: 1800,
});

// VanillaTilt — tilt effect on cards
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 12,
    speed: 400,
    glare: false,
});

/* ===== SCROLL REVEAL ANIMATION ===== */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 900,
    reset: false
});

// Hero
sr.reveal('.home .content h2', { delay: 100 });
sr.reveal('.home .content p', { delay: 200 });
sr.reveal('.home .content .btn', { delay: 300 });
sr.reveal('.home .image', { delay: 400, origin: 'right' });
sr.reveal('.home .socials', { delay: 500 });

// About
sr.reveal('.about .image', { delay: 150, origin: 'left' });
sr.reveal('.about .content h3', { delay: 200 });
sr.reveal('.about .content .tag', { delay: 250 });
sr.reveal('.about .content p', { delay: 300 });
sr.reveal('.about .content .box-container', { delay: 350 });
sr.reveal('.about .content .resumebtn', { delay: 400 });

// Skills
sr.reveal('.skill-category-block', { interval: 150, distance: '40px' });
sr.reveal('.skills .bar', { interval: 80, origin: 'bottom', distance: '30px' });

// Education
sr.reveal('.education .box', { interval: 200, origin: 'bottom' });

// Projects
sr.reveal('.work .box', { interval: 150, origin: 'bottom', distance: '40px' });

// Experience
sr.reveal('.experience .container', { interval: 250, origin: 'bottom' });

// Contact
sr.reveal('.contact .container', { delay: 200, origin: 'bottom' });

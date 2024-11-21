// JavaScript functionality for Portfolio Website

// Smooth Scrolling for Navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Back-to-Top Button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = "↑";
backToTopButton.id = "backToTop";
document.body.appendChild(backToTopButton);

backToTopButton.style.position = "fixed";
backToTopButton.style.bottom = "20px";
backToTopButton.style.right = "20px";
backToTopButton.style.padding = "10px 15px";
backToTopButton.style.backgroundColor = "#00796b";
backToTopButton.style.color = "white";
backToTopButton.style.border = "none";
backToTopButton.style.borderRadius = "50%";
backToTopButton.style.cursor = "pointer";
backToTopButton.style.fontSize = "1.5rem";
backToTopButton.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
backToTopButton.style.display = "none";
backToTopButton.style.zIndex = "1000";

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Reveal Sections on Scroll
const sections = document.querySelectorAll('section');

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.9;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);

// Add Intersection Observer for Animation on Scroll
document.querySelectorAll('.project').forEach(project => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                project.classList.add('show');
            } else {
                project.classList.remove('show');
            }
        },
        { threshold: 0.5 }
    );
    observer.observe(project);
});

// Download CV Functionality
document.getElementById('downloadCV').addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = './Anand_Rastogi_CV.pdf.pdf'; // Corrected path to your CV file
    link.download = 'Anand_Rastogi_CV.pdf'; // Default file name
    link.click();
});

// Particles.js Configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#26a69a"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#fff"
            },
            polygon: {
                nb_sides: 5
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#26a69a",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
            onclick: {
                enable: true,
                mode: "push"
            }
        },
        modes: {
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Mouse Tracking for Particle Effects
document.addEventListener('mousemove', (event) => {
    const particlesCanvas = document.querySelector('#particles-js canvas');
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Create a subtle parallax effect
    particlesCanvas.style.transform = `translate(${mouseX / 50}px, ${mouseY / 50}px)`;
});

// Console Log Confirmation
console.log("Portfolio Website Functionalities Loaded Successfully!");

/* =========================================================
   ALEENA ROY — PORTFOLIO INTERACTIONS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            navLinks.classList.toggle("open");

        });


        document.querySelectorAll(".nav-links a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("open");

            });

        });

    }


    /* =====================================================
       TYPING EFFECT
    ===================================================== */

    const typingElement = document.getElementById("typing-text");

    const phrases = [
        "Assistant Professor · CSE (AI)",
        "AI & Robotics Researcher",
        "Autonomous Navigation",
        "Computer Vision",
        "Human-Centered Intelligent Systems",
        "Multimodal AI"
    ];

    let phraseIndex = 0;
    let characterIndex = 0;

    let deleting = false;

    function typeEffect() {

        if (!typingElement) return;

        const currentPhrase = phrases[phraseIndex];

        if (!deleting) {

            typingElement.textContent =
                currentPhrase.substring(0, characterIndex + 1);

            characterIndex++;

            if (characterIndex === currentPhrase.length) {

                deleting = true;

                setTimeout(typeEffect, 1600);

                return;
            }

        } else {

            typingElement.textContent =
                currentPhrase.substring(0, characterIndex - 1);

            characterIndex--;

            if (characterIndex === 0) {

                deleting = false;

                phraseIndex =
                    (phraseIndex + 1) % phrases.length;
            }

        }

        setTimeout(
            typeEffect,
            deleting ? 35 : 65
        );
    }

    typeEffect();


    /* =====================================================
       PARTICLES
    ===================================================== */

    const particleContainer =
        document.getElementById("particles");

    if (particleContainer) {

        const particleCount =
            window.innerWidth < 700 ? 25 : 55;

        for (let i = 0; i < particleCount; i++) {

            const particle =
                document.createElement("div");

            particle.classList.add("particle");

            particle.style.left =
                Math.random() * 100 + "%";

            particle.style.top =
                Math.random() * 100 + "%";

            particle.style.animationDuration =
                (10 + Math.random() * 20) + "s";

            particle.style.animationDelay =
                Math.random() * 10 + "s";

            particleContainer.appendChild(particle);
        }
    }


    /* =====================================================
       CURSOR GLOW
    ===================================================== */

    const cursorGlow =
        document.querySelector(".cursor-glow");

    if (cursorGlow && window.innerWidth > 700) {

        document.addEventListener("mousemove", event => {

            cursorGlow.style.left =
                event.clientX + "px";

            cursorGlow.style.top =
                event.clientY + "px";

        });

    }


    /* =====================================================
       PROJECT FILTERING
    ===================================================== */

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const projectCards =
        document.querySelectorAll(".project-card");

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            const filter =
                button.dataset.filter;

            projectCards.forEach(card => {

                const category =
                    card.dataset.category;

                if (
                    filter === "all" ||
                    category === filter
                ) {

                    card.classList.remove("hidden");

                } else {

                    card.classList.add("hidden");

                }

            });

        });

    });


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements = document.querySelectorAll(
        ".section-heading, .research-card, .project-card, .skill-group, .timeline-item, .system-panel, .about-text"
    );

    revealElements.forEach(element => {
        element.classList.add("reveal");
    });


    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const navItems =
        document.querySelectorAll(".nav-links a");

    const navObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        navItems.forEach(link => {

                            link.classList.remove("active");

                            if (
                                link.getAttribute("href") ===
                                "#" + entry.target.id
                            ) {

                                link.classList.add("active");

                            }

                        });

                    }

                });

            },
            {
                rootMargin: "-35% 0px -55% 0px"
            }
        );


    sections.forEach(section => {

        navObserver.observe(section);

    });


    /* =====================================================
       3D TILT EFFECT
    ===================================================== */

    const cards =
        document.querySelectorAll(
            ".research-card, .project-card"
        );


    if (window.innerWidth > 900) {

        cards.forEach(card => {

            card.addEventListener("mousemove", event => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const rotateX =
                    ((y - centerY) / centerY) * -2.5;

                const rotateY =
                    ((x - centerX) / centerX) * 2.5;

                card.style.transform =
                    `perspective(900px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-5px)`;

            });


            card.addEventListener("mouseleave", () => {

                card.style.transform = "";

            });

        });

    }


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(anchor => {

        anchor.addEventListener("click", event => {

            const targetId =
                anchor.getAttribute("href");

            const target =
                document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =====================================================
       CONSOLE EASTER EGG
    ===================================================== */

    console.log(
        "%c ALEENA ROY — AI × ROBOTICS ",
        "color:#63ffb0;font-size:18px;font-weight:bold;"
    );

    console.log(
        "%c Research systems initialized.",
        "color:#4de7ff;font-size:12px;"
    );

    console.log(
        "%c If you're reading this, you probably like code. 🤖",
        "color:#8b95a5;font-size:12px;"
    );

});

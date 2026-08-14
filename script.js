// =========================
// PORTFOLIO JAVASCRIPT
// =========================


// 1. Reveal elements when they appear on screen

const revealElements = document.querySelectorAll(
    ".section, .skill-card, .info-box, .certificate-card, .empty-project, .interest-content > div"
);

const revealStyle = document.createElement("style");

revealStyle.textContent = `
    .reveal {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.7s ease, transform 0.7s ease;
    }

    .reveal.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;

document.head.appendChild(revealStyle);

revealElements.forEach(function(element) {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(function(element) {
    observer.observe(element);
});


// 2. Handle certificate buttons

const certificateButton =
    document.querySelector(".certificate-button");

if (certificateButton) {

    certificateButton.addEventListener("click", function(event) {

        if (certificateButton.getAttribute("href") === "#") {

            event.preventDefault();

            alert(
                "Your certificate link will be added here."
            );

        }

    });

}


// 3. Automatically update the copyright year

const footerText = document.querySelector("footer p");

if (footerText) {

    const currentYear = new Date().getFullYear();

    footerText.textContent =
        `© ${currentYear} Sayanth T. | Personal Portfolio`;

      }

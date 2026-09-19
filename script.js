/* =========================
   LOGIN SETTINGS
========================= */
const CORRECT_USER = "lumayapoojani";
const CORRECT_PASS = "onlyyou09"; // කැමති password එකක් මෙතනට දෙන්න

/* =========================
   LOADER
========================= */
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").classList.add("hide");
    }, 1200);
});

/* =========================
   LOGIN VALIDATION
========================= */
const loginForm = document.getElementById("loginForm");
const loginScreen = document.getElementById("loginScreen");
const loginCard = document.getElementById("loginCard");
const loginError = document.getElementById("loginError");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userVal = document.getElementById("username").value.trim().toLowerCase();
    const passVal = document.getElementById("password").value.trim();

    if (userVal === CORRECT_USER && passVal === CORRECT_PASS) {
        loginError.style.color = "#00ff88";
        loginError.textContent = "Welcome! Opening... ❤️";

        setTimeout(() => {
            loginScreen.classList.add("hide");
        }, 600);
    } else {
        loginError.style.color = "var(--light-red)";
        loginError.textContent = "Incorrect username or password. Try again!";
        loginCard.classList.remove("shake");
        void loginCard.offsetWidth; // Trigger reflow for animation
        loginCard.classList.add("shake");
    }
});

/* =========================
   PARTICLES
========================= */
const particlesContainer = document.querySelector(".particles");

for (let i = 0; i < 80; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDuration = (5 + Math.random() * 10) + "s";
    particle.style.animationDelay = Math.random() * 10 + "s";
    particle.style.opacity = Math.random() * .6;
    particlesContainer.appendChild(particle);
}

/* =========================
   OPEN SURPRISE
========================= */
const openBtn = document.getElementById("openBtn");
const intro = document.getElementById("intro");
const mainContent = document.getElementById("mainContent");

openBtn.addEventListener("click", () => {
    intro.classList.add("hide");

    setTimeout(() => {
        mainContent.classList.remove("hidden");

        setTimeout(() => {
            mainContent.classList.add("show");
        }, 100);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, 700);

    createConfetti(80);
});

/* =========================
   SCROLL REVEAL
========================= */
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(element => {
    observer.observe(element);
});

/* =========================
   CELEBRATION
========================= */
const celebrateBtn = document.getElementById("celebrateBtn");
const finalMessage = document.getElementById("finalMessage");

celebrateBtn.addEventListener("click", () => {
    createConfetti(180);
    finalMessage.style.display = "block";
    celebrateBtn.style.display = "none";
});

/* =========================
   CONFETTI
========================= */
function createConfetti(amount) {
    for (let i = 0; i < amount; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.background = getRandomColor();
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetti.style.animationDuration = (2 + Math.random() * 3) + "s";
        confetti.style.animationDelay = Math.random() * .8 + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

function getRandomColor() {
    const colors = [
        "#e50914",
        "#ff3341",
        "#ffffff",
        "#8b0000",
        "#ff6b6b"
    ];

    return colors[Math.floor(Math.random() * colors.length)];
}

/* =========================
   CLICK HEART EFFECT
========================= */
document.addEventListener("click", event => {
    if (
        event.target.tagName === "BUTTON" ||
        event.target.closest("button") ||
        event.target.tagName === "INPUT"
    ) {
        return;
    }

    const heart = document.createElement("div");
    heart.innerHTML = "♥";
    heart.style.position = "fixed";
    heart.style.left = event.clientX + "px";
    heart.style.top = event.clientY + "px";
    heart.style.color = "#e50914";
    heart.style.fontSize = "18px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";

    document.body.appendChild(heart);

    heart.animate(
        [
            {
                transform: "translateY(0) scale(1)",
                opacity: 1
            },
            {
                transform: "translateY(-80px) scale(1.5)",
                opacity: 0
            }
        ],
        {
            duration: 1000,
            easing: "ease-out"
        }
    );

    setTimeout(() => {
        heart.remove();
    }, 1000);
});
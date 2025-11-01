function myMenuFunction() {
    var menuBth = document.getElementById("myNavMenu");
    if (menuBth.className === "nav-menu") {
      menuBth.className += " responsive";
    } else {
      menuBth.className = "nav-menu";
    }
  }
  
  const body = document.querySelector("body");
  const toggleSwitch = document.getElementById("toggle-switch");
  
  toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    var typingeffect = new Typed(".typedText", {
      strings: ["Web Developer", "Coder", "Software Developer"],
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
      loop: true
    });
  });

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 1500,
    reset: true,
});

sr.reveal(".featured-name", {delay: 50});
sr.reveal(".text-info", {delay: 100});
sr.reveal(".text-btn", {delay: 100});
sr.reveal(".social_icons", {delay: 100});
sr.reveal(".featured-image", {delay: 150});

sr.reveal(".project-box", {interval: 50});

sr.reveal(".top-header",{});

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 1500,
    reset: true,
});

srLeft.reveal(".about-info", {delay: 50});
srLeft.reveal(".contact-info", {delay: 50});

const srRight = ScrollReveal({
    origin: "right",
    distance: "80px",
    duration: 1500,
    reset: true,
});

srRight.reveal(".tech-stack-container", {delay: 50});
srRight.reveal(".tech-card", {interval: 100});

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach((current) => {

        const sectionHeight = current.offsetHeight,

            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.add("active-link");
        } else {
            document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.remove("active-link");
        }
            

    });
}

window.addEventListener("scroll", scrollActive);

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();
  sendMail();
});

function sendMail() {
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("ranawatvansh-service", "template_tnbom0p", parms)
    .then(() => {
      alert("Email sent!!");
      document.getElementById("contact-form").reset();
    })
    .catch((error) => {
      console.error("Error sending email:", error);
    });
}

document.getElementById("downloadResumeBtn").addEventListener("click", function () {
  const downloadLink = document.createElement("a");
  downloadLink.href = "assets/Vansh Ranawat Resume.pdf";
  downloadLink.download = "Vansh_Ranawat_Resume.pdf";
  downloadLink.click();

  setTimeout(() => {
    window.open("assets/Vansh Ranawat Resume.pdf", "_blank");
  }, 300);
});
const filterBtns = document.querySelectorAll('.filter-btn');
const techCards = document.querySelectorAll('.tech-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    techCards.forEach(card => {
      const category = card.getAttribute('data-category');
      
      if (filter === 'all' || category === filter) {
        card.classList.remove('hidden');
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        }, 10);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.8)';
        setTimeout(() => {
          card.classList.add('hidden');
        }, 300);
      }
    });
  });
});
function animateCircularProgress() {
  const progressCircles = document.querySelectorAll('.circular-progress');
  
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressElement = entry.target;
        const percent = progressElement.getAttribute('data-percent');
        const circle = progressElement.querySelector('.progress-ring-circle');
        const radius = circle.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;
        const offset = circumference - (percent / 100) * circumference;

        circle.style.strokeDashoffset = offset;
        
        const progressText = progressElement.querySelector('.progress-text');
        let currentPercent = 0;
        const interval = setInterval(() => {
          if (currentPercent >= percent) {
            clearInterval(interval);
          } else {
            currentPercent++;
            progressText.textContent = currentPercent + '%';
          }
        }, 20);

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  progressCircles.forEach(circle => {
    observer.observe(circle);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  animateCircularProgress();
  
  techCards.forEach(card => {
    card.style.opacity = '1';
    card.style.transform = 'scale(1)';
    card.style.transition = 'all 0.3s ease';
  });
});
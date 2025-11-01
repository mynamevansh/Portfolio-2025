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

srRight.reveal(".skill", {delay: 50});
srRight.reveal(".skill-box", {delay: 50});

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
  event.preventDefault(); // Prevent the default form submission

  sendMail(); // Call the sendMail function
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
      document.getElementById("contact-form").reset(); // Reset the form controls
    })
    .catch((error) => {
      console.error("Error sending email:", error);
    });
}
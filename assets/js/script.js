'use strict';



const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }


const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});


const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});

const hireMeBtn = document.getElementById('hireMeBtn');
const contactSection = document.getElementById('contact');

hireMeBtn.addEventListener('click', function() {

  contactSection.scrollIntoView({ behavior: 'smooth' });
});



const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}

const themeToggleBtn = document.querySelector("[data-theme-btn]");
const aboutBanner = document.getElementById("themeDependentBanner");

themeToggleBtn.addEventListener("click", function () {
  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
 
    aboutBanner.querySelector("img").src = "./assets/images/Square_2.gif";
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");

    aboutBanner.querySelector("img").src = "./assets/images/Square_1.gif";
  }
});

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
  // Set the initial light mode GIF
  aboutBanner.querySelector("img").src = "./assets/images/Square_2.gif";
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
  // Set the initial dark mode GIF
  aboutBanner.querySelector("img").src = "./assets/images/Square_1.gif";
}


document.addEventListener('DOMContentLoaded', function () {

  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(function (card) {
    card.addEventListener('click', function (event) {
      event.preventDefault();

      const cardTitle = card.querySelector('.card-content .card-title').textContent;
      const hasAnnualKeyword = cardTitle.toLowerCase().includes('annual');

      if (hasAnnualKeyword) {
        const pdfURL = 'https://www.ssmc.com/img/ssmc/sustainabilityreports/report2022.pdf';
        window.open(pdfURL, '_blank');
      } else {
        const imageSrc = card.querySelector('.card-banner img').getAttribute('src');

        const modal = document.createElement('div');
        modal.classList.add('image-modal');

        const modalImage = document.createElement('img');
        modalImage.src = imageSrc;
        modal.appendChild(modalImage);

        document.body.appendChild(modal);

        modal.addEventListener('click', function () {
          modal.remove();
        });
      }
    });
  });
});

  function copyPhoneNumber(event) {
    event.preventDefault();
    const phoneNumber = '98733635'; 
    navigator.clipboard.writeText(phoneNumber); 
    
    event.target.style.color = 'var(--pink)';
    event.target.textContent = 'Number Copied!';
    setTimeout(() => {
      event.target.textContent = phoneNumber; 
      event.target.style.color = 'var(--color-secondary)';
    }, 1500); 
  }

  function copyEmail(event) {
    event.preventDefault();
    const emailAddress = 'taylazhou@gmail.com'; 
    navigator.clipboard.writeText(emailAddress); 
    
    event.target.style.color = 'var(--pink)';
    event.target.textContent = 'Email Address Copied!';
    setTimeout(() => {
      event.target.textContent = emailAddress; 
      event.target.style.color = 'var(--color-secondary)';
    }, 1500); 
  }

  function downloadCV() {
    const link = document.createElement('a');
    link.href = './assets/Tayla_Zhou_Resume.pdf'; 
    link.download = 'Tayla_Zhou_Resume.pdf';
    link.click();
  }
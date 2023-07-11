// Navbar responsive:
const body = document.querySelector("body");
    const navbar = document.querySelector(".navbar");
    const menuBtn = document.querySelector(".menu-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    menuBtn.onclick = ()=>{
      navbar.classList.add("show");
      menuBtn.classList.add("hide");
      body.classList.add("disabled");
    }
    cancelBtn.onclick = ()=>{
      body.classList.remove("disabled");
      navbar.classList.remove("show");
      menuBtn.classList.remove("hide");
    }

    // scroll reveal: 

    function revealSections() {
      var sections = document.querySelectorAll('.scroll-reveal');
    
      sections.forEach(function(section) {
        if (section.getBoundingClientRect().top <= window.innerHeight * 0.75) {
          section.style.opacity = 1;
          section.style.transform = 'translateY(0)';
        }
      });
    }
    window.addEventListener('scroll', revealSections);
    window.addEventListener('load', revealSections);
    
// DROPDOWN LANGAGE

function toggleDropdown() {
  var languageList = document.getElementById("language-list");
  if (languageList.style.display === "none") {
    languageList.style.display = "block";
  } else {
    languageList.style.display = "none";
  }
}
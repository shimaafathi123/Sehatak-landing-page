const elements = document.querySelectorAll('.element');

elements.forEach((element) => {
    element.addEventListener('click', function() {
        elements.forEach((el) => {
            el.style.color = '';   
            el.style.fontWeight = '';  
            el.style.opacity='';
            el.style.backgroundColor="";

            
   
        });
        this.style.color = 'rgb(50, 98, 174)';  
        this.style.fontWeight = 'bold';  
        this.style.opacity='1';
        this.style.backgroundColor="white";
    });
});

function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('active');
}

window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 10) { 
      header.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2)';
  } else {
      header.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  }
});
function switchLanguage(lang) {
  const englishElements = document.querySelectorAll('.en');
  const arabicElements = document.querySelectorAll('.arabic');

  if (lang === 'en') {
      englishElements.forEach(el => el.classList.remove('hidden'));
      arabicElements.forEach(el => el.classList.add('hidden'));
  } else {
      arabicElements.forEach(el => el.classList.remove('hidden'));
      englishElements.forEach(el => el.classList.add('hidden'));
  }
}
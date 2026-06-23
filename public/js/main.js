// JavaScript global untuk Gardabudaya.org

document.addEventListener('DOMContentLoaded', () => {
  setupNavbar();
  setupScrollToTop();
});

// Setup responsive mobile navbar toggle
function setupNavbar() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
}

// Scroll to top button functionality
function setupScrollToTop() {
  const scrollBtn = document.createElement('button');
  scrollBtn.innerHTML = '↑';
  scrollBtn.className = 'fixed bottom-5 right-5 bg-amber-700 hover:bg-amber-800 text-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 opacity-0 pointer-events-none z-50';
  document.body.appendChild(scrollBtn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.remove('opacity-0', 'pointer-events-none');
    } else {
      scrollBtn.classList.add('opacity-0', 'pointer-events-none');
    }
  });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

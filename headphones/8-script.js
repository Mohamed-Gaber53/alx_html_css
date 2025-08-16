// Hamburger menu – vanilla JS
(function(){
  const btn = document.querySelector('.hamburger');
  const body = document.body;
  if(!btn) return;
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    body.classList.toggle('nav-open');
  });
})();
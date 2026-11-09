// Menú mobile accesible: aria-expanded + aria-controls
const btn = document.querySelector('.menu-button');
const menu = document.getElementById('menu-principal');
const setMenu = (open) => {
  btn.setAttribute('aria-expanded', String(open));
  btn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  menu.classList.toggle('open', open);
};
btn.addEventListener('click', () => setMenu(btn.getAttribute('aria-expanded') !== 'true'));
menu.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') { setMenu(false); btn.focus(); }
});


// Formulario de contacto: abre Gmail con el mensaje preparado.
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    const fields = new FormData(contactForm);
    const nombre = String(fields.get('nombre') || '').trim();
    const email = String(fields.get('email') || '').trim();
    const mensaje = String(fields.get('mensaje') || '').trim();
    if (!nombre || !email || !mensaje) return;
    const subject = `Mensaje desde el portfolio - ${nombre}`;
    const body = `Nombre: ${nombre}\nCorreo: ${email}\n\nMensaje:\n${mensaje}`;
    const params = new URLSearchParams({
      view: 'cm', fs: '1', to: 'evelynjulio2006@gmail.com', su: subject, body
    });
    const url = `https://mail.google.com/mail/?${params.toString()}`;
    const newTab = window.open(url, '_blank', 'noopener,noreferrer');
    if (!newTab) window.location.href = url;
  });
}

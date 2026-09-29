const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");

menuToggle?.addEventListener("click", () => {
  const open = siteNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("menu-open", open);
});

document.querySelectorAll("#siteNav a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const header = document.querySelector(".site-header");
window.addEventListener("scroll", () => {
  header?.classList.toggle("scrolled", window.scrollY > 10);
}, { passive: true });

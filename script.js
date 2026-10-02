/* ÍCONES LUCIDE */
if (window.lucide) lucide.createIcons()

/* MENU MOBILE */
const menuBtn = document.querySelector(".menu-toggle")
const nav = document.querySelector(".nav")
const overlay = document.querySelector(".menu-overlay")

function setMenu(open) {
  nav.classList.toggle("active", open)
  overlay.classList.toggle("active", open)
  document.body.classList.toggle("no-scroll", open)
}

if (menuBtn && nav && overlay) {
  menuBtn.addEventListener("click", () => setMenu(!nav.classList.contains("active")))
  overlay.addEventListener("click", () => setMenu(false))
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)))
  window.addEventListener("resize", () => { if (window.innerWidth > 900) setMenu(false) })
}

/* SOMBRA DO HEADER AO ROLAR */
const header = document.querySelector(".header")
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 50)
window.addEventListener("scroll", onScroll, { passive: true })
onScroll()

/* ANIMAÇÃO AO ROLAR */
const reveals = document.querySelectorAll(".reveal")

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active")
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.15 })
  reveals.forEach(el => observer.observe(el))
} else {
  reveals.forEach(el => el.classList.add("active"))
}

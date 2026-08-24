const button = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-links");
button.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  nav.style.display = open ? "flex" : "";
  if (open) {
    nav.style.position = "absolute";
    nav.style.top = "72px";
    nav.style.right = "25px";
    nav.style.flexDirection = "column";
    nav.style.background = "#fff";
    nav.style.padding = "18px 22px";
    nav.style.border = "1px solid #e2e5ec";
    nav.style.borderRadius = "12px";
    nav.style.boxShadow = "0 15px 35px rgba(20,25,45,.10)";
  }
});
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 800) {
      nav.classList.remove("open");
      nav.style.display = "";
    }
  });
});

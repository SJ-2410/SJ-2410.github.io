const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav nav");
if (menu) {
  menu.addEventListener("click", () => {
    nav.style.display = nav.style.display === "flex" ? "" : "flex";
    nav.style.position = "absolute";
    nav.style.top = "74px";
    nav.style.right = "24px";
    nav.style.flexDirection = "column";
    nav.style.background = "white";
    nav.style.padding = "18px";
    nav.style.border = "1px solid #e4e7ee";
    nav.style.borderRadius = "12px";
  });
}

const menuButton = document.querySelector(".menu-button");


function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
  const menu = document.querySelector(".menu");
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

handleResize();
window.addEventListener("resize", handleResize);
 


const gallery = document.querySelector(".gallery");
const modal = document.querySelector(".modal-viewer");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close-viewer");

gallery.addEventListener("click", (event) => {
  const clickedImg = event.target.closest("img");
  if (!clickedImg) return;

  const src = clickedImg.getAttribute("src");
  const alt = clickedImg.getAttribute("alt");

  const fullSrc = src.split("-")[0] + "-full.jpeg";
  modalImg.src = fullSrc;
  modalImg.alt = alt;
  modal.showModal();
});

closeBtn.addEventListener("click", () => {
  modal.close();
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.close();
  }
});

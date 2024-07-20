import "@fortawesome/fontawesome-free/css/all.css";
import Modal from "./components/Modal.js";
import IdeaForm from "./components/IdeaForm.js";
import "./css/style.css";

// npm i @fortawesome/fontawesome-free

// Carried to Modal.js
// const modal = document.querySelector("#modal");
// const modalBtn = document.querySelector("#modal-btn");

const modal = new Modal();
const ideaForm = new IdeaForm();
ideaForm.render();

// function open() {
//   modal.style.display = "block";
// }

// function close() {
//   modal.style.display = "none";
// }

// function outsideClick(e) {
//   if (e.target === modal) {
//     close();
//   }
// }

// modalBtn.addEventListener("click", open);
// window.addEventListener("click", outsideClick);

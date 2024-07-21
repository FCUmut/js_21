import "@fortawesome/fontawesome-free/css/all.css";
import Modal from "./components/Modal.js";
import IdeaForm from "./components/IdeaForm.js";
import IdeaList from "./components/IdeaList.js";
import "./css/style.css";

// npm i @fortawesome/fontawesome-free

// Carried to Modal.js
// const modal = document.querySelector("#modal");
// const modalBtn = document.querySelector("#modal-btn");

const modal = new Modal();
const ideaForm = new IdeaForm();
const ideaList = new IdeaList();
ideaForm.render();
ideaList.render();

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

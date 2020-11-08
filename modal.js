const buttonDiv = document.querySelector(".modal_button"),
    openBtn = buttonDiv.querySelector("button"),
    modal = document.querySelector(".modal"),
    modalContent = modal.querySelector(".modal_content"),
    closeBtn = modal.querySelector("button");

const HIDDEN = "hidden";
const HIDDEN_PER = "0%";
const SHOW_PER = "110%";

function handleCloseModal() {
    // modal.classList.add(HIDDEN);
    modalContent.style.right = HIDDEN_PER;
}

function handleOpenModal() {
    // modal.classList.remove(HIDDEN);
    console.log("C");
    modalContent.style.right = SHOW_PER;
    closeBtn.addEventListener("click", handleCloseModal);

}

function init(){
    openBtn.addEventListener("click", handleOpenModal);
}

init();

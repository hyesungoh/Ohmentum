const buttonDiv = document.querySelector(".modal_button"),
    openBtn = buttonDiv.querySelector("button"),
    modal = document.querySelector(".modal"),
    modalContent = modal.querySelector(".modal_content"),
    closeBtn = modal.querySelector("button"),
    textarea = modal.querySelector("textarea");
    

const HIDDEN_PER = "0%";
const SHOW_PER = "110%";

const MEMO_LS = "memo";

function handleTextSubmit(event){
    if (event.keyCode == 13) {
        if (!event.shiftKey) {
            event.preventDefault();
            
            const text = textarea.value;
            localStorage.setItem(MEMO_LS, text);
        }
    }
}

function handleCloseModal() {
    modalContent.style.right = HIDDEN_PER;
}

function handleOpenModal() {
    modalContent.style.right = SHOW_PER;
    closeBtn.addEventListener("click", handleCloseModal);

}

function loadMemo(){
    const memo = localStorage.getItem(MEMO_LS);
    if (memo === null) {

    } else {
        textarea.value = memo;
    }
}

function init(){
    loadMemo();
    openBtn.addEventListener("click", handleOpenModal);
    textarea.addEventListener("keydown", handleTextSubmit);
}

init();

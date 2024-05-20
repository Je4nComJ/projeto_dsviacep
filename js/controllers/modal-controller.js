
 function State(){
    this.container = null;
    this.btnClose = null;
}

const state = new State();


export function init(){
    state.container = document.querySelector("#modal-contact");
    state.btnClose = document.querySelector("#modal-contact-close");

    state.btnClose.addEventListener('click', hanbleBtnCloseClick);
    state.container.addEventListener('click', handleContainerClick);
}

export function showModal(){
    state.container.classList.add("active");
}

export function closeModal(){
    state.container.classList.remove("active");
}

function hanbleBtnCloseClick(event){
    event.preventDefault();
    closeModal();
}

function handleContainerClick(event){
    event.preventDefault();
    if(event.target === this){
        closeModal();
    }
}
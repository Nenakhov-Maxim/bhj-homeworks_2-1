const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const btnSuccess = document.getElementsByClassName('btn_danger')[0];
const btnClose = Array.from(document.getElementsByClassName('modal__close_times'));

function showModalMain() {
    modalMain.classList.add('modal_active');
}

function clickBtn() {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
}

function closeForm() {
    console.log(this.closest('div.modal'));
    this.closest('div.modal').classList.remove('modal_active');
}


document.addEventListener('DOMContentLoaded', showModalMain);
btnSuccess.addEventListener('click', clickBtn);
for (let i = 0; i < btnClose.length; i++) {
    const element = btnClose[i];
    element.addEventListener('click', closeForm);
}
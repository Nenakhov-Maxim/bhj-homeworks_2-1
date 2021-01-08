document.getElementById('modal_main').className = 'modal modal_active';
let modalClose = document.getElementsByClassName('modal__close modal__close_times');
let firstModalClose = modalClose.item(0);
firstModalClose.onclick = modalCloses;
modalClose.item(1).onclick = successModalCloses;
let doGreat = document.getElementsByClassName('btn btn_danger modal__close show-success');
doGreat.item(0).onclick = showGreat;

function showGreat() {
    modalCloses();
    document.getElementById('modal_success').className = 'modal modal_active';
}

function modalCloses() {
    document.getElementById('modal_main').className = 'modal';
}

function successModalCloses() {
    document.getElementById('modal_success').className = 'modal';
}
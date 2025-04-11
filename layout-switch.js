let cardViewButtonGrid = document.querySelector('.card-view-button-grid');
let cardViewButtonList = document.querySelector('.card-view-button-list');
let cardsList = document.querySelector('.cards');

cardViewButtonList.onclick = function () {
    cardsList.classList.add('list');
    cardViewButtonGrid.classList.remove('active');
    cardViewButtonList.classList.add('active');
}

cardViewButtonGrid.onclick = function () {
    cardsList.classList.remove('list');
    cardViewButtonList.classList.remove('active');
    cardViewButtonGrid.classList.add('active');
}
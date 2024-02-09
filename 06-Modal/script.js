'use strict';

let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let btncloseModal = document.querySelector('.close-modal');
let btnshowModal = document.querySelectorAll('.show-modal');

let openModal = function (){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

let closeModal = function (){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i=0;i<btnshowModal.length;i++){
    btnshowModal[i].addEventListener('click', openModal);
}

btncloseModal.addEventListener('click',closeModal);
overlay.addEventListener('click',closeModal);

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
        closeModal();
    }
})
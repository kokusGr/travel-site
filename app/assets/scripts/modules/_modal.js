/*jshint esversion: 6 */

var modal = function () {
  let modal = document.querySelector('.modal');
  let triggers = document.getElementsByClassName('btn');
  let closeButton = document.getElementsByClassName('modal__close-x')[0];
  
  let showModal = function () {
    modal.classList.add('modal--is-visible');
  };
  
  let addEvents = function () {
    for(let item of triggers) {
      item.addEventListener('click', showModal);
    }
    
    closeButton.addEventListener('click', closeModal);
    document.addEventListener('keydown', function(e){
      keyPressHandler(e);
    });
  };
  
  let keyPressHandler = function(e) {
    if(e.which === 27)
      closeModal();
  };
  
  let closeModal = function () {
    modal.classList.remove('modal--is-visible');
  };
  
  let init = function () {
    addEvents();
  };
  
  return {
    init
  };
};

export default modal();
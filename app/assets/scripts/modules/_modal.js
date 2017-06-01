/*jshint esversion: 6 */

var modal = function () {
  let modal = document.querySelector('.modal');
  let triggers = document.getElementsByClassName('btn');
  
  let hideInitially = function () {
    modal.classList.add('modal--is-hidden');
  };
  let showModal = function () {
    modal.classList.remove('modal--is-hidden');
  };
  
  let addEvents = function () {
    for(let item of triggers) {
      item.addEventListener('click', showModal);
    }
  };
  
  let init = function () {
    hideInitially();
    addEvents();
  };
  
  return {
    init
  };
};

export default modal();
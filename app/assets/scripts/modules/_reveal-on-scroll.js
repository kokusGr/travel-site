/*jshint esversion: 6 */

import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

var revealOnScroll = function () {
  
  let itemsToReveal = [];
  let lazyImages = document.getElementsByClassName('lazyload');
  
  let refreshWaypointsListener = function() {
    for (let item of lazyImages) {
      item.addEventListener('load', Waypoint.refreshAll);
    }
  };
  
  let setItemsToReveal = function (selectors) {
    if(typeof selectors === 'string') {
      selectors = [selectors];
    }
    
    for(let item of selectors) {
      itemsToReveal.push(...document.getElementsByClassName(item));
    }
  };
  
  let init = function (settings) {
    let offset = settings.offset || '80%';
    setItemsToReveal(settings.selectors);
    hideInitially();
    createWaypoints(offset);
    refreshWaypointsListener();
  };
  
  let hideInitially = function () {
    for(let item of itemsToReveal) {
      item.classList.add('reveal-item', 'reveal-item--hidden');
    }
  };
  
  let createWaypoints = function (offset) {
    for(let item of itemsToReveal) {
      new Waypoint({
        element: item,
        handler: function() {
          item.classList.remove('reveal-item--hidden');
        },
        offset: offset.toString()
      });
    }
  };
  
  return {
    init
  };
};

export default revealOnScroll;
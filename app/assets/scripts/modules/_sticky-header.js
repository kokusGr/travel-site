/*jshint esversion: 6 */
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

var stickyHeader = function() {
  
  let siteHeader = document.getElementsByClassName('site-header')[0];
  let trigger = document.getElementsByClassName('large-hero__title')[0];
  let pageSections = document.getElementsByClassName('page-section');
  let links = document.querySelectorAll('.primary-nav a');
  
  let init = function () {
    createHeaderWaypoint();
    createLinkHighlightWaypoints();
  };
  
  let createHeaderWaypoint = function() {
    new Waypoint({
      element: trigger,
      handler: function(direction) {
        if(direction === 'up'){
          siteHeader.classList.remove('site-header--sticky');
          clearHighlight();
        } 
        else {
          siteHeader.classList.add('site-header--sticky');
        }        
      },
      offset: "0%"
    });
  };
  let clearHighlight = function() {
    for (let item of links) {
      item.classList.remove('is-highlighted');
    }
  };
  let addHighlight = function(item) {
    let linkID = item.getAttribute('data-matching-link');
    let matchingLink = document.getElementById(linkID);
    matchingLink.classList.add('is-highlighted');
  };
  let createLinkHighlightWaypoints = function() {
    for (let item of pageSections) {
      new Waypoint({
        element: item,
        handler: function(direction) {
          if(direction === "up") {
            clearHighlight();
            addHighlight(item);
          }
        },
        offset: function() {
          return - (this.element.clientHeight - (window.innerHeight * 0.6));
        }
      });
      
      new Waypoint({
        element: item,
        handler: function(direction) {
          if(direction === 'down') {
            clearHighlight();
            addHighlight(item);
          }
        },
        offset: '25%'
      });
    }
  };
  
  return {
    init
  };
};

export default stickyHeader();
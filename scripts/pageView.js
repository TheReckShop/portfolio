'use strict'

var viewController = {};

viewController.handleNav = function() {
  $('.main-nav').on('click', '.active-nav-tab', function(){
    $('.tab-content').hide();
    console.log('clicked on', $(this).data('section'));
    $('#' + $(this).data('section') + '-display').fadeIn();
  });
  $('.main-nav .active-nav-tab:first').click();
};

viewController.handleNav();

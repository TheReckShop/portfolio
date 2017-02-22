'use strict'

var viewController = {};

viewController.handleNav = function() {
  $('.main-nav').on('click', '.active-nav-tab', function(){
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });
  $('.main-nav .active-nav-tab:first').click();
};

viewController.handleNav();

'use strict'

$('main-nav:fist-child').on('click', 'li', function(){
  $('#page-nav li').removeClass('active-nav-tab')//Removes the listed class from page-nav li
  $(this).addClass('active-nav-tab');
  $('#page-content section').hide();
  $('#' + $(this).data('section')).show();
});

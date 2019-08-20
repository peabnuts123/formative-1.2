// When user clicks menu-open icon
$('#menu-open').click(function () {
  // Hide the menu-open icon by adding the class 'hidden'
  $('#menu-open').toggleClass('hidden');

  // Show the menu-close icon by removing the class 'hidden';
  $('#menu-close').toggleClass('hidden');
  // Show the mobile nav by removing the class 'hidden'
  $('#nav-mobile').toggleClass('hidden');
});

// When user clicks menu-close icon
$('#menu-close').click(function () {
  // Hide the menu-close icon by adding the class 'hidden'
  $('#menu-close').toggleClass('hidden');
  // Hide the mobile nav by adding the class 'hidden'
  $('#nav-mobile').toggleClass('hidden');

  // Show the menu-open icon by removing the class 'hidden';
  $('#menu-open').toggleClass('hidden');
});

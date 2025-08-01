// Call images
$(function() {

  // add data-fancybox to HTML
  $(".gallery-page").attr("data-fancybox", "gallery");
  $('[data-fancybox="gallery"]').fancybox();

  // Show Image Gallery button (hidden by default for those without javascript)
  $( ".issue_gallery" ).removeClass("hide");

});

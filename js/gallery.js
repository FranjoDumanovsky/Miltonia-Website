
$(document).ready(function(){
  $('.list').click(function(){
    const value = $(this).attr('data-filter');
    if (value == 'all') {
      $('.itemBox').show('1000');
    }
    else {
      $('.itemBox').not('.'+value).hide('1000');
      $('.itemBox').filter('.'+value).show('1000');
    }
  })
  // add active class on seklected item

  $('.list').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
  })
})



$(document).click(function(event) {
  //if you click on anything except the modal itself or the "open modal" link, close the modal
  if (!$(event.target).closest("li").length) {
    $("body").find(".modal").removeClass("visible");
  }
});
$('#content').hide();
$('#magicMouseCursor').hide();
$('#magicPointer').hide();


$(window).on('load', function() {
  $('#magicMouseCursor').hide();
  $('#magicPointer').hide();
  
   setTimeout(function() { 
    $('#magicMouseCursor').show();
    $('#magicPointer').show();
     
    $("#preloader").remove();
    $('#content').show();
  }, 500);
});

function getParam(param){
  return new URLSearchParams(window.location.search).get(param);
}

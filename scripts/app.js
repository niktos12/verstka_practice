$(document).ready(function() {
    $('.card').flip({
        trigger: 'click',
    });
    $('.card-btn').on('click', function() {
        $('.card').flip();
      });
      
});
const btnShow = $("#all-cards-btn")
const card = $("#card")
btnShow.on("click",function(){
        console.log($(window).width())
});
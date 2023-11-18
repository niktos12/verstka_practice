$(document).ready(function() {
    $('.card').flip({
        trigger: 'click',
    });
    $(this).on('click', function() {
        $('.card').flip();
        // $('.card').flip(true);
      });

      $(this).on('click', function() {
        $('.card').flip();
        // $('.back').css('display', 'flex');
        // $('.card').flip(false);
      });
});

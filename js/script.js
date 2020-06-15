// console.log('hello');

const navBar = document.querySelector('.navbar-nav');
const overlay = document.querySelector('.overlay');
const navMenu = document.querySelector('.nav-item');

$(".navBtn").click(function(){
  $('img',this).toggle();
  navBar.classList.toggle('expanded');
  overlay.classList.toggle('expanded');
});

$('.nav-item').click(function(){
  $('.overlay').removeClass('expanded');
  navBar.classList.toggle('expanded');
    $('.closeBtn').addClass('hidden');
    $('.navIcon').attr('style','display:block;')

})

$(window).bind('scroll', function () {
    if ($(window).scrollTop() >= 50) {
        $('.topNavBar').attr('style', 'background-color:white;');
    } else {
      $('.topNavBar').attr('style', 'background-color:transparent;');
    }
});

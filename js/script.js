const mobile_menu = document.querySelector('#mobile-menu');
const menu_btn = document.querySelector('#navbar_btn');

menu_btn.addEventListener('click', () => {
    mobile_menu.style.display === 'none' ? mobile_menu.style.display = 'block' : mobile_menu.style.display = 'none';
    // mobile_menu.style.display = 'flex' ? : ''}
})

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  window.onload = function () {
    var mySwiper = new Swiper('.swiper-container', {
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
   autoplay: {
     delay: 5000,
   },
 
 });
  }

  $(function(){
    $("#phone-f").mask("+3(099) 999-9999");
  });

  function validate(evt) {
    var theEvent = evt || window.event;
  
    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
    // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }

  function feedback_post(){
    const feedback_form = $('#order-form').serialize();
    $.ajax({
        url: "send.php",
        cache: false,
        data: feedback_form,
        type: 'POST',
        dataType: 'json'
    })
    .done(function( text ) {
      const popupcontainer = document.querySelector('.overlay');
        if(text.error) {
          popupcontainer.querySelector('h2').innerText = 'Ошибка!'
          popupcontainer.querySelector('.content').innerText = text.error;
          popupcontainer.classList.add('visible');
        }else if (text.msg){
          popupcontainer.querySelector('h2').innerText = 'Заказ отправлен!'
          popupcontainer.querySelector('.content').innerText = text.msg
          popupcontainer.classList.add('visible');

          console.log(text.msg)
          let inputs = document.querySelectorAll('#order-form input');
          inputs.forEach(input => input.value = '');
        }
    });
  }


$('#orderform-btn').on('click', function(e){
    feedback_post();
});

$('#close-popup').on('click', function(){
  const popupcontainer = document.querySelector('.overlay');
  popupcontainer.querySelector('h2').innerText = ''
  popupcontainer.querySelector('.content').innerText = ''
  popupcontainer.classList.remove('visible');
});
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector('.cabecera').classList.add('sticky');
  } else {
    document.querySelector('.cabecera').classList.remove('sticky');
  }
}



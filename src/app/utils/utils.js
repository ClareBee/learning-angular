var body = document.body,
    timer;

export function disableHover() {
  window.addEventListener('scroll', function() {
    clearTimeout(timer);
    if(!body.classList.contains('disable-hover')) {
      body.classList.add('disable-hover')
    }

    timer = setTimeout(function(){
      body.classList.remove('disable-hover')
    },500);
  }, false);
}

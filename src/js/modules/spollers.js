const spollers = () => {

  const mediaSpoller = document.querySelector('[data-media-spoller]').getAttribute('data-media-spoller').split(',');

  if (mediaSpoller.length > 0) {
    let mediaQueries = `(${mediaSpoller[1]}-width: ${mediaSpoller[0]}px)`;

    const matchMedia = window.matchMedia(mediaQueries);
    //Событие
    matchMedia.addListener(() => initSpollers(matchMedia));

    initSpollers(matchMedia);
  }

  function initSpollers(matchMedia) {
    document.querySelectorAll('.menu-footer__title').forEach(el => {
      if (matchMedia.matches) {
        el.addEventListener('click', spollerAction);
      } else {
        el.removeEventListener('click', spollerAction);
      }
    });
  }

  function spollerAction(e) {
    const target = e.target;
    if (target.hasAttribute('data-spoller')) {
      const spollerTitle = target.hasAttribute('data-spoller') ? target : target.closest('[data-spoller]');
      const content = spollerTitle.nextElementSibling;
      spollerTitle.classList.toggle('spoller_active');
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    }
  }

};

export default spollers;
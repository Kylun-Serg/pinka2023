const scrollMenu = () => {
  const headerMenu = document.querySelector('.top-header');
  const toolbar = document.querySelector('.navigation-toolbar');
  const footer = document.querySelector('.footer');
  const breakpoint = window.matchMedia('(max-width: 768px)');

  const breakpointCheck = function () {
    if (breakpoint.matches === false) {
      window.removeEventListener('scroll', enableToolbar);
      toolbar.classList.remove('navigation-toolbar_active');
      footer.style.paddingBottom = '0px';
    } else {
      window.addEventListener('scroll', enableToolbar);
    }
  }


  function enableToolbar() {
    let currentScrollPos = window.pageYOffset;
    if (currentScrollPos > headerMenu.clientHeight + 30) {
      toolbar.classList.add('navigation-toolbar_active');
      footer.style.paddingBottom = '10vh';
    } else {
      toolbar.classList.remove('navigation-toolbar_active');
      footer.style.paddingBottom = '0px';
    }
  }

  breakpoint.addListener(breakpointCheck);

  breakpointCheck(breakpoint);

};

export default scrollMenu;
const accordion = (triggerSelector) => {
  const btns = document.querySelectorAll(triggerSelector);
  // const content = document.querySelectorAll('.item-filter-catalog__content');

  // content.forEach(content => {
  //   if (content.classList.contains('item-filter-catalog__content_active')) {

  //   }
  // });

  btns.forEach(btn => {
    const content = btn.nextElementSibling;
    if (content.classList.contains('accordion-content_active')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = '0px';
    }

    btn.addEventListener('click', function () {
      this.classList.toggle('accordion-heading_active')
      this.nextElementSibling.classList.toggle('accordion-content_active');

      if (this.classList.contains('accordion-heading_active')) {
        const countChildren = this.nextElementSibling.children.length;
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + countChildren * 16 + 'px';
      } else {
        this.nextElementSibling.style.maxHeight = '0px';
      }
    });
  });
};

export default accordion;
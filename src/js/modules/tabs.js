/**/
export class Tabs {
  constructor(selector, options) {
    try {
      let defaultOptions = {
        isChanged: () => { }
      }
      this.options = Object.assign(defaultOptions, options);
      this.selector = selector;
      this.tabs = document.querySelector(`[data-tabs="${selector}"]`);
      if (this.tabs) {
        this.tabsList = this.tabs.querySelector('.tabs__nav');
        this.tabsBtns = this.tabsList.querySelectorAll('.tabs__btn');
        this.tabsPanels = this.tabs.querySelectorAll('.tabs__panel');
      } else {
        // console.error('Selector data-tabs dont exist');
        return;
      }
      this.check();
      this.init();
      this.events();
    } catch (error) {

    }

  }

  check() {
    if (document.querySelectorAll(`[data-tabs="${this.selector}"]`).length > 1) {
      console.error('the number of elements with the same data is greater than one');
      return;
    }

    if (this.tabsBtns.length !== this.tabsPanels.length) {
      console.error('number of elements does not match');
      return;
    }
  }

  init() {
    this.tabsList.setAttribute('role', 'tablist');
    this.tabsBtns.forEach((el, i) => {
      el.setAttribute('role', 'tab');
      el.setAttribute('tabindex', '-1');
      el.setAttribute('id', `${this.selector}${i + 1}`);
      el.classList.remove('tabs__btn_active');
    });
    this.tabsPanels.forEach((el, i) => {
      el.setAttribute('role', 'tabpanel');
      el.setAttribute('tabindex', '-1');
      el.setAttribute('aria-labelledby', this.tabsBtns[i].id);
      el.classList.remove('tabs__panel_active');
    });

    this.tabsBtns[0].classList.add('tabs__btn_active');
    this.tabsBtns[0].removeAttribute('tabindex');
    this.tabsBtns[0].setAttribute('aria-selected', 'true');
    this.tabsPanels[0].classList.add('tabs__panel_active');
  }

  events() {
    this.tabsBtns.forEach((el, i) => {
      el.addEventListener('click', (e) => {
        let currentTab = this.tabsList.querySelector('[aria-selected]');
        if (e.currentTarget !== currentTab) {
          this.switchTabs(e.currentTarget, currentTab);
        }
      });
      el.addEventListener('keydown', (e) => {
        let index = Array.prototype.indexOf.call(this.tabsBtns, e.currentTarget);

        let dir = null;

        if (e.which === 37) {
          dir = index - 1;
        } else if (e.which === 39) {
          dir = index + 1;
        } else if (e.which === 40) {
          dir = 'down';
        } else {
          dir = 'null';
        }

        if (dir !== null) {
          if (dir === 'down') {
            this.tabsPanels[i].focus();
          } else if (this.tabsBtns[dir]) {
            this.switchTabs(this.tabsBtns[dir], e.currentTarget);
          } else {
          }
        }
      });
    });
  }

  switchTabs(newTab, oldTab) {
    newTab.focus();
    newTab.removeAttribute('tabindex');
    newTab.setAttribute('aria-selected', 'true');

    oldTab.removeAttribute('aria-selected');
    oldTab.setAttribute('tabindex', '-1');

    let index = Array.prototype.indexOf.call(this.tabsBtns, newTab);
    let oldIndex = Array.prototype.indexOf.call(this.tabsBtns, oldTab);

    this.tabsPanels[oldIndex].classList.remove('tabs__panel_active');
    this.tabsPanels[index].classList.add('tabs__panel_active');

    this.tabsBtns[oldIndex].classList.remove('tabs__btn_active');
    this.tabsBtns[index].classList.add('tabs__btn_active');

    this.options.isChanged(this);
  }
}
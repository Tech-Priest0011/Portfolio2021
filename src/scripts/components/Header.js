export default class Header {
  constructor(element) {
    this.element = element;
    this.header = document.querySelector('header');
    this.scrollLimit = this.header.dataset.scrolling;
    this.hideScroll = this.header.dataset.autohide;
    this.scrollPosition = 0;
    this.lastScrollPosition = 0;
    this.html = document.documentElement;
    this.init();
    this.initMobile();
  }

  init() {
    console.log('Voici Mon Header');

    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  onScroll() {
    this.lastScrollPosition = this.scrollPosition;
    this.scrollPosition = document.scrollingElement.scrollTop;
    this.setHeaderState();
    this.setDirectionState();
  }

  setHeaderState() {
    const scrollHeight = document.scrollingElement.scrollHeight;
    /** this.hideScroll == X - X doit correspondre au data-autohide du html pour que le header se cache automatiquement */
    if (this.hideScroll == 'true') {
      if (this.scrollPosition > scrollHeight * this.scrollLimit) {
        this.html.classList.add('header-is-hidden');
      } else {
        this.html.classList.remove('header-is-hidden');
      }
    }
  }

  setDirectionState() {
    if (this.scrollPosition >= this.lastScrollPosition) {
      this.html.classList.add('is-scrolling-down');
      this.html.classList.remove('is-scrolling-up');
    } else {
      this.html.classList.remove('is-scrolling-down');
      this.html.classList.add('is-scrolling-up');
    }
  }

  initMobile() {
    const toggle = this.element.querySelector('.js-toggle');
    toggle.addEventListener('click', this.onToggleNav.bind(this));
  }

  /** Permet au menu mobile de s'afficher completement et recacher le header apres avoir fermer la nav mobile */
  onToggleNav() {
    this.html.classList.toggle('nav-is-active');
    if (this.html.classList.contains('nav-is-active')) {
      console.log = 'nav active trouver';
      this.scrollLimit = '1';
    } else {
      this.scrollLimit = this.header.dataset.scrolling;
    }
  }
}

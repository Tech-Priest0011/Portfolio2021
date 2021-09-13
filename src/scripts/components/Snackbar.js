import Cache from '../utils/Cache';

/** Composante Snackbar de TimTools */
export default class Snackbar {
  /**
   * Méthode constructeur
   * @param {HTMLElement} element - Élément HTML sur lequel la composante est instanciée
   */
  constructor(element) {
    this.element = element;
    this.snackbar = document.querySelector('.snackbar');
    this.scrollLimit = this.snackbar.dataset.scrolling;
    this.hideScroll = this.snackbar.dataset.autohide;
    this.idSnack = this.snackbar.dataset.id;
    this.scrollPosition = 0;
    this.lastScrollPosition = 0;
    this.html = document.documentElement;
    this.init();
  }

  /**
   * Méthode d'initialisation
   */
  init() {
    console.log('Nouvelle instance de la composante -> Snackbar');

    window.addEventListener('scroll', this.onScroll.bind(this));
    const close = this.element.querySelector('.js-close');
    close.addEventListener('click', this.closeSnackbar.bind(this));
    this.checkCache();
  }

  onScroll() {
    this.lastScrollPosition = this.scrollPosition;
    this.scrollPosition = document.scrollingElement.scrollTop;
    this.setSnackbarState();
    this.setDirectionState();
  }

  setSnackbarState() {
    const scrollHeight = document.scrollingElement.scrollHeight;
    /** this.hideScroll == X - X doit correspondre au data-autohide du html pour que le header se cache automatiquement */
    if (this.hideScroll == 'true') {
      if (this.scrollPosition > scrollHeight * this.scrollLimit) {
        this.html.classList.add('snackbar-is-hidden');
      } else {
        this.html.classList.remove('snackbar-is-hidden');
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

  /** Vérifie si la valeur de la cache est la meme que celle du data-id de la Snackbar */
  /** Si les valeurs sont les memes la snackbar ne s'affichent pas */
  checkCache() {
    console.log(this.idSnack);

    const defaultNum = Cache.get('snackNum');
    console.log(defaultNum);
    if (defaultNum == this.idSnack) {
      this.closeSnackbar();
    } else {
      setTimeout(this.openSnackbar.bind(this), 2000);
    }
  }

  /** Ferme la snackbar avec le bouton et envoie la valeur du data-id a la cache */
  closeSnackbar() {
    console.log('Fermer le snackbar');
    this.snackbar.classList.add('snackbar-close');

    Cache.remove('snackNum');

    Cache.set('snackNum', this.idSnack);
  }

  openSnackbar() {
    this.snackbar.classList.add('snackbar-open');
  }
}

/** Composante Scrolly de TimTools */
export default class Scrolly {
  /**
   * Méthode constructeur
   * @param {HTMLElement} element - Élément HTML sur lequel la composante est instanciée
   */
  constructor(element) {
    this.element = element;
    this.options = {
      rootMargin:
        '0px 0px 0px 450px' /* Peut etre changer pour quand le scrolly s'active (dans le sens des aiguilles) */,
    };
    this.init();
  }

  /**
   * Méthode d'initialisation
   */
  init() {
    this.observer = new IntersectionObserver(this.watch.bind(this), this.options);

    const items = this.element.querySelectorAll('[data-scrolly]');
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      this.observer.observe(item);
    }
  }
  /** Observe au rootMargin et active le scrolly rendu a l'interieure */
  watch(entries) {
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      const target = entry.target;

      if (entry.isIntersecting) {
        target.classList.add('is-active');
        this.observer.unobserve(target); //Animation off en remontant (Au choix)
      } else {
        target.classList.remove('is-active');
      }
    }
  }
}

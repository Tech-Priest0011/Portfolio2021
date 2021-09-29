import Utils from '../utils/Utils';
/** Composante Modal de TimTools */
export default class Modal {
  /**
   * Méthode constructeur
   * @param {HTMLElement} element - Élément HTML sur lequel la composante est instanciée
   */
  constructor(element) {
    this.element = element;
    this.modalId = this.element.dataset.modalId;
    this.init();
  }

  /**
   * Méthode d'initialisation
   */
  init() {
    console.log('Je suis Modal');

    this.element.addEventListener('click', this.open.bind(this));
    this.close = this.close.bind(this);
    this.onEscape = this.onEscape.bind(this);
  }

  updateContent() {
    if (this.modalId == 'tpl-modal-tool') {
      this.modalElement.innerHTML = Utils.parseTemplate(this.modalElement.innerHTML, { title: this.element.innerHTML });
      
    }
  }

  open(event) {
    event.preventDefault();

    this.appendModal();
  }
  /**
   * Fermeture de la fenetre modal
   * @param setTimeout(this.destroy.bind(this), Temps);
   * Temps (en millisecondes) peut etre ajuster pour quand la fenetre est supprimer du html
   */
  close() {
    document.documentElement.classList.remove('modal-is-active');
    this.closeButton.removeEventListener('click', this.close);
    document.removeEventListener('keydown', this.onEscape);
    document.removeEventListener('click', this.onEscape);
    setTimeout(this.destroy.bind(this), 600);
  }

  destroy() {
    this.modalElement.parentElement.removeChild(this.modalElement);
  }

  appendModal() {
    const template = document.querySelector(`#${this.modalId}`);

    if (template) {
      this.modalElement = template.content.firstElementChild.cloneNode(true);

      this.updateContent();

      document.body.appendChild(this.modalElement);
      this.element.getBoundingClientRect();
      document.documentElement.classList.add('modal-is-active');

      this.closeButton = this.modalElement.querySelector('button');
      this.closeButton.addEventListener('click', this.close);
      document.addEventListener('keydown', this.onEscape);
      document.addEventListener('click', this.onEscape);
    } else {
      console.log(`Le template $(this.modalId) n'existe pas`);
    }
  }

  onEscape(event) {
    if (event.key == 'Escape') {
      console.log('Escape');
      this.close();
    }
    if (event.target.closest('.modal__scrim')) {
      console.log('clique');
      this.close();
    }
  }
}

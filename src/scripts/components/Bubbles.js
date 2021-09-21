/** Composante Bubbles de TimTools */
export default class Bubbles {
  /**
   * Méthode constructeur
   * @param {HTMLElement} element - Élément HTML sur lequel la composante est instanciée
   */
  constructor(element) {
    this.element = element;
    this.init();
  }

  /**
   * Méthode d'initialisation
   */
  init() {
    console.log('Nouvelle instance de la composante -> Bubbles');

    function createBubble() {
      const section = document.querySelector('.bubbles');
      const createElement = document.createElement('span');
      var size = Math.random() * 60;

      createElement.style.width = 20 + size + 'px';
      createElement.style.height = 20 + size + 'px';
      createElement.style.left = Math.random() * innerWidth + 'px';
      section.appendChild(createElement);

      setTimeout(() => {
        createElement.remove();
      }, 16000);
    }

    setInterval(createBubble, 120);
  }
}

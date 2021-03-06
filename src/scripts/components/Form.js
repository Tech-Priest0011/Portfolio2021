/** Composante Form de TimTools */
export default class Form {
  /**
   * Méthode constructeur
   * @param {data-component="Form"} element - Élément HTML sur lequel la composante est instanciée
   */
  constructor(element) {
    this.element = element;
    this.formElements = this.element.elements;
    this.init();
  }

  /**
   * Méthode d'initialisation
   */
  init() {
    console.log('Nouvelle instance de la composante -> Form');
    this.element.setAttribute('novalidate', '');

    for (let i = 0; i < this.formElements.length; i++) {
      const input = this.formElements[i];

      if (input.required) {
        input.addEventListener('input', this.validateInput.bind(this));
      }
    }

    this.element.addEventListener('submit', this.onSubmit.bind(this));
  }

  /** Quand le boutton d'envoie est appuyer */
  onSubmit(event) {
    event.preventDefault();
    if (this.validate()) {
      console.log('success');
      //envoie du formulaire
      this.showConfirmation();
    } else {
      console.log('error');
    }
  }

  /**
   * Vérifie si tout les champs sont correctement rempli
   * @return {isValid} - status de la validation si tout est correct
   */
  validate() {
    console.log('validate');
    let isValid = true;
    for (let i = 0; i < this.formElements.length; i++) {
      const input = this.formElements[i];

      if (input.required && !this.validateInput(input)) {
        isValid = false;
      }
    }
    return isValid;
  }

  validateInput(event) {
    const input = event.currentTarget || event;
    if (input.validity.valid) {
      this.removeError(input);
    } else {
      this.addError(input);
    }
    return input.validity.valid;
  }

  addError(input) {
    const container = input.closest('[data-input-container]') || input.closest('.input');
    container.classList.add('error');
  }

  removeError(input) {
    const container = input.closest('[data-input-container]') || input.closest('.input');
    container.classList.remove('error');
  }

  showConfirmation() {
    this.element.classList.add('is-sent');
  }
}

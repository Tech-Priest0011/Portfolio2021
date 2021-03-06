import Bubbles from './components/Bubbles';
import Carousel from './components/Carousel';
import Cursor from './components/Cursor';
import Form from './components/Form';
import Header from './components/Header';
import Modal from './components/Modal';
import Scrolly from './components/Scrolly';
import Snackbar from './components/Snackbar';
import Typewriter from './components/Typewriter';
import Video from './components/Video';

export default class ComponentFactory {
  constructor() {
    this.componentInstances = [];
    this.componentList = {
      Bubbles,
      Carousel,
      Cursor,
      Form,
      Header,
      Modal,
      Scrolly,
      Snackbar,
      Typewriter,
      Video,
    };
    this.init();
  }

  init() {
    const components = document.querySelectorAll('[data-component]');

    for (let i = 0; i < components.length; i++) {
      const element = components[i];
      const componentName = element.dataset.component;

      if (this.componentList[componentName]) {
        const instance = new this.componentList[componentName](element);
        this.componentInstances.push(instance);
      } else {
        console.log(`La composante ${componentName} n'existe pas`);
      }
    }
  }
}

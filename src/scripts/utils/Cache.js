/** Composante Cache de TimTools */
export default class Cache {
  static set(key, value, force) {
    if (key === undefined) {
      console.error('Aucune clef donner pour localstorage');
    } else if (value === undefined) {
      console.error('Aucune clef donner pour localstorage');
    } else if (Cache.islocalStorageAvailable()) {
      if (!Cache.get(key) || force === true) {
        key = `TT_${key}`;
        console.log('Key =', key);
        console.log('value =', value);
        localStorage.setItem(key, value);
      } else {
        console.error('La clef fourni est deja utiliser, forcer au besion');
      }
    }
  }

  static get(key, defaultValue) {
    if (key === undefined) {
      console.error('Aucune clef donner pour localstorage');
    } else if (Cache.islocalStorageAvailable()) {
      key = `TT_${key}`;
      return localStorage.getItem(key) ? localStorage.getItem(key) : defaultValue;
    }
  }

  static remove(key) {
    if (key === undefined) {
      console.error('Aucune clef donner pour localstorage');
    } else if (Cache.islocalStorageAvailable()) {
      key = `TT_${key}`;
      localStorage.removeItem(key);
    }
  }

  static islocalStorageAvailable() {
    const test = '__timTools__';

    try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test, test);
      console.log('Cache disponible');
      return true;
    } catch (error) {
      console.error('localStorage indisponible par le navigateur');
    }
  }
}

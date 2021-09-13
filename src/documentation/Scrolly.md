# SCROLLY :

Certains éléments font une animations lorsqu'ils sont dans le champs de vision.

## Utilisation :

- Nécessite tout le code dans `Scrolly.js` et `scrolly.scss`.

- Dans le html, ajouter `data-component="Scrolly"` a la balise qui englobe le site juste apres le `<body>`.

- Ajouter `data-scrolly="X"` sur tout les balises `<div>` dont vous voulez une animations lors du scroll.

## Variantes / paramètres :

- `data-scrolly="X"` : Changer X pour un data-scrolly dans `scrolly.scss` pour appliquer l'animation.

- rootMargin : Dans `Scrolly.js` modifier les valeurs pour choisir a quelle distance des cotés de l'écran le scripts dois observer pour effectuer les animations (4 valeurs qui vont dans le sens des aiguilles).

- this.observer.unobserve(target); : Dans `Scrolly.js`, la methode watch(entries) vous pouver mettre en commentaire ou décommmenter cette ligne ( this.observer.unobserve(target) ) pour que les animations se produise une seule fois ou a repetition. Commenter cette ligne fera en sorte que a chaque fois que vous passer au dessus des éléments scrolly leurs animations seront activers.

## Animations :

- Pour changer les animations il suffit de changer les propriétés des data-scrolly dans `scrolly.scss`.
  `&.is-active` sera le résultat final de l'animation, il est important de garder la propriété transition pour des effets optimal.

- Vous pouvez renommer les data-scrolly pour des noms plus significatifs, mais il est important de garder les meme noms dans le html.

- Vous pouvez rajouter autant d'animations que désirer, mais assurer vous de garder la meme structure.

## Classes d’état :

- watch(entries): Observe l'écran et quand un élément avec `data-scrolly="X"` croise les limites décidé par le rootMargin, celui-ci va ajouter la classe `is-active` a la balise ce qui va déclancher l'animation.
  L'animation se produira qu'une seule fois avec la ligne : this.observer.unobserve(target);

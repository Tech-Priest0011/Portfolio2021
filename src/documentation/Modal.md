# MODAL :

Fais apparaitre un fenetre lors d'un clique sur un élément choisi et peut fermer celui avec un boutton, la touche escape ou avec un click a l'exterieur de la boite mondal.

## Dépendances :

- `Utils.js` pour avoir le contenue adapter pour chaque fenetre.

## Utilisation :

- Nécessite tout le code dans `Modal.js` et `modal.scss`.

- Etre certains de l'importation de `Utils.js` dans `Modal.js`.

- A la fin du html (avant le fermeture du body) faire un balise `<template>` avec l'id `tpl-modal-tool`.

- Le template doit resembler a ceci :  
  `<template id="tpl-modal-tool">`
  `<div class="modal">`
  `<div class="modal__scrim"></div>`
  `<div class="modal__box">`
  `<div class="modal__content">`
  `<!--Seulement modifier le contenue dans content-->`
  `</div>`
  `<button class="modal__close js-close"></button>`
  `</div>`
  `</div>`
  `</template>`

  - Pour tout les éléments dont nous voulons une modale, il faut ajouter a la balise `<div>` `data-component="Modal"` pour lier la balise au javascript.

  ## Variantes / paramètres :

- `data-modal-id="tpl-modal-tool"` doit etre mis apres `data-component="Modal"` pour mettre le contenue de la fenetre modale a jour.

- `data-modal-title="X"` permet d'afficher un titre choisie dans la `<div class="modal__content">`, il faut placer {{title}} a l'interieur du `<div>` pour afficher X dans la fenetre modale
  (exemple:

  data-modal-title="poisson"
  `<div class="modal__content">`
  `<h2> {{title}} </h2>`
  `</div>`

h2 va afficher poisson
)
(Dans ce cas un titre est choisi, mais il est possible d'afficher le mots ailleur et meme d'afficher une image si celle-ci a le meme nom que le titre - exemple: `<img src="../images/{{title}}.png" alt="{{title}}" />`)

- Si dans le javascript, sous `updateContent()` la ligne `title: this.element.innerHTML` est mise, tout les éléments de la div seront afficher dans la fenetre modal.

## Animations :

- Dans le fichier `modal.scss` modifier les éléments parent de `.modal-is-active &` et `.modal-is-active &` lui-meme pour changer les animations d'arriver de la fenetre modale.

## Classes d’état :

- appendModal() : Est appeler quand la fenetre est choisi pour etre ouverte. Change l'état de la fenetre pour actif.

- close() : Est appeler pour fermer la fenetre modal, appel destroy() pour supprimer la fenetre modale du html.

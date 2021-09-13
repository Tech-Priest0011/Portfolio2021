# HEADER :

Apparission du menu en mode mobile et cache automatiquement la navigation apres un certain point.

## Utilisation :

- Nécessite tout le code dans `Header.js` et `header.scss`

- Dans le html a la balise `<header>` il faut obligatoirement ajouter `data-component="Header"` pour lier la balise au javascript.

## Variantes / paramètres :

- `data-scrolling="X"` doit etre ajouter dans la balise `<header>` pour choisir quand le header va se cacher, X correspond en % a quel pourcentage du haut il faut etre pour cacher le header (exemple: .25 - le header va se cacher apres avoir parcourue 25% de la page).

- `data-autohide="true"` doit etre ajouter dans la balise `<header>` pour choisir si le header va se cacher, mettre `true` pour le cacher automatiquement et n'importe qu'elle autre valeur pour désactiver la fontion.

## Animations :

- Dans `header.scss` modifier `.nav-primary` et `.nav-is-active &` pour modifier l'animation d'arriver du navigateur en menu mobile.

- Dans `header.scss` modifier `header` et `.header-is-hidden.is-scrolling-down &` pour changer comment le header va se cacher.

## Classes d’état :

- setHeaderState() : Si `data-autohide` dans le html renvoie la valeur `true` le header va se cacher quand l'utilisateur défile vers le bas et est apres le point déterminer par `data-scrolling`.

- setDirectionState() : Renvoie dans quel direction l'utilisateur défile.

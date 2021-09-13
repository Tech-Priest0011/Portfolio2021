# Snackbar

<br><br>

# Comment l'utiliser

### **HTML**

Dans le 'body' de votre html céer une balise 'div' dont la classe sera 'snackbar' et l'attribut data 'Snackbar'. Ensuite, a l'intérieur mettre une 'div' avec la classe 'wrapper' et a l'intérieur de celle-ci mettre le contenue de la snackbar suivi d'un bouton pour fermer la celle-ci.

Le bouton doit avoir la classe 'js-close' pour fermer la snackbar en cliquant sur celui-ci.

```

<div class="snackbar" data-component="Snackbar">
    <div class="wrapper">
        <div class="snackbar__content">
            <p>Message du snackbar</p>
        </div>
        <button class="button js-close">
            Close
        </button>
    </div>
</div>

```

<details>
<summary>Exemple complet</summary>

```

<div class="snackbar" data-component="Snackbar" data-id="1">
    <div class="wrapper">
        <div class="snackbar__content">
            <p>Message du snackbar</p>
            <a href="#">Liens</a>
        </div>
        <button class="button js-close">
            <svg class="icon icon--lg">
                <use xlink:href="#icon-check"></use>
            </svg>
        </button>
    </div>
</div>

```

</details>

<br><br>

### **SCSS**

Donner l'apparence souhaiter sous la classe '.snackbar', mais assurez-vous d'avoir la classe '.snackbar-close' a l'extérieur de la classe 'snackbar' pour femrer celle-ci lorsque le bouton est appuyer.

```

.snackbar{

}

.snackbar-close {
    display: none;
}

```

<br><br>

# Variante

<br>

### **Snackbar & Cache**

Utilisation de la snackbar avec la cache

Si vous voulez que le navigateur garde en mémoire que l'utilisateur a fermer la snackbar, ajouter l'attribut 'data-id="X"' a la balise qui a la classe 'snackbar'.

Assurez-vous de changer le "X" du 'data-id' a chaque fois que vous changer de message pour afficher a nouveau la snackbar.

```

<div class="snackbar" data-component="Snackbar" data-id="X">
    <div class="wrapper">
        <div class="snackbar__content">
            <p>Message du snackbar</p>
            <a href="#">Liens</a>
        </div>
        <button class="button js-close">
            <svg class="icon icon--lg">
                <use xlink:href="#icon-check"></use>
            </svg>
        </button>
    </div>
</div>

```

<br>

### **Snackbar auto-hide**

Cacher la snackbar quand l'utilisateur scroll.

Si vous voulez que la snackbar se cache apres que l'uitilisateur est descendu apres un certain point dans la page, ajouter l'attribut 'data-scrolling="X"' a la balise qui a la classe 'snackbar'. Le 'X' représente en pourcentage a quelle point dans la page l'utilisateur est rendu.

Assurez-vous d'avoir l'attribut 'data-autohide="true"' dans la meme balise que 'data-scrolling="X"' pour que tout fonctionne.

```

<div class="snackbar" data-component="Snackbar" data-scrolling="X" data-autohide="true">
    <div class="wrapper">
        <div class="snackbar__content">
            <p>Message</p>
        </div>
        <button class="button js-close">
            Close
        </button>
    </div>
</div>

```

<br><br>

# Formulaire

Cette composante permet d'instancier un formulaire

<br><br>

# Comment l'utiliser

### **HTML**

Afin d'utiliser la composante, commencer avec un 'form' et a l'intérieur placer l'attribut **data-component="Form"**, ensuit placer les éléments suivant a l'intérieur de la balise: une balise avec la classe 'form\_\_body', une balise fieldset, une div avec la classe 'input', une balise 'label' et une balise 'input'.

```
<form class="form" data-component="Form">
    <div class="form__body">
        <fieldset>
            <div class="input">
                <label class="input__label" for=""></label>
                <input
                class="input__element"
                type=""
                name=""
                id=""
                placeholder=""
                />
            </div>
        </fieldset>
    </div>
</form>
```

<details>
<summary>Exemple complet</summary>

```
<form action="" class="form" autocomplete="off" data-component="Form">
    <div class="form__body">
        <fieldset class="grid">
            <div class="input">
                <label class="input__label" for="name">Nom</label>
                <input
                class="input__element"
                type="text"
                name="name"
                id="name"
                placeholder="Nom"
                required
                />
            </div>
        </fieldset>
    </div>
</form>
```

</details>

<br><br>

### Envoie et confirmation

Mettre le footer du formulaire avec le bouton d'envoie a l'extérieur du 'fieldset' et a l'intérieur du 'field\_\_body'

Mettre le 'form\_\_confirmation' juste avant la fermeture de la balise 'form'.

```
<footer class="form__footer">
    <button class="button">Envoyer</button>
</footer>

<div class="form__confirmation">
    <h2>Merci</h2>
    <p>Votre formulaire a été envoyer</p>
</div>
```

<br><br>

### **SCSS**

Donner les styles souhaiter.

<br><br>

# Variantes

<br>

### **input**

Dans la balise 'input', vous pouvez changer 'type' pour: text, email, tel, radio ou checkbox

Vous pouvez ajouter 'required' pour rendre le champ obligatoire.

<br>

### **input select**

Pour offrir un menu déroulant avec un choix.

Changer la balise 'input' pour une balise 'select'.

Ajouter un balise 'option' pour chaque choix disponible.

<details>
<summary>Exemple complet</summary>

```
 <div class="input select">
    <label class="input__label" for="day">Choisir un jour</label>
    <select name="day" id="day" class="input__element" required>
        <option value="" hidden>Choisir une journée</option>
        <option value="day1">Jour 1</option>
        <option value="day2">Jour 2</option>
        <option value="day3">Jour 3</option>
    </select>
</div>
```

</details>

<br>

### **Champ radio**

Pour faire un champ avec des boutons radio, dans le 'fieldset' faite un div avec la classe 'form\_\_list' et l'attribut **data-input-container**

Dans la balise input, l'attribut 'name' doit se terminer avec des crochets '[]'

<details>
<summary>Exemple complet</summary>

```
<fieldset>
    <div class="form__list" data-input-container>
        <div class="input radio">
            <input
            class="input__element"
            type="radio"
            name="sexe[]"
            id="sexeM"
            value="Homme"
            required
            />
            <label class="input__label" for="sexeM">Homme</label>
        </div>
        <div class="input radio">
            <input
            class="input__element"
            type="radio"
            name="sexe[]"
            id="sexeF"
            value="Femme"
            required
            />
            <label class="input__label" for="sexeF">Femme</label>
        </div>
    </div>
</fieldset>
```

</details>

<br>

### **Autre**

Dans la balise form, ajouter **autocomplete="off"** pour désactiver le remplisage automatique sur certain navigateur.

Dans la balise 'input' pour les téléphone ajouter : **pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$"** , pour mieux valider le numéro de téléphone.

Pour les champs **radio** et **checkbox**, ajouter dans la balise 'label' l'attribut 'for="X"' où X correspont au 'id' du 'input', pour que quand le nom est cliqué le bouton radio correspondant soit sélectionner.

<br>

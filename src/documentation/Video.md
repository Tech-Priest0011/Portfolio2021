# Video

Cette composante permet d'insérer une vidéo YouTube et de pouvoir ajuster celle-ci.

<br><br>

# Dépendance

Un lien vers une vidéo YouTube fonctionelle

###

<br><br>

# Comment l'utiliser

### **HTML**

Une balise 'div' avec la classe 'video' et les attributs 'data-component="Video"' et 'data-video-id="X"' oú 'X' est égal au dernier caractère de l'url de la vidéo quand vous la partager en "Embed"

```
<div
    class="video"
    data-component="Video"
    data-video-id="X"
>
```

<br><br>

# Variantes

<br>

### **Ajout d'un poster et d'un icon play**

<br>

### **HTML**

A l'intérieur de la balise avec la classe 'div', place une nouvelle balise 'div' avec la classe 'video\_\_media js-video', a l'intérieur de celle-ci place une balise 'img' avec la classe 'js-poster' et la soucre de l'image que vous voulez comme poster. Ensuite, place apres la balise 'img' une balise svg pour votre icon play

```
 <div class="video__media js-video">
    <img
        class="js-poster"
        src="assets/images/poster.jpg"
        alt="musique"
    />
    <svg class="icon icon--stroke">
    <use xlink:href="#icon-play"></use>
    </svg>
</div>
```

<details>
<summary>Exemple complet</summary>

```
<div
    class="video"
    data-component="Video"
    data-video-id="gOMhN-hfMtY"
>
    <div class="video__media js-video">
        <img
        class="js-poster"
        src="assets/images/poster.jpg"
        alt="musique"
        />
        <svg class="icon icon--stroke icon--xl">
            <use xlink:href="#icon-play"></use>
        </svg>
    </div>
</div>
```

</details>

<br><br>

### **SCSS**

Modifier les éléments sous la classe '.icon' pour ajuster l'icon au gout

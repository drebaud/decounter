# DÉCOMPTEUR

Le présent répertoire contient des pages HTML permettant d'afficher dans un
navigateur un décompteur, par exemple pour afficher le temps restant lors
d'une pause ou le temps restant avant la reprise d'un cours dans une source _Navigateur_ du logiciel [_Open Broadcaster Studio_](https://obsproject.com).

Pour faciliter la personnalisation de ce décompteur, le nom de fichier détermine
la durée en minutes ou l'heure de reprise et éventuellement la couleur du texte (noire par défaut).

## Intervalle de temps

### Syntax

nn\[texte\]\[-codecouleur\]

avec :
- nn : durée en minutes
- texte : chaîne de caractères quelconque (ignorée), par exemple "mn" ou "minutes",
- codecouleur : code couleur HTML optionnel pouvant être :
  - un nom de couleur standard ("green", "yellow", "grey", etc.),
  - une couleur quelconque exprimée sous la forme "rgb(R,V,B)", R, V et B
    étant un nombre entier de 0 à 255 codant respectivement les couleurs rouge,
    verte et bleue.

### Exemples

Pour créer un décompteur de 15 minutes affichant un texte en jaune, dupliquer
l'un des fichiers HTML en le nommant au choix :

- 15mn-yellow.html
- 15-yellow.html
- 15minutes-rgb(0,255,255).html

## Décompteur

### Syntaxe

HHhMM\[-codecouleur\]

avec :

- HH : heure,
- MM : minute
- codecouleur : code couleur HTML optionnel (même syntaxe que ci-dessus)

### Exemples

Pour décompter les minutes avant le début d'un cours l'après-midi :

- 14h30-yellow.html
- 13h45.html


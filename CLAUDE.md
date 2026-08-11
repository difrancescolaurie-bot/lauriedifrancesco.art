# Règles permanentes — lauriedifrancesco.art

## Texte

Ne jamais utiliser de tiret cadratin ni de demi-cadratin dans aucun texte du site.
- Texte courant : virgule, parenthèse ou point.
- Champs structurés (attribution, copyright, méta) : point médian (·).

Ne jamais réécrire un texte existant. Le déplacer, jamais le modifier.

Ne jamais raccourcir, couper ni résumer une citation, quelle que soit sa longueur. Une citation trop haute est un problème de mise en page.

Ne jamais créer de variante locale. Un besoin nouveau est une fonction manquante à ajouter au système pour l'ensemble du site.

## Composants

Citation.astro est le seul chemin d'affichage d'une citation. Le filet suit la hauteur du texte, jamais celle de la cellule.

## Mesures

Toute mesure se prend dans le navigateur à 1440 px de large, images chargées. Vérifier la largeur réelle de la colonne avant tout calcul.

## Valeurs verrouillées

Ne jamais modifier les deux valeurs verrouillées de La Mer en Corps : 0.7519 (colonne empilée), 0.6786 (prisme).

## Hero — cadrages mobiles

Les images du héro utilisent `object-position` pour régler le point focal à 390 px. Convention pour les valeurs :

- `center center` (défaut) : sujet centré dans l'image, aucune règle à écrire.
- Valeur horizontale en `%` : déplace le point focal vers la gauche (valeur basse) ou la droite (valeur haute). Ex. `22% center` = cadrage gauche.
- Valeur `calc(X% + Npx)` : ajustement fin quand le sujet est proche du bord, hérité des cadrages anciens.

Cadrages fixes en vigueur (mobile, `@media (max-width: 700px)`) :
- `nth-child(2)` garcon : `calc(62% + 45px) center`
- `nth-child(4)` gelsomina : `22% center`
- `nth-child(6)` toward : `calc(68% - 135px) center`

Les slots matières (nth-child 3, 5, 7) recoivent leur `object-position` par injection JS au chargement. Valeur par défaut : `center center`.

## Décisions

Proposer, ne pas appliquer, sur toute décision qui touche au contenu.

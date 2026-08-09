# Cahier de transmission — Site lauriedifrancesco.art

> Document de référence pour reprendre la construction du site dans **Claude Code**.
> À donner en contexte à Claude Code au démarrage. Tout ce qui a été décidé en phase de conception est ici ; les réglages fins se finissent en aperçu direct.

---

## 1. Objectif & contexte

- Refonte complète du site de Laurie Di Francesco, photographe franco-italienne (Marseille). Remplace l'actuel site Squarespace (`lauriedifrancesco.art`).
- **Échéance immédiate** : candidature à un collectif marseillais (~3 jours). Puis semaine d'ouverture des Rencontres d'Arles.
- **Langue principale : anglais.** Langues à venir : français, italien, portugais (site à terme en 4 langues).
- Esprit : « eau et ciel ». Interface froide et lumineuse ; les **photographies sont la seule couleur saturée**. Sobriété, espace, lecture qui respire.

---

## 2. Pile technique (méthode validée)

- **Astro** — moteur de rendu du site (statique, rapide, multilingue par routes).
- **GitHub** — dépôt qui contient tout (pages, CSS, JS, images, ressources). Sert aussi de CMS : le contenu se gère via le dépôt.
- **Cloudflare Pages** — hébergement gratuit, connecté au dépôt GitHub (déploiement automatique à chaque commit).
- **Claude Code** — branché sur le dépôt ; on lui importe les images dans le prompt et on lui demande les changements en langage naturel.
- **Domaine** : `lauriedifrancesco.art` — repointer le DNS depuis Squarespace vers Cloudflare (Laurie conserve son domaine).

> À faire par Laurie elle-même (jamais déléguer ces identifiants) : création/connexion des comptes GitHub, Cloudflare, et le repointage DNS.

**Boucle de travail** : importer les images → demander les ajustements à Claude Code → voir l'aperçu en direct → commit → Cloudflare déploie.

---

## 3. Système graphique

**Couleurs**
| Nom | Hex | Usage |
|---|---|---|
| Encre | `#14202B` | texte principal, fonds sombres (eau profonde) |
| Cérulé | `#235C97` | accent signature (ciel/mer), liens, ligne d'horizon |
| Brume | `#C6D3DC` | atmosphère, séparateurs |
| Brume claire | `#F1F4F5` | fond de page (lumière sur l'eau) |
| Ardoise | `#5C6B76` | texte secondaire, légendes |
| Blanc lumineux | `#FBFCFC` | surfaces levées |

**Typographies (Google Fonts)**
- **Manrope** — logotype, titres, phrases-clés. Souvent en **capitales espacées** (letter-spacing ~.2em), graisses 300/400/500.
- **Hanken Grotesk** — navigation, légendes, corps de texte.

**Logotype** : le nom **LAURIE DI FRANCESCO** posé en capitales Manrope espacées. Pas de logo dessiné, pas de signature manuscrite (testée puis écartée). **Monogramme LDF** disponible pour avatar / sceau / filigrane.

**Élément signature** : la **ligne d'horizon** — un filet cérulé fin (~64px) sous le nom et entre les sections. C'est la ligne mer/ciel et ici/là-bas.

**Coins arrondis** : appliqués aux planches **composées** (~12px). *À trancher : généraliser à toutes les images ou non.*

---

## 4. Structure globale

**En-tête** (fixe, dégradé sombre pour rester lisible sur image) : logotype à gauche ; à droite, navigation **Work / Exhibitions / About / Contact** + sélecteur de langues **EN · FR · IT · PT** (EN actif).

**Pied de page** (fond encre) : nom + ligne d'horizon + tagline ; liens Instagram / Contact / About ; mention des langues ; copyright. Prévoir **mentions légales** (obligatoire en France) + courte note de confidentialité liée au formulaire.

---

## 5. Pages

### Accueil
- Hero plein écran : **fondu enchaîné lent** (~15s) entre plusieurs images ; **nom en masthead** (capitales Manrope) fixe par-dessus ; ligne d'horizon ; tagline « *là où le bleu du ciel prend de nouvelles nuances* ».
- Bloc manifeste **trilingue** (le titre du projet brésilien décliné en 3 langues).
- Aperçu des œuvres (liens vers les projets).
- Prototype de référence : `index-v3.html`.

### Œuvres (Work) — page index dédiée
- S'ouvre sur l'**épigraphe de Claudia Andujar**.
- Mène aux projets : **Spilling Beyond the Lines**, **Toward the Blue**, **Vedere Venezia e Non Morire**, **Quando sono qui, non sono là** (Brésil, en cours). *En corps à la mer* — optionnel.
- Affichage : **grille de deux projets par ligne** (un seul par ligne sur mobile).

### Gabarit « page projet » (le cœur du site)
- **Hero** : une **image unique forte** (PAS de fondu — réservé à l'accueil, pour que chaque projet garde sa singularité). Titre toujours visible. Éventuel léger éclaircissement au survol sur ordinateur (bonus, jamais indispensable — inopérant au tactile).
- **Ouverture sur une épigraphe/citation encadrée** : chaque projet (comme la bio) commence par une épigraphe.
- **Texte d'intro sur 2 colonnes** : prose à gauche ; épigraphe + phrases-clés à droite. *(Laurie a encore des retours sur l'affichage du texte — à affiner en direct.)*
- **Série en « planches »** : des lignes d'images **alignées sur la même hauteur** (largeurs variables selon le format, **AUCUN recadrage** — la hauteur commune se règle par la largeur). **Densité variable** : 2 images = planche grande / mise en valeur ; 4 images = resserré.
  - Règle de rythme : les images qui étaient **seules** dans le livre/maquette gardent une place **seule ou à deux** ; les images de galerie se regroupent **par quatre**.
- **Planches composées** : images qui se **chevauchent** pour qu'une ligne se prolonge d'une image à l'autre (continuité visuelle), z-index maîtrisé, coins arrondis.
- **Marges uniformes** : chaque planche occupe exactement la même largeur de colonne (une image seule s'aligne sur les bords des planches voisines).
- **Clic pour agrandir** : lightbox plein écran sur chaque image.
- **Navigation « projet suivant »** en bas.
- Prototype de référence (le plus abouti) : `spilling-planches-v5.html`.

#### Spécification exacte de *Spilling Beyond the Lines*

Correspondance **numéro de badge → fichier** (numéros visibles dans le prototype) :

```
1=2.jpg   2=1.jpg   3=3.jpg   4=4.jpg   5=PXL_20230902_161106506.jpg
6=6.jpg   7=7.jpg   8=8.jpg   9=9.jpg   10=10.jpg
11,12,13 = les 3 images "feature" (fichiers "Spilling+beyond+the+Lines") du triptyque ciel bleu
14=18.jpg 15=15_1.jpg 16=14.jpg 17=20.jpg 18=21.jpg 19=PXL_20231020_213826708.jpg 20=16.jpg 21=19.jpg
22,23 = 2 images "feature"
24=27.jpg 25=PXL_20231202_204530293.jpg 26=28.jpg 27=29.jpg 28=24.jpg 29=26.jpg
30 = image "feature" (placement de l'épigraphe)
31=30.jpg 32=31.jpg 33=54.jpg 34=47.jpg 35=35.jpg 36=36.jpg 37=PXL_20230902_161139413.PORTRAIT.jpg 38=39.jpg
39,40 = 2 images "feature"
41=37.jpg 42=38.jpg 43=44.jpg 44=43.jpg
45,46,47 = 3 images "feature"
```

**Ordre des planches (par badges)** — densité validée par Laurie :
```
[2,1]            ← seule sur sa ligne, plus GRANDE
[3,4,5,6]        ← ligne de 4
[7,8,9,10]       ← ligne de 4 (9 et 10 ramenées ici, rapetissées)
[12,11,13]       ← TRIPTYQUE COMPOSÉ (voir ci-dessous)
[16,15,17,18]    ← ligne de 4
[19,20,14,21]    ← ligne de 4 (21 recadrée, voir ci-dessous)
[22,23]          ← à deux, mises en valeur
[24,29]          ← à deux
[26,27,28,25]    ← ligne de 4
[30]             ← seule
[32,31,34,33]    ← ligne de 4
[35,36,37,38]    ← ligne de 4
[39,40]          ← à deux
[41,42,43,44]    ← ligne de 4
[45,46]          ← à deux
[47]             ← seule (À TRANCHER : garder ou non — image de clôture)
```

**Triptyque (planche 12·11·13), composé** :
- **12 passe au-dessus** (premier plan, mord par le haut).
- **11 descendue d'environ 25 %** de sa hauteur pour que la **branche de l'arbre** (image du garçon) rejoigne la **tige de la fleur** (continuité validée par Laurie).
- **13** (l'immeuble en contre-plongée) légèrement décalée vers le haut — position validée.
- **Coins arrondis** sur les trois.
- Prévoir une **marge basse généreuse** pour que la planche ne déborde pas sur la ligne suivante.
- L'alignement exact branche/tige se peaufine au pixel **en aperçu direct**.

**Image 21** (fichier `19.jpg`) : **recadrée par la droite** pour que sa largeur égale celle de ses voisines (14, 20, 19). Recadrage exact à confirmer en direct.

**Épigraphe** : citation d'ouverture de **Gilberto Gil — *Back in Bahia***. Laurie **colle elle-même les vers** (droits d'auteur — ne pas les reproduire automatiquement).

### À propos (About)
- **Ouvre sur une épigraphe d'Aristote.**
- **Biographie curatoriale à la 3e personne**, multilingue → *[Laurie : coller ici la bio finalisée]*.
- Portrait. Influences (Andujar, Iturbide, Ghirri, Lartigue, Álvarez Bravo, Rio Branco, Diniz, Battaglia…). Trois projets en cours.

### Expositions (Exhibitions) — page dédiée
- Parcours : **Belo Horizonte, Brésil — 2024**. Vues d'accrochage / photos. (Page autonome volontairement, pour que le parcours soit visible.)

### Contact
- **Formulaire** (commandes / collaborations / presse) — **PAS d'adresse e-mail exposée publiquement**.
- Le formulaire pointe vers une **adresse dédiée** (ex. `studio@lauriedifrancesco.art`), distincte de l'adresse personnelle.
- Service de formulaire gratuit (Formspree ou Web3Forms), anti-spam intégré ; courte mention légale (destinataire, finalité).
- **Exigence** : ne jamais afficher d'adresse récupérable sur la page.

---

## 6. Multilingue
- **EN d'abord** (mise en ligne rapide), puis FR / IT / PT.
- Chaque page et chaque texte en 4 versions ; sélecteur en en-tête.
- Le manifeste trilingue de l'accueil et les titres de projets restent tels quels (ce sont des éléments d'œuvre).

---

## 7. Fichiers prototypes fournis
- `index-v3.html` — accueil (fondu enchaîné, nom en masthead, langues en tête).
- `spilling-planches-v5.html` — gabarit page projet + Spilling (planches, triptyque composé, lightbox).
- `work.html` — page index Œuvres (épigraphe Andujar + les 4 projets).
- `about.html` — page À propos (épigraphe Aristote, portrait, bio, influences, projets en cours).
- `contact.html` — page Contact (formulaire protégé, sans adresse exposée).
- `exhibitions.html` — page Expositions (Belo Horizonte 2024 + vues d'accrochage).
- `identite-graphique.html` — carte de visite recto/verso + charte (couleurs, typos, monogramme).
- `sig_thin.svg` / `sig_bold.svg` — signatures vectorisées (écartées, conservées au cas où).

---

## 8. Réglages à finir en aperçu direct (Claude Code)
- Alignement au pixel du **triptyque** (branche/tige).
- **Recadrage exact** de l'image 21.
- **Affichage du texte** d'intro (Laurie a des remarques à préciser).
- Hauteurs / échelles des planches.
- Décider du sort de l'**image 47**.
- Coins arrondis : **global** ou seulement planches composées.
- Éclaircissement au survol du hero (desktop), si retenu.

---

## 10. Passe esthétique — chantiers livrés

**Chantier 1 — Système gal-row (layout unifié photos/textes/citations).** Un système CSS complet `.gal-row` / `.gal-cell--photo` / `.gal-cell--cit` / `.gal-cell--text` a été ajouté à `work-project.css`, avec des ratios déclarés via l'attribut `data-ratio` et une bascule colonne automatique sous 700 px. Les quatre séries (Quando sono qui, En Corps à la Mer, Vedere Venezia, La Mer en Corps) ont été migrées en EN et dans les trois langues : `PhotoCitation` retiré, ouvertures reconstruites avec des `gal-row`, `justifyGalRows()` ajouté à chaque script pour calculer le `flex-grow` des cellules photo depuis le ratio naturel de l'image. Sur ECM, les photos d'ouverture (51 et 52) portent `data-no-lightbox` conformément aux contraintes. Sur LMEC, le bloc vidéo/citations Bachelard est promu `gal-row` sans toucher aux valeurs verrouillées de la galerie (0.7519 / 0.6786). Fichiers touchés : `src/styles/pages/work-project.css` et les 8 pages des quatre séries.

**Chantier 5 — Token --T-section.** Le token `--T-section: clamp(1.2rem, 2.75vw, 2rem)` a ete ajoute dans `global.css` apres `--T-serie`, pour un echelon intermediaire entre les titres de serie et les titres de page. Il est immediatement applique a `.ex-craft-sub` dans `exhibitions.css` (la regle utilisait `--T-page`, trop grand pour un sous-titre de section). Fichiers touches : `src/styles/global.css`, `src/styles/pages/exhibitions.css`.

**Chantier 2 — Composant Citation.** Le composant `src/components/Citation.astro` a été créé pour unifier l'affichage des épigraphes et citations dans les pages projet : il reçoit les props `author` (source de la citation, interpunct comme séparateur) et `children` (texte de la citation). Le composant `PhotoCitation` a été retiré de toutes les pages qui l'utilisaient (Quando sono qui EN+lang, En Corps à la Mer EN+lang, La Mer en Corps EN+lang, Vedere Venezia EN+lang) et remplacé par `Citation`. Fichiers touchés : `Citation.astro` (créé), toutes les pages des quatre séries concernées.

**Chantier 3 — Lightbox universelle.** Un composant `src/components/Lightbox.astro` a été créé et importé dans `Layout.astro` : il s'initialise une seule fois pour tout le site, rend cliquables toutes les images eligibles (cursor: zoom-in), et gère la navigation clavier (flèches, Echap), le swipe tactile, le focus trap et le retour de focus. Exclusions par attribut `data-no-lightbox` (toutes les images de la série En Corps a la Mer, EN+lang+private) et par ancêtre CSS (`.phero-bg`, `.hero-bg` pour les heros, `.lmec-video-wrap`). Le CSS et le JS lightbox dupliques ont ete retires de quando (EN+lang), vedere-venezia (EN+lang), spilling (EN+lang) et toward-the-blue (EN+lang). La page private.astro conserve sa propre lightbox specialisee (contexte d'acces prive), toutes ses images portent `data-no-lightbox` pour eviter le conflit. Fichiers touches : `Lightbox.astro` (cree), `Layout.astro`, et les 8 pages des quatre series concernees.

**Chantier 4 — Mobile responsive.** Aucune modification nécessaire : les règles mobiles requises étaient déjà en place depuis le chantier 1. Le CSS `work-project.css` contenait déjà `@media (max-width: 700px) { .gal-row { flex-direction: column } .gal-cell { flex: none !important; width: 100%; } }`, couvrant l'ensemble des rangées du système gal-row. Chantier livré sans nouveau code ni commit.

**Chantier 6 — Survol work index et en-tête clair.** L'animation de survol sur les vignettes de la page index des œuvres a été allégée : `translateY(-3px)` remplacé par `scale(1.03)` sur `.proj-img`, et le double-scale sur `.proj-img img` supprimé (transition retirée aussi sur l'image intérieure). Un style `.site-header--light` a été ajouté dans `Header.astro` pour les pages à fond clair (work index, exhibitions, about, contact) : dégradé sable au lieu de sombre, couleurs encre à 70 % pour le logotype et les liens, ajusté en JS à la détection de l'URL courante. Fichiers touchés : `src/styles/pages/work-index.css`, `src/components/Header.astro`.

**Chantier 7 — Repositionnement du sous-titre "Currently".** La balise `<p class="creed-eyebrow">Currently</p>` (et ses équivalents multilingues) a été déplacée de la section `.creed` (manifeste trilingue) vers la section `.works` (aperçu des œuvres), juste avant le premier projet. Le padding de `.creed` a été fixé à `6rem` en haut et `7.5rem` en bas, remplaçant les valeurs clamp antérieures. Fichiers touchés : `src/pages/index.astro`, `src/pages/[lang]/index.astro`, `src/styles/pages/home.css`.

**Chantier 8 — Ouverture de Spilling Beyond the Lines.** Les deux premières photos (1 et 2) ont été sorties du tableau `spreads` et remontées dans un nouveau bloc `.gal-opening` placé avant la série, structuré en deux `gal-row` : la première rangée associe la photo 2 à la citation de Gilberto Gil (cellule `.gal-cell--cit` avec `data-ratio="1"`), la seconde le texte projet (cellule `.gal-cell--text` avec `data-ratio="1.3333"`) à la photo 1. La fonction `justifyGalRows()` a été ajoutée au script pour calculer le flex-grow des cellules photo depuis le ratio naturel. Chantier appliqué en EN et dans les trois langues. Fichiers touchés : `src/pages/work/spilling-beyond-the-lines.astro`, `src/pages/[lang]/work/spilling-beyond-the-lines.astro`.

**Chantier 9 — Audit tirets cadratins.** Toutes les occurrences du tiret cadratin (—) ont été relevées et traitées selon leur nature. Les champs structurés (méta `description`, `title`, `author=`, attributs `alt`, champs de données de citations, notices légales, option de formulaire) ont été remplacés par le point médian (·) dans l'intégralité des fichiers `.astro` et `translations.ts`. Les textes courants (prose biographique, textes de projet, légendes courantes, textes d'expositions) contenant des tirets cadratins syntaxiques ont été listés pour révision par Laurie : ils demandent une reformulation au cas par cas et ne peuvent être modifiés mécaniquement sans altérer le sens. Fichiers touchés : `Layout.astro`, `Footer.astro`, `translations.ts`, toutes les pages projet EN et lang, `about.astro`, `exhibitions.astro`, `contact.astro`, `legal.astro`.

**Lot L — Passe esthétique (chantiers A, B, C, D).**

**A — Filet citation unifié.** La prop `hr` et le `::after` horizontal de pied ont été retirés de `Citation.astro`. Le filet (1 px, `--brume`, vertical) est porté exclusivement par `.epi-wrap { border-left }`. Le bloc `.gal-cell--cit { border-left }` concurrent dans `work-project.css` a été supprimé ; un `padding-left: 24px` a été ajouté sur `.gal-cell--cit` et `.gal-cell--text` pour que le filet flotte à l'intérieur de la cellule. Sur la cellule LMEC à deux citations, `flex-grow: 1` assure que chaque `.epi-wrap` grandit jusqu'à sa portion de hauteur de cellule, et `gap: 0` sur `.lmec-text-col.gal-cell--cit` soude les deux filets. `PhotoCitation.astro` a été supprimé ; `private.astro` reconstruit avec HTML + `Citation`. L'option `hr={false}` dans les pages `la-mer-en-corps` a été retirée.

**B — Alignement haut des cellules texte.** `justify-content: flex-start` appliqué à `.gal-cell--cit` et `.gal-cell--text` : le premier caractère de texte s'aligne avec le bord supérieur des images de la rangée. Correction : le demi-interligne supérieur du premier `.epi-wrap` (= `(line-height − font-size) / 2 = (1.85 − 1) / 2 = 0.425em ≈ 6.8 px`) est compensé par `margin-top: −0.425em` sur `.gal-cell--photo + .gal-cell--cit > .epi-wrap:first-child` et `.lmec-vid-col + .gal-cell--cit > .epi-wrap:first-child`. Pas de compensation sur les cellules qui ouvrent une rangée (pas de photo à gauche).

**C — Galeries mobiles proportionnelles.** Le comportement mobile a été repris. `.gal-row` [photo + cit/text] : les deux cellules passent à 100 % et s'empilent (inchangé). `.lmec-gallery .row` : règle `(701–900px)` tablette + `≤700px` mobile 2 colonnes — **valeurs flex LMEC 0.7519 / 0.6786 verrouillées, ne pas modifier**. `.spread` (séries photo) : la règle mobile `width: calc(50% − 4px) !important` a été supprimée. La fonction JS `justify()` applique désormais les `flex-grow` proportionnels au ratio naturel de chaque image sur mobile comme sur desktop — toutes les images d'une rangée atteignent la même hauteur. `min-height: 100px` sur `.spread` comme plancher de hauteur ; les rangées de 3 paysages (ratio 1.5) atteignent ~73 px naturellement, limité à 100 px par le plancher. Fichiers : `work-project.css`, toutes les pages projet EN + lang (script `justify()`).

**D.1 — Formulaire contact.** Option vide `"choose"` → `"Choose a subject"` (EN) + traductions : `"Choisissez un sujet"` (FR), `"Scegli un argomento"` (IT), `"Escolha um assunto"` (PT). Fichiers : `translations.ts`, `contact.astro`.

**D.2 — Header compile-time.** Le tableau JS `LIGHT_PAGES` (runtime) a été remplacé par une prop `lightHeader?: boolean` (défaut `true`) sur `Layout.astro` → `Header.astro`. Toutes les pages à hero sombre (index EN+lang, 6 projets EN, 6 projets lang, `private.astro`) reçoivent explicitement `lightHeader={false}`.

**D.3 — Séparateur P2/P3.** `.p3` n'avait pas de `padding-top`. Le filet `proj-sep` entre "Toward the Blue" et "En Corps à la Mer" avait 72 px au-dessus (issu du `padding-bottom` de `.p2`) et 0 px en dessous, contre 72 px de part et d'autre pour tous les autres séparateurs. Fix : `padding-top: 4.5rem` ajouté à `.p3`. Fichier : `work-index.css`.

**D.4 — Citations > 6 lignes (audit à 1440 px).** Mesures effectuées sur toutes les pages. Dépassements relevés : Aznavour/Vedere Venezia (13 L, poème en vers avec `<br>`), "A sombra que me move"/Quando (11 L, poème portugais), Spilling (10 L, poème portugais), Bachelard long/LMEC (8 L), Claire Marin/ECM (7 L). Note : les cas > 6 L sont tous des textes en vers avec retours forcés — structurellement longs par nature. **Décision : les citations ne sont jamais raccourcies, ni sur mobile ni sur desktop. Le slot `short` a été définitivement supprimé de `Citation.astro` et de toutes les pages qui l'utilisaient (LMEC EN + lang).**

**D.5 — Lightbox, vérification des exclusions.** Homepage hero `.hero-bg` : clic sans lightbox ✓. Hero projets `.phero-bg` : clic sans lightbox ✓. Photos craft exhibitions `.ex-artwork-fig` : lightbox ouverte ✓. Grille exhibitions `.ex-grid-fig` : lightbox ouverte ✓. `about.astro` : pas de photo header, pas de conflit.

**Chantier L — Ouverture de Toward the Blue.** Les deux premières photos de la série (Slovenia\_1.JPG et Slovenia\_2.JPG) ont été sorties du tableau `spreads` et intégrées dans un nouveau bloc `.gal-opening` : rangée 1 — photo 1 à gauche + cellule citations à droite (`data-ratio="0.75"`) avec Rilke puis Nietzsche, deux composants `Citation.astro` séparés par le gap de la cellule ; rangée 2 — cellule texte projet à gauche (`data-ratio="0.75"`, label en vert `var(--accent)`, 5 paragraphes de prose + `hr` en pied avec `margin-top: auto`) + photo 2 à droite. `justifyGalRows()` ajouté au script de chaque page. Asymétrie des notes par langue : FR conserve la note Rilke (édition brésilienne), PT conserve la note Nietzsche (édition française), EN et IT portent les deux notes. Recette à 1280 px — ratio 0.75 confirmé : vide citations EN 18.4 % · FR 17.8 % · IT 18.4 % · PT 17.8 % ; vide texte EN 2.6 % · FR 2.5 % · IT 2.7 % · PT 2.8 %. Aucun dépassement de seuil. Fichiers touchés : `src/pages/work/toward-the-blue.astro`, `src/pages/[lang]/work/toward-the-blue.astro`.

**Lot M — Corrections systémiques (chantiers 3.1 à 3.8).**

**M.1 — Intégrité des citations.** Les 15 citations EN ont été vérifiées : Aznavour, Gilberto Gil, Claire Marin non raccourcies. Résultat d'audit : bordure gauche 1 px ✓ sur toutes, footer horizontal absent ✓ sur toutes. État de référence verrouillé.

**M.2 — Retrait conditionnel 24 px.** La règle de `padding-left: 24px` sur `.gal-cell--cit` et `.gal-cell--text` est désormais strictement conditionnelle : les sélecteurs `.gal-cell--photo + .gal-cell--cit`, `.gal-cell--photo + .gal-cell--text`, `.lmec-vid-col + .gal-cell--cit` et `.lmec-vid-col + .gal-cell--text` appliquent le 24 px uniquement quand la cellule est précédée par un contenu visuel. Les cellules qui ouvrent une rangée reçoivent `padding-left: 0` et le filet `--brume` affleure le bord de colonne.

**M.3 — Règle système : dégagement 24 px des bords image.** Tout filet `--brume` (bordure `epi-wrap`, séparateur) doit avoir un dégagement minimal de 24 px par rapport à tout bord d'image ou de vidéo, dans toutes les directions. Audit effectué : index travaux (séparateurs à 64 px min ✓), pages projet ECM et Vedere Venezia (Aznavour 40 px ✓), LMEC (était 0 px → corrigé à 24 px via `.lmec-vid-col + .gal-cell--cit { padding-left: 24px }`).

**M.4 — Règle système : attribution sans coupure interne.** Dans les lignes `<cite>`, le nom de l'auteur et le titre de l'œuvre ne se coupent jamais individuellement. Le seul point de rupture autorisé est le `·` qui les sépare. Implémenté dans `Citation.astro` : la prop `author` est découpée sur ` · ` et chaque segment est enveloppé dans `<span class="epi-nowrap">` (`white-space: nowrap`). Interdit : `white-space: nowrap` sur la ligne entière (débord horizontal).

**M.5 — Galeries mobiles proportionnelles.** Voir Chantier C révisé ci-dessus.

**M.6 — Métriques citations mobiles (375 px, 1280 px base = 16 px).** `font-size: 15 px` (= 0.94rem), `line-height: 27.8 px` (× 1.85), colonne = 335 px (viewport 375 − 2 × 20 px gutter). Citation courte — Nietzsche/ECM (2 lignes). Citation longue — Bachelard signé/LMEC (11 lignes, 84 mots). Citations jamais raccourcies.

**Règle des libellés de section (correction).** Les libellés de sous-section (`.opening-eyebrow`, `.ex-intro-label`, etc.) sont en ardoise (`--ardoise`) sur la majorité des pages. Exception : le libellé du texte de projet sur une page projet prend l'accent du projet (`--accent`). Ainsi `THE PROJECT / LE PROJET / IL PROGETTO / O PROJETO` sur Toward the Blue est en `var(--acc-toward)` = `#1B793D`, comme `The project` sur Spilling est en `var(--acc-spill)`. L'accent (`--accent`, décliné en `--acc-toward`, `--acc-spill`, `--acc-quando`, `--acc-venezia`, `--acc-ecm`, `--acc-lmec`) a quatre usages autorisés : (1) eyebrow du hero projet, (2) libellé "Currently" sur la home, (3) libellé du texte de projet sur une page projet, (4) réglette de progression ou indicateur actif le cas échéant. Ne pas modifier les pages existantes pour les ramener à l'ardoise — la règle décrit l'état produit, pas l'état initial.

**Lot N — Corrections visuelles systémiques (chantiers N.1 à N.5).**

**N.1 — Seuil 40 % reclassé indicateur de diagnostic.** Le seuil de 40 % d'espace vide dans une cellule citation est désormais un indicateur de diagnostic, non une règle structurelle. Il signale qu'un ratio mérite d'être examiné ; il n'impose jamais de restructuration de page. ECM rangée 1 / Nietzsche (citation d'une phrase) : vide de 68 % accepté. La brièveté du texte est la contrainte ; aucun ratio ne peut combler le vide sans déformer la rangée. Les quatre autres mesures signalées (VV Dufourmantelle 59 %, Quando René Char 57 %, LMEC Bachelard anon 45 %, TTB Rilke 42 %) étaient des artefacts de mesure pris avant chargement des images et exécution de `justifyGalRows()` ; leur valeur corrigée est 19 %, 26 %, 28 % et non applicable (version annulée). Règle : toutes les mesures doivent être prises après chargement complet et exécution de `justifyGalRows()`.

**N.2 — Centrage vertical des cellules citation et texte.** Décision inversée par rapport au chantier B (Lot L). `justify-content: center` remplace `justify-content: flex-start` sur `.gal-cell--cit` et `.gal-cell--text` dans `work-project.css`. Raisonnement : le ferrage en haut concentre le vide sous le texte en un bloc visible ; centré, le même vide se répartit en deux marges symétriques qui se lisent comme de la respiration. La compensation de demi-interligne posée au chantier B (`margin-top: -0.425em` sur `.gal-cell--photo + .gal-cell--cit > .epi-wrap:first-child`) est supprimée : elle alignait la capitale sur le bord haut de l'image, ce qui n'est plus pertinent avec le centrage. Comportement quand le contenu remplit la cellule : `justify-content: center` est sans effet, le texte occupe toute la hauteur (ECM Claire Marin, Quando Ramalho Neto, LMEC Bachelard double).

**N.3 — Filet à hauteur du texte.** Le filet (`border-left: 1px solid var(--brume)` sur `.epi-wrap`) doit s'étendre exactement de la première ligne de la citation à la dernière ligne du bloc (attribution et note comprises), jamais à la hauteur de la cellule. Deux règles supprimées qui allongeaient le filet au-delà du texte : `flex-grow: 1` sur `.gal-cell--cit .epi-wrap` dans `work-project.css` (le wrap prenait toute la hauteur disponible de la colonne) et `padding-bottom: 1.8rem` ramené à `0.2rem` dans `Citation.astro` (le padding-bottom étendait la bordure sous le dernier caractère). Règle ancillaire `--extra-pad { padding-bottom: 2.8rem }` également supprimée. Cette règle vaut pour les quinze citations du site, dans une galerie comme hors galerie, sans exception. Vérification du dégagement 24 px horizontal (bord image → filet) : inchangé, conforme.

**N.4 — Toward the Blue, structure ouverte.** Audit des 11 images de la série : toutes ont un ratio 1.5004 (paysage 3:2, 2000 × 1333 px). Structure d'ouverture TTB prévue avec les citations intégrales de Rilke et Nietzsche une fois les textes et guillemets fournis par Laurie. Ne pas modifier TTB avant réception des textes.

**N.5 — Vedere Venezia, texte de projet.** Troisième `gal-row` ajoutée dans `<section class="gal-opening">`, après les deux rangées de citations, sur le modèle du bloc prose de La Mer en Corps. Structure : cellule `.gal-cell--text` pleine largeur, libellé `.opening-eyebrow` en `var(--acc-venezia)` (automatique via `body.page-venezia { --accent: var(--acc-venezia) }`), 5 paragraphes `.opening-text`. Textes en FR/IT/PT ajoutés dans l'objet `content` de `[lang]/work/vedere-venezia.astro`. Fichiers touchés : `src/pages/work/vedere-venezia.astro`, `src/pages/[lang]/work/vedere-venezia.astro`.

**Lot O — Nouveau modèle de rangée, texte de projet autonome, Quando (chantiers O.1 à O.4).**

**O.1 — Nouveau modèle de rangée (décision).** Le modèle actuel (ratio de cellule texte → hauteur de rangée variable → image qui ne remplit pas sa cellule) est remplacé. Nouveau principe : une constante de page `H` (hauteur de rangée) ; la photo occupe exactement `H` px de hauteur, sa largeur vaut `ratio × H`, l'image remplit sa cellule sans vide résiduel. La cellule texte prend toute la largeur restante. Le système `data-ratio 0.75 / 1 / 1.3333` disparaît. Si le texte est plus haut que `H`, la rangée grandit et la photo se centre verticalement en face du texte. Calculs initiaux erronés (colonne mesurée à 791 px au lieu de 1224 px). Implémentation reportée au Lot P.

**O.2 — Texte de projet, rangée autonome (implémenté).** Le texte de projet n'est jamais placé en regard d'une photographie. Il occupe une rangée entière seule. Règle CSS ajoutée dans `work-project.css` : `.gal-cell--text:only-child` reçoit `padding-top: 2.5rem`, `padding-bottom: 2.5rem`, `justify-content: flex-start`, `align-self: flex-start`, `width: 100%`. Les enfants `.opening-eyebrow` et `.opening-text` reçoivent `max-width: 64ch`. L'`align-self: flex-start` est nécessaire pour rompre la boucle de hauteur (`flex-grow: 1` sur `.opening-text` + `align-items: stretch` produisait une cellule de ~1014 px). Règle active sur toutes les pages projet via `work-project.css`.

**O.3 — Quando sono qui, texte de projet rendu (FR/IT/PT).** Le texte existait dans l'objet `content` de `[lang]/work/quando-sono-qui.astro` pour FR/IT/PT mais n'était rendu nulle part. Ajouté : champ `projectLabel` ('Le Projet' / 'Il Progetto' / 'O Projeto') dans chaque objet langue, et troisième `gal-row` dans `gal-opening` après la rangée Ramalho Neto+photo. Structure : `<div class="gal-cell gal-cell--text"><p class="opening-eyebrow">{content.projectLabel}</p><p class="opening-text" set:html={content.projectText} /></div>`. Le `set:html` est requis car le texte contient `<em>Quando sono qui, non sono là</em>`. EN : pas de texte de projet, rien ajouté — sera écrit séparément.

**O.4 — Quando, rangée 1 (différé).** Non corrigée séparément : le passage au modèle O.1 la répare mécaniquement. Mesure à rendre après application du nouveau modèle.

**Lot P — Nouveau modèle de rangée (desktop + mobile).**

**P.1 — Desktop : hauteur fixe, largeur proportionnelle.** Deux jetons ajoutés dans `global.css` : `--rowh: 380px` (hauteur de rangée) et `--gap-gal: 16px` (gouttière identique horizontale et verticale). Colonne de contenu mesurée à 1440 px : 1224 px (max-width 1320 − 2 × 48 px gutter). La photo occupe exactement `--rowh` de hauteur, sa largeur vaut `ratio × H` (calculée par `layoutGalRows()` en JS depuis `img.naturalWidth / img.naturalHeight`). La cellule texte (`flex: 1 1 0`) absorbe le reste. Quand le texte dépasse la hauteur de rangée, la rangée grandit et la photo se centre verticalement (`align-items: center`). Rangées photo seules : comportement bord-à-bord inchangé. `width: 100%` sur `.gal-row` garantit que la rangée remplit toujours la colonne même quand la somme des bases flex est inférieure à 1224 px. Le système `data-ratio 0.75 / 1 / 1.3333` est supprimé. Valeur retenue `--rowh: 380px` : photo ratio 1.5 = 570 × 380 px, cellule texte = 638 px, toutes les citations du site tiennent (Claire Marin 7 L ≈ 196 px, Aznavour 8 L ≈ 240 px, Ramalho Neto 11 L ≈ 330 px, toutes < 380 px). Exception LMEC : `.lmec-vid-intro.gal-row { align-items: stretch; }` préserve le layout vidéo/citations Bachelard, valeurs 0.7519 / 0.6786 verrouillées. `layoutGalRows()` remplace `justifyGalRows()` sur les 10 pages projet EN + lang.

**P.2 — Mobile : 3 photos → 2+1, 4 photos → 2+2.** `flex-wrap: wrap` activé sur `.spread`. La fonction `justify()` gère trois cas : rangée de 3 photos sur mobile — photos [0,1] reçoivent `flex: ratio 1 0` (proportionnelles, ligne 1), photo [2] reçoit `flex: 0 0 100%` (pleine largeur, ligne 2) ; rangée de 4 photos sur mobile — largeurs calculées en pixels depuis `row.clientWidth − 8` pour chaque paire [0,1] et [2,3], photos proportionnelles aux ratios, hauteurs coïncidentes ; autres cas (desktop, 2 photos mobile) — `flexGrow = ratio`. Les variantes locales supprimées : `aspect-ratio: 3/2` et `object-fit: cover` par page (ECM EN, VV EN, QSQ EN+lang, VV lang), `reorgMobile()` / `tagLandscape()` de Spilling EN+lang. `gal-opening` sur mobile : photo et texte empilés pleine largeur (inchangé, via `flex: 0 0 100%` sur `.gal-cell--photo`, `.gal-cell--cit`, `.gal-cell--text`). Spilling : crop classes `land-crop` / `port-crop` préservées dans `getR()`.

**Lot Q — Rythme vertical, texte de projet bicolonne, filet d'accent (règles 1, 2, 3 + corrections par page).**

**Q.1 — Règle 1 : rythme vertical unique.** Espacement vertical uniforme de `--gap-gal` (16 px) entre toutes les rangées de toutes les pages projet, sans exception. Racine unique : `.gal-opening { padding-bottom }` était `clamp(3rem, 7vh, 5rem)` (63 px à 1440 px), remplacé par `var(--gap-gal)` dans `work-project.css`. LMEC : `.lmec-prose { margin: var(--gap-gal) auto 0 }` et `.lmec-gallery { margin: var(--gap-gal) auto 0 }` (étaient en `clamp`).

**Q.2 — Règle 2 : texte de projet pleine largeur, deux colonnes.** Le texte de projet occupe une rangée seule à pleine largeur. Au-dessus de 721 px : `column-count: 2`, `column-gap: var(--gap-gal)`, `orphans: 2`, `widows: 2`, sans `break-inside: avoid`. En dessous ou à 720 px : une seule colonne pleine largeur. Contrainte `64ch` supprimée. La cellule passe à `display: block` (le `column-count` est sans effet sur un conteneur flex) avec `flex: 0 0 100%` pour rester pleine largeur. Même règle appliquée à `.ecm-text`. La CSS de `.ecm-text` était dupliquée dans des `<style is:global>` dans les deux fichiers `.astro` ECM ; ces blocs ont été supprimés et la règle consolidée dans `work-project.css`.

**Q.3 — Règle 3 : filet sous le texte de projet.** Sur toutes les pages projet sans exception, un `<hr class="horizon" />` apparaît après le dernier paragraphe du texte de projet. Couleur : `var(--accent)`, jamais `--brume` ni `--cerule`. Dégagement minimal de 48 px entre le filet et l'image ou la série suivante. Implémentation : `.gal-cell--text { padding-bottom: 32px }` + `.gal-opening { padding-bottom: 16px }` = 48 px filet > image. Sélecteur CSS : `.gal-cell--text .horizon, .ecm-text .horizon { background: var(--accent) }`. Largeur du filet : 64 px (valeur globale, inchangée). Décision pleine colonne vs 64 px en attente de confirmation.

**Q.4 — QSQ : horizon ajouté [lang].** `<hr class="horizon" />` ajouté dans la rangée texte conditionnelle de `[lang]/work/quando-sono-qui.astro`. EN : pas de texte de projet, rien ajouté.

**Q.5 — VV : horizon ajouté (EN + [lang]).** `<hr class="horizon" />` ajouté dans la rangée texte de `src/pages/work/vedere-venezia.astro` et `src/pages/[lang]/work/vedere-venezia.astro`.

**Q.6 — TTB : restructuration de l'ouverture + citations intégrales.** Structure d'ouverture portée de 2 à 3 rangées : rangée 1 — photo 1 + citation Rilke intégrale ; rangée 2 — citation Nietzsche intégrale + photo 2 ; rangée 3 — texte de projet seul pleine largeur + `<hr class="horizon" />`. Textes complets en EN, FR, IT, PT. Asymétrie des notes voulue : note Rilke absente en PT (`rilkeNote: undefined`) ; note Nietzsche absente en FR (`nietzscheNote: undefined`). Fichiers : `src/pages/work/toward-the-blue.astro`, `src/pages/[lang]/work/toward-the-blue.astro`.

**Q.7 — Spilling : photo 1 en série, rangée texte seule.** La photo 1 retirée de la rangée `gal-opening` et ajoutée comme premier `spread--single` dans le tableau `spreads`. La rangée texte est désormais pleine largeur avec le filet en accent. Fichiers : `src/pages/work/spilling-beyond-the-lines.astro`, `src/pages/[lang]/work/spilling-beyond-the-lines.astro`.

**Q.8 — ECM : tirets cadratins listés (non corrigés).** Occurrences dans le texte de projet (pas dans les citations) : EN — 2 occurrences ("gave way —", "at once —") ; FR — 2 occurrences ("a cédé —", "à la fois —") ; IT — aucune ; PT — 2 occurrences ("cedeu —", "ao mesmo tempo —"). Citations Claire Marin (non modifiables) : FR et PT contiennent chacune 1 tiret cadratin. Correction du texte de projet : reformulation au cas par cas, non applicable mécaniquement.

**Q.9 — LMEC et Spilling : propositions (non appliquées, en attente de décision).** LMEC vidéo : hauteur actuelle 544 px. Option A — `flex: 2 → 3`, hauteur 612 px = 1.6× `--rowh`. Option B — vidéo pleine colonne, hauteur 816 px = 2.15× `--rowh` = photo bleue de galerie exactement. Spilling photo 1 en `spread--single` pleine colonne : hauteur 1837 px (ancienne ≈ 603 px). Spilling photo 2 (380 px) vs rangée 3 / triptyque composé (624 px) : `--rowh` Spilling à ≈ 620 px si alignement souhaité. Filet largeur : 64 px (actuel) vs pleine colonne (`width: 100%` sur `.gal-cell--text .horizon, .ecm-text .horizon`).

Fichiers touchés : `src/styles/pages/work-project.css`, `src/pages/[lang]/work/quando-sono-qui.astro`, `src/pages/work/vedere-venezia.astro`, `src/pages/[lang]/work/vedere-venezia.astro`, `src/pages/work/toward-the-blue.astro`, `src/pages/[lang]/work/toward-the-blue.astro`, `src/pages/work/spilling-beyond-the-lines.astro`, `src/pages/[lang]/work/spilling-beyond-the-lines.astro`, `src/pages/work/en-corps-en-la-mer.astro`, `src/pages/[lang]/work/en-corps-en-la-mer.astro`.

**Lot R — Hauteur commune, vidéo LMEC, filet pleine colonne, corrections ECM.**

**R.1 — Règle unique : hauteur commune à toutes les photos.** Toutes les photographies d'une page projet ont la même hauteur, qu'elles soient en rangée série ou en regard d'une citation. `--rowh` n'est plus une valeur choisie : elle est dérivée. Formule : `(largeur_colonne - gouttière) / somme_des_deux_ratios`. Pour 2 photos 3:2 à 1224 px avec 16 px de gouttière : (1224 - 16) / 3,0008 ≈ 402 px. Mesure navigateur à 1440 px : **403 px**. Valeur appliquée dans `src/styles/global.css` : `--rowh: 403px`.

**R.2 — justify() : hauteur fixe sur desktop, flex-grow maintenu pour les rangées en dépassement.** La fonction `justify()` est mise à jour dans les 10 fichiers de pages série (EN + lang pour TTB, QSQ, VV, ECM, Spilling). Desktop : calcul de `totalW = Math.round(sumR * H) + (n-1) * 16`. Si `totalW <= row.clientWidth + 2` : `flex: 0 0 (ratio * H)px` sur chaque figure. Si dépassement : `flexGrow = ratio` maintenu (rangée non recomposée, à traiter séparément). Ajout de la gestion des `spread--single` dans `justify()` : `flex: 0 0 (ratio * H)px` avec prise en compte des classes `land-crop` / `port-crop` (Spilling). Rangées en dépassement signalées : TTB r0 (3 paysages, 1846 px), QSQ r0/r2/r4/r6 (3 paysages chacune), VV r1 (3 paysages), ECM r2/r4 (4 paysages, 2466 px), ECM r3 (3 paysages).

**R.3 — Vidéo LMEC : correctif du bug cascade + flex 3,3.** `.gal-cell { flex: 1 1 0 }` (ligne 502 de `work-project.css`) écrasait `.lmec-vid-col { flex: 2 }` par spécificité égale. Correctif : `.lmec-vid-intro .lmec-vid-col { flex: 3.3; }` ajouté après `.gal-cell`. Test des citations Bachelard dans les 4 langues à flex 3,4 (maximum sans dépassement en IT, marge 2 px) et 3,3 (retenu pour robustesse) : EN vidH=614, citeH=533, marge 81 px ; FR vidH=614, citeH=566, marge 48 px ; IT vidH=614, citeH=560, marge 54 px ; PT vidH=614, citeH=560, marge 54 px. Les citations de Bachelard restent dans la rangée et leur hauteur ne dépasse pas la hauteur de la vidéo.

**R.4 — Photo GP LMEC : passage à la hauteur commune.** La photo flottante `GP010207.jpg` (ratio 1,4997) passe de `float: left; width: 66%` (808 x 539 px) à `height: var(--rowh); width: auto` via `.lmec-photo-float img`. Résultat : 604 x 403 px, flottement conservé, le texte reste enroulé autour.

**R.5 — Galerie LMEC rangée 1 : hauteur commune.** La figure de `1.jpg` (rangée 1 de `.lmec-gallery`) passe de `flex:1.4997 1 0` (pleine colonne, 1224 x 816 px) à `flex:0 0 605px` dans les fichiers EN et lang. Rangées 2-4 (valeurs verrouillées 0.7519 / 0.6786) : non modifiées.

**R.6 — Filet : pleine colonne + distance unique 48 px.** Avant : filet 64 px de large, margin-top 0 px. Après : `width: 100%` et `margin-top: 48 px` dans la règle `.gal-cell--text .horizon, .ecm-text .horizon`. Confirmé dans le navigateur : horizon 1224 px, distance texte-filet 48 px, identique sur TTB, QSQ, VV, ECM, Spilling.

**R.7 — ECM : correction des tirets cadratins EN et FR.** EN (appliqué) : "gave way, when illness" et "at once. To surface" (virgule et point remplacent les tirets). FR (appliqué) : "Il y a eu une saison où le corps a cédé, quand la maladie a retiré le sol de sous toute chose et que la force s'est retirée comme une marée." et "à la fois. Refaire surface". IT : pas de tiret cadratin. PT (non corrigé) : reformulation en attente : "Houve uma estação em que o corpo cedeu — quando a doença arrancou o chão de tudo e a força escoou como uma maré vazante." et "Nadar era ser carregada e carregar a si mesma ao mesmo tempo — emergir, e emergir de novo, até que emergir se tornasse uma forma de viver."

**R.8 — Spilling photo 1 : en attente de confirmation.** La photo `1.jpg` (portrait 0.6664, ajoutée en Lot Q comme premier `spread--single`) était affichée en pleine colonne (1837 px de haut). Après R.2, `justify()` lui applique `flex: 0 0 269px` (403 px de haut). Sa suppression de la série (décision de contenu) est en attente de validation.

Fichiers touchés : `src/styles/global.css`, `src/styles/pages/work-project.css`, `src/pages/work/la-mer-en-corps.astro`, `src/pages/[lang]/work/la-mer-en-corps.astro`, `src/pages/work/en-corps-en-la-mer.astro`, `src/pages/[lang]/work/en-corps-en-la-mer.astro`, `src/pages/work/toward-the-blue.astro`, `src/pages/[lang]/work/toward-the-blue.astro`, `src/pages/work/quando-sono-qui.astro`, `src/pages/[lang]/work/quando-sono-qui.astro`, `src/pages/work/vedere-venezia.astro`, `src/pages/[lang]/work/vedere-venezia.astro`, `src/pages/work/spilling-beyond-the-lines.astro`, `src/pages/[lang]/work/spilling-beyond-the-lines.astro`.

---

**Lot S — Correction d'une règle trop large (rangées série, filet, Spilling).**

**S.1 — Règle clarifiée : `--rowh` s'applique uniquement aux rangées mixtes.** La hauteur commune 403 px concerne uniquement les photos situées dans une rangée contenant une cellule de texte ou de citation (`.gal-cell--photo` traitée par `layoutGalRows()`). Les rangées de série restituent leur comportement d'origine : `justify()` utilise `flexGrow = ratio` sur desktop (sans calcul de hauteur fixe), les photos remplissent la colonne bord à bord. Aucune rangée de série ne laisse de vide à droite.

**S.2 — justify() : revert complet.** Les 10 fichiers de pages série (EN + lang, TTB / QSQ / VV / ECM / Spilling) sont repassés à la version d'avant le Lot R via script Python. Desktop : `fig.style.flexGrow = ratio`. Le bloc `spread--single` ajouté en R.2 est supprimé. La constante `const H` est supprimée de `justify()`. `layoutGalRows()` (rangées gal-opening) reste intact à 403 px.

**S.3 — Filet : retour à 64 px.** `width: 100%` annulé dans la règle `.gal-cell--text .horizon, .ecm-text .horizon`. Conservé : `margin-top: 48px`, couleur accent, dégagement image suivante. Largeur par défaut CSS : 64 px.

**S.4 — LMEC galerie rangée 1 : retour pleine colonne.** La figure de `1.jpg` repasse de `flex:0 0 605px` (Lot R.5) à `flex:1.4997 1 0` dans EN et lang. Cette rangée est une rangée de série pure, non concernée par `--rowh`.

**S.5 — Spilling 1.jpg : suppression confirmée.** Le `spread--single` de `1.jpg` est retiré du tableau `spreads` dans EN et lang. Le fichier est conservé dans le dépôt.

**S.6 — Spilling 2.jpg : option intermédiaire validée et appliquée.** Portrait ratio 0.6664 (identique à photo 25.jpg). Option retenue : photo 2.jpg affichée à la même taille que photo 25.jpg (604×906 px), citation Gilberto Gil à droite dans la galerie justifiée (largeur citation = 604 px, pas de recoule dans les 4 langues). Mécanisme : `--rowh: 906px` ajouté à `body.page-spill` dans `work-project.css`. Vérification JS : cellW=604 px, cellH=906 px.

**S.7 — Correction `layoutGalRows()` : lecture de `document.body`.** La propriété `--rowh` étant définie sur `body.page-spill` (non sur `:root`), `getComputedStyle(document.documentElement)` renvoyait la valeur racine 403 px sur Spilling. Correction dans les 10 fichiers de pages série (EN + lang) via script Python : `getComputedStyle(document.documentElement)` remplacé par `getComputedStyle(document.body)`. Vérification JS sur Spilling : rowhBody=906 px ; sur ECM : rowhBody=403 px.

**S.8 — ECM PT : reformulation appliquée.** Les deux phrases avec tirets cadratins dans `projectText` (portugais) ont été reformulées par Laurie et corrigées dans `src/pages/[lang]/work/en-corps-en-la-mer.astro`. Note : une citation Claire Marin dans un `<blockquote>` de la même page contient encore un tiret cadratin ; décision de contenu signalée à Laurie, non modifiée.

Recette S vérifiée dans le navigateur à 1440 px : toutes les rangées de série à 1224 px (totalW=1224 px, JS), gal-cell--photo à 403-404 px (JS), filet 64 px. Spilling 2.jpg : 604×906 px (JS).

Fichiers touchés : `src/styles/pages/work-project.css`, `src/pages/work/la-mer-en-corps.astro`, `src/pages/[lang]/work/la-mer-en-corps.astro`, `src/pages/work/toward-the-blue.astro`, `src/pages/[lang]/work/toward-the-blue.astro`, `src/pages/work/quando-sono-qui.astro`, `src/pages/[lang]/work/quando-sono-qui.astro`, `src/pages/work/vedere-venezia.astro`, `src/pages/[lang]/work/vedere-venezia.astro`, `src/pages/work/en-corps-en-la-mer.astro`, `src/pages/[lang]/work/en-corps-en-la-mer.astro`, `src/pages/work/spilling-beyond-the-lines.astro`, `src/pages/[lang]/work/spilling-beyond-the-lines.astro`.

---

**Lot T — Passe mobile (audit Android 485 px portrait).**

**T.1 — Photo flottante LMEC sur mobile.** `.lmec-photo-float img` avait `height: var(--rowh); width: auto` sans override mobile : l'image occupait 403 px de haut avec une largeur auto, ne remplissant pas la colonne. Correction dans `work-project.css` : ajout de `.lmec-photo-float img { height: auto; width: 100%; }` dans le bloc `@media (max-width: 700px)`. Les 5 pages série (gal-cell--photo) étaient déjà correctes : `flex: 0 0 100%` en CSS et `cell.style.width = ''` en JS suffisaient. Vérification JS : floatImg 445×297 px (ratio naturel).

**T.2 — Galerie LMEC sur mobile.** Le bloc `@media (max-width: 700px)` forçait `flex: 0 0 calc(50% - 4px) !important` sur toutes les figures, écrasant les valeurs calibrées en ligne (0.7519, 0.6786, 1.4997, 0.6668). Résultat : largeurs identiques, hauteurs divergentes. Correction : suppression complète du bloc, remplacé par `.lmec-gallery { --gap: 8px; }`. Les valeurs calibrées en ligne gouvernent à toutes tailles et maintiennent des hauteurs cohérentes par rangée. Vérification JS à 485 px : rangée 2 (313/311 px), rangée 3 (202/202 px), rangée 4 (146/146 px). Valeurs verrouillées 0.7519 et 0.6786 préservées.

**T.3 — Citation Benjamin Clementine (LMEC).** `.lmec-prose .epi-wrap` avait `margin: .5rem 0 .5rem` : la citation était trop proche du texte suivant. Correction : `margin: 1.4rem 0 1.4rem` (aligné sur le `margin-bottom: 1.4rem` de `.opening-text`). Vérification JS : margins 22.4 px = 1.4rem ✓. Le bug existait aussi sur desktop.

**T.4 — Page Projects, bloc P4 sur mobile.** `.p4 .p4-below { gap: 1.5rem; }` créait un écart excessif entre le label "Rebirth. An attempt." et le titre "Vedere Venezia". Correction dans `work-index.css` : `gap: 0`. L'espacement résiduel (6 px) est assuré par `margin-bottom: .4rem` sur `.wi-cerule`. Vérification JS : spaceBetween = 6 px ✓.

**T.5a — Expositions : grille justifiée sur mobile.** `justifyGrid()` n'avait pas de vérification mobile, causant un item isolé en pleine largeur sur les rangées à 3 photos. Correction dans `exhibitions.astro` : ajout du même modèle que `justify()` dans les pages série. Rangées 3-photos : fig[0]+fig[1] côte à côte proportionnels, fig[2] pleine largeur. Rangées 4-photos : deux paires proportionnelles (même mécanisme que QSQ 4-photos). Desktop : `fig.style.flex = ''` + `flexGrow = ratio` (comportement d'origine préservé). Vérification JS à 485 px : rangée 1 (0.6669/1.4308/100%), rangée 2 (0.6667/1.0/100%), rangée 3 (paires 230+207 et 278+159 px).

**T.5b — Expositions : images exclues de la visionneuse.** Les images de `.ex-grid-wrap` et `.ex-artwork-wrap` ne doivent pas être cliquables. Correction dans `Lightbox.astro` : ajout de `.ex-grid-wrap` et `.ex-artwork-wrap` à `SKIP_PARENTS`. Vérification JS : cursor:auto sur les images de grille ✓.

**T.6 — Orientation paysage (diagnostic seulement, aucune correction).** À 1003×377 px (Android paysage), le breakpoint mobile `max-width: 700px` ne s'applique pas (1003 > 700) : le layout desktop s'active. `--rowh: 403px` dépasse la hauteur de l'écran (377 px). Aucune mesure de hauteur ou d'orientation dans le CSS actuel. Approche proposée pour une session ultérieure : `--rowh: min(403px, 55dvh)` sur `:root` dans `global.css`. Cette valeur se réduit automatiquement quand la hauteur d'écran est insuffisante, sans affecter le desktop standard (900 px+ : 55dvh = 495 px > 403 px, donc la valeur fixe s'applique).

Recette T vérifiée dans le navigateur à 485 px : float LMEC 445×297 px, galerie LMEC hauteurs cohérentes, citation margins 22.4 px, P4 gap 0 px, grille expositions proportionnelle, cursor:auto sur images expo.

Fichiers touchés : `src/styles/pages/work-project.css`, `src/styles/pages/work-index.css`, `src/components/Lightbox.astro`, `src/pages/exhibitions.astro`.

---

**Lot U — Version mobile, Direction A.**

**U.1+2 — Composition et hero.** `work-project.css` (bloc `@media (max-width: 700px)`) : `.phero { height: 62dvh; min-height: 280px }` remplace `min-height: 90vh`. `.gal-row { padding-inline: 0; gap: 40px }` (photos bord-à-bord, écart 40 px image↔texte). `.gal-opening { padding-top: 40px; padding-bottom: 0; gap: 36px }` (écart texte↔texte entre rangées). `.series { gap: 4px; margin-top: 40px }` (écart image↔image dans la série, rupture de 40 px entre l'ouverture et la série). `.spread { gap: 4px }`. `.gal-cell--cit, .gal-cell--text { padding-inline: 24px }` (marges latérales du texte). `.lmec-vid-intro { gap: clamp(3rem,7vh,5rem) }` rétabli après la règle générale `.gal-row`. Vérification JS à 375 px : hero 503 px = 62dvh ✓, photo 375 px plein bord ✓, gap gal-opening/série 40 px ✓, gap inter-spreads 4 px ✓.

**U.3 — En-tête dynamique.** `Header.astro` : seuil de masquage 80 → 140 px, transition `transform .28s ease, background .28s ease` (était `.35s`). Au passage du hero, le JS ajoute/retire `site-header--light` selon `scrollY > heroEl.offsetHeight - 60` : l'en-tête passe du fond sombre (pages projet) au fond clair sans rechargement. Sur les pages sans `.phero`, le comportement est inchangé.

**U.4 — Visionneuse tactile.** `Lightbox.astro` : remplacement du gestionnaire tactile minimal par trois écouteurs complets. `touchstart` mémorise les coordonnées et désactive la transition de la photo. `touchmove` applique `translateX(dx)` pour la navigation horizontale ou `translateY(dy) scale(...)` + opacité de fond progressives pour le glisser-vers-le-bas. `touchend` : si `|dy| > |dx|` et `dy > 90 px` → fermeture ; si `|dx| > 60 px` → photo précédente/suivante ; sinon retour à la position initiale. Compteur discret `.lb-cnt` ajouté dans la visionneuse, mis à jour à chaque `show()` au format `n / total`.

**U.5 — Compte dynamique (4 langues).** `Lightbox.astro` : tableaux `NUMS` (formes féminines 1-25 pour EN/FR/IT/PT), `PHOTO_SG/PL` (singulier/pluriel), fonctions `heroCountText()` et `seeLinkText()`. Dans `buildLightbox()`, après constitution du tableau `imgs` : `.phero-count` est rempli (`"Eleven photographs"`, `"Onze photographies"`, etc.) ; `.see-images` est rempli (`"See the eleven images ↓"`, `"Voir les onze images ↓"`, etc.) si la page en a un. La langue est lue via `document.documentElement.lang`. Élément `.phero-count` ajouté dans le hero de toutes les pages projet EN et [lang] (QSQ, Spilling, TTB, VV, ECM, LMEC). Lien `.see-images href="#serie"` ajouté avant `<hr class="horizon">` dans les pages avec texte de projet (Spilling, TTB, VV, EN + [lang]). `id="serie"` ajouté sur `.series` (QSQ, Spilling, TTB, VV, ECM) et `.lmec-gallery` (LMEC). `.phero-count:empty { display: none }` masque le compteur sur ECM (toutes photos `data-no-lightbox`). `.see-images` global `display: none`, visible uniquement via `@media (max-width: 700px)`.

**U.6 — Diagnostic animation `.rv`.** IntersectionObserver threshold 0.06, `unobserve` après activation : aucun risque d'élément bloqué. Conforme sur mobile.

**U.7 — Rapport poids des images (sans correction).** Cible retina 485 px × densité 2.23 = 1081 px minimum. Série `spilling/` : toutes images > 1081 px (1145-4464 px) mais non redimensionnées pour le web (548 Ko à 3,8 Mo par fichier). Série `work/*/` : 2000 px, 280-600 Ko. Aucune image en dessous du seuil de netteté retina. La série Spilling mériterait un redimensionnement à 1200 px et un export JPEG optimisé (session ultérieure).

Commit : `1fcab42`. Fichiers touchés : `src/components/Header.astro`, `src/components/Lightbox.astro`, `src/styles/pages/work-project.css`, et les 12 pages projet (6 EN + 6 [lang]).

---

**Lot W — Corrections mobile, Spilling, suppression de l'effet éventail.**

**W.1 — Rangées de galerie justifiées au pixel près sur mobile.** Toutes les pages série disposaient d'une logique `justify()` pour le desktop (flex-grow proportionnel), mais les rangées de deux ou trois images en mobile n'étaient pas justifiées exactement : le dernier élément prenait la largeur restante par flexbox, ce qui introduisait un écart sub-pixel visible. Correction : ajout d'une fonction `apply()` dans chaque page avec cas mobile explicites. Rangée 2 : `avail = row.clientWidth - 4` (écart 4 px entre images) ; `w0 = round(r0/(r0+r1)*avail)` ; `figs[0].flex = 0 0 w0px` ; `figs[1].flex = 0 0 (avail-w0)px`. Rangée 3 : même calcul pour les deux premières images, troisième en `100%`. Rangée 4 : deux paires proportionnelles (avail - 8 px pour deux écarts). Pages Spilling (avec recadrages `land-crop`/`port-crop`) : version 2 paramètres `getR(img, fig)` qui retourne le ratio fixe si un recadrage CSS est présent. Vérification JS à 375 px : rangée 2 `[166, 165]` px, somme 331 + 4 = 335 = `clientWidth` ✓. À 485 px : `[221, 220]` px ✓.

Fichiers touchés : les 10 pages série EN et [lang] (QSQ, Spilling, TTB, VV, ECM, LMEC).

**W.2 — Visionneuse circulaire, flèches toujours visibles.** La visionneuse masquait les flèches aux extrémités (`opacity: 0; pointer-events: none`) et bloquait la navigation. Correction dans `Lightbox.astro` : suppression des règles `opacity`/`pointerEvents` dans `show()` ; navigation circulaire via `idx = ((i % n) + n) % n`. Clic sur `prev` depuis la première image → dernière image ; clic sur `next` depuis la dernière image → première image. Gestes tactiles et touches clavier (ArrowLeft/ArrowRight) bénéficient du même comportement. Gestionnaire Tab simplifié (les deux boutons sont toujours focusables). Vérification JS : depuis photo 1/9 → clic prev → photo 9/9 ✓ ; clic next → photo 1/9 ✓.

Fichier touché : `src/components/Lightbox.astro`.

**W.3 — La Mer en Corps, espace entre la vidéo et la citation sur mobile.** La citation était collée à la vidéo en mobile. Cause : `.lmec-vid-intro.gal-row { gap: 0; align-items: stretch; }` (sélecteur à deux classes, spécificité 2) écrasait la règle mobile `.lmec-vid-intro { gap: clamp(3rem,7vh,5rem); }` (spécificité 1). Correction : suppression de `gap: 0` dans le sélecteur double-classe, qui passe à `.lmec-vid-intro.gal-row { align-items: stretch; }`. Desktop non affecté : `--gap-gal: 16px` s'applique via `.gal-row`. Vérification JS : mobile `gap: 56.84px` (= 7vh de 812 px) ✓ ; desktop `gap: 16px` ✓.

Fichier touché : `src/styles/pages/work-project.css` (ligne 511).

**W.4 — Lien « voir les images » découplé du texte de projet.** Sur les pages sans texte de projet (QSQ version EN), le lien `.see-images` n'avait pas de point d'ancrage logique. Règle révisée : si la page a un texte de projet → le lien se place à sa fin ; si la page n'a que du texte d'ouverture → le lien se place après le dernier bloc d'ouverture. Implémentation : `.see-images` déplacé après `<p class="intro-text">` dans les pages EN sans texte de projet, et après `<a class="see-images">` avant `<hr class="horizon">` dans les pages [lang] avec texte de projet.

Pages touchées : `quando-sono-qui.astro` (EN et [lang]), `la-mer-en-corps.astro` (EN et [lang]), `spilling-beyond-the-lines.astro` (EN et [lang]).

**W.5 — Audit du compte d'images.** Contrôle sur toutes les pages projet : la vidéo LMEC est exclue du compte (`SKIP_PARENTS` contient `.lmec-video-wrap`). Aucune image ne compte deux fois. Spilling : après suppression des captions et réintégration de la photo 44, le compte est 47 photographies (1 ouverture + 46 en série). QSQ : 24 photographies confirmé (le `.lb-photo` créé par le JS lui-même ne se compte pas car il n'existe pas encore au moment de l'inventaire). LMEC : 9 photographies (vidéo exclue). Aucune correction requise.

**W.6 — Spilling, poids des images.** 43 images redimensionnées à 1200 px de large (max) avec `sips` (ratio conservé) ; `19.jpg` déjà à 1145 px, inchangé. 4 fichiers (39, 45, 46, 48) avaient été supprimés du répertoire sans commit : restaurés depuis l'historique git et redimensionnés. Poids total avant : 72 Mo (44 fichiers). Poids total après : 25 Mo (48 fichiers, 4 restaurés). Réduction : 65 %.

Fichier touché : `public/images/spilling/` (48 fichiers .jpg).

**W.7 — Spilling, composition de la galerie.**
- **W.7a — Suppression des trois légendes.** Les phrases intercalées dans la galerie (attribut `caption`) ont été supprimées de toutes les langues avant suppression définitive. Textes supprimés : FR « Ni tout à fait un départ ni vraiment un retour... » (row 7-10), « Déborder les lignes laisse trembler les contours... » (row 45-46), « Pour moi, la photographie est une façon de rester en mouvement... » (single 30) — et leurs équivalents IT et PT. EN : les chaînes étaient inline dans la page. [lang] : les clés `cap1`/`cap2`/`cap3` du dictionnaire `content` ont été supprimées.
- **W.7b — Suppression de l'effet éventail.** Le type `composed` et toutes les règles CSS `.spread--composed` ont été supprimés. Le spread concerné est passé en `type: 'row'`. Règles supprimées : `align-items: flex-start; gap: 0; margin-block; figure flex/transform/z-index/margin; img border-radius: 12px` et leurs overrides mobile `!important`.
- **W.7c — Photos 22 et 23 séparées.** La rangée commune a été remplacée par deux `type: 'single'` consécutifs.
- **W.7d — Photo 44 réintégrée.** Ajoutée dans une rangée partagée avec la photo 47 (`type: 'row'`). Nouveau compte série : 47 photographies.
- **W.7e — Coins arrondis supprimés dans la visionneuse.** `border-radius: 4px` retiré de `.lb-photo` dans `Lightbox.astro`. Vérification JS : `borderRadius: "0px"` ✓. Aucune ombre portée détectée.

Fichiers touchés : `src/pages/work/spilling-beyond-the-lines.astro`, `src/pages/[lang]/work/spilling-beyond-the-lines.astro`, `src/styles/pages/work-project.css`, `src/components/Lightbox.astro`.

Commits : `37425a5` (W.1), `9da11af` (W.4+W.5), `13882ed` (W.7), `1a73dc6` (W.3), `aebc304` (W.2), `07c52fc` + `f2e477f` (W.6).

---

## 9. Travailler avec Claude Code
1. Créer le dépôt GitHub + projet Astro, connecter Cloudflare Pages.
2. Donner **ce cahier** en contexte.
3. Importer les images dans le prompt (Claude Code les range dans le dépôt).
4. Demander les pages et ajustements en langage naturel ; observer l'aperçu en direct.
5. Commit → déploiement automatique sur Cloudflare ; repointer le domaine quand prêt.

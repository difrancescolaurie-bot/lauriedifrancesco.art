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

---

## 9. Travailler avec Claude Code
1. Créer le dépôt GitHub + projet Astro, connecter Cloudflare Pages.
2. Donner **ce cahier** en contexte.
3. Importer les images dans le prompt (Claude Code les range dans le dépôt).
4. Demander les pages et ajustements en langage naturel ; observer l'aperçu en direct.
5. Commit → déploiement automatique sur Cloudflare ; repointer le domaine quand prêt.

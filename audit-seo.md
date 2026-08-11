# Audit SEO — lauriedifrancesco.art

**Date :** 2026-08-11  
**Périmètre :** structure de balisage, métadonnées, indexabilité, hreflang, sitemap, robots.txt.  
**Exclus :** contenus rédactionnels (traités dans `audit-textes.md`), poids des images, Core Web Vitals.

---

## 1. Infrastructure — ce qui est en place

### Métadonnées centralisées (`Layout.astro`)

Toutes les pages passent par un unique `Layout.astro` qui produit :

| Balise | Valeur | État |
|---|---|---|
| `<meta name="description">` | prop `description` par page | ✓ |
| `<title>` | prop `title` · Laurie Di Francesco | ✓ |
| `<link rel="canonical">` | calculé depuis `Astro.url.pathname` + `SITE_URL` | ✓ |
| `og:type` | `website` | ✓ |
| `og:locale` | adapté à la langue (`en_US`, `fr_FR`, `it_IT`, `pt_BR`) | ✓ |
| `og:site_name` | Laurie Di Francesco | ✓ |
| `og:url` | URL canonique | ✓ |
| `og:title` | même que `<title>` | ✓ |
| `og:description` | même que `<meta description>` | ✓ |
| `og:image` | prop `image` (défaut : `/og-default.jpg`) | ✓ |
| `og:image:width/height` | 1200 / 630 (déclaré) | ✓ |
| `twitter:card` | `summary_large_image` | ✓ |

**Image Open Graph par défaut :** `/public/og-default.jpg` — 1200×630 px, 68 Ko. Dimensions et poids conformes.

### Hreflang

Déclaré conditionnel via prop `hasTranslations` (défaut `true`).  
Quand actif, produit cinq liens par page :

```html
<link rel="alternate" hreflang="en"        href="https://lauriedifrancesco.art[chemin]" />
<link rel="alternate" hreflang="fr"        href="https://lauriedifrancesco.art/fr[chemin]" />
<link rel="alternate" hreflang="it"        href="https://lauriedifrancesco.art/it[chemin]" />
<link rel="alternate" hreflang="pt"        href="https://lauriedifrancesco.art/pt[chemin]" />
<link rel="alternate" hreflang="x-default" href="https://lauriedifrancesco.art[chemin]" />
```

Le calcul du chemin de base (`hreflangBase`) retire le préfixe de langue de l'URL courante, puis reconstitue les quatre variantes.

### Robots et sitemap

| Fichier | Contenu |
|---|---|
| `public/robots.txt` | `User-agent: *` / `Allow: /` / pointeur vers `sitemap-index.xml` |
| `astro.config.mjs` | `@astrojs/sitemap` avec filtre `!page.includes('/private')` |

### Indexabilité — pages exclues

Deux pages ont `noindex={true}` dans le Layout, ce qui injecte `<meta name="robots" content="noindex, follow">` :

| Page | URL | Justification |
|---|---|---|
| `src/pages/legal.astro` | `/legal` | Mentions légales |
| `src/pages/work/en-corps-en-la-mer/private.astro` | `/work/en-corps-en-la-mer/private` | Galerie privée |

La page `private.astro` est également exclue du sitemap par le filtre `/private`.

---

## 2. Inventaire des `description` par page

### Pages EN (référence)

| Page | description |
|---|---|
| `/` (home) | Documentary and poetic photography · Where the blue of the sky opens into new shades |
| `/work` | Stories in Images · Laurie Di Francesco, photography and writing. |
| `/work/quando-sono-qui` | Quando sono qui, non sono là · An intimate geography of presence and absence. Brazil · ongoing. |
| `/work/la-mer-en-corps` | La Mer en Corps · water and dreams, giving body to movement. A year of passages. |
| `/work/toward-the-blue` | Toward the Blue · a photographic series by Laurie Di Francesco. |
| `/work/en-corps-en-la-mer` | En Corps à la Mer · Surfacing · 2025. A photographic series by Laurie Di Francesco. |
| `/work/vedere-venezia` | Vedere Venezia e Non Morire · Seeing Venice without dying from it. A city seen from over the cliché's shoulder. |
| `/work/spilling-beyond-the-lines` | A photobook born from displacement and the question of borders · Belo Horizonte, Brazil, 2024. |
| `/about` | Laurie Di Francesco · visual artist working through photography and writing. |
| `/exhibitions` | Spilling Beyond the Lines · First solo exhibition, Livraria da Rua, Belo Horizonte, Brazil, July 2024. |
| `/contact` | (t.h1 · Laurie Di Francesco, EN) |
| `/legal` | Legal notice for lauriedifrancesco.art — noindex |

### Pages localisées — état de la description

| Page | FR | IT | PT |
|---|---|---|---|
| `/[lang]/` (home) | localisée via `t.home.*` ✓ | id. ✓ | id. ✓ |
| `/[lang]/work` | `t.work.h1 · Laurie Di Francesco` ✓ | id. ✓ | id. ✓ |
| `/[lang]/work/la-mer-en-corps` | localisée via `content.caption` ✓ | id. ✓ | id. ✓ |
| `/[lang]/work/quando-sono-qui` | localisée ✓ | localisée ✓ | localisée ✓ |
| `/[lang]/work/toward-the-blue` | localisée ✓ | localisée ✓ | localisée ✓ |
| `/[lang]/work/en-corps-en-la-mer` | localisée ✓ | localisée ✓ | localisée ✓ |
| `/[lang]/work/vedere-venezia` | localisée ✓ | localisée ✓ | localisée ✓ |
| `/[lang]/work/spilling-beyond-the-lines` | localisée ✓ | localisée ✓ | localisée ✓ |
| `/[lang]/about` | localisée via `t.description` ✓ | id. ✓ | id. ✓ |
| `/[lang]/exhibitions` | localisée via `t.*` ✓ | id. ✓ | id. ✓ |
| `/[lang]/contact` | localisée via `t.h1` ✓ | id. ✓ | id. ✓ |

Les cinq pages projet FR/IT/PT avec description EN ne génèrent pas d'erreur technique, mais Google peut leur affecter une description générée automatiquement plutôt que celle déclarée.

---

## 3. Observations

### O1 — Sitemap et page `/legal` — RÉSOLU lot AK (2026-08-11)

Filtre `/legal` ajouté dans `astro.config.mjs`. Vérifié en production : `/legal` absent du sitemap en ligne.

### O2 — Descriptions non localisées sur cinq pages projet — RÉSOLU lot AM (2026-08-11)

24 descriptions localisées intégrées (6 projets × 4 langues) dans les pages `[lang]/work/*.astro`. Textes déposés dans `contenus-projets.md`. Tableau §2 mis à jour ci-dessous.

### O3 — `hasTranslations` sur `/contact`

La page `/contact` EN (`src/pages/contact.astro`) ne passe pas `hasTranslations={false}`. Elle produit donc des liens hreflang vers `/fr/contact`, `/it/contact`, `/pt/contact`, ce qui est cohérent puisque ces pages existent. Pas d'anomalie.

### O4 — `og:image` sur les pages projet sans image dédiée

Les pages qui passent une `image="/images/work/[cover].jpg"` relative à `/public` sont correctes. Pages sans prop `image` : tombent sur `/og-default.jpg` (1200×630, conforme).

---

## 4. Historique des actions

| Date | Action | Déclencheur |
|---|---|---|
| 2026-07 (approx.) | Ajout hreflang 4 langues + x-default dans `Layout.astro` | Alerte Google Search Console : 16 pages non indexées |
| 2026-07 (approx.) | `noindex={true}` sur `/legal` et `/private` | Même audit |
| 2026-07 (approx.) | Filtre sitemap `!page.includes('/private')` | Même audit |
| 2026-07 (approx.) | 2 URLs 404 (reliques Squarespace) traitées via outil de suppression GSC | Même audit |
| 2026-08-11 | Filtre sitemap `/legal` ajouté dans `astro.config.mjs` (lot AK) | O1 |
| 2026-08-11 | 24 descriptions localisées intégrées, 6 projets × 4 langues (lot AM) | O2 |
| 2026-08-11 | JSON-LD Person (global), CreativeWork (12 pages), ExhibitionEvent (2 pages) ajoutés via `Layout.astro` (lot AR) | SEO structuré |
| 2026-08-11 | En-têtes sécurité (`_headers`) : X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, CSP (lot AR) | Sécurité |

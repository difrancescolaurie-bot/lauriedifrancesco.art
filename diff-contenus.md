# Diff des contenus — avant vs actuel
Référence avant : commit 1bba78e (2026-06-30)
Référence actuel : HEAD (2026-08-08)

---

## Résultat d'ensemble

**Aucune citation n'a été raccourcie.** Aznavour (8 lignes), Gilberto Gil (6 lignes) et Claire Marin (9 phrases) sont identiques mot pour mot entre l'état de juin 2026 et l'état actuel.

Les seules différences sont :
1. Suppression du balisage d'emphase `<span class="k">` (Lot G + Chantier 2)
2. Remplacement de `—` par `·` dans les attributions (Lot K)
3. Suppression du mécanisme `slot:short` pour Bachelard LMEC mobile (Lot M — display uniquement, pas de contenu)
4. Textes de projet (VV, QSQ) ajoutés en Lot N — absent en juin, présent maintenant (ne comptent pas comme différence sur les citations)

---

## QUANDO SONO QUI, NON SONO LÀ

Projet absent en juin 2026. Pas de diff possible.

---

## TOWARD THE BLUE

Projet créé en août 2026. Pas de diff possible.

---

## EN CORPS À LA MER

### Nietzsche (4 langues)

| Langue | Avant | Actuel | Type de différence |
|--------|-------|--------|-------------------|
| EN | `...called <span class="k">life</span>` | `...called life` | Balisage supprimé |
| FR | `...appelle la <span class="k">vie</span>` | `...appelle la vie` | Balisage supprimé |
| IT | `...si chiama <span class="k">vita</span>` | `...si chiama vita` | Balisage supprimé |
| PT | `...se chama <span class="k">vida</span>` | `...se chama vida` | Balisage supprimé |

Texte : **identique**. Volume : **identique**. Raccourcissement : **aucun**.

---

### Claire Marin (4 langues)

Phrase initiale enveloppée dans `<span class="k">` en juin 2026, retirée ensuite. Texte intégral identique.

| Langue | Avant | Actuel | Type de différence |
|--------|-------|--------|-------------------|
| EN | Première phrase dans `<span class="k">…</span>` + attribution avec `—` | Même texte sans balisage + attribution avec `·` | Balisage supprimé, ponctuation attribution |
| FR | Première phrase dans `<span class="k">…</span>` + attribution avec `—` | Même texte sans balisage + attribution avec `·` | Balisage supprimé, ponctuation attribution |
| IT | Première phrase dans `<span class="k">…</span>` + attribution avec `—` + pas de note | Même texte sans balisage + attribution avec `·` + note "tradotto dal francese" | Balisage supprimé, ponctuation, note ajoutée |
| PT | Première phrase dans `<span class="k">…</span>` + attribution avec `—` + pas de note | Même texte sans balisage + attribution avec `·` + note "traduzido do francês" | Balisage supprimé, ponctuation, note ajoutée |

Texte : **identique** (9 phrases dans les 4 langues). Volume : **identique**. Raccourcissement : **aucun**.

---

## VEDERE VENEZIA E NON MORIRE

### Aznavour (4 langues)

Lignes 3-4 (dans le poème) enveloppées dans `<span class="k">` en juin 2026, retirées ensuite. Texte identique.

| Langue | Lignes avant | Lignes actuel | Raccourcissement |
|--------|--------------|---------------|-----------------|
| EN | 8 lignes | 8 lignes | Aucun |
| FR | 8 lignes | 8 lignes | Aucun |
| IT | 8 lignes | 8 lignes | Aucun |
| PT | 8 lignes | 8 lignes | Aucun |

Différence : balisage d'emphase supprimé sur lignes 3-4, attributions `—` → `·`. Texte : **identique**.

---

### Dufourmantelle (4 langues)

Fin de citation (« risquer sa propre langue, la langue poétique par excellence ») enveloppée dans `<span class="k">` en juin 2026, retirée ensuite. Texte identique.

| Langue | Avant | Actuel | Type de différence |
|--------|-------|--------|-------------------|
| EN | Fin dans `<span class="k">risk one's own language — the poetic language par excellence</span>` | Même texte sans balisage | Balisage supprimé |
| FR | Fin dans `<span class="k">risquer sa propre langue, la langue poétique par excellence</span>` | Même texte sans balisage | Balisage supprimé |
| IT | Fin dans `<span class="k">rischiare la propria lingua, la lingua poetica per eccellenza</span>` | Même texte sans balisage | Balisage supprimé |
| PT | Fin dans `<span class="k">arriscar a sua própria língua, a língua poética por excelência</span>` | Même texte sans balisage | Balisage supprimé |

Texte : **identique**. Volume : **identique**. Raccourcissement : **aucun**.

---

Texte de projet VV : absent en juin 2026, présent en Lot N (août 2026). Ne constitue pas une modification d'une citation existante.

---

## LA MER EN CORPS

Projet créé en août 2026. Pas de diff possible pour les citations.

### Bachelard (mécanisme bq2Short — display uniquement)

Le champ `bq2Short` (2 phrases en FR/IT/PT) était utilisé par `slot:short` de Citation.astro pour afficher une version raccourcie sur mobile. Il s'agit d'un mécanisme d'affichage, non d'une modification du texte de la citation.

- `bq2Long` (version longue, 4 langues) : **jamais modifié** depuis la création du projet
- `bq2Short` (2 phrases, FR/IT/PT uniquement) : données encore présentes dans le code source [lang], mais **non rendues depuis Lot M**

Ce mécanisme ne constitue pas un raccourcissement de citation. La version longue complète de Bachelard a toujours été la citation affichée sur desktop depuis la création du projet.

---

## SPILLING BEYOND THE LINES

### Gilberto Gil (EN + FR/IT/PT)

| Langue | Lignes avant | Lignes actuel | Raccourcissement |
|--------|--------------|---------------|-----------------|
| EN | 6 lignes | 6 lignes | Aucun |
| FR | 6 lignes | 6 lignes | Aucun |
| IT | 6 lignes | 6 lignes | Aucun |
| PT | 6 lignes | 6 lignes | Aucun |

Seule différence : attribution `Gilberto Gil — Back in Bahia` → `Gilberto Gil · Back in Bahia` (Lot K). Texte : **identique depuis le commit initial (c4e7a9d, 2026-06-24)**.

---

## Synthèse

| Citation | Avant (juin 2026) | Actuel (août 2026) | Raccourcie ? |
|----------|-------------------|-------------------|--------------|
| ECM — Nietzsche (4 langues) | 1 ligne, `<span class="k">` sur 1 mot | 1 ligne, sans balisage | Non |
| ECM — Claire Marin (4 langues) | 9 phrases, `<span class="k">` sur phrase 1 | 9 phrases, sans balisage | Non |
| VV — Aznavour (4 langues) | 8 lignes, `<span class="k">` sur lignes 3-4 | 8 lignes, sans balisage | Non |
| VV — Dufourmantelle (4 langues) | 3 phrases, `<span class="k">` sur fin | 3 phrases, sans balisage | Non |
| LMEC — Bachelard (4 langues) | Version longue + bq2Short mobile | Version longue (bq2Short non rendu) | Non |
| Spilling — Gilberto Gil (4 langues) | 6 lignes | 6 lignes | Non |
| QSQ — Platon, Char, Ramalho Neto | Absents en juin | Présents (créés en août 2026) | Sans objet |
| TTB — Rilke, Nietzsche | Absents en juin | Présents (créés en août 2026) | Sans objet |

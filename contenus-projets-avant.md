# Contenus des pages projet — état antérieur
Référence : dernier commit de juin 2026, commit 1bba78e (2026-06-30)
Copie exacte depuis git — aucune reformulation

## Portée de ce document

Seules VV, ECM et Spilling existaient en juin 2026. LMEC, TTB et QSQ (dans sa forme actuelle) ont été créés ou entièrement restructurés en août 2026. Pour ces trois projets, le fichier `contenus-projets.md` fait foi, il n'existe pas d'état antérieur distinct.

Les pages multilingues ([lang]) de VV et ECM existaient en juin 2026 avec leur contenu complet.

---

## Commits touchant les contenus de citations (chronologie)

```
c4e7a9d  2026-06-24  Initial site launch — Spilling (Gil en place)
ecad984  2026-06-25  Add En Corps en la Mer — Claire Marin en place
898596a  2026-06-29  Vedere Venezia : épigraphes Aznavour + Dufourmantelle en place
1bba78e  2026-06-30  Spilling mobile (dernier commit juin — état de référence)
─────────── (pas de commits entre le 2026-06-30 et le 2026-08-06) ───────────
e72645f  2026-08-08  Lot G : .q-fort — renommage .k → .q-fort dans citations VV et ECM
3378a2d  2026-08-08  Chantier 2 : suppression .q-fort — balises retirées partout
305ab35  2026-08-08  Lot K : tirets cadratins → points médians dans les attributions
548fb95  2026-08-08  Lot M : slot:short retiré de Citation.astro et des pages LMEC
```

**Conclusion sur les raccourcissements** : Aucune citation n'a jamais été raccourcie dans l'historique git. Le texte des citations est identique dans l'état actuel et dans l'état de juin 2026. Les seules modifications portent sur le balisage d'emphase (`<span class="k">` puis `<span class="q-fort">`, ensuite supprimé) et sur la ponctuation des attributions (`—` → `·`).

---

## QUANDO SONO QUI, NON SONO LÀ

Projet absent de l'état de juin dans sa forme actuelle. La page existait mais sans gal-opening (ajouté en août 2026). Les citations (Platon, Char, Ramalho Neto) sont propres à la gal-opening et n'ont pas d'état antérieur distinct.

→ Voir contenus-projets.md

---

## TOWARD THE BLUE

Projet créé en août 2026 (ccb7c7c). Pas d'état antérieur.

→ Voir contenus-projets.md

---

## EN CORPS À LA MER

### Différences par rapport à l'état actuel

Les citations sont identiques en volume. Différences de balisage uniquement.

**Nietzsche — EN (avant)**
Texte tel que présent en juin 2026 (commit 1bba78e) :

That fundamental artistic phenomenon which is called <span class="k">life</span>

**Nietzsche — EN (actuel)**
That fundamental artistic phenomenon which is called life

---

**Nietzsche — FR (avant)**

Ce phénomène artistique fondamental qu'on appelle la <span class="k">vie</span>

**Nietzsche — FR (actuel)**
Ce phénomène artistique fondamental qu'on appelle la vie

---

**Nietzsche — IT (avant)**

Quel fenomeno artistico fondamentale che si chiama <span class="k">vita</span>

**Nietzsche — IT (actuel)**
Quel fenomeno artistico fondamentale che si chiama vita

---

**Nietzsche — PT (avant)**

Esse fenômeno artístico fundamental que se chama <span class="k">vida</span>

**Nietzsche — PT (actuel)**
Esse fenômeno artístico fundamental que se chama vida

---

**Claire Marin — EN (avant)**
Auteur : Claire Marin — Hors de moi [note : freely translated from the French]

<span class="k">Dreams and water are two worlds where I recover a little balance, a little lightness, where I live again the pleasure of movement.</span> Held within the water's sheath, my body lets go of its pain. It fades, dissolves, vanishes. My movements turn fluid, easy; my body supple, almost deft. Gone, the tender catching-points: the hips, the elbows — nothing rasps anymore, nothing chafes, nothing tears. I remember dreaming I was a mermaid. My legs were imprisoned in a cocoon formed by the sheets, wound tight from turning and turning on myself in search of a position without pain. In the dream, the mummification had been transfigured into a power of movement.

**Claire Marin — EN (actuel)**
Auteur : Claire Marin · Hors de moi [note : freely translated from the French]
(même texte, sans balisage d'emphase, `—` → `·` dans l'attribution)

---

**Claire Marin — FR (avant)**
Auteur : Claire Marin — Hors de moi

<span class="k">Les rêves et l'eau sont deux mondes où je retrouve un peu d'équilibre, un peu de légèreté, où je vis à nouveau le plaisir du mouvement.</span> Tenu dans la gaine de l'eau, mon corps lâche sa douleur. Elle s'estompe, se dissout, disparaît. Mes mouvements deviennent fluides, faciles ; mon corps souple, presque agile. Partis, les points d'accroche tendres : les hanches, les coudes — plus rien ne racle, plus rien ne frotte, plus rien ne déchire. Je me souviens d'avoir rêvé que j'étais une sirène. Mes jambes étaient emprisonnées dans un cocon formé par les draps, enroulés serrés à force de me retourner en tous sens à la recherche d'une position sans douleur. Dans le rêve, la momification avait été transfigurée en puissance de mouvement.

**Claire Marin — FR (actuel)**
Auteur : Claire Marin · Hors de moi
(même texte, sans balisage, `—` → `·` dans l'attribution)

---

**Claire Marin — IT (avant)**
Auteur : Claire Marin — Hors de moi

<span class="k">I sogni e l'acqua sono due mondi in cui recupero un po' di equilibrio, un po' di leggerezza, in cui vivo di nuovo il piacere del movimento.</span> Tenuto nella guaina dell'acqua, il mio corpo lascia andare il suo dolore. Sfuma, si dissolve, scompare. I miei movimenti diventano fluidi, facili; il mio corpo duttile, quasi agile. Spariti i punti di aggancio teneri: i fianchi, i gomiti, niente più raschia, niente più graffia, niente più lacera. Ricordo di aver sognato di essere una sirena. Le mie gambe erano imprigionate in un bozzolo formato dalle lenzuola, avvolte strette a forza di girarmi e rigirarmi alla ricerca di una posizione senza dolore. Nel sogno, la mummificazione si era trasfigurata in una potenza di movimento.

**Claire Marin — IT (actuel)**
Auteur : Claire Marin · Hors de moi [note : tradotto dal francese]
(même texte, sans balisage)

---

**Claire Marin — PT (avant)**
Auteur : Claire Marin — Hors de moi

<span class="k">Os sonhos e a água são dois mundos em que recupero um pouco de equilíbrio, um pouco de leveza, em que vivo de novo o prazer do movimento.</span> Contido na bainha da água, meu corpo larga a sua dor. Ela se apaga, se dissolve, desaparece. Meus movimentos tornam-se fluidos, fáceis; meu corpo flexível, quase ágil. Foram-se os pontos de apoio sensíveis: os quadris, os cotovelos — nada mais raspa, nada mais esfrega, nada mais rasga. Lembro-me de ter sonhado que era uma sereia. Minhas pernas estavam aprisionadas num casulo formado pelos lençóis, enrolados com força de tanto me revirar em busca de uma posição sem dor. No sonho, a mumificação havia sido transfigurada numa potência de movimento.

**Claire Marin — PT (actuel)**
Auteur : Claire Marin · Hors de moi [note : traduzido do francês]
(même texte, sans balisage)

---

Texte de projet ECM, crédits ECM : identiques entre avant et actuel.
→ Voir contenus-projets.md

---

## VEDERE VENEZIA E NON MORIRE

### Différences par rapport à l'état actuel

**Aznavour — EN (avant)**
Auteur : Charles Aznavour — Que c'est triste Venise [note : free translation from the French]

How sad Venice is<br />On the evenings on the lagoon<br /><span class="k">When you reach for a hand<br />That no one holds out to you</span><br />And you make light of it all<br />Under the moonlight<br />To try to forget<br />What you never say to each other

**Aznavour — EN (actuel)**
Auteur : Charles Aznavour · Que c'est triste Venise [note : free translation from the French]
(même texte, 8 lignes identiques, sans balisage d'emphase, `—` → `·` dans l'attribution)

---

**Aznavour — FR (avant)**
Auteur : Charles Aznavour — Que c'est triste Venise

Que c'est triste Venise<br /><span class="k">Quand on cherche une main<br />Que l'on ne vous tend pas</span><br />Et que l'on ironise<br />Devant le clair de lune<br />Pour tenter d'oublier<br />Ce que l'on ne se dit pas

Note : la chaîne br inclut le retour à la ligne entre les lignes 1-2 ("Le soir sur la lagune") — texte identique à l'actuel.

**Aznavour — FR (actuel)**
(même texte, 8 lignes, sans balisage)

---

**Aznavour — IT (avant)**
Auteur : Charles Aznavour — Que c'est triste Venise [note : traduzione libera dal francese]

Com'è triste Venezia<br />La sera sulla laguna<br /><span class="k">Quando si cerca una mano<br />Che non ci viene tesa</span><br />E si ironizza<br />Davanti al chiaro di luna<br />Per tentare di dimenticare<br />Ciò che non ci si dice

**Aznavour — IT (actuel)**
(même texte, 8 lignes, sans balisage, `—` → `·` dans l'attribution)

---

**Aznavour — PT (avant)**
Auteur : Charles Aznavour — Que c'est triste Venise [note : tradução livre do francês]

Como é triste Veneza<br />À tarde na laguna<br /><span class="k">Quando se procura uma mão<br />Que não nos é estendida</span><br />E faz-se ironia<br />Perante o luar<br />Para tentar esquecer<br />O que não nos dizemos

**Aznavour — PT (actuel)**
(même texte, 8 lignes, sans balisage, `—` → `·` dans l'attribution)

---

**Dufourmantelle — EN (avant)**
Auteur : Anne Dufourmantelle [note : free translation from the French]

To part, in this way, is to begin translating. It is to find at least one word to translate what in oneself signifies and makes sense, in a new language, so that it may be heard by another. It is to leave the mother tongue to <span class="k">risk one's own language — the poetic language par excellence</span>.

**Dufourmantelle — EN (actuel)**
(même texte, sans balisage)

---

**Dufourmantelle — FR (avant)**
Auteur : Anne Dufourmantelle

Se séparer, ainsi, c'est commencer à traduire. C'est trouver ne serait-ce qu'un mot pour traduire ce qui en soi fait signe et sens dans une langue nouvelle afin qu'elle soit audible pour un autre. C'est quitter la langue maternelle pour <span class="k">risquer sa propre langue, la langue poétique par excellence</span>.

**Dufourmantelle — FR (actuel)**
(même texte, sans balisage)

---

**Dufourmantelle — IT (avant)**
Auteur : Anne Dufourmantelle [note : traduzione libera dal francese]

Separarsi, così, è cominciare a tradurre. È trovare almeno una parola per tradurre ciò che in sé fa segno e senso in una lingua nuova affinché sia audibile per un altro. È lasciare la lingua materna per <span class="k">rischiare la propria lingua, la lingua poetica per eccellenza</span>.

**Dufourmantelle — IT (actuel)**
(même texte, sans balisage)

---

**Dufourmantelle — PT (avant)**
Auteur : Anne Dufourmantelle [note : tradução livre do francês]

Separar-se, assim, é começar a traduzir. É encontrar ao menos uma palavra para traduzir o que em si faz signo e sentido numa língua nova para que seja audível para o outro. É abandonar a língua materna para <span class="k">arriscar a sua própria língua, a língua poética por excelência</span>.

**Dufourmantelle — PT (actuel)**
(même texte, sans balisage)

---

Texte de projet VV (absent en juin 2026 — ajouté en Lot N, août 2026).

---

## LA MER EN CORPS

Projet créé le 2026-08-04. Pas d'état de juin 2026.

### Mécanisme bq2Short (présent depuis la création, retiré du rendu en Lot M)

LMEC [lang] contenait deux champs pour la citation Bachelard :

**bq2Long** (version longue, rendue sur desktop) — identique à l'état actuel (voir contenus-projets.md)

**bq2Short** (version courte, rendue sur mobile via slot:short — **SUPPRIMÉ en Lot M**) :

FR : L'œil véritable de la terre, c'est l'eau. Dans nos yeux, c'est l'eau qui rêve.
IT : Il vero occhio della terra è l'acqua. Nei nostri occhi, è l'acqua che sogna.
PT : O verdadeiro olho da terra é a água. Em nossos olhos, é a água que sonha.

Note : le champ bq2Short existe encore dans le code source [lang] mais n'est plus rendu depuis Lot M. Il n'a jamais existé en EN (la page EN utilisait directement le texte long dans le template).

---

## SPILLING BEYOND THE LINES

### Différences par rapport à l'état actuel

**Gilberto Gil — EN et [lang]** : aucune différence. La citation est identique depuis le premier commit (c4e7a9d, 2026-06-24). Ni raccourcissement ni modification.

Citation complète (identique avant et maintenant) :

Por algum tempo
Que afinal passou depressa, como tudo tem de passar
Hoje eu me sinto
Como se ter ido fosse necessário para voltar
Tanto mais vivo
De vida mais vivida, dividida pra lá e pra cá

Auteur (avant) : Gilberto Gil — Back in Bahia
Auteur (actuel) : Gilberto Gil · Back in Bahia
(`—` → `·` en Lot K)

Texte de projet Spilling, crédits : identiques entre avant et actuel.

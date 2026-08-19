# Site vitrine « artisan » — mode d'emploi

Ce dossier contient un site vitrine complet, en une seule page, prêt à être
personnalisé pour n'importe quel artisan (paysagiste, maçon, menuisier,
électricien…). La version livrée ici est une **démonstration** pour une
entreprise fictive : *Paysages Le Guen*, paysagiste à Quiberon.

Aucun logiciel à installer, aucune ligne de commande : **tout se modifie dans
un éditeur de texte**, et le résultat s'ouvre d'un double-clic.

---

## 1. Ce que contient le dossier

```
demo-paysagiste/
├── index.html                      la page du site (structure + textes de secours)
├── politique-confidentialite.html  page obligatoire (RGPD)
├── favicon.svg                     petite icône affichée dans l'onglet du navigateur
├── README.md                       ce mode d'emploi
├── css/
│   └── style.css                   👈 LES COULEURS ET LA POLICE (tout en haut du fichier)
├── js/
│   ├── config.js                   👈 TOUS LES TEXTES DU SITE (nom, téléphone, avis…)
│   └── main.js                     moteur du site — à ne pas toucher
└── images/
    └── LISEZ-MOI.txt               noms de fichiers attendus pour les photos
```

**Deux fichiers seulement** vous concernent : `js/config.js` (les textes) et
le haut de `css/style.css` (les couleurs). Les autres peuvent rester tels quels.

### Pour voir le site

Double-cliquez sur `index.html` : il s'ouvre dans votre navigateur. Après
chaque modification, enregistrez le fichier et appuyez sur **F5** dans le
navigateur pour voir le résultat.

> Éditeur de texte conseillé : **Notepad++** (Windows) ou **VS Code**, tous
> deux gratuits. Évitez Word, qui abîme les fichiers.

---

## 2. Personnaliser le site en 10 minutes

### Étape 1 — Les informations de l'entreprise *(3 min)*

Ouvrez `js/config.js`. Tout en haut, vous trouvez ceci :

```js
entreprise: {
  nom: "Paysages Le Guen",
  metier: "Artisan paysagiste",
  telephone: "02 97 00 00 00",
  email: "contact@paysages-leguen.fr",
  adresse: "12 rue des Ajoncs",
  codePostal: "56170",
  ville: "Quiberon",
  departement: "Morbihan",
  rayonKm: 30,
  anneesExperience: 15,
  horaires: "Du lundi au vendredi, 8h – 18h · Samedi sur rendez-vous",
  latitude: 47.4831,
  longitude: -3.1201
},
```

Remplacez ce qui est entre guillemets par les informations du client.

**Trois règles à respecter :**

1. On ne touche pas aux mots à gauche des deux-points (`nom`, `telephone`…).
2. On garde les `"guillemets"` et la `,` virgule en fin de ligne.
3. Le numéro de téléphone s'écrit normalement (`02 97 00 00 00`) : le lien
   d'appel pour les mobiles est calculé automatiquement.

Pour les **coordonnées GPS** (utiles au référencement local) : cherchez
l'adresse sur Google Maps, faites un clic droit sur le point rouge, les deux
nombres apparaissent en haut du menu.

Continuez ensuite dans le même fichier, dans l'ordre : le bandeau du haut
(`hero`), les 4 arguments (`reassurance`), les 4 services (`services`), les
6 réalisations (`realisations`), les 3 avis (`avis`) et la liste des communes
(`communes`).

> Pour les avis clients : demandez au client ses vrais retours, même par SMS.
> Un prénom, une initiale et une commune suffisent — n'inventez rien, c'est
> interdit et ça se voit.

### Étape 2 — Les photos *(2 min)*

Le site utilise pour l'instant des photos de démonstration hébergées sur
Unsplash. Elles sont visibles dans `js/config.js` sous cette forme :

```js
image: "https://images.unsplash.com/photo-1668120089662-42642838cfef",
```

Deux possibilités :

- **Photos du client (recommandé)** : déposez les fichiers dans le dossier
  `images/` puis remplacez l'adresse par `"images/hero.jpg"`.
  Les noms de fichiers attendus sont listés dans `images/LISEZ-MOI.txt`.
- **Autres photos libres de droits** : allez sur [unsplash.com](https://unsplash.com),
  faites un clic droit sur la photo choisie → « Copier l'adresse de l'image »,
  et collez-la à la place de l'ancienne (gardez uniquement la partie qui
  finit par une suite de chiffres et de lettres, sans le `?` ni ce qui suit).

Chaque photo a un texte `imageAlt` juste en dessous : c'est la description
lue par Google et par les lecteurs d'écran. **Renseignez-la toujours.**

Avant de mettre les photos en ligne, compressez-les sur
[squoosh.app](https://squoosh.app) : 1600 px de large, moins de 300 Ko.
C'est ce qui fait la différence entre un site rapide et un site lent.

### Étape 3 — Les couleurs et la police *(2 min)*

Ouvrez `css/style.css`. Le tout premier bloc contient uniquement ceci :

```css
:root {
  --vert:            #2E5B3E;   /* couleur principale */
  --terre:           #A34A12;   /* couleur du bouton "Devis" */
  --sable:           #FBF7F0;   /* fond de la page */
  ...
  --rayon:           16px;      /* arrondi des cartes */
}
```

Changez les codes couleur (format `#RRGGBB`) et rechargez la page : tout le
site se met à jour d'un coup. Pour trouver des codes couleur :
[coolors.co](https://coolors.co).

- Un chiffre `--rayon` plus grand = un site plus « rond », plus moderne.
  À `0px`, le style devient carré et plus classique.
- Pour changer de police, modifiez `--police-titres` et `--police-texte`,
  **et** la ligne `fonts.googleapis.com` dans `index.html` (ainsi que dans
  `politique-confidentialite.html`) pour charger la nouvelle police.

⚠️ Vérifiez toujours que le texte reste lisible : du texte clair sur un fond
clair fait perdre des clients et pénalise le référencement.

### Étape 4 — Brancher le formulaire *(1 min)*

Par défaut, le formulaire est en **mode démonstration** : il affiche le
message de remerciement mais n'envoie rien. Parfait pour montrer le site à un
prospect. Pour qu'il envoie de vrais e-mails :

1. Créez un compte gratuit sur [formspree.io](https://formspree.io).
2. Créez un formulaire (« New form ») avec l'adresse e-mail du client.
3. Formspree affiche une adresse du type `https://formspree.io/f/abcdwxyz`.
4. Collez-la dans `js/config.js` :

```js
formulaire: {
  formspreeUrl: "https://formspree.io/f/abcdwxyz",
```

5. Envoyez un message de test depuis le site : le premier envoi demande une
   confirmation par e-mail à Formspree.

Le formulaire vérifie déjà le nom, le téléphone (10 chiffres), l'e-mail, le
type de projet et la case RGPD, avec un message d'erreur sous chaque champ.
Un champ piège invisible bloque une bonne partie des robots spammeurs.

### Étape 5 — Le référencement Google *(1 min)*

Deux endroits, à garder identiques :

- dans `js/config.js`, le bloc `seo:` (titre, description, adresse du site) ;
- dans `index.html`, les six lignes signalées par un commentaire en haut du
  fichier (`<title>`, `description`, `canonical`, `og:title`, `og:description`,
  `og:image`).

Pourquoi les deux ? Le bloc `seo:` met la page à jour pour les visiteurs, et
les lignes de `index.html` servent aux robots et aux aperçus WhatsApp /
Facebook, qui ne lisent pas toujours le JavaScript.

Recette d'un bon titre pour un artisan local :
**Métier + ville + spécialité + nom** — 60 caractères maximum.
Exemple : `Paysagiste à Quiberon (56) — Création de jardin | Paysages Le Guen`.

La fiche « établissement local » lue par Google (données structurées
JSON-LD : adresse, téléphone, horaires, communes desservies, prestations) est
générée automatiquement à partir de `js/config.js`. Vous n'avez rien à écrire.

### Étape 6 — Les mentions légales *(1 min)*

Toujours dans `js/config.js`, bloc `legal:` : forme juridique, SIRET, TVA,
assurance, hébergeur. Ces informations remplissent à la fois le pied de page
et la page `politique-confidentialite.html`.

⚖️ **Obligatoire en France** : SIRET, coordonnées, assurance professionnelle
(garantie décennale pour le bâtiment) et hébergeur. Un site vitrine sans
mentions légales expose le client à une amende.

### Étape 7 *(facultatif)* — Votre signature d'agence

En bas de `js/config.js` :

```js
agence: {
  nom: "Mon Agence Web",
  url: "https://mon-agence.fr"
}
```

Un discret « Site réalisé par… » apparaît alors en pied de page. Laissez
`nom: ""` pour ne rien afficher.

---

## 3. Mettre le site en ligne

### Netlify (gratuit, le plus simple — 2 minutes)

1. Allez sur [app.netlify.com/drop](https://app.netlify.com/drop).
2. Glissez-déposez le dossier complet dans la fenêtre.
3. Le site est en ligne à une adresse du type `nom-aleatoire.netlify.app`.
4. Pour brancher le vrai nom de domaine : *Site settings → Domain management*.

### Vercel

Même principe : [vercel.com/new](https://vercel.com/new), puis glisser le dossier.

### OVH ou tout hébergement classique

Envoyez le contenu du dossier (et non le dossier lui-même) dans le répertoire
`www` via FileZilla. Le site n'a besoin ni de PHP, ni de base de données.

> Le site fonctionne aussi **sans serveur** : un simple double-clic sur
> `index.html` suffit pour le montrer à un prospect, même sans connexion —
> seules les photos Unsplash et les polices Google auront besoin d'Internet.

---

## 4. Vérifier le rendu mobile sans avoir de téléphone sous la main

Le site est pensé pour être montré d'abord sur un écran de téléphone. Vous
pouvez contrôler ce rendu depuis ce seul ordinateur :

1. Ouvrez `index.html` dans Chrome (ou Edge).
2. Appuyez sur **F12**, puis sur **Ctrl + Maj + M** (icône « téléphone/tablette »).
3. En haut de la fenêtre, choisissez un appareil dans la liste déroulante :
   *iPhone 14 Pro*, *Galaxy S20*, ou saisissez `375 × 812` à la main.
4. Rechargez avec **Ctrl + F5** : le site bascule en mode tactile
   (menu burger, bouton d'appel flottant, cartes avant/après à l'appui).

Points à regarder dans ce mode :

- le bouton orange **Appeler** reste collé en bas de l'écran… sauf quand le
  formulaire est affiché, où il s'efface pour ne pas masquer les champs
  (le téléphone reste alors accessible en haut, dans le bandeau fixe) ;
- l'en-tête n'affiche que « Paysages Le Guen / ARTISAN PAYSAGISTE » pour
  rester sur une seule ligne ;
- les six réalisations basculent en « Avant » au premier appui, et reviennent
  en « Après » au second.

Ce rendu a été vérifié en 320, 375, 390, 768 et 1280 px de large : aucun
débordement horizontal, aucun texte tronqué.

> Pour le voir un jour sur un vrai téléphone sans matériel supplémentaire :
> déposez le dossier sur [app.netlify.com/drop](https://app.netlify.com/drop)
> (section 3 ci-dessus), l'adresse obtenue s'ouvre depuis n'importe quel mobile.

---

## 5. Vérifications avant de livrer

- [ ] Le nom de l'entreprise, le téléphone et l'e-mail sont corrects **partout**
      (haut de page, formulaire, pied de page, bouton flottant du mobile).
- [ ] Le bouton téléphone déclenche bien un appel depuis un vrai mobile.
- [ ] Les 6 réalisations affichent l'avant/après au survol et à l'appui.
- [ ] Le formulaire envoie un e-mail réellement reçu par le client.
- [ ] Les mentions légales et la politique de confidentialité sont remplies.
- [ ] Test de vitesse et de mobile : [pagespeed.web.dev](https://pagespeed.web.dev).
- [ ] Le site s'affiche correctement sur un vrai téléphone, pas seulement sur
      une fenêtre rétrécie.

---

## 6. En cas de problème

| Symptôme | Cause la plus fréquente | Solution |
|---|---|---|
| La page s'affiche mais les services, avis et communes ont disparu | une virgule ou un guillemet manquant dans `js/config.js` | Appuyez sur **F12** → onglet *Console* : le navigateur indique la ligne fautive. Corrigez, enregistrez, F5. |
| Une photo ne s'affiche pas | nom de fichier ou chemin erroné | Vérifiez majuscules, accents et extension (`.jpg` ≠ `.JPG`). Les accents et les espaces sont à éviter dans les noms de fichiers. |
| Les couleurs ne changent pas | ancienne version en mémoire | Rechargez avec **Ctrl + F5**. |
| Le formulaire affiche le message de succès mais aucun e-mail n'arrive | `formspreeUrl` vide (mode démonstration) ou e-mail Formspree non confirmé | Étape 4 ci-dessus. |
| Les polices ne sont pas les bonnes | pas de connexion Internet, ou lien Google Fonts modifié | Vérifiez la ligne `fonts.googleapis.com` dans `index.html`. |

---

## 7. Réutiliser ce site pour un autre métier

Le modèle est volontairement générique. Pour un maçon, un menuisier ou un
plombier :

1. Dupliquez le dossier et renommez-le.
2. Adaptez `js/config.js` : services, réalisations, avis, communes.
3. Changez `--vert` et `--terre` dans `css/style.css` pour coller à l'univers
   du métier (bleus pour le sanitaire, gris/orange pour le bâtiment — les
   couleurs de départ sont documentées dans le dossier `design-reference/`).
4. Remplacez les photos.

Comptez une heure pour un site complet, photos comprises.

/* ==========================================================================
   CONFIGURATION DU SITE — LE SEUL FICHIER À MODIFIER POUR CHANGER LES TEXTES
   ==========================================================================
   Règle d'or : tout ce qui est entre "guillemets" peut être remplacé.
   Ne supprimez ni les guillemets, ni les virgules, ni les accolades { }.
   Après chaque modification : enregistrez, puis rechargez la page (F5).

   ⚠️ Les mentions « [À COMPLÉTER] » sont des informations qui manquent
   encore. Elles s'affichent telles quelles sur le site : remplacez-les
   avant toute mise en ligne.
   ========================================================================== */

window.CONFIG = {

  /* ---------------------------------------------------------------------- */
  /* 1. L'ENTREPRISE                                                        */
  /* ---------------------------------------------------------------------- */
  entreprise: {
    nom: "MATT ELAGAGE",
    metier: "Élagage & entretien de jardins",
    telephone: "06 75 75 60 57",         // le lien d'appel (+33…) est calculé automatiquement
    email: "mattelagage56@gmail.com",
    adresse: "3 Pont Christ",
    codePostal: "56400",
    ville: "Brech",
    departement: "Morbihan",
    rayonKm: 20,                         // rayon d'intervention en kilomètres
    anneesExperience: "[À COMPLÉTER]",   // plus affiché sur la page (voir README)
    horaires: "Ouvert 24h/24, 7j/7",
    // Les mêmes horaires, au format attendu par Google. Pour une entreprise
    // joignable à toute heure, laissez "00:00" et "23:59" et les 7 jours.
    horairesGoogle: {
      jours: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      ouverture: "00:00",
      fermeture: "23:59"
    },
    // Coordonnées GPS exactes (relevées sur la fiche Google Maps de l'entreprise).
    latitude: 47.7368003,
    longitude: -3.0173471,
    // Lien du bouton « Ouvrir dans Google Maps ». Laissez "" pour que le site
    // utilise automatiquement l'adresse ci-dessus.
    lienGoogleMaps: "https://www.google.com/maps/place/3+Pont+Christ,+56400+Brech/@47.7384995,-3.0131307,15z/data=!4m6!3m5!1s0x48103fccd7306e55:0x16a318306a83afd7!8m2!3d47.7368003!4d-3.0173471!16s%2Fg%2F11c4gbjydy"
  },

  /* ---------------------------------------------------------------------- */
  /* 2. RÉFÉRENCEMENT (ce que Google et Facebook affichent)                 */
  /* ---------------------------------------------------------------------- */
  seo: {
    titre: "Élagage & entretien de jardins à Brech (56) | MATT ELAGAGE",
    description: "MATT ELAGAGE, Matheo Bischoff : élagage, abattage, tonte, taille de haies, création de jardin et enlèvement des déchets verts à Brech, Auray et dans les communes alentour (Morbihan). Devis gratuit.",
    url: "https://www.matt-elagage.fr/"   // adresse définitive du site, avec le / final
  },

  /* ---------------------------------------------------------------------- */
  /* 3. LA GRANDE PHOTO DU HAUT (le "hero")                                 */
  /* ---------------------------------------------------------------------- */
  hero: {
    surtitre: "Élagage et entretien de jardins à Brech",
    titre: "Vos arbres et votre jardin, entre de bonnes mains",
    sousTitre: "Élagage, abattage, tonte, taille de haies et création de jardin — à Brech, Auray et dans les communes alentour.",
    image: "https://images.unsplash.com/photo-1754321902809-5c21cbc67228",
    imageAlt: "Élagueur en cordes taillant les branches d'un grand arbre",
    boutonAppel: "Appeler maintenant",
    boutonDevis: "Demander un devis"
  },

  /* ---------------------------------------------------------------------- */
  /* 4. BANDEAU DE RÉASSURANCE (4 arguments)                                */
  /* ---------------------------------------------------------------------- */
  /* icone : devis · experience · local · garantie  (ne pas inventer d'autres noms) */
  reassurance: [
    { icone: "devis",      titre: "Devis gratuit",          texte: "Déplacement et chiffrage sur place, sans engagement." },
    { icone: "local",      titre: "Artisan local",          texte: "Basé à Brech, j'interviens à Auray et dans les communes alentour." },
    { icone: "experience", titre: "Chantier laissé propre", texte: "Nettoyage et enlèvement des déchets verts compris." },
    { icone: "garantie",   titre: "Entreprise déclarée",    texte: "Artisan immatriculé, devis et factures en règle." }
  ],

  /* ---------------------------------------------------------------------- */
  /* 5. LES SERVICES (6 prestations)                                        */
  /* ---------------------------------------------------------------------- */
  services: [
    {
      titre: "Abattage & élagage",
      texte: "Élagage de formation ou d'entretien, réduction de couronne, abattage d'arbres devenus dangereux. Coupe maîtrisée et branches évacuées.",
      image: "https://images.unsplash.com/photo-1669065054992-3151b15aab08",
      imageAlt: "Élagueur équipé d'un casque et d'une tronçonneuse dans un arbre"
    },
    {
      titre: "Taille de haies",
      texte: "Taille au cordeau, remise en forme des haies laissées trop longtemps, rabattage de printemps ou d'automne. Ramassage compris.",
      image: "https://images.unsplash.com/photo-1543309959-4d45288d1629",
      imageAlt: "Taille d'une haie au taille-haie thermique"
    },
    {
      titre: "Tonte de pelouse",
      texte: "Tonte au passage ou à l'année, finitions au rotofil le long des bordures et des massifs. Pratique aussi pour les résidences secondaires.",
      image: "https://images.unsplash.com/photo-1734303023491-db8037a21f09",
      imageAlt: "Tonte d'une grande pelouse à la tondeuse autoportée"
    },
    {
      titre: "Petits travaux de jardinage",
      texte: "Débroussaillage, désherbage, bêchage, plantation, remise en état d'un terrain : les travaux que vous n'avez plus le temps de faire.",
      image: "https://images.unsplash.com/photo-1689728318937-17d24bc0a65c",
      imageAlt: "Finitions au rotofil autour d'un massif fleuri"
    },
    {
      titre: "Nettoyage & déchets verts",
      texte: "Ramassage des feuilles, nettoyage complet du terrain, chargement et évacuation des déchets verts en déchèterie.",
      image: "https://images.unsplash.com/photo-1734079692160-fcbe4be6ab96",
      imageAlt: "Évacuation des déchets verts à la brouette"
    },
    {
      titre: "Création de jardin",
      texte: "Massifs, plantations et engazonnement : repartir sur des bases saines, avec des végétaux qui tiennent le climat du Morbihan.",
      image: "https://images.unsplash.com/photo-1597201278257-3687be27d954",
      imageAlt: "Massifs fleuris et arbustes taillés dans un jardin créé sur mesure"
    }
  ],

  /* ---------------------------------------------------------------------- */
  /* 6. RÉALISATIONS — 6 chantiers en avant / après                         */
  /* ---------------------------------------------------------------------- */
  /* ⚠️ PHOTOS D'ILLUSTRATION issues d'une banque d'images : à remplacer par */
  /*    les vrais chantiers avant la mise en ligne (images/LISEZ-MOI.txt).   */
  realisations: [
    {
      titre: "Remise en état d'un terrain",
      commune: "Brech",
      avant: "https://images.unsplash.com/photo-1780866701868-ddf82ea1f67e",
      apres: "https://images.unsplash.com/photo-1706920925080-be07c32398e1",
      alt: "Terrain laissé à l'abandon nettoyé et haies taillées au cordeau"
    },
    {
      titre: "Débroussaillage et remise en herbe",
      commune: "Pluneret",
      avant: "https://images.unsplash.com/photo-1759737210645-f5c866db0324",
      apres: "https://images.unsplash.com/photo-1784593149239-7c0073ea5951",
      alt: "Parcelle envahie de ronces transformée en pelouse entretenue"
    },
    {
      titre: "Création d'un massif",
      commune: "Sainte-Anne-d'Auray",
      avant: "https://images.unsplash.com/photo-1681853108586-f29b4ef5c0fb",
      apres: "https://images.unsplash.com/photo-1597201278257-3687be27d954",
      alt: "Pelouse nue transformée en massifs fleuris"
    },
    {
      titre: "Nettoyage après chantier",
      commune: "Landévant",
      avant: "https://images.unsplash.com/photo-1769142539098-8c6cf8a2c48c",
      apres: "https://images.unsplash.com/photo-1729058015948-592a8e4a1772",
      alt: "Terrain de chantier remis en pelouse close et arborée"
    },
    {
      titre: "Désherbage d'une cour pavée",
      commune: "Auray",
      avant: "https://images.unsplash.com/photo-1763987045463-b6bdae204420",
      apres: "https://images.unsplash.com/photo-1613544723412-b331bda01e87",
      alt: "Pavés couverts de mousse nettoyés et cour remise en état"
    },
    {
      titre: "Taille d'une haie ancienne",
      commune: "Crac'h",
      avant: "https://images.unsplash.com/photo-1779884802325-a3b1bbb3037b",
      apres: "https://images.unsplash.com/photo-1668120089662-42642838cfef",
      alt: "Abords repris, pelouse tondue et bordures nettes après taille"
    }
  ],

  /* ---------------------------------------------------------------------- */
  /* 7. AVIS CLIENTS (3 témoignages)                                        */
  /* ---------------------------------------------------------------------- */
  /* Avis réels recopiés de la fiche Google de l'entreprise (août 2026).      */
  /* ⚠️ Ne jamais inventer d'avis : c'est une pratique commerciale trompeuse. */
  avis: [
    {
      texte: "J'ai appelé ce paysagiste qui m'a été conseillé par un membre de ma famille, qui avait déjà fait appel à lui et avait été très satisfait. Pour ma part, le travail a été fait avec excellence, professionnalisme et rapidité, tout en respectant le travail demandé. Je recommande vivement cet artisan.",
      nom: "Magdalena C.",
      source: "Avis Google",
      note: 5
    },
    {
      texte: "J'ai fait appel à cet artisan qui est intervenu rapidement et proprement. Je recommande ses services, j'y referai appel moi-même.",
      nom: "Maïlys D.",
      source: "Avis Google",
      note: 5
    },
    {
      texte: "Travail sérieux, soigné et rapide. Je recommande fortement cette entreprise. Merci à vous !",
      nom: "Kendra R.",
      source: "Avis Google",
      note: 5
    }
  ],

  /* Note globale affichée sous le titre de la section avis.                  */
  /* Mettez note: "" pour masquer complètement cette ligne.                   */
  avisGoogle: {
    note: "5,0",
    nombre: 24,
    lien: "https://www.google.com/search?q=Matt+%C3%A9lagage+Quiberon"
  },

  /* ---------------------------------------------------------------------- */
  /* 8. ZONE D'INTERVENTION (communes couvertes)                            */
  /* ---------------------------------------------------------------------- */
  communes: [
    "Brech", "Auray", "Pluneret", "Sainte-Anne-d'Auray", "Plumergat",
    "Pluvigner", "Brandivy", "Camors", "Landévant", "Landaul",
    "Ploemel", "Crac'h", "Le Bono", "Plougoumelen", "Locoal-Mendon",
    "Belz", "Carnac", "La Trinité-sur-Mer", "Erdeven", "Baden"
  ],

  /* ---------------------------------------------------------------------- */
  /* 9. FORMULAIRE DE DEVIS                                                 */
  /* ---------------------------------------------------------------------- */
  formulaire: {
    // Collez ici l'adresse fournie par Formspree (voir README, étape 4).
    // Tant que cette ligne reste vide "", le formulaire fonctionne en mode
    // démonstration : il affiche le message de succès sans rien envoyer.
    formspreeUrl: "",
    typesProjet: [
      "Abattage ou élagage",
      "Taille de haies",
      "Tonte de pelouse",
      "Petits travaux de jardinage",
      "Nettoyage / déchets verts",
      "Création de jardin",
      "Autre projet"
    ],
    messageSucces: "Merci ! Votre demande est bien reçue, je vous recontacte rapidement.",
    messageErreur: "L'envoi a échoué. Réessayez dans un instant, ou appelez-moi directement au"
  },

  /* ---------------------------------------------------------------------- */
  /* 10. MENTIONS LÉGALES & PIED DE PAGE                                    */
  /* ---------------------------------------------------------------------- */
  legal: {
    formeJuridique: "MATT ELAGAGE — entreprise individuelle (micro-entreprise)",
    dirigeant: "Matheo Bischoff",
    siret: "988 096 467 00010",
    siren: "988 096 467",
    tva: "FR65 988096467",
    assurance: "[À COMPLÉTER — assureur et n° de contrat responsabilité civile professionnelle]",
    hebergeur: "[À COMPLÉTER — nom et adresse de l'hébergeur, ex. Netlify, Inc., 512 2nd Street, Suite 200, San Francisco, CA 94107, USA]"
  },

  // Votre signature d'agence en bas de page (mettez "" pour la masquer)
  agence: {
    nom: "",
    url: ""
  }

};

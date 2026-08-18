/* ==========================================================================
   CONFIGURATION DU SITE — LE SEUL FICHIER À MODIFIER POUR CHANGER LES TEXTES
   ==========================================================================
   Règle d'or : tout ce qui est entre "guillemets" peut être remplacé.
   Ne supprimez ni les guillemets, ni les virgules, ni les accolades { }.
   Après chaque modification : enregistrez, puis rechargez la page (F5).
   ========================================================================== */

window.CONFIG = {

  /* ---------------------------------------------------------------------- */
  /* 1. L'ENTREPRISE                                                        */
  /* ---------------------------------------------------------------------- */
  entreprise: {
    nom: "Paysages Le Guen",
    metier: "Artisan paysagiste",
    telephone: "02 97 00 00 00",        // affiché tel quel, le lien d'appel est calculé automatiquement
    email: "contact@paysages-leguen.fr",
    adresse: "12 rue des Ajoncs",
    codePostal: "56170",
    ville: "Quiberon",
    departement: "Morbihan",
    rayonKm: 30,                         // rayon d'intervention en kilomètres
    anneesExperience: 15,
    horaires: "Du lundi au vendredi, 8h – 18h · Samedi sur rendez-vous",
    // Coordonnées GPS (utilisées par Google pour le référencement local).
    // Pour les trouver : clic droit sur votre adresse dans Google Maps.
    latitude: 47.4831,
    longitude: -3.1201
  },

  /* ---------------------------------------------------------------------- */
  /* 2. RÉFÉRENCEMENT (ce que Google et Facebook affichent)                 */
  /* ---------------------------------------------------------------------- */
  seo: {
    titre: "Paysagiste à Quiberon (56) — Création de jardin, terrasse bois | Paysages Le Guen",
    description: "Paysages Le Guen, artisan paysagiste à Quiberon depuis plus de 15 ans : création de jardins, terrasses en bois, clôtures et entretien. Devis gratuit sous 48h dans un rayon de 30 km.",
    url: "https://www.paysages-leguen.fr/"   // adresse définitive du site, avec le / final
  },

  /* ---------------------------------------------------------------------- */
  /* 3. LA GRANDE PHOTO DU HAUT (le "hero")                                 */
  /* ---------------------------------------------------------------------- */
  hero: {
    surtitre: "Artisan paysagiste en presqu'île de Quiberon",
    titre: "Des jardins qui vous ressemblent",
    sousTitre: "Création de jardins, terrasses en bois, clôtures et entretien — à Quiberon et jusqu'à 30 km alentour.",
    image: "https://images.unsplash.com/photo-1668120089662-42642838cfef",
    imageAlt: "Grand jardin paysager avec pelouse tondue, massifs et arbres",
    boutonAppel: "Appeler maintenant",
    boutonDevis: "Demander un devis"
  },

  /* ---------------------------------------------------------------------- */
  /* 4. BANDEAU DE RÉASSURANCE (4 arguments)                                */
  /* ---------------------------------------------------------------------- */
  /* icone : devis · experience · local · garantie  (ne pas inventer d'autres noms) */
  reassurance: [
    { icone: "devis",      titre: "Devis gratuit sous 48h",  texte: "Visite sur place et chiffrage détaillé, sans engagement." },
    { icone: "experience", titre: "+15 ans d'expérience",    texte: "Plus de 400 jardins créés et entretenus dans le Morbihan." },
    { icone: "local",      titre: "Artisan local",           texte: "Basé à Quiberon, je me déplace dans un rayon de 30 km." },
    { icone: "garantie",   titre: "Garantie décennale",      texte: "Entreprise assurée, travaux garantis, factures en règle." }
  ],

  /* ---------------------------------------------------------------------- */
  /* 5. LES SERVICES (4 cartes)                                             */
  /* ---------------------------------------------------------------------- */
  services: [
    {
      titre: "Création de jardin",
      texte: "Plan de votre jardin, choix des végétaux adaptés au bord de mer, plantation, engazonnement et paillage. Un projet pensé pour vieillir joliment.",
      image: "https://images.unsplash.com/photo-1597201278257-3687be27d954",
      imageAlt: "Massifs fleuris et arbustes taillés dans un jardin créé sur mesure"
    },
    {
      titre: "Terrasse en bois",
      texte: "Terrasses en pin classe 4, bois exotique ou composite. Structure ventilée, fixations inox, finitions soignées jusqu'au dernier centimètre.",
      image: "https://images.unsplash.com/photo-1613544723371-23b514a78c85",
      imageAlt: "Terrasse en bois avec mobilier de jardin devant une maison"
    },
    {
      titre: "Clôture & portail",
      texte: "Clôtures bois, panneaux rigides, brise-vue et portails. Pose d'aplomb, poteaux scellés, résistance aux vents de la presqu'île.",
      image: "https://images.unsplash.com/photo-1601042860368-debed90085e0",
      imageAlt: "Clôture en bois neuve installée en limite de propriété"
    },
    {
      titre: "Entretien de jardin",
      texte: "Tonte, taille de haies, désherbage, évacuation des déchets verts. Au passage ou en contrat annuel, y compris pour les résidences secondaires.",
      image: "https://images.unsplash.com/photo-1543309959-4d45288d1629",
      imageAlt: "Taille d'une haie au taille-haie thermique"
    }
  ],

  /* ---------------------------------------------------------------------- */
  /* 6. RÉALISATIONS — 6 chantiers en avant / après                         */
  /* ---------------------------------------------------------------------- */
  realisations: [
    {
      titre: "Jardin complet",
      commune: "Saint-Pierre-Quiberon",
      avant: "https://images.unsplash.com/photo-1681853108586-f29b4ef5c0fb",
      apres: "https://images.unsplash.com/photo-1597201278257-3687be27d954",
      alt: "Création complète d'un jardin : pelouse nue transformée en massifs fleuris"
    },
    {
      titre: "Terrasse en pin classe 4",
      commune: "Quiberon",
      avant: "https://images.unsplash.com/photo-1779884802325-a3b1bbb3037b",
      apres: "https://images.unsplash.com/photo-1656646549607-8fda5837a4ca",
      alt: "Ancienne dalle envahie remplacée par une terrasse en bois avec salon de jardin"
    },
    {
      titre: "Clôture bois & brise-vue",
      commune: "Plouharnel",
      avant: "https://images.unsplash.com/photo-1759737210645-f5c866db0324",
      apres: "https://images.unsplash.com/photo-1710706665973-cea15dded285",
      alt: "Limite de terrain broussailleuse remplacée par une clôture en bois"
    },
    {
      titre: "Allée et cour pavée",
      commune: "Carnac",
      avant: "https://images.unsplash.com/photo-1763987045463-b6bdae204420",
      apres: "https://images.unsplash.com/photo-1613544723412-b331bda01e87",
      alt: "Pavés couverts de mousse remis à neuf en terrasse pavée avec mobilier"
    },
    {
      titre: "Remise en état après chantier",
      commune: "Erdeven",
      avant: "https://images.unsplash.com/photo-1769142539098-8c6cf8a2c48c",
      apres: "https://images.unsplash.com/photo-1784593149239-7c0073ea5951",
      alt: "Terrain de chantier transformé en pelouse close et arborée"
    },
    {
      titre: "Reprise d'un jardin abandonné",
      commune: "Plouhinec",
      avant: "https://images.unsplash.com/photo-1780866701868-ddf82ea1f67e",
      apres: "https://images.unsplash.com/photo-1706920925080-be07c32398e1",
      alt: "Jardin laissé à l'abandon nettoyé et haies taillées au cordeau"
    }
  ],

  /* ---------------------------------------------------------------------- */
  /* 7. AVIS CLIENTS (3 témoignages)                                        */
  /* ---------------------------------------------------------------------- */
  avis: [
    {
      texte: "Devis reçu en deux jours, chantier tenu au jour près. La terrasse est impeccable et le terrain a été rendu plus propre qu'avant leur arrivée.",
      nom: "Marie-Hélène L.",
      ville: "Quiberon",
      note: 5
    },
    {
      texte: "Nous avons une résidence secondaire et le jardin est entretenu toute l'année sans que nous ayons à y penser. Des gens de parole, ça compte.",
      nom: "Yann G.",
      ville: "Carnac",
      note: 5
    },
    {
      texte: "Conseils très justes sur les végétaux qui tiennent face au vent et au sel. Deux ans après, tout a repris, rien n'a grillé.",
      nom: "Sophie D.",
      ville: "Plouharnel",
      note: 5
    }
  ],

  /* ---------------------------------------------------------------------- */
  /* 8. ZONE D'INTERVENTION (communes couvertes)                            */
  /* ---------------------------------------------------------------------- */
  communes: [
    "Quiberon", "Saint-Pierre-Quiberon", "Plouharnel", "Carnac",
    "La Trinité-sur-Mer", "Erdeven", "Étel", "Belz", "Plouhinec",
    "Locoal-Mendon", "Ploemel", "Crac'h", "Auray", "Pluneret",
    "Sainte-Anne-d'Auray", "Le Bono", "Locmariaquer", "Landévant",
    "Brech", "Landaul"
  ],

  /* ---------------------------------------------------------------------- */
  /* 9. FORMULAIRE DE DEVIS                                                 */
  /* ---------------------------------------------------------------------- */
  formulaire: {
    // Collez ici l'adresse fournie par Formspree (voir README, étape 5).
    // Tant que cette ligne reste vide "", le formulaire fonctionne en mode
    // démonstration : il affiche le message de succès sans rien envoyer.
    formspreeUrl: "",
    typesProjet: [
      "Création de jardin",
      "Terrasse en bois",
      "Clôture ou portail",
      "Entretien / tonte / taille",
      "Autre projet"
    ],
    messageSucces: "Merci ! Votre demande est bien reçue. Je vous rappelle sous 48h ouvrées.",
    messageErreur: "L'envoi a échoué. Appelez-moi directement au"
  },

  /* ---------------------------------------------------------------------- */
  /* 10. MENTIONS LÉGALES & PIED DE PAGE                                    */
  /* ---------------------------------------------------------------------- */
  legal: {
    formeJuridique: "EURL Paysages Le Guen",
    siret: "000 000 000 00000",
    tva: "FR00000000000",
    assurance: "Groupama Loire Bretagne — responsabilité civile et garantie décennale",
    hebergeur: "Netlify, Inc. — 512 2nd Street, Suite 200, San Francisco, CA 94107, USA"
  },

  // Votre signature d'agence en bas de page (mettez "" pour la masquer)
  agence: {
    nom: "",
    url: ""
  }

};

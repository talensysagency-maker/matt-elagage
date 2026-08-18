/* ==========================================================================
   MOTEUR DU SITE — injection de la configuration, animations, formulaire
   --------------------------------------------------------------------------
   Vous n'avez normalement PAS besoin de modifier ce fichier.
   Tous les textes se règlent dans js/config.js.
   ========================================================================== */

(function () {
  "use strict";

  var C = window.CONFIG || {};
  if (!window.CONFIG) {
    console.error("config.js n'a pas été chargé (ou contient une erreur de syntaxe : virgule ou guillemet manquant).");
  }

  /* ---------------------------------------------------------------- outils */

  // Lit une valeur dans la config : val("entreprise.ville")
  function val(chemin, defaut) {
    var v = chemin.split(".").reduce(function (o, k) {
      return (o && o[k] !== undefined && o[k] !== null) ? o[k] : undefined;
    }, C);
    return v === undefined ? (defaut !== undefined ? defaut : "") : v;
  }

  // Échappe le texte destiné à un attribut HTML
  function esc(s) {
    return String(s === undefined || s === null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  // "02 97 00 00 00" -> "tel:+33297000000"
  function lienTel(numero) {
    var n = String(numero || "").replace(/[^\d+]/g, "");
    if (n.indexOf("+") !== 0 && n.indexOf("0") === 0) n = "+33" + n.slice(1);
    return "tel:" + n;
  }

  // Construit l'URL d'une image.
  // Photo Unsplash -> ajoute le recadrage et la compression automatiques.
  // Fichier local ("images/hero.jpg") -> renvoyé tel quel.
  function urlImage(url, largeur, hauteur) {
    url = String(url || "");
    if (url.indexOf("images.unsplash.com") === -1) return url;
    return url.split("?")[0] + "?auto=format&fit=crop&q=72&w=" + largeur + "&h=" + hauteur;
  }

  function etoiles(note) {
    var html = "";
    for (var i = 0; i < (Number(note) || 5); i++) {
      html += '<svg class="icone icone--pleine" aria-hidden="true"><use href="#i-etoile"></use></svg>';
    }
    return html;
  }

  function el(id) { return document.getElementById(id); }


  /* ------------------------------------------- 1. textes simples & liens */

  function injecterTextes() {
    document.querySelectorAll("[data-txt]").forEach(function (n) {
      var v = val(n.getAttribute("data-txt"), null);
      if (v !== null && v !== "") n.textContent = v;
    });

    var tel = lienTel(val("entreprise.telephone"));
    document.querySelectorAll("[data-tel]").forEach(function (a) {
      a.setAttribute("href", tel);
    });

    var mail = val("entreprise.email");
    if (mail) {
      document.querySelectorAll("[data-mail]").forEach(function (a) {
        a.setAttribute("href", "mailto:" + mail);
      });
    }

    var annee = el("annee");
    if (annee) annee.textContent = new Date().getFullYear();
  }


  /* -------------------------------------------------------- 2. hero image */

  function injecterHero() {
    var img = el("hero-image");
    var src = val("hero.image");
    if (!img || !src) return;
    var base = src.split("?")[0];
    if (img.src.split("?")[0] !== base) {
      img.src = urlImage(src, 1600, 1000);
      img.srcset = [800, 1200, 1600, 2000].map(function (w) {
        return urlImage(src, w, Math.round(w * 0.625)) + " " + w + "w";
      }).join(", ");
    }
    if (val("hero.imageAlt")) img.alt = val("hero.imageAlt");
  }


  /* ------------------------------------------------- 3. blocs répétitifs */

  function injecterReassurance() {
    var c = el("liste-reassurance");
    if (!c) return;
    var items = val("reassurance", []);
    c.innerHTML = items.map(function (it) {
      return '<li class="reassurance__item anim">' +
               '<svg class="icone" aria-hidden="true"><use href="#i-' + esc(it.icone || "check") + '"></use></svg>' +
               '<span><strong>' + esc(it.titre) + '</strong><span>' + esc(it.texte) + '</span></span>' +
             '</li>';
    }).join("");
  }

  function injecterServices() {
    var c = el("liste-services");
    if (!c) return;
    c.innerHTML = val("services", []).map(function (s) {
      return '<article class="carte-service anim">' +
               '<img class="carte-service__image" src="' + esc(urlImage(s.image, 800, 500)) + '"' +
                    ' alt="' + esc(s.imageAlt || s.titre) + '" width="800" height="500" loading="lazy" decoding="async">' +
               '<div class="carte-service__corps">' +
                 '<h3>' + esc(s.titre) + '</h3>' +
                 '<p>' + esc(s.texte) + '</p>' +
                 '<a class="carte-service__lien" href="#contact">Demander un devis' +
                   '<svg class="icone" aria-hidden="true"><use href="#i-fleche"></use></svg>' +
                 '</a>' +
               '</div>' +
             '</article>';
    }).join("");
  }

  function injecterRealisations() {
    var c = el("liste-realisations");
    if (!c) return;
    c.innerHTML = val("realisations", []).map(function (r) {
      var legende = esc(r.alt || (r.titre + " à " + r.commune));
      return '<button class="realisation anim" type="button" aria-pressed="false">' +
               '<span class="realisation__cadre">' +
                 '<img src="' + esc(urlImage(r.avant, 800, 600)) + '" alt="Avant travaux : ' + legende + '"' +
                      ' width="800" height="600" loading="lazy" decoding="async">' +
                 '<img class="realisation__apres" src="' + esc(urlImage(r.apres, 800, 600)) + '" alt="' + legende + '"' +
                      ' width="800" height="600" loading="lazy" decoding="async">' +
                 '<span class="realisation__badge realisation__badge--apres">Après</span>' +
                 '<span class="realisation__badge realisation__badge--avant">Avant</span>' +
               '</span>' +
               '<span class="realisation__legende">' +
                 '<strong>' + esc(r.titre) + '</strong>' +
                 '<span>' + esc(r.commune) + '</span>' +
               '</span>' +
               '<span class="sr-only">Afficher la photo avant travaux</span>' +
             '</button>';
    }).join("");

    // Appui / clic : bascule avant <-> après (le survol est géré en CSS)
    c.addEventListener("click", function (e) {
      var carte = e.target.closest(".realisation");
      if (!carte) return;
      var actif = carte.classList.toggle("montre-avant");
      carte.setAttribute("aria-pressed", actif ? "true" : "false");
    });

    // Sur ordinateur, on repasse à « après » quand la souris quitte la carte
    c.querySelectorAll(".realisation").forEach(function (carte) {
      carte.addEventListener("mouseleave", function () {
        carte.classList.remove("montre-avant");
        carte.setAttribute("aria-pressed", "false");
      });
    });
  }

  function injecterAvis() {
    var c = el("liste-avis");
    if (!c) return;
    c.innerHTML = val("avis", []).map(function (a) {
      return '<figure class="avis anim">' +
               '<div class="avis__etoiles" role="img" aria-label="' + esc((a.note || 5) + " étoiles sur 5") + '">' + etoiles(a.note) + '</div>' +
               '<blockquote>' + esc(a.texte) + '</blockquote>' +
               '<figcaption class="avis__auteur"><strong>' + esc(a.nom) + '</strong><span>' + esc(a.ville) + '</span></figcaption>' +
             '</figure>';
    }).join("");
  }

  function injecterCommunes() {
    var c = el("liste-communes");
    if (!c) return;
    c.innerHTML = val("communes", []).map(function (v) {
      return '<li><svg class="icone" aria-hidden="true"><use href="#i-check"></use></svg>' + esc(v) + '</li>';
    }).join("");
  }

  function injecterFormulaire() {
    var select = el("projet");
    if (select) {
      val("formulaire.typesProjet", []).forEach(function (t) {
        var o = document.createElement("option");
        o.value = t;
        o.textContent = t;
        select.appendChild(o);
      });
    }
    var url = val("formulaire.formspreeUrl");
    var form = el("formulaire-devis");
    if (form && url) form.setAttribute("action", url);  // secours si le JS d'envoi échoue
  }

  function injecterPied() {
    var m = el("mentions-legales");
    if (m) {
      var parts = [
        val("legal.formeJuridique"),
        val("legal.siret") ? "SIRET " + val("legal.siret") : "",
        val("legal.tva") ? "TVA " + val("legal.tva") : "",
        val("legal.assurance") ? "Assurance : " + val("legal.assurance") : "",
        val("legal.hebergeur") ? "Hébergeur : " + val("legal.hebergeur") : ""
      ].filter(Boolean);
      m.textContent = parts.join(" · ");
    }
    var sign = el("signature-agence");
    if (sign && val("agence.nom")) {
      sign.innerHTML = 'Site réalisé par <a href="' + esc(val("agence.url") || "#") + '" rel="noopener">' + esc(val("agence.nom")) + "</a>";
    }
  }


  /* -------------------------------------- 4. SEO + données structurées */

  function injecterSeo() {
    if (val("seo.titre")) document.title = val("seo.titre");

    var maj = [
      ['meta[name="description"]', "content", val("seo.description")],
      ['meta[property="og:title"]', "content", val("seo.titre")],
      ['meta[property="og:description"]', "content", val("seo.description")],
      ['meta[property="og:url"]', "content", val("seo.url")],
      ['meta[property="og:site_name"]', "content", val("entreprise.nom")],
      ['meta[property="og:image"]', "content", urlImage(val("hero.image"), 1200, 630)],
      ['meta[property="og:image:alt"]', "content", val("hero.imageAlt")],
      ['link[rel="canonical"]', "href", val("seo.url")],
      ['meta[name="geo.placename"]', "content", val("entreprise.ville")]
    ];
    maj.forEach(function (r) {
      var n = document.querySelector(r[0]);
      if (n && r[2]) n.setAttribute(r[1], r[2]);
    });
  }

  // Fiche Google "établissement local" (LocalBusiness / travaux paysagers)
  function injecterJsonLd() {
    var tel = lienTel(val("entreprise.telephone")).replace("tel:", "");
    var donnees = {
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      "name": val("entreprise.nom"),
      "description": val("seo.description"),
      "url": val("seo.url"),
      "image": urlImage(val("hero.image"), 1200, 750),
      "telephone": tel,
      "email": val("entreprise.email"),
      "priceRange": "€€",
      "currenciesAccepted": "EUR",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": val("entreprise.adresse"),
        "postalCode": val("entreprise.codePostal"),
        "addressLocality": val("entreprise.ville"),
        "addressRegion": val("entreprise.departement"),
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": val("entreprise.latitude"),
        "longitude": val("entreprise.longitude")
      },
      "areaServed": val("communes", []).map(function (v) {
        return { "@type": "City", "name": v };
      }),
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": val("entreprise.latitude"),
          "longitude": val("entreprise.longitude")
        },
        "geoRadius": (Number(val("entreprise.rayonKm", 30)) * 1000).toString()
      },
      "openingHoursSpecification": [{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Travaux paysagers",
        "itemListElement": val("services", []).map(function (s) {
          return {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": s.titre, "description": s.texte }
          };
        })
      }
    };

    var script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(donnees);
    document.head.appendChild(script);
  }


  /* ------------------------------------------------- 5. menu (mobile) */

  function menu() {
    var burger = el("burger");
    var nav = el("menu");
    if (!burger || !nav) return;

    burger.addEventListener("click", function () {
      var ouvert = nav.classList.toggle("ouvert");
      burger.setAttribute("aria-expanded", ouvert ? "true" : "false");
    });

    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("ouvert");
        burger.setAttribute("aria-expanded", "false");
      }
    });
  }


  /* -------------------------------------- 6. apparition au défilement */

  function animations() {
    var cibles = document.querySelectorAll(".anim");

    if (!("IntersectionObserver" in window) ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      cibles.forEach(function (n) { n.classList.add("visible"); });
      return;
    }

    var obs = new IntersectionObserver(function (entrees) {
      entrees.forEach(function (e) {
        if (!e.isIntersecting) return;
        var n = e.target;
        var freres = Array.prototype.slice.call(n.parentNode.children).indexOf(n);
        n.style.transitionDelay = Math.min(freres, 4) * 90 + "ms";
        n.classList.add("visible");
        obs.unobserve(n);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

    cibles.forEach(function (n) { obs.observe(n); });
  }


  /* ------------------- 6 bis. bouton d'appel flottant (mobile) --------- */

  // Le bouton flottant s'efface quand le formulaire est à l'écran, pour ne pas
  // recouvrir les champs. Le téléphone reste accessible dans le header.
  function boutonFlottant() {
    var bouton = document.querySelector(".appel-flottant");
    var contact = el("contact");
    if (!bouton || !contact || !("IntersectionObserver" in window)) return;

    new IntersectionObserver(function (entrees) {
      bouton.classList.toggle("masque", entrees[0].isIntersecting);
    }, { threshold: 0.12 }).observe(contact);
  }


  /* ------------------------------------------------- 7. formulaire */

  function formulaire() {
    var form = el("formulaire-devis");
    if (!form) return;

    var succes = el("message-succes");
    var erreur = el("message-erreur");
    var bouton = el("bouton-envoyer");
    var texteBouton = bouton ? bouton.innerHTML : "";

    var regles = {
      nom: function (v) { return v.trim().length >= 2; },
      telephone: function (v) { return /^(?:\+33|0)[1-9]\d{8}$/.test(v.replace(/[\s.\-()]/g, "")); },
      email: function (v) { return /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v.trim()); },
      projet: function (v) { return v !== ""; },
      consentement: null   // case à cocher : traitée à part
    };

    function afficherErreur(champ, actif) {
      var msg = el("erreur-" + champ.name);
      if (msg) msg.classList.toggle("visible", actif);
      champ.setAttribute("aria-invalid", actif ? "true" : "false");
      if (msg) {
        if (actif) champ.setAttribute("aria-describedby", msg.id);
        else champ.removeAttribute("aria-describedby");
      }
    }

    function verifier(champ) {
      var ok = champ.type === "checkbox" ? champ.checked
                                         : (regles[champ.name] ? regles[champ.name](champ.value) : true);
      afficherErreur(champ, !ok);
      return ok;
    }

    var champs = ["nom", "telephone", "email", "projet", "consentement"]
      .map(el)
      .filter(Boolean);

    // On efface le message d'erreur dès que le visiteur corrige son champ
    champs.forEach(function (champ) {
      champ.addEventListener("blur", function () { verifier(champ); });
      champ.addEventListener("input", function () {
        if (champ.getAttribute("aria-invalid") === "true") verifier(champ);
      });
      champ.addEventListener("change", function () {
        if (champ.getAttribute("aria-invalid") === "true") verifier(champ);
      });
    });

    function message(bloc, texte) {
      [succes, erreur].forEach(function (b) { if (b) b.classList.remove("visible"); });
      if (!bloc) return;
      if (texte) bloc.querySelector("span").textContent = texte;
      bloc.classList.add("visible");
      bloc.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var premierInvalide = null;
      champs.forEach(function (champ) {
        if (!verifier(champ) && !premierInvalide) premierInvalide = champ;
      });
      if (premierInvalide) {
        premierInvalide.focus();
        return;
      }

      var url = val("formulaire.formspreeUrl");

      // Mode démonstration : aucune adresse Formspree renseignée
      if (!url) {
        message(succes, val("formulaire.messageSucces"));
        form.reset();
        console.info("Mode démonstration : renseignez formulaire.formspreeUrl dans js/config.js pour recevoir réellement les demandes.");
        return;
      }

      bouton.disabled = true;
      bouton.innerHTML = "Envoi en cours…";

      fetch(url, {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form).entries()))
      })
        .then(function (r) {
          if (!r.ok) throw new Error("Réponse " + r.status);
          message(succes, val("formulaire.messageSucces"));
          form.reset();
        })
        .catch(function () {
          message(erreur, val("formulaire.messageErreur") + " " + val("entreprise.telephone"));
        })
        .then(function () {
          bouton.disabled = false;
          bouton.innerHTML = texteBouton;
        });
    });
  }


  /* --------------------------------------------------------- démarrage */

  injecterTextes();
  injecterHero();
  injecterReassurance();
  injecterServices();
  injecterRealisations();
  injecterAvis();
  injecterCommunes();
  injecterFormulaire();
  injecterPied();
  injecterSeo();
  injecterJsonLd();
  menu();
  boutonFlottant();
  formulaire();
  animations();

})();

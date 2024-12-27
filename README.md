# Football Trophy

## Description
    Titre : Créer une Réplique d'une Page Web

    Objectif : Recréez une page web similaire à Football Trophy en utilisant uniquement HTML, CSS, et JavaScript (ou Typescript), et livrez le projet en 24 heures.

    Spécifications :

    Structure : La page doit respecter l'organisation et le design global (disposition, images, titres, contenu).
    Styles : Reproduisez le style, en respectant les couleurs, typographies, et animations basiques.
    Fonctionnalité :
    Aucune utilisation de frameworks (pas de React, Angular, Vue).
    Délivrable :
    Fournissez un fichier ZIP contenant le projet complet (code, images, etc.).
    Ajoutez un README avec des explications sur la structure et les instructions pour ouvrir/tester la page.
    Hints:
    Vous trouverez en fichier joint le style de votre page (vous pouvez le modifier au besoin).
    Vous pouvez utiliser un timer pour créer une game loop
    Manipuler la game loop pour les fonctionnalités Play/Pause
    Critères d'évaluation :

    Respect du design.
    Qualité et clarté du code.
    Créativité dans l'implémentation des interactions.
    Respect du délai.

---

## Problématiques Rencontrées

Le développement de ce projet a présenté des défis techniques, notamment :

1. **Chargement des Ressources CSS** :
   - Le fichier `output.css` ne se chargeait pas correctement, entraînant un affichage incomplet ou inexistant des styles.
   - Le problème était lié à des chemins d'accès incorrects, nécessitant une correction manuelle.

2. **Affichage des Espacements** :
   - Il fallait s'assurer que les espaces entre les rectangles soient visibles avec une couleur spécifique, sans altérer les dimensions ou le positionnement des rectangles.

3. **Débogage du Rendu Visuel** :
   - Bien que le code semblait correct, le rendu visuel initial ne reflétait pas les attentes. Une inspection approfondie a permis d’identifier des erreurs dans la configuration des conteneurs et des styles.

---

## Solutions Apportées

- **Correction des Chemins de Fichiers** :
  Les chemins vers les fichiers CSS ont été ajustés pour garantir le chargement correct des styles. Par exemmple 

- **Ajout d'Espaces Colorés** :
  Des séparateurs explicites ont été ajoutés entre les rectangles, avec des couleurs spécifiques et des dimensions précises pour assurer une mise en page propre.

- **Utilisation de Classes Tailwind CSS** :
  La puissance de Tailwind CSS a été exploitée pour contrôler efficacement les marges, les espacements et les couleurs, tout en assurant un alignement parfait.

---

## Résultat Final

Le projet aboutit à une interface composée de trois rectangles alignés horizontalement, séparés par des espaces visibles ayant une couleur configurable. Le panneau latéral offre des boutons fonctionnels pour enrichir l'interactivité.

---

## Comment Installer et Lancer

1. Clonez le projet :
   ```bash
   git clone <url_du_dépôt>
   ```

2. Assurez-vous que Tailwind CSS est correctement installé (si applicable) :
   ```bash
   npm install
   ```

3. Ouvrez le fichier HTML dans un navigateur :
   ```bash
   open index.html
   ```

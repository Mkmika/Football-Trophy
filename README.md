# Football Trophy

## Description
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

# 🐾 Adaopte — Recherche d’animaux à adopter (Maquette → Intégration pixel-perfect)

Application HTML/CSS/JavaScript (vanilla) qui reproduit fidèlement une maquette et permet de rechercher des animaux par type et ville, avec :

affichage dynamique en cartes (DOM),

pagination,

SearchParams (pré-remplissage du formulaire via l’URL),

layout CSS Grid complexe et responsive.

---

## ✨ Fonctionnalités

🎯 Intégration pixel-perfect de la maquette (typographies, couleurs, espacements).

🧭 Navigation multi-pages (Accueil, J’adopte, Devenir bénévole).

🧩 Affichage dynamique des animaux depuis un JSON local (/data/pets.json).

🔎 Formulaire de recherche (type d’animal + ville).

🔁 Pagination côté client (10 résultats/page par défaut).

🔗 SearchParams : la page J’adopte lit ?type=…&city=… et pré-remplit le formulaire.

🧱 CSS Grid (galerie d’images) + Flex (cards, header, footer).

♿ Accessibilité : alt des images, labels des inputs, boutons désactivés si nécessaire.

📱 Responsive.


---

### 🧰 Stack & outils

HTML5 — structure sémantique

CSS3 — Grid/Flex, overlay, responsive

JavaScript (ES6) — fetch JSON, DOM, pagination, URLSearchParams

Données — data/pets.json

Dev local — Live Server (VS Code) ou simple serveur statique
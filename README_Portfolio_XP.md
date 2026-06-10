# Portfolio XP

Portfolio personnel développé en React et Tailwind CSS, inspiré de Windows XP.

## Fonctionnalités

- Bureau Windows XP interactif
- Icônes cliquables
- Menu Démarrer
- Barre des tâches
- Fenêtres modales personnalisées
- Consultation du CV
- Présentation personnelle
- Galerie de projets
- Contact
- Présentation du stage de première année
- Heure dynamique

## Technologies utilisées

### Frontend
- React
- JavaScript
- JSX
- HTML5
- CSS3
- Tailwind CSS

### Outils
- Vite
- Git
- GitHub
- VS Code

## Structure du projet

```txt
src/
├── assets/
├── components/
│   ├── Desktop.jsx
│   ├── DesktopIcon.jsx
│   ├── Modal.jsx
│   ├── Taskbar.jsx
│   └── BootScreen.jsx
├── windows/
│   ├── AboutWindow.jsx
│   ├── ProjectsWindow.jsx
│   ├── ContactWindow.jsx
│   ├── ResumeWindow.jsx
│   └── Stage1erAnne.jsx
├── data/
│   └── projects.js
├── App.jsx
└── main.jsx
```

## Composants

### App.jsx
- Gestion du chargement
- Affichage du BootScreen
- Affichage du Desktop

### Desktop.jsx
- Gestion des fenêtres ouvertes
- Affichage des icônes
- Communication avec la Taskbar

### Taskbar.jsx
- Menu démarrer
- Heure dynamique
- Lancement des applications

### Modal.jsx
- Fenêtre réutilisable
- Barre de titre
- Boutons système
- Contenu dynamique

## Fenêtres

### AboutWindow
- Présentation
- Compétences
- Statistiques

### ProjectsWindow
- Liste des projets

### ContactWindow
- Informations de contact
- Copie de l'adresse email

### ResumeWindow
- Consultation du CV
- Téléchargement du CV

### Stage1erAnne
- Présentation du stage

## Sources

### Fond d'écran
- Windows XP Bliss

### Inspiration
- Microsoft Windows XP
- Explorateur Windows XP
- Menu Démarrer Windows XP

## Auteur

Imed-Ayoub Bouacheria-Kebir

Étudiant en BUT Informatique.

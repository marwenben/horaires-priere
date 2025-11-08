# 🕌 Site Web des Horaires de Prière

Site web affichant les horaires de prière pour Montréal (Canada) et Tunis (Tunisie) avec mise à jour automatique.

## 📋 Fonctionnalités

- ✅ Affichage des 5 prières quotidiennes (Fajr, Dhuhr, Asr, Maghrib, Isha)
- ✅ Mise à jour automatique toutes les minutes
- ✅ Mise en évidence de la prière actuelle
- ✅ Affichage du temps restant avant la prochaine prière
- ✅ Design moderne et responsive
- ✅ Gratuit et hébergé sur GitHub Pages

## 🚀 Comment déployer sur GitHub Pages (GRATUIT)

### Étape 1: Créer un compte GitHub
1. Allez sur [github.com](https://github.com)
2. Cliquez sur "Sign up" et créez un compte gratuit

### Étape 2: Créer un nouveau dépôt (repository)
1. Connectez-vous à votre compte GitHub
2. Cliquez sur le bouton "+" en haut à droite
3. Sélectionnez "New repository"
4. Nommez votre dépôt (par exemple: `horaires-priere`)
5. Cochez "Public"
6. Cliquez sur "Create repository"

### Étape 3: Ajouter les fichiers
1. Sur la page de votre nouveau dépôt, cliquez sur "uploading an existing file"
2. Glissez-déposez ou sélectionnez ces 3 fichiers:
   - `index.html`
   - `style.css`
   - `script.js`
3. Cliquez sur "Commit changes"

### Étape 4: Activer GitHub Pages
1. Dans votre dépôt, cliquez sur "Settings" (en haut)
2. Dans le menu de gauche, cliquez sur "Pages"
3. Sous "Source", sélectionnez "main" branch
4. Cliquez sur "Save"
5. Attendez 1-2 minutes

### Étape 5: Accéder à votre site
Votre site sera accessible à l'adresse:
```
https://votre-nom-utilisateur.github.io/horaires-priere/
```

(Remplacez `votre-nom-utilisateur` par votre nom d'utilisateur GitHub et `horaires-priere` par le nom de votre dépôt)

## 🎨 Personnalisation

### Changer les villes
Ouvrez `script.js` et modifiez la section `cities`:

```javascript
const cities = {
    montreal: {
        name: 'Montréal',
        country: 'CA',
        method: 2
    },
    tunis: {
        name: 'Tunis',
        country: 'TN',
        method: 5
    }
};
```

### Méthodes de calcul disponibles:
- `0` - Shia Ithna-Ashari
- `1` - University of Islamic Sciences, Karachi
- `2` - Islamic Society of North America (ISNA)
- `3` - Muslim World League (MWL)
- `4` - Umm al-Qura, Makkah
- `5` - Egyptian General Authority of Survey
- `7` - Institute of Geophysics, University of Tehran

### Changer les couleurs
Modifiez le fichier `style.css`, notamment:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## 🔄 Mise à jour automatique

Le site se met à jour automatiquement:
- ✅ Toutes les minutes: mise à jour des horaires
- ✅ Toutes les 10 secondes: mise à jour de la prière actuelle

## 📱 Responsive Design

Le site s'adapte automatiquement à tous les appareils:
- 💻 Ordinateurs
- 📱 Téléphones
- 📱 Tablettes

## 🌐 API utilisée

Ce site utilise l'API gratuite [Aladhan](https://aladhan.com/prayer-times-api) pour obtenir les horaires de prière.

## 📄 Licence

Libre d'utilisation et de modification.

## 💡 Support

Pour toute question, vous pouvez:
1. Créer une "Issue" sur GitHub
2. Consulter la documentation de l'API Aladhan
3. Modifier le code selon vos besoins

---

**Note:** Assurez-vous d'avoir une connexion internet pour que le site fonctionne, car il récupère les horaires en temps réel depuis l'API.

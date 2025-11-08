// Configuration des villes
const cities = {
    montreal: {
        name: 'Montréal',
        country: 'CA',
        method: 2 // ISNA (Islamic Society of North America)
    },
    tunis: {
        name: 'Tunis',
        country: 'TN',
        method: 5 // Muslim World League
    }
};

// Traductions
const translations = {
    fr: {
        nextPrayer: 'Prochaine prière',
        at: 'à',
        in: 'dans',
        hours: 'h',
        minutes: 'min'
    },
    ar: {
        nextPrayer: 'الصلاة القادمة',
        at: 'في',
        in: 'بعد',
        hours: 'س',
        minutes: 'د'
    }
};

// Langue actuelle
let currentLang = 'fr';

// Fonction pour changer la langue
function changeLanguage(lang) {
    currentLang = lang;
    
    // Mettre à jour les classes CSS
    if (lang === 'ar') {
        document.body.classList.add('arabic');
        document.documentElement.setAttribute('lang', 'ar');
    } else {
        document.body.classList.remove('arabic');
        document.documentElement.setAttribute('lang', 'fr');
    }
    
    // Mettre à jour les boutons de langue
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`lang-${lang}`).classList.add('active');
    
    // Mettre à jour tous les textes traduits
    document.querySelectorAll('[data-fr][data-ar]').forEach(element => {
        element.textContent = element.getAttribute(`data-${lang}`);
    });
    
    // Recharger les informations de prière pour mettre à jour le texte
    loadAllPrayerTimes();
}

// Écouteurs d'événements pour les boutons de langue
document.getElementById('lang-fr').addEventListener('click', () => changeLanguage('fr'));
document.getElementById('lang-ar').addEventListener('click', () => changeLanguage('ar'));

// Noms des prières en français
const prayerNames = {
    Fajr: 'Fajr (Aube)',
    Dhuhr: 'Dhuhr (Midi)',
    Asr: 'Asr (Après-midi)',
    Maghrib: 'Maghrib (Coucher du soleil)',
    Isha: 'Isha (Nuit)'
};

// Fonction pour formater la date
function formatDate() {
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const date = new Date();
    const locale = currentLang === 'ar' ? 'ar-TN' : 'fr-FR';
    return date.toLocaleDateString(locale, options);
}

// Fonction pour obtenir les heures de prière
async function getPrayerTimes(cityKey) {
    const city = cities[cityKey];
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    try {
        const response = await fetch(
            `https://api.aladhan.com/v1/timingsByCity/${day}-${month}-${year}?city=${city.name}&country=${city.country}&method=${city.method}`
        );
        
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données');
        }

        const data = await response.json();
        return data.data.timings;
    } catch (error) {
        console.error(`Erreur pour ${city.name}:`, error);
        return null;
    }
}

// Fonction pour afficher les heures de prière
function displayPrayerTimes(cityKey, timings) {
    if (!timings) return;

    const prayers = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
    
    prayers.forEach(prayer => {
        const elementId = `${cityKey}-${prayer.toLowerCase()}`;
        const element = document.getElementById(elementId);
        if (element && timings[prayer]) {
            element.textContent = timings[prayer];
        }
    });

    // Mettre en évidence la prière actuelle et afficher la prochaine
    highlightCurrentPrayer(cityKey, timings);
}

// Fonction pour mettre en évidence la prière actuelle
function highlightCurrentPrayer(cityKey, timings) {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();
    
    const prayers = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
    let currentPrayer = null;
    let nextPrayer = null;

    // Convertir les heures de prière en minutes
    const prayerTimes = prayers.map(prayer => {
        const [hours, minutes] = timings[prayer].split(':').map(Number);
        return {
            name: prayer,
            time: hours * 60 + minutes,
            display: timings[prayer]
        };
    });

    // Trouver la prière actuelle et la prochaine
    for (let i = 0; i < prayerTimes.length; i++) {
        const prayerItem = document.querySelector(`#${cityKey}-${prayerTimes[i].name.toLowerCase()}`).parentElement;
        prayerItem.classList.remove('current');

        if (currentTime >= prayerTimes[i].time) {
            currentPrayer = prayerTimes[i];
            if (i < prayerTimes.length - 1) {
                nextPrayer = prayerTimes[i + 1];
            } else {
                nextPrayer = prayerTimes[0]; // Fajr du lendemain
            }
        }
    }

    // Si nous sommes avant Fajr
    if (!currentPrayer) {
        nextPrayer = prayerTimes[0];
    }

    // Mettre en évidence la prière actuelle
    if (currentPrayer) {
        const currentElement = document.querySelector(`#${cityKey}-${currentPrayer.name.toLowerCase()}`).parentElement;
        currentElement.classList.add('current');
    }

    // Afficher la prochaine prière
    if (nextPrayer) {
        const nextElement = document.getElementById(`${cityKey}-next`);
        const timeUntil = calculateTimeUntil(nextPrayer.time, currentTime);
        const t = translations[currentLang];
        
        // Obtenir le nom de la prière dans la langue actuelle
        let prayerName = nextPrayer.name;
        if (currentLang === 'ar') {
            const arabicNames = {
                'Fajr': 'الفجر',
                'Dhuhr': 'الظهر',
                'Asr': 'العصر',
                'Maghrib': 'المغرب',
                'Isha': 'العشاء'
            };
            prayerName = arabicNames[nextPrayer.name];
        }
        
        nextElement.textContent = `${t.nextPrayer}: ${prayerName} ${t.at} ${nextPrayer.display} (${t.in} ${timeUntil})`;
    }
}

// Fonction pour calculer le temps restant
function calculateTimeUntil(prayerTime, currentTime) {
    let diff = prayerTime - currentTime;
    
    if (diff < 0) {
        diff += 24 * 60; // Ajouter 24 heures si c'est pour le lendemain
    }

    const hours = Math.floor(diff / 60);
    const minutes = diff % 60;
    
    const t = translations[currentLang];

    if (hours > 0) {
        return `${hours}${t.hours} ${minutes}${t.minutes}`;
    } else {
        return `${minutes}${t.minutes}`;
    }
}

// Fonction pour mettre à jour l'heure de dernière mise à jour
function updateLastUpdateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('fr-FR');
    document.getElementById('last-update-time').textContent = timeString;
}

// Fonction principale pour charger toutes les données
async function loadAllPrayerTimes() {
    document.getElementById('current-date').textContent = formatDate();
    
    // Charger les heures pour Montréal
    const montrealTimings = await getPrayerTimes('montreal');
    displayPrayerTimes('montreal', montrealTimings);
    
    // Charger les heures pour Tunis
    const tunisTimings = await getPrayerTimes('tunis');
    displayPrayerTimes('tunis', tunisTimings);
    
    updateLastUpdateTime();
}

// Charger les données au démarrage
loadAllPrayerTimes();

// Mettre à jour toutes les minutes
setInterval(() => {
    loadAllPrayerTimes();
}, 60000); // 60000 ms = 1 minute

// Mettre à jour l'affichage de la prière actuelle toutes les 10 secondes
setInterval(async () => {
    const montrealTimings = await getPrayerTimes('montreal');
    if (montrealTimings) {
        highlightCurrentPrayer('montreal', montrealTimings);
    }
    
    const tunisTimings = await getPrayerTimes('tunis');
    if (tunisTimings) {
        highlightCurrentPrayer('tunis', tunisTimings);
    }
}, 10000); // 10000 ms = 10 secondes

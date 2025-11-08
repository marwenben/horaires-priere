// Base de données des villes avec leurs informations
const citiesDatabase = {
    'montreal-ca': {
        name: 'Montréal',
        country: 'CA',
        method: 2,
        timezone: 'America/Toronto',
        displayName: { fr: '🇨🇦 Montréal, Canada', ar: '🇨🇦 مونتريال، كندا' }
    },
    'tunis-tn': {
        name: 'Tunis',
        country: 'TN',
        method: 5,
        timezone: 'Africa/Tunis',
        displayName: { fr: '🇹🇳 Tunis, Tunisie', ar: '🇹🇳 تونس، تونس' }
    },
    'algiers-dz': {
        name: 'Algiers',
        country: 'DZ',
        method: 5,
        timezone: 'Africa/Algiers',
        displayName: { fr: '🇩🇿 Alger, Algérie', ar: '🇩🇿 الجزائر، الجزائر' }
    },
    'mecca-sa': {
        name: 'Mecca',
        country: 'SA',
        method: 4,
        timezone: 'Asia/Riyadh',
        displayName: { fr: '🇸🇦 La Mecque, Arabie Saoudite', ar: '🇸🇦 مكة المكرمة، السعودية' }
    },
    'medina-sa': {
        name: 'Medina',
        country: 'SA',
        method: 4,
        timezone: 'Asia/Riyadh',
        displayName: { fr: '🇸🇦 Médine, Arabie Saoudite', ar: '🇸🇦 المدينة المنورة، السعودية' }
    },
    'riyadh-sa': {
        name: 'Riyadh',
        country: 'SA',
        method: 4,
        timezone: 'Asia/Riyadh',
        displayName: { fr: '🇸🇦 Riyad, Arabie Saoudite', ar: '🇸🇦 الرياض، السعودية' }
    },
    'jeddah-sa': {
        name: 'Jeddah',
        country: 'SA',
        method: 4,
        timezone: 'Asia/Riyadh',
        displayName: { fr: '🇸🇦 Jeddah, Arabie Saoudite', ar: '🇸🇦 جدة، السعودية' }
    },
    'cairo-eg': {
        name: 'Cairo',
        country: 'EG',
        method: 5,
        timezone: 'Africa/Cairo',
        displayName: { fr: '🇪🇬 Le Caire, Égypte', ar: '🇪🇬 القاهرة، مصر' }
    },
    'dubai-ae': {
        name: 'Dubai',
        country: 'AE',
        method: 4,
        timezone: 'Asia/Dubai',
        displayName: { fr: '🇦🇪 Dubaï, Émirats Arabes Unis', ar: '🇦🇪 دبي، الإمارات' }
    },
    'abudhabi-ae': {
        name: 'Abu Dhabi',
        country: 'AE',
        method: 4,
        timezone: 'Asia/Dubai',
        displayName: { fr: '🇦🇪 Abu Dhabi, Émirats Arabes Unis', ar: '🇦🇪 أبو ظبي، الإمارات' }
    },
    'doha-qa': {
        name: 'Doha',
        country: 'QA',
        method: 4,
        timezone: 'Asia/Qatar',
        displayName: { fr: '🇶🇦 Doha, Qatar', ar: '🇶🇦 الدوحة، قطر' }
    },
    'kuwait-kw': {
        name: 'Kuwait City',
        country: 'KW',
        method: 4,
        timezone: 'Asia/Kuwait',
        displayName: { fr: '🇰🇼 Koweït, Koweït', ar: '🇰🇼 الكويت، الكويت' }
    },
    'casablanca-ma': {
        name: 'Casablanca',
        country: 'MA',
        method: 5,
        timezone: 'Africa/Casablanca',
        displayName: { fr: '🇲🇦 Casablanca, Maroc', ar: '🇲🇦 الدار البيضاء، المغرب' }
    },
    'rabat-ma': {
        name: 'Rabat',
        country: 'MA',
        method: 5,
        timezone: 'Africa/Casablanca',
        displayName: { fr: '🇲🇦 Rabat, Maroc', ar: '🇲🇦 الرباط، المغرب' }
    },
    'istanbul-tr': {
        name: 'Istanbul',
        country: 'TR',
        method: 1,
        timezone: 'Europe/Istanbul',
        displayName: { fr: '🇹🇷 Istanbul, Turquie', ar: '🇹🇷 إسطنبول، تركيا' }
    },
    'ankara-tr': {
        name: 'Ankara',
        country: 'TR',
        method: 1,
        timezone: 'Europe/Istanbul',
        displayName: { fr: '🇹🇷 Ankara, Turquie', ar: '🇹🇷 أنقرة، تركيا' }
    },
    'paris-fr': {
        name: 'Paris',
        country: 'FR',
        method: 2,
        timezone: 'Europe/Paris',
        displayName: { fr: '🇫🇷 Paris, France', ar: '🇫🇷 باريس، فرنسا' }
    },
    'london-gb': {
        name: 'London',
        country: 'GB',
        method: 2,
        timezone: 'Europe/London',
        displayName: { fr: '🇬🇧 Londres, Royaume-Uni', ar: '🇬🇧 لندن، بريطانيا' }
    },
    'newyork-us': {
        name: 'New York',
        country: 'US',
        method: 2,
        timezone: 'America/New_York',
        displayName: { fr: '🇺🇸 New York, États-Unis', ar: '🇺🇸 نيويورك، أمريكا' }
    },
    'toronto-ca': {
        name: 'Toronto',
        country: 'CA',
        method: 2,
        timezone: 'America/Toronto',
        displayName: { fr: '🇨🇦 Toronto, Canada', ar: '🇨🇦 تورونتو، كندا' }
    },
    'ottawa-ca': {
        name: 'Ottawa',
        country: 'CA',
        method: 2,
        timezone: 'America/Toronto',
        displayName: { fr: '🇨🇦 Ottawa, Canada', ar: '🇨🇦 أوتاوا، كندا' }
    },
    'jakarta-id': {
        name: 'Jakarta',
        country: 'ID',
        method: 1,
        timezone: 'Asia/Jakarta',
        displayName: { fr: '🇮🇩 Jakarta, Indonésie', ar: '🇮🇩 جاكرتا، إندونيسيا' }
    },
    'kualalumpur-my': {
        name: 'Kuala Lumpur',
        country: 'MY',
        method: 1,
        timezone: 'Asia/Kuala_Lumpur',
        displayName: { fr: '🇲🇾 Kuala Lumpur, Malaisie', ar: '🇲🇾 كوالالمبور، ماليزيا' }
    },
    'karachi-pk': {
        name: 'Karachi',
        country: 'PK',
        method: 1,
        timezone: 'Asia/Karachi',
        displayName: { fr: '🇵🇰 Karachi, Pakistan', ar: '🇵🇰 كراتشي، باكستان' }
    },
    'lahore-pk': {
        name: 'Lahore',
        country: 'PK',
        method: 1,
        timezone: 'Asia/Karachi',
        displayName: { fr: '🇵🇰 Lahore, Pakistan', ar: '🇵🇰 لاهور، باكستان' }
    },
    'dhaka-bd': {
        name: 'Dhaka',
        country: 'BD',
        method: 1,
        timezone: 'Asia/Dhaka',
        displayName: { fr: '🇧🇩 Dhaka, Bangladesh', ar: '🇧🇩 دكا، بنغلاديش' }
    }
};

// Villes actuellement sélectionnées
let selectedCities = {
    city1: 'montreal-ca',
    city2: 'tunis-tn'
};

// Traductions
const translations = {
    fr: {
        nextPrayer: 'Prochaine prière',
        at: 'à',
        in: 'dans',
        hours: 'h',
        minutes: 'min',
        ramadanBefore: 'Ramadan commence dans',
        ramadanDuring: 'Nous sommes en Ramadan!',
        ramadanAfter: 'Ramadan est terminé',
        days: 'jours',
        day: 'jour',
        localTime: 'Heure locale:'
    },
    ar: {
        nextPrayer: 'الصلاة القادمة',
        at: 'في',
        in: 'بعد',
        hours: 'س',
        minutes: 'د',
        ramadanBefore: 'رمضان يبدأ بعد',
        ramadanDuring: 'رمضان كريم! 🌙',
        ramadanAfter: 'انتهى رمضان',
        days: 'أيام',
        day: 'يوم',
        localTime: 'الوقت المحلي:'
    }
};

// Noms des mois islamiques
const islamicMonths = {
    fr: ['Muharram', 'Safar', 'Rabi al-Awwal', 'Rabi al-Thani', 'Jumada al-Awwal', 
         'Jumada al-Thani', 'Rajab', 'Sha\'ban', 'Ramadan', 'Shawwal', 
         'Dhul-Qi\'dah', 'Dhul-Hijjah'],
    ar: ['مُحَرَّم', 'صَفَر', 'رَبِيع ٱلْأَوَّل', 'رَبِيع ٱلثَّانِي', 'جُمَادَىٰ ٱلْأُولَىٰ',
         'جُمَادَىٰ ٱلثَّانِيَة', 'رَجَب', 'شَعْبَان', 'رَمَضَان', 'شَوَّال',
         'ذُو ٱلْقَعْدَة', 'ذُو ٱلْحِجَّة']
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
    
    // Recharger les informations
    displayIslamicDate();
    displayRamadanCountdown();
    loadAllPrayerTimes();
}

// Écouteurs d'événements pour les boutons de langue
document.getElementById('lang-fr').addEventListener('click', () => changeLanguage('fr'));
document.getElementById('lang-ar').addEventListener('click', () => changeLanguage('ar'));

// Écouteurs d'événements pour les sélecteurs de villes
document.getElementById('city1-select').addEventListener('change', (e) => {
    selectedCities.city1 = e.target.value;
    updateCityDisplay('city1');
});

document.getElementById('city2-select').addEventListener('change', (e) => {
    selectedCities.city2 = e.target.value;
    updateCityDisplay('city2');
});

// Fonction pour mettre à jour l'affichage d'une ville
async function updateCityDisplay(cityKey) {
    const cityId = selectedCities[cityKey];
    const cityData = citiesDatabase[cityId];
    
    // Mettre à jour le nom de la ville
    document.getElementById(`${cityKey}-name`).textContent = cityData.displayName[currentLang];
    
    // Charger les horaires de prière
    const timings = await getPrayerTimesForCity(cityId);
    if (timings) {
        displayPrayerTimes(cityKey, timings);
    }
}

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

// Fonction pour obtenir la date islamique
async function getIslamicDate() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    try {
        const response = await fetch(
            `https://api.aladhan.com/v1/gToH/${day}-${month}-${year}`
        );
        
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération de la date islamique');
        }

        const data = await response.json();
        return data.data.hijri;
    } catch (error) {
        console.error('Erreur date islamique:', error);
        return null;
    }
}

// Fonction pour afficher la date islamique
async function displayIslamicDate() {
    const hijriDate = await getIslamicDate();
    if (!hijriDate) return;

    const monthName = islamicMonths[currentLang][hijriDate.month.number - 1];
    const day = currentLang === 'ar' ? convertToArabicNumerals(hijriDate.day) : hijriDate.day;
    const year = currentLang === 'ar' ? convertToArabicNumerals(hijriDate.year) : hijriDate.year;
    
    const islamicDateElement = document.getElementById('islamic-date');
    if (currentLang === 'ar') {
        islamicDateElement.textContent = `${day} ${monthName} ${year} هـ`;
    } else {
        islamicDateElement.textContent = `${day} ${monthName} ${year} H`;
    }
}

// Fonction pour convertir les chiffres en numéraux arabes
function convertToArabicNumerals(num) {
    const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return num.toString().split('').map(digit => arabicNumerals[parseInt(digit)]).join('');
}

// Fonction pour calculer le compte à rebours du Ramadan
async function displayRamadanCountdown() {
    const hijriDate = await getIslamicDate();
    if (!hijriDate) return;

    const currentMonth = hijriDate.month.number;
    const currentDay = parseInt(hijriDate.day);
    const currentYear = parseInt(hijriDate.year);

    const ramadanCountdownElement = document.getElementById('ramadan-countdown');
    const ramadanTextElement = document.getElementById('ramadan-text');
    const t = translations[currentLang];

    // Ramadan est le 9ème mois
    if (currentMonth === 9) {
        // Pendant le Ramadan
        ramadanCountdownElement.classList.add('during-ramadan');
        const daysRemaining = 30 - currentDay;
        if (currentLang === 'ar') {
            const daysArabic = convertToArabicNumerals(daysRemaining);
            ramadanTextElement.textContent = `${t.ramadanDuring} - متبقي ${daysArabic} ${daysRemaining > 1 ? t.days : t.day}`;
        } else {
            ramadanTextElement.textContent = `${t.ramadanDuring} - ${daysRemaining} ${daysRemaining > 1 ? t.days : t.day} restants`;
        }
    } else if (currentMonth < 9) {
        // Avant le Ramadan
        ramadanCountdownElement.classList.remove('during-ramadan');
        const daysInMonths = [30, 29, 30, 29, 30, 29, 30, 29]; // Jours approximatifs jusqu'à Ramadan
        let daysUntilRamadan = 0;
        
        for (let i = currentMonth - 1; i < 8; i++) {
            if (i === currentMonth - 1) {
                daysUntilRamadan += daysInMonths[i] - currentDay;
            } else {
                daysUntilRamadan += daysInMonths[i];
            }
        }

        if (currentLang === 'ar') {
            const daysArabic = convertToArabicNumerals(daysUntilRamadan);
            ramadanTextElement.textContent = `${t.ramadanBefore} ${daysArabic} ${daysUntilRamadan > 1 ? t.days : t.day} 🌙`;
        } else {
            ramadanTextElement.textContent = `${t.ramadanBefore} ${daysUntilRamadan} ${daysUntilRamadan > 1 ? t.days : t.day} 🌙`;
        }
    } else {
        // Après le Ramadan
        ramadanCountdownElement.classList.remove('during-ramadan');
        const nextRamadanYear = currentYear + 1;
        const daysUntilNextRamadan = 365 - ((currentMonth - 9) * 30 + currentDay);
        
        if (currentLang === 'ar') {
            const daysArabic = convertToArabicNumerals(daysUntilNextRamadan);
            ramadanTextElement.textContent = `رمضان القادم بعد ${daysArabic} ${t.days} تقريباً`;
        } else {
            ramadanTextElement.textContent = `Prochain Ramadan dans environ ${daysUntilNextRamadan} ${t.days}`;
        }
    }
}

// Fonction pour afficher l'heure locale
function displayLocalTime() {
    // Ville 1
    const city1Id = selectedCities.city1;
    const city1Data = citiesDatabase[city1Id];
    if (city1Data) {
        const city1Time = new Date().toLocaleTimeString('fr-FR', {
            timeZone: city1Data.timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        document.getElementById('city1-time').textContent = city1Time;
    }
    
    // Ville 2
    const city2Id = selectedCities.city2;
    const city2Data = citiesDatabase[city2Id];
    if (city2Data) {
        const city2Time = new Date().toLocaleTimeString('fr-FR', {
            timeZone: city2Data.timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        document.getElementById('city2-time').textContent = city2Time;
    }
}

// Fonction pour obtenir les heures de prière
async function getPrayerTimes(cityKey) {
    const cityId = selectedCities[cityKey];
    return await getPrayerTimesForCity(cityId);
}

async function getPrayerTimesForCity(cityId) {
    const city = citiesDatabase[cityId];
    if (!city) return null;
    
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
    // Obtenir l'heure locale de la ville spécifique
    const cityId = selectedCities[cityKey];
    const cityData = citiesDatabase[cityId];
    if (!cityData) return;
    
    const timezone = cityData.timezone;
    const now = new Date();
    const cityTime = new Date(now.toLocaleString('en-US', { timeZone: timezone }));
    const currentTime = cityTime.getHours() * 60 + cityTime.getMinutes();
    
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
    
    // Charger les heures pour les deux villes
    const city1Timings = await getPrayerTimes('city1');
    displayPrayerTimes('city1', city1Timings);
    
    const city2Timings = await getPrayerTimes('city2');
    displayPrayerTimes('city2', city2Timings);
    
    // Afficher la date islamique
    await displayIslamicDate();
    
    // Afficher le compte à rebours Ramadan
    await displayRamadanCountdown();
    
    // Afficher l'heure locale
    displayLocalTime();
    
    updateLastUpdateTime();
}

// Charger les données au démarrage
loadAllPrayerTimes();

// Mettre à jour l'heure locale toutes les secondes
setInterval(() => {
    displayLocalTime();
}, 1000);

// Mettre à jour toutes les minutes
setInterval(() => {
    loadAllPrayerTimes();
}, 60000); // 60000 ms = 1 minute

// Mettre à jour l'affichage de la prière actuelle toutes les 10 secondes
setInterval(async () => {
    const city1Timings = await getPrayerTimes('city1');
    if (city1Timings) {
        highlightCurrentPrayer('city1', city1Timings);
    }
    
    const city2Timings = await getPrayerTimes('city2');
    if (city2Timings) {
        highlightCurrentPrayer('city2', city2Timings);
    }
}, 10000); // 10000 ms = 10 secondes

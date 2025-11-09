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
    
    if (lang === 'ar') {
        document.body.classList.add('arabic');
        document.documentElement.setAttribute('lang', 'ar');
    } else {
        document.body.classList.remove('arabic');
        document.documentElement.setAttribute('lang', 'fr');
    }
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`lang-${lang}`).classList.add('active');
    
    document.querySelectorAll('[data-fr][data-ar]').forEach(element => {
        element.textContent = element.getAttribute(`data-${lang}`);
    });
    
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
    
    document.getElementById(`${cityKey}-name`).textContent = cityData.displayName[currentLang];
    
    const timings = await getPrayerTimesForCity(cityId);
    if (timings) {
        displayPrayerTimes(cityKey, timings);
    }
}

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

    if (currentMonth === 9) {
        ramadanCountdownElement.classList.add('during-ramadan');
        const daysRemaining = 30 - currentDay;
        if (currentLang === 'ar') {
            const daysArabic = convertToArabicNumerals(daysRemaining);
            ramadanTextElement.textContent = `${t.ramadanDuring} - متبقي ${daysArabic} ${daysRemaining > 1 ? t.days : t.day}`;
        } else {
            ramadanTextElement.textContent = `${t.ramadanDuring} - ${daysRemaining} ${daysRemaining > 1 ? t.days : t.day} restants`;
        }
    } else if (currentMonth < 9) {
        ramadanCountdownElement.classList.remove('during-ramadan');
        const daysInMonths = [30, 29, 30, 29, 30, 29, 30, 29];
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

    highlightCurrentPrayer(cityKey, timings);
}

// Fonction pour mettre en évidence la prière actuelle
function highlightCurrentPrayer(cityKey, timings) {
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

    const prayerTimes = prayers.map(prayer => {
        const [hours, minutes] = timings[prayer].split(':').map(Number);
        return {
            name: prayer,
            time: hours * 60 + minutes,
            display: timings[prayer]
        };
    });

    for (let i = 0; i < prayerTimes.length; i++) {
        const prayerItem = document.querySelector(`#${cityKey}-${prayerTimes[i].name.toLowerCase()}`).parentElement;
        prayerItem.classList.remove('current');

        if (currentTime >= prayerTimes[i].time) {
            currentPrayer = prayerTimes[i];
            if (i < prayerTimes.length - 1) {
                nextPrayer = prayerTimes[i + 1];
            } else {
                nextPrayer = prayerTimes[0];
            }
        }
    }

    if (!currentPrayer) {
        nextPrayer = prayerTimes[0];
    }

    if (currentPrayer) {
        const currentElement = document.querySelector(`#${cityKey}-${currentPrayer.name.toLowerCase()}`).parentElement;
        currentElement.classList.add('current');
    }

    if (nextPrayer) {
        const nextElement = document.getElementById(`${cityKey}-next`);
        const timeUntil = calculateTimeUntil(nextPrayer.time, currentTime);
        const t = translations[currentLang];
        
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
        diff += 24 * 60;
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
    
    const city1Timings = await getPrayerTimes('city1');
    displayPrayerTimes('city1', city1Timings);
    
    const city2Timings = await getPrayerTimes('city2');
    displayPrayerTimes('city2', city2Timings);
    
    await displayIslamicDate();
    await displayRamadanCountdown();
    
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
}, 60000);

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
}, 10000);

// ========== GESTION DU CORAN ==========

document.getElementById('quran-btn').addEventListener('click', () => {
    document.getElementById('quran-modal').classList.add('active');
});

document.getElementById('close-quran').addEventListener('click', () => {
    document.getElementById('quran-modal').classList.remove('active');
});

document.getElementById('quran-modal').addEventListener('click', (e) => {
    if (e.target.id === 'quran-modal') {
        document.getElementById('quran-modal').classList.remove('active');
    }
});

document.getElementById('load-surah-btn').addEventListener('click', async () => {
    const surahNumber = document.getElementById('surah-select').value;
    const quranTextDiv = document.getElementById('quran-text');
    
    quranTextDiv.innerHTML = '<p class="quran-info">⏳ Chargement du Coran...</p>';
    
    try {
        // Charger les informations de la sourate
        const infoResponse = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}`);
        const infoData = await infoResponse.json();
        
        // Charger le texte avec Tajweed depuis Tanzil (texte propre Uthmani)
        const textResponse = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/ar.alafasy`);
        const textData = await textResponse.json();
        
        if (infoData.status === 'OK' && textData.status === 'OK') {
            const surahInfo = infoData.data;
            const surahText = textData.data;
            
            let html = `<h3 style="text-align: center; color: #1e3c72; margin-bottom: 20px;">
                سورة ${surahInfo.name} - ${surahInfo.englishName}
                <br><span style="font-size: 0.7em; color: #6c757d;">${surahInfo.numberOfAyahs} آيات - ${surahInfo.revelationType === 'Meccan' ? 'مكية' : 'مدنية'}</span>
            </h3>`;
            
            // Ajouter Bismillah sauf pour sourate 9 et 1
            if (surahNumber !== '9' && surahNumber !== '1') {
                html += `<p style="text-align: center; font-size: 1.3em; color: #2a5298; margin-bottom: 25px; padding: 15px; background: rgba(42, 82, 152, 0.1); border-radius: 10px;">
                    بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
                </p>`;
            }
            
            // Afficher les versets avec style Uthmani propre
            surahText.ayahs.forEach(ayah => {
                // Appliquer des couleurs basiques pour les signes importants
                let ayahText = ayah.text;
                
                // Mettre en évidence certaines lettres importantes (simulation Tajweed basique)
                // Tanwin (double voyelles) en vert clair
                ayahText = ayahText.replace(/([ًٌٍ])/g, '<span style="color: #2ecc71;">$1</span>');
                
                // Sukun en bleu
                ayahText = ayahText.replace(/([ْ])/g, '<span style="color: #3498db;">$1</span>');
                
                // Shaddah en rouge
                ayahText = ayahText.replace(/([ّ])/g, '<span style="color: #e74c3c; font-weight: bold;">$1</span>');
                
                // Madd (alif avec hamza) en orange
                ayahText = ayahText.replace(/(آ)/g, '<span style="color: #f39c12; font-weight: bold;">$1</span>');
                
                html += `<div class="ayah">
                    <span class="ayah-number">﴿${convertToArabicNumber(ayah.numberInSurah)}﴾</span>
                    <span style="font-size: 1.1em; line-height: 2.2;">${ayahText}</span>
                </div>`;
            });
            
            quranTextDiv.innerHTML = html;
            quranTextDiv.scrollTop = 0;
        } else {
            throw new Error('Erreur API');
        }
    } catch (error) {
        console.error('Erreur lors du chargement:', error);
        quranTextDiv.innerHTML = '<p class="quran-info" style="color: #dc3545;">❌ Erreur de chargement. Veuillez réessayer.</p>';
    }
});

// Fonction pour convertir les nombres en chiffres arabes
function convertToArabicNumber(num) {
    const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return num.toString().split('').map(digit => arabicNumerals[parseInt(digit)]).join('');
}

// ========== GESTION DU TASBIH ==========

let tasbihCount = 0;
let tasbihTarget = 0;
let currentTasbihPhrase = 'سُبْحَانَ ٱللَّٰهِ';

document.getElementById('tasbih-btn').addEventListener('click', () => {
    document.getElementById('tasbih-modal').classList.add('active');
});

document.getElementById('close-tasbih').addEventListener('click', () => {
    document.getElementById('tasbih-modal').classList.remove('active');
});

document.getElementById('tasbih-modal').addEventListener('click', (e) => {
    if (e.target.id === 'tasbih-modal') {
        document.getElementById('tasbih-modal').classList.remove('active');
    }
});

document.getElementById('tasbih-increment').addEventListener('click', () => {
    tasbihCount++;
    updateTasbihDisplay();
    
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
    
    const btn = document.getElementById('tasbih-increment');
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        btn.style.transform = 'scale(1)';
    }, 100);
    
    if (tasbihTarget > 0 && tasbihCount === tasbihTarget) {
        showTasbihGoalReached();
    }
});

document.getElementById('tasbih-reset').addEventListener('click', () => {
    if (confirm(currentLang === 'ar' ? 'هل تريد إعادة تعيين العداد؟' : 'Réinitialiser le compteur?')) {
        tasbihCount = 0;
        tasbihTarget = 0;
        updateTasbihDisplay();
        document.getElementById('tasbih-goal').classList.remove('active');
    }
});

document.getElementById('tasbih-target-33').addEventListener('click', () => {
    tasbihTarget = 33;
    updateTasbihGoal();
});

document.getElementById('tasbih-target-99').addEventListener('click', () => {
    tasbihTarget = 99;
    updateTasbihGoal();
});

document.querySelectorAll('.phrase-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.phrase-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentTasbihPhrase = btn.dataset.phrase;
        document.getElementById('current-phrase').textContent = currentTasbihPhrase;
    });
});

function updateTasbihDisplay() {
    document.getElementById('tasbih-count').textContent = tasbihCount;
}

function updateTasbihGoal() {
    const goalDiv = document.getElementById('tasbih-goal');
    const remaining = tasbihTarget - tasbihCount;
    
    if (remaining > 0) {
        if (currentLang === 'ar') {
            goalDiv.textContent = `الهدف: ${tasbihTarget} - متبقي: ${remaining}`;
        } else {
            goalDiv.textContent = `Objectif: ${tasbihTarget} - Reste: ${remaining}`;
        }
        goalDiv.classList.add('active');
    } else {
        goalDiv.classList.remove('active');
    }
}

function showTasbihGoalReached() {
    const goalDiv = document.getElementById('tasbih-goal');
    if (currentLang === 'ar') {
        goalDiv.textContent = '🎉 ما شاء الله! تم إكمال الهدف! 🎉';
    } else {
        goalDiv.textContent = '🎉 MashAllah! Objectif atteint! 🎉';
    }
    goalDiv.style.background = 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)';
    goalDiv.style.color = 'white';
    
    if (navigator.vibrate) {
        navigator.vibrate([200, 100, 200]);
    }
    
    setTimeout(() => {
        goalDiv.style.background = '#fff3cd';
        goalDiv.style.color = '#856404';
    }, 3000);
}

// ========== GESTION DE LA QIBLA (Kaaba fixe, boussole qui tourne) ==========

// Coordonnées de La Mecque (Kaaba)
const MECCA = {
    lat: 21.4225,
    lng: 39.8262
};

let userPosition = null;
let qiblaDirection = 0;
let deviceHeading = 0;
let orientationListener = null;

// Ouvrir modal Qibla
document.getElementById('qibla-btn').addEventListener('click', () => {
    document.getElementById('qibla-modal').classList.add('active');
    initQiblaCompass();
});

// Fermer modal Qibla
document.getElementById('close-qibla').addEventListener('click', () => {
    document.getElementById('qibla-modal').classList.remove('active');
    stopOrientationTracking();
});

// Fermer en cliquant en dehors
document.getElementById('qibla-modal').addEventListener('click', (e) => {
    if (e.target.id === 'qibla-modal') {
        document.getElementById('qibla-modal').classList.remove('active');
        stopOrientationTracking();
    }
});

// Initialiser la boussole Qibla
function initQiblaCompass() {
    const statusText = document.getElementById('status-text');
    
    // Réinitialiser
    qiblaDirection = 0;
    deviceHeading = 0;
    userPosition = null;
    
    // Message de chargement
    if (currentLang === 'ar') {
        statusText.textContent = '🔍 جاري تحديد موقعك...';
    } else {
        statusText.textContent = '🔍 Détection de votre position...';
    }
    statusText.classList.remove('success', 'error');
    
    // Demander la géolocalisation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            onQiblaLocationSuccess,
            onQiblaLocationError,
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            }
        );
    } else {
        statusText.classList.add('error');
        if (currentLang === 'ar') {
            statusText.textContent = '❌ الجهاز لا يدعم تحديد الموقع';
        } else {
            statusText.textContent = '❌ Géolocalisation non supportée';
        }
    }
}

// Succès de la géolocalisation
function onQiblaLocationSuccess(position) {
    userPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    };
    
    // Calculer la direction Qibla
    qiblaDirection = calculateBearing(
        userPosition.lat,
        userPosition.lng,
        MECCA.lat,
        MECCA.lng
    );
    
    // Calculer la distance
    const distance = calculateDistance(
        userPosition.lat,
        userPosition.lng,
        MECCA.lat,
        MECCA.lng
    );
    
    // Afficher le succès
    const statusText = document.getElementById('status-text');
    statusText.classList.add('success');
    if (currentLang === 'ar') {
        statusText.textContent = '✅ تم تحديد اتجاه القبلة بنجاح!';
    } else {
        statusText.textContent = '✅ Direction de la Qibla détectée avec succès!';
    }
    
    // Afficher les informations
    document.getElementById('qibla-angle-value').textContent = Math.round(qiblaDirection) + '°';
    document.getElementById('qibla-distance-value').textContent = Math.round(distance).toLocaleString() + ' km';
    document.getElementById('qibla-position-value').textContent = 
        `${userPosition.lat.toFixed(4)}°, ${userPosition.lng.toFixed(4)}°`;
    
    // Démarrer le suivi de l'orientation
    startOrientationTracking();
    
    // Sur PC (pas d'orientation), tourner la boussole immédiatement
    updateCompassRotation();
}

// Erreur de géolocalisation
function onQiblaLocationError(error) {
    const statusText = document.getElementById('status-text');
    statusText.classList.add('error');
    
    if (currentLang === 'ar') {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                statusText.textContent = '❌ يرجى السماح بتحديد الموقع';
                break;
            case error.POSITION_UNAVAILABLE:
                statusText.textContent = '❌ الموقع غير متاح';
                break;
            case error.TIMEOUT:
                statusText.textContent = '❌ انتهت مهلة الانتظار';
                break;
            default:
                statusText.textContent = '❌ خطأ في التحديد';
        }
    } else {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                statusText.textContent = '❌ Veuillez autoriser la géolocalisation';
                break;
            case error.POSITION_UNAVAILABLE:
                statusText.textContent = '❌ Position non disponible';
                break;
            case error.TIMEOUT:
                statusText.textContent = '❌ Délai d\'attente dépassé';
                break;
            default:
                statusText.textContent = '❌ Erreur lors de la détection';
        }
    }
}

// Démarrer le suivi de l'orientation
function startOrientationTracking() {
    if (window.DeviceOrientationEvent) {
        // Pour iOS 13+, demander la permission
        if (typeof DeviceOrientationEvent.requestPermission === 'function') {
            DeviceOrientationEvent.requestPermission()
                .then(permissionState => {
                    if (permissionState === 'granted') {
                        attachOrientationListener();
                    }
                })
                .catch(console.error);
        } else {
            // Pour Android et anciens iOS
            attachOrientationListener();
        }
    }
}

// Attacher le listener d'orientation
function attachOrientationListener() {
    orientationListener = (event) => {
        if (event.alpha !== null) {
            // Alpha = rotation autour de l'axe Z (boussole)
            deviceHeading = event.alpha;
            
            // Pour iOS, event.webkitCompassHeading est plus précis
            if (event.webkitCompassHeading) {
                deviceHeading = event.webkitCompassHeading;
            }
            
            updateCompassRotation();
        }
    };
    
    window.addEventListener('deviceorientation', orientationListener);
}

// Arrêter le suivi de l'orientation
function stopOrientationTracking() {
    if (orientationListener) {
        window.removeEventListener('deviceorientation', orientationListener);
        orientationListener = null;
    }
}

// Mettre à jour la rotation de la boussole
function updateCompassRotation() {
    if (!userPosition) return;
    
    const compassCircle = document.getElementById('compass-rotating');
    
    // La Kaaba est FIXE en haut (0°)
    // Le cercle doit tourner pour montrer où est le Nord
    // Rotation = direction Qibla - orientation device
    let rotation = qiblaDirection - deviceHeading;
    
    // Normaliser l'angle
    rotation = ((rotation % 360) + 360) % 360;
    
    // Appliquer la rotation au cercle
    compassCircle.style.transform = `rotate(${rotation}deg)`;
}

// Calculer l'angle entre deux points (bearing)
function calculateBearing(lat1, lng1, lat2, lng2) {
    const dLng = toRadians(lng2 - lng1);
    const lat1Rad = toRadians(lat1);
    const lat2Rad = toRadians(lat2);
    
    const y = Math.sin(dLng) * Math.cos(lat2Rad);
    const x = Math.cos(lat1Rad) * Math.sin(lat2Rad) -
              Math.sin(lat1Rad) * Math.cos(lat2Rad) * Math.cos(dLng);
    
    let bearing = toDegrees(Math.atan2(y, x));
    bearing = (bearing + 360) % 360;
    
    return bearing;
}

// Calculer la distance entre deux points (Haversine)
function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371; // Rayon de la Terre en km
    const dLat = toRadians(lat2 - lat1);
    const dLng = toRadians(lng2 - lng1);
    
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
              Math.sin(dLng / 2) * Math.sin(dLng / 2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    
    return distance;
}

// Convertir degrés en radians
function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

// Convertir radians en degrés
function toDegrees(radians) {
    return radians * (180 / Math.PI);
}

// Translation dictionary
const translations = {
    en: {
        // Main page translations
        mainTitle: 'Happy New Year!',
        mainSubtitle: 'Celebrate African New Year',
        mainDescription: 'Embrace the vibrant spirit of new beginnings with African warmth and joy!',
        ctaButton: 'Learn More',
        popupTitle: '🎉 New Year Celebration! 🎉',
        popupDescription: 'Join us in celebrating new beginnings with African spirit and hope!',
        popupLearnMore: 'Learn More',
        footerDescription: 'Celebrating the spirit of African New Year with hope, joy, and unity',
        
        // Modal translations
        aboutModalTitle: 'About African New Year Celebration',
        aboutModalParagraph1: 'The African New Year Celebration is a vibrant festival that embraces the rich cultural heritage and diverse traditions of the African continent. Our mission is to bring communities together, celebrate new beginnings, and honor the spirit of unity and hope.',
        aboutModalParagraph2: 'Each year, we create a platform for people to connect, share experiences, and look forward to the promising journey ahead. Our celebration is more than just an event – it\'s a testament to the resilience, creativity, and warmth of African communities.',
        
        eventsModalTitle: 'Upcoming New Year Events',
        eventsCulturalShowcaseTitle: 'Cultural Showcase',
        eventsCulturalShowcaseDescription: 'A day-long event featuring traditional music, dance, and art from various African regions.',
        eventsCulturalShowcaseDate: 'Date: January 15th, 2024 | Time: 10:00 AM - 6:00 PM',
        
        eventsCommunityFeastTitle: 'Community Feast',
        eventsCommunityFeastDescription: 'A communal dinner celebrating African cuisine and bringing people together.',
        eventsCommunityFeastDate: 'Date: January 20th, 2024 | Time: 7:00 PM',
        
        eventsNewBeginningsConcertTitle: 'New Beginnings Concert',
        eventsNewBeginningsConcertDescription: 'An evening of music featuring African artists and performers.',
        eventsNewBeginningsConcertDate: 'Date: January 25th, 2024 | Time: 8:00 PM',
        
        contactModalTitle: 'Contact Us',
        contactNamePlaceholder: 'Your Name',
        contactEmailPlaceholder: 'Your Email',
        contactMessagePlaceholder: 'Your Message',
        contactSubmitButton: 'Send Message'
    },
    ru: {
        // Main page translations
        mainTitle: 'С Новым Годом!',
        mainSubtitle: 'Праздновать Африканский Новый Год',
        mainDescription: 'Embraceите яркий дух новых начинаний с африканским теплом и радостью!',
        ctaButton: 'Узнать Больше',
        popupTitle: '🎉 Праздник Нового Года! 🎉',
        popupDescription: 'Присоединяйтесь к нам в праздновании новых начинаний с африканским духом и надеждой!',
        popupLearnMore: 'Узнать Больше',
        footerDescription: 'Празднование духа африканского Нового года с надеждой, радостью и единством',
        
        // Modal translations
        aboutModalTitle: 'О праздновании Африканского Нового Года',
        aboutModalParagraph1: 'Празднование Африканского Нового Года - это яркий фестиваль, который охватывает богатое культурное наследие и разнообразные традиции африканского континента. Наша миссия - объединить сообщества, отпраздновать новые начинания и почтить дух единства и надежды.',
        aboutModalParagraph2: 'Каждый год мы создаем платформу для того, чтобы люди могли общаться, делиться опытом и смотреть вперед с надеждой. Наше торжество - это больше, чем просто событие, это свидетельство стойкости, творчества и тепла африканских сообществ.',
        
        eventsModalTitle: 'Предстоящие события Нового Года',
        eventsCulturalShowcaseTitle: 'Культурная выставка',
        eventsCulturalShowcaseDescription: 'Однодневное мероприятие, featuring традиционную музыку, танцы и искусство из различных африканских регионов.',
        eventsCulturalShowcaseDate: 'Дата: 15 января 2024 | Время: 10:00 - 18:00',
        
        eventsCommunityFeastTitle: 'Общинный пир',
        eventsCommunityFeastDescription: 'Совместный ужин, celebrating африканской кухни и объединяющий людей.',
        eventsCommunityFeastDate: 'Дата: 20 января 2024 | Время: 19:00',
        
        eventsNewBeginningsConcertTitle: 'Концерт "Новые Начинания"',
        eventsNewBeginningsConcertDescription: 'Вечер музыки с участием африканских артистов и исполнителей.',
        eventsNewBeginningsConcertDate: 'Дата: 25 января 2024 | Время: 20:00',
        
        contactModalTitle: 'Свяжитесь с нами',
        contactNamePlaceholder: 'Ваше имя',
        contactEmailPlaceholder: 'Ваш Email',
        contactMessagePlaceholder: 'Ваше сообщение',
        contactSubmitButton: 'Отправить сообщение'
    }
};

// Language toggle functionality
const languageButtons = document.querySelectorAll('.language-btn');
const elementsToTranslate = [
    'mainTitle', 'mainSubtitle', 'mainDescription', 'ctaButton',
    'popupTitle', 'popupDescription', 'popupLearnMore', 'footerDescription',
    
    // Modal translation elements
    'aboutModalTitle', 'aboutModalParagraph1', 'aboutModalParagraph2',
    'eventsModalTitle', 'eventsCulturalShowcaseTitle', 'eventsCulturalShowcaseDescription', 'eventsCulturalShowcaseDate',
    'eventsCommunityFeastTitle', 'eventsCommunityFeastDescription', 'eventsCommunityFeastDate',
    'eventsNewBeginningsConcertTitle', 'eventsNewBeginningsConcertDescription', 'eventsNewBeginningsConcertDate',
    'contactModalTitle', 'contactNamePlaceholder', 'contactEmailPlaceholder', 'contactMessagePlaceholder', 'contactSubmitButton'
];

function setLanguage(lang) {
    // Save language preference to localStorage
    localStorage.setItem('selectedLanguage', lang);

    // Update button active state
    languageButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Translate main page elements
    elementsToTranslate.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = translations[lang][id];
        }
    });

    // Special handling for input placeholders and specific modal elements
    if (lang === 'ru') {
        // About Modal
        const aboutModalContent = document.querySelector('#aboutModal .modal-content');
        if (aboutModalContent) {
            const paragraphs = aboutModalContent.querySelectorAll('p');
            if (paragraphs.length >= 2) {
                paragraphs[0].textContent = translations[lang]['aboutModalParagraph1'];
                paragraphs[1].textContent = translations[lang]['aboutModalParagraph2'];
            }
        }

        // Events Modal
        const eventsModalContent = document.querySelector('#eventsModal .modal-content');
        if (eventsModalContent) {
            const eventDivs = eventsModalContent.querySelectorAll('.bg-yellow-50');
            if (eventDivs.length >= 3) {
                // Cultural Showcase
                eventDivs[0].querySelector('h3').textContent = translations[lang]['eventsCulturalShowcaseTitle'];
                eventDivs[0].querySelectorAll('p')[0].textContent = translations[lang]['eventsCulturalShowcaseDescription'];
                eventDivs[0].querySelectorAll('p')[1].textContent = translations[lang]['eventsCulturalShowcaseDate'];

                // Community Feast
                eventDivs[1].querySelector('h3').textContent = translations[lang]['eventsCommunityFeastTitle'];
                eventDivs[1].querySelectorAll('p')[0].textContent = translations[lang]['eventsCommunityFeastDescription'];
                eventDivs[1].querySelectorAll('p')[1].textContent = translations[lang]['eventsCommunityFeastDate'];

                // New Beginnings Concert
                eventDivs[2].querySelector('h3').textContent = translations[lang]['eventsNewBeginningsConcertTitle'];
                eventDivs[2].querySelectorAll('p')[0].textContent = translations[lang]['eventsNewBeginningsConcertDescription'];
                eventDivs[2].querySelectorAll('p')[1].textContent = translations[lang]['eventsNewBeginningsConcertDate'];
            }
        }

        // Contact Modal
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const submitButton = document.querySelector('#contactForm button[type="submit"]');

        if (nameInput) nameInput.setAttribute('placeholder', translations[lang]['contactNamePlaceholder']);
        if (emailInput) emailInput.setAttribute('placeholder', translations[lang]['contactEmailPlaceholder']);
        if (messageInput) messageInput.setAttribute('placeholder', translations[lang]['contactMessagePlaceholder']);
        if (submitButton) submitButton.textContent = translations[lang]['contactSubmitButton'];
    }
}

// Add event listeners to language buttons
languageButtons.forEach(button => {
    button.addEventListener('click', () => {
        setLanguage(button.dataset.lang);
    });
});

// Popup functionality
const newYearPopup = document.getElementById('newYearPopup');
const closePopup = document.getElementById('closePopup');
const ctaButton = document.getElementById('ctaButton');
const popupLearnMore = document.getElementById('popupLearnMore');

// Open popup when CTA or Learn More buttons are clicked
ctaButton.addEventListener('click', () => {
    newYearPopup.style.display = 'flex';
});

popupLearnMore.addEventListener('click', () => {
    // Add your redirect logic here
    alert('Redirecting to more information');
});

// Auto-open popup on page load
window.addEventListener('load', () => {
    // Uncomment the line below to auto-open popup
    // newYearPopup.style.display = 'flex';

    // Check for saved language preference
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    setLanguage(savedLanguage);
});

// Close popup functionality
closePopup.addEventListener('click', () => {
    newYearPopup.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === newYearPopup) {
        newYearPopup.style.display = 'none';
    }
});

 // Modal Functionality
 function initializeModals() {
    const modals = document.querySelectorAll('.modal');
    const closeBtns = document.querySelectorAll('.close-modal');
    const navLinks = document.querySelectorAll('nav a');

    // Map nav links to modals
    const modalMap = {
        'About': 'aboutModal',
        'Events': 'eventsModal',
        'Contact': 'contactModal'
    };

    // Open modal function
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'block';
        }
    }

    // Close modal function
    function closeModal(modal) {
        modal.style.display = 'none';
    }

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        modals.forEach(modal => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });

    // Close button functionality
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            closeModal(modal);
        });
    });

    // Footer Navigation links functionality
const footerLinks = document.querySelectorAll('footer nav a');
footerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const modalId = modalMap[link.textContent.trim()];
        if (modalId) {
            openModal(modalId);
        }
    });
});

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
        document.getElementById('contactModal').style.display = 'none';
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initializeModals);


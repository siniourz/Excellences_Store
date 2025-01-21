function toggleMobileMenu(element) {
    element.classList.toggle("open");
    const menu = document.querySelector('.mobile-menu');
    const main = document.querySelector('.m-four-sign');
    const bg = document.querySelector('.m-text-parts');

    if (element.classList.contains('open')) {
        menu.style.display = 'flex';

        if (main) main.style.top = '150px';
        if (bg) bg.style.marginTop = '170px';
        

      
    
    } else {
        menu.style.display = 'none';

        if (main) main.style.top = '20px';
        if (bg) bg.style.marginTop = '30px';
     
    }
}




let hasScrolledDown = false;  

window.addEventListener('scroll', () => {
    if (hasScrolledDown) return;  

    const sign1=document.querySelector('.sign1');
    const navbar=document.querySelector('nav');





    const scrollTop = window.scrollY;

    if (scrollTop > 85) {

        navbar.style.position='fixed';
        navbar.style.top='0vw';
      


        sign1.style.marginLeft='0px';
        sign1.style.opacity='1';

        sign2.style.marginLeft='0px';
        sign2.style.opacity='1';

        sign3.style.marginLeft='0px';
        sign3.style.opacity='1';

        sign4.style.marginLeft='0px';
        sign4.style.opacity='1';

        firstbox.style.opacity='1';
        firstbox.style.marginTop='0px';

        arrow.style.opacity='0';


        scroll.style.opacity='0';


    


    }
    else {
        navbar.style.position='absolute';
        navbar.style.top='13%';
        
    }
    

});


document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.tr-button').addEventListener('click', function() {
        setLanguage('tr');
    });

    document.querySelector('.en-button').addEventListener('click', function() {
        setLanguage('en');
    });

    function setLanguage(language) {
        const elements = document.querySelectorAll('[data-lang]');

        elements.forEach(function(element) {
            const langKey = element.getAttribute('data-lang');
            if (language === 'tr') {
                element.textContent = translations[language][langKey] || element.textContent;
            } else {
                element.textContent = translations[language][langKey] || element.textContent;
            }
        });
    }

    const translations = {
        en: {
            'excellences': 'Excellences',
            'searchText': 'What are you looking for?',
            'earrings': 'Earings',
            'bracelet': 'Bracelet',
            'necklace': 'Necklace',
            'piercing': 'Piercing',
            'contact': 'Contact',
            'startShopping': 'Start Shopping',
            'exploreAccessories': 'Explore Accessories',
            'necklaceInfo': 'elevate your look by nuance details',
            'exploreNecklaces': 'Explore Necklaces',
            'uniqueDesigns': 'Unique Designes',
            'aNeedForEveryone': 'a need for everyone',
            'keepYourselfUnique': 'Keep yourself unique'  // Added this translation
        },
        tr: {
            'excellences': 'Excellences',
            'searchText': 'Ne arıyorsunuz?',
            'earrings': 'Küpe',
            'bracelet': 'Bilezik',
            'necklace': 'Kolye',
            'piercing': 'Piercing',
            'contact': 'İletişim',
            'startShopping': 'Alışverişe Başla',
            'exploreAccessories': 'Aksesuarları Keşfet',
            'necklaceInfo': 'Görünümünüzü detaylarla zenginleştirin',
            'exploreNecklaces': 'Kolye Keşfet',
            'uniqueDesigns': 'Benzersiz Tasarımlar',
            'aNeedForEveryone': 'Herkesin İhtiyacı',
            'keepYourselfUnique': 'Kendinizi eşsiz tutun'  // Turkish translation for "Keep yourself unique"
        }
    };    
});



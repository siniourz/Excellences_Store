let hasScrolledDown = false;  

window.addEventListener('scroll', () => {
    if (hasScrolledDown) return;  

    const sign1=document.querySelector('.sign1');
    const navbar=document.querySelector('nav');





    const scrollTop = window.scrollY;

    if (scrollTop > 85) {

        navbar.style.position='fixed';
        navbar.style.top='0vw';
      


    
        scroll.style.opacity='0';


    


    }
    else {
        navbar.style.position='absolute';
        navbar.style.top='6.8vw';
        
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
            'earrings': 'Earrings',
            'bracelet': 'Bracelet',
            'necklace': 'Necklace',
            'piercing': 'Piercing',
            'contact': 'Contact',
            'title':'Excellences Store | Necklaces',
            'necklaces': 'Necklaces',
            'males': 'For males',
            'info': 'Elevate your style to its finest version with a men s necklace. This accessory not only adds a unique touch to your look but also enhances your presence, making a powerful and modern statement.',
            'malesbtt':'explore all necklaces for males',
            'females': 'For females',
            'info2':'Transform your look with a necklace designed to highlight your individuality. It’s the perfect way to add sophistication and a powerful statement to any outfit.',
            'btt2':'Explore all necklaces for Females',
            'payment':'Payment Methods: ',
            'follow':'Follow us on: ',
            'contactus':'contact us at: ',
            'company':'company',



            
        },
        tr: {
            'excellences': 'Excellences',
            'searchText': 'Ne arıyorsunuz?',
            'earrings': 'Küpe',
            'bracelet': 'Bilezik',
            'necklace': 'Kolye',
            'piercing': 'Piercing',
            'contact': 'İletişim',
            'title':'Excellences Store | Kolye',
            'necklaces': 'Kolyeler',
            'males': 'Erkekler için',
            'info': 'Erkek kolyesiyle tarzınızı en iyi versiyonuna yükseltin. Bu aksesuar sadece görünümünüze benzersiz bir dokunuş katmakla kalmaz, aynı zamanda varlığınızı da güçlendirerek güçlü ve modern bir ifade yaratır.',
            'malesbtt':'erkekler için tüm kolyeleri keşfedin',
            'females': 'Kadınlar için',
            'info2':'Bireyselliğinizi vurgulamak için tasarlanmış bir kolyeyle görünümünüzü dönüştürün. Herhangi bir kıyafete sofistikelik ve güçlü bir ifade katmanın mükemmel yoludur.',
            'btt2':'Kadınlar için tüm kolyeleri keşfedin',
            'payment':'ödeme yöntemleri: ',
            'follow':'Bizi takip edin: ',
            'contactus':'bizimle iletişime geçin: ',
            'company':'şirket',





        }
    };    
});
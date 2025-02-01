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
            'title':'Excellences Store | Earings',
            'payment':'Payment Methods: ',
            'follow':'Follow us on: ',
            'contactus':'contact us at: ',
            'company':'company',
            'keep':'keep in touch via:',








            



            
        },
        tr: {
            'excellences': 'Excellences',
            'searchText': 'Ne arıyorsunuz?',
            'earrings': 'Küpeler',
            'bracelet': 'Bilezik',
            'necklace': 'Kolye',
            'piercing': 'Piercing',
            'contact': 'İletişim',
            'title':'Excellences Store | Küpe',
            'payment':'ödeme yöntemleri: ',
            'follow':'Bizi takip edin: ',
            'contactus':'bizimle iletişime geçin: ',
            'company':'şirket',
            'keep':'İletişimde kalın: ',


            




            


        }
    };    
});
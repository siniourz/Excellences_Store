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



            'bbr':'Piercings',
            'bbrr':'Ear',
            'bbrinfo':'Ear piercings are a powerful way to express personality and individuality. They add a bold accent to any look, blending style with confidence. A carefully chosen piercing can enhance your appearance, creating a distinctive and impactful statement.',
            'brbtt':'Show All The Ear Piercings',
            'bbrb':'Belly',
            'bbrinfobel':'Belly piercings add a unique touch of boldness and elegance to your style, accentuating your confidence and individuality. This striking detail enhances your overall look, creating a statement that’s both stylish and daring. Perfect for those who embrace their own sense of beauty and strength.',
            'brbttbel':'Show All The Belly Piercings',
            'bbrn':'Nose',
            'bbrinfon':'A nose piercing is a bold yet subtle way to showcase individuality and confidence. It enhances your facial features, creating a striking focal point that adds a touch of elegance and attitude to your style. A perfect choice for those who want to make a personal and impactful statement.',
            'brbttn':'Show All The Nose Piercings',






            



            
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


            'bbr':'Piercingler',
            'bbrr':'Kulak',
            'bbrinfo':'Kulak piercingleri kişiliği ve bireyselliği ifade etmenin güçlü bir yoludur. Herhangi bir görünüme cesur bir vurgu katar, stili özgüvenle harmanlar. Dikkatle seçilmiş bir piercing görünümünüzü geliştirebilir, ayırt edici ve etkili bir ifade yaratabilir.',
            'brbtt':'Tüm Kulak Piercinglerini Göster',
            'bbrb':'Göbek',
            'bbrinfobel':'Göbek piercingleri, stilinize benzersiz bir cesaret ve zarafet dokunuşu katarak özgüveninizi ve bireyselliğinizi vurgular. Bu çarpıcı detay, genel görünümünüzü geliştirerek hem şık hem de cesur bir ifade yaratır. Kendi güzellik ve güç duygusunu benimseyenler için mükemmeldir.',
            'brbttbel':'Tüm Göbek Piercinglerini Göster',
            'bbrn':'Burun',
            'bbrinfon':'Burun piercingi, bireyselliği ve özgüveni sergilemenin cesur ama incelikli bir yoludur. Yüz hatlarınızı vurgular, stilinize bir zarafet ve tavır dokunuşu katan çarpıcı bir odak noktası yaratır. Kişisel ve etkili bir ifade oluşturmak isteyenler için mükemmel bir seçimdir.',
            'brbttn':'Tüm Burun Piercinglerini Göster',








            


        }
    };    
});
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

windowaddEventListener('scroll', () => {
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
            'startShopping': 'Show All Accessories',
            'exploreAccessories': 'Show All Earings',
            'necklaceInfo': 'elevate your look by nuance details',
            'exploreNecklaces': 'Explore Necklaces',
            'uniqueDesigns': 'Unique Designes',
            'aNeedForEveryone': 'a need for everyone',
            'keepYourselfUnique': 'Keep yourself unique', // Added this translation
            'eh1':'Earings',
            'eh6':'the most popular earring in 2024',
            'eh3':'Elegant Drop Shaped Earring',
            'eh4':'The teardrop design earrings were crowned the best of 2024, becoming a must-have item with high demand. Their elegant shape and timeless appeal add a unique touch to any style. Elevate your look with this stunning piece and stand out effortlessly.',
            'addtocart':'add to cart',
            'moreearings':'explore other earings',
            'otherh1':'other popular earrings',
            'e12bt':'View Details',
            'braclets-h5':'Bracelets with unique designs serve as a refined expression of personal style, offering more than just an accessory. These carefully crafted pieces add depth and sophistication to any ensemble, subtly enhancing the wearer’s aesthetic. With their distinctiveness, they create a lasting impression, making a bold yet elegant statement about individuality and taste.',
            'br-btt':'Explore All Earrings',
            'p-btt':'Explore All Piercings',
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
            'startShopping': 'Tüm Aksesuarları Göster',
            'exploreAccessories': 'Tüm Küpeleri Göster',
            'necklaceInfo': 'Görünümünüzü detaylarla zenginleştirin',
            'exploreNecklaces': 'Kolye Keşfet',
            'uniqueDesigns': 'Benzersiz Tasarımlar',
            'aNeedForEveryone': 'Herkesin İhtiyacı',
            'keepYourselfUnique': 'Kendinizi eşsiz tutun',  // Turkish translation for "Keep yourself unique"
            'eh1':'Küpeler',
            'eh6':'2024 ün en popüler küpesi',
            'eh3':'Zarif Damla Şekilli Küpe',
            'eh4':'Damla tasarımlı küpeler 2024 ün en iyisi olarak taçlandırıldı ve yüksek taleple olmazsa olmaz bir ürün haline geldi. Zarif şekilleri ve zamansız çekicilikleri her stile benzersiz bir dokunuş katar. Bu çarpıcı parça ile görünümünüzü yükseltin ve zahmetsizce öne çıkın.',
            'addtocart':'Sepete ekle',
            'moreearings':'diğer küpeleri keşfet',
            'otherh1':'diğer popüler küpeler',
            'e12bt':'Ayrıntıları Görüntüle',
            'braclets-h5':'Benzersiz tasarımlara sahip bilezikler, kişisel tarzın rafine bir ifadesi olarak hizmet eder ve sadece bir aksesuardan daha fazlasını sunar. Bu özenle hazırlanmış parçalar, her topluluğa derinlik ve sofistikelik katar ve kullanıcının estetiğini incelikle geliştirir. Farklılıklarıyla, kalıcı bir izlenim yaratır, bireysellik ve zevk hakkında cesur ama zarif bir ifade oluştururlar.',
            'br-btt':'Tüm Küpeleri Keşfedin',
            'p-btt':'Tüm Piercingleri Keşfedin',
            'payment':'ödeme yöntemleri: ',
            'follow':'Bizi takip edin: ',
            'contactus':'bizimle iletişime geçin: ',
            'company':'şirket',



        }
    };    
});
// Function to check if the element is in the viewport
function isElementInView(el) {
    var rect = el.getBoundingClientRect();
    return (rect.top <= window.innerHeight && rect.bottom >= 0);
}

// Handle scroll event
window.addEventListener('scroll', function() {
    var fourthPart = document.querySelector('.otherearings-box');
    var images = document.querySelectorAll('.earings1-box, .earing2-box');

    // If the fourth part is in the viewport, show images
    if (isElementInView(fourthPart)) {
        fourthPart.classList.add('show-images');
    }
});



// Function to check if the element is in the viewport
function isElementInView(el) {
    var rect = el.getBoundingClientRect();
    return (rect.top <= window.innerHeight && rect.bottom >= 0);
}

// Handle scroll event
window.addEventListener('scroll', function() {
    var fourthPart = document.querySelector('.bg-box');
    var images = document.querySelectorAll('.earings-img');

    // If the fourth part is in the viewport, show images
    if (isElementInView(fourthPart)) {
        fourthPart.classList.add('show-images');
    }
});



// Function to check if the element is in the viewport
function isElementInView(el) {
    var rect = el.getBoundingClientRect();
    return (rect.top <= window.innerHeight && rect.bottom >= 0);
}

// Handle scroll event
window.addEventListener('scroll', function() {
    var fourthPart = document.querySelector('.bg-texts-earings');
    var images = document.querySelectorAll('.earings-h1');

    // If the fourth part is in the viewport, show images
    if (isElementInView(fourthPart)) {
        fourthPart.classList.add('show-h1');
    }
});


// Function to check if the element is in the viewport
function isElementInView(el) {
    var rect = el.getBoundingClientRect();
    return (rect.top <= window.innerHeight && rect.bottom >= 0);
}

// Handle scroll event
window.addEventListener('scroll', function() {
    var fourthPart = document.querySelector('.braclets-color');
    var images = document.querySelectorAll('.braclets-img');

    // If the fourth part is in the viewport, show images
    if (isElementInView(fourthPart)) {
        fourthPart.classList.add('show-bracletsimg');
    }
});



// Function to check if the element is in the viewport
function isElementInView(el) {
    var rect = el.getBoundingClientRect();
    return (rect.top <= window.innerHeight && rect.bottom >= 0);
}

// Handle scroll event
window.addEventListener('scroll', function() {
    var fourthPart = document.querySelector('.p-color');
    var images = document.querySelectorAll('.p-img');

    // If the fourth part is in the viewport, show images
    if (isElementInView(fourthPart)) {
        fourthPart.classList.add('show-p-img');
    }
});


// Function to check if the element is in the viewport
function isElementInView(el) {
    var rect = el.getBoundingClientRect();
    return (rect.top <= window.innerHeight && rect.bottom >= 0);
}

// Handle scroll event
window.addEventListener('scroll', function() {
    var fourthPart = document.querySelector('.p-bg');
    var images = document.querySelectorAll('.p-vid');

    // If the fourth part is in the viewport, show images
    if (isElementInView(fourthPart)) {
        fourthPart.classList.add('show-p-bg');
    }
});


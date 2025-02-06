


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


            'einfo':'Unleash your inner elegance with our exquisite earrings. Designed to capture attention, these timeless pieces add a touch of sophistication to any outfit, making you shine with grace and style. Perfect for those who seek beauty in every detail.',
            'ebtt':'Show All The Earrings',
            'error':'In case of any conflict, Refresh the page.',





            
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
            'einfo':'Zarif küpelerimizle içinizdeki zarafeti ortaya çıkarın. Dikkat çekmek için tasarlanan bu zamansız parçalar, her kıyafete bir sofistike dokunuş katarak zarafet ve stilinizle parlamanızı sağlar. Her ayrıntıda güzellik arayanlar için mükemmeldir.',
            'ebtt':'Tüm Küpeleri Göster',
            'error':'Herhangi bir çakışma durumunda, Sayfayı yenileyin',





        }
    };    
});
let hasScrolledDown = false;

window.addEventListener('scroll', () => {
  // Only execute if the viewport width is more than 768px
  if (window.innerWidth <= 768) return;
  
  if (hasScrolledDown) return;

  
  const navbar = document.querySelector('nav');

  // Adjust the following if your intended element is not named ".scroll"
  const scrollElement = document.querySelector('.scroll');

  const scrollTop = window.scrollY;

  if (scrollTop > 85) {
    navbar.style.position = 'fixed';
    navbar.style.top = '0vw';
    
    if (scrollElement) {
      scrollElement.style.opacity = '0';
      navbar.display='block';
      navbar.style.marginTop='0';

    }
  } else {
    navbar.style.position = 'absolute';
    navbar.style.top = '10.8vw';
    navbar.style.marginTop='0vh';
  }
});





let hasScrolledDow = false;

window.addEventListener('scroll', () => {
  // Only execute if the viewport width is more than 768px
  if (window.innerWidth >= 768) return;
  
  if (hasScrolledDow) return;

  
  const navbar = document.querySelector('nav');

  // Adjust the following if your intended element is not named ".scroll"
  const scrollElement = document.querySelector('.scroll');

  const scrollTop = window.scrollY;

  if (scrollTop > 85) {
    navbar.style.opacity='1';
    navbar.style.clipPath='inset(0 0 0 0)';

    if (scrollElement) {
      navbar.style.opacity='1';
      navbar.style.clipPath='inset(0 0 0 0)';


    }
  } else {
 
  }
});

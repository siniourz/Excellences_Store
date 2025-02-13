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
    navbar.display='block';

    if (scrollElement) {
      scrollElement.style.opacity = '0';
      navbar.display='block';

    }
  } else {
    navbar.style.position = 'absolute';
    navbar.style.top = '6.8vw';
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


            'bbr':'Braclets',
            'bbrinfo':'Bracelets have the ability to transform an outfit, adding a layer of refinement and personal touch. These subtle details can elevate ones style, offering a unique expression of individuality and taste. The right design can bring an effortless sense of elegance and sophistication to any look.',
            'brbtt':'Show All The Braclets',
            'bbf':'For Females',
            'brm':'For Males',
            'bbrinfom':'A well-chosen bracelet can define a mans style, subtly reflecting his personality and strength. It adds a bold yet refined touch to any look, enhancing confidence and leaving a lasting impression. With the right piece, elegance and individuality effortlessly come together.',


            



            
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




            'bbr':'Bilezikler',
            'bbrinfo':'Bilezikler bir kıyafeti dönüştürme, bir kat incelik ve kişisel dokunuş ekleme yeteneğine sahiptir. Bu ince detaylar kişinin stilini yükseltebilir, benzersiz bir bireysellik ve zevk ifadesi sunabilir. Doğru tasarım her görünüme zahmetsiz bir zarafet ve incelik duygusu getirebilir.',
            'brbtt':'Tüm Bilezikleri Göster',
            'bbf':'Kadınlar İçin',
            'brm':'Erkekler için',
            'bbrinfom':'İyi seçilmiş bir bilezik, bir erkeğin stilini tanımlayabilir, kişiliğini ve gücünü incelikle yansıtabilir. Herhangi bir görünüme cesur ama rafine bir dokunuş katar, özgüveni artırır ve kalıcı bir izlenim bırakır. Doğru parça ile zarafet ve bireysellik zahmetsizce bir araya gelir.',




        }
    };    
});
//alert message
document.addEventListener("DOMContentLoaded", function(){
  document.querySelector('.search_text').addEventListener('click', function(){
      alert("Sorry, Not available right now");
  })
});

//till here
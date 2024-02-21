// Navbar
const toggleMenu = document.getElementById('toggleMenu');
const mobileMenu = document.getElementById('mobileMenu');

toggleMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.toggle('sticky', window.scrollY > 0);
    header.style.backgroundColor = '#020617';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});

// Scroll
$(document).ready(function () {
  $('a').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// Botton Top
function toggleScrollTopButton() {
  const scrollTopButton = document.getElementById('scrollTopButton');
  if (window.scrollY > 300) {
    scrollTopButton.classList.add('active');
  } else {
    scrollTopButton.classList.remove('active');
  }
}

function scrollToTop() {
  const scrollDuration = 1000;
  const scrollStep = -window.scrollY / (scrollDuration / 15);

  const scrollInterval = setInterval(function () {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}

document.getElementById('scrollTopButton').addEventListener('click', scrollToTop);

window.addEventListener('scroll', toggleScrollTopButton);

// Form Contact
const scriptURL = 'https://script.google.com/macros/s/AKfycbxdphPJNoZv_WGnpj_D-pDTRf9gff2BzC0qBs-grAqPg7bhjxOP2KWmI2F071AXrSfkSw/exec';
const form = document.forms['mdimassyafutra_contact_form'];
const btnSend = document.querySelector('.btn-send');
const btnLoading = document.querySelector('.btn-load');
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  btnLoading.classList.toggle('hidden');
  btnSend.classList.toggle('hidden');

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      btnLoading.classList.toggle('hidden');
      btnSend.classList.toggle('hidden');

      return response.json();
    })
    .then((data) => {
      myAlert.classList.remove('hidden');
      myAlert.innerText = 'Message sent successfully';

      form.reset();

      console.log('Success!', data);

      setTimeout(() => {
        myAlert.classList.add('hidden');
      }, 3000);
    })
    .catch((error) => {
      console.error('Error!', error.message);
      myAlert.classList.remove('hidden');
      myAlert.innerText = 'An error occurred. Please try again later.';
      setTimeout(() => {
        myAlert.classList.add('hidden');
      }, 3000);
    });
});

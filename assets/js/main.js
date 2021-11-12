/* open and close menu */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const eventToggle of toggle) {
  eventToggle.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* When click on links of menu, remove menu */
const navList = document.querySelectorAll('nav ul li a')

for (const navItem of navList) {
  navItem.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* function - change the page header when scrolling */
function shadowHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const headerHeigth = header.offsetHeight

  if (window.scrollY >= headerHeigth) {
    //when scroll is bigger that header hieght
    header.classList.add('scroll')
  } else {
    //when scroll is  smaller that header hieght
    header.classList.remove('scroll')
  }
}

/* Slider Swiper - Testimonials */
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* show elements with animation on page */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 500,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .cardItem,
  #testimonials header, #testimonials .testimonials
  #contact , #contact .subtitle,
  footer .brand, footer .social, footer .copyRight
  `,
  { interval: 50 }
)

/*****  back to top button *****/
window.onload = function () {
  const backToTopButton = document.querySelector('.back-to-top')
  const footer = document.querySelector('#footer')
  const footerHeigth = footer.offsetHeight
  const windowHeight = document.documentElement.scrollHeight
  const topFooter = windowHeight - footerHeigth - window.innerHeight
  function backToTop() {
    if (window.scrollY >= 480) {
      backToTopButton.classList.add('show')
    } else {
      backToTopButton.classList.remove('show')
    }
  }
  /* change color back to top button when on footer */
  console.log("meu calculo foi", windowHeight)
  function changeColorBackToTopButton() {
    if (window.scrollY >= topFooter) {
      backToTopButton.classList.add('add')
    } else {
      backToTopButton.classList.remove('add')
    }
  }

  /* Activate menu alt color at current section */
  const sections = document.querySelectorAll('main section[id]')
  function activateMenuAtCurrentSection() {

    const sectionLimit = window.pageYOffset + (window.innerHeight / 8) * 3 /* creat a 'imaginare'limit line on viewprt */

    for (const section of sections) {
      const sectionTop = section.offsetTop /* define the top of each section  */
      const sectionHeight = section.offsetHeight /* define the hieght of section*/
      const sectionId =
        section.getAttribute('id') /* get id from section  */

      const startSectionLimit =
        sectionLimit >= sectionTop /* define where start section*/
      const endSectionLimit =
        sectionLimit <=
        sectionTop + sectionHeight /* define where end section*/

      if (startSectionLimit && endSectionLimit) {
        document
          .querySelector('nav ul li a[href*=' + sectionId + ']')
          .classList.add(
            'active'
          ) /*concatenate the selectors 'nav ul li a' + id that is allocated in the variable 'sectionId' and ADD the class .active  */
      } else {
        document
          .querySelector('nav ul li a[href*=' + sectionId + ']')
          .classList.remove(
            'active'
          ) /* concatenate the selectors 'nav ul li a' + the id that is allocated in the variable 'sectionId' and REMOVE the class .active  */
      }
    }
  }

  /* When Scroll */
  window.addEventListener('scroll', function () {
    shadowHeaderWhenScroll(),
      backToTop(),
      changeColorBackToTopButton(),
      activateMenuAtCurrentSection()
  })
}

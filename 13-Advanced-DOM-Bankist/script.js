'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Scrolling Implementation
btnScrollTo.addEventListener('click', () => {

  // Old method
  // const s1coords = section1.getBoundingClientRect();
  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  // New method
  section1.scrollIntoView({
    behavior: 'smooth'
  })
})

// Optimized Page Navigation
document.querySelector('.nav__links').addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(document.querySelector(id));
    // Another way
    // console.log(document.getElementById(id.substring(1)));
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  }
})

// tabbed content
tabsContainer.addEventListener('click', (e) => {
  e.preventDefault();

  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return;

  // Active Tabs
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  // Active Content
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
});

// menu fade animation

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = nav.querySelectorAll('.nav__link');
    // Another Way
    // link.closest('nav').querySelectorAll('.nav__link');
    const logo = nav.querySelector('img');

    siblings.forEach((s) => {
      if (s !== link) {
        s.style.opacity = this;
      }
    })
    logo.style.opacity = this;
  }
}

// nav.addEventListener('mouseover', handleHover.bind(0.5))

// nav.addEventListener('mouseout', handleHover.bind(1))

// const initialCoords = section1.getBoundingClientRect();
// // console.log(initialCoords);

// window.addEventListener('scroll',()=>{
//   console.log(window.scrollY, initialCoords.top);
// })

// Intersection API
const header = document.querySelector('header');
const navHeight = nav.getBoundingClientRect().height;

const headerObserver = new IntersectionObserver(
  entries => {
    // console.log(entries[0].isIntersecting);
    if (!entries[0].isIntersecting) {
      nav.classList.add('sticky')
    }
    else nav.classList.remove('sticky')
  }, {
  threshold: 0,
  rootMargin: `-${navHeight}px`
});

headerObserver.observe(header);

// Revealing Sections
const allSections = document.querySelectorAll('.section');

const revealSection = (entries, observer) => {
  const [, entry] = entries;
  // console.log(entry.target);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
}

const options = {
  root: null,
  threshold: 0.15,
}

const sectionObserver = new IntersectionObserver(revealSection, options);

allSections.forEach(section => {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

// Lazy loding images

const imgTargets = document.querySelectorAll('img[data-src');

const loadImg = (entries, observer) => {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', () => {
    entry.target.classList.remove('lazy-img');
  })

  observer.unobserve(entry.target);
}

const imgObserver = new IntersectionObserver(loadImg, {
  threshold: 0
})

imgTargets.forEach(img => imgObserver.observe(img));
// imgObserver.observe(...imgTargets);

// Slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  let curSlide = 0, maxSlide = slides.length;
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  // const Slider = document.querySelector('.slider');
  // Slider.style.transform = 'scale(0.4) translateX(-800px)';
  // Slider.style.overflow = 'visible';
  const dotContainer = document.querySelector('.dots');

  const createDots = function () {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML('beforeend', `<button class=dots__dot data-slide=${i}></button>`);
    })
  };

  const activeDot = function (slide) {
    document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));
    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
    curSlide = Number(slide);
  };

  const goToSlide = function (slide) {
    slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - slide)}%)`);
  }

  const init = function () {
    goToSlide(0);
    createDots();
    activeDot(0);
  }
  init();

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    }
    else {
      curSlide++;
    }
    goToSlide(curSlide);
    activeDot(curSlide);
  }

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    }
    else {
      curSlide--;
    }
    goToSlide(curSlide);
    activeDot(curSlide);
  }

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  })

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activeDot(slide);
    }
  })
}
slider();
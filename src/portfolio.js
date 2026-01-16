const getGlobal = (name) => {
  if (typeof window === 'undefined') return undefined;
  return window[name];
};

const safeAnime = () => getGlobal('anime');

const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const adjustHeroPadding = () => {
  // Placeholder for legacy behavior; kept to avoid errors on resize
};

const initScrollReveal = () => {
  const revealElements = document.querySelectorAll('.reveal-element');
  if (!revealElements.length) return;

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
};

const initTypewriter = () => {
  const typedElement = document.getElementById('typed-text');
  if (!typedElement) return;

  const Typed = getGlobal('Typed');
  if (!Typed) return;

  // eslint-disable-next-line no-new
  new Typed('#typed-text', {
    strings: [
      'AI/ML Developer',
      'Software Engineer',
      'Full-Stack Developer',
      'Data Analyst',
      'Problem Solver',
      'Machine Learning Enthusiast',
    ],
    typeSpeed: 80,
    backSpeed: 40,
    backDelay: 2000,
    startDelay: 500,
    loop: true,
    showCursor: false,
  });
};

const initProjectCarousel = () => {
  const carousel = document.getElementById('featured-projects');
  if (!carousel) return;

  const Splide = getGlobal('Splide');
  if (!Splide) return;

  // eslint-disable-next-line no-new
  new Splide('#featured-projects', {
    type: 'loop',
    perPage: 1,
    perMove: 1,
    gap: '2rem',
    autoplay: true,
    interval: 5000,
    pauseOnHover: true,
    arrows: true,
    pagination: true,
    breakpoints: {
      768: {
        perPage: 1,
        gap: '1rem',
      },
    },
  }).mount();
};

const initProjectFiltering = () => {
  const searchInput = document.getElementById('project-search');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('#projects-grid .project-card');

  if (!searchInput || !filterButtons.length || !projectCards.length) return;

  let currentFilter = 'all';

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      currentFilter = button.dataset.filter;
      filterProjects();
    });
  });

  const debouncedSearch = debounce(() => {
    filterProjects();
  }, 300);

  searchInput.addEventListener('input', debouncedSearch);

  function filterProjects() {
    const searchTerm = searchInput.value.toLowerCase();

    projectCards.forEach((card) => {
      const category = card.dataset.category;
      const title = card.dataset.title.toLowerCase();

      const matchesFilter = currentFilter === 'all' || category === currentFilter;
      const matchesSearch = searchTerm === '' || title.includes(searchTerm);

      if (matchesFilter && matchesSearch) {
        card.classList.remove('hidden');
        const anime = safeAnime();
        if (anime) {
          anime({
            targets: card,
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 300,
            easing: 'easeOutQuad',
          });
        }
      } else {
        card.classList.add('hidden');
        const anime = safeAnime();
        if (anime) {
          anime({
            targets: card,
            opacity: [1, 0],
            translateY: [0, -20],
            duration: 200,
            easing: 'easeInQuad',
          });
        }
      }
    });
  }
};

const initSkillsRadarChart = () => {
  const chartContainer = document.getElementById('radar-chart');
  if (!chartContainer) return;

  const echarts = getGlobal('echarts');
  if (!echarts) return;

  const chart = echarts.init(chartContainer);

  const option = {
    backgroundColor: 'transparent',
    radar: {
      indicator: [
        { name: 'Python', max: 100 },
        { name: 'JavaScript', max: 100 },
        { name: 'Machine Learning', max: 100 },
        { name: 'React', max: 100 },
        { name: 'Node.js', max: 100 },
        { name: 'Databases', max: 100 },
        { name: 'AI/ML', max: 100 },
        { name: 'Web Development', max: 100 },
      ],
      shape: 'polygon',
      splitNumber: 4,
      axisName: {
        color: '#f8fafc',
        fontSize: 12,
        fontFamily: 'Inter',
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(59, 130, 246, 0.2)',
        },
      },
      splitArea: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(59, 130, 246, 0.3)',
        },
      },
    },
    series: [
      {
        name: 'Skills',
        type: 'radar',
        data: [
          {
            value: [95, 90, 90, 90, 85, 80, 90, 90],
            name: 'Current Skills',
            areaStyle: {
              color: 'rgba(59, 130, 246, 0.2)',
            },
            lineStyle: {
              color: '#3b82f6',
              width: 2,
            },
            itemStyle: {
              color: '#3b82f6',
              borderColor: '#1e293b',
              borderWidth: 2,
            },
          },
        ],
        animationDuration: 2000,
        animationEasing: 'cubicOut',
      },
    ],
  };

  chart.setOption(option);

  window.addEventListener('resize', () => {
    chart.resize();
  });
};

const initSkillsProgressBars = () => {
  const progressBars = document.querySelectorAll('.progress-fill');
  if (!progressBars.length) return;

  const progressObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const width = entry.target.style.width;
          entry.target.style.width = '0%';
          const anime = safeAnime();
          if (anime) {
            anime({
              targets: entry.target,
              width,
              duration: 1500,
              easing: 'easeOutQuad',
              delay: 200,
            });
          } else {
            entry.target.style.width = width;
          }
        }
      });
    },
    { threshold: 0.5 }
  );

  progressBars.forEach((bar) => progressObserver.observe(bar));
};

const initMobileMenu = () => {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  if (!mobileMenuBtn) return;

  mobileMenuBtn.addEventListener('click', () => {
    alert('Mobile menu functionality - can be expanded with a dropdown menu');
  });
};

const openModal = (modalId) => {
  const modal = document.getElementById(`modal-${modalId}`);
  if (!modal) return;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Hide the navbar when modal is open
  const navbar = document.getElementById('navbar-container');
  if (navbar) {
    navbar.style.opacity = '0';
    navbar.style.pointerEvents = 'none';
    navbar.style.transition = 'opacity 0.3s ease';
  }

  const modalContent = modal.querySelector('.modal-content');
  const anime = safeAnime();
  if (anime && modalContent) {
    anime({
      targets: modalContent,
      scale: [0.8, 1],
      opacity: [0, 1],
      duration: 300,
      easing: 'easeOutQuad',
    });
  }
};

const closeModal = (modalId) => {
  const modal = document.getElementById(`modal-${modalId}`);
  if (!modal) return;

  const modalContent = modal.querySelector('.modal-content');
  const anime = safeAnime();

  // Show the navbar again when modal closes
  const showNavbar = () => {
    const navbar = document.getElementById('navbar-container');
    if (navbar) {
      navbar.style.opacity = '1';
      navbar.style.pointerEvents = 'auto';
    }
  };

  if (anime && modalContent) {
    anime({
      targets: modalContent,
      scale: [1, 0.8],
      opacity: [1, 0],
      duration: 200,
      easing: 'easeInQuad',
      complete: () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        showNavbar();
      },
    });
  } else {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    showNavbar();
  }
};

const initModalListeners = () => {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      const modalId = e.target.id.replace('modal-', '');
      closeModal(modalId);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const activeModal = document.querySelector('.modal.active');
      if (activeModal) {
        const modalId = activeModal.id.replace('modal-', '');
        closeModal(modalId);
      }
    }
  });
};

const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId) return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
};

const initCertLinks = async () => {
  try {
    const res = await fetch('cert-links.json');
    if (!res.ok) return;
    const links = await res.json();

    document.querySelectorAll('[data-cert]').forEach((a) => {
      const key = a.getAttribute('data-cert');
      if (links[key]) {
        a.setAttribute('href', links[key]);
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener noreferrer');
      }
    });
  } catch (e) {
    console.warn('cert-links.json not loaded:', e);
  }
};

const initLazyLoading = () => {
  const images = document.querySelectorAll('img[data-src]');
  if (!images.length) return;

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
};

const initScrollSpy = () => {
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  if (!navLinks.length) return;

  const sections = navLinks
    .map((link) => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return null;
      const section = document.querySelector(href);
      return section ? { link, section } : null;
    })
    .filter(Boolean);

  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((nav) => nav.classList.remove('active'));
          const match = sections.find((item) => item.section === entry.target);
          if (match) match.link.classList.add('active');
        }
      });
    },
    {
      threshold: 0.4,
    }
  );

  sections.forEach((item) => observer.observe(item.section));
};

export const initPortfolio = () => {
  initScrollReveal();
  initTypewriter();
  initProjectCarousel();
  initProjectFiltering();
  initSkillsRadarChart();
  initSkillsProgressBars();
  initMobileMenu();
  initSmoothScroll();
  initModalListeners();
  initScrollSpy();
  initLazyLoading();
  initCertLinks();

  window.addEventListener(
    'resize',
    debounce(() => {
      adjustHeroPadding();
    }, 150)
  );

  window.addEventListener('beforeunload', () => {
    document.body.style.opacity = '0.7';
  });

  window.addEventListener('error', (e) => {
    console.warn('Portfolio warning:', e.message);
  });

  console.log("%c👋 Hello! Welcome to Mevin Jose's Portfolio", 'color: #3b82f6; font-size: 16px; font-weight: bold;');
  console.log('%cBuilt with modern web technologies and lots of ☕', 'color: #64748b; font-size: 12px;');
  console.log('%cFeel free to explore the code and reach out for collaboration!', 'color: #10b981; font-size: 12px;');

  window.openModal = openModal;
  window.closeModal = closeModal;
};

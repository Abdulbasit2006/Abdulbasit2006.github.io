/**
 * Abdul Basit — Personal Site
 * main.js
 *
 * HOW TO UPDATE YOUR SITE
 * ───────────────────────
 * Everything you'll ever need to change lives in the SITE_CONFIG object below.
 * Edit that object. The render functions handle the rest automatically.
 *
 * To add a project  → push an object into SITE_CONFIG.projects
 * To add a blog post → push an object into SITE_CONFIG.posts
 * To change your stack → edit SITE_CONFIG.stack
 * To change contact links → edit SITE_CONFIG.contact.links
 */

'use strict';

/* ═══════════════════════════════════════════════════════════════════
   SITE CONFIG — edit this, nothing else
   ═══════════════════════════════════════════════════════════════════ */

const SITE_CONFIG = {

  hero: {
    name:    'Abdul\nBasit.',
    tagline: `Systems software engineer. I write <em>C++ and embedded firmware</em>,
              break things at the metal level, and build tools that matter.
              Oxford Brookes CS — targeting HFT and low-level roles.`,
    ctas: [
      { label: './projects', href: '#projects',                           ghost: false },
      { label: 'github',     href: 'https://github.com/Abdulbasit2006',   ghost: true,  external: true },
      { label: 'get in touch', href: '#contact',                          ghost: true  },
    ],
    stats: [
      { label: 'currently', value: '<span class="hi">▶</span> RP Pico 2W embedded dev' },
      { label: 'focus',     value: 'C++ · bare metal · HFT' },
      { label: 'location',  value: 'Oxford, UK' },
    ],
  },

  nav: [
    { label: 'about',   href: '#about'    },
    { label: 'work',    href: '#projects' },
    { label: 'writing', href: '#writing'  },
    { label: 'contact', href: '#contact'  },
  ],

  about: {
    paragraphs: [
      `I'm a second-year CS student who cares about the hardware underneath.
       Most of my serious work lives at the systems level — memory layout,
       cache behaviour, bare-metal firmware, latency-sensitive design.
       That's where the interesting problems are.`,

      `I'm working through a self-directed embedded curriculum on a
       Raspberry Pi Pico 2W, building a structured path from Wi-Fi scanning
       to fault injection and hardware security. On the software side I've been
       deep in C++ — OOP, hash tables, network protocol simulators.`,

      `Interested in HFT systems, embedded security, and anything that requires
       understanding the machine at a level most people don't bother with.
       I read source code the way other people read documentation.`,
    ],
  },

  // skill: proficiency 0–100 (controls bar width)
  stack: [
    { skill: 'C++17/20',      proficiency: 88 },
    { skill: 'C / bare metal',proficiency: 75 },
    { skill: 'Python',        proficiency: 70 },
    { skill: 'Linux / CMake', proficiency: 80 },
    { skill: 'Pico SDK / FW', proficiency: 60 },
    { skill: 'GDB / Valgrind',proficiency: 65 },
  ],

  projects: [
    {
      name:  'PFS DHT / Chord Simulator',
      desc:  `Distributed hash table implementing the Chord protocol with a custom
              BigInt for 160-bit SHA-1 node IDs. Consistent hashing, finger tables,
              and ring-topology lookups — all from scratch in C++.`,
      tags:  [
        { label: 'C++', hi: true }, { label: 'networking' },
        { label: 'distributed systems' }, { label: 'algorithms' },
      ],
      href:  'https://github.com/Abdulbasit2006',
      external: true,
    },
    {
      name:  'Pico 2W Embedded Curriculum',
      desc:  `Self-directed embedded track on the RP2350. Starting with Wi-Fi scanning
              via CYW43439, progressing toward fault injection and hardware security.
              Toolchain: Pico SDK, CMake, OpenOCD on Ubuntu.`,
      tags:  [
        { label: 'C', hi: true }, { label: 'embedded', hi: true },
        { label: 'RP2350' }, { label: 'bare metal' }, { label: 'hardware security' },
      ],
      href:  'https://github.com/Abdulbasit2006',
      external: true,
    },
    {
      name:  'Places of the World — C++ OOP App',
      desc:  `Geospatial search using haversine distance calculations across a
              linked-list backed store. Clean OOP, file I/O, custom iterators.`,
      tags:  [
        { label: 'C++', hi: true }, { label: 'OOP' }, { label: 'data structures' },
      ],
      href:  'https://github.com/Abdulbasit2006',
      external: true,
    },
    {
      name:  'Hash Table — Open Addressing & Chaining',
      desc:  `From-scratch hash table with quadratic probing and separate chaining.
              Written to understand the trade-offs, not just to pass the assignment.`,
      tags:  [
        { label: 'C++', hi: true }, { label: 'data structures' }, { label: 'algorithms' },
      ],
      href:  'https://github.com/Abdulbasit2006',
      external: true,
    },
    {
      name:  'Debate Forum — Flask / SQLite',
      desc:  `Full-stack app with AJAX, nested threaded replies, typed claim relationships,
              and a custom debate-graph schema. Functional, fast, no bloat.`,
      tags:  [
        { label: 'Python' }, { label: 'Flask' }, { label: 'SQLite' }, { label: 'AJAX' },
      ],
      href:  'https://github.com/Abdulbasit2006',
      external: true,
    },
  ],

  // Set href to the actual post URL when you publish one
  posts: [
    {
      date:  '2025-06',
      title: 'How the CYW43439 works: Wi-Fi on a microcontroller without an OS',
      tag:   'embedded',
      href:  '#',
    },
    {
      date:  '2025-05',
      title: 'Writing a BigInt from scratch for consistent hashing',
      tag:   'C++',
      href:  '#',
    },
    {
      date:  '2025-04',
      title: 'Quadratic probing vs chaining: when does it actually matter?',
      tag:   'systems',
      href:  '#',
    },
    {
      date:  '2025-03',
      title: 'Getting into HFT from a UK university — what they don\'t tell you',
      tag:   'career',
      href:  '#',
    },
    {
      date:  '2025-02',
      title: 'USB permissions on Ubuntu: a stupid problem with an obvious fix',
      tag:   'linux',
      href:  '#',
    },
  ],

  contact: {
    links: [
      { icon: '⌥', label: 'github.com/Abdulbasit2006', href: 'https://github.com/Abdulbasit2006', external: true },
      { icon: '@', label: 'hello@abdulbasit.dev',       href: 'mailto:hello@abdulbasit.dev' },
      { icon: '↗', label: 'linkedin',                   href: 'https://linkedin.com/in/abdulbasit', external: true },
      { icon: '#', label: 'CV — available on request',  href: '#' },
    ],
    note: `
      <p>Open to <strong>graduate roles</strong> in C++ systems engineering,
         HFT, or embedded software — UK-based, starting summer 2026.</p>
      <p>I respond to emails that contain something interesting.
         Cold recruiter paste-jobs get filed directly.</p>
    `,
  },

};


/* ═══════════════════════════════════════════════════════════════════
   RENDER FUNCTIONS
   — you shouldn't need to touch anything below this line
   ═══════════════════════════════════════════════════════════════════ */

/**
 * Build a string of HTML attributes for external links.
 * @param {boolean} external
 * @returns {string}
 */
function externalAttrs(external) {
  return external ? 'target="_blank" rel="noopener noreferrer"' : '';
}

/** Render the nav links */
function renderNav() {
  const nav = document.querySelector('nav');
  nav.innerHTML = SITE_CONFIG.nav
    .map(({ label, href }) => `<a href="${href}">${label}</a>`)
    .join('');
}

/** Render the hero section */
function renderHero() {
  const { name, tagline, ctas, stats } = SITE_CONFIG.hero;

  // Name (supports \n line breaks)
  document.querySelector('#hero h1').innerHTML =
    name.replace(/\n/g, '<br/>');

  // Tagline
  document.querySelector('#hero .tagline').innerHTML = tagline;

  // CTA buttons
  document.querySelector('.hero-links').innerHTML = ctas
    .map(({ label, href, ghost, external }) => `
      <a class="btn ${ghost ? 'btn--ghost' : ''}" href="${href}" ${externalAttrs(external)}>
        ${label}
      </a>
    `).join('');

  // Stats
  document.querySelector('.hero-stats').innerHTML = stats
    .map(({ label, value }) => `
      <div>
        <p class="stat-label">${label}</p>
        <p class="stat-value">${value}</p>
      </div>
    `).join('');
}

/** Render the about section */
function renderAbout() {
  // Paragraphs
  document.querySelector('.about-text').innerHTML =
    SITE_CONFIG.about.paragraphs
      .map(p => `<p>${p}</p>`)
      .join('');

  // Stack bars
  document.querySelector('.stack-list').innerHTML =
    SITE_CONFIG.stack
      .map(({ skill, proficiency }) => `
        <li class="stack-item">
          <span>${skill}</span>
          <div class="stack-bar" aria-label="${proficiency}% proficiency">
            <div class="stack-bar-fill" style="width: ${proficiency}%"></div>
          </div>
        </li>
      `).join('');
}

/** Render the projects list */
function renderProjects() {
  document.querySelector('.project-list').innerHTML =
    SITE_CONFIG.projects
      .map(({ name, desc, tags, href, external }) => `
        <li>
          <a class="project-item" href="${href}" ${externalAttrs(external)}>
            <div class="project-item-inner">
              <div>
                <p class="project-name">${name}</p>
                <p class="project-desc">${desc}</p>
                <div class="project-tags">
                  ${tags.map(({ label, hi }) =>
                    `<span class="tag ${hi ? 'tag--hi' : ''}">${label}</span>`
                  ).join('')}
                </div>
              </div>
              <span class="project-arrow" aria-hidden="true">↗</span>
            </div>
          </a>
        </li>
      `).join('');
}

/** Render the blog post list */
function renderPosts() {
  document.querySelector('.blog-list').innerHTML =
    SITE_CONFIG.posts
      .map(({ date, title, tag, href }) => `
        <li>
          <a class="blog-item" href="${href}">
            <span class="blog-date">${date}</span>
            <span class="blog-title">
              ${title}
              <span class="blog-tag">${tag}</span>
            </span>
          </a>
        </li>
      `).join('');
}

/** Render the contact section */
function renderContact() {
  const { links, note } = SITE_CONFIG.contact;

  document.querySelector('.contact-links').innerHTML = links
    .map(({ icon, label, href, external }) => `
      <li>
        <a class="contact-link" href="${href}" ${externalAttrs(external)}>
          <span class="contact-icon" aria-hidden="true">${icon}</span>
          ${label}
        </a>
      </li>
    `).join('');

  document.querySelector('.contact-note').innerHTML = note;
}

/** Initialise the custom cursor */
function initCursor() {
  const cursor = document.getElementById('cursor');
  let rafId;

  document.addEventListener('mousemove', ({ clientX, clientY }) => {
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      cursor.style.left = `${clientX}px`;
      cursor.style.top  = `${clientY}px`;
    });
  });

  // Pause blink while moving; resume on idle
  let idleTimer;
  document.addEventListener('mousemove', () => {
    cursor.style.animationPlayState = 'paused';
    cursor.style.opacity = '1';
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
      cursor.style.animationPlayState = 'running';
    }, 800);
  });

  // Hide cursor when it leaves the window
  document.addEventListener('mouseleave', () => { cursor.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { cursor.style.opacity = '1'; });
}

/** Highlight active nav link based on scroll position */
function initScrollSpy() {
  const sections = document.querySelectorAll('main section[id]');
  const navLinks  = document.querySelectorAll('nav a');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;
        navLinks.forEach((link) => {
          const active = link.getAttribute('href') === `#${target.id}`;
          link.setAttribute('aria-current', active ? 'true' : 'false');
        });
      });
    },
    { threshold: 0.45 }
  );

  sections.forEach((s) => observer.observe(s));
}

/** Entry point */
function init() {
  renderNav();
  renderHero();
  renderAbout();
  renderProjects();
  renderPosts();
  renderContact();
  initCursor();
  initScrollSpy();
}

// Run after DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Shared header/footer rendering and utilities

// ── Theme icons ───────────────────────────────────────────────────────────────
var THEME_TOGGLE_ICONS = '\
  <svg class="icon-moon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">\
    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>\
  </svg>\
  <svg class="icon-sun" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">\
    <circle cx="12" cy="12" r="5"/>\
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>\
  </svg>';

// ── Inline brand logo (uses currentColor so the "Gutschein" word adapts to context) ──
function brandLogoSVG(extraClass) {
  var cls = 'h-8 sm:h-9 w-auto site-logo transition-transform group-hover:scale-105 ' + (extraClass || '');
  return '\
  <svg class="' + cls + '" viewBox="0 0 348 56" fill="none" aria-label="Gutschein Express" role="img">\
    <defs>\
      <linearGradient id="ge-grad" x1="0" y1="0" x2="1" y2="0">\
        <stop offset="0%" stop-color="#5ee7a8"/>\
        <stop offset="50%" stop-color="#38bdf8"/>\
        <stop offset="100%" stop-color="#6366f1"/>\
      </linearGradient>\
      <linearGradient id="ge-grad-streak" x1="0" y1="0" x2="1" y2="0">\
        <stop offset="0%" stop-color="#5ee7a8" stop-opacity="0.15"/>\
        <stop offset="40%" stop-color="#5ee7a8" stop-opacity="0.6"/>\
        <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.9"/>\
      </linearGradient>\
    </defs>\
    <text x="0" y="41" font-family="Inter, system-ui, -apple-system, sans-serif" font-weight="800" font-style="italic" font-size="36" fill="currentColor" letter-spacing="-0.5">Gutschein</text>\
    <g opacity="0.55">\
      <rect x="188" y="12" width="22" height="3.2" rx="1.6" fill="url(#ge-grad-streak)"/>\
      <rect x="181" y="18" width="30" height="3.2" rx="1.6" fill="url(#ge-grad-streak)"/>\
      <rect x="186" y="24" width="26" height="3.2" rx="1.6" fill="url(#ge-grad-streak)"/>\
      <rect x="178" y="30" width="34" height="3.2" rx="1.6" fill="url(#ge-grad-streak)"/>\
      <rect x="184" y="36" width="24" height="3.2" rx="1.6" fill="url(#ge-grad-streak)"/>\
      <rect x="190" y="42" width="18" height="3.2" rx="1.6" fill="url(#ge-grad-streak)"/>\
    </g>\
    <g opacity="0.3">\
      <rect x="172" y="15" width="12" height="2.4" rx="1.2" fill="url(#ge-grad-streak)"/>\
      <rect x="168" y="21" width="16" height="2.4" rx="1.2" fill="url(#ge-grad-streak)"/>\
      <rect x="174" y="33" width="10" height="2.4" rx="1.2" fill="url(#ge-grad-streak)"/>\
      <rect x="170" y="39" width="14" height="2.4" rx="1.2" fill="url(#ge-grad-streak)"/>\
    </g>\
    <rect x="204" y="8" width="138" height="42" rx="10" fill="url(#ge-grad)"/>\
    <text x="224" y="38" font-family="Inter, system-ui, -apple-system, sans-serif" font-weight="800" font-style="italic" font-size="30" fill="white" letter-spacing="-0.3">Express</text>\
  </svg>';
}

function renderNavbar(activePage) {
  return `
  <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 navbar-scrolled">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 sm:h-20">
        <a href="index.html" class="flex items-center group" aria-label="Gutschein Express — Startseite">
          ${brandLogoSVG()}
        </a>
        <div class="hidden md:flex items-center gap-8">
          <a href="katalog.html" class="text-sm font-medium ${activePage === 'katalog' ? 'text-brand-600' : 'text-gray-600 hover:text-gray-900'} transition-colors">Alle Gutscheine</a>
          <a href="index.html#how-it-works" class="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">So funktioniert's</a>
          <a href="index.html#reviews" class="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Bewertungen</a>
          <a href="index.html#faq" class="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">FAQ</a>
        </div>
        <div class="flex items-center gap-3">
          <button onclick="toggleTheme()" class="theme-toggle-btn" aria-label="Nacht-/Tagmodus umschalten">${THEME_TOGGLE_ICONS}</button>
          <a href="katalog.html" class="hidden sm:inline-flex items-center gap-2 btn-ge text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all btn-press">
            Jetzt sparen
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </a>
          <button id="mobile-menu-btn" class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </div>
    </div>
    <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-100 shadow-lg">
      <div class="px-4 py-4 space-y-2">
        <a href="katalog.html" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">Alle Gutscheine</a>
        <a href="index.html#how-it-works" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">So funktioniert's</a>
        <a href="index.html#reviews" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">Bewertungen</a>
        <a href="index.html#faq" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">FAQ</a>
        <a href="katalog.html" class="block px-4 py-3 rounded-xl text-sm font-semibold text-white btn-ge text-center mt-2">Jetzt sparen</a>
      </div>
    </div>
  </nav>`;
}

// ── Theme helpers ─────────────────────────────────────────────────────────────
function initTheme() {
  var saved = localStorage.getItem('theme');
  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (saved === 'dark' || (!saved && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

function toggleTheme() {
  var isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function renderFooter() {
  return `
  <footer class="bg-gray-900 text-gray-400 pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div class="lg:col-span-1">
          <a href="index.html" class="flex items-center mb-4 site-logo-footer" aria-label="Gutschein Express — Startseite">
            ${brandLogoSVG('site-logo-footer-svg')}
          </a>
          <p class="text-sm leading-relaxed mb-4">Digitale Gutscheine zu Top-Preisen. Sofort per E-Mail &mdash; 100% sicher.</p>
          <div class="flex gap-0.5">
            <span class="star text-sm">&#9733;</span><span class="star text-sm">&#9733;</span><span class="star text-sm">&#9733;</span><span class="star text-sm">&#9733;</span><span class="star text-sm">&#9733;</span>
            <span class="text-xs ml-1">4.9/5 (200+ Bewertungen)</span>
          </div>
        </div>
        <div>
          <h4 class="text-white font-semibold text-sm mb-4">Top-Marken</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="katalog.html?brand=amazon" class="hover:text-white transition-colors">Amazon</a></li>
            <li><a href="katalog.html?brand=mediamarkt" class="hover:text-white transition-colors">MediaMarkt</a></li>
            <li><a href="katalog.html?brand=ikea" class="hover:text-white transition-colors">IKEA</a></li>
            <li><a href="katalog.html?brand=airbnb" class="hover:text-white transition-colors">Airbnb</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-semibold text-sm mb-4">Information</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="ueber-uns.html" class="hover:text-white transition-colors">&Uuml;ber uns</a></li>
            <li><a href="index.html#how-it-works" class="hover:text-white transition-colors">So funktioniert's</a></li>
            <li><a href="index.html#faq" class="hover:text-white transition-colors">FAQ</a></li>
            <li><a href="kontakt.html" class="hover:text-white transition-colors">Kontakt</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-semibold text-sm mb-4">Rechtliches</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="impressum.html" class="hover:text-white transition-colors">Impressum</a></li>
            <li><a href="datenschutz.html" class="hover:text-white transition-colors">Datenschutz</a></li>
            <li><a href="agb.html" class="hover:text-white transition-colors">AGB</a></li>
            <li><a href="widerruf.html" class="hover:text-white transition-colors">Widerrufsbelehrung</a></li>
          </ul>
        </div>
      </div>
      <div class="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-sm">&copy; 2025 Gutschein.Express. Alle Rechte vorbehalten.</p>
        <div class="flex items-center gap-4 text-sm">
          <span class="flex items-center gap-1.5">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            SSL gesichert
          </span>
          <span>PayPal</span>
          <span>Visa</span>
          <span>Mastercard</span>
        </div>
      </div>
    </div>
  </footer>`;
}

function initMobileMenu() {
  var btn = document.getElementById('mobile-menu-btn');
  var menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', function() { menu.classList.toggle('hidden'); });
    menu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() { menu.classList.add('hidden'); });
    });
  }
}

function initRevealAnimations() {
  var revealElements = document.querySelectorAll('.reveal');
  var revealObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  revealElements.forEach(function(el) { revealObserver.observe(el); });
}

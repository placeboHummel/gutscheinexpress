// Shared header/footer rendering and utilities

function renderNavbar(activePage) {
  return `
  <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 navbar-scrolled">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 sm:h-20">
        <a href="index.html" class="flex items-center gap-2 group">
          <div class="w-9 h-9 bg-brand-500 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110">
            <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span class="text-lg font-bold tracking-tight">Gutschein<span class="text-brand-500">.Express</span></span>
        </a>
        <div class="hidden md:flex items-center gap-8">
          <a href="katalog.html" class="text-sm font-medium ${activePage === 'katalog' ? 'text-brand-600' : 'text-gray-600 hover:text-gray-900'} transition-colors">Alle Gutscheine</a>
          <a href="index.html#how-it-works" class="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">So funktioniert's</a>
          <a href="index.html#reviews" class="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Bewertungen</a>
          <a href="index.html#faq" class="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">FAQ</a>
        </div>
        <div class="flex items-center gap-3">
          <a href="katalog.html" class="hidden sm:inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all btn-press shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40">
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
        <a href="katalog.html" class="block px-4 py-3 rounded-xl text-sm font-semibold text-white bg-brand-500 text-center mt-2">Jetzt sparen</a>
      </div>
    </div>
  </nav>`;
}

function renderFooter() {
  return `
  <footer class="bg-gray-900 text-gray-400 pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div class="lg:col-span-1">
          <a href="index.html" class="flex items-center gap-2 mb-4">
            <div class="w-9 h-9 bg-brand-500 rounded-xl flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <span class="text-lg font-bold text-white">Gutschein<span class="text-brand-400">.Express</span></span>
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
            <li><a href="index.html" class="hover:text-white transition-colors">&Uuml;ber uns</a></li>
            <li><a href="index.html#how-it-works" class="hover:text-white transition-colors">So funktioniert's</a></li>
            <li><a href="index.html#faq" class="hover:text-white transition-colors">FAQ</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Kontakt</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-semibold text-sm mb-4">Rechtliches</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-white transition-colors">Impressum</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Datenschutz</a></li>
            <li><a href="#" class="hover:text-white transition-colors">AGB</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Widerrufsbelehrung</a></li>
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

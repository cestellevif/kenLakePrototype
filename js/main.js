/* =============================================================
   LCC — Lakemoor Community Club
   Shared JavaScript
   ============================================================= */

// ─── Shared Nav HTML ──────────────────────────────────────────
const NAV_HTML = `
<header class="site-header">
  <nav class="navbar">
    <div class="nav-brand">
      <a href="/index.html">
        <span class="brand-name">LCC</span>
        <span class="brand-sub">Lakemoor Community Club</span>
      </a>
    </div>
    <button class="hamburger" aria-label="Toggle menu" aria-expanded="false">&#9776;</button>
    <ul class="nav-links" id="nav-links">
      <li><a href="/index.html">Home</a></li>

      <li class="has-dropdown">
        <a href="/about.html">About &#9660;</a>
        <ul class="dropdown">
          <li><a href="/about.html#board">Board Members</a></li>
          <li><a href="/about.html#candidates">Board Candidates</a></li>
          <li><a href="/about.html#mission">HOA Mission</a></li>
          <li><a href="/about.html#flora">Flora, Fauna &amp; Yard Care</a></li>
          <li><a href="/about.html#security">Security</a></li>
        </ul>
      </li>

      <li class="has-dropdown">
        <a href="#">Committees &#9660;</a>
        <ul class="dropdown">
          <li><a href="/committees/acc.html">Architectural (ACC)</a></li>
          <li><a href="/committees/care.html">Care</a></li>
          <li><a href="/committees/code-enforcement.html">Code Enforcement</a></li>
          <li><a href="/committees/compliance.html">Compliance</a></li>
          <li><a href="/committees/events.html">Events</a></li>
          <li><a href="/committees/finance.html">Finance</a></li>
          <li><a href="/committees/gardens.html">Gardens</a></li>
          <li><a href="/committees/geese.html">Geese</a></li>
          <li><a href="/committees/governance.html">Governance</a></li>
          <li><a href="/committees/technology.html">Technology</a></li>
          <li><a href="/committees/urban-forest.html">Urban Forest</a></li>
        </ul>
      </li>

      <li><a href="/amenities.html">Amenities</a></li>
      <li><a href="/events.html">Events</a></li>

      <li class="has-dropdown">
        <a href="#">Government &#9660;</a>
        <ul class="dropdown">
          <li><a href="#">Board Meeting &amp; Zoom</a></li>
          <li><a href="#">Meeting Minutes</a></li>
          <li><a href="#">Bylaws</a></li>
          <li><a href="#">Covenants</a></li>
          <li><a href="#">Policy</a></li>
          <li><a href="#">Financials</a></li>
          <li><a href="/contact.html">Contact the Board</a></li>
        </ul>
      </li>

      <li class="has-dropdown">
        <a href="#">Actions &#9660;</a>
        <ul class="dropdown">
          <li><a href="/actions/new-neighbor.html">New Neighbor Forms</a></li>
          <li><a href="/actions/update-info.html">Update Neighbor Forms</a></li>
          <li><a href="/actions/appeal.html">Appeal Forms</a></li>
          <li><a href="/actions/architectural-review.html">Architectural Review</a></li>
          <li><a href="/actions/reserve-garden.html">Reserve a Garden Plot</a></li>
          <li><a href="/actions/reserve-park.html">Reserve a Park</a></li>
          <li><a href="/actions/volunteer.html">Get Engaged &ndash; Volunteer</a></li>
        </ul>
      </li>

      <li class="has-dropdown">
        <a href="/news.html">News &#9660;</a>
        <ul class="dropdown">
          <li><a href="/news.html#announcements">Announcements</a></li>
          <li><a href="/news.html#classifieds">Classifieds</a></li>
          <li><a href="/news.html#referrals">Recommendations &amp; Referrals</a></li>
          <li><a href="/news.html#newsletters">Full Newsletters</a></li>
        </ul>
      </li>

      <li><a href="/contact.html">Contact</a></li>
      <li class="vis-portal"><a href="#" class="btn-portal">VIS Portal</a></li>
    </ul>
  </nav>
</header>`;

// ─── Shared Footer HTML ───────────────────────────────────────
const FOOTER_HTML = `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="/index.html">
          <span class="brand-name">LCC</span>
          <span class="brand-sub" style="display:block">Lakemoor Community Club</span>
        </a>
        <p>Tucked away in the heart of West Olympia, the Lakemoor Community at Ken Lake is an urban forest community organized around a private natural lake.</p>
      </div>
      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/index.html">Home</a></li>
          <li><a href="/about.html">About</a></li>
          <li><a href="/events.html">Events</a></li>
          <li><a href="/amenities.html">Amenities</a></li>
          <li><a href="/news.html">News</a></li>
          <li><a href="/contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Actions</h4>
        <ul>
          <li><a href="/actions/new-neighbor.html">New Neighbor</a></li>
          <li><a href="/actions/reserve-park.html">Reserve a Park</a></li>
          <li><a href="/actions/reserve-garden.html">Reserve a Garden</a></li>
          <li><a href="/actions/volunteer.html">Volunteer</a></li>
          <li><a href="/actions/architectural-review.html">Architectural Review</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Government</h4>
        <ul>
          <li><a href="#">Board Meeting</a></li>
          <li><a href="#">Meeting Minutes</a></li>
          <li><a href="#">Bylaws</a></li>
          <li><a href="#">Covenants</a></li>
          <li><a href="#">Financials</a></li>
          <li><a href="#" style="color:var(--gold); font-weight:600">VIS Portal</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; 2025 Lakemoor Community Club at Ken Lake. All rights reserved.</span>
      <span>
        <a href="#">Privacy Policy</a> &nbsp;&middot;&nbsp;
        <a href="#">Terms of Use</a> &nbsp;&middot;&nbsp;
        <a href="/contact.html">Contact</a>
      </span>
    </div>
  </div>
</footer>`;

// ─── Inject Nav & Footer ──────────────────────────────────────
function injectSharedElements() {
  // Skip nav link (accessibility)
  document.body.insertAdjacentHTML('afterbegin', '<a href="#main-content" class="skip-nav">Skip to main content</a>');

  // Inject nav before <main> or at top of body
  const main = document.querySelector('main');
  if (main) {
    main.id = main.id || 'main-content';
    main.insertAdjacentHTML('beforebegin', NAV_HTML);
  } else {
    document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  }

  // Inject footer after <main> or at end of body
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  // Fix relative hrefs so they work from subdirectories and file:// protocol
  fixHrefs();

  // Initialize interactions
  initHamburger();
  initDropdowns();
  markActiveNav();
}

// ─── Fix hrefs for subdirectory pages ────────────────────────
// Converts absolute-style /path.html hrefs to relative paths based on page depth.
// Works for both file:// and http:// protocols.
function fixHrefs() {
  const pathname = window.location.pathname.replace(/\\/g, '/');
  // Count directory segments (exclude the filename itself)
  const segments = pathname.split('/').filter(Boolean);
  // On file:// the path starts with a drive letter segment on Windows; find .html depth
  const htmlIndex = segments.findIndex(s => s.endsWith('.html'));
  const depth = htmlIndex >= 0 ? segments.slice(0, htmlIndex).length : segments.length;
  if (depth <= 0) return;
  const prefix = '../'.repeat(depth);
  document.querySelectorAll('.site-header a[href^="/"], .site-footer a[href^="/"]').forEach(a => {
    const href = a.getAttribute('href');
    if (href && href !== '/') {
      a.setAttribute('href', prefix + href.slice(1));
    }
  });
}

// ─── Hamburger Toggle ─────────────────────────────────────────
function initHamburger() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks  = document.querySelector('.nav-links');
  if (!hamburger || !navLinks) return;
  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open);
    hamburger.textContent = open ? '✕' : '☰';
  });
}

// ─── Dropdown (desktop hover handled by CSS, mobile: click) ──
function initDropdowns() {
  document.querySelectorAll('.has-dropdown').forEach(item => {
    const toggle = item.querySelector('a');
    // Mark toggle with ARIA
    toggle.setAttribute('aria-haspopup', 'true');
    toggle.setAttribute('aria-expanded', 'false');

    toggle.addEventListener('click', e => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const wasOpen = item.classList.contains('open');
        // Close all other open dropdowns
        document.querySelectorAll('.has-dropdown.open').forEach(d => {
          d.classList.remove('open');
          d.querySelector('a').setAttribute('aria-expanded', 'false');
        });
        if (!wasOpen) {
          item.classList.add('open');
          toggle.setAttribute('aria-expanded', 'true');
        }
      }
    });
  });

  // Close dropdowns when clicking outside; reset ARIA
  document.addEventListener('click', e => {
    if (!e.target.closest('.has-dropdown')) {
      document.querySelectorAll('.has-dropdown.open').forEach(d => {
        d.classList.remove('open');
        d.querySelector('a').setAttribute('aria-expanded', 'false');
      });
    }
  });
}

// ─── Highlight active nav item ────────────────────────────────
function markActiveNav() {
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links > li > a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && href !== '#' && href !== '/index.html') {
      if (path.includes(href.replace(/^\//, '').split('#')[0])) {
        a.closest('li').classList.add('active');
      }
    }
  });
}

// ─── Form Validation ──────────────────────────────────────────
function validateForm(formEl) {
  let valid = true;
  formEl.querySelectorAll('[required]').forEach(field => {
    const err = field.closest('.form-group')?.querySelector('.form-error');
    if (!field.value.trim()) {
      field.classList.add('error');
      if (err) err.classList.add('show');
      valid = false;
    } else {
      field.classList.remove('error');
      if (err) err.classList.remove('show');
    }
  });
  // Email check
  formEl.querySelectorAll('[type="email"]').forEach(field => {
    if (field.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
      field.classList.add('error');
      const err = field.closest('.form-group')?.querySelector('.form-error');
      if (err) { err.textContent = 'Please enter a valid email address.'; err.classList.add('show'); }
      valid = false;
    }
  });
  return valid;
}

function initForms() {
  document.querySelectorAll('form[data-lcc]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (validateForm(form)) {
        form.style.display = 'none';
        const success = form.parentElement.querySelector('.form-success');
        if (success) success.classList.add('show');
      }
    });
    // Live clear errors
    form.querySelectorAll('input, select, textarea').forEach(field => {
      field.addEventListener('input', () => {
        field.classList.remove('error');
        const err = field.closest('.form-group')?.querySelector('.form-error');
        if (err) err.classList.remove('show');
      });
    });
  });
}

// ─── Init ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  injectSharedElements();
  initForms();
});

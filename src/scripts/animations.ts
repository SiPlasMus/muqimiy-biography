import { animate, stagger, inView } from 'motion';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

function splitIntoWords(el: HTMLElement) {
  // Walks text nodes only; preserves nested elements (e.g. <span>) intact.
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
  const wrappers: HTMLElement[] = [];
  const queue: Text[] = [];
  let node: Node | null = walker.nextNode();
  while (node) {
    queue.push(node as Text);
    node = walker.nextNode();
  }
  for (const text of queue) {
    const parts = text.textContent?.split(/(\s+)/) ?? [];
    if (!parts.length) continue;
    const frag = document.createDocumentFragment();
    for (const part of parts) {
      if (!part) continue;
      if (/^\s+$/.test(part)) {
        frag.appendChild(document.createTextNode(part));
      } else {
        const span = document.createElement('span');
        span.className = 'word';
        span.style.display = 'inline-block';
        span.style.willChange = 'opacity, transform';
        span.textContent = part;
        frag.appendChild(span);
        wrappers.push(span);
      }
    }
    text.replaceWith(frag);
  }
  return wrappers;
}

function revealHeroH1() {
  const h1 = document.querySelector<HTMLElement>('[data-anim="hero-h1"]');
  if (!h1) return;
  if (prefersReducedMotion()) {
    h1.classList.add('revealed');
    return;
  }
  const words = splitIntoWords(h1);
  words.forEach((w) => {
    w.style.opacity = '0';
    w.style.transform = 'translateY(24px)';
  });
  h1.classList.add('revealed');
  animate(
    words,
    { opacity: [0, 1], y: [24, 0] },
    {
      duration: 0.7,
      delay: stagger(0.06, { startDelay: 0.1 }),
      ease: [0.2, 0.7, 0.2, 1],
    },
  );
}

function driftAccent() {
  if (prefersReducedMotion()) return;
  const accents = document.querySelectorAll<HTMLElement>('[data-anim="drift"]');
  accents.forEach((el) => {
    animate(
      el,
      { y: [0, -4, 0] },
      { duration: 4.8, repeat: Infinity, ease: 'easeInOut' },
    );
  });
}

function revealOnScroll() {
  const items = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (prefersReducedMotion()) {
    items.forEach((el) => el.classList.add('in'));
    return;
  }
  items.forEach((el) => {
    inView(el, () => {
      const delay = Number(el.dataset.revealDelay ?? 0);
      setTimeout(() => el.classList.add('in'), delay);
    });
  });
}

function bindDialogs() {
  const openTrigger = (trigger: HTMLElement, e: Event) => {
    const target = trigger.dataset.open!;
    const dlg = document.getElementById(target) as HTMLDialogElement | null;
    if (!dlg) return;
    e.preventDefault();
      // Pass per-card data via [data-poem-*] attributes
      const titleEl = dlg.querySelector<HTMLElement>('[data-slot="title"]');
      const kindEl = dlg.querySelector<HTMLElement>('[data-slot="kind"]');
      const linesEl = dlg.querySelector<HTMLElement>('[data-slot="lines"]');
      const noteEl = dlg.querySelector<HTMLElement>('[data-slot="note"]');
      if (titleEl && trigger.dataset.poemTitle) titleEl.textContent = trigger.dataset.poemTitle;
      if (kindEl && trigger.dataset.poemKind) kindEl.textContent = trigger.dataset.poemKind;
      if (linesEl && trigger.dataset.poemLines) {
        linesEl.innerHTML = '';
        for (const l of trigger.dataset.poemLines.split('\n')) {
          const d = document.createElement('div');
          d.className = 'modal-line';
          d.textContent = l;
          linesEl.appendChild(d);
        }
      }
    if (noteEl) noteEl.textContent = trigger.dataset.poemNote ?? '';
    dlg.showModal();
    document.body.style.overflow = 'hidden';
  };
  document.querySelectorAll<HTMLElement>('[data-open]').forEach((trigger) => {
    if (trigger.dataset.bound === '1') return;
    trigger.dataset.bound = '1';
    trigger.addEventListener('click', (e) => openTrigger(trigger, e));
    trigger.addEventListener('keydown', (e) => {
      if ((e as KeyboardEvent).key === 'Enter' || (e as KeyboardEvent).key === ' ') {
        openTrigger(trigger, e);
      }
    });
  });
  // Close buttons + backdrop click
  document.querySelectorAll<HTMLDialogElement>('dialog.app-dialog').forEach((dlg) => {
    if (dlg.dataset.bound === '1') return;
    dlg.dataset.bound = '1';
    dlg.addEventListener('close', () => {
      document.body.style.overflow = '';
    });
    dlg.addEventListener('click', (e) => {
      if (e.target === dlg) dlg.close();
    });
    dlg.querySelectorAll<HTMLElement>('[data-close]').forEach((btn) => {
      btn.addEventListener('click', () => dlg.close());
    });
  });
}

function bindMobileNav() {
  const toggle = document.getElementById('mobile-nav-toggle');
  const drawer = document.getElementById('mobile-nav-drawer');
  if (!toggle || !drawer) return;
  if (toggle.dataset.bound === '1') return;
  toggle.dataset.bound = '1';
  const close = () => {
    drawer.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };
  const open = () => {
    drawer.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };
  toggle.addEventListener('click', () => {
    drawer.classList.contains('open') ? close() : open();
  });
  drawer.addEventListener('click', (e) => {
    const t = e.target as HTMLElement;
    if (t.matches('[data-mobile-close]') || t === drawer) close();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) close();
  });
}

function bindLightbox() {
  const lb = document.getElementById('lightbox') as HTMLDialogElement | null;
  if (!lb) return;
  const captionEl = lb.querySelector<HTMLElement>('[data-slot="lightbox-caption"]');
  const kindEl = lb.querySelector<HTMLElement>('[data-slot="lightbox-kind"]');
  const noteEl = lb.querySelector<HTMLElement>('[data-slot="lightbox-note"]');
  const stageEl = lb.querySelector<HTMLElement>('[data-slot="lightbox-stage"]');

  const openLightbox = (trigger: HTMLElement, e: Event) => {
    e.preventDefault();
    if (captionEl) captionEl.textContent = trigger.dataset.title ?? '';
    if (kindEl) kindEl.textContent = trigger.dataset.kind ?? '';
    if (noteEl) noteEl.textContent = trigger.dataset.note ?? '';
    if (stageEl) {
      const thumb = trigger.querySelector('.thumb');
      if (thumb) {
        stageEl.innerHTML = '';
        const clone = thumb.cloneNode(true) as HTMLElement;
        clone.style.aspectRatio = 'auto';
        clone.style.height = '100%';
        clone.style.width = '100%';
        stageEl.appendChild(clone);
      }
    }
    lb.showModal();
    document.body.style.overflow = 'hidden';
  };
  document.querySelectorAll<HTMLElement>('[data-lightbox]').forEach((trigger) => {
    if (trigger.dataset.bound === '1') return;
    trigger.dataset.bound = '1';
    trigger.addEventListener('click', (e) => openLightbox(trigger, e));
    trigger.addEventListener('keydown', (e) => {
      const ke = e as KeyboardEvent;
      if (ke.key === 'Enter' || ke.key === ' ') openLightbox(trigger, e);
    });
  });
  lb.addEventListener('click', (e) => {
    if (e.target === lb) lb.close();
  });
  lb.addEventListener('close', () => {
    document.body.style.overflow = '';
  });
  lb.querySelectorAll<HTMLElement>('[data-close]').forEach((btn) => {
    btn.addEventListener('click', () => lb.close());
  });
}

function updateNavActive() {
  const path = location.pathname.replace(/\/$/, '') || '/';
  document
    .querySelectorAll<HTMLAnchorElement>('.site-nav .nav-link, .mobile-drawer .drawer-link')
    .forEach((a) => {
      const href = a.getAttribute('href')?.replace(/\/$/, '') || '/';
      a.classList.toggle('active', href === path);
    });
}

function run() {
  revealHeroH1();
  driftAccent();
  revealOnScroll();
  bindDialogs();
  bindMobileNav();
  bindLightbox();
  updateNavActive();
}

// Initial + after every page swap (View Transitions)
run();
document.addEventListener('astro:after-swap', run);
document.addEventListener('astro:page-load', run);

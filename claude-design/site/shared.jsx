// Shared module for Muqimiy site — Koshin (Buxoro) visual language.
// Palette, ornaments, Nav, Footer, ThemeProvider with dark/light, Tweaks panel.

const PALETTES = {
  light: {
    teal: '#0e3f44', tealDeep: '#072b30', tealMid: '#155057',
    saffron: '#d68b1f', saffronDeep: '#a86811',
    cream: '#f4ead4', creamDark: '#e6d8b4', creamSoft: '#faf3e0',
    pomegranate: '#a43a2c',
    text: '#0a2024', textLight: '#f4ead4',
    bg: '#f4ead4', panel: '#ffffff', muted: '#7d8a8c',
  },
  dark: {
    teal: '#0e3f44', tealDeep: '#03171a', tealMid: '#1a4f57',
    saffron: '#e8a23c', saffronDeep: '#d68b1f',
    cream: '#f4ead4', creamDark: '#2a3a3e', creamSoft: '#0a2024',
    pomegranate: '#cc5240',
    text: '#f4ead4', textLight: '#f4ead4',
    bg: '#03171a', panel: '#0a2226', muted: '#7d9498',
  },
};

const fontDisp = `'Playfair Display', Georgia, serif`;
const fontBody = `'Manrope', system-ui, sans-serif`;

const ThemeCtx = React.createContext({ mode: 'light', c: PALETTES.light, setMode: () => {} });

function useTheme() { return React.useContext(ThemeCtx); }

function ThemeProvider({ children }) {
  const [mode, setMode] = React.useState(() => {
    try { return localStorage.getItem('muqimiy-theme') || 'light'; } catch (e) { return 'light'; }
  });
  React.useEffect(() => {
    try { localStorage.setItem('muqimiy-theme', mode); } catch (e) {}
    document.body.style.background = PALETTES[mode].bg;
    document.body.style.color = PALETTES[mode].text;
  }, [mode]);
  const c = PALETTES[mode];
  return <ThemeCtx.Provider value={{ mode, c, setMode }}>{children}</ThemeCtx.Provider>;
}

// ── ORNAMENTS ────────────────────────────────────────────────
const Tile = ({ size = 80, color = '#d68b1f', opacity = 1, stroke = 1 }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" stroke={color} strokeWidth={stroke} opacity={opacity}>
    <polygon points="40,4 50,30 76,40 50,50 40,76 30,50 4,40 30,30" />
    <polygon points="40,4 50,30 76,40 50,50 40,76 30,50 4,40 30,30" transform="rotate(22.5 40 40)" />
    <circle cx="40" cy="40" r="6" />
  </svg>
);

const Star8 = ({ size = 40, color = 'currentColor', stroke = 1.2 }) => (
  <svg width={size} height={size} viewBox="-50 -50 100 100" fill="none" stroke={color} strokeWidth={stroke}>
    <polygon points="0,-44 12,-12 44,0 12,12 0,44 -12,12 -44,0 -12,-12" />
    <polygon points="-31,-31 31,-31 31,31 -31,31" transform="rotate(22.5)" />
  </svg>
);

const Medallion = ({ size = 200, color = 'currentColor', stroke = 1 }) => (
  <svg width={size} height={size} viewBox="-100 -100 200 200" fill="none" stroke={color} strokeWidth={stroke}>
    <circle r="92" /><circle r="78" /><circle r="58" />
    <g>{Array.from({ length: 12 }).map((_, i) => (
      <line key={i} x1="0" y1="58" x2="0" y2="92" transform={`rotate(${i * 30})`} />
    ))}</g>
    <g>{Array.from({ length: 8 }).map((_, i) => (
      <polygon key={i} points="0,-44 8,-8 44,0 8,8 0,44 -8,8 -44,0 -8,-8" transform={`rotate(${i * 45})`} opacity="0.5" />
    ))}</g>
    <polygon points="0,-32 9,-9 32,0 9,9 0,32 -9,9 -32,0 -9,-9" />
    <circle r="10" />
  </svg>
);

// Stylized portrait — turbaned poet with beard, in miniature style
const Portrait = ({ size = 340, palette }) => {
  const p = palette || { bg: '#1a4f57', skin: '#dca06a', beard: '#1a0d05', robe: '#a86811', turban: '#f4ead4', accent: '#a43a2c' };
  return (
    <svg width={size} height={size * 1.15} viewBox="0 0 240 280" style={{ display: 'block' }}>
      <rect width="240" height="280" fill={p.bg} />
      {/* Halo/medallion */}
      <circle cx="120" cy="100" r="78" fill="none" stroke={p.accent} strokeWidth="0.6" opacity="0.6" />
      <circle cx="120" cy="100" r="72" fill="none" stroke={p.turban} strokeWidth="0.4" opacity="0.4" />
      {/* Shoulders/robe */}
      <path d="M 30 280 Q 30 200, 80 180 L 160 180 Q 210 200, 210 280 Z" fill={p.robe} />
      <path d="M 80 180 L 120 230 L 160 180 Z" fill={p.turban} opacity="0.95" />
      <path d="M 110 230 L 120 280 L 130 230 Z" fill={p.accent} />
      {/* Neck */}
      <rect x="105" y="160" width="30" height="30" fill={p.skin} />
      {/* Face */}
      <ellipse cx="120" cy="118" rx="40" ry="48" fill={p.skin} />
      {/* Beard */}
      <path d="M 88 130 Q 88 175, 120 188 Q 152 175, 152 130 Q 152 158, 120 168 Q 88 158, 88 130 Z" fill={p.beard} />
      <path d="M 92 138 Q 100 175, 120 182 Q 140 175, 148 138" fill={p.beard} opacity="0.95" />
      {/* Mustache */}
      <path d="M 100 130 Q 110 138, 120 132 Q 130 138, 140 130" stroke={p.beard} strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Eyes */}
      <ellipse cx="106" cy="112" rx="5" ry="3" fill={p.beard} />
      <ellipse cx="134" cy="112" rx="5" ry="3" fill={p.beard} />
      <path d="M 96 105 Q 106 100, 116 105" stroke={p.beard} strokeWidth="1.4" fill="none" />
      <path d="M 124 105 Q 134 100, 144 105" stroke={p.beard} strokeWidth="1.4" fill="none" />
      {/* Nose */}
      <path d="M 120 114 Q 116 124, 118 128 Q 120 130, 122 128 Q 124 124, 120 114" stroke={p.beard} strokeWidth="1" fill="none" opacity="0.5" />
      {/* Turban */}
      <path d="M 65 90 Q 65 50, 120 48 Q 175 50, 175 90 Q 175 100, 168 102 L 72 102 Q 65 100, 65 90 Z" fill={p.turban} />
      <path d="M 72 85 Q 80 70, 120 68 Q 160 70, 168 85" stroke={p.accent} strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M 72 92 Q 90 78, 120 76 Q 150 78, 168 92" stroke={p.accent} strokeWidth="1" fill="none" opacity="0.3" />
      {/* Turban jewel */}
      <circle cx="120" cy="78" r="5" fill={p.accent} />
      <circle cx="120" cy="78" r="2" fill={p.turban} />
      {/* Robe collar pattern */}
      <path d="M 80 200 L 120 230 L 160 200" stroke={p.accent} strokeWidth="1" fill="none" />
      <circle cx="100" cy="210" r="2" fill={p.accent} />
      <circle cx="140" cy="210" r="2" fill={p.accent} />
    </svg>
  );
};

// ── NAV ────────────────────────────────────────────────
const PAGES = [
  { href: 'Muqimiy.html',  label: 'Bosh sahifa' },
  { href: 'Hayoti.html',   label: 'Hayoti' },
  { href: 'Ijodi.html',    label: 'Ijodi' },
  { href: 'Asarlari.html', label: 'Asarlari' },
  { href: 'Galereya.html', label: 'Galereya' },
  { href: 'Manbalar.html', label: 'Manbalar' },
];

function Nav({ current }) {
  const { c, mode } = useTheme();
  return (
    <nav style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '24px 60px', borderBottom: `1px solid ${mode === 'dark' ? '#1a3438' : c.creamDark}`,
      background: c.bg, position: 'sticky', top: 0, zIndex: 50,
    }}>
      <a href="Muqimiy.html" style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none' }}>
        <div style={{ width: 38, height: 38, background: c.teal, display: 'grid', placeItems: 'center' }}>
          <Tile size={28} color={c.saffron} />
        </div>
        <div>
          <div style={{ fontFamily: fontDisp, fontSize: 22, fontWeight: 700, color: c.text, lineHeight: 1 }}>Muqimiy</div>
          <div style={{ fontSize: 10, letterSpacing: '0.24em', color: c.saffronDeep, textTransform: 'uppercase', marginTop: 3 }}>1850 — 1903</div>
        </div>
      </a>
      <div style={{ display: 'flex', gap: 30, fontSize: 13, fontWeight: 600 }}>
        {PAGES.map(p => {
          const active = current === p.href;
          return (
            <a key={p.href} href={p.href} style={{
              color: active ? c.pomegranate : c.text, textDecoration: 'none',
              borderBottom: active ? `2px solid ${c.pomegranate}` : '2px solid transparent',
              paddingBottom: 4, transition: 'color 0.15s',
            }}>{p.label}</a>
          );
        })}
      </div>
      <ThemeToggle />
    </nav>
  );
}

function ThemeToggle() {
  const { mode, setMode, c } = useTheme();
  return (
    <button onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
      title={mode === 'dark' ? 'Yorug\'lik' : 'Tungi rejim'}
      style={{
        background: mode === 'dark' ? c.saffron : c.teal,
        color: mode === 'dark' ? c.tealDeep : c.cream,
        border: 'none', width: 44, height: 44, cursor: 'pointer',
        display: 'grid', placeItems: 'center', fontFamily: fontBody,
      }}>
      {mode === 'dark' ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" strokeLinecap="round" />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}

// ── FOOTER ────────────────────────────────────────────────
function Footer() {
  const { c } = useTheme();
  return (
    <footer style={{ background: c.tealDeep, color: c.cream, padding: '50px 60px 36px', marginTop: 80 }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        borderBottom: '1px solid rgba(244,234,212,0.18)', paddingBottom: 30, marginBottom: 20,
      }}>
        <div>
          <div style={{ fontFamily: fontDisp, fontSize: 36, fontWeight: 900 }}>Muqimiy</div>
          <div style={{ fontSize: 12, letterSpacing: '0.32em', textTransform: 'uppercase', color: c.saffron, marginTop: 4 }}>
            1850 — 1903 · Qo'qon
          </div>
        </div>
        <div style={{ display: 'flex', gap: 50 }}>
          {[
            { h: 'Sahifalar', items: PAGES.slice(1, 4).map(p => p.label) },
            { h: 'Manbalar', items: ['tafakkur.net', 'n.ziyouz.com', 'arboblar.uz'] },
            { h: 'Tadqiqotlar', items: ['researchgate.net', 'cyberleninka.ru'] },
          ].map((col, i) => (
            <div key={i}>
              <div style={{ fontSize: 10, letterSpacing: '0.32em', color: c.saffron, textTransform: 'uppercase', marginBottom: 10, fontWeight: 700 }}>{col.h}</div>
              <div style={{ fontSize: 14, lineHeight: 2 }}>{col.items.map(t => <div key={t}>{t}</div>)}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ fontSize: 12, color: 'rgba(244,234,212,0.5)' }}>
        © 2026 Muqimiy sayti · Adabiy meros uchun hurmat va mehnat ila tuzilgan.
      </div>
    </footer>
  );
}

// ── Reusable helpers ────────────────────────────────────────
function SectionTag({ children }) {
  const { c } = useTheme();
  return <div style={{ fontSize: 11, letterSpacing: '0.32em', color: c.saffronDeep, textTransform: 'uppercase', fontWeight: 700, marginBottom: 12 }}>{children}</div>;
}

function H2({ children, italic, style }) {
  const { c } = useTheme();
  return (
    <h2 style={{
      fontFamily: fontDisp, fontSize: 64, margin: 0, fontWeight: 900,
      lineHeight: 1, color: c.teal, letterSpacing: '-0.02em', ...style,
    }}>{children}</h2>
  );
}

function PageShell({ current, children }) {
  const { c } = useTheme();
  return (
    <div style={{ background: c.bg, color: c.text, fontFamily: fontBody, minHeight: '100vh' }}>
      <Nav current={current} />
      {children}
      <Footer />
    </div>
  );
}

Object.assign(window, {
  PALETTES, fontDisp, fontBody, ThemeCtx, ThemeProvider, useTheme,
  Tile, Star8, Medallion, Portrait,
  Nav, Footer, ThemeToggle, SectionTag, H2, PageShell, PAGES,
});

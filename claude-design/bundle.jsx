// Shared SVG ornaments used across all three variants.
// Eastern miniature / Islamic geometric vocabulary.

const Ornament = {};

// 8-point star (Islamic geometric staple)
Ornament.Star8 = ({ size = 40, color = 'currentColor', stroke = 1.2 }) => (
  <svg width={size} height={size} viewBox="-50 -50 100 100" fill="none" stroke={color} strokeWidth={stroke}>
    <polygon points="0,-44 12,-12 44,0 12,12 0,44 -12,12 -44,0 -12,-12" />
    <polygon points="-31,-31 31,-31 31,31 -31,31" transform="rotate(0)" />
    <polygon points="-31,-31 31,-31 31,31 -31,31" transform="rotate(45)" />
  </svg>
);

// Geometric medallion (round, dense)
Ornament.Medallion = ({ size = 120, color = 'currentColor', stroke = 1 }) => (
  <svg width={size} height={size} viewBox="-100 -100 200 200" fill="none" stroke={color} strokeWidth={stroke}>
    <circle r="92" />
    <circle r="78" />
    <circle r="58" />
    <g>
      {Array.from({ length: 12 }).map((_, i) => (
        <line key={i} x1="0" y1="58" x2="0" y2="92" transform={`rotate(${i * 30})`} />
      ))}
    </g>
    <g>
      {Array.from({ length: 8 }).map((_, i) => (
        <polygon key={i} points="0,-44 8,-8 44,0 8,8 0,44 -8,8 -44,0 -8,-8" transform={`rotate(${i * 45})`} opacity="0.5" />
      ))}
    </g>
    <polygon points="0,-32 9,-9 32,0 9,9 0,32 -9,9 -32,0 -9,-9" />
    <circle r="10" />
  </svg>
);

// Corner illumination — manuscript page corner
Ornament.Corner = ({ size = 120, color = 'currentColor', stroke = 1.1 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth={stroke}>
    <path d="M0 30 Q 0 0, 30 0 L 50 0 M 0 50 L 0 30" />
    <path d="M8 30 Q 8 8, 30 8 L 45 8 M 8 45 L 8 30" opacity="0.6" />
    <circle cx="14" cy="14" r="3" fill={color} stroke="none" />
    <path d="M22 22 q 6 0 6 6 q 0 6 -6 6 q -6 0 -6 -6 q 0 -6 6 -6 z" />
    <path d="M28 8 L 36 8 M 42 8 L 50 8" strokeDasharray="4 3" opacity="0.4" />
  </svg>
);

// Repeating tile pattern (Bukhara koshin)
Ornament.TilePattern = ({ id, color = '#d68b1f', bg = 'transparent', opacity = 1 }) => (
  <svg width="0" height="0" style={{ position: 'absolute' }}>
    <defs>
      <pattern id={id} x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
        <rect width="80" height="80" fill={bg} />
        <g fill="none" stroke={color} strokeWidth="1.1" opacity={opacity}>
          <polygon points="40,8 48,32 72,40 48,48 40,72 32,48 8,40 32,32" />
          <polygon points="40,8 48,32 72,40 48,48 40,72 32,48 8,40 32,32" transform="rotate(22.5 40 40)" />
          <circle cx="40" cy="40" r="6" />
        </g>
      </pattern>
    </defs>
  </svg>
);

// Arch / mehrab silhouette (frames hero photos)
Ornament.Mehrab = ({ width = 280, height = 380, fill = '#e8d5a8', stroke, strokeWidth = 1.5 }) => (
  <svg width={width} height={height} viewBox="0 0 280 380" fill={fill} stroke={stroke} strokeWidth={strokeWidth}>
    <path d="M 20 380 L 20 160 Q 20 20, 140 20 Q 260 20, 260 160 L 260 380 Z" />
  </svg>
);

// Mehrab clip path id helper
Ornament.MehrabClip = ({ id }) => (
  <svg width="0" height="0" style={{ position: 'absolute' }}>
    <defs>
      <clipPath id={id} clipPathUnits="objectBoundingBox">
        <path d="M 0.07 1 L 0.07 0.42 Q 0.07 0.05, 0.5 0.05 Q 0.93 0.05, 0.93 0.42 L 0.93 1 Z" />
      </clipPath>
    </defs>
  </svg>
);

// Decorative horizontal rule with center medallion
Ornament.Divider = ({ width = 600, color = 'currentColor', stroke = 1, height = 28 }) => (
  <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" stroke={color} strokeWidth={stroke}>
    <line x1="0" y1={height / 2} x2={width / 2 - 20} y2={height / 2} />
    <line x1={width / 2 + 20} y1={height / 2} x2={width} y2={height / 2} />
    <g transform={`translate(${width / 2} ${height / 2})`}>
      <polygon points="0,-10 3,-3 10,0 3,3 0,10 -3,3 -10,0 -3,-3" fill={color} stroke="none" />
      <circle r="14" />
    </g>
  </svg>
);

// Calligraphic flourish (under section labels)
Ornament.Flourish = ({ width = 80, color = 'currentColor' }) => (
  <svg width={width} height="14" viewBox="0 0 80 14" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round">
    <path d="M 2 7 Q 14 0, 26 7 T 50 7 T 78 7" />
    <circle cx="40" cy="7" r="1.5" fill={color} />
  </svg>
);

// Tiny Muqimiy stylised portrait (placeholder used inside all variants)
Ornament.Portrait = ({ size = 240, palette = {} }) => {
  const skin = palette.skin || '#d9a36a';
  const beard = palette.beard || '#3a2817';
  const robe = palette.robe || '#7a5230';
  const turban = palette.turban || '#e8dcc4';
  const bg = palette.bg || '#f5e9c8';
  const accent = palette.accent || '#a83232';
  return (
    <svg width={size} height={size} viewBox="0 0 240 280" style={{ display: 'block' }}>
      <rect width="240" height="280" fill={bg} />
      {/* miniature halo / arch */}
      <path d="M 40 280 L 40 130 Q 40 40, 120 40 Q 200 40, 200 130 L 200 280 Z" fill="none" stroke={accent} strokeWidth="2" />
      {/* halo */}
      <circle cx="120" cy="100" r="62" fill={accent} opacity="0.18" />
      {/* turban */}
      <path d="M 70 95 Q 70 60, 120 60 Q 170 60, 170 95 Q 170 110, 160 115 L 80 115 Q 70 110, 70 95 Z" fill={turban} stroke={beard} strokeWidth="1.5" />
      <path d="M 75 88 Q 100 75, 120 78 Q 145 80, 165 90" fill="none" stroke={beard} strokeWidth="1" opacity="0.5" />
      <path d="M 80 100 Q 100 92, 120 94 Q 145 96, 160 102" fill="none" stroke={beard} strokeWidth="1" opacity="0.5" />
      {/* face */}
      <ellipse cx="120" cy="135" rx="38" ry="42" fill={skin} stroke={beard} strokeWidth="1.2" />
      {/* eyes (miniature-style almond) */}
      <path d="M 100 130 Q 105 126, 112 130" fill="none" stroke={beard} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M 128 130 Q 135 126, 140 130" fill="none" stroke={beard} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="106" cy="131" r="1.5" fill={beard} />
      <circle cx="134" cy="131" r="1.5" fill={beard} />
      {/* brows */}
      <path d="M 98 122 Q 106 119, 114 122" fill="none" stroke={beard} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 126 122 Q 134 119, 142 122" fill="none" stroke={beard} strokeWidth="1.5" strokeLinecap="round" />
      {/* nose */}
      <path d="M 120 135 L 117 152 Q 117 156, 120 156" fill="none" stroke={beard} strokeWidth="1.2" strokeLinecap="round" />
      {/* mouth */}
      <path d="M 113 165 Q 120 168, 127 165" fill="none" stroke={accent} strokeWidth="1.5" strokeLinecap="round" />
      {/* beard */}
      <path d="M 85 158 Q 90 200, 120 215 Q 150 200, 155 158 Q 145 168, 120 168 Q 95 168, 85 158 Z" fill={beard} />
      <path d="M 95 175 Q 100 185, 105 178 M 115 180 Q 120 188, 125 180 M 135 175 Q 140 185, 145 178" fill="none" stroke={turban} strokeWidth="0.8" opacity="0.4" />
      {/* robe */}
      <path d="M 60 280 L 70 220 Q 120 200, 170 220 L 180 280 Z" fill={robe} stroke={beard} strokeWidth="1.2" />
      <path d="M 110 215 L 115 280 M 130 215 L 125 280" fill="none" stroke={beard} strokeWidth="1" opacity="0.4" />
      {/* collar trim */}
      <path d="M 105 213 Q 120 222, 135 213 L 138 230 Q 120 240, 102 230 Z" fill={accent} stroke={beard} strokeWidth="1" />
    </svg>
  );
};

// Quill / pen icon
Ornament.Quill = ({ size = 24, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 4 20 L 8 16 M 6 18 Q 14 14, 18 4 Q 12 6, 8 14 Q 6 17, 6 18 Z" />
    <path d="M 9 13 L 14 8" />
  </svg>
);

window.Ornament = Ornament;


// ───────────────

// Variant 1: BAYOZ — eski qo'lyozma uslubi (manuscript)
// Cream paper background, sepia ink, pomegranate + indigo + gold accents.

const bayozStyles = {
  ink: '#3a2817',
  ink2: '#5a4128',
  paper: '#f3e7cf',
  paperLight: '#f8efdb',
  paperDark: '#e8d8b8',
  pomegranate: '#9c2b2b',
  indigo: '#1f3a5f',
  gold: '#b8893a',
  goldLight: '#d4a85a',
  rule: '#c4a878',
};

function BayozPage() {
  const c = bayozStyles;
  const font = `'Cormorant Garamond', 'Amiri', Georgia, serif`;
  const fontDisp = `'Cormorant Garamond', Georgia, serif`;

  return (
    <div data-screen-label="Variant 1 · Bayoz (qo'lyozma)" style={{
      width: 1280,
      minHeight: 3100,
      background: c.paper,
      backgroundImage: `radial-gradient(ellipse at top left, ${c.paperLight} 0%, transparent 60%),
                        radial-gradient(ellipse at bottom right, ${c.paperDark} 0%, transparent 70%),
                        url("data:image/svg+xml;utf8,${encodeURIComponent(
                          `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/><feColorMatrix values='0 0 0 0 0.4  0 0 0 0 0.3  0 0 0 0 0.15  0 0 0 0.08 0'/></filter><rect width='400' height='400' filter='url(%23n)' opacity='0.55'/></svg>`
                        )}")`,
      color: c.ink,
      fontFamily: font,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative manuscript page border */}
      <div style={{ position: 'absolute', inset: 24, border: `1.5px double ${c.rule}`, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 36, border: `0.5px solid ${c.rule}`, pointerEvents: 'none' }} />

      {/* Corner illuminations */}
      <div style={{ position: 'absolute', top: 24, left: 24, color: c.gold }}>
        <Ornament.Corner size={130} color={c.gold} />
      </div>
      <div style={{ position: 'absolute', top: 24, right: 24, color: c.gold, transform: 'scaleX(-1)' }}>
        <Ornament.Corner size={130} color={c.gold} />
      </div>
      <div style={{ position: 'absolute', bottom: 24, left: 24, color: c.gold, transform: 'scaleY(-1)' }}>
        <Ornament.Corner size={130} color={c.gold} />
      </div>
      <div style={{ position: 'absolute', bottom: 24, right: 24, color: c.gold, transform: 'scale(-1,-1)' }}>
        <Ornament.Corner size={130} color={c.gold} />
      </div>

      {/* ── Header / nav ── */}
      <nav style={{
        position: 'relative', zIndex: 2,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '70px 110px 0',
      }}>
        <div style={{ fontSize: 13, letterSpacing: '0.32em', color: c.ink2, textTransform: 'uppercase' }}>
          مقیمى · Bayozi Muqimiy
        </div>
        <div style={{ display: 'flex', gap: 36, fontSize: 14, letterSpacing: '0.18em', textTransform: 'uppercase', color: c.ink2 }}>
          <a style={{ color: c.pomegranate, textDecoration: 'none', borderBottom: `1px solid ${c.pomegranate}`, paddingBottom: 2 }}>Hayoti</a>
          <a style={{ color: 'inherit', textDecoration: 'none' }}>Ijodi</a>
          <a style={{ color: 'inherit', textDecoration: 'none' }}>Asarlari</a>
          <a style={{ color: 'inherit', textDecoration: 'none' }}>Iqtibos</a>
          <a style={{ color: 'inherit', textDecoration: 'none' }}>Manbalar</a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section style={{ position: 'relative', zIndex: 2, padding: '60px 110px 80px', display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 60, alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
            <span style={{ width: 60, height: 1, background: c.gold }} />
            <span style={{ fontSize: 13, letterSpacing: '0.32em', color: c.gold, textTransform: 'uppercase', fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
              O'zbek demokratik adabiyoti asoschisi
            </span>
          </div>
          <h1 style={{
            fontFamily: fontDisp,
            fontSize: 116,
            lineHeight: 0.94,
            margin: '0 0 24px',
            fontWeight: 500,
            letterSpacing: '-0.02em',
            color: c.ink,
          }}>
            Muhammad<br />
            Aminxo'ja<br />
            <span style={{ fontStyle: 'italic', color: c.pomegranate }}>Muqimiy</span>
          </h1>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 32, color: c.ink2 }}>
            <span style={{ fontFamily: fontDisp, fontSize: 32, fontWeight: 400 }}>1850</span>
            <span style={{ width: 28, height: 1, background: c.ink2 }} />
            <span style={{ fontFamily: fontDisp, fontSize: 32, fontWeight: 400 }}>1903</span>
            <span style={{ fontSize: 13, letterSpacing: '0.18em', color: c.ink2, marginLeft: 16, fontFamily: "'Inter', sans-serif", textTransform: 'uppercase' }}>Qo'qon</span>
          </div>
          <p style={{
            fontFamily: fontDisp,
            fontSize: 22,
            lineHeight: 1.55,
            color: c.ink2,
            maxWidth: 520,
            margin: 0,
            fontStyle: 'italic',
          }}>
            Shoir va mutafakkir. O'tkir hajv, samimiy lirika va xalqona ohang bilan
            o'zbek adabiyotida yangi sahifa ochgan ijodkor — Qo'qon adabiy
            muhitining peshvosi.
          </p>

          <div style={{ display: 'flex', gap: 14, marginTop: 44 }}>
            <button style={{
              background: c.pomegranate, color: c.paperLight, border: 'none',
              padding: '16px 30px', fontSize: 13, letterSpacing: '0.22em', textTransform: 'uppercase',
              fontFamily: "'Inter', sans-serif", fontWeight: 600, cursor: 'pointer',
            }}>
              Hayotini o'qish →
            </button>
            <button style={{
              background: 'transparent', color: c.ink, border: `1px solid ${c.ink2}`,
              padding: '16px 30px', fontSize: 13, letterSpacing: '0.22em', textTransform: 'uppercase',
              fontFamily: "'Inter', sans-serif", fontWeight: 600, cursor: 'pointer',
            }}>
              Asarlar bayozi
            </button>
          </div>
        </div>

        {/* Portrait inside mehrab arch */}
        <div style={{ position: 'relative', alignSelf: 'center', justifySelf: 'center' }}>
          <div style={{ position: 'absolute', inset: -28, color: c.gold, opacity: 0.45 }}>
            <Ornament.Medallion size={460} color={c.gold} stroke={0.7} />
          </div>
          <div style={{ position: 'relative', width: 340, height: 460, background: c.paperDark, clipPath: 'url(#bayoz-mehrab)', border: `2px solid ${c.gold}`, boxShadow: '0 12px 40px rgba(58,40,23,0.18)' }}>
            <Ornament.Portrait size={340} palette={{ bg: c.paperDark, skin: '#cf9d6c', beard: c.ink, robe: c.indigo, turban: '#f0e1bf', accent: c.pomegranate }} />
          </div>
          <Ornament.MehrabClip id="bayoz-mehrab" />
          <div style={{
            position: 'absolute', bottom: -22, left: '50%', transform: 'translateX(-50%)',
            background: c.paper, padding: '6px 22px',
            fontFamily: fontDisp, fontStyle: 'italic', fontSize: 17, color: c.ink2,
            border: `1px solid ${c.gold}`,
            whiteSpace: 'nowrap',
          }}>
            “Turg'un, turib qolgan”
          </div>
        </div>
      </section>

      {/* Divider */}
      <div style={{ textAlign: 'center', color: c.gold, padding: '20px 0' }}>
        <Ornament.Divider width={820} color={c.gold} />
      </div>

      {/* ── Hayoti — short bio + key dates ── */}
      <section style={{ position: 'relative', zIndex: 2, padding: '60px 110px', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80 }}>
        <div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, letterSpacing: '0.32em', color: c.pomegranate, textTransform: 'uppercase', marginBottom: 12, fontWeight: 600 }}>
            Bob I
          </div>
          <h2 style={{ fontFamily: fontDisp, fontSize: 58, lineHeight: 1.05, margin: '0 0 8px', fontWeight: 500 }}>Hayoti</h2>
          <div style={{ color: c.gold, marginBottom: 24 }}><Ornament.Flourish width={120} color={c.gold} /></div>
          <p style={{ fontFamily: fontDisp, fontSize: 19, lineHeight: 1.7, color: c.ink2, fontStyle: 'italic' }}>
            1850-yili Qo'qon shahridagi Bekvachcha mahallasida novvoy Mirzaxo'ja
            oilasida tug'ildi. Onasi Xumorbibi — adabiyot va san'atni sevgan,
            yosh Muhammad Aminxo'janing she'riyatga ixlosini uyg'otgan ayol edi.
          </p>
        </div>

        <div style={{ borderLeft: `1px solid ${c.rule}`, paddingLeft: 56 }}>
          {[
            { y: '1850', t: "Qo'qon, Bekvachcha mahallasida tug'ildi." },
            { y: '1864', t: "Mohlaroyim (Nodira binosi) madrasasida ta'lim oldi." },
            { y: '1875', t: 'Buxoro madrasalarida tahsilni davom ettirdi.' },
            { y: '1877', t: 'Yer qurilishi mahkamasida mirzalik — “Tanobchilar”ga sabab.' },
            { y: '1885', t: 'Otasi vafotidan so\'ng "Hazrat" madrasasi hujrasiga ko\'chdi.' },
            { y: '1887', t: 'Toshkentga sayohat — Almaiy, Nodim Namangoniy bilan tanishuv.' },
            { y: '1903', t: '25-may. Qo\'qonda vafot etdi.' },
          ].map((row, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: 28, padding: '14px 0', borderBottom: i < 6 ? `1px dashed ${c.rule}` : 'none' }}>
              <div style={{ fontFamily: fontDisp, fontSize: 26, color: c.pomegranate, fontWeight: 500 }}>{row.y}</div>
              <div style={{ fontFamily: fontDisp, fontSize: 19, lineHeight: 1.5, color: c.ink, paddingTop: 4 }}>{row.t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Ijodi — themes ── */}
      <section style={{ position: 'relative', zIndex: 2, padding: '60px 110px', background: `linear-gradient(180deg, transparent, ${c.paperDark}66, transparent)` }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, letterSpacing: '0.32em', color: c.pomegranate, textTransform: 'uppercase', marginBottom: 8, fontWeight: 600 }}>
            Bob II
          </div>
          <h2 style={{ fontFamily: fontDisp, fontSize: 58, lineHeight: 1.05, margin: '0 0 12px', fontWeight: 500 }}>Ijodi</h2>
          <div style={{ color: c.gold }}><Ornament.Flourish width={120} color={c.gold} /></div>
          <p style={{ fontFamily: fontDisp, fontSize: 22, fontStyle: 'italic', maxWidth: 720, margin: '24px auto 0', color: c.ink2, lineHeight: 1.55 }}>
            10 ming misra. Lirika, hajv, “Sayohatnoma”lar, maktublar. Navoiy, Jomiy va Fuzuliydan o'rgangan, Jomiyni ustoz bildi.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32 }}>
          {[
            { n: '01', t: 'Lirika', d: "Muhabbat, do'stlik, sadoqat va vafodorlik — chuqur optimizm va hayotiylik bilan sug'orilgan g'azallar." },
            { n: '02', t: 'Hajviyot', d: 'Tanobchilar, Saylov, Maskovchi boy — chor amaldorlari va boy-mahalliylarning kirdikorlarini fosh etgan satira.' },
            { n: '03', t: 'Sayohatnoma', d: "Farg'ona vodiysi bo'ylab sayohatlar taassurotidan tug'ilgan 4 qismli, o'ynoqi vaznli asar." },
          ].map((t, i) => (
            <div key={i} style={{ background: c.paperLight, padding: '36px 32px', border: `1px solid ${c.rule}`, position: 'relative' }}>
              <div style={{ fontFamily: fontDisp, fontSize: 64, color: c.goldLight, lineHeight: 1, fontWeight: 500 }}>{t.n}</div>
              <h3 style={{ fontFamily: fontDisp, fontSize: 30, margin: '12px 0 14px', color: c.ink, fontWeight: 600 }}>{t.t}</h3>
              <p style={{ fontFamily: fontDisp, fontSize: 18, lineHeight: 1.6, color: c.ink2, margin: 0 }}>{t.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Asarlardan namunalar — poem cards ── */}
      <section style={{ position: 'relative', zIndex: 2, padding: '80px 110px 40px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 40 }}>
          <div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, letterSpacing: '0.32em', color: c.pomegranate, textTransform: 'uppercase', marginBottom: 8, fontWeight: 600 }}>
              Bob III
            </div>
            <h2 style={{ fontFamily: fontDisp, fontSize: 58, margin: 0, fontWeight: 500 }}>Asarlardan namunalar</h2>
          </div>
          <a style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, letterSpacing: '0.22em', color: c.ink2, textTransform: 'uppercase', borderBottom: `1px solid ${c.ink2}`, paddingBottom: 4 }}>Barchasini ko'rish ↗</a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28 }}>
          <PoemCardBayoz
            title="Tanobchilar"
            kind="Hajv · 1877"
            lines={[
              "Bo'ldi taajjub qiziq hangomalar,",
              "Arz etayin emdi yozib nomalar.",
              "O'n iki oyda keladur bir tanob,",
              "O'zgalara rohat-u menga azob.",
              "Tag'i bular yaxshiyu bizlar yamon,",
              "El tamizidin hazar et, al'amon.",
            ]}
            note="Yer o'lchovchi amaldorlarning hiyla-nayranglarini fosh etadi."
          />
          <PoemCardBayoz
            title="Navbahor"
            kind="G'azal"
            lines={[
              "Ochildi gullar, sabza bo'ldi bog'lar!",
              "Suhbat aylaylik, kelinglar, jo'ralar, o'rtog'lar!",
              "Xush bu mahfilda tiriklik ulfatu ahbob ila,",
              "O'ynashib, gohe tabiatni qilaylik chog'lar!",
            ]}
            note="Shoirning eng sara lirik she'rlaridan biri."
          />
          <PoemCardBayoz
            title="Sayohatnoma"
            kind="Sayohat · 1888"
            lines={[
              "Kelganim ushbu makonga qiladur manga alam,",
              "Loyiqi tab' yo'q odamki, desam hasratu g'am,",
              "Gaplashurg'a kishi yo'q ertadin oqshomg'acha ham,",
              "Kun sovuq, qora chiroq, go'rdek uyu, o'tin kam.",
            ]}
            note="Farg'ona safarining taassurotidan."
          />
        </div>
      </section>

      {/* ── Pull quote ── */}
      <section style={{ position: 'relative', zIndex: 2, padding: '80px 160px', textAlign: 'center' }}>
        <div style={{ color: c.gold, opacity: 0.5, fontSize: 220, lineHeight: 0.5, fontFamily: fontDisp, height: 110 }}>“</div>
        <blockquote style={{
          fontFamily: fontDisp, fontStyle: 'italic',
          fontSize: 42, lineHeight: 1.4, color: c.ink, margin: 0,
          textWrap: 'pretty',
        }}>
          Hayfkim, ahli tamiz ushbu mahalda xor ekan,<br />
          Oldilar har yerda bulbul oshiyonin zog'lar.
        </blockquote>
        <div style={{ marginTop: 28, color: c.pomegranate, fontFamily: "'Inter', sans-serif", fontSize: 12, letterSpacing: '0.32em', textTransform: 'uppercase' }}>
          — Navbahor g'azalidan
        </div>
      </section>

      {/* ── Footer / sources ── */}
      <footer style={{
        position: 'relative', zIndex: 2,
        padding: '40px 110px 60px',
        borderTop: `1.5px double ${c.rule}`,
        marginTop: 40,
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        fontFamily: "'Inter', sans-serif", fontSize: 13, color: c.ink2,
      }}>
        <div>
          <div style={{ fontFamily: fontDisp, fontSize: 26, color: c.ink, marginBottom: 4 }}>Bayozi Muqimiy</div>
          <div style={{ letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: 11 }}>Sayt — 2026 · Hurmat ila tuzilgan</div>
        </div>
        <div style={{ display: 'flex', gap: 36 }}>
          <div><div style={{ letterSpacing: '0.22em', textTransform: 'uppercase', fontSize: 11, color: c.gold, marginBottom: 6 }}>Manbalar</div>tafakkur.net</div>
          <div><div style={{ letterSpacing: '0.22em', textTransform: 'uppercase', fontSize: 11, color: c.gold, marginBottom: 6 }}>Arxiv</div>n.ziyouz.com</div>
          <div><div style={{ letterSpacing: '0.22em', textTransform: 'uppercase', fontSize: 11, color: c.gold, marginBottom: 6 }}>Tarjimai hol</div>arboblar.uz</div>
        </div>
      </footer>
    </div>
  );
}

function PoemCardBayoz({ title, kind, lines, note }) {
  const c = bayozStyles;
  const fontDisp = `'Cormorant Garamond', Georgia, serif`;
  return (
    <article style={{
      background: c.paperLight,
      border: `1px solid ${c.rule}`,
      padding: '32px 28px 26px',
      position: 'relative',
      display: 'flex', flexDirection: 'column',
    }}>
      <div style={{ position: 'absolute', top: 8, left: 8, right: 8, height: 1, background: c.gold, opacity: 0.4 }} />
      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: '0.32em', color: c.gold, textTransform: 'uppercase', marginBottom: 10, fontWeight: 600 }}>
        {kind}
      </div>
      <h3 style={{ fontFamily: fontDisp, fontSize: 38, margin: '0 0 18px', color: c.pomegranate, fontWeight: 500 }}>{title}</h3>
      <div style={{ borderTop: `1px solid ${c.rule}`, paddingTop: 18, marginBottom: 18 }}>
        {lines.map((l, i) => (
          <div key={i} style={{ fontFamily: fontDisp, fontStyle: 'italic', fontSize: 19, lineHeight: 1.55, color: c.ink }}>
            {l}
          </div>
        ))}
      </div>
      <div style={{ fontFamily: fontDisp, fontSize: 15, lineHeight: 1.5, color: c.ink2, marginBottom: 22 }}>{note}</div>
      <div style={{ marginTop: 'auto', display: 'flex', gap: 10 }}>
        <button style={{
          flex: 1, background: 'transparent', color: c.ink,
          border: `1px solid ${c.ink2}`, padding: '11px 14px',
          fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 600,
          cursor: 'pointer',
        }}>
          PDF yuklab olish
        </button>
        <button style={{
          flex: 1, background: c.pomegranate, color: c.paperLight,
          border: 'none', padding: '11px 14px',
          fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 600,
          cursor: 'pointer',
        }}>
          O'zingizni sinab ko'ring →
        </button>
      </div>
    </article>
  );
}

window.BayozPage = BayozPage;


// ───────────────

// Variant 2: KOSHIN — Buxoro koshini uslubi
// Deep teal + saffron + cream. Bold geometric patterns, editorial grid.

const koshinStyles = {
  teal: '#0e3f44',
  tealDeep: '#072b30',
  tealMid: '#155057',
  saffron: '#d68b1f',
  saffronDeep: '#a86811',
  cream: '#f4ead4',
  creamDark: '#e6d8b4',
  pomegranate: '#a43a2c',
  text: '#0a2024',
  textLight: '#f4ead4',
};

function KoshinPage() {
  const c = koshinStyles;
  const fontDisp = `'Playfair Display', Georgia, serif`;
  const fontBody = `'Manrope', system-ui, sans-serif`;

  const Tile = ({ size = 80, color = c.saffron, opacity = 1 }) => (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" stroke={color} strokeWidth="1" opacity={opacity}>
      <polygon points="40,4 50,30 76,40 50,50 40,76 30,50 4,40 30,30" />
      <polygon points="40,4 50,30 76,40 50,50 40,76 30,50 4,40 30,30" transform="rotate(22.5 40 40)" />
      <circle cx="40" cy="40" r="6" />
    </svg>
  );

  return (
    <div data-screen-label="Variant 2 · Koshin (Buxoro)" style={{
      width: 1280,
      minHeight: 3200,
      background: c.cream,
      color: c.text,
      fontFamily: fontBody,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* ── NAV ── */}
      <nav style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '28px 60px', borderBottom: `1px solid ${c.creamDark}`,
        background: c.cream, position: 'sticky', top: 0, zIndex: 5,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 36, height: 36, background: c.teal, display: 'grid', placeItems: 'center' }}>
            <Tile size={28} color={c.saffron} />
          </div>
          <div style={{ fontFamily: fontDisp, fontSize: 22, fontWeight: 700, color: c.teal }}>Muqimiy</div>
          <div style={{ fontSize: 11, letterSpacing: '0.22em', color: c.saffronDeep, textTransform: 'uppercase', marginLeft: 4 }}>1850 — 1903</div>
        </div>
        <div style={{ display: 'flex', gap: 32, fontSize: 13, fontWeight: 600, color: c.text }}>
          {['Hayoti', 'Ijodi', 'Asarlari', 'Iqtibos', 'Manbalar'].map((s, i) => (
            <a key={s} style={{ color: i === 0 ? c.pomegranate : c.text, textDecoration: 'none', borderBottom: i === 0 ? `2px solid ${c.pomegranate}` : 'none', paddingBottom: 4 }}>{s}</a>
          ))}
        </div>
        <button style={{
          background: c.teal, color: c.cream, border: 'none', padding: '12px 22px',
          fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', cursor: 'pointer',
          fontFamily: fontBody,
        }}>
          Devon ↗
        </button>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        background: c.teal, color: c.cream,
        padding: '0 0 0 60px',
        display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 0,
        position: 'relative', overflow: 'hidden',
        minHeight: 720,
      }}>
        {/* Pattern bg */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.07, pointerEvents: 'none',
          backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(
            `<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80' fill='none' stroke='%23d68b1f' stroke-width='1'><polygon points='40,4 50,30 76,40 50,50 40,76 30,50 4,40 30,30'/><polygon points='40,4 50,30 76,40 50,50 40,76 30,50 4,40 30,30' transform='rotate(22.5 40 40)'/><circle cx='40' cy='40' r='6'/></svg>`
          )}")`,
          backgroundSize: '80px 80px',
        }} />

        <div style={{ position: 'relative', zIndex: 2, padding: '90px 40px 90px 0', alignSelf: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14, marginBottom: 32,
            background: 'rgba(214,139,31,0.14)', border: `1px solid ${c.saffron}`, padding: '8px 18px' }}>
            <Tile size={18} color={c.saffron} />
            <span style={{ fontSize: 11, letterSpacing: '0.32em', color: c.saffron, textTransform: 'uppercase', fontWeight: 700 }}>
              Qo'qon adabiy muhiti
            </span>
          </div>
          <h1 style={{
            fontFamily: fontDisp,
            fontSize: 124, lineHeight: 0.92, margin: '0 0 28px',
            fontWeight: 900, letterSpacing: '-0.02em',
          }}>
            <span style={{ color: c.saffron }}>M</span>uhammad<br />
            Aminxo'ja<br />
            <span style={{ fontStyle: 'italic', fontWeight: 400, color: c.cream }}>Muqimiy.</span>
          </h1>
          <p style={{
            fontSize: 17, lineHeight: 1.7, maxWidth: 480, margin: '0 0 40px',
            color: 'rgba(244,234,212,0.78)',
          }}>
            XIX asr o'zbek mumtoz adabiyotining yirik namoyandasi. O'tkir
            hajviy bilan amaldorlar zulmini fosh etgan, samimiy lirikasi
            xalq qo'shig'iga aylanib ketgan shoir.
          </p>

          {/* Big stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: 48, marginTop: 8 }}>
            {[
              { n: '10K+', l: 'Misra' },
              { n: '30+', l: 'Hajviy asar' },
              { n: '4', l: 'Sayohatnoma' },
            ].map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily: fontDisp, fontSize: 52, color: c.saffron, lineHeight: 1, fontWeight: 700 }}>{s.n}</div>
                <div style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(244,234,212,0.6)', marginTop: 6 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — portrait card */}
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'stretch', justifyContent: 'center' }}>
          {/* Saffron block behind */}
          <div style={{ position: 'absolute', right: 60, top: 70, bottom: 70, width: 380, background: c.saffron }} />
          <div style={{
            position: 'absolute', right: 100, top: 110, width: 340, padding: 0,
            background: c.tealDeep, border: `8px solid ${c.cream}`,
          }}>
            <div style={{ height: 460, background: c.tealMid, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, opacity: 0.18,
                backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(
                  `<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80' fill='none' stroke='%23f4ead4' stroke-width='1'><polygon points='40,4 50,30 76,40 50,50 40,76 30,50 4,40 30,30'/></svg>`
                )}")`,
                backgroundSize: '60px 60px',
              }} />
              <Ornament.Portrait size={340} palette={{ bg: 'transparent', skin: '#dca06a', beard: '#1a0d05', robe: c.saffronDeep, turban: c.cream, accent: c.pomegranate }} />
            </div>
            <div style={{ background: c.cream, color: c.text, padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontFamily: fontDisp, fontSize: 20, fontWeight: 700 }}>Muqimiy</div>
                <div style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: c.tealMid, marginTop: 2 }}>“Turg'un”</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: fontDisp, fontSize: 22, color: c.pomegranate, fontWeight: 700 }}>53</div>
                <div style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: c.tealMid }}>yil</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hayoti — timeline strip ── */}
      <section style={{ padding: '90px 60px 70px', background: c.cream }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 50 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.32em', color: c.saffronDeep, textTransform: 'uppercase', fontWeight: 700, marginBottom: 12 }}>
              I — Hayoti
            </div>
            <h2 style={{ fontFamily: fontDisp, fontSize: 64, margin: 0, fontWeight: 900, lineHeight: 1, color: c.teal, letterSpacing: '-0.02em' }}>
              Bekvachchadan
              <br /><span style={{ fontStyle: 'italic', fontWeight: 400, color: c.pomegranate }}>Hazratgacha.</span>
            </h2>
          </div>
          <p style={{ maxWidth: 380, fontSize: 15, lineHeight: 1.7, color: c.tealMid, margin: 0 }}>
            1850-yili novvoy Mirzaxo'janing oilasida tug'ildi. Onasi Xumorbibi
            — yosh shoirning she'riyatga muhabbatini uyg'otgan ustozi.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 0 }}>
          <div style={{ position: 'absolute', top: 38, left: 0, right: 0, height: 2, background: c.teal }} />
          {[
            { y: '1850', t: "Qo'qonda tug'ildi" },
            { y: '1864', t: 'Madrasada tahsil' },
            { y: '1875', t: 'Buxoroga safar' },
            { y: '1877', t: '“Tanobchilar”' },
            { y: '1885', t: 'Hazrat hujrasi' },
            { y: '1887', t: 'Toshkent safari' },
            { y: '1903', t: 'Vafoti' },
          ].map((s, i) => (
            <div key={i} style={{ position: 'relative', textAlign: 'center', paddingTop: 70 }}>
              <div style={{
                position: 'absolute', top: 28, left: '50%', transform: 'translateX(-50%)',
                width: 22, height: 22, background: i === 3 || i === 6 ? c.pomegranate : c.saffron,
                border: `3px solid ${c.cream}`, zIndex: 2, transform: 'translateX(-50%) rotate(45deg)',
              }} />
              <div style={{ fontFamily: fontDisp, fontSize: 28, fontWeight: 700, color: c.teal }}>{s.y}</div>
              <div style={{ fontSize: 13, color: c.tealMid, marginTop: 4 }}>{s.t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Ijodi — themes ── */}
      <section style={{ padding: '70px 60px', background: c.tealDeep, color: c.cream, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -100, top: -100, opacity: 0.08, color: c.saffron }}>
          <Ornament.Medallion size={500} color={c.saffron} stroke={1} />
        </div>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 50 }}>
            <div>
              <div style={{ fontSize: 11, letterSpacing: '0.32em', color: c.saffron, textTransform: 'uppercase', fontWeight: 700, marginBottom: 12 }}>
                II — Ijodi
              </div>
              <h2 style={{ fontFamily: fontDisp, fontSize: 64, margin: 0, fontWeight: 900, lineHeight: 1, letterSpacing: '-0.02em' }}>
                Uch ijodiy
                <br /><span style={{ fontStyle: 'italic', fontWeight: 400, color: c.saffron }}>tomir.</span>
              </h2>
            </div>
            <p style={{ maxWidth: 380, fontSize: 15, lineHeight: 1.7, color: 'rgba(244,234,212,0.7)', margin: 0 }}>
              Navoiy, Jomiy, Nizomiy va Fuzuliydan o'rgangan. Jomiyni o'ziga ustoz bildi.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 4 }}>
            {[
              { n: '01', t: 'Lirika', d: "Muhabbat, do'stlik, sadoqat va vafodorlik. Yuzlab she'rlar xalq qo'shig'iga aylangan." },
              { n: '02', t: 'Hajviyot', d: "Tanobchilar, Saylov, Maskovchi boy — chor amaldorlari va boylar kirdikorlarini fosh etgan satira." },
              { n: '03', t: 'Sayohatnoma', d: "Farg'ona vodiysi bo'ylab sayohatlar. O'ynoqi vaznli, 4 misrali bandlardan iborat asar." },
            ].map((t, i) => (
              <div key={i} style={{
                background: c.tealMid, padding: '40px 32px 32px',
                borderLeft: `4px solid ${c.saffron}`,
                position: 'relative',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
                  <div style={{ fontFamily: fontDisp, fontSize: 16, color: c.saffron, fontWeight: 700, letterSpacing: '0.32em' }}>{t.n}</div>
                  <Tile size={32} color={c.saffron} opacity={0.6} />
                </div>
                <h3 style={{ fontFamily: fontDisp, fontSize: 36, margin: '0 0 14px', fontWeight: 700 }}>{t.t}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: 'rgba(244,234,212,0.78)', margin: 0 }}>{t.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Asarlardan namunalar ── */}
      <section style={{ padding: '90px 60px 50px', background: c.cream }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 40 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.32em', color: c.saffronDeep, textTransform: 'uppercase', fontWeight: 700, marginBottom: 12 }}>
              III — Asarlardan namunalar
            </div>
            <h2 style={{ fontFamily: fontDisp, fontSize: 64, margin: 0, fontWeight: 900, lineHeight: 1, color: c.teal, letterSpacing: '-0.02em' }}>
              She'rlardan <span style={{ fontStyle: 'italic', fontWeight: 400, color: c.pomegranate }}>misol.</span>
            </h2>
          </div>
          <button style={{
            background: 'transparent', color: c.teal, border: `1.5px solid ${c.teal}`,
            padding: '14px 28px', fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer',
            fontFamily: fontBody,
          }}>
            Devondan barchasi →
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          <PoemCardKoshin
            n="01"
            title="Tanobchilar"
            kind="Hajv · 1877"
            lines={[
              "Bo'ldi taajjub qiziq hangomalar,",
              "Arz etayin emdi yozib nomalar.",
              "O'n iki oyda keladur bir tanob,",
              "O'zgalara rohat-u menga azob.",
            ]}
            featured
          />
          <PoemCardKoshin
            n="02"
            title="Navbahor"
            kind="G'azal"
            lines={[
              "Ochildi gullar, sabza bo'ldi bog'lar!",
              "Suhbat aylaylik, kelinglar, jo'ralar, o'rtog'lar!",
              "Xush bu mahfilda tiriklik ulfatu ahbob ila,",
              "O'ynashib, gohe tabiatni qilaylik chog'lar!",
            ]}
          />
          <PoemCardKoshin
            n="03"
            title="Sayohatnoma"
            kind="Sayohat"
            lines={[
              "Kelganim ushbu makonga qiladur manga alam,",
              "Loyiqi tab' yo'q odamki, desam hasratu g'am,",
              "Gaplashurg'a kishi yo'q ertadin oqshomg'acha ham,",
              "Kun sovuq, qora chiroq, go'rdek uyu, o'tin kam.",
            ]}
          />
        </div>
      </section>

      {/* ── Pull quote band ── */}
      <section style={{ background: c.saffron, padding: '80px 100px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1,
          backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(
            `<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60' fill='none' stroke='%23072b30' stroke-width='1'><polygon points='30,3 38,22 57,30 38,38 30,57 22,38 3,30 22,22'/></svg>`
          )}")`,
          backgroundSize: '60px 60px',
        }} />
        <div style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 50, alignItems: 'center' }}>
          <div style={{ fontFamily: fontDisp, fontSize: 220, color: c.teal, lineHeight: 0.7, fontWeight: 900 }}>“</div>
          <div>
            <blockquote style={{
              fontFamily: fontDisp, fontStyle: 'italic',
              fontSize: 42, lineHeight: 1.35, color: c.tealDeep, margin: 0, fontWeight: 500,
            }}>
              Hayfkim, ahli tamiz ushbu mahalda xor ekan,<br />
              Oldilar har yerda bulbul oshiyonin zog'lar.
            </blockquote>
            <div style={{ marginTop: 24, fontSize: 12, letterSpacing: '0.32em', textTransform: 'uppercase', color: c.tealDeep, fontWeight: 700 }}>
              — Navbahor g'azalidan
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: c.tealDeep, color: c.cream, padding: '50px 60px 36px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: `1px solid rgba(244,234,212,0.18)`, paddingBottom: 30, marginBottom: 20 }}>
          <div>
            <div style={{ fontFamily: fontDisp, fontSize: 36, fontWeight: 900 }}>Muqimiy</div>
            <div style={{ fontSize: 12, letterSpacing: '0.32em', textTransform: 'uppercase', color: c.saffron, marginTop: 4 }}>1850 — 1903 · Qo'qon</div>
          </div>
          <div style={{ display: 'flex', gap: 60 }}>
            <div>
              <div style={{ fontSize: 10, letterSpacing: '0.32em', color: c.saffron, textTransform: 'uppercase', marginBottom: 10, fontWeight: 700 }}>Manbalar</div>
              <div style={{ fontSize: 14, lineHeight: 2 }}>tafakkur.net<br />n.ziyouz.com</div>
            </div>
            <div>
              <div style={{ fontSize: 10, letterSpacing: '0.32em', color: c.saffron, textTransform: 'uppercase', marginBottom: 10, fontWeight: 700 }}>Tadqiqotlar</div>
              <div style={{ fontSize: 14, lineHeight: 2 }}>researchgate.net<br />cyberleninka.ru</div>
            </div>
            <div>
              <div style={{ fontSize: 10, letterSpacing: '0.32em', color: c.saffron, textTransform: 'uppercase', marginBottom: 10, fontWeight: 700 }}>Tarjimai hol</div>
              <div style={{ fontSize: 14, lineHeight: 2 }}>arboblar.uz</div>
            </div>
          </div>
        </div>
        <div style={{ fontSize: 12, color: 'rgba(244,234,212,0.5)' }}>© 2026 Muqimiy sayti. Mehnat va hurmat ila tuzilgan.</div>
      </footer>
    </div>
  );
}

function PoemCardKoshin({ n, title, kind, lines, featured }) {
  const c = koshinStyles;
  const fontDisp = `'Playfair Display', Georgia, serif`;
  return (
    <article style={{
      background: featured ? c.teal : '#fff',
      color: featured ? c.cream : c.text,
      padding: '32px 28px 24px',
      border: `1px solid ${featured ? c.teal : c.creamDark}`,
      display: 'flex', flexDirection: 'column', position: 'relative',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 22 }}>
        <div style={{ fontFamily: fontDisp, fontSize: 32, fontWeight: 700, color: featured ? c.saffron : c.saffronDeep }}>{n}</div>
        <div style={{ fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: featured ? 'rgba(244,234,212,0.7)' : c.tealMid, fontWeight: 700 }}>{kind}</div>
      </div>
      <h3 style={{ fontFamily: fontDisp, fontSize: 36, margin: '0 0 22px', fontWeight: 700, color: featured ? c.cream : c.teal, lineHeight: 1.05 }}>{title}</h3>
      <div style={{ borderTop: `2px solid ${featured ? c.saffron : c.creamDark}`, paddingTop: 18, marginBottom: 26 }}>
        {lines.map((l, i) => (
          <div key={i} style={{ fontFamily: fontDisp, fontStyle: 'italic', fontSize: 18, lineHeight: 1.6, color: featured ? c.cream : c.text }}>
            {l}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 'auto', display: 'flex', gap: 8 }}>
        <button style={{
          flex: 1, background: 'transparent', color: featured ? c.cream : c.teal,
          border: `1px solid ${featured ? 'rgba(244,234,212,0.4)' : c.teal}`, padding: '11px 12px',
          fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700, cursor: 'pointer',
        }}>
          PDF
        </button>
        <button style={{
          flex: 2, background: featured ? c.saffron : c.teal, color: featured ? c.tealDeep : c.cream,
          border: 'none', padding: '11px 12px',
          fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700, cursor: 'pointer',
        }}>
          O'zingizni sinab ko'ring →
        </button>
      </div>
    </article>
  );
}

window.KoshinPage = KoshinPage;


// ───────────────

// Variant 3: MINIATYURA — zamonaviy muzey / galereya uslubi
// Warm cream, dusty rose, deep ink, copper hairlines. Editorial + asymmetric.

const miniStyles = {
  bg: '#f6efe2',
  bgDeep: '#ece2cd',
  ink: '#1a1410',
  ink2: '#4a3d30',
  rose: '#b35642',
  roseDeep: '#7a3225',
  copper: '#a87642',
  copperLight: '#c9a26b',
  jade: '#4a6850',
};

function MiniatyuraPage() {
  const c = miniStyles;
  const fontDisp = `'DM Serif Display', 'Cormorant Garamond', serif`;
  const fontEditorial = `'Cormorant Garamond', serif`;
  const fontBody = `'Inter', system-ui, sans-serif`;

  return (
    <div data-screen-label="Variant 3 · Miniatyura (zamonaviy)" style={{
      width: 1280,
      minHeight: 3300,
      background: c.bg,
      color: c.ink,
      fontFamily: fontBody,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* ── NAV ── */}
      <nav style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '32px 80px 24px', borderBottom: `0.5px solid ${c.copper}`,
      }}>
        <div style={{ fontFamily: fontDisp, fontSize: 26, color: c.ink, letterSpacing: '-0.01em' }}>
          Muqimiy<span style={{ color: c.rose }}>.</span>
        </div>
        <div style={{ display: 'flex', gap: 40, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: c.ink2, fontWeight: 500 }}>
          {[['Hayoti', true], ['Ijodi'], ['Asarlari'], ['Iqtibos'], ['Manbalar']].map(([s, active]) => (
            <a key={s} style={{ color: active ? c.rose : c.ink2, textDecoration: 'none', position: 'relative' }}>
              {active && <span style={{ position: 'absolute', left: -14, top: '50%', transform: 'translateY(-50%)', width: 6, height: 6, background: c.rose, borderRadius: '50%' }} />}
              {s}
            </a>
          ))}
        </div>
        <div style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: c.ink2 }}>
          UZ <span style={{ color: c.copper, margin: '0 8px' }}>/</span> <span style={{ opacity: 0.5 }}>EN</span>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        padding: '80px 80px 100px',
        display: 'grid', gridTemplateColumns: '1fr 460px', gap: 80,
        position: 'relative',
      }}>
        {/* Big quiet number on the side */}
        <div style={{
          position: 'absolute', right: -40, top: 100,
          fontFamily: fontDisp, fontSize: 380, lineHeight: 0.85,
          color: c.copperLight, opacity: 0.16, fontStyle: 'italic',
          pointerEvents: 'none',
        }}>
          53
        </div>

        <div style={{ position: 'relative', zIndex: 2, paddingTop: 30 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 40 }}>
            <span style={{ width: 32, height: 1, background: c.copper }} />
            <span style={{ fontSize: 11, letterSpacing: '0.36em', color: c.rose, textTransform: 'uppercase', fontWeight: 600 }}>
              Shoir · Mutafakkir · Hajvgo'y
            </span>
          </div>

          <h1 style={{
            fontFamily: fontDisp,
            fontSize: 132, lineHeight: 0.9, margin: '0 0 36px',
            letterSpacing: '-0.025em', color: c.ink, fontWeight: 400,
          }}>
            Muhammad<br />
            Aminxo'ja<br />
            <em style={{ fontStyle: 'italic', color: c.rose, fontFamily: fontEditorial, fontWeight: 500 }}>Muqimiy</em>
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 40 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, fontFamily: fontDisp, fontSize: 26, color: c.ink2 }}>
              <span>1850</span>
              <span style={{ width: 32, height: 1, background: c.copper, marginBottom: 8 }} />
              <span>1903</span>
            </div>
            <span style={{ fontSize: 12, letterSpacing: '0.24em', textTransform: 'uppercase', color: c.ink2 }}>Qo'qon · 53 yil</span>
          </div>

          <p style={{
            fontFamily: fontEditorial, fontSize: 26, lineHeight: 1.5,
            maxWidth: 520, margin: 0, color: c.ink2, fontStyle: 'italic',
          }}>
            “Shoir va mutafakkir, o'zbek demokratik adabiyoti
            asoschilaridan biri. O'tkir hajv va samimiy lirikasi bilan
            xalq qalbida muhrlangan ijodkor.”
          </p>

          <div style={{ display: 'flex', gap: 18, marginTop: 56 }}>
            <button style={{
              background: c.ink, color: c.bg, border: 'none',
              padding: '17px 32px', fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 600,
              fontFamily: fontBody, cursor: 'pointer',
            }}>
              Hayotini o'qish →
            </button>
            <button style={{
              background: 'transparent', color: c.ink, border: 'none',
              padding: '17px 8px', fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 600,
              fontFamily: fontBody, cursor: 'pointer', borderBottom: `1.5px solid ${c.ink}`,
            }}>
              Asarlardan namunalar
            </button>
          </div>
        </div>

        {/* Right column — vertical poster card */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            background: c.bgDeep, padding: 24, position: 'relative',
            boxShadow: '0 20px 60px rgba(26,20,16,0.12)',
          }}>
            {/* miniature painting frame */}
            <div style={{
              background: '#e8d5a0', height: 480, position: 'relative', overflow: 'hidden',
              border: `1px solid ${c.copper}`,
            }}>
              {/* Garden / miniature backdrop */}
              <div style={{ position: 'absolute', inset: 0,
                background: `linear-gradient(180deg, #d8c389 0%, #c4a96d 45%, ${c.jade} 45%, #6b8a5e 100%)`,
              }} />
              {/* sun */}
              <div style={{ position: 'absolute', top: 30, left: 30, width: 80, height: 80, background: c.copperLight, borderRadius: '50%', opacity: 0.9 }} />
              <div style={{ position: 'absolute', top: 24, left: 24, width: 92, height: 92, border: `1px solid ${c.copper}`, borderRadius: '50%', opacity: 0.4 }} />
              {/* stylised flowers / plants */}
              <svg style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} width="100%" height="260" viewBox="0 0 400 260" preserveAspectRatio="none">
                <g stroke={c.roseDeep} strokeWidth="1.2" fill="none">
                  <path d="M 60 260 L 60 180 M 60 195 L 50 185 M 60 195 L 70 185 M 60 210 L 52 200 M 60 210 L 68 200" />
                  <circle cx="60" cy="178" r="6" fill={c.rose} />
                  <path d="M 110 260 L 110 200 M 110 215 L 102 207 M 110 230 L 102 222" />
                  <circle cx="110" cy="198" r="5" fill="#c9c25a" />
                  <path d="M 320 260 L 320 170 M 320 185 L 312 175 M 320 185 L 328 175 M 320 200 L 310 190 M 320 200 L 330 190" />
                  <circle cx="320" cy="168" r="6" fill={c.rose} />
                  <path d="M 360 260 L 360 200" />
                  <circle cx="360" cy="198" r="5" fill="#c9c25a" />
                </g>
              </svg>
              {/* portrait centered */}
              <div style={{ position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%)' }}>
                <Ornament.Portrait size={220} palette={{ bg: 'transparent', skin: '#d9a36a', beard: c.ink, robe: c.jade, turban: '#f0e1bf', accent: c.roseDeep }} />
              </div>
              {/* arabesque corners */}
              <div style={{ position: 'absolute', top: 10, right: 10, color: c.copper }}>
                <Ornament.Star8 size={32} color={c.copper} stroke={1} />
              </div>
            </div>
            {/* Caption strip */}
            <div style={{ marginTop: 18, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div style={{ fontFamily: fontDisp, fontSize: 24, color: c.ink, lineHeight: 1.1 }}>
                  <em style={{ color: c.rose, fontStyle: 'italic' }}>Bog'da shoir.</em>
                </div>
                <div style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: c.ink2, marginTop: 6 }}>
                  Stilizatsiya · Miniatyura
                </div>
              </div>
              <div style={{ fontSize: 11, letterSpacing: '0.18em', color: c.copper, textAlign: 'right' }}>
                Q. №01<br />
                <span style={{ color: c.ink2, marginTop: 4, display: 'inline-block' }}>2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hayoti ── */}
      <section style={{ padding: '100px 80px 60px', borderTop: `0.5px solid ${c.copper}`, position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 60 }}>
          <div>
            <div style={{ fontFamily: fontDisp, fontSize: 13, color: c.copper, letterSpacing: '0.36em', textTransform: 'uppercase', writingMode: 'vertical-rl', transform: 'rotate(180deg)', fontWeight: 600 }}>
              I — Hayoti
            </div>
          </div>

          <div>
            <h2 style={{ fontFamily: fontDisp, fontSize: 80, lineHeight: 0.96, margin: '0 0 28px', fontWeight: 400, letterSpacing: '-0.02em', maxWidth: 780 }}>
              Bekvachcha mahallasidan
              <br /><em style={{ fontStyle: 'italic', color: c.rose, fontFamily: fontEditorial }}>Hazrat hujrasigacha.</em>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, marginTop: 50 }}>
              <p style={{ fontFamily: fontEditorial, fontSize: 21, lineHeight: 1.65, color: c.ink2, margin: 0 }}>
                1850-yili Qo'qon shahridagi Bekvachcha mahallasida novvoy
                Mirzaxo'janing oilasida tug'ildi. Otasi toshkentlik, onasi
                Oyshabibi xo'jandlik — adabiyot va san'atni sevgan, so'zga usta
                ayol edi. U yaqinlariga “Xumorbibi” deb tanildi.
              </p>
              <p style={{ fontFamily: fontEditorial, fontSize: 21, lineHeight: 1.65, color: c.ink2, margin: 0 }}>
                Nodira tomonidan qurdirilgan Mohlaroyim madrasasida, so'ngra
                Buxoroda tahsil oldi. 1885-yili otasining vafotidan keyin
                Hazrat madrasasi hujrasiga ko'chib, butun umri qashshoqlikda
                kechdi — lekin ijodi shu hujradan butun viloyatni qamradi.
              </p>
            </div>

            {/* Mini chronology */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, marginTop: 70, paddingTop: 36, borderTop: `0.5px solid ${c.copper}` }}>
              {[
                { y: '1850', t: "Tug'ilishi", p: "Qo'qon · Bekvachcha" },
                { y: '1877', t: "“Tanobchilar”", p: 'Mirzalik davri' },
                { y: '1887', t: 'Toshkent safari', p: 'Almaiy, Nodim bilan' },
                { y: '1903', t: 'Vafoti', p: "25-may · Qo'qon" },
              ].map((row, i) => (
                <div key={i}>
                  <div style={{ fontFamily: fontDisp, fontSize: 44, color: c.rose, lineHeight: 1, marginBottom: 6 }}>{row.y}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: c.ink, marginBottom: 4 }}>{row.t}</div>
                  <div style={{ fontSize: 12, color: c.ink2 }}>{row.p}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Ijodi ── */}
      <section style={{ padding: '100px 80px', background: '#1f3329', color: c.bg, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -80, right: -80, color: c.copper, opacity: 0.2 }}>
          <Ornament.Medallion size={400} color={c.copper} stroke={0.8} />
        </div>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 60, marginBottom: 60 }}>
            <div style={{ fontFamily: fontDisp, fontSize: 13, color: c.copperLight, letterSpacing: '0.36em', textTransform: 'uppercase', writingMode: 'vertical-rl', transform: 'rotate(180deg)', fontWeight: 600 }}>
              II — Ijodi
            </div>
            <div>
              <h2 style={{ fontFamily: fontDisp, fontSize: 80, lineHeight: 0.96, margin: '0 0 28px', fontWeight: 400, letterSpacing: '-0.02em' }}>
                10 ming misra
                <br /><em style={{ fontStyle: 'italic', color: c.copperLight, fontFamily: fontEditorial }}>uchta tomir.</em>
              </h2>
              <p style={{ fontFamily: fontEditorial, fontSize: 22, lineHeight: 1.65, color: 'rgba(246,239,226,0.75)', margin: 0, maxWidth: 700 }}>
                Lirika, hajviyot, Sayohatnoma — uch janrning bag'rida o'zbek mumtoz
                an'analari va xalq tilining tirik nafasi birlashadi. Navoiy, Jomiy
                va Fuzuliydan o'rgangan, Jomiyni o'ziga ustoz bildi.
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: c.copper, marginLeft: 240 }}>
            {[
              { t: 'Lirika', d: "Muhabbat, sadoqat, vafodorlik. Yuzlab she'rlar xalq qo'shig'iga aylangan.", w: "Oshiq bo'libman · Ayrilmasun · Navbahor" },
              { t: 'Hajviyot', d: 'Chor amaldorlari va boylar kirdikorlarini fosh etgan satira va yumor.', w: 'Tanobchilar · Saylov · Maskovchi boy' },
              { t: 'Sayohatnoma', d: "Farg'ona vodiysi taassurotidan. 4 qismli, o'ynoqi vaznli asar.", w: '4 qism · 4 misrali bandlar' },
            ].map((b, i) => (
              <div key={i} style={{ background: '#1f3329', padding: '40px 32px 36px', position: 'relative' }}>
                <div style={{ fontFamily: fontDisp, fontSize: 11, color: c.copperLight, letterSpacing: '0.32em', textTransform: 'uppercase', marginBottom: 14, fontWeight: 600 }}>
                  0{i + 1}
                </div>
                <h3 style={{ fontFamily: fontDisp, fontSize: 38, margin: '0 0 16px', fontWeight: 400, color: c.bg }}>
                  {b.t}<span style={{ color: c.rose }}>.</span>
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(246,239,226,0.7)', margin: '0 0 18px' }}>{b.d}</p>
                <div style={{ fontFamily: fontEditorial, fontStyle: 'italic', fontSize: 14, color: c.copperLight, paddingTop: 14, borderTop: `1px solid rgba(168,118,66,0.3)` }}>
                  {b.w}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Asarlardan namunalar ── */}
      <section style={{ padding: '100px 80px 50px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 60 }}>
          <div style={{ fontFamily: fontDisp, fontSize: 13, color: c.copper, letterSpacing: '0.36em', textTransform: 'uppercase', writingMode: 'vertical-rl', transform: 'rotate(180deg)', fontWeight: 600 }}>
            III — Asarlar
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 50 }}>
              <h2 style={{ fontFamily: fontDisp, fontSize: 80, lineHeight: 0.96, margin: 0, fontWeight: 400, letterSpacing: '-0.02em' }}>
                Asarlardan
                <br /><em style={{ fontStyle: 'italic', color: c.rose, fontFamily: fontEditorial }}>namunalar.</em>
              </h2>
              <a style={{ fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', color: c.ink, fontWeight: 600, borderBottom: `1px solid ${c.ink}`, paddingBottom: 4 }}>
                Devon ↗
              </a>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
              <PoemCardMini
                n="i."
                title="Tanobchilar"
                kind="Hajv · 1877"
                year="1877"
                lines={[
                  "Bo'ldi taajjub qiziq hangomalar,",
                  "Arz etayin emdi yozib nomalar.",
                  "O'n iki oyda keladur bir tanob,",
                  "O'zgalara rohat-u menga azob.",
                ]}
              />
              <PoemCardMini
                n="ii."
                title="Navbahor"
                kind="G'azal · Lirika"
                year=""
                lines={[
                  "Ochildi gullar, sabza bo'ldi bog'lar!",
                  "Suhbat aylaylik, kelinglar, jo'ralar, o'rtog'lar!",
                  "Xush bu mahfilda tiriklik ulfatu ahbob ila,",
                  "O'ynashib, gohe tabiatni qilaylik chog'lar!",
                ]}
                accent
              />
              <PoemCardMini
                n="iii."
                title="Sayohatnoma"
                kind="Sayohat · 1888"
                year="1888"
                lines={[
                  "Kelganim ushbu makonga qiladur manga alam,",
                  "Loyiqi tab' yo'q odamki, desam hasratu g'am,",
                  "Gaplashurg'a kishi yo'q ertadin oqshomg'acha ham,",
                  "Kun sovuq, qora chiroq, go'rdek uyu, o'tin kam.",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Pull quote ── */}
      <section style={{ padding: '120px 80px 100px', textAlign: 'center', position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 36, color: c.copper }}>
          <Ornament.Divider width={520} color={c.copper} stroke={1} />
        </div>
        <blockquote style={{
          fontFamily: fontDisp, fontStyle: 'italic',
          fontSize: 52, lineHeight: 1.3, color: c.ink, margin: '0 auto', fontWeight: 400,
          maxWidth: 980, letterSpacing: '-0.01em',
        }}>
          Hayfkim, ahli tamiz ushbu mahalda xor ekan,<br />
          <span style={{ color: c.rose }}>Oldilar har yerda bulbul oshiyonin zog'lar.</span>
        </blockquote>
        <div style={{ marginTop: 40, fontSize: 11, letterSpacing: '0.36em', textTransform: 'uppercase', color: c.copper, fontWeight: 600 }}>
          — Navbahor g'azalidan
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ borderTop: `0.5px solid ${c.copper}`, padding: '50px 80px 36px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 24 }}>
          <div>
            <div style={{ fontFamily: fontDisp, fontSize: 36, color: c.ink, lineHeight: 1 }}>
              Muqimiy<span style={{ color: c.rose }}>.</span>
            </div>
            <div style={{ fontSize: 11, letterSpacing: '0.32em', textTransform: 'uppercase', color: c.ink2, marginTop: 8 }}>
              1850 — 1903 · Qo'qon
            </div>
          </div>
          <div style={{ display: 'flex', gap: 60 }}>
            <div>
              <div style={{ fontSize: 10, letterSpacing: '0.32em', color: c.copper, textTransform: 'uppercase', marginBottom: 10, fontWeight: 700 }}>Manbalar</div>
              <div style={{ fontSize: 13, lineHeight: 1.9, color: c.ink2 }}>tafakkur.net<br />n.ziyouz.com<br />arboblar.uz</div>
            </div>
            <div>
              <div style={{ fontSize: 10, letterSpacing: '0.32em', color: c.copper, textTransform: 'uppercase', marginBottom: 10, fontWeight: 700 }}>Tadqiqotlar</div>
              <div style={{ fontSize: 13, lineHeight: 1.9, color: c.ink2 }}>researchgate.net<br />cyberleninka.ru</div>
            </div>
          </div>
        </div>
        <div style={{ paddingTop: 24, borderTop: `0.5px solid ${c.copper}`, display: 'flex', justifyContent: 'space-between', fontSize: 11, color: c.ink2, letterSpacing: '0.12em' }}>
          <div>© 2026 — Bayozi Muqimiy. Mehnat va hurmat ila tuzilgan.</div>
          <div>Tafakkur · Adabiyot · Hayot</div>
        </div>
      </footer>
    </div>
  );
}

function PoemCardMini({ n, title, kind, lines, accent, year }) {
  const c = miniStyles;
  const fontDisp = `'DM Serif Display', serif`;
  const fontEditorial = `'Cormorant Garamond', serif`;
  return (
    <article style={{
      background: accent ? c.bgDeep : 'transparent',
      padding: accent ? 32 : '32px 4px',
      borderTop: `2px solid ${accent ? c.rose : c.ink}`,
      display: 'flex', flexDirection: 'column',
      position: 'relative',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 18 }}>
        <div style={{ fontFamily: fontEditorial, fontStyle: 'italic', fontSize: 22, color: accent ? c.rose : c.copper }}>{n}</div>
        <div style={{ fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: c.ink2, fontWeight: 600 }}>{kind}</div>
      </div>
      <h3 style={{ fontFamily: fontDisp, fontSize: 40, margin: '0 0 22px', fontWeight: 400, lineHeight: 1.05, color: c.ink, letterSpacing: '-0.01em' }}>
        {title}{accent && <span style={{ color: c.rose }}>.</span>}
      </h3>
      <div style={{ paddingTop: 4, marginBottom: 28 }}>
        {lines.map((l, i) => (
          <div key={i} style={{ fontFamily: fontEditorial, fontStyle: 'italic', fontSize: 19, lineHeight: 1.6, color: c.ink }}>
            {l}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 'auto', display: 'flex', gap: 8, alignItems: 'center' }}>
        <button style={{
          flex: 1, background: 'transparent', color: c.ink,
          border: `1px solid ${c.ink}`, padding: '12px 14px',
          fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700, cursor: 'pointer',
          fontFamily: "'Inter', sans-serif",
        }}>
          PDF ↓
        </button>
        <button style={{
          flex: 2, background: c.ink, color: c.bg,
          border: 'none', padding: '12px 14px',
          fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700, cursor: 'pointer',
          fontFamily: "'Inter', sans-serif",
        }}>
          O'zingizni sinab ko'ring →
        </button>
      </div>
    </article>
  );
}

window.MiniatyuraPage = MiniatyuraPage;


// ───────────────

// App — composes 3 variants onto a DesignCanvas

const { DesignCanvas, DCSection, DCArtboard } = window;

function App() {
  return (
    <DesignCanvas
      title="Muqimiy sayti — bosh sahifa"
      subtitle="3 vizual yo'nalish · sharq miniatyurasi ruhida"
    >
      <DCSection
        id="hero-variants"
        title="Bosh sahifa · 3 variant"
        subtitle="Har biri butun saytning vizual tilini belgilaydi. Birini tanlasak — boshqa sahifalarni shu uslubda davom ettiramiz."
      >
        <DCArtboard id="v1-bayoz" label="A · Bayoz — qo'lyozma" width={1280} height={3100}>
          <BayozPage />
        </DCArtboard>
        <DCArtboard id="v2-koshin" label="B · Koshin — Buxoro" width={1280} height={3200}>
          <KoshinPage />
        </DCArtboard>
        <DCArtboard id="v3-mini" label="C · Miniatyura — zamonaviy" width={1280} height={3300}>
          <MiniatyuraPage />
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

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

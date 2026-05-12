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

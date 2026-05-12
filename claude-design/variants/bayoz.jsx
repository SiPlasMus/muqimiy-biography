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

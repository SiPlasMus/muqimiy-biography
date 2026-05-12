function HomePage() {
  const { c, mode } = useTheme();
  return (
    <PageShell current="Muqimiy.html">
      {/* ── HERO ── */}
      <section style={{
        background: c.teal, color: c.cream,
        display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 0,
        position: 'relative', overflow: 'hidden', minHeight: 700, padding: '0 0 0 80px',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.07, pointerEvents: 'none',
          backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(
            `<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80' fill='none' stroke='%23d68b1f' stroke-width='1'><polygon points='40,4 50,30 76,40 50,50 40,76 30,50 4,40 30,30'/><polygon points='40,4 50,30 76,40 50,50 40,76 30,50 4,40 30,30' transform='rotate(22.5 40 40)'/><circle cx='40' cy='40' r='6'/></svg>`
          )}")`, backgroundSize: '80px 80px',
        }} />
        <div style={{ position: 'relative', zIndex: 2, padding: '90px 40px 90px 0', alignSelf: 'center' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 14, marginBottom: 32,
            background: 'rgba(214,139,31,0.14)', border: `1px solid ${c.saffron}`, padding: '8px 18px',
          }}>
            <Tile size={18} color={c.saffron} />
            <span style={{ fontSize: 11, letterSpacing: '0.32em', color: c.saffron, textTransform: 'uppercase', fontWeight: 700 }}>
              Qo'qon adabiy muhiti
            </span>
          </div>
          <h1 style={{ fontFamily: fontDisp, fontSize: 112, lineHeight: 0.94, margin: '0 0 28px', fontWeight: 900, letterSpacing: '-0.02em' }}>
            <span style={{ color: c.saffron }}>M</span>uhammad<br />Aminxo'ja<br />
            <span style={{ fontStyle: 'italic', fontWeight: 400 }}>Muqimiy.</span>
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.7, maxWidth: 500, margin: '0 0 40px', color: 'rgba(244,234,212,0.78)' }}>
            XIX asr o'zbek mumtoz adabiyotining yirik namoyandasi. O'tkir hajviyoti bilan
            amaldorlar zulmini fosh etgan, samimiy lirikasi xalq qo'shig'iga aylanib ketgan shoir.
          </p>
          <div style={{ display: 'flex', gap: 14, marginBottom: 50 }}>
            <a href="Hayoti.html" style={{
              background: c.saffron, color: c.tealDeep, padding: '14px 26px',
              fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
              textDecoration: 'none',
            }}>Hayoti bilan tanishish →</a>
            <a href="Asarlari.html" style={{
              background: 'transparent', color: c.cream, padding: '14px 26px',
              fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
              textDecoration: 'none', border: `1px solid ${c.cream}`,
            }}>Asarlari</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: 48 }}>
            {[{ n: '10K+', l: 'Misra' }, { n: '30+', l: 'Hajviy asar' }, { n: '4', l: 'Sayohatnoma' }].map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily: fontDisp, fontSize: 52, color: c.saffron, lineHeight: 1, fontWeight: 700 }}>{s.n}</div>
                <div style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(244,234,212,0.6)', marginTop: 6 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'stretch', justifyContent: 'center' }}>
          <div style={{ position: 'absolute', right: 80, top: 70, bottom: 70, width: 360, background: c.saffron }} />
          <div style={{ position: 'absolute', right: 120, top: 110, width: 320, background: c.tealDeep, border: `8px solid ${c.cream}` }}>
            <div style={{ height: 440, background: c.tealMid, position: 'relative', overflow: 'hidden', display: 'grid', placeItems: 'end center' }}>
              <div style={{ position: 'absolute', inset: 0, opacity: 0.18,
                backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(
                  `<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80' fill='none' stroke='%23f4ead4' stroke-width='1'><polygon points='40,4 50,30 76,40 50,50 40,76 30,50 4,40 30,30'/></svg>`
                )}")`, backgroundSize: '60px 60px',
              }} />
              <Portrait size={320} palette={{ bg: 'transparent', skin: '#dca06a', beard: '#1a0d05', robe: c.saffronDeep, turban: c.cream, accent: c.pomegranate }} />
            </div>
            <div style={{ background: c.cream, color: '#0a2024', padding: '16px 20px', display: 'flex', justifyContent: 'space-between' }}>
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

      {/* ── Intro grid ── */}
      <section style={{ padding: '90px 80px', background: c.bg }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start' }}>
          <div>
            <SectionTag>Kim u Muqimiy?</SectionTag>
            <H2>Demokratik<br /><span style={{ fontStyle: 'italic', fontWeight: 400, color: c.pomegranate }}>adabiyot</span><br />asoschisi.</H2>
          </div>
          <div style={{ fontSize: 17, lineHeight: 1.8, color: mode === 'dark' ? 'rgba(244,234,212,0.8)' : c.tealMid }}>
            <p style={{ margin: '0 0 22px' }}>
              Muhammad Aminxo'ja Mirzaxo'ja o'g'li 1850-yili Qo'qon shahrining Bekvachcha mahallasida,
              novvoy oilasida tug'ildi. Onasi Xumorbibi — Xo'jandlik, so'zga usta, adabiyot va san'atni ulug'lovchi ayol —
              yosh Muhammad Aminxo'jada she'riyatga ixlosni uyg'otdi.
            </p>
            <p style={{ margin: 0 }}>
              Navoiy, Jomiy, Nizomiy va Fuzuliydan o'rgangan, ular g'azallariga muxammaslar bog'lagan.
              O'zbek adabiyotida <strong style={{ color: c.text }}>demokratik yo'nalishning vujudga kelishi</strong> Muqimiy nomi bilan bog'liq —
              u boshchiligida Furqat, Zavqiy, Avaz, Komil kabi ilg'or fikrli shoirlar adabiyot tarixida yangi sahifa ochdilar.
            </p>
          </div>
        </div>
      </section>

      {/* ── Three threads (Ijodi) ── */}
      <section style={{ padding: '70px 80px', background: c.tealDeep, color: c.cream, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -120, top: -120, opacity: 0.08, color: c.saffron }}>
          <Medallion size={520} color={c.saffron} stroke={1} />
        </div>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 50 }}>
            <div>
              <div style={{ fontSize: 11, letterSpacing: '0.32em', color: c.saffron, textTransform: 'uppercase', fontWeight: 700, marginBottom: 12 }}>Ijodi</div>
              <h2 style={{ fontFamily: fontDisp, fontSize: 64, margin: 0, fontWeight: 900, lineHeight: 1, letterSpacing: '-0.02em' }}>
                Uch ijodiy<br /><span style={{ fontStyle: 'italic', fontWeight: 400, color: c.saffron }}>tomir.</span>
              </h2>
            </div>
            <a href="Ijodi.html" style={{
              color: c.cream, fontSize: 12, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase',
              border: `1px solid ${c.saffron}`, padding: '14px 26px', textDecoration: 'none',
            }}>Batafsil →</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 4 }}>
            {[
              { n: '01', t: 'Lirika', d: "Muhabbat, do'stlik, sadoqat, vafodorlik. Yuzlab she'rlari xalq qo'shig'iga aylangan." },
              { n: '02', t: 'Hajviyot', d: "Tanobchilar, Saylov, Maskovchi boy — chor amaldorlari va boylarning kirdikorlarini fosh etgan satira." },
              { n: '03', t: 'Sayohatnoma', d: "Farg'ona vodiysi bo'ylab sayohatlar. O'ynoqi vaznli, 4 misrali bandlardan iborat asar." },
            ].map((t, i) => (
              <div key={i} style={{ background: '#1a4f57', padding: '40px 32px 32px', borderLeft: `4px solid ${c.saffron}` }}>
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

      {/* ── Sample poems ── */}
      <section style={{ padding: '90px 80px 50px', background: c.bg }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 40 }}>
          <div>
            <SectionTag>Asarlardan namunalar</SectionTag>
            <H2>She'rlardan <span style={{ fontStyle: 'italic', fontWeight: 400, color: c.pomegranate }}>misol.</span></H2>
          </div>
          <a href="Asarlari.html" style={{
            background: 'transparent', color: c.text, border: `1.5px solid ${c.text}`,
            padding: '14px 28px', fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none',
          }}>Devondan barchasi →</a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          <PoemCard n="01" title="Tanobchilar" kind="Hajv · 1877" featured lines={[
            "Bo'ldi taajjub qiziq hangomalar,",
            "Arz etayin emdi yozib nomalar.",
            "O'n iki oyda keladur bir tanob,",
            "O'zgalara rohat-u menga azob.",
          ]} />
          <PoemCard n="02" title="Navbahor" kind="G'azal" lines={[
            "Ochildi gullar, sabza bo'ldi bog'lar!",
            "Suhbat aylaylik, kelinglar, jo'ralar, o'rtog'lar!",
            "Xush bu mahfilda tiriklik ulfatu ahbob ila,",
            "O'ynashib, gohe tabiatni qilaylik chog'lar!",
          ]} />
          <PoemCard n="03" title="Sayohatnoma" kind="Sayohat" lines={[
            "Kelganim ushbu makonga qiladur manga alam,",
            "Loyiqi tab' yo'q odamki, desam hasratu g'am,",
            "Gaplashurg'a kishi yo'q ertadin oqshomg'acha ham,",
            "Kun sovuq, qora chiroq, go'rdek uyu, o'tin kam.",
          ]} />
        </div>
      </section>

      {/* ── Pull quote ── */}
      <section style={{ background: c.saffron, padding: '80px 100px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1,
          backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(
            `<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60' fill='none' stroke='%23072b30' stroke-width='1'><polygon points='30,3 38,22 57,30 38,38 30,57 22,38 3,30 22,22'/></svg>`
          )}")`, backgroundSize: '60px 60px',
        }} />
        <div style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 50, alignItems: 'center' }}>
          <div style={{ fontFamily: fontDisp, fontSize: 220, color: c.teal, lineHeight: 0.7, fontWeight: 900 }}>“</div>
          <div>
            <blockquote style={{ fontFamily: fontDisp, fontStyle: 'italic', fontSize: 42, lineHeight: 1.35, color: c.tealDeep, margin: 0, fontWeight: 500 }}>
              Hayfkim, ahli tamiz ushbu mahalda xor ekan,<br />
              Oldilar har yerda bulbul oshiyonin zog'lar.
            </blockquote>
            <div style={{ marginTop: 24, fontSize: 12, letterSpacing: '0.32em', textTransform: 'uppercase', color: c.tealDeep, fontWeight: 700 }}>
              — Navbahor g'azalidan
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function PoemCard({ n, title, kind, lines, featured }) {
  const { c, mode } = useTheme();
  return (
    <article style={{
      background: featured ? c.teal : c.panel,
      color: featured ? c.cream : c.text,
      padding: '32px 28px 24px',
      border: `1px solid ${featured ? c.teal : (mode === 'dark' ? '#1a3438' : c.creamDark)}`,
      display: 'flex', flexDirection: 'column',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 22 }}>
        <div style={{ fontFamily: fontDisp, fontSize: 32, fontWeight: 700, color: featured ? c.saffron : c.saffronDeep }}>{n}</div>
        <div style={{ fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: featured ? 'rgba(244,234,212,0.7)' : c.muted, fontWeight: 700 }}>{kind}</div>
      </div>
      <h3 style={{ fontFamily: fontDisp, fontSize: 36, margin: '0 0 22px', fontWeight: 700, color: featured ? c.cream : c.teal, lineHeight: 1.05 }}>{title}</h3>
      <div style={{ borderTop: `2px solid ${featured ? c.saffron : (mode === 'dark' ? '#2a3a3e' : c.creamDark)}`, paddingTop: 18, marginBottom: 26 }}>
        {lines.map((l, i) => (
          <div key={i} style={{ fontFamily: fontDisp, fontStyle: 'italic', fontSize: 18, lineHeight: 1.65, color: featured ? c.cream : c.text }}>{l}</div>
        ))}
      </div>
      <div style={{ marginTop: 'auto', display: 'flex', gap: 8 }}>
        <button style={{
          flex: 1, background: 'transparent', color: featured ? c.cream : c.teal,
          border: `1px solid ${featured ? 'rgba(244,234,212,0.4)' : c.teal}`, padding: '11px 12px',
          fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700, cursor: 'pointer',
        }}>PDF</button>
        <button style={{
          flex: 2, background: featured ? c.saffron : c.teal, color: featured ? c.tealDeep : c.cream,
          border: 'none', padding: '11px 12px',
          fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700, cursor: 'pointer',
        }}>O'zingizni sinab ko'ring →</button>
      </div>
    </article>
  );
}

window.HomePage = HomePage;
window.PoemCard = PoemCard;

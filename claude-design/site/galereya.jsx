function GalereyaPage() {
  const { c, mode } = useTheme();
  const items = [
    { t: "Muqimiy portreti", k: "Tasvir", note: "Shoirning an'anaviy chizgilangan portreti — sallasi, oq soqoli bilan." },
    { t: "Qo'qon shahri", k: "XIX asr", note: "Muqimiy tug'ilib o'sgan Bekvachcha mahallasi joylashgan shahar." },
    { t: "Mohlaroyim madrasasi", k: "Madrasa", note: "Nodira tomonidan qurdirilgan, Muqimiy ta'lim olgan madrasa." },
    { t: "Buxoro madrasasi", k: "Madrasa", note: "1875–76 yillarda Muqimiy o'qigan Buxoro madrasalaridan." },
    { t: "Hazrat hujrasi", k: "Yashash joyi", note: "Otasi vafotidan keyin Muqimiy ko'chgan kichik hujra." },
    { t: "Devoni Muqimiy 1907", k: "Kitob", note: "Vafotidan keyin chop etilgan birinchi devon." },
    { t: "Muqimiy qo'lyozmasi", k: "Qo'lyozma", note: "Bayozlarda saqlangan she'rlardan namuna." },
    { t: "Muqimiy uy-muzeyi", k: "Muzey", note: "Qo'qonda tashkil etilgan uy-muzey." },
  ];
  return (
    <PageShell current="Galereya.html">
      <section style={{ padding: '90px 80px 50px', background: c.bg, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
        <div><SectionTag>IV — Galereya</SectionTag><H2 style={{ fontSize: 88 }}>Shoirning<br /><span style={{ fontStyle: 'italic', fontWeight: 400, color: c.pomegranate }}>dunyosi.</span></H2></div>
        <div style={{ fontSize: 17, lineHeight: 1.8, color: c.muted, alignSelf: 'end' }}>
          <p style={{ margin: 0 }}>Muqimiy hayoti va ijodi bilan bog'liq joylar, qo'lyozmalar va kitoblar. Rasm joylari joylashtirilgan — keyinroq haqiqiy materiallar bilan to'ldiramiz.</p>
        </div>
      </section>
      <section style={{ padding: '30px 80px 80px', background: c.bg }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
          {items.map((it, i) => (
            <figure key={it.t} style={{ margin: 0, background: mode === 'dark' ? c.panel : '#fff', border: `1px solid ${mode === 'dark' ? '#1a3438' : c.creamDark}` }}>
              <div style={{ aspectRatio: '1/1.15', background: i % 3 === 0 ? c.teal : (i % 3 === 1 ? c.saffron : c.tealMid), position: 'relative', overflow: 'hidden', display: 'grid', placeItems: 'center' }}>
                <div style={{ position: 'absolute', inset: 0, opacity: 0.15,
                  backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(
                    `<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60' fill='none' stroke='%23f4ead4' stroke-width='1'><polygon points='30,3 38,22 57,30 38,38 30,57 22,38 3,30 22,22'/></svg>`
                  )}")`, backgroundSize: '60px 60px' }} />
                {i === 0 ? (
                  <Portrait size={200} palette={{ bg: 'transparent', skin: '#dca06a', beard: '#1a0d05', robe: c.saffronDeep, turban: c.cream, accent: c.pomegranate }} />
                ) : (
                  <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', color: c.cream, padding: 20 }}>
                    <Medallion size={120} color={c.cream} stroke={1} />
                    <div style={{ fontSize: 10, letterSpacing: '0.32em', textTransform: 'uppercase', marginTop: 12, opacity: 0.85 }}>Rasm joyi</div>
                  </div>
                )}
              </div>
              <figcaption style={{ padding: '16px 18px 18px' }}>
                <div style={{ fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: c.saffronDeep, fontWeight: 700, marginBottom: 6 }}>{it.k}</div>
                <h3 style={{ fontFamily: fontDisp, fontSize: 22, margin: '0 0 8px', fontWeight: 700, color: c.text }}>{it.t}</h3>
                <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: c.muted }}>{it.note}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
window.GalereyaPage = GalereyaPage;

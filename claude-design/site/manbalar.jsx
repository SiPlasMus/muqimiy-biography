function ManbalarPage() {
  const { c, mode } = useTheme();
  const sources = [
    { t: "tafakkur.net", url: "https://tafakkur.net/muhammad-aminxoja-muqimiy.haqida", k: "Tarjimai hol", d: "Muhammad Aminxo'ja Muqimiy hayoti va ijodi haqida batafsil maqola." },
    { t: "n.ziyouz.com — Tanlangan asarlar (1953)", url: "https://n.ziyouz.com/books/uzbek_mumtoz_adabiyoti/Muqimiy.%20Tanlangan%20asarlar%20(1953).pdf", k: "Devon · PDF", d: "Muqimiyning tanlangan asarlari to'plami. 1953 yilgi nashr." },
    { t: "arboblar.uz", url: "https://arboblar.uz/uz/people/mukimi", k: "Biografiya", d: "Shoir hayoti, ijodi va merosiga oid umumiy ma'lumot." },
    { t: "uz.wikipedia.org", url: "https://uz.wikipedia.org/wiki/Muqimiy", k: "Ensiklopediya", d: "Vikipediya — to'liq tarjimai hol va asarlar ro'yxati." },
    { t: "researchgate.net", url: "https://www.researchgate.net/publication/377815609_MUQIMIY_HAYOTI_VA_IJODI", k: "Tadqiqot", d: "Muqimiy hayoti va ijodi bo'yicha ilmiy maqola." },
    { t: "cyberleninka.ru — Sayohatnoma tahlili", url: "https://cyberleninka.ru/article/n/muqimiyning-sayohatnoma-sida-davr-muhit-voqelik-tasviri", k: "Tadqiqot", d: "“Sayohatnoma”da davr, muhit va voqelik tasviri haqida ilmiy maqola." },
    { t: "Lirik asarlarining matniy-qiyosiy tahlili", url: "#", k: "Dissertatsiya · PDF", d: "Muqimiyning lirik asarlari matniy-qiyosiy tahlili bo'yicha tadqiqot." },
    { t: "Sputnik O'zbekiston — biografiya", url: "https://oz.sputniknews.uz/20231025/muqimiy-biografiya-40336201.html", k: "Maqola", d: "Sputnik O'zbekiston'dagi tarjimai hol maqolasi." },
  ];
  const books = [
    { t: "Devoni Muqimiy", y: "1907", d: "Vafotidan keyin chop etilgan birinchi devon." },
    { t: "Muqimiy maa hajviyot", y: "1910", d: "Hajviy she'rlarining alohida nashri." },
    { t: "Muqimiy bayozi", y: "1930-yillar", d: "G'afur G'ulom tomonidan tuzilgan to'plam." },
    { t: "Muqimiy ijodiy merosi (2 jild)", y: "1960", d: "G'.Karimov tuzgan ikki jildlik akademik nashr." },
  ];
  return (
    <PageShell current="Manbalar.html">
      <section style={{ padding: '90px 80px 50px', background: c.bg, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
        <div><SectionTag>V — Manbalar</SectionTag><H2 style={{ fontSize: 88 }}>O'qish<br /><span style={{ fontStyle: 'italic', fontWeight: 400, color: c.pomegranate }}>uchun.</span></H2></div>
        <div style={{ fontSize: 17, lineHeight: 1.8, color: c.muted, alignSelf: 'end' }}>
          <p style={{ margin: 0 }}>Muqimiy hayoti va ijodini chuqurroq o'rganmoqchi bo'lganlar uchun veb-manbalar, ilmiy tadqiqotlar va bosma nashrlar.</p>
        </div>
      </section>

      <section style={{ padding: '20px 80px 30px', background: c.bg }}>
        <div style={{ fontSize: 11, letterSpacing: '0.32em', textTransform: 'uppercase', color: c.saffronDeep, fontWeight: 700, marginBottom: 20 }}>Veb-manbalar va tadqiqotlar</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 12 }}>
          {sources.map((s, i) => (
            <a key={i} href={s.url} target="_blank" rel="noopener" style={{
              background: mode === 'dark' ? c.panel : '#fff',
              border: `1px solid ${mode === 'dark' ? '#1a3438' : c.creamDark}`,
              padding: '24px 28px', display: 'block', textDecoration: 'none', color: c.text,
              transition: 'border-color 0.15s',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                <h3 style={{ fontFamily: fontDisp, fontSize: 24, margin: 0, fontWeight: 700, color: c.teal, lineHeight: 1.2 }}>{s.t}</h3>
                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke={c.saffronDeep} strokeWidth="1.5"><path d="M3 13L13 3M13 3H6M13 3V10" strokeLinecap="round" /></svg>
              </div>
              <div style={{ fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: c.saffronDeep, fontWeight: 700, marginBottom: 10 }}>{s.k}</div>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: c.muted }}>{s.d}</p>
            </a>
          ))}
        </div>
      </section>

      <section style={{ padding: '60px 80px', background: c.tealDeep, color: c.cream }}>
        <div style={{ fontSize: 11, letterSpacing: '0.32em', textTransform: 'uppercase', color: c.saffron, fontWeight: 700, marginBottom: 20 }}>Bosma nashrlar</div>
        <h2 style={{ fontFamily: fontDisp, fontSize: 56, margin: '0 0 40px', fontWeight: 900, lineHeight: 1 }}>
          Asosiy <span style={{ fontStyle: 'italic', fontWeight: 400, color: c.saffron }}>kitoblar.</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
          {books.map((b, i) => (
            <div key={b.t} style={{ borderTop: `2px solid ${c.saffron}`, paddingTop: 20 }}>
              <div style={{ fontFamily: fontDisp, fontSize: 32, fontWeight: 700, color: c.saffron, marginBottom: 6 }}>{b.y}</div>
              <h3 style={{ fontFamily: fontDisp, fontSize: 22, margin: '0 0 10px', fontWeight: 700 }}>{b.t}</h3>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: 'rgba(244,234,212,0.7)' }}>{b.d}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
window.ManbalarPage = ManbalarPage;

function IjodiPage() {
  const { c, mode } = useTheme();
  const threads = [
    { n: '01', t: 'Lirika', d: "Muhabbat, do'stlik, sadoqat, samimiyat, vafodorlik, sabot va matonat ulug'langan. Yuzlab she'rlari xalq qo'shig'iga aylangan.", works: ["Navbahor", "Oshiq bo'libman", "Ayrilmasun", "Ko'zlaring", "Yolg'uz", "Aqlu hush..."] },
    { n: '02', t: 'Hajviyot — satira', d: "Chor amaldorlari va boylarning kirdikorlari ochib tashlangan. Mustamlakachilik azobi, jamiyatdagi illatlar tanqid qilingan.", works: ["Tanobchilar", "Saylov", "Dar mazammati zamona", "Maskovchi boy", "Hajvi Viktor", "To'y"] },
    { n: '03', t: 'Hajviyot — yumor', d: "Turmushning qoloq va chirkin tomonlari, ijtimoiy ongdagi nuqsonlar ustidan kulgan. 30 ga yaqin yumoristik asar.", works: ["Loy", "Pashshalar", "Bezgak", "Ot", "Ko'samen", "Devonamen", "Burun"] },
    { n: '04', t: 'Sayohatnoma', d: "Farg'ona vodiysi bo'ylab sayohatlar taassurotlari. 4 qismli, o'ynoqi vaznli, 4 misrali bandlardan iborat asar.", works: ["I qism — Sayohatnoma", "II qism", "III qism", "IV qism"] },
  ];
  const masters = [
    { n: 'Navoiy', d: "G'azal an'analari, til boyligi va san'atining cho'qqisi." },
    { n: 'Jomiy', d: "Muqimiy o'ziga ustoz bildi. Forsiy nazm mahorati." },
    { n: 'Nizomiy', d: "Doston yozish, hikoyat tuzilishi." },
    { n: 'Fuzuliy', d: "Muhabbat lirikasining hassosligi, ohorli misralar." },
  ];
  return (
    <PageShell current="Ijodi.html">
      <section style={{ padding: '90px 80px 50px', background: c.bg, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
        <div>
          <SectionTag>II — Ijodi</SectionTag>
          <H2 style={{ fontSize: 88 }}>To'rt<br /><span style={{ fontStyle: 'italic', fontWeight: 400, color: c.pomegranate }}>ijodiy</span><br />yo'nalish.</H2>
        </div>
        <div style={{ fontSize: 17, lineHeight: 1.8, color: c.muted, alignSelf: 'end' }}>
          <p style={{ margin: 0 }}>
            Muqimiy adabiy merosi <strong style={{ color: c.text }}>10 ming misradan</strong> iborat — lirika,
            hajviyot, sayohatnoma va maktublardan tashkil topgan. Ijodining ilk davrida shaklbozlik
            unsurlari uchrasa-da, tez orada bu an'anadan voz kechib, jamiyat illatlariga tanqidiy nazar bilan qaragan.
          </p>
        </div>
      </section>

      <section style={{ padding: '40px 80px 80px', background: c.bg }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 4 }}>
          {threads.map(t => (
            <div key={t.n} style={{
              background: mode === 'dark' ? c.panel : '#fff',
              border: `1px solid ${mode === 'dark' ? '#1a3438' : c.creamDark}`,
              padding: '40px 36px',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
                <div style={{ fontFamily: fontDisp, fontSize: 14, color: c.saffronDeep, fontWeight: 700, letterSpacing: '0.32em' }}>{t.n}</div>
                <Tile size={28} color={c.saffron} opacity={0.7} />
              </div>
              <h3 style={{ fontFamily: fontDisp, fontSize: 44, margin: '0 0 16px', fontWeight: 700, color: c.teal, lineHeight: 1.05 }}>{t.t}</h3>
              <p style={{ margin: '0 0 22px', fontSize: 16, lineHeight: 1.7, color: c.muted }}>{t.d}</p>
              <div style={{ borderTop: `1px solid ${mode === 'dark' ? '#1a3438' : c.creamDark}`, paddingTop: 18 }}>
                <div style={{ fontSize: 10, letterSpacing: '0.32em', textTransform: 'uppercase', color: c.saffronDeep, fontWeight: 700, marginBottom: 12 }}>Mashhur asarlari</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {t.works.map(w => (
                    <span key={w} style={{
                      fontFamily: fontDisp, fontSize: 14, fontStyle: 'italic',
                      padding: '5px 12px', border: `1px solid ${c.teal}`, color: c.teal,
                    }}>{w}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Masters band */}
      <section style={{ background: c.tealDeep, color: c.cream, padding: '80px 80px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 50 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.32em', color: c.saffron, textTransform: 'uppercase', fontWeight: 700, marginBottom: 12 }}>Ustozlar</div>
            <h2 style={{ fontFamily: fontDisp, fontSize: 56, margin: 0, fontWeight: 900, lineHeight: 1 }}>
              Sharq mumtoz<br /><span style={{ fontStyle: 'italic', fontWeight: 400, color: c.saffron }}>shoirlaridan</span> o'rgangan.
            </h2>
          </div>
          <p style={{ maxWidth: 380, fontSize: 15, lineHeight: 1.7, color: 'rgba(244,234,212,0.7)', margin: 0 }}>
            Ularning g'azallariga muxammaslar bog'lagan. O'zbek va fors mumtoz shoirlari an'analarini davom ettirgan.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
          {masters.map((m, i) => (
            <div key={m.n}>
              <div style={{ width: 60, height: 60, background: c.saffron, color: c.tealDeep, display: 'grid', placeItems: 'center', fontFamily: fontDisp, fontSize: 24, fontWeight: 700, marginBottom: 20 }}>{String(i+1).padStart(2,'0')}</div>
              <h3 style={{ fontFamily: fontDisp, fontSize: 34, margin: '0 0 12px', fontWeight: 700 }}>{m.n}</h3>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: 'rgba(244,234,212,0.7)' }}>{m.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Movement */}
      <section style={{ padding: '80px 80px', background: c.bg, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
        <div>
          <SectionTag>Adabiy harakat</SectionTag>
          <H2 style={{ fontSize: 56 }}>Demokratik<br /><span style={{ fontStyle: 'italic', fontWeight: 400, color: c.pomegranate }}>yo'nalish</span> asoschisi.</H2>
        </div>
        <div style={{ fontSize: 16, lineHeight: 1.8, color: c.muted }}>
          <p style={{ margin: '0 0 16px' }}>
            O'zbek adabiyotida demokratik yo'nalishning vujudga kelishi Muqimiy nomi bilan bog'liq.
            U boshchiligida <strong style={{ color: c.text }}>Furqat, Zavqiy, Avaz, Komil</strong> kabi ilg'or
            fikrli shoirlar adabiyot tarixida yangi sahifa ochdilar.
          </p>
          <p style={{ margin: 0 }}>
            Toshkentda Almaiy, Nodim Namangoniy, Karimbek Kamiy bilan yaqin ijodiy aloqada bo'ldi.
            Muqimiy o'zbek adabiyotiga <strong style={{ color: c.text }}>ishchilar mavzusini</strong> olib kirdi,
            tiplar galereyasini yaratdi.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
window.IjodiPage = IjodiPage;

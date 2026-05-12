function HayotiPage() {
  const { c, mode } = useTheme();
  const events = [
    { y: '1850', t: "Qo'qonda tug'ilish", d: "Bekvachcha mahallasida novvoy Mirzaxo'janing oilasida tug'ildi. Onasi Xumorbibi — xo'jandlik, so'zga usta ayol." },
    { y: '1864', t: "Mohlaroyim madrasasi", d: "Nodira tomonidan qurdirilgan Qo'qon madrasasida dastlabki ta'lim. Onasi she'riyatga ixlosini uyg'otdi." },
    { y: '1875', t: "Buxoroga safar", d: "Buxoro madrasalaridan birida o'qishni davom ettiradi. Sharq mumtoz adabiyotini chuqur o'rganadi." },
    { y: '1876', t: "Qo'qonga qaytish", d: "Yer qurilishi mahkamasiga mirzalik vazifasiga ishga kiradi." },
    { y: '1877', t: "“Tanobchilar” satirasi", d: "Yer o'lchovchi amaldorlarning hiyla-nayranglarini ko'rib, mashhur hajviyasini yozadi. Bu uni elga taniqli hajvgo'y qiladi." },
    { y: '1885', t: "Otasining vafoti", d: "Moddiy ahvol og'irlashadi. Hazrat madrasasining kichik hujrasiga ko'chib o'tadi — umrining oxirigacha shu yerda yashadi." },
    { y: '1887', t: "Toshkent safari", d: "Almaiy, Nodim Namangoniy, Karimbek Kamiy bilan tanishadi. Toshkent madaniy hayoti bilan yaqindan tanishadi." },
    { y: '1892', t: "Yana Toshkent", d: "Toshkent bilan adabiy aloqani umrining oxirigacha davom ettiradi. Sayohatlari taassurotlari “Sayohatnoma”ga aylanadi." },
    { y: '1903', t: "Vafoti — 25-may", d: "Qashshoqlik va kasallikdan vafot etadi. 53 yoshida. Qo'qonda dafn etildi." },
  ];
  return (
    <PageShell current="Hayoti.html">
      {/* Header */}
      <section style={{ padding: '90px 80px 70px', background: c.bg, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
        <div>
          <SectionTag>I — Hayoti</SectionTag>
          <H2 style={{ fontSize: 88 }}>Bekvachchadan<br /><span style={{ fontStyle: 'italic', fontWeight: 400, color: c.pomegranate }}>Hazratgacha.</span></H2>
        </div>
        <div style={{ fontSize: 17, lineHeight: 1.8, color: c.muted, alignSelf: 'end' }}>
          <p style={{ margin: '0 0 18px' }}>
            Qo'qonda tug'ilgan, butun umri shu shaharda kechgan, qashshoqlikda yashab,
            ammo so'zga benihoya boy meros qoldirgan shoirning hayot yo'li.
          </p>
          <div style={{ display: 'flex', gap: 36, marginTop: 24 }}>
            <div><div style={{ fontFamily: fontDisp, fontSize: 44, color: c.saffron, fontWeight: 700, lineHeight: 1 }}>53</div><div style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', marginTop: 6 }}>yil umr</div></div>
            <div><div style={{ fontFamily: fontDisp, fontSize: 44, color: c.saffron, fontWeight: 700, lineHeight: 1 }}>3</div><div style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', marginTop: 6 }}>Toshkent safari</div></div>
            <div><div style={{ fontFamily: fontDisp, fontSize: 44, color: c.saffron, fontWeight: 700, lineHeight: 1 }}>10K+</div><div style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', marginTop: 6 }}>misra meros</div></div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: '40px 80px 80px', background: c.bg }}>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: 100, top: 0, bottom: 0, width: 2, background: mode === 'dark' ? '#2a3a3e' : c.creamDark }} />
          {events.map((e, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 60, paddingBottom: 50, position: 'relative' }}>
              <div style={{ textAlign: 'right', paddingRight: 0 }}>
                <div style={{ fontFamily: fontDisp, fontSize: 40, fontWeight: 700, color: c.saffron, lineHeight: 1 }}>{e.y}</div>
              </div>
              <div style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute', left: -38, top: 14, width: 18, height: 18,
                  background: i === 4 || i === 8 ? c.pomegranate : c.saffron,
                  transform: 'rotate(45deg)', border: `3px solid ${c.bg}`,
                }} />
                <h3 style={{ fontFamily: fontDisp, fontSize: 32, margin: '0 0 10px', fontWeight: 700, color: c.text }}>{e.t}</h3>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: c.muted, maxWidth: 640 }}>{e.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pull quote */}
      <section style={{ background: c.tealDeep, color: c.cream, padding: '70px 100px', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <SectionTag>So'zboshi</SectionTag>
            <h3 style={{ fontFamily: fontDisp, fontSize: 48, margin: '0 0 18px', fontWeight: 700, color: c.cream, lineHeight: 1.15 }}>
              Qashshoqlik, lekin so'zda boylik.
            </h3>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(244,234,212,0.78)', margin: 0 }}>
              Otasining vafotidan keyin Hazrat madrasasining kichik hujrasiga ko'chgan Muqimiy
              umrining oxirigacha shu yerda yashadi. Moddiy qiyinchilik, muhtojlik, ruhiy azoblar
              sog'lig'iga salbiy ta'sir qildi. Ammo aynan shu davrda yaratilgan asarlari adabiyotning oltin merosiga aylandi.
            </p>
          </div>
          <blockquote style={{
            fontFamily: fontDisp, fontStyle: 'italic', fontSize: 28, lineHeight: 1.5,
            color: c.saffron, margin: 0, paddingLeft: 40, borderLeft: `3px solid ${c.saffron}`,
          }}>
            “Kun sovuq, qora chiroq,<br />go'rdek uyu, o'tin kam.<br />Chiqsam eshikka qilur<br />to'rg'ayi chuldir-chuldir.”
            <div style={{ marginTop: 18, fontStyle: 'normal', fontSize: 11, letterSpacing: '0.32em', textTransform: 'uppercase', color: 'rgba(244,234,212,0.6)', fontWeight: 700 }}>
              — Sayohatnoma'dan
            </div>
          </blockquote>
        </div>
      </section>
    </PageShell>
  );
}
window.HayotiPage = HayotiPage;

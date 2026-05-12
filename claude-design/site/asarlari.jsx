function AsarlariPage() {
  const { c, mode } = useTheme();
  const works = [
    { t: "Tanobchilar", k: "Hajv · 1877", lines: ["Bo'ldi taajjub qiziq hangomalar,", "Arz etayin emdi yozib nomalar.", "O'n iki oyda keladur bir tanob,", "O'zgalara rohat-u menga azob."], note: "Muqimiyni elga taniqli qilgan satirik she'riy hikoya." },
    { t: "Navbahor", k: "G'azal", lines: ["Ochildi gullar, sabza bo'ldi bog'lar!", "Suhbat aylaylik, kelinglar, jo'ralar, o'rtog'lar!", "Xush bu mahfilda tiriklik ulfatu ahbob ila,", "O'ynashib, gohe tabiatni qilaylik chog'lar!"], note: "Eng sara lirik she'rlaridan biri." },
    { t: "Sayohatnoma", k: "Sayohat · 4 qism", lines: ["Kelganim ushbu makonga qiladur manga alam,", "Loyiqi tab' yo'q odamki, desam hasratu g'am,", "Gaplashurg'a kishi yo'q ertadin oqshomg'acha ham,", "Kun sovuq, qora chiroq, go'rdek uyu, o'tin kam."], note: "Farg'ona vodiysi sayohatlari taassuroti." },
    { t: "Maskovchi boy ta'rifida", k: "Hajv", lines: ["Tag'i bular yaxshiyu bizlar yamon,", "El tamizidin hazar et, al'amon."], note: "Mahalliy boylarning kirdikorlari ustidan o'tkir hajv." },
    { t: "Saylov", k: "Hajv", lines: ["Pul sochish musobaqasiga aylangan", "saylov tartiblari haqida o'tkir hajv —", "bugungi kunda ham o'z ahamiyatini", "yo'qotmagan asar."], note: "Saylovlardagi poraxo'rlikni fosh etgan." },
    { t: "Hajvi Viktor", k: "Hajv", lines: ["Voqeai Viktor — chor amaldori", "kirdikorlarini ochib tashlovchi", "satirik portret. Tiplar", "galereyasining yorqin namunasi."], note: "Voqeai Viktor — bir nechta turkum she'rlardan." },
    { t: "Loy", k: "Yumor", lines: ["Hayron qildi loy —", "Qo'qon ko'chalarining loy-balchig'i", "ustidan o'tkir kulgi.", "Turmushning qoloq tomonlarini fosh etgan."], note: "Mashhur yumoristik she'rlardan biri." },
    { t: "Pashshalar", k: "Yumor", lines: ["Ot, arava, loy, pashsha, bezgak —", "mavzulardagi 30 ga yaqin", "yumoristik asarlaridan", "eng o'tkirlaridan biri."], note: "Yumor janrining yorqin namunasi." },
    { t: "Ayrilmasun", k: "G'azal", lines: ["Muhabbat va sadoqat haqida", "samimiy g'azal.", "Xalq qo'shig'iga aylangan", "mashhur asarlardan."], note: "Hofizlar tomonidan kuylangan g'azal." },
    { t: "Oshiq bo'libman", k: "G'azal", lines: ["Aqlu hush uchdi boshimdin,", "ko'rgali ul oy yuzin —", "Muqimiyning eng nozik", "muhabbat she'rlaridan."], note: "Muhabbat lirikasining cho'qqilaridan." },
    { t: "Ko'zlaring", k: "G'azal", lines: ["Yakka bu Farg'onada,", "Muncha ham, Ko'zlaring —", "barchasi xalq qo'shig'iga", "aylanib ketgan asarlardan."], note: "Ashulachilar tomonidan kuylangan." },
    { t: "Dar mazammati zamona", k: "Hajv", lines: ["O'lkaga kirib kelayotgan", "kapitalistik munosabatlar va", "ularning g'ayriaxloqiy oqibatlari —", "shoir tanqid uchini shu yerga qaratgan."], note: "Davr ziddiyatlari ko'zguda." },
  ];
  return (
    <PageShell current="Asarlari.html">
      <section style={{ padding: '90px 80px 50px', background: c.bg, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
        <div>
          <SectionTag>III — Asarlari</SectionTag>
          <H2 style={{ fontSize: 88 }}>Devondan<br /><span style={{ fontStyle: 'italic', fontWeight: 400, color: c.pomegranate }}>namunalar.</span></H2>
        </div>
        <div style={{ fontSize: 17, lineHeight: 1.8, color: c.muted, alignSelf: 'end' }}>
          <p style={{ margin: 0 }}>
            Quyida Muqimiy ijodidan tanlangan asarlar. Har bir asarni PDF tarzida yuklab olishingiz
            yoki <strong style={{ color: c.text }}>“O'zingizni sinab ko'ring”</strong> tugmasi orqali
            asar yuzasidan mini test ishlashingiz mumkin.
          </p>
        </div>
      </section>

      <section style={{ padding: '20px 80px 80px', background: c.bg }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }}>
          {works.map((w, i) => (
            <article key={w.t} style={{
              background: i === 0 ? c.teal : (mode === 'dark' ? c.panel : '#fff'),
              color: i === 0 ? c.cream : c.text,
              padding: '28px 26px 22px',
              border: `1px solid ${i === 0 ? c.teal : (mode === 'dark' ? '#1a3438' : c.creamDark)}`,
              display: 'flex', flexDirection: 'column',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
                <div style={{ fontFamily: fontDisp, fontSize: 26, fontWeight: 700, color: i === 0 ? c.saffron : c.saffronDeep }}>{String(i+1).padStart(2,'0')}</div>
                <div style={{ fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: i === 0 ? 'rgba(244,234,212,0.7)' : c.muted, fontWeight: 700 }}>{w.k}</div>
              </div>
              <h3 style={{ fontFamily: fontDisp, fontSize: 30, margin: '0 0 16px', fontWeight: 700, color: i === 0 ? c.cream : c.teal, lineHeight: 1.05 }}>{w.t}</h3>
              <div style={{ borderTop: `2px solid ${i === 0 ? c.saffron : (mode === 'dark' ? '#2a3a3e' : c.creamDark)}`, paddingTop: 16, marginBottom: 16 }}>
                {w.lines.map((l, idx) => (
                  <div key={idx} style={{ fontFamily: fontDisp, fontStyle: 'italic', fontSize: 15, lineHeight: 1.6, color: i === 0 ? c.cream : c.text }}>{l}</div>
                ))}
              </div>
              <p style={{ margin: '0 0 18px', fontSize: 12, lineHeight: 1.65, color: i === 0 ? 'rgba(244,234,212,0.65)' : c.muted, fontStyle: 'normal' }}>{w.note}</p>
              <div style={{ marginTop: 'auto', display: 'flex', gap: 6 }}>
                <button style={{
                  flex: 1, background: 'transparent', color: i === 0 ? c.cream : c.teal,
                  border: `1px solid ${i === 0 ? 'rgba(244,234,212,0.4)' : c.teal}`, padding: '10px 8px',
                  fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700, cursor: 'pointer',
                }}>PDF</button>
                <button style={{
                  flex: 2, background: i === 0 ? c.saffron : c.teal, color: i === 0 ? c.tealDeep : c.cream,
                  border: 'none', padding: '10px 8px',
                  fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 700, cursor: 'pointer',
                }}>Sinab ko'ring →</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
window.AsarlariPage = AsarlariPage;

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

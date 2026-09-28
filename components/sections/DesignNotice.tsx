export default function DesignNotice() {
  return (
    <section
      aria-label="Tasarım notu"
      className="w-full bg-surface-container-lowest border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 lg:py-12">
        <div className="flex items-start gap-4 max-w-3xl">
          <span aria-hidden="true" className="mt-2 block h-[2px] w-5 shrink-0 bg-primary" />
          <div>
            <h2 className="text-[13px] font-semibold tracking-[0.15em] text-white/80">
              TASARIM NOTU
            </h2>
            <p className="mt-3 font-body-md text-body-md text-on-surface-variant">
              Bu sayfa yalnızca bir <strong className="font-semibold text-on-surface">iskelet tasarım</strong>{" "}
              örneğidir. Prime Time Training Club&apos;a özel içerik üzerinde henüz
              ayrıntılı çalışılmamıştır; metinler, hizmet başlıkları ve fotoğraflar
              örnek amaçlıdır. Adres, telefon ve Google puanı bilgileri işletmenin
              herkese açık Google profilinden alınmıştır.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

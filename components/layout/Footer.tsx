import Icon from "@/components/ui/Icon";

const NAV_LINKS = [
  { label: "Ana Sayfa", href: "#top" },
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Galeri", href: "#galeri" },
  { label: "İletişim", href: "#iletisim" },
];

const SERVICE_LINKS = [
  { label: "Fitness", href: "#hizmetler" },
  { label: "Personal Training", href: "#hizmetler" },
  { label: "Online Ders", href: "#hizmetler" },
  { label: "Cardio", href: "#hizmetler" },
];

const CONTACT_LINKS = [
  { label: "Güzelyurt, 5779. Sk. 68/A, Yunusemre / Manisa", href: "#iletisim" },
  { label: "0535 603 99 44", href: "tel:+905356039944" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 pb-10">
          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-xs">
            <div className="flex items-center gap-3">
              <span className="flex flex-col leading-none">
            <span className="text-[22px] font-extrabold tracking-[0.02em] text-white">
              PRIME <span className="text-primary">TIME</span>
            </span>
            <span className="mt-1 text-[9px] font-semibold tracking-[0.32em] text-on-surface-variant">
              TRAINING CLUB
            </span>
          </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Yunusemre / Manisa
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Manisa&apos;da fitness, personal training ve online ders.
            </p>
          </div>

          {/* Link columns */}
          <div className="flex flex-wrap gap-x-10 sm:gap-x-16 gap-y-10">
            <div className="flex flex-col gap-3">
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Navigasyon
              </span>
              <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="hover:text-on-surface transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Hizmetler
              </span>
              <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
                {SERVICE_LINKS.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} className="hover:text-on-surface transition-colors">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                İletişim
              </span>
              <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
                {CONTACT_LINKS.map((c) => (
                  <li key={c.label}>
                    <a href={c.href} className="hover:text-on-surface transition-colors">
                      {c.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            © 2026 Prime Time Training Club
          </p>
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/905356039944"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2.5 -m-2.5 text-on-surface-variant hover:text-on-surface transition-colors"
            >
              <Icon name="chat" width={18} height={18} />
            </a>
            <a
              href="tel:+905356039944"
              aria-label="Telefon"
              className="p-2.5 -m-2.5 text-on-surface-variant hover:text-on-surface transition-colors"
            >
              <Icon name="call" width={18} height={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

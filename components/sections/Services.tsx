"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IMAGES } from "@/lib/images";
import Icon from "@/components/ui/Icon";

// ---------------------------------------------------------------------------
// GÖRSELLER — şimdilik projede zaten kullanılan fotoğraflar.
// Gerçek salon fotoğrafları hazır olduğunda yalnızca aşağıdaki `src` / `alt`
// değerlerini değiştirmen yeterli. Dosyayı /public/images/services/ altına
// koyup şöyle de yazabilirsin: "/images/services/fitness.jpg"
// (Kadraj, hover zoom ve animasyon aynı kalır.)
// ---------------------------------------------------------------------------
const SERVICES = [
  {
    title: "Fitness",
    desc: "Genel form ve kondisyon için geniş antrenman alanı.",
    image: IMAGES.equipment,
  },
  {
    title: "Personal Training",
    desc: "Özel PT alanında birebir antrenman desteği.",
    image: IMAGES.barbell,
  },
  {
    title: "Strength Training",
    desc: "Serbest ağırlık ve ekipmanlarla güç odaklı çalışma.",
    image: IMAGES.dumbbells,
  },
  {
    title: "Cardio",
    desc: "Kondisyon ve dayanıklılık için kardiyo alanı.",
    image: IMAGES.treadmills,
  },
  {
    title: "Online Ders",
    desc: "Nerede olursan ol, hedefine uygun uzaktan antrenman.",
    image: IMAGES.freeWeights,
  },
];

// Kartlar tıklanınca gidilecek yer.
const SERVICE_LINK = "#iletisim";

// Element ekrana ilk kez girdiğinde bir kez `true` olur (animasyon tekrar etmez).
function useInView<T extends HTMLElement>(threshold: number) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}

// Aynı satırdaki kartlar soldan sağa çok kısa aralıkla belirir.
// (Mobilde tek kolon olduğu için gecikme uygulanmaz.)
const STAGGER = ["", "md:delay-100", "md:delay-200"];

// Masaüstünde 6 kolonlu grid: ilk satır 3 kart (2'şer kolon), son satırdaki 2 kart
// yarım genişlikte (3'er kolon) — böylece son satır boş kalmaz, dengeli durur.
// Tablet (2 kolon): tek kalan son kart tam genişlikte.
const SPAN = [
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-3",
  "md:col-span-2 lg:col-span-3",
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  const [ref, inView] = useInView<HTMLAnchorElement>(0.15);

  return (
    <a
      ref={ref}
      href={SERVICE_LINK}
      className={`group block overflow-hidden rounded-lg bg-surface-container-low transition-all duration-700 ${
        STAGGER[index % 3]
      } ${SPAN[index]} ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {/* Görsel alanı */}
      <div className="relative h-60 sm:h-64 lg:h-72 overflow-hidden bg-surface-container">
        <Image
          alt={service.image.alt}
          src={service.image.src}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
        />
        {/* Kırmızı küçük vurgu */}
        <span
          aria-hidden="true"
          className="absolute left-0 top-0 z-10 block h-1 w-12 bg-primary"
        />
      </div>

      {/* Başlık + kısa açıklama + ok */}
      <div className="flex items-start justify-between gap-4 p-5 lg:p-6">
        <div>
          <h3 className="font-headline-md text-headline-md text-white">
            {service.title}
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1.5">
            {service.desc}
          </p>
        </div>
        <Icon
          name="arrow-up-right"
          className="shrink-0 mt-1 text-on-surface-variant"
          width={20}
          height={20}
        />
      </div>
    </a>
  );
}

const fadeUpHeader = (show: boolean) =>
  `transition-all duration-700 ${
    show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
  }`;

export default function Services() {
  const [headerRef, headerInView] = useInView<HTMLDivElement>(0.3);

  return (
    <section className="w-full bg-surface-container-lowest py-24 lg:py-32" id="hizmetler">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div ref={headerRef} className={`mb-12 lg:mb-16 ${fadeUpHeader(headerInView)}`}>
          <h2 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-white leading-[1.05]">
            HİZMETLER
          </h2>
          <p className="font-body-lg text-body-lg text-secondary mt-4 max-w-xl">
            Hedefine uygun antrenman alanını keşfet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 lg:gap-6">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IMAGES } from "@/lib/images";

// Gerçek salon fotoğrafı hazır olduğunda yalnızca bu iki satırı değiştirmen
// yeterli — kadraj, hover zoom ve animasyon aynı kalır.
const ABOUT_IMAGE_SRC = IMAGES.freeWeights.src;
const ABOUT_IMAGE_ALT = IMAGES.freeWeights.alt;

const FEATURES = [
  {
    title: "Modern Ekipman",
    desc: "Geniş ve güncel antrenman altyapısı.",
  },
  {
    title: "Online Ders",
    desc: "Salona gelemediğin günlerde uzaktan destek.",
  },
  {
    title: "Profesyonel Yaklaşım",
    desc: "Hedef odaklı çalışma.",
  },
];

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

// Hafif fade-up. (prefers-reduced-motion globals.css'te zaten ele alınıyor.)
const fadeUp = (show: boolean) =>
  `transition-all duration-700 ${
    show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
  }`;

export default function About() {
  const [topRef, topInView] = useInView<HTMLDivElement>(0.2);
  const [featuresRef, featuresInView] = useInView<HTMLUListElement>(0.3);

  return (
    <section className="w-full bg-surface-container-low py-24 lg:py-32" id="hakkimizda">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div
          ref={topRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch"
        >
          {/* Sol: başlık + açıklama */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className={`flex items-center gap-3 mb-6 ${fadeUp(topInView)}`}>
              <span aria-hidden="true" className="block h-[2px] w-5 bg-primary" />
              <span className="text-[13px] tracking-[0.15em] font-medium text-white/70">
                PRIME TIME TRAINING CLUB
              </span>
            </div>

            <h2
              className={`font-display-lg text-display-lg-mobile lg:text-display-lg text-white leading-[1.05] delay-100 ${fadeUp(
                topInView
              )}`}
            >
              <span className="block">DAHA GÜÇLÜ.</span>
              <span className="block">DAHA İYİ.</span>
              <span className="block">PRIME TIME.</span>
            </h2>

            <div className={`mt-8 max-w-md delay-200 ${fadeUp(topInView)}`}>
              <p className="font-body-lg text-body-lg text-secondary">
                Prime Time Training Club, Manisa Yunusemre&apos;de modern ekipman ve
                profesyonel bir yaklaşımı bir araya getiren spor salonudur.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant mt-4">
                Salonda ya da online derslerle, hedeflerine uygun antrenmanı rahat
                ve düzenli bir ortamda yapabilirsin. Google&apos;da 20 yorumla 5,0
                puana sahibiz.
              </p>
            </div>
          </div>

          {/* Sağ: büyük görsel — doğal renk, hafif hover zoom */}
          <div className="lg:col-span-7">
            <div
              className={`relative w-full aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[520px] duration-[900ms] delay-150 transition-all ${
                topInView
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-6 scale-[1.03]"
              }`}
            >
              <div className="group absolute inset-0 overflow-hidden bg-surface-container">
                <Image
                  alt={ABOUT_IMAGE_ALT}
                  src={ABOUT_IMAGE_SRC}
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Alt: 3 özellik — kart yok, yalnızca ince ayraçlar */}
        <ul
          ref={featuresRef}
          className="mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-3 border-t border-white/10 divide-y divide-white/10 md:divide-y-0 md:divide-x"
        >
          {FEATURES.map((f, i) => (
            <li
              key={f.title}
              className={`py-7 md:py-8 md:px-8 md:first:pl-0 md:last:pr-0 ${fadeUp(
                featuresInView
              )} ${["delay-0", "delay-100", "delay-200"][i]}`}
            >
              <span aria-hidden="true" className="block h-[2px] w-5 mb-4 bg-primary/70" />
              <h3 className="text-[15px] font-bold uppercase tracking-[0.04em] text-white">
                {f.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                {f.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

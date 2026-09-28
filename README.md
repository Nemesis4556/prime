# Prime Time Training Club — Web Sitesi

Next.js 14 (App Router) + TypeScript + Tailwind CSS.
Prime Time Training Club için hazırlanmış iskelet tasarım sitesidir.

## Kurulum

```bash
npm install
npm run dev
```

## İşletme bilgileri (Google işletme profilinden)

- Adres: Güzelyurt, 5779. Sk. 68/A, 45030 Yunusemre / Manisa
- Telefon / WhatsApp: 0535 603 99 44
- Google puanı: 5,0 (20 yorum)
- Hizmet: Online ders

Bilgiler `components/sections/Contact.tsx`, `Cta.tsx`, `Hero.tsx` (metrik bandı) ve
`components/layout/Footer.tsx` içinde geçer.

## Güncellenmesi gerekenler

- **Görseller**: Tümü Unsplash'tan (Unsplash License) ve `lib/images.ts` dosyasında toplu.
  Gerçek salon fotoğrafları gelince yalnızca o dosyayı güncellemen yeterli.
- **Tasarım notu**: Sayfanın sonundaki `DesignNotice.tsx`, sitenin iskelet tasarım olduğunu
  belirtir; yayına almadan önce `app/page.tsx`'ten kaldır.
- **Logo**: Header/Footer'da metin tabanlı geçici bir logo var. Gerçek logo gelince
  `Header.tsx` ve `Footer.tsx` içindeki wordmark'ı `<Image>` ile değiştir.
- **Çalışma saatleri**: Yalnızca "bugün 22:00'da kapanıyor" bilgisi bilindiği için
  tam saat listesi yazılmadı; iletişim bölümü Google Haritalar'a yönlendiriyor.
- **Hizmet listesi ve metinler**: Fitness, Personal Training, Strength, Cardio kartları
  ve "Modern Ekipman" gibi genel ifadeler örnek içeriktir; salonun gerçek sunduklarına göre düzenle.
- **Instagram**: Hesap bilinmediği için kaldırıldı.

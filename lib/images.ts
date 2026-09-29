// Tüm site görselleri Unsplash'tan (Unsplash License — ücretsiz kullanım).
// Gerçek salon fotoğrafları hazır olduğunda yalnızca bu dosyadaki adresleri
// değiştirmen yeterli; tüm bölümler buradan okur.
const u = (id: string, w = 2000) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;

export const IMAGES = {
  // Sam Sabourin — sırtında halter taşıyan sporcu
  barbell: { src: u("1513352098199-8ccf457b35a8", 2400), alt: "Halter ile antrenman yapan sporcu" },
  // Samuel Girven — rafta duran dambıllar
  dumbbells: { src: u("1576678927484-cc907957088c"), alt: "Rafta duran dambıllar" },
  // Alex Tyson — pencere kenarında koşu bantları
  treadmills: { src: u("1721394749382-223a18ce8bb9"), alt: "Sıralı koşu bantlarının bulunduğu kardiyo alanı" },
  // Mohamed Fareed — serbest ağırlık alanı
  freeWeights: { src: u("1637430308606-86576d8fef3c"), alt: "Serbest ağırlık alanı" },
  // Ambitious Studio* | Rick Barrett — salon ekipmanları
  equipment: { src: u("1646656130630-07af3a262a9b"), alt: "Spor salonu ekipmanları" },
} as const;

// WhatsApp / sosyal medya link önizlemesi (Open Graph) görseli.
// 1200x630 (1.91:1), JPG, mutlaka mutlak (https://...) adres olmalı.
// Kendi fotoğrafını kullanmak için dosyayı public/images/og.jpg olarak koy ve
// aşağıdaki değeri "/images/og.jpg" yap (metadataBase ile otomatik mutlak olur).
export const OG_IMAGE = {
  url: "https://images.unsplash.com/photo-1513352098199-8ccf457b35a8?q=75&w=1200&h=630&auto=format&fit=crop&fm=jpg",
  width: 1200,
  height: 630,
  alt: "Prime Time Training Club — Manisa spor salonu",
} as const;

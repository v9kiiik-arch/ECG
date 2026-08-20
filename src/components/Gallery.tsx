import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const IMAGES = [
  {
    src: '/images/common-questions/IMG_8656_2.JPG',
    alt: 'Viveck leading a live ESG training session with professionals',
    caption: 'Live ESG training session',
  },
  {
    src: '/images/common-questions/IMG_8672_2.JPG',
    alt: 'Professionals collaborating during a CCMP workshop',
    caption: 'CCMP workshop in progress',
  },
  {
    src: '/images/common-questions/dfc91c4f-1119-41c8-9511-d2c8d777d391.JPG',
    alt: 'From Underdog to Unicorn — bestselling book by Viveck J Suman',
    caption: 'From Underdog to Unicorn — national bestseller',
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const next = useCallback(
    () => setLightbox((i) => (i === null ? i : (i + 1) % IMAGES.length)),
    [],
  );
  const prev = useCallback(
    () => setLightbox((i) => (i === null ? i : (i - 1 + IMAGES.length) % IMAGES.length)),
    [],
  );

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [lightbox, close, next, prev]);

  return (
    <section className="bg-esg-dark-bg px-5 py-16 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-esg-content">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-esg-mid">
          INSIDE THE ROOM
        </p>
        <h2 className="mt-2 text-[28px] font-bold leading-tight text-white">
          Where 7,200+ professionals got their start
        </h2>
        <p className="mt-3 max-w-[520px] text-[13px] leading-[1.7] text-white/72">
          Real sessions, real people, real outcomes. A glimpse into the training
          rooms that have shaped careers across India and the Middle East.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {IMAGES.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="group relative overflow-hidden rounded-esg-card border border-white/10 bg-white/5 text-left transition-all hover:border-esg-green/30 hover:shadow-lg hover:shadow-esg-green/10"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-esg-dark-bg/90 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-4">
                <p className="text-[12px] font-semibold text-white">{img.caption}</p>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-esg-green/80 opacity-0 transition-all group-hover:opacity-100">
                  <ZoomIn className="h-4 w-4 text-white" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 py-8 esg-animate-fade-up"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-8"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <figure
            className="max-h-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={IMAGES[lightbox].src}
              alt={IMAGES[lightbox].alt}
              className="max-h-[80vh] w-auto rounded-lg object-contain"
            />
            <figcaption className="mt-4 text-center text-[13px] text-white/70">
              {IMAGES[lightbox].caption}
            </figcaption>
          </figure>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
}

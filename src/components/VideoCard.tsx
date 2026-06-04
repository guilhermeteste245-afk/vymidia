import { useRef, useState } from "react";
import { Play, Pause, Instagram } from "lucide-react";

interface Props {
  src: string;
  poster: string;
  title: string;
  client: string;
  category: string;
  instagram?: string;
}

export function VideoCard({ src, poster, title, client, category, instagram }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
      setStarted(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="group relative overflow-hidden border border-border card-hover bg-card">
      <div className="relative aspect-[9/16] overflow-hidden bg-black">
        <video
          ref={ref}
          src={src}
          poster={poster}
          className="h-full w-full object-cover"
          playsInline
          preload="none"
          onEnded={() => setPlaying(false)}
          onClick={toggle}
        />
        {/* Poster overlay — guarantees no black frame on any device until user hits play */}
        {!started && (
          <img
            src={poster}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover pointer-events-none"
            loading="lazy"
            draggable={false}
          />
        )}
        <button
          onClick={toggle}
          aria-label={playing ? "Pausar" : "Reproduzir"}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
            playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
          }`}
        >
          <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <span className="relative flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full border border-gold/60 bg-black/40 backdrop-blur-md transition-transform duration-500 group-hover:scale-110">
            {playing
              ? <Pause className="h-4 w-4 text-gold" strokeWidth={1.2} />
              : <Play className="ml-0.5 h-4 w-4 md:h-5 md:w-5 text-gold" strokeWidth={1.2} fill="currentColor" />}
          </span>
        </button>
      </div>
      <div className="flex items-start justify-between gap-3 border-t border-border px-3 py-3 md:px-4 md:py-3.5">
        <div className="min-w-0">
          <p className="text-[9px] tracking-luxury text-gold uppercase">{category}</p>
          {instagram ? (
            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              className="mt-1.5 inline-flex items-center gap-1.5 font-display text-sm md:text-base text-foreground leading-tight hover:text-gold transition-colors"
            >
              {title}
              <Instagram className="h-3 w-3 opacity-70" strokeWidth={1.2} />
            </a>
          ) : (
            <h3 className="mt-1.5 font-display text-sm md:text-base text-foreground leading-tight">{title}</h3>
          )}
          <p className="mt-0.5 text-[10px] md:text-xs text-muted-foreground truncate">{client}</p>
        </div>
      </div>
    </div>
  );
}

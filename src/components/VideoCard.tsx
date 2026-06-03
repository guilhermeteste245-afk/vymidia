import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

interface Props {
  src: string;
  title: string;
  client: string;
  category: string;
}

export function VideoCard({ src, title, client, category }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  };

  return (
    <div className="group relative overflow-hidden border border-border card-hover bg-card">
      <div className="relative aspect-[9/16] overflow-hidden bg-black">
        <video
          ref={ref}
          src={src}
          className="h-full w-full object-cover"
          playsInline
          preload="metadata"
          onEnded={() => setPlaying(false)}
          onClick={toggle}
        />
        <button
          onClick={toggle}
          aria-label={playing ? "Pausar" : "Reproduzir"}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
            playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
          }`}
        >
          <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
          <span className="relative flex h-20 w-20 items-center justify-center rounded-full border border-gold/60 bg-black/40 backdrop-blur-md transition-transform duration-500 group-hover:scale-110">
            {playing
              ? <Pause className="h-6 w-6 text-gold" strokeWidth={1} />
              : <Play className="ml-1 h-7 w-7 text-gold" strokeWidth={1} fill="currentColor" />}
          </span>
        </button>
      </div>
      <div className="flex items-start justify-between gap-4 border-t border-border px-5 py-4">
        <div>
          <p className="text-[10px] tracking-luxury text-gold uppercase">{category}</p>
          <h3 className="mt-2 font-display text-xl text-foreground leading-tight">{title}</h3>
          <p className="mt-1 text-xs text-muted-foreground">{client}</p>
        </div>
      </div>
    </div>
  );
}

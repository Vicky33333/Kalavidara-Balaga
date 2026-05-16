import { Link } from "@tanstack/react-router";
import { Star, MapPin, BadgeCheck } from "lucide-react";
import type { Troupe } from "@/data/troupes";

export function TroupeCard({ troupe }: { troupe: Troupe }) {
  return (
    <Link
      to="/troupe/$id"
      params={{ id: troupe.id }}
      className="group block overflow-hidden rounded-2xl border border-hairline bg-gradient-card shadow-card transition-transform active:scale-[0.99]"
    >
      <div className="relative h-44 overflow-hidden bg-surface">
        <img
          src={troupe.cover}
          alt={troupe.groupName}
          loading="lazy"
          width={1024}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="rounded-full border border-white/20 bg-black/40 px-2.5 py-1 font-serif-italic text-xs text-white backdrop-blur">
            {troupe.artForm}
          </span>
          {troupe.verified && (
            <span className="flex items-center gap-1 rounded-full bg-gradient-gold px-2 py-1 text-[10px] font-semibold text-black">
              <BadgeCheck className="h-3 w-3" /> Verified
            </span>
          )}
        </div>
        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/50 px-2 py-1 text-xs text-white backdrop-blur">
          <Star className="h-3 w-3 fill-current text-yellow-400" />
          {troupe.rating.toFixed(1)}
        </div>
        <div className="absolute bottom-3 left-4 right-4">
          <h3 className="font-display text-base font-bold leading-tight text-white">
            {troupe.groupName}
          </h3>
        </div>
      </div>
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          <span className="truncate">{troupe.districts.slice(0, 2).join(", ")}</span>
        </div>
        <span className="text-xs font-semibold text-foreground">{troupe.baseFee}</span>
      </div>
    </Link>
  );
}

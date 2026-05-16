import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft, Phone, MessageCircle, Share2, Star, MapPin, BadgeCheck,
  Calendar, Drum, Users,
} from "lucide-react";
import { BottomNav } from "@/components/BottomNav";
import { TROUPES } from "@/data/troupes";

export const Route = createFileRoute("/troupe/$id")({
  loader: ({ params }) => {
    const troupe = TROUPES.find((t) => t.id === params.id);
    if (!troupe) throw notFound();
    return { troupe: troupe! };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.troupe.groupName} — Kalavidara-Balaga` },
          { name: "description", content: loaderData.troupe.bio },
          { property: "og:title", content: loaderData.troupe.groupName },
          { property: "og:description", content: loaderData.troupe.bio },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="p-10 text-center">
      <p>Troupe not found.</p>
      <Link to="/" className="mt-4 inline-block underline">Back home</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="p-10 text-center text-sm text-muted-foreground">{error.message}</div>
  ),
  component: TroupePage,
});

function TroupePage() {
  const { troupe } = Route.useLoaderData();
  const waMsg = encodeURIComponent(
    `Namaskara ${troupe.lead.name}, I found ${troupe.groupName} on Kalavidara-Balaga and would like to enquire about a booking.`,
  );

  return (
    <div className="min-h-screen pb-32">
      {/* Hero */}
      <div className="relative h-72 overflow-hidden bg-surface">
        <img
          src={troupe.cover}
          alt={troupe.groupName}
          width={1024}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <Link
          to="/"
          className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/50 p-2 text-white backdrop-blur"
          aria-label="Back"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <button
          className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/50 p-2 text-white backdrop-blur"
          aria-label="Share"
        >
          <Share2 className="h-4 w-4" />
        </button>
        <div className="absolute bottom-5 left-5 right-5">
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded-full border border-white/20 bg-black/50 px-2.5 py-1 font-serif-italic text-xs text-white backdrop-blur">
              {troupe.artForm}
            </span>
            {troupe.verified && (
              <span className="flex items-center gap-1 rounded-full bg-gradient-gold px-2 py-1 text-[10px] font-semibold text-black">
                <BadgeCheck className="h-3 w-3" /> Verified
              </span>
            )}
          </div>
          <h1 className="font-display text-2xl font-extrabold leading-tight text-white">
            {troupe.groupName}
          </h1>
        </div>
      </div>

      <main className="mx-auto max-w-md px-5">
        {/* Stats */}
        <div className="-mt-6 grid grid-cols-3 gap-2 rounded-2xl border border-hairline bg-gradient-card p-4 shadow-card">
          <Stat icon={<Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />} label="Rating" value={troupe.rating.toFixed(1)} />
          <Stat icon={<Calendar className="h-3.5 w-3.5 text-muted-foreground" />} label="Bookings" value={`${troupe.totalBookings}+`} />
          <Stat icon={<Users className="h-3.5 w-3.5 text-muted-foreground" />} label="Years" value={`${troupe.yearsActive}`} />
        </div>

        {/* Lead */}
        <section className="mt-6 rounded-2xl border border-hairline bg-surface p-4">
          <p className="font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Lead contact
          </p>
          <p className="mt-1 font-display text-base font-semibold">{troupe.lead.name}</p>
          <p className="text-sm text-muted-foreground">{troupe.lead.phone}</p>
        </section>

        {/* About */}
        <section className="mt-6">
          <h2 className="mb-2 font-display text-sm font-semibold uppercase tracking-[0.2em]">About</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">{troupe.bio}</p>
        </section>

        {/* Equipment */}
        <section className="mt-6 rounded-2xl border border-hairline bg-gradient-card p-4">
          <div className="mb-2 flex items-center gap-2">
            <Drum className="h-4 w-4 text-gold" />
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em]">
              Equipment
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">{troupe.equipment}</p>
        </section>

        {/* Service area */}
        <section className="mt-6">
          <h2 className="mb-2 font-display text-sm font-semibold uppercase tracking-[0.2em]">
            Service area
          </h2>
          <div className="mb-2 flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" /> {troupe.serviceArea}
          </div>
          <div className="flex flex-wrap gap-2">
            {troupe.districts.map((d: string) => (
              <span key={d} className="rounded-full border border-hairline bg-surface px-3 py-1 text-xs">
                {d}
              </span>
            ))}
          </div>
        </section>

        {/* Portfolio */}
        <section className="mt-6">
          <h2 className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.2em]">
            Portfolio
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {troupe.photos.map((src: string, i: number) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-xl bg-surface ${
                  i % 3 === 0 ? "row-span-2 aspect-[1/2]" : "aspect-square"
                }`}
              >
                <img
                  src={src}
                  alt={`${troupe.groupName} performance ${i + 1}`}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="mt-6 rounded-2xl border border-hairline bg-gradient-hero p-5 shadow-card">
          <p className="font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Starting from
          </p>
          <p className="mt-1 font-serif-italic text-2xl font-bold text-gradient-gold">
            {troupe.baseFee}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Final quote depends on duration, travel, and event scale.
          </p>
        </section>
      </main>

      {/* Sticky CTAs */}
      <div className="fixed bottom-[68px] left-0 right-0 z-30 border-t border-hairline bg-background/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-md gap-2 px-5 py-3">
          <a
            href={`https://wa.me/${troupe.lead.whatsapp.replace(/\D/g, "")}?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-hairline bg-surface py-3 text-sm font-semibold transition active:scale-[0.98]"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <a
            href={`tel:${troupe.lead.phone}`}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-gold py-3 text-sm font-bold text-black shadow-glow transition active:scale-[0.98]"
          >
            <Phone className="h-4 w-4" /> Call Troupe
          </a>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex flex-col items-center gap-0.5 text-center">
      <div className="flex items-center gap-1">{icon}<span className="font-display text-base font-bold">{value}</span></div>
      <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</span>
    </div>
  );
}

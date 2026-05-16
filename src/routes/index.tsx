import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, ChevronRight, Sparkles } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { TroupeCard } from "@/components/TroupeCard";
import { ART_FORMS, TROUPES } from "@/data/troupes";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kalavidara-Balaga — Folk Artist Talent Hub of Karnataka" },
      {
        name: "description",
        content:
          "Discover and book Karnataka's finest folk troupes — Dollu Kunitha, Yakshagana, Veeragase and more. Direct contact, verified artists.",
      },
      { property: "og:title", content: "Kalavidara-Balaga — Folk Artist Talent Hub" },
      {
        property: "og:description",
        content: "A marketplace connecting traditional Karnataka troupes with event managers.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = TROUPES.slice(0, 2);
  const trending = TROUPES.slice(2);

  return (
    <AppShell>
      {/* Hero */}
      <section className="relative mb-8 overflow-hidden rounded-3xl border border-hairline bg-gradient-hero p-6 shadow-card">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-gold opacity-20 blur-3xl" />
        <div className="relative">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-hairline bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            <Sparkles className="h-3 w-3" /> Karnataka Folk Arts
          </div>
          <h1 className="font-display text-[28px] font-extrabold leading-[1.05]">
            Book the soul of <br />
            <span className="font-serif-italic font-bold text-gradient-gold">
              Karnataka's traditions
            </span>
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            From thunderous Dollu Kunitha to all-night Yakshagana — connect directly with verified
            troupes for any event.
          </p>
          <Link
            to="/search"
            className="mt-5 flex items-center gap-2 rounded-xl border border-hairline bg-surface px-4 py-3 text-sm text-muted-foreground transition active:scale-[0.99]"
          >
            <Search className="h-4 w-4" />
            <span>Search troupes, art forms, districts…</span>
          </Link>
        </div>
      </section>

      {/* Art forms strip */}
      <section className="mb-8">
        <div className="mb-3 flex items-baseline justify-between">
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em]">
            Art forms
          </h2>
          <Link to="/search" className="text-xs text-muted-foreground">
            View all
          </Link>
        </div>
        <div className="-mx-5 flex gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {ART_FORMS.map((form, i) => (
            <Link
              key={form}
              to="/search"
              search={{ art: form } as never}
              className="group relative flex h-24 w-32 shrink-0 flex-col justify-end overflow-hidden rounded-2xl border border-hairline bg-gradient-card p-3"
            >
              <div
                className={`absolute inset-0 opacity-40 bg-gradient-to-br ${
                  ["from-amber-700 to-red-900","from-yellow-600 to-rose-900","from-orange-800 to-stone-900","from-indigo-700 to-slate-900","from-emerald-700 to-slate-900","from-yellow-700 to-stone-900","from-slate-700 to-black"][i % 7]
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <span className="relative font-serif-italic text-sm font-bold leading-tight text-white">
                {form}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="mb-8">
        <div className="mb-3 flex items-baseline justify-between">
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em]">
            Featured troupes
          </h2>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </div>
        <div className="flex flex-col gap-4">
          {featured.map((t) => (
            <TroupeCard key={t.id} troupe={t} />
          ))}
        </div>
      </section>

      {/* Trending */}
      <section>
        <div className="mb-3 flex items-baseline justify-between">
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em]">
            Trending now
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          {trending.map((t) => (
            <TroupeCard key={t.id} troupe={t} />
          ))}
        </div>
      </section>

      <p className="mt-10 text-center font-serif-italic text-xs text-muted-foreground">
        "Kale endendigu jeevanada uusiraagali" — Let art forever be the breath of life.
      </p>
    </AppShell>
  );
}

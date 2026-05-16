import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search as SearchIcon, X } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { TroupeCard } from "@/components/TroupeCard";
import { ART_FORMS, DISTRICTS, TROUPES, type ArtForm } from "@/data/troupes";

type SearchParams = { art?: ArtForm; district?: string; q?: string };

export const Route = createFileRoute("/search")({
  validateSearch: (s: Record<string, unknown>): SearchParams => ({
    art: s.art as ArtForm | undefined,
    district: s.district as string | undefined,
    q: s.q as string | undefined,
  }),
  head: () => ({
    meta: [
      { title: "Search troupes — Kalavidara-Balaga" },
      { name: "description", content: "Filter Karnataka folk troupes by district and art form." },
    ],
  }),
  component: SearchPage,
});

function SearchPage() {
  const params = Route.useSearch();
  const navigate = Route.useNavigate();
  const [q, setQ] = useState(params.q ?? "");

  const results = useMemo(() => {
    return TROUPES.filter((t) => {
      if (params.art && t.artForm !== params.art) return false;
      if (params.district && !t.districts.includes(params.district)) return false;
      if (q && !t.groupName.toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
  }, [params.art, params.district, q]);

  const setFilter = (patch: Partial<SearchParams>) =>
    navigate({ search: { ...params, ...patch } });

  const clearAll = () => {
    setQ("");
    navigate({ search: {} });
  };

  return (
    <AppShell title="Find a Troupe">
      {/* Search input */}
      <div className="relative mb-4">
        <SearchIcon className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search by group name…"
          className="w-full rounded-xl border border-hairline bg-surface py-3 pl-11 pr-10 text-sm placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
        />
        {q && (
          <button onClick={() => setQ("")} className="absolute right-3 top-1/2 -translate-y-1/2 p-1">
            <X className="h-4 w-4 text-muted-foreground" />
          </button>
        )}
      </div>

      {/* Art form chips */}
      <div className="mb-3">
        <p className="mb-2 font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Art form
        </p>
        <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <Chip active={!params.art} onClick={() => setFilter({ art: undefined })}>All</Chip>
          {ART_FORMS.map((a) => (
            <Chip key={a} active={params.art === a} onClick={() => setFilter({ art: a })}>
              {a}
            </Chip>
          ))}
        </div>
      </div>

      {/* District select */}
      <div className="mb-5">
        <p className="mb-2 font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          District
        </p>
        <select
          value={params.district ?? ""}
          onChange={(e) => setFilter({ district: e.target.value || undefined })}
          className="w-full rounded-xl border border-hairline bg-surface px-4 py-3 text-sm focus:border-foreground focus:outline-none"
        >
          <option value="">All districts</option>
          {DISTRICTS.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>

      <div className="mb-4 flex items-center justify-between">
        <p className="text-xs text-muted-foreground">
          {results.length} {results.length === 1 ? "troupe" : "troupes"} found
        </p>
        {(params.art || params.district || q) && (
          <button onClick={clearAll} className="text-xs text-foreground underline-offset-2 hover:underline">
            Clear filters
          </button>
        )}
      </div>

      {results.length === 0 ? (
        <div className="rounded-2xl border border-hairline bg-surface p-8 text-center">
          <p className="font-display text-sm">No troupes match these filters.</p>
          <p className="mt-1 text-xs text-muted-foreground">Try a different district or art form.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {results.map((t) => (
            <TroupeCard key={t.id} troupe={t} />
          ))}
        </div>
      )}

      <p className="mt-8 text-center text-[11px] text-muted-foreground">
        Don't see your troupe? <Link to="/profile" className="text-foreground underline">List with us</Link>
      </p>
    </AppShell>
  );
}

function Chip({
  children, active, onClick,
}: { children: React.ReactNode; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition ${
        active
          ? "border-foreground bg-foreground text-background"
          : "border-hairline bg-surface text-muted-foreground"
      }`}
    >
      {children}
    </button>
  );
}

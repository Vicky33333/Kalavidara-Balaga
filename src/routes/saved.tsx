import { createFileRoute, Link } from "@tanstack/react-router";
import { Bookmark } from "lucide-react";
import { AppShell } from "@/components/AppShell";

export const Route = createFileRoute("/saved")({
  head: () => ({ meta: [{ title: "Saved troupes — Kalavidara-Balaga" }] }),
  component: SavedPage,
});

function SavedPage() {
  return (
    <AppShell title="Saved">
      <div className="mt-12 flex flex-col items-center text-center">
        <div className="mb-4 rounded-full border border-hairline bg-surface p-5">
          <Bookmark className="h-6 w-6 text-muted-foreground" />
        </div>
        <h2 className="font-display text-lg font-semibold">No saved troupes yet</h2>
        <p className="mt-2 max-w-xs text-sm text-muted-foreground">
          Tap the bookmark on any troupe to keep them here for quick access while planning your event.
        </p>
        <Link
          to="/search"
          className="mt-6 rounded-xl bg-gradient-gold px-5 py-3 text-sm font-bold text-black shadow-glow"
        >
          Browse troupes
        </Link>
      </div>
    </AppShell>
  );
}

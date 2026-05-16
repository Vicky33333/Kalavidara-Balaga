import { createFileRoute } from "@tanstack/react-router";
import { ChevronRight, LogIn, Phone, Shield, HelpCircle, Languages, Drum } from "lucide-react";
import { AppShell } from "@/components/AppShell";

export const Route = createFileRoute("/profile")({
  head: () => ({ meta: [{ title: "Profile — Kalavidara-Balaga" }] }),
  component: ProfilePage,
});

function ProfilePage() {
  return (
    <AppShell title="Profile">
      {/* List your troupe */}
      <section className="mb-6 overflow-hidden rounded-2xl border border-hairline bg-gradient-hero p-5 shadow-card">
        <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-hairline bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          <Drum className="h-3 w-3" /> For artists
        </div>
        <h2 className="font-display text-xl font-extrabold leading-tight">
          Are you a folk troupe?
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Create your profile, reach event managers across Karnataka, and turn your art into year-round income.
        </p>
        <button className="mt-4 w-full rounded-xl bg-gradient-gold py-3 text-sm font-bold text-black shadow-glow">
          List your troupe
        </button>
      </section>

      <section className="mb-6">
        <button className="flex w-full items-center justify-between rounded-2xl border border-hairline bg-surface px-4 py-4 text-left">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-gradient-card p-2.5">
              <LogIn className="h-4 w-4" />
            </div>
            <div>
              <p className="font-display text-sm font-semibold">Sign in</p>
              <p className="text-xs text-muted-foreground">Save troupes & contact directly</p>
            </div>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </button>
      </section>

      <section className="rounded-2xl border border-hairline bg-surface">
        {[
          { icon: Phone, label: "Booking enquiries" },
          { icon: Languages, label: "Language — English" },
          { icon: Shield, label: "Privacy & policies" },
          { icon: HelpCircle, label: "Help & support" },
        ].map((row, i, arr) => (
          <button
            key={row.label}
            className={`flex w-full items-center justify-between px-4 py-4 text-left ${
              i < arr.length - 1 ? "border-b border-hairline" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <row.icon className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{row.label}</span>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </button>
        ))}
      </section>

      <p className="mt-8 text-center text-[11px] text-muted-foreground">
        Kalavidara-Balaga · Karnataka folk arts marketplace
      </p>
    </AppShell>
  );
}

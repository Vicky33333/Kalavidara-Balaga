import { Link } from "@tanstack/react-router";
import { Bell } from "lucide-react";

export function TopBar({ title }: { title?: string }) {
  return (
    <header className="sticky top-0 z-30 border-b border-hairline bg-gradient-to-b from-background to-surface/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-md items-center justify-between px-5 py-4">
        <Link to="/" className="flex flex-col leading-none">
          {title ? (
            <span className="font-display text-base font-semibold tracking-wide">{title}</span>
          ) : (
            <>
              <span className="font-serif-italic text-lg text-gradient-gold">Kalavidara</span>
              <span className="font-display text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Balaga
              </span>
            </>
          )}
        </Link>
        <button
          aria-label="Notifications"
          className="rounded-full border border-hairline bg-surface p-2 text-muted-foreground"
        >
          <Bell className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
}

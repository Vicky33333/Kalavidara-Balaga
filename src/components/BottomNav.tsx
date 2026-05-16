import { Link, useLocation } from "@tanstack/react-router";
import { Compass, Search, Bookmark, User } from "lucide-react";

const items = [
  { to: "/", label: "Discover", icon: Compass },
  { to: "/search", label: "Search", icon: Search },
  { to: "/saved", label: "Saved", icon: Bookmark },
  { to: "/profile", label: "Profile", icon: User },
] as const;

export function BottomNav() {
  const { pathname } = useLocation();
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-hairline bg-surface/95 backdrop-blur-xl">
      <ul className="mx-auto flex max-w-md items-stretch justify-around px-2 pb-[env(safe-area-inset-bottom)] pt-2">
        {items.map(({ to, label, icon: Icon }) => {
          const active = pathname === to;
          return (
            <li key={to} className="flex-1">
              <Link
                to={to}
                className="relative flex flex-col items-center gap-1 py-2 text-[10px] font-medium tracking-wide"
              >
                <Icon
                  className={`h-5 w-5 transition-colors ${active ? "text-foreground" : "text-muted-foreground"}`}
                  strokeWidth={active ? 2.4 : 1.8}
                />
                <span className={active ? "text-foreground" : "text-muted-foreground"}>
                  {label}
                </span>
                {active && (
                  <span className="absolute -top-[9px] h-[2px] w-8 rounded-full bg-gradient-gold" />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

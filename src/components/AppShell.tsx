import { ReactNode } from "react";
import { BottomNav } from "./BottomNav";
import { TopBar } from "./TopBar";

export function AppShell({
  children,
  title,
  hideTopBar,
}: {
  children: ReactNode;
  title?: string;
  hideTopBar?: boolean;
}) {
  return (
    <div className="min-h-screen pb-24">
      {!hideTopBar && <TopBar title={title} />}
      <main className="mx-auto max-w-md px-5 pt-4">{children}</main>
      <BottomNav />
    </div>
  );
}

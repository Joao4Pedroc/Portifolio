import { ReactNode } from "react";

function RightContent({ children }: { children: ReactNode }) {
  return <div className="h-screen bg-zinc-900 text-zinc-200">{children}</div>;
}

export default RightContent;

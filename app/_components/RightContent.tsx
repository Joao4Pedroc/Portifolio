import { ReactNode } from "react";

function RightContent({ children }: { children: ReactNode }) {
  return <main className="pt-0 lg:pt-24 lg:w-1/2">{children}</main>;
}

export default RightContent;

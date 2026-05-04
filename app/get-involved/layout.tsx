import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "參與我們",
  description:
    "加入I.P.E.I.成為志工、報名親子活動或捐款支持，每一份參與都讓我們走得更遠。",
};

export default function GetInvolvedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

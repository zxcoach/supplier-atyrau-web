import type { Metadata } from "next";
import "./globals.css"; // ВОТ ЭТА СТРОЧКА ВКЛЮЧАЕТ ВСЮ КРАСОТУ

export const metadata: Metadata = {
  title: "Supplier Atyrau",
  description: "Поставки промышленного оборудования",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}

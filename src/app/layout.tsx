import "normalize.css";
import "../styles/global.scss";
import type { Metadata } from "next";
import { AppHeader } from "@/components/app-header/app-header";
import { AppFooter } from "@/components/app-footer/app-footer";

// export const metadata: Metadata = {
//   title:
//     "Охотничий интернет-магазин «ОхотАктив» — купить огнестрельное оружие, экипировку и товары для охоты в Москве",
//   description:
//     "Интернет-магазин «ОхотАктив» осуществляет продажу товаров для охоты, рыбалки и туризма в Москве. Заказывайте огнестрельное охотничье оружие онлайн или по телефону 8(800)700-82-56.",
//   viewport: "width=device-width, initial-scale=1.0, user-scalable = no",
//   openGraph: {
//     title:
//       "Охотничий интернет-магазин «ОхотАктив» — купить огнестрельное оружие, экипировку и товары для охоты в Москве",
//     description:
//       "Интернет-магазин «ОхотАктив» осуществляет продажу товаров для охоты, рыбалки и туризма в Москве. Заказывайте огнестрельное охотничье оружие онлайн или по телефону 8(800)700-82-56.",
//     locale: "ru_RU",
//     type: "website",
//     url: "https://ohotaktiv.ru",
//   },
//   manifest: "/manifest.json",
//   icons: {
//     apple: "/favicon.png",
//     icon: "/favicon.ico",
//     shortcut: {
//       type: "image/x-icon",
//       url: "/favicon.ico",
//     },
//   },
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <AppHeader />
        {children}
        <AppFooter />
        <div id="modals"></div>
      </body>
    </html>
  );
}

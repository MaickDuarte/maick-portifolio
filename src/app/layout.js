import "./globals.css";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

export const metadata = {
  title: "Maick Duarte - Portifólio",
  description: "Portifólio de Maick Duarte, Desenvolvedor de Software",
  // implementar depois, serve para mostrar descrição e foto quando eu compartilhar link do site
  /*openGraph: {
    type: "website",
    url: "https://maick.dev",
    title: "Maick Duarte - Portifólio",
    description: "Portifólio de Maick Duarte, Desenvolvedor de Software",
    images: [
      {
        url: "https://maick.dev/assets/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maick Duarte - Portifólio",
      },
    ],
  },*/
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />  
      </body>
    </html>
  );
}

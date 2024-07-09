import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Metrics.gg",
  description: "Tracker website for game stats",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="body-container">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

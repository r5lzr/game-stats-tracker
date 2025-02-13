import { Inter } from "next/font/google";
import "@/app/ui/globals.css";
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "METRICS.GA",
  description: "Search and track past player matches and game stats.",
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
        {children}
        <Footer />
      </body>
    </html>
  );
}

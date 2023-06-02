import Chat from "@/components/Chat";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI ChatBot",
  description: "Ask Any Thing To Your Chatbot",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <Chat />
          {children}
        </body>
      </Providers>
    </html>
  );
}

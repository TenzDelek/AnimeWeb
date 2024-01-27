import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalContextProvider } from "./Context/global";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anime",
  description: "A website for otaku",
};

export default function RootLayout({ children }) {
  return (
    <GlobalContextProvider>
    <html lang="en">
      <body className={inter.className}>
     
        {children}
        
       </body>
    </html>
    </GlobalContextProvider>
  );
}

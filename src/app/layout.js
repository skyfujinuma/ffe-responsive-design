import { DM_Sans } from 'next/font/google';
import "./globals.css";

const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata = {
  title: "ACM Threads",
  description: "A buzzing community hub for discussions and collaboration",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}

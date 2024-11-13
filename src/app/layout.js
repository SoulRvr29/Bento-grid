import localFont from "next/font/local";
import "./globals.css";

const DMSans = localFont({
  src: "./fonts/DMSans-VariableFont_opsz,wght.ttf",
  variable: "--font-dmsans",
  weight: "400 500",
});

const DMSansItalic = localFont({
  src: "./fonts/DMSans-Italic-VariableFont_opsz,wght.ttf",
  variable: "--font-dmsans-italic",
  weight: "400 500",
});

export const metadata = {
  title: "Bento Grid",
  description: "Frontend Mentor App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${DMSans.variable} ${DMSansItalic.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

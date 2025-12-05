import "../../styles/globals.css";
import { Lato } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
export const metadata = {
  title: "Portfolio",
  description: "Gurin Mihail",
};

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_MEASUREMENT_ID || ""} />
      <body className={"bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 min-h-screen " + lato.className}>{children}</body>
    </html>
  );
}

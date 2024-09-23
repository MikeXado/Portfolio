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
      <body className={"bg-[#050505] pb-5 " + lato.className}>{children}</body>
    </html>
  );
}

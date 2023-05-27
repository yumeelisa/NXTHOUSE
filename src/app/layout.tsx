import Header from "@/components/Header";
import "../styles/global.css";
import { Poppins } from "next/font/google";
import Providers from "@/components/Providers";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  weight: ["500", "400", "100", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "NXTHOUSE",
  description: "Generated by create next app",
};

interface RootProps {
  children: React.ReactNode;
  auth: React.ReactNode;
}

export default function RootLayout({ children, auth: authModal }: RootProps) {
  return (
    <Providers>
      <html lang="en">
      <Toaster position="top-center" reverseOrder={false} />

        <body className={poppins.className}>
          <Header />
          {children}
          {authModal}
        </body>
      </html>
    </Providers>
  );
}

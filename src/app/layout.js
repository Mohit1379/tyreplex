// importing global styling
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/bootstrap.scss";
import '@/styles/globals.scss';

//importing components
import BootstrapInitializer from "@/components/BootstrapInitializer";
import { Roboto } from "next/font/google";
import Navbar from "@/templates/Navbar";
import Footer from "@/templates/Footer";

// Configure Roboto font
const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"], // Adjust weights as needed
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <Navbar/>
      {children}
      <Footer/>
      <BootstrapInitializer/>
      </body>
    </html>
  );
}

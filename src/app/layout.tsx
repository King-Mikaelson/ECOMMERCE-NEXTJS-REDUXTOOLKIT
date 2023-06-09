import "./globals.css";
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";
import FooterCard from "../../components/footerCard/FooterCard";
import { AuthProvider } from "../../context/AuthContext";
import CartModal from "../../components/cartModal/CartModal";
import { useAuth } from "../../context/AuthContext";
import { Providers } from "./redux/provider";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AuthProvider>
        <body>
        <Providers>
          <CartModal />
          <Navigation />
            {children}
          </Providers>
          <Footer />
        </body>
      </AuthProvider>
    </html>
  );
}

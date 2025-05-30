import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThankYouPage from "@/components/Congratulation";

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pricing-layout">
      {/* Any pricing-specific wrapper elements */}
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
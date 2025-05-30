import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function ContactUs({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="ContactUs-layout">
      {/* Any pricing-specific wrapper elements */}
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
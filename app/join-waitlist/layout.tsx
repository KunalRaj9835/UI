import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function Waitlist({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="waitlist-layout">
      {/* Any pricing-specific wrapper elements */}
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
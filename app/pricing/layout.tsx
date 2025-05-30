export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pricing-layout">
      {/* Any pricing-specific wrapper elements */}
      {children}
    </div>
  );
}
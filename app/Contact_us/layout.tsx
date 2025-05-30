export default function ContactUs({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="ContactUs-layout">
      {/* Any pricing-specific wrapper elements */}
      {children}
    </div>
  );
}
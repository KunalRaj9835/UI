export default function Waitlist({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="waitlist-layout">
      {/* Any pricing-specific wrapper elements */}
      {children}
    </div>
  );
}
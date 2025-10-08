export default function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {children}
    </div>
  );
}

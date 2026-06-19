export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-900">
      {children}
    </div>
  );
}

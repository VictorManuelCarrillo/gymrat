export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="auth-layout">
      <header>Header para Auth</header>
      <main>{children}</main>
      <footer>Footer para Auth</footer>
    </div>
  );
}

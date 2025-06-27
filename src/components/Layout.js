import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="container">
      <nav className="navbar">
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
}
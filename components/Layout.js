import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
      {children}
    </>
  );
}
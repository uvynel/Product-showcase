import Link from 'next/link';

export default function Home({ products }) {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold text-center mb-8">Product Showcase</h1>
      <ul className="product-list">
        {products.map(product => (
          <li key={product.id} className="product-item">
            <img src={product.image} alt={product.title} className="product-image" />
            <h2 className="product-title">{product.title}</h2>
            <Link href={`/products/${product.id}`}>
              <button className="view-details">View Details</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://fakestoreapi.com/products?limit=5');
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
}
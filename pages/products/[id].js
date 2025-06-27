import { useState, useEffect } from 'react';

export default function ProductDetail({ product }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorite(favorites.includes(product.id));
  }, [product.id]);

  const toggleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (isFavorite) {
      favorites = favorites.filter(id => id !== product.id);
    } else {
      favorites.push(product.id);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="product-detail">
      <div className="product-detail-content">
        <div className="product-image-container">
          <img src={product.image} alt={product.title} className="product-image" />
        </div>
        <div className="product-info">
          <h1 className="product-title-details">{product.title}</h1>
          <p className="price">Price: ${product.price}</p>
          <p className="category">Category: {product.category}</p>
          <p className="description">{product.description}</p>
          <button onClick={toggleFavorite} className="favorite-button">
            {isFavorite ? 'Remove from Favorite' : 'Add to Favorite'}
          </button>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
  const paths = products.map(product => ({
    params: { id: product.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await res.json();
  return {
    props: {
      product,
    },
  };
}
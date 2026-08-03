import { useProducts } from './hooks/useProducts';
import { ProductList } from './components/ProductList';
import './App.css';

function App() {
  const { products, isLoading, error } = useProducts();

  return (
    <div className="app">
      <header className="app__header">
        <h1>E-commerce Search</h1>
        <p>{products.length} san pham</p>
      </header>

      <main>
        {isLoading && <p className="status">Dang tai du lieu...</p>}
        {error && <p className="status status--error">{error}</p>}
        {!isLoading && !error && <ProductList products={products} />}
      </main>
    </div>
  );
}

export default App;

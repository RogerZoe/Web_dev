import { useState, useEffect } from 'react'; // React hooks for state and lifecycle
import axios from 'axios'; // Axios for API calls

const ProductSearch = () => {
  // State to store fetched products
  const [products, setProducts] = useState([]);
  // State to indicate loading status
  const [loading, setLoading] = useState(false);
  // State to handle and display error
  const [error, setError] = useState(false);
  // State to store search input
  const [search, setSearch] = useState('');

  // useEffect runs whenever the `search` state changes
  useEffect(() => {
    const controller = new AbortController(); // Create AbortController to cancel outdated API requests

    (async () => {
      setLoading(true);   // Show loading indicator
      setError(false);    // Reset error state

      try {
        // Fetch data from API with `search` query and attach the abort signal
        const response = await axios.get(`/api/products?search=${search}`, {
          signal: controller.signal,
        });

        // Update products state with response data
        setProducts(response.data);
      } catch (error) {
        // Ignore if request was intentionally aborted
        if (error.name === 'AbortError') return;

        // Set error to true for other errors
        setError(true);
      } finally {
        // Stop the loading indicator regardless of success or failure
        setLoading(false);
      }
    })();

    // Cleanup function: aborts previous request if `search` changes before it completes
    return () => controller.abort();
  }, [search]); // Dependency array: rerun effect when `search` changes

  // If loading, display loading message
  if (loading) return <h1>Loading...</h1>;

  // If error occurred, show error message
  if (error) return <div>Something went wrong</div>;

  return (
    <>
      {/* Input field to update the search state on every keystroke */}
      <input
        type="text"
        placeholder="Search products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Display number of products fetched */}
      <div>Number of products: {products.length}</div>
    </>
  );
};

export default ProductSearch;

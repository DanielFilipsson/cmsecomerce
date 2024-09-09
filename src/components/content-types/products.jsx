export default function ProductList({ blok }) {
    console.log(blok);
    return (
      <section className="container mx-auto p-8">
        <h2 className="text-4xl font-bold text-center mb-8">Our Products</h2>
        {blok.products && blok.products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {blok.products.map((product) => (
              <div key={product._uid} className="border rounded-lg shadow-md p-4">
                {product.image && (
                  <img
                    src={product.image.filename}
                    alt={product.image.alt || 'Product Image'}
                    className="w-full h-48 object-cover mb-4 rounded"/>
                )}
                <h3 className="text-xl font-semibold mb-2">{product.title || 'Product Title'}</h3>
                <p className="text-gray-700 mb-2">Size: {product.size || 'N/A'}</p>
                <p className="text-lg font-bold text-gray-900">{product.price ? `$${product.price}` : 'Price Unavailable'}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No products available</p>
        )}
      </section>
    );
  }
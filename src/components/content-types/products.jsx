import { useEffect, useState } from "react";
import { getProducts } from "@/utils/cms"
import Link from 'next/link';

export default function ProductList({ blok }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts = await getProducts();
      console.log("Fetched products in useEffect:", fetchedProducts);
      setProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);
  
  
    return (  
      <section className="container mx-auto p-8"> 
        <div className="flex flex-col items-start w-full space-y-4 sm:items-start sm:w-1/2"> 
        <div>
        <h2 className="text-4xl font-bold mb-8"> {blok.title} </h2>
        <p className="text-lg flex-wrap text-black">{blok?.text || 'Default description text.'}</p>
        </div>
       
        <div className="flex flex-wrap justify-center space-x-2 mt-8">
        {blok.productLinks?.map((linkItem) => (
          <a
            key={linkItem._uid}
            href={linkItem.link.cached_url || '#'}
            className="inline-block px-4 py-1 border border-gray-800 bg-white text-black font-semibold rounded hover:bg-gray-200 transition duration-300"
          >
            {linkItem.linkTitle}
          </a>
        ))}
      </div>
      <Link href={blok.link.cached_url || '#'}>
            {blok.link.title || 'Home'}
            
        </Link>
      </div>

      {/* products */}
      <div className="flex justify-center px-4 sm:px-8">
  <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-full gap-4 p-6 sm:p-8 lg:p-12">
    {products.map((product) => (
      <Link key={product.uuid} href={`/products/${product.slug}`}>
        <div key={product.uuid} className="flex flex-col border p-4 rounded-md shadow-md w-full max-w-sm transition-transform duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gray-100">
          <div className="relative mb-4 flex-shrink-0">
            <img 
              src={product.content.productImage.filename} 
              alt={product.content.productTitle} 
              className="w-full h-60 object-cover rounded-md" 
            />
          </div>
          <div className="flex flex-col flex-grow">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">{product.content.productTitle}</h3>
            <p className="text-lg font-bold text-gray-900">{product.content.price}</p>
          </div>
        </div>
      </Link>
    ))}
  </div>
</div>





      </section>
    );
  }
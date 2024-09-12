"use client"

import Link from 'next/link';
import { useEffect, useState } from "react";
import { getProducts } from "@/utils/cms"

export default function Header({ blok }) {

    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState(''); 
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [productDropdown, setProductDropdown] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
      };

    useEffect(() => {
      async function fetchProducts() {
        const fetchedProducts = await getProducts();
        setProducts(fetchedProducts);
      }
      fetchProducts();
     
    }, []);


    useEffect(() => {
        // Filtrera produkterna baserat på sökord
        const results = products.filter((product) =>
            product?.content?.productTitle?.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredProducts(results);
        console.log("Filtrerade produkter:", results);
    }, [searchTerm, products]);


    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value); // Uppdatera sökordet direkt och filtrera produkter
    };

    const handleLinkClick = () => {
        // Töm sökfältet och stäng dropdownen
        setSearchTerm('');
        setProductDropdown(false);
    };
    
    
    return (
        <header className="bg-white shadow-md p-4">
            <div className="container mx-auto flex items-center justify-start space-x-6">
                {/* Logo */}
                <div className="flex items-center space-x-6">
                    <span className="ml-2 text-xl hidden sm:inline font-bold">{blok?.headerLogo || 'Default Logo Text'}</span>
                
                {/* Navigation Links */}
                <nav className="flex space-x-4">
                    {blok?.headerLinks?.map((item) => (
                        <Link key={item._uid} className="text-black hover:underline" href={item.link.cached_url || '#'}>
                            {item.linkTitle}
                        </Link>
                    ))}
                </nav>
                </div>

                <div className="relative">
          <button onClick={toggleDropdown} className="text-black hover:underline">
            Products
          </button>
          {isDropdownOpen && (
            <ul className="absolute bg-white border border-gray-200 rounded-md mt-2 shadow-lg">
              {products.map((product) => (
                <li key={product.uuid} className="p-2 hover:bg-gray-100">
                  <Link href={`/products/${product.slug}`}>
                    {product.content.productTitle}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

                 {/* Input Field */}
                <div className="flex relative items-center">
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="p-2 rounded-md bg-white border-transparent focus:border-gray-300 focus:ring-0 hover:border-gray-300 transition duration-300"
                        value={searchTerm}
                        onChange={handleInputChange}
                        
                    />
                     {searchTerm.length > 0 && filteredProducts.length > 0 && (
                        <div 
                        className="absolute top-full mt-2 w-[400px] bg-white border border-gray-300 rounded-md shadow-lg max-h-80 overflow-y-auto z-10"
                    >
                        <ul className="pl-0">
                            {filteredProducts.map((product) => (
                                <li key={product.uuid} className="flex items-center p-2 hover:bg-gray-100">
                                    <Link href={`/products/${product.slug}`} className="flex items-center gap-2"  onClick={handleLinkClick}>
                                        {/* Bilden visas bredvid produktens titel */}
                                        <img 
                                            src={product.content.productImage.filename} 
                                            alt={product.content.productTitle} 
                                            className="w-12 h-12 object-cover mr-4" 
                                        />
                                        <span className="text-black">{product.content.productTitle}</span>
                                        <p className="text-black"> {product.content.price}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    )}
                </div>
               

            </div>


        </header>
    );
}
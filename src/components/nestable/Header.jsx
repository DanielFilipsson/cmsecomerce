"use client"

import Link from 'next/link';
import { useEffect, useState } from "react";
import { getProducts } from "@/utils/cms"

export default function Header({ blok }) {

    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState(''); 
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [tempSearchTerm, setTempSearchTerm] = useState('');

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
        const results = products.filter((product) =>
          product?.content?.productTitle?.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(results); // Uppdatera filtrerade produkter baserat på söktermen
      }, [searchTerm, products]);

      const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          setSearchTerm(tempSearchTerm); // Uppdatera det faktiska sökordet
        }
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
                 {/* Input Field */}
                <div className="flex items-center">
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="p-2 rounded-md bg-white border-transparent focus:border-gray-300 focus:ring-0 hover:border-gray-300 transition duration-300"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                </div>

            </div>


        </header>
    );
}
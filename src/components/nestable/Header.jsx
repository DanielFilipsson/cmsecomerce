import Link from 'next/link';


export default function Header({ blok }) {

    console.log("header data", blok);

    // const { logo, logoText, headerNav } = blok?.content || {};
    
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
                        className="p-2 rounded-md border-transparent focus:border-gray-300 focus:ring-0 hover:border-gray-300 transition duration-300"
                        // className="border border-gray-300 rounded-md p-2"
                    />
                </div>

            </div>


        </header>
    );
}

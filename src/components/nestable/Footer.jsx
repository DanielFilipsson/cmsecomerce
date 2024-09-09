import Link from 'next/link';


export default function Footer({ blok }) {

    console.log("footer data", blok.footerTitle);

    
    return (
        <>
        <span className="block w-full h-0.5 bg-white mt-8"></span>
        <footer className="bg-white shadow-md p-8">
            <div className="container mx-auto flex flex-col md:flex-row items-start justify-between gap-8 shadow-t-lg">
                {/* grid 1 title, text, email*/}
                <div className="flex flex-col justify-center md:w-1/2 space-y-4">
                    <h3 className=" text-4xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">{blok?.footerTitle || 'Default Logo Text'}</h3>
                    <p>{blok?.description || 'Default footer Text'} </p>
                     {/* email input fält */}
                    <div className="flex">
                        <div className="relative w-full pt-4"> 
                    <input 
                        type="email" 
                        placeholder="Email address" 
                        className="p-2 pr-32 w-full border border-gray-300 rounded-md focus:border-gray-500 focus:ring-0 transition duration-300"
                    />
                     <button 
                type="button" 
                className="absolute top-1/2 right-0 transform -translate-y-1/2 mt-2 mr-2 px-4 py-2 text-black font-semibold transition-transform duration-300 text-sm hover:text-base"
            >
                Sign Up
            </button>
            </div>
                </div>
                </div>
               
               
                {/* Grid 2: Navigation Links - SHOP */}
                <div className='flex flex-col space-y-2'>  
                <p className="font-semibold">Shop</p>                  
                <nav className="flex flex-col space-y-2">                    
                    {blok?.footerLinkShop?.map((item) => (
                        <Link key={item._uid} className="text-black hover:underline" href={item.link.cached_url || '#'}>
                            {item.linkTitle}
                        </Link>
                    ))}
                </nav>
                </div>
                
                {/* Grid 3: Navigation Links - HELP */}
                <div className='flex flex-col space-y-2'>  
                <p className="font-semibold">Help</p>                  
                <nav className="flex flex-col space-y-2">                    
                    {blok?.footerLinkHelp?.map((item) => (
                        <Link key={item._uid} className="text-black hover:underline" href={item.link.cached_url || '#'}>
                            {item.linkTitle}
                        </Link>
                    ))}
                </nav>
                </div>

                {/* Grid 4: Navigation Links - ABOUT */}
                <div className='flex flex-col space-y-2'>  
                <p className="font-semibold">About</p>                  
                <nav className="flex flex-col space-y-2">                    
                    {blok?.footerLinkAbout?.map((item) => (
                        <Link key={item._uid} className="text-black hover:underline" href={item.link.cached_url || '#'}>
                            {item.linkTitle}
                        </Link>
                    ))}
                </nav>
                </div>
               
               
            </div>
        </footer>
         </>
        
    );
}

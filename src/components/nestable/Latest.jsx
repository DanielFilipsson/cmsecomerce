export default function Latest({ blok }) {
    return (
        <section className="flex items-center justify-center w-full min-h-screen mt-11">
            <div className="flex flex-col items-center justify-center space-y-4 text-center w-full gap-4">

                {/* Text container */}
                <div className="flex flex-col items-center w-full md:w-1/2 space-y-4">                         
                    <h1 className="text-5xl font-bold text-black">{blok?.latestTitle || 'Default Title'}</h1>
                    <p className="text-lg text-black">{blok?.latestDescription || 'Default description text.'}</p>
                    {blok?.latestButton && (
                        <div className="flex justify-center w-full">
                            <a 
                                href={blok.latestButton.cached_url || '#'} 
                                title={blok.latestButton.title || 'Click here'} 
                                rel={blok.latestButton.rel || 'noopener noreferrer'}
                                className="inline-block px-6 py-3 border border-gray-800 bg-white text-black font-semibold rounded hover:bg-gray-200 transition duration-300"
                            >
                                {blok.latestButton.title || 'Button'}
                            </a>
                        </div>
                    )}
                </div>
                {/* Image container */}
                <div className="flex justify-center w-full p-8 mb-4">    
                    <section className="flex flex-col h-auto sm:flex-row space-x-4 px-4 space-y-4 sm:space-y-0">
                        {blok.latestImages?.map((item, index) => (
                             <div key={item._uid} 
                             className={`flex-shrink-0 w-full sm:w-1/2 md:w-1/3 transform transition-transform duration-500 ${
                                index === 1 ? 'scale-110 z-10' : 'scale-90'
                            }`}
                            //  className=" flex flex-col border p-2 rounded-md shadow-md w-full"
                             >
                             {item.image?.filename && (
                                  <div>
                               <img 
                                 src={item.image.filename} 
                                 alt={item.image.alt || 'Image'}                                  
                                 className="w-full h-full object-cover mb-4 rounded-md"
                               />
                               </div>
                             )}
                           </div>
                        ))}

                    </section>

                </div>
               
            </div>
        </section>
    )
}

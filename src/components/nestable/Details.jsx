export default function ProductDetails({ blok }) {
    return (
        <section className="flex items-center justify-center w-full min-h-screen p-5 md_min-h-[70vh] lg:min-h-[60vh]">
            <div className="flex flex-col md:flex-row items-center max-w-5xl w-full">
                <div className="flex-shrink-0 w-full md:w-1/2 md:mr-8">
                    <img
                        src={blok.productImage.filename}
                        alt={blok.productImage.alt || 'Image'}
                        className="w-full h-auto max-h-[600px] object-cover"
                    />
                </div>
                <div className="flex flex-col items-start w-full md:w-1/2 space-y-4 mt-8 md:mt-0">
                    <h1 className="text-4xl text-black">{blok.productTitle || 'Default Title'}</h1>
                    <p className="text-sm text-black">{blok.price || 'Default price text.'}</p>
                    <p className="text-sm text-black">{blok.productDescription || 'Default description text.'}</p>

                    {/* Färgval */}
                    <div className="flex flex-col space-y-2">
                        <p className="text-sm text-black font-semibold">Färg</p>
                        <div className="flex space-x-4">
                            {/* Färgknapp 1 */}
                            <button
                                className="w-10 h-10 rounded-full border border-black focus:outline-none"
                                style={{ backgroundColor: '#808080' }} // Exempel: Röd färg
                            />
                            {/* Färgknapp 2 */}
                            <button
                                className="w-10 h-10 rounded-full border border-black focus:outline-none"
                                style={{ backgroundColor: '#FFA500' }} // Exempel: Blå färg
                            />
                        </div>
                    </div>

                    {/* Storleksknappar */}
                    <div className="flex space-x-2 mt-4">
                        {['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'].map((size) => (
                            <button
                                key={size}
                                className="px-4 py-2 border border-black text-black text-sm font-semibold w-16 h-16 flex items-center justify-center"
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}


// export default function ProductDetails({blok}) {
//     return (
//         <section className="flex items-center justify-center w-full min-h-screen p-5 md_min-h-[70vh] lg:min-h-[60vh]">
//             <div className="flex flex-col md:flex-row items-center max-w-5xl w-full">
//                 <div className="flex flex-col items-start w-full md:w-1/2 space-y-4">
//             <h1 className="text-4xl text-black">{blok.productTitle || 'Default Title'}</h1>
//             <p className="text-sm text-black">{blok.price || 'Default price text.'}</p>
//             <p className="text-sm text-black">{blok.productDescription || 'Default description text.'}</p>
//                 </div>
//                 <div className="flex-shrink-0 w-full md:w-1/2 mt-8 md:mt-0 md:ml-8">
//                 <img
//                 src={blok.productImage.filename}
//                 alt={blok.productImage.alt || 'Image'}
//                 className="w-full h-auto max-h-[600px] object-cover"
//                 />
//                 </div>
//             </div>
            
//         </section>
//     )
// }

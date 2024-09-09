
export default function ProductDetails({blok}) {
    return (
        <section className="flex items-center justify-center w-full min-h-screen p-5 md_min-h-[70vh] lg:min-h-[60vh]">
            <div className="flex flex-col md:flex-row items-center max-w-5xl w-full">
                <div className="flex flex-col items-start w-full md:w-1/2 space-y-4">
            <h1 className="text-4xl text-black">{blok.productTitle || 'Default Title'}</h1>
            <p className="text-sm text-black">{blok.price || 'Default price text.'}</p>
            <p className="text-sm text-black">{blok.productDescription || 'Default description text.'}</p>
                </div>
                <div className="flex-shrink-0 w-full md:w-1/2 mt-8 md:mt-0 md:ml-8">
                <img
                src={blok.productImage.filename}
                alt={blok.productImage.alt || 'Image'}
                className="w-full h-auto max-h-[600px] object-cover"
                />
                </div>
            </div>
            
        </section>
    )
}

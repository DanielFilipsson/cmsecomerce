export default function ProductList({ blok }) {
  
    return (
      <section className="container mx-auto p-8">
        <div className="flex flex-col items-start w-1/2"> 
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
      </div>
      </section>
    );
  }
import Image from 'next/image';
import Link from 'next/link';

export default function Hero({ blok }) {


    const bgColorClass = (() => {
      switch (blok.bgColor) {
        case 'green':
          return 'bg-[#9A9B87]';
        case 'beige':
          return 'bg-[#DBD0C5]'; 
        case 'linenWhite':
          return 'bg-[#EFEDE3]'; 
        case 'white':
        default:
          return 'bg-white'; 
      }
    })();
  
    const textColorClass = (() => {
      switch (blok.bgColor) {
        case 'green':
          return 'text-black';
        case 'white':
        default:
          return 'text-black'; 
      }
    })();

  return (
    <section 
    className={`flex flex-col items-center justify-center w-full min-h-screen p-8 pb-10 space-y-8 text-center ${bgColorClass}`}
    >
      <h1 
    className={`text-5xl font-bold ${textColorClass}`}
      >{blok.title || 'Default Title'}</h1>
      <p 
    className={`text-lg ${textColorClass}`}
      >{blok.text || 'Default text description'}</p>
     <Link href={blok.heroButton.cached_url || '#'}>
  <div className="inline-block px-6 py-3font-semibold transition duration-300 transform hover:scale-105 cursor-pointer">
    {blok.heroButton.title || 'Go to Products'}
  </div>
  
  
</Link>
      {blok.image && (
        <div className="w-full md:w-3/4 lg:w-2/3">
          <Image
            src={blok.image.filename}
            alt={blok.image.alt || 'Image'}
            width={1280}
            height={853}
            className="rounded-md shadow-md"
            layout="responsive"
          />
        </div>
      )}
      
    </section>
  );
}
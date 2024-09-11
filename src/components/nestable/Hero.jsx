import Image from 'next/image';
import Link from 'next/link';

export default function Hero({ blok }) {
  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen p-8 space-y-8 text-center">
      <h1 className="text-5xl font-bold text-black">{blok.title || 'Default Title'}</h1>
      <p className="text-lg text-gray-700">{blok.text || 'Default text description'}</p>
        <Link href={blok.heroButton.cached_url || '#'}>
            {blok.heroButton.title || 'Go to Products'}
        </Link>
      {blok.image && (
        <div className="w-full md:w-1/2">
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
import Link from 'next/link';

export default function AboutUs({ blok }) {
  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen p-8 space-y-8 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-black">
          {blok.title || 'Om Oss'}
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-4 mb-6">
          {blok.text || 'Standard Om Oss-text visas här.'}
        </p>
        <Link href={blok.link.cached_url || '#'}>
            {blok.link.title || 'Home'}
        </Link>
      </div>
    </section>
  );
}

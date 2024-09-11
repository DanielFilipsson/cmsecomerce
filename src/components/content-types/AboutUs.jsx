export default function AboutUs({ blok }) {
  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen p-8 space-y-8 text-center">
      <div className="max-w-3xl mx-auto"> {/* Maxbredd satt till 3xl för att begränsa textens bredd */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-black">
          {blok.title || 'Om Oss'}
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-4">
          {blok.text || 'Standard Om Oss-text visas här.'}
        </p>
      </div>
    </section>
  );
}

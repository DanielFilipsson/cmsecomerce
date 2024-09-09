export default function AboutUs({ blok }) {
    return (
      <section className="flex flex-col items-center justify-center w-full min-h-screen p-8 space-y-8 text-center">
        <h1 className="text-5xl font-bold text-black">{blok.title || 'About Us'}</h1>
        <p className="text-lg text-gray-700">{blok.text || 'Default About Us text goes here.'}</p>
      </section>
    );
  }
export default function Divider({ blok }) {
    return (
      <section className="w-full relative overflow-hidden">
        <div className="relative w-full h-32 sm:h-40 md:h-50 lg:h-64">
          <img 
            src={blok.dividerImage.filename} 
            alt={blok.dividerImage.alt || 'Image'}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      </section>
    );
  }
  
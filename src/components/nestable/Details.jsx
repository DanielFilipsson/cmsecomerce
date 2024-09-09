import Image from 'next/image';

export default function ProductDetails({blok}) {
    return (
        <section>
            <h1>{blok.title || 'Default Title'}</h1>
            <p>{blok.text || 'Default price text.'}</p>
            <p>{blok.text || 'Default description text.'}</p>
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
        </section>
    )
}
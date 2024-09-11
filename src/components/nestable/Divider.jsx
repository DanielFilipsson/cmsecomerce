export default function Divider({ blok }) {

    return (
        <section className="w-full h-64 overflow-hidden">
        <img src={blok.dividerImage.filename} alt={blok.dividerImage.alt || 'Image'}
        className="w-full h-full object-cover object-center" />

    </section>

    )
}
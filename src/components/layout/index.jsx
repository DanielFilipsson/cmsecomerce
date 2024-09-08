import Header from "../nestable/Header";
import Footer from "../nestable/Footer";
import Latest from "../nestable/Latest";

//Uses config set global components for the layout
export default function Layout({ config, children }) {
    //Create at least a header and footer component
    //Use console.log to determine blok object structure if unsure...
    return (
        <>
           <Header blok={config} />
            <main className="">{children}</main>
            <Latest blok={config} />
            <Footer blok={config} />
        </>
    );
}
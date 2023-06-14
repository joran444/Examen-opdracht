import "../styles/globals.css";
import Header from "@components/header";
import Footer from "@components/footer";

export default function App({ Component, pageProps }) {
    return (
        <div> 
                {/* This is the place where all the data is loaded,
                 as you can see below the Header is loaded in first,
                 After the header the pages will be loaded in,
                 We load in the footer as last*/}
                <Header />
                <div className="relative bg-background">
                    <Component {...pageProps} />
                </div>
                <Footer />
        </div>
    )
}


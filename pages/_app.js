import "../styles/globals.css";
import Header from "@components/header";
import Footer from "@components/footer";

export default function App({ Component, pageProps }) {
    return (
        <div className=""> 
                <Header />
                <div className="site-container background">
                    <Component {...pageProps} />
                </div>
                <Footer />
        </div>
    )
}


import "../styles/globals.css";
import { useRouter } from "next/router";
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


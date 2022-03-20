import Head from "next/head";
import Link from "next/link";

const Layout = ({ children, title = "Full-Stack-Toy" }) => {
    return (
        <>
            <div>
                <Head>
                    <title>{title}</title>
                    <meta charset="utf-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta name="description" content="This project is meant to be a demonstration of an entire full stack app, from start to finish." />
                    <meta name="author" content="Connor Keenum" />
                    <meta name="docsearch:language" content="en" />
                    <meta property="og:description" content="This project is meant to be a demonstration of an entire full stack app, from start to finish." />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:site_name" content="Full-Stack-Toy" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://full-stack-toy.herokuapp.com/" />
                    <link rel="canonical" href="https://full-stack-toy.herokuapp.com/" />
                </Head>
                <nav>
                    <button>
                        <Link href="/">
                            Home
                        </Link>
                    </button>
                    <span>
                        &nbsp;
                        Library
                    </span>
                </nav>
                {children}
            </div>
        </>
    );
}

export default Layout;
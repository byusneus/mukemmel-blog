import NextHead from "next/head";

const Head = ({ title }) => {
    return(
        <NextHead>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css?family=Playfair+Display:700|Poppins:300,600&display=swap" rel="stylesheet" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        </NextHead>
    );
}

export default Head;
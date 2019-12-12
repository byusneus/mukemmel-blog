import NextHead from "next/head";

const Head = ({ title }) => {
    return(
        <NextHead>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css?family=Zilla+Slab:400,400i,600,700&display=swap" rel="stylesheet"/>
            <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        </NextHead>
    );
}

export default Head;
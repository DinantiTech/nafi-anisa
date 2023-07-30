import { Helmet } from "react-helmet-async";
import { SEO_CREATORTHEME, SEO_DESC, SEO_IMAGE, SEO_TITLE_HEAD } from "../../contants/head.const";

export default function HeadCommon() {

    const CURRENT_URL = window.location.href;

    return (
        <Helmet prioritizeSeoTags>
            <title>{SEO_TITLE_HEAD}</title>

            <link rel="shortcut icon" href="/vite.svg" type="image/x-icon" />

            <meta property="og:title" content={SEO_TITLE_HEAD} />
            <meta property="og:image" content={SEO_IMAGE} />
            <meta property="og:url" content={CURRENT_URL} />
            <meta property="og:site_name" content={SEO_TITLE_HEAD} />
            <meta property="og:description" content={SEO_DESC} />
            <meta name="twitter:title" content={SEO_TITLE_HEAD} />
            <meta name="twitter:description" content={SEO_DESC} />
            <meta name="twitter:image" content={SEO_IMAGE} />
            <meta name="twitter:url" content={CURRENT_URL} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:creator" content={SEO_CREATORTHEME} />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <script src="https://cdn.jsdelivr.net/npm/gsap@3.12/dist/gsap.min.js"></script>
      </Helmet>
    )
}
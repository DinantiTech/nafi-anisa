import { Helmet } from "react-helmet-async";
import { TITLE_HEAD } from "../../contants/head.const";

export default function HeadCommon() {
    return (
        <Helmet prioritizeSeoTags>
            <title>{TITLE_HEAD}</title>

            {/* <link rel="icon" type="image/png" href={Favicon} /> */}

            {/* <meta property="og:title" content={finalTitle} />
            <meta property="og:image" content={SEO_IMAGE} />
            <meta property="og:url" content={SEO_URL} />
            <meta property="og:site_name" content={finalTitle} />
            <meta property="og:description" content={finalDescription} />
            <meta name="twitter:title" content={finalTitle} />
            <meta name="twitter:description" content={finalDescription} />
            <meta name="twitter:image" content={SEO_IMAGE} />
            <meta name="twitter:url" content={SEO_URL} /> */}
            {/* <meta name="twitter:card" content="summary" />
            <meta name="twitter:creator" content={CREATORTHEME} /> */}

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <script src="https://cdn.jsdelivr.net/npm/gsap@3.12/dist/gsap.min.js"></script>
      </Helmet>
    )
}
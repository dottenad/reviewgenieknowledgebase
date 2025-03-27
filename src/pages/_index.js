import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import GTM from "../components/gtm";

export default function Home() {
    const { siteConfig } = useDocusaurusContext();

    return (
        <>
            <GTM />
            <Layout title={siteConfig.title} description={siteConfig.tagline}>
                <main>
                    <h1>{siteConfig.title}</h1>
                    <p>{siteConfig.tagline}</p>
                </main>
            </Layout>
        </>
    );
}

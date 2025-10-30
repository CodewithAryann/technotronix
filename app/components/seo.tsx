import Head from "next/head";

export default function SEO({
  title = "Technotronix | AI-Powered Video Analytics",
  description = "Transform your spaces with Technotronix AI video analytics — footfall tracking, movement mapping, and actionable spatial intelligence.",
  url = "/",
  image = "/images/seo-banner.jpg",
}) {
  // Always use absolute URLs for images and canonical links
  const siteUrl = "https://www.technotronix.ai";
  const fullUrl = `${siteUrl}${url.startsWith("/") ? url : `/${url}`}`;
  const fullImage = image.startsWith("http")
    ? image
    : `${siteUrl}${image.startsWith("/") ? image : `/${image}`}`;

  return (
    <Head>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

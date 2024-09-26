export default async function sitemap() {
  const baseUrl = "https://www.alpha-herbs.com";

  return [
    { url: baseUrl, lastMofified: new Date() },
    { url: `${baseUrl}/about`, lastMofified: new Date() },
    { url: `${baseUrl}/blog`, lastMofified: new Date() },
    { url: `${baseUrl}/contact`, lastMofified: new Date() },
    { url: `${baseUrl}/faq`, lastMofified: new Date() },
    { url: `${baseUrl}/profile`, lastMofified: new Date() },
    { url: `${baseUrl}/sign-in`, lastMofified: new Date() },
    { url: `${baseUrl}/sign-up`, lastMofified: new Date() },

    {
      url: `${baseUrl}/blog/mint-natures-refreshing-remedy-for-digestion-and-more`,
      lastMofified: new Date(),
    },
  ];
}

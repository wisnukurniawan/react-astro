import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";
import { productsData } from "@/data/data";
import ProductCard from "@/components/ProductCard";

const Index = () => {
  const canonical = typeof window !== "undefined" ? window.location.href : "";

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: productsData.data.Products.map((p, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      url: p.ProductUrl ?? canonical,
      item: {
        '@type': 'Product',
        name: `${p.Brand} ${p.Name}`,
        image: [p.MainImageUrl, ...(p.ImageList || [])],
        brand: { '@type': 'Brand', name: p.Brand },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'IDR',
          price: 230000,
          availability: 'https://schema.org/InStock',
        },
      },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Shopay — Trending Sports Accessories</title>
        <meta name="description" content="Shop trending sports accessories like Adidas 3-Stripes Crew Socks and more at Shopay." />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <Header />

      <main id="products" className="container py-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Trending Sports Accessories</h1>
          <p className="mt-2 text-muted-foreground">
            Curated picks from top brands. Free returns. Fast shipping.
          </p>
        </header>

        <section aria-label="Product list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {productsData.data.Products.map((p) => (
            <ProductCard product={p} />
          ))}
        </section>
      </main>

      <Footer />

      {/* Structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
    </div>
  );
};

export default Index;
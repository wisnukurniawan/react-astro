const Footer = () => {
  return (
    <footer id="about" className="border-t bg-background">
      <div className="container py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="mb-3 font-semibold">Shopay</h4>
            <p className="text-sm text-muted-foreground">
              Beautiful, modern ecommerce UI built with a refined design system.
            </p>
          </div>
          <div>
            <h5 className="mb-3 font-semibold">Shop</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#products" className="hover:underline">All Products</a></li>
              <li><a href="#" className="hover:underline">New Arrivals</a></li>
              <li><a href="#" className="hover:underline">Trending</a></li>
            </ul>
          </div>
          <div>
            <h5 className="mb-3 font-semibold">Company</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="mb-3 font-semibold">Legal</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:underline">Privacy</a></li>
              <li><a href="#" className="hover:underline">Terms</a></li>
              <li><a href="#" className="hover:underline">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Shopay. All rights reserved.</p>
          <p>
            Built with ❤️ using a semantic Tailwind design system.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
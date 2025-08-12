import { Link } from "react-router-dom";
import { ShoppingCart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link to="/" className="inline-flex items-center gap-2" aria-label="Shopay Home">
            <div className="h-8 w-8 rounded-md bg-gradient-primary shadow-glow" />
            <span className="text-lg font-semibold">Shopay</span>
          </Link>
        </div>

        <div className="hidden md:flex flex-1 max-w-xl items-center gap-2">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              aria-label="Search products"
              placeholder="Search products"
              className="pl-10"
            />
          </div>
        </div>

        <nav className="flex items-center gap-2">
          <Button asChild variant="ghost">
            <Link to="#products">Products</Link>
          </Button>
          <Button asChild variant="ghost" className="hidden sm:inline-flex">
            <Link to="#about">About</Link>
          </Button>
          <Button variant="hero" size="sm" aria-label="Open cart">
            <ShoppingCart />
            <span className="hidden sm:inline">Cart</span>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

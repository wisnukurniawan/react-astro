import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Product } from "@/data/data";
import { toast } from "sonner";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { Name, Price, Brand, MainImageUrl, ImageList, SpecialLabel } = product;
  const secondaryImage = ImageList?.[1] ?? MainImageUrl;

  return (
    <article className="group">
      <Card className="overflow-hidden">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={MainImageUrl}
            alt={`${Brand} ${Name} - primary image`}
            loading="lazy"
            className="size-full object-cover transition duration-700 group-hover:scale-105"
          />
          <img
            src={secondaryImage}
            alt={`${Brand} ${Name} - secondary image`}
            loading="lazy"
            className="absolute inset-0 size-full object-cover opacity-0 transition duration-700 group-hover:opacity-100"
          />
          <div className="absolute left-3 top-3 flex gap-2">
            {SpecialLabel ? (
              <Badge className="capitalize">{SpecialLabel}</Badge>
            ) : null}
            <Badge variant="secondary">{Brand}</Badge>
          </div>
        </div>
        <CardContent className="space-y-2 py-4">
          <h3 className="font-medium leading-tight">{Name}</h3>
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">{Brand}</p>
            <p className="font-semibold">{Price}</p>
          </div>
          <Button
            variant="hero"
            className="w-full"
            onClick={() => toast.success(`${Name} added to cart`)}
            aria-label={`Add ${Name} to cart`}
          >
            Add to cart
          </Button>
        </CardContent>
      </Card>
    </article>
  );
};

export default ProductCard;
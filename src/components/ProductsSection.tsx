import { motion } from "framer-motion";
import { ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import imgBloodPressure from "@/assets/product-blood-pressure.jpg";
import imgStethoscope from "@/assets/product-stethoscope.jpg";
import imgOximeter from "@/assets/product-oximeter.jpg";
import imgSurgical from "@/assets/product-surgical.jpg";

const products = [
  {
    name: "Digital Blood Pressure Monitor",
    category: "Monitoring",
    price: "$189.00",
    rating: 4.9,
    certified: true,
    badge: "Best Seller",
    image: imgBloodPressure,
  },
  {
    name: "Professional Stethoscope Pro",
    category: "Diagnostics",
    price: "$245.00",
    rating: 4.8,
    certified: true,
    badge: "New",
    image: imgStethoscope,
  },
  {
    name: "Pulse Oximeter HD",
    category: "Monitoring",
    price: "$79.00",
    rating: 4.7,
    certified: true,
    badge: null,
    image: imgOximeter,
  },
  {
    name: "Surgical Instrument Set",
    category: "Surgical",
    price: "$1,249.00",
    rating: 5.0,
    certified: true,
    badge: "Premium",
    image: imgSurgical,
  },
];

const ProductsSection = () => (
  <section id="products" className="bg-background py-20">
    <div className="container">
      <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Featured Equipment
          </h2>
          <p className="mt-2 text-muted-foreground">
            Curated selection of our most trusted medical devices.
          </p>
        </div>
        <Button variant="outline">View All Products</Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all hover:shadow-medical"
          >
            <div className="relative h-48 overflow-hidden bg-muted">
              <img
                src={p.image}
                alt={p.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              {p.badge && (
                <Badge className="absolute left-3 top-3 bg-primary text-primary-foreground">
                  {p.badge}
                </Badge>
              )}
            </div>
            <div className="flex flex-1 flex-col p-5">
              <p className="text-xs font-medium text-muted-foreground">{p.category}</p>
              <h3 className="mt-1 font-semibold text-foreground font-sans">{p.name}</h3>
              <div className="mt-2 flex items-center gap-1">
                <Star className="h-4 w-4 fill-current text-accent" />
                <span className="text-sm font-medium text-foreground">{p.rating}</span>
              </div>
              {p.certified && (
                <div className="mt-2 flex items-center gap-1 text-xs text-trust">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Certified
                </div>
              )}
              <div className="mt-auto flex items-center justify-between pt-4">
                <span className="text-lg font-bold text-foreground">{p.price}</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;

import { motion } from "framer-motion";
import { Stethoscope, Activity, Syringe, HeartPulse, Microscope, Pill } from "lucide-react";

const categories = [
  { icon: Stethoscope, name: "Diagnostics", count: 245 },
  { icon: Activity, name: "Monitoring", count: 189 },
  { icon: Syringe, name: "Surgical", count: 312 },
  { icon: HeartPulse, name: "Cardiology", count: 156 },
  { icon: Microscope, name: "Laboratory", count: 278 },
  { icon: Pill, name: "Pharmacy", count: 423 },
];

const CategoriesSection = () => (
  <section id="categories" className="bg-surface py-20">
    <div className="container">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          Equipment Categories
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Browse our comprehensive range of certified medical equipment across
          every specialty.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group cursor-pointer rounded-xl border border-border bg-card p-6 shadow-card transition-all hover:shadow-medical hover:border-primary/30"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-highlight text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <cat.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-foreground font-sans">{cat.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{cat.count} products available</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CategoriesSection;

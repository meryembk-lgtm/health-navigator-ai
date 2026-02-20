import { motion } from "framer-motion";
import { ShieldCheck, Award, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-medical.jpg";

const badges = [
  { icon: ShieldCheck, label: "FDA Certified" },
  { icon: Award, label: "ISO 13485" },
  { icon: Truck, label: "Global Shipping" },
];

const HeroSection = () => (
  <section className="relative overflow-hidden bg-card">
    <div className="container grid min-h-[600px] items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col gap-6"
      >
        <div className="flex items-center gap-2 rounded-full bg-highlight px-4 py-1.5 text-xs font-semibold text-primary w-fit">
          <ShieldCheck className="h-4 w-4" />
          Trusted by 5,000+ Healthcare Professionals
        </div>
        <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
          Certified Medical Equipment You Can{" "}
          <span className="text-gradient-primary">Trust</span>
        </h1>
        <p className="max-w-lg text-lg text-muted-foreground">
          Premium healthcare supplies with verified certifications, AI-powered
          recommendations, and GDPR-compliant data handling. Built for medical
          professionals who demand excellence.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button size="lg">Browse Equipment</Button>
          <Button size="lg" variant="outline">
            AI Recommendations
          </Button>
        </div>
        <div className="mt-4 flex flex-wrap gap-6">
          {badges.map((b) => (
            <div key={b.label} className="flex items-center gap-2 text-sm text-muted-foreground">
              <b.icon className="h-5 w-5 text-trust" />
              {b.label}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative hidden lg:block"
      >
        <div className="overflow-hidden rounded-2xl shadow-medical">
          <img
            src={heroImage}
            alt="Professional medical equipment including stethoscope and monitoring devices"
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>
        <div className="absolute -bottom-4 -left-4 rounded-xl bg-card p-4 shadow-card">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-trust">
              <ShieldCheck className="h-5 w-5 text-trust-foreground" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">100% Verified</p>
              <p className="text-xs text-muted-foreground">All products certified</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;

import { motion } from "framer-motion";
import { Shield, Lock, FileCheck, Users } from "lucide-react";

const stats = [
  { icon: Shield, value: "100%", label: "Certified Products" },
  { icon: Lock, value: "GDPR", label: "Fully Compliant" },
  { icon: FileCheck, value: "50+", label: "Certifications" },
  { icon: Users, value: "5,000+", label: "Healthcare Pros" },
];

const TrustSection = () => (
  <section id="about" className="bg-background py-20">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl bg-gradient-hero p-10 text-primary-foreground md:p-16"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Your Trust Is Our Priority
          </h2>
          <p className="mt-4 text-primary-foreground/80">
            Every product on MediTrust is verified, certified, and compliant
            with international healthcare standards. We maintain the highest
            levels of data privacy and medical ethics.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <s.icon className="mx-auto mb-3 h-8 w-8 text-primary-foreground/90" />
              <p className="text-3xl font-bold">{s.value}</p>
              <p className="mt-1 text-sm text-primary-foreground/70">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default TrustSection;

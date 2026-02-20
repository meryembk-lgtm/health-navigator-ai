import { motion } from "framer-motion";
import { Bot, Sparkles, Brain, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Brain,
    title: "Deep Neural Network",
    desc: "Our DNN analyzes your requirements, patient demographics, and usage patterns to recommend the most suitable equipment.",
  },
  {
    icon: Sparkles,
    title: "Smart Matching",
    desc: "Intelligent product matching based on specialty, budget, and compliance requirements — instantly.",
  },
  {
    icon: MessageSquare,
    title: "24/7 AI Chat Support",
    desc: "Get instant answers about products, certifications, compatibility, and best practices from our AI assistant.",
  },
];

const AISection = () => (
  <section id="ai-assistant" className="bg-surface py-20">
    <div className="container">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 flex items-center gap-2 text-primary">
            <Bot className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">AI-Powered</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Intelligent Product Recommendations
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our deep neural network system processes thousands of data points —
            certifications, specialty requirements, usage frequency, and peer
            reviews — to deliver personalized equipment suggestions.
          </p>
          <div className="mt-8 space-y-6">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-highlight text-primary">
                  <f.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground font-sans">{f.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <Button className="mt-8" size="lg">
            Try AI Assistant
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border border-border bg-card p-6 shadow-card"
        >
          <div className="mb-4 flex items-center gap-2 border-b border-border pb-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-hero">
              <Bot className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground">MediTrust AI</span>
            <span className="ml-auto flex items-center gap-1 text-xs text-trust">
              <span className="h-2 w-2 rounded-full bg-trust animate-pulse-gentle" />
              Online
            </span>
          </div>

          <div className="space-y-4">
            <div className="flex justify-end">
              <div className="max-w-[80%] rounded-xl rounded-br-sm bg-primary px-4 py-2.5 text-sm text-primary-foreground">
                I need a blood pressure monitor for a small clinic with 50+ daily patients.
              </div>
            </div>
            <div className="flex">
              <div className="max-w-[80%] rounded-xl rounded-bl-sm bg-muted px-4 py-2.5 text-sm text-foreground">
                Based on your requirements, I recommend the <strong>Digital BP Monitor Pro X200</strong> — it's FDA-certified, handles high-volume usage, and includes automated data logging for GDPR-compliant record keeping. Would you like to see compatibility accessories?
              </div>
            </div>
            <div className="flex justify-end">
              <div className="max-w-[80%] rounded-xl rounded-br-sm bg-primary px-4 py-2.5 text-sm text-primary-foreground">
                Yes, and what about warranty options?
              </div>
            </div>
            <div className="flex">
              <div className="max-w-[80%] rounded-xl rounded-bl-sm bg-muted px-4 py-2.5 text-sm text-foreground">
                The X200 comes with a 3-year manufacturer warranty. I can also add extended coverage for €49/year. All products include free shipping within the EU. 🏥
              </div>
            </div>
          </div>

          <div className="mt-4 flex gap-2 border-t border-border pt-4">
            <input
              type="text"
              placeholder="Ask about products, certifications..."
              className="flex-1 rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              readOnly
            />
            <Button size="sm">Send</Button>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AISection;

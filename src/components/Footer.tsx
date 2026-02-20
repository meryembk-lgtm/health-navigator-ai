import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer id="contact" className="border-t border-border bg-card">
    <div className="container py-12">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold text-foreground">
              Medi<span className="text-primary">Trust</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Premium certified medical equipment for healthcare professionals worldwide.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-foreground font-sans">Products</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-primary transition-colors">Diagnostics</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Monitoring</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Surgical</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Laboratory</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-foreground font-sans">Compliance</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-primary transition-colors">GDPR Policy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Privacy Notice</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Certifications</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-foreground font-sans">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              support@meditrust.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              +1 (800) 555-MEDI
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              Berlin, Germany
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-border pt-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} MediTrust. All rights reserved.
          </p>
          <div className="rounded-lg bg-muted p-3">
            <p className="text-xs text-muted-foreground leading-relaxed max-w-xl">
              <strong>Medical Disclaimer:</strong> This website sells medical equipment and does not
              provide medical advice, diagnosis, or treatment. Products are intended for use by
              qualified healthcare professionals only. Always consult a licensed medical
              practitioner. Your data is handled in compliance with GDPR regulations.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

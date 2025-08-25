export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">
              Mediliance (M) Sdn. Bhd.
            </h3>
            {/* <p className="text-muted-foreground text-sm leading-relaxed">
              Leading provider of comprehensive medical equipment solutions, 
              biomedical engineering services, and hospital project management in Malaysia and beyond.
            </p> */}
            <address className="not-italic text-sm text-muted-foreground leading-relaxed">
              No. 11-2, SRI MANJA SQUARE II,<br />
              JALAN PJS 3/59, TAMAN SRI MANJA,<br />
              46000 PETALING JAYA,<br />
              Selangor Darul Ehsan, Malaysia.
            </address>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>Tel:</strong> +603-7770 2012</li>
              <li><strong>Fax:</strong> +603-7770 4012</li>
              <li><strong>Email:</strong> admin@mediliance.my</li>
              <li><strong>Hours:</strong> Mon – Fri: 9:00 AM – 6:00 PM</li>
            </ul>
          </div>

          {/* Certifications & Compliance */}
          {/* <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Certifications & Compliance</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>GDPMD Certified</li>
              <li>Registered with Medical Device Authority (MDA)</li>
              <li>Certified Contractor with CIDB Malaysia</li>
              <li>Registered Supplier with Ministry of Finance (MOF)</li>
              <li>Recognized Bumiputera Status Company</li>
            </ul>
          </div> */}

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} Mediliance (M) Sdn. Bhd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

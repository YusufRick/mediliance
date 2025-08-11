export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Mediliance (M) Sdn. Bhd.</h3>
            <p className="text-muted-foreground text-sm">
              Leading provider of comprehensive medical equipment solutions, 
              biomedical engineering services, and hospital project management in Malaysia and beyond.
            </p>
            <p className="text-sm text-muted-foreground">
              No. 17, Jalan P/9B, Seksyen 13,<br />
              Kawasan Perindustrian Bangi,<br />
              43650 Bandar Baru Bangi,<br />
              Selangor Darul Ehsan, Malaysia.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Tel: +603-8920 2220</li>
              <li>Email: info@mediliance.com</li>
              <li>Support: support@mediliance.com</li>
              <li>Mon - Fri: 9:00 AM – 6:00 PM</li>
            </ul>
          </div>

          {/* Certifications & Compliance */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Certifications & Compliance</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>GDPMD Certified (Good Distribution Practice for Medical Devices)</li>
              <li>Registered with Medical Device Authority (MDA)</li>
              <li>Certified Contractor with CIDB Malaysia</li>
              <li>Registered Supplier with Ministry of Finance (MOF)</li>
              <li>Recognized Bumiputera Status Company</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} Mediliance (M) Sdn. Bhd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

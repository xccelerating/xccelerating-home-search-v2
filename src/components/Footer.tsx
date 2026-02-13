import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-xccel-charcoal text-white">
      {/* CTA Section */}
      <div className="bg-xccel-gold py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Protect Your Equity?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a complimentary strategy session. We'll analyze your situation, 
            explain your options, and create a plan that puts your interests first.
          </p>
          <a
            href="mailto:samantha@xcceleratingrealestate.com"
            className="inline-flex items-center bg-white text-xccel-gold font-bold px-8 py-4 rounded-lg hover:bg-xccel-light transition-colors"
          >
            Book Your Free Consultation
          </a>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-xccel-gold rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">X</span>
              </div>
              <div>
                <span className="text-white font-bold text-lg">Xccelerating</span>
                <span className="text-white/60 text-sm block -mt-1">Real Estate</span>
              </div>
            </div>
            <p className="text-white/70 max-w-md mb-6">
              Education-first real estate advisory for DMV homeowners. We don't push homes; 
              we protect futures. Keller Williams Preferred Properties.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-xccel-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-xccel-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-xccel-gold transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="#services" className="hover:text-xccel-gold transition-colors">Pre-Listing Advantage</a></li>
              <li><a href="#services" className="hover:text-xccel-gold transition-colors">From Steal to Sold</a></li>
              <li><a href="#services" className="hover:text-xccel-gold transition-colors">Federal & Military Move</a></li>
              <li><a href="#" className="hover:text-xccel-gold transition-colors">Home Valuation</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-xccel-gold" />
                <span>(301) 555-0199</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-xccel-gold" />
                <span>samantha@xcceleratingrealestate.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 text-xccel-gold" />
                <span>Upper Marlboro, MD<br />Keller Williams Preferred Properties</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            © 2026 Xccelerating Real Estate. All rights reserved.
          </p>
          <p className="text-white/50 text-sm mt-2 md:mt-0">
            Licensed in Maryland, Virginia & Washington DC
          </p>
        </div>
      </div>
    </footer>
  )
}
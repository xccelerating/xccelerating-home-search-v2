import { RefreshCw, Building2, Shield, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Building2,
    title: 'Pre-Listing Advantage',
    subtitle: 'P.R.E-L.I.S.T. System',
    description: 'Strategic pre-market preparation that protects your equity and eliminates surprises. Our 30/60/90-day plan ensures you launch with confidence.',
    features: ['Equity-to-Lifestyle Calculator', 'Inspection Armor Prep', 'Stress-Less Staging Kit'],
    cta: 'Learn More',
    href: '#contact',
  },
  {
    icon: RefreshCw,
    title: 'From Steal to Sold',
    subtitle: 'Expired Listing Recovery',
    description: 'Your second chance at a successful sale. Our forensic analysis identifies what went wrong, and our redemption strategy gets you sold.',
    features: ['91% Success Rate', 'S.T.E.A.L. Framework', '4.3% Higher Sale Price'],
    cta: 'Start Your Redemption',
    href: '#contact',
  },
  {
    icon: Shield,
    title: 'Federal & Military Move',
    subtitle: 'PCS & Relocation Support',
    description: 'Specialized guidance for federal employees and military families. We understand GS schedules, PCS timelines, and the unique pressures you face.',
    features: ['PCS Timeline Coordination', 'GS Schedule Understanding', 'Remote Selling Support'],
    cta: 'Plan Your Move',
    href: '#contact',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-xccel-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xccel-gold font-semibold text-sm uppercase tracking-wider">Services</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-xccel-charcoal">
            Education-First Advisory
          </h2>
          <p className="mt-4 text-lg text-xccel-gray">
            Every service is built on one principle: you deserve to understand your options 
            before making decisions that affect your financial future.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-xccel-gold/10 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-xccel-gold" />
              </div>
              
              <span className="text-xccel-gold font-semibold text-sm">{service.subtitle}</span>
              <h3 className="mt-2 text-xl font-bold text-xccel-charcoal">{service.title}</h3>
              <p className="mt-4 text-xccel-gray">{service.description}</p>
              
              <ul className="mt-6 space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-xccel-gray">
                    <svg className="w-4 h-4 text-xccel-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a
                href={service.href}
                className="mt-8 inline-flex items-center text-xccel-charcoal font-semibold hover:text-xccel-gold transition-colors"
              >
                {service.cta}
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
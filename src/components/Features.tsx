import { ClipboardList, Calculator, Wrench, Rocket, Mail, FileCheck, Key } from 'lucide-react'

const prelistSteps = [
  {
    icon: ClipboardList,
    letter: 'P',
    title: 'Prepare Plan',
    description: 'Strategic 30/60/90-day roadmap tailored to your timeline and goals',
  },
  {
    icon: Calculator,
    letter: 'R',
    title: 'Run Numbers',
    description: 'Comprehensive equity analysis and net proceeds calculation',
  },
  {
    icon: Wrench,
    letter: 'E',
    title: 'Equip Property',
    description: 'Inspection Armor Prep and Stress-Less Staging guidance',
  },
  {
    icon: Rocket,
    letter: 'L',
    title: 'Launch With Intention',
    description: 'Strategic market positioning for maximum visibility',
  },
  {
    icon: Mail,
    letter: 'I',
    title: 'Invite Offers',
    description: 'Managed showings and qualified buyer engagement',
  },
  {
    icon: FileCheck,
    letter: 'S',
    title: 'Secure Terms',
    description: 'Offer Defense Playbook and negotiation strategy',
  },
  {
    icon: Key,
    letter: 'T',
    title: 'Transfer With Dignity',
    description: 'Smooth closing coordination and transition support',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xccel-gold font-semibold text-sm uppercase tracking-wider">Our Methodology</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-xccel-charcoal">
            The Pre-Listing Advantage
          </h2>
          <p className="mt-4 text-lg text-xccel-gray">
            Our proprietary P.R.E-L.I.S.T. system transforms home selling from a gamble into a strategy. 
            Plan before photos. Net before noise.
          </p>
        </div>

        {/* P.R.E-L.I.S.T. Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {prelistSteps.map((step) => (
            <div
              key={step.letter}
              className="group p-6 bg-xccel-light rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-xccel-gold rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{step.letter}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xccel-charcoal text-lg group-hover:text-xccel-gold transition-colors">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xccel-gray text-sm">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center text-xccel-gold font-semibold hover:text-xccel-gold-dark transition-colors"
          >
            Get Your Custom P.R.E-L.I.S.T. Plan
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
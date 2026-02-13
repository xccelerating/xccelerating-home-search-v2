import { ArrowRight, Shield, Home, TrendingUp } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-xccel-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-xccel-gold/10 rounded-full">
              <Shield className="w-4 h-4 text-xccel-gold mr-2" />
              <span className="text-xccel-charcoal font-medium text-sm">25+ Years Protecting Homeowner Equity</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-xccel-charcoal leading-tight">
              Strategic Seller Advisory for{' '}
              <span className="text-xccel-gold">DMV Homeowners</span>
            </h1>
            
            <p className="text-xl text-xccel-gray max-w-lg">
              We don't push homes; we protect futures. Education-first guidance for federal employees, military families, and homeowners navigating complex transitions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-xccel-gold hover:bg-xccel-gold-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors group"
              >
                Book Your Strategy Session
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center border-2 border-xccel-charcoal text-xccel-charcoal hover:bg-xccel-charcoal hover:text-white font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                Explore Our Services
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4 text-sm text-xccel-gray">
              <div className="flex items-center">
                <Home className="w-4 h-4 mr-2 text-xccel-gold" />
                <span>400+ Families Served</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 mr-2 text-xccel-gold" />
                <span>91% Success Rate</span>
              </div>
            </div>
          </div>

          {/* Visual Placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-xccel-gold/20 to-xccel-gold/5 rounded-2xl flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 bg-xccel-gold rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Home className="w-12 h-12 text-white" />
                </div>
                <p className="text-xccel-charcoal font-semibold text-lg">Your Home's True Value</p>
                <p className="text-xccel-gray mt-2">Discover what your property is really worth in today's market</p>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-xccel-gold/10 rounded-full" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-xccel-gold/20 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
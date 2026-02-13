import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "Samantha didn't just list our home—she educated us through every decision. We understood our equity position, knew exactly what to expect, and closed 12% above our target price.",
    author: 'Michael R.',
    role: 'Federal Employee, GS-14',
    location: 'Upper Marlboro, MD',
  },
  {
    quote: "After our listing expired with another agent, we thought we'd never sell. The 'From Steal to Sold' program changed everything. They found issues we never knew existed and got us sold in 45 days.",
    author: 'Lisa T.',
    role: 'Military Spouse',
    location: 'Fort Washington, MD',
  },
  {
    quote: "As a first-time seller, I was terrified of making mistakes. The P.R.E-L.I.S.T. process gave me confidence. Every step was planned, every number was explained. Best decision we ever made.",
    author: 'David K.',
    role: 'Healthcare Administrator',
    location: 'Bowie, MD',
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xccel-gold font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-xccel-charcoal">
            Protected Futures, Real Results
          </h2>
          <p className="mt-4 text-lg text-xccel-gray">
            Hear from homeowners who discovered what it means to have a true advocate in their corner.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-xccel-light rounded-xl p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8 w-8 h-8 bg-xccel-gold rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-white" />
              </div>
              
              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-xccel-gold text-xccel-gold" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-xccel-charcoal mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              {/* Author */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-xccel-charcoal">{testimonial.author}</p>
                <p className="text-sm text-xccel-gray">{testimonial.role}</p>
                <p className="text-sm text-xccel-gold">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
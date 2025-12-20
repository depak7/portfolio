import { Quote as QuoteIcon } from 'lucide-react'

const Quote = () => {
  return (
    <section className="pt-4 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Separator */}
        <div className="border-t border-gray-800 mb-12"></div>
        
        {/* Quote Section */}
        <div className="relative flex items-center justify-center py-8">
          {/* Quote icon as background - subtle and elegant */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <QuoteIcon size={120} className="text-gray-400" />
          </div>
          
          {/* Quote text - refined typography */}
          <div className="relative z-10 text-center max-w-2xl">
            <p className="text-lg md:text-xl font-light text-gray-400 italic leading-relaxed">
              "Against the odds, I bet on Myself"
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Quote

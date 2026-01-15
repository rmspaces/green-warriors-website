import { Button } from '@/app/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToDonate = () => {
    const element = document.getElementById('donate');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
              Eco Sustainability Foundation
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Green Warriors Program
            </h1>
            <p className="text-xl md:text-2xl text-emerald-700">
              Pathway to Life-Changing Opportunities
            </p>
            <p className="text-lg text-gray-600">
              A flagship workforce-to-livelihood pipeline transforming lives from underserved communities into skilled hospitality and sustainability professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToDonate}
                className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-6 text-lg"
              >
                Support a Green Warrior
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  const element = document.getElementById('about');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-emerald-700 text-emerald-700 hover:bg-emerald-50 px-8 py-6 text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-gray-600 font-medium">Hero Image</p>
                <p className="text-sm text-gray-500 mt-2">Upload: Green Warriors in training<br/>or community group photo</p>
                <p className="text-xs text-gray-400 mt-1">Recommended: 1080x1080px</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
              <p className="text-4xl font-bold text-emerald-700">6 months</p>
              <p className="text-gray-600">immersive training program</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
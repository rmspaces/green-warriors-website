import { ArrowRight, CheckCircle, Users, TrendingUp, Heart } from 'lucide-react';
import { Card } from '@/app/components/ui/card';

export function ImpactSection() {
  const pathway = [
    'Successful completion of 6-month program',
    'Endorsed by supervisors and department heads',
    'Approved by Human Resources and Management',
    'Direct pathway to employment with EcoHotels Inc.'
  ];

  const impacts = [
    {
      icon: Users,
      stat: '4-6',
      label: 'Family Members',
      description: 'supported by each graduate'
    },
    {
      icon: TrendingUp,
      stat: '100%',
      label: 'Employability',
      description: 'long-term career growth'
    },
    {
      icon: Heart,
      stat: 'Community',
      label: 'Ambassadors',
      description: 'sustainability leaders'
    }
  ];

  return (
    <section id="impact" className="py-16 md:py-24 bg-gradient-to-br from-[#F5F7ED] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* From Training to Employment */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              From Training to Employment
            </h2>
            <div className="w-24 h-1 bg-[#6B7A2F] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Upon successful completion, graduates transition into meaningful employment.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 mb-8">
              {pathway.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#6B7A2F] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <Card className="flex-1 p-6">
                    <p className="text-gray-700 text-lg">{step}</p>
                  </Card>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#6B7A2F] to-[#4A5420] rounded-2xl p-8 text-white text-center">
              <p className="text-xl mb-4">
                Foundation allowances are replaced by full company wages under Philippine labor law.
              </p>
              <p className="text-2xl font-bold">
                This is not charity — it is career creation.
              </p>
            </div>
          </div>
        </div>

        {/* Impact That Multiplies */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Impact That Multiplies
            </h2>
            <div className="w-24 h-1 bg-[#6B7A2F] mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {impacts.map((impact, index) => {
              const Icon = impact.icon;
              return (
                <Card key={index} className="p-8 text-center hover:shadow-xl transition-all hover:-translate-y-2">
                  <div className="w-20 h-20 rounded-full bg-[#E8EDCF] flex items-center justify-center mx-auto mb-6">
                    <Icon className="text-[#6B7A2F]" size={36} />
                  </div>
                  <p className="text-4xl font-bold text-[#6B7A2F] mb-2">{impact.stat}</p>
                  <p className="font-bold text-xl text-gray-900 mb-2">{impact.label}</p>
                  <p className="text-gray-600">{impact.description}</p>
                </Card>
              );
            })}
          </div>

          <div className="relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl shadow-xl w-full bg-gray-100 border-2 border-dashed border-gray-300 aspect-video flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-[#E8EDCF] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#6B7A2F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 font-medium">Impact Section Image</p>
                  <p className="text-sm text-gray-500 mt-2">Upload: Community or family photo<br/>showing generational impact</p>
                  <p className="text-xs text-gray-400 mt-1">Recommended: 1920x1080px</p>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">
                  Generational Change
                </h3>
                <p className="text-xl text-gray-700">
                  Your support creates <span className="font-bold text-[#6B7A2F]">generational change</span> — not just short-term aid.
                </p>
                <p className="text-lg text-gray-600">
                  Each Green Warrior supports 4-6 family members and becomes a beacon of hope in their community, inspiring others and demonstrating what's possible through dedication and opportunity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
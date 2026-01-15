import { CheckCircle, LineChart, Award, Target, FileCheck, TrendingUp } from 'lucide-react';
import { Card } from '@/app/components/ui/card';

export function WhyDonors() {
  const reasons = [
    {
      icon: Target,
      title: 'Measurable workforce outcomes',
      description: 'Track every graduate from training to employment with complete documentation'
    },
    {
      icon: TrendingUp,
      title: 'Direct poverty alleviation',
      description: 'Each donation lifts an entire family out of poverty through sustainable employment'
    },
    {
      icon: Award,
      title: 'ESG-aligned impact',
      description: 'Support environmental, social, and governance goals with tangible results'
    },
    {
      icon: LineChart,
      title: 'Closed-loop pipeline',
      description: 'Complete training-to-employment pathway with guaranteed outcomes'
    },
    {
      icon: FileCheck,
      title: 'Transparent tracking',
      description: 'Full accountability with performance metrics and progress reports'
    },
    {
      icon: CheckCircle,
      title: 'Proven model',
      description: 'Partnership with established hospitality enterprise ensures job placement'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Donors Partner With Us
          </h2>
          <div className="w-24 h-1 bg-emerald-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Donors choose the Green Warriors Program because it delivers real, measurable impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card key={index} className="p-8 hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                  <Icon className="text-emerald-700" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-bold mb-6">
              This is one of the rare programs where every dollar creates both social impact and real economic mobility.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-white/10 rounded-lg p-6">
                <p className="text-4xl font-bold text-emerald-400 mb-2">100%</p>
                <p className="text-lg">Employment Rate for Graduates</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <p className="text-4xl font-bold text-emerald-400 mb-2">6 mos</p>
                <p className="text-lg">From Unemployment to Career</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

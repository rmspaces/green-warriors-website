import { Card } from '@/app/components/ui/card';
import { GraduationCap, Target, Award, Clock } from 'lucide-react';

export function ProgramDetails() {
  const trainings = [
    'Hospitality service standards',
    'Housekeeping and operations',
    'Food safety and hygiene',
    'Guest relations and customer care',
    'Workplace ethics and discipline',
    'Sustainability in daily operations',
    'Communication and teamwork',
    'Leadership and personal development'
  ];

  const standards = [
    { icon: Clock, label: '6 months', description: 'of full-time engagement' },
    { icon: Target, label: '1,152 hours', description: 'of work and training' },
    { icon: Award, label: '95% minimum', description: 'attendance required' },
    { icon: GraduationCap, label: 'Zero tolerance', description: 'for core-value violations' }
  ];

  const values = [
    'Honesty & Integrity',
    'Ownership (Malasakit)',
    'Teamwork',
    'Empathy & Initiative',
    'Leadership',
    'Service Excellence'
  ];

  return (
    <section id="program" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* What a Green Warrior Learns */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              What a Green Warrior Learns
            </h2>
            <div className="w-24 h-1 bg-[#6B7A2F] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each participant completes at least 12 structured trainings, all documented, supervised, and performance-tracked.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainings.map((training, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="flex items-start gap-3">
                  <span className="text-[#6B7A2F] font-bold text-xl">{index + 1}.</span>
                  <p className="text-gray-700">{training}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Standards */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Standards
            </h2>
            <div className="w-24 h-1 bg-[#6B7A2F] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Green Warriors are held to professional standards equal to any corporate training program.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {standards.map((standard, index) => {
              const Icon = standard.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-[#F5F7ED] to-white">
                  <div className="w-16 h-16 rounded-full bg-[#6B7A2F] flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={28} />
                  </div>
                  <p className="text-2xl font-bold text-gray-900 mb-2">{standard.label}</p>
                  <p className="text-gray-600">{standard.description}</p>
                </Card>
              );
            })}
          </div>

          <div className="mt-8 bg-gray-900 rounded-2xl p-8 text-white text-center">
            <p className="text-xl">
              This ensures donors and employers receive <span className="font-bold text-[#A8B869]">high-quality, dependable graduates.</span>
            </p>
          </div>
        </div>

        {/* Values */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Values at the Core
            </h2>
            <div className="w-24 h-1 bg-[#6B7A2F] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We do not only train skills — we build character.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-[#6B7A2F] to-[#4A5420] text-white hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <p className="font-semibold text-lg">{value}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="bg-[#F5F7ED] border-l-4 border-[#6B7A2F] p-6 rounded-r-lg">
            <p className="text-lg text-gray-800">
              These values make our graduates <span className="font-bold text-[#6B7A2F]">trusted employees and community role models.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
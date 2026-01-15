import { Users, Heart, GraduationCap, Briefcase } from 'lucide-react';
import { Card } from '@/app/components/ui/card';

export function AboutSection() {
  const beneficiaries = [
    'Out-of-school youth',
    'Single parents and unemployed adults',
    'Individuals from geographically isolated and disadvantaged communities',
    'Those with no prior work experience but high motivation to learn'
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Who We Are
          </h2>
          <div className="w-24 h-1 bg-[#6B7A2F] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              The <span className="font-bold text-[#6B7A2F]">Green Warriors Program (GWP)</span> is the Eco Sustainability Foundation's flagship initiative.
            </p>
            <p className="text-lg text-gray-700">
              We transform individuals from underserved Filipino communities into skilled hospitality and sustainability professionals through our 6-month immersive training program.
            </p>
            <div className="bg-[#F5F7ED] border-l-4 border-[#6B7A2F] p-6 rounded-r-lg">
              <p className="text-lg font-semibold text-gray-900">
                We do not select based on diplomas.
              </p>
              <p className="text-lg font-semibold text-[#6B7A2F]">
                We select based on character, grit, and potential.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl shadow-xl w-full bg-gray-100 border-2 border-dashed border-gray-300 aspect-video flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-[#E8EDCF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#6B7A2F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-gray-600 font-medium">About Section Image</p>
                <p className="text-sm text-gray-500 mt-2">Upload: Training session photo<br/>or classroom/workshop setting</p>
                <p className="text-xs text-gray-400 mt-1">Recommended: 1920x1080px</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Our Beneficiaries Include:
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficiaries.map((beneficiary, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#E8EDCF] flex items-center justify-center flex-shrink-0">
                    {index === 0 && <GraduationCap className="text-[#6B7A2F]" size={20} />}
                    {index === 1 && <Heart className="text-[#6B7A2F]" size={20} />}
                    {index === 2 && <Users className="text-[#6B7A2F]" size={20} />}
                    {index === 3 && <Briefcase className="text-[#6B7A2F]" size={20} />}
                  </div>
                  <p className="text-gray-700">{beneficiary}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-br from-[#6B7A2F] to-[#4A5420] rounded-2xl p-8 md:p-12 text-white text-center">
          <p className="text-2xl md:text-3xl font-bold">
            Every Green Warrior represents not just one life changed — but an entire family lifted.
          </p>
        </div>
      </div>
    </section>
  );
}
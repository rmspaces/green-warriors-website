import { AlertCircle, Target, CheckCircle } from 'lucide-react';
import { Card } from '@/app/components/ui/card';

export function ProblemSolution() {
  const problems = [
    'Formal education',
    'Work experience',
    'Access to training',
    'Pathways into dignified employment'
  ];

  const solutions = [
    'Classroom and on-the-job training',
    'Daily meals and living allowance',
    'Technical, life, and leadership skills',
    'Values-based coaching',
    'Sustainability and hospitality certification'
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Problem */}
          <Card className="p-8 md:p-10 border-t-4 border-red-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <AlertCircle className="text-red-600" size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                The Problem We Address
              </h2>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              Across the Philippines, millions of capable people are locked out of opportunity because they lack:
            </p>
            <ul className="space-y-3 mb-6">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">✗</span>
                  <span className="text-gray-700">{problem}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-700 mb-4">
              Yet the hospitality and sustainability sectors urgently need skilled, reliable, values-driven workers.
            </p>
            <div className="bg-emerald-50 p-4 rounded-lg">
              <p className="font-bold text-emerald-800">
                The Green Warriors Program bridges this gap.
              </p>
            </div>
          </Card>

          {/* Solution */}
          <Card className="p-8 md:p-10 border-t-4 border-emerald-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                <Target className="text-emerald-700" size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Our Solution
              </h2>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              We provide a <span className="font-bold text-emerald-700">6-month immersive training program</span> covering comprehensive hospitality service standards and sustainability practices.
            </p>
            <p className="text-lg font-semibold text-gray-900 mb-4">
              Participants receive:
            </p>
            <ul className="space-y-3 mb-6">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{solution}</span>
                </li>
              ))}
            </ul>
            <div className="bg-gradient-to-br from-emerald-700 to-emerald-900 p-4 rounded-lg text-white">
              <p className="font-bold">
                Graduates are then endorsed for employment with EcoHotels Inc., our Foundation's main donor and partner enterprise.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
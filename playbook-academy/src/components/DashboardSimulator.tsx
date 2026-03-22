import { useState } from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const MONTHLY_DATA = [
  { month: 'Month 1', quizCompletions: 340, toolAdoption: 12, helplineClicks: 45, contentHubVisits: 890 },
  { month: 'Month 2', quizCompletions: 520, toolAdoption: 18, helplineClicks: 52, contentHubVisits: 1240 },
  { month: 'Month 3', quizCompletions: 410, toolAdoption: 24, helplineClicks: 48, contentHubVisits: 1580 },
  { month: 'Month 4', quizCompletions: 680, toolAdoption: 31, helplineClicks: 61, contentHubVisits: 2100 },
  { month: 'Month 5', quizCompletions: 590, toolAdoption: 35, helplineClicks: 55, contentHubVisits: 2340 },
  { month: 'Month 6', quizCompletions: 720, toolAdoption: 42, helplineClicks: 68, contentHubVisits: 2890 },
];

interface Question {
  id: number;
  question: string;
  options: { text: string; correct: boolean }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    question: 'Quiz completions dropped 21% from Month 2 to Month 3. What\'s the most likely cause and what would you do?',
    options: [
      { text: 'Players aren\'t interested — cancel the quiz', correct: false },
      { text: 'Month 2 had a campaign push (Game IQ launch). Month 3 is the natural regression. Run a new campaign or refresh quiz content.', correct: true },
      { text: 'The quiz is too hard — make it easier', correct: false },
    ],
  },
  {
    id: 2,
    question: 'Tool adoption went from 12% to 42% over 6 months. Is this good?',
    options: [
      { text: 'No — it should be 100%', correct: false },
      { text: 'Yes — steady growth from 12% to 42% shows tools are being discovered and used. The upward trend matters more than the absolute number.', correct: true },
      { text: 'Can\'t tell without more data', correct: false },
    ],
  },
  {
    id: 3,
    question: 'Helpline clicks fluctuate between 45-68 per month. What does this mean?',
    options: [
      { text: 'The helpline placement is working — consistent visibility means players can find it when needed', correct: true },
      { text: 'Too many people are clicking — reduce visibility', correct: false },
      { text: 'Not enough clicks — make the helpline more prominent', correct: false },
    ],
  },
  {
    id: 4,
    question: 'Content hub visits are growing steadily. What should you do next?',
    options: [
      { text: 'Nothing — it\'s working', correct: false },
      { text: 'Add segment-specific content and track which articles drive the most engagement to inform your content calendar', correct: true },
      { text: 'Redirect all traffic to the quiz instead', correct: false },
    ],
  },
];

const TEAL = '#0D9488';
const ORANGE = '#F97316';

export default function DashboardSimulator() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);
  const [showQuiz, setShowQuiz] = useState(false);

  const isComplete = results.length === QUESTIONS.length;
  const score = results.filter(Boolean).length;

  const handleSelect = (idx: number) => {
    if (submitted) return;
    setSelectedOption(idx);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    const isCorrect = QUESTIONS[currentQuestion].options[selectedOption].correct;
    setResults((prev) => [...prev, isCorrect]);
    setSubmitted(true);
  };

  const handleNext = () => {
    setSelectedOption(null);
    setSubmitted(false);
    setCurrentQuestion((prev) => prev + 1);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setSubmitted(false);
    setResults([]);
    setShowQuiz(false);
  };

  const getFeedback = () => {
    if (score === 4) return 'You read dashboards like a strategist, not a reporter. Every metric had context, and you knew what to do next.';
    if (score >= 3) return 'Strong read. You understand that metrics need context and trends matter more than snapshots. Review the one you missed.';
    if (score >= 2) return 'Decent foundation. The key lesson: numbers without context are useless. Review the explanations for the ones you missed.';
    return 'Dashboard interpretation takes practice. Re-read the charts and try again — focus on trends and context, not isolated numbers.';
  };

  return (
    <div className="my-10 rounded-xl border border-n100 bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-navy px-5 py-4">
        <span className="text-xs font-heading font-bold uppercase tracking-wider text-teal">
          Interactive Exercise
        </span>
        <h3 className="text-white font-heading font-bold text-lg mt-0.5">Dashboard Simulator</h3>
      </div>

      <div className="p-5 sm:p-6">
        {/* Dashboard charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Chart 1: Quiz completions */}
          <div className="bg-n50 rounded-lg p-4 border border-n100">
            <h4 className="text-sm font-heading font-semibold text-navy mb-3">Quiz Completions</h4>
            <ResponsiveContainer width="100%" height={180}>
              <LineChart data={MONTHLY_DATA}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#6b7280' }} />
                <YAxis tick={{ fontSize: 10, fill: '#6b7280' }} />
                <Tooltip
                  contentStyle={{ fontSize: 12, borderRadius: 8, border: '1px solid #e5e7eb' }}
                />
                <Line
                  type="monotone"
                  dataKey="quizCompletions"
                  stroke={TEAL}
                  strokeWidth={2.5}
                  dot={{ fill: TEAL, r: 4 }}
                  activeDot={{ r: 6 }}
                  name="Completions"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Chart 2: Tool adoption */}
          <div className="bg-n50 rounded-lg p-4 border border-n100">
            <h4 className="text-sm font-heading font-semibold text-navy mb-3">Tool Adoption Rate (%)</h4>
            <ResponsiveContainer width="100%" height={180}>
              <LineChart data={MONTHLY_DATA}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#6b7280' }} />
                <YAxis tick={{ fontSize: 10, fill: '#6b7280' }} unit="%" />
                <Tooltip
                  contentStyle={{ fontSize: 12, borderRadius: 8, border: '1px solid #e5e7eb' }}
                  formatter={(value: number) => [`${value}%`, 'Adoption']}
                />
                <Line
                  type="monotone"
                  dataKey="toolAdoption"
                  stroke={TEAL}
                  strokeWidth={2.5}
                  dot={{ fill: TEAL, r: 4 }}
                  activeDot={{ r: 6 }}
                  name="Adoption %"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Chart 3: Helpline clicks */}
          <div className="bg-n50 rounded-lg p-4 border border-n100">
            <h4 className="text-sm font-heading font-semibold text-navy mb-3">Helpline Clicks</h4>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={MONTHLY_DATA}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#6b7280' }} />
                <YAxis tick={{ fontSize: 10, fill: '#6b7280' }} />
                <Tooltip
                  contentStyle={{ fontSize: 12, borderRadius: 8, border: '1px solid #e5e7eb' }}
                />
                <Bar
                  dataKey="helplineClicks"
                  fill={ORANGE}
                  radius={[4, 4, 0, 0]}
                  name="Clicks"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Chart 4: Content hub visits */}
          <div className="bg-n50 rounded-lg p-4 border border-n100">
            <h4 className="text-sm font-heading font-semibold text-navy mb-3">Content Hub Visits</h4>
            <ResponsiveContainer width="100%" height={180}>
              <AreaChart data={MONTHLY_DATA}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#6b7280' }} />
                <YAxis tick={{ fontSize: 10, fill: '#6b7280' }} />
                <Tooltip
                  contentStyle={{ fontSize: 12, borderRadius: 8, border: '1px solid #e5e7eb' }}
                />
                <Area
                  type="monotone"
                  dataKey="contentHubVisits"
                  stroke={TEAL}
                  strokeWidth={2}
                  fill={TEAL}
                  fillOpacity={0.15}
                  name="Visits"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Interpretation questions */}
        {!showQuiz && !isComplete && (
          <div className="text-center">
            <p className="text-n700 text-sm mb-3">Study the dashboard above. When you're ready, answer 4 interpretation questions.</p>
            <button
              onClick={() => setShowQuiz(true)}
              className="px-5 py-2.5 bg-navy text-white text-sm font-heading font-semibold rounded-lg hover:bg-navy-light transition-colors"
            >
              Start interpretation
            </button>
          </div>
        )}

        {showQuiz && !isComplete && (
          <div className="border-t border-n100 pt-6">
            {/* Progress */}
            <div className="flex gap-1.5 mb-5">
              {QUESTIONS.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 flex-1 rounded-full transition-colors ${
                    i < results.length
                      ? results[i]
                        ? 'bg-success'
                        : 'bg-warning'
                      : i === currentQuestion
                        ? 'bg-navy'
                        : 'bg-n100'
                  }`}
                />
              ))}
            </div>

            <p className="text-xs font-heading text-n500 mb-2">
              Question {currentQuestion + 1} of {QUESTIONS.length}
            </p>

            {/* Question */}
            <div className="bg-n50 rounded-lg p-4 mb-5 border border-n100">
              <p className="text-n900 text-[0.95rem] leading-relaxed font-medium">
                {QUESTIONS[currentQuestion].question}
              </p>
            </div>

            {/* Options */}
            <div className="space-y-2.5 mb-5">
              {QUESTIONS[currentQuestion].options.map((opt, idx) => {
                let btnStyle = 'border-n100 bg-white hover:border-n300';
                let textStyle = 'text-n900';

                if (submitted) {
                  if (opt.correct) {
                    btnStyle = 'border-success bg-success/5';
                    textStyle = 'text-success';
                  } else if (idx === selectedOption && !opt.correct) {
                    btnStyle = 'border-warning bg-warning/5';
                    textStyle = 'text-warning';
                  } else {
                    btnStyle = 'border-n100 bg-white opacity-50';
                    textStyle = 'text-n500';
                  }
                } else if (idx === selectedOption) {
                  btnStyle = 'border-teal bg-teal/5';
                  textStyle = 'text-navy';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelect(idx)}
                    disabled={submitted}
                    className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all text-sm leading-relaxed ${btnStyle} ${textStyle} ${
                      submitted ? 'cursor-default' : 'cursor-pointer'
                    }`}
                  >
                    <span className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full border-2 flex items-center justify-center text-xs font-bold border-current">
                        {String.fromCharCode(97 + idx)}
                      </span>
                      <span>{opt.text}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Submit / Next */}
            <div className="flex justify-end">
              {!submitted ? (
                <button
                  onClick={handleSubmit}
                  disabled={selectedOption === null}
                  className="px-5 py-2 bg-navy text-white text-sm font-heading font-semibold rounded-lg hover:bg-navy-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Check answer
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="px-5 py-2 bg-navy text-white text-sm font-heading font-semibold rounded-lg hover:bg-navy-light transition-colors"
                >
                  {currentQuestion < QUESTIONS.length - 1 ? 'Next question' : 'See results'}
                </button>
              )}
            </div>
          </div>
        )}

        {/* Results */}
        {isComplete && (
          <div className="border-t border-n100 pt-6 text-center animate-fade-in">
            <div
              className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${
                score >= 3 ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'
              }`}
            >
              <span className="text-3xl font-heading font-bold">
                {score}/{QUESTIONS.length}
              </span>
            </div>
            <h4 className="text-xl font-heading font-bold text-navy mb-2">
              {score === 4 ? 'Perfect read.' : score >= 3 ? 'Strong analysis.' : score >= 2 ? 'Getting there.' : 'Keep practicing.'}
            </h4>
            <p className="text-n700 mb-6 max-w-lg mx-auto text-sm leading-relaxed">
              {getFeedback()}
            </p>
            <button
              onClick={handleRestart}
              className="px-6 py-3 bg-teal text-navy font-heading font-semibold rounded-lg hover:bg-teal-light transition-colors"
            >
              Try again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

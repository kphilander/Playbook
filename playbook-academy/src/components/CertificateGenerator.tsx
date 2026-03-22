import { useState, useEffect } from 'react';
import {
  getProgress,
  getLearnerProfile,
  MODULE_IDS,
  MODULE_TITLES,
  type ModuleProgress,
} from '../lib/progress';

const base = (import.meta.env.BASE_URL || '').replace(/\/$/, '');

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function CertificateGenerator() {
  const [progress, setProgress] = useState<Record<string, ModuleProgress>>({});
  const [name, setName] = useState('');
  const [nameConfirmed, setNameConfirmed] = useState(false);
  const [generating, setGenerating] = useState(false);

  useEffect(() => {
    const p = getProgress();
    setProgress(p);
    const profile = getLearnerProfile();
    if (profile.name) {
      setName(profile.name);
      setNameConfirmed(true);
    }
  }, []);

  const completedModules = MODULE_IDS.filter((id) => progress[id]?.completed);
  const allComplete = completedModules.length === 6;
  const completionDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // ---------------------------------------------------------------------------
  // PDF generation
  // ---------------------------------------------------------------------------

  const generatePDF = async () => {
    setGenerating(true);
    try {
      const { jsPDF } = await import('jspdf');
      const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
      const pageWidth = doc.internal.pageSize.getWidth(); // 297
      const pageHeight = doc.internal.pageSize.getHeight(); // 210
      const centerX = pageWidth / 2;

      // Navy header bar
      doc.setFillColor(27, 40, 56); // #1B2838
      doc.rect(0, 0, pageWidth, 38, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text('PLAYBOOK ACADEMY', centerX, 16, { align: 'center' });
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.text('Player Education Brand System', centerX, 26, { align: 'center' });

      // Teal accent line
      doc.setFillColor(0, 191, 179); // teal
      doc.rect(0, 38, pageWidth, 2, 'F');

      // Certificate of Completion
      let y = 56;
      doc.setTextColor(27, 40, 56);
      doc.setFontSize(28);
      doc.setFont('helvetica', 'bold');
      doc.text('Certificate of Completion', centerX, y, { align: 'center' });

      // Decorative line
      y += 8;
      doc.setDrawColor(0, 191, 179);
      doc.setLineWidth(0.5);
      doc.line(centerX - 40, y, centerX + 40, y);

      // Name in teal
      y += 16;
      doc.setTextColor(0, 150, 140);
      doc.setFontSize(24);
      doc.setFont('helvetica', 'bold');
      doc.text(name, centerX, y, { align: 'center' });

      // Body text
      y += 12;
      doc.setTextColor(80, 80, 80);
      doc.setFontSize(12);
      doc.setFont('helvetica', 'normal');
      doc.text('Has successfully completed all 6 modules of Playbook Academy', centerX, y, { align: 'center' });

      // Date
      y += 10;
      doc.setFontSize(10);
      doc.text(`Completed: ${completionDate}`, centerX, y, { align: 'center' });

      // Module scores table
      y += 14;
      doc.setFontSize(9);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(27, 40, 56);
      doc.text('Module', centerX - 50, y);
      doc.text('Score', centerX + 50, y, { align: 'right' });

      y += 2;
      doc.setDrawColor(200, 200, 200);
      doc.setLineWidth(0.3);
      doc.line(centerX - 55, y, centerX + 55, y);
      y += 5;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      for (const moduleId of MODULE_IDS) {
        const title = MODULE_TITLES[moduleId] || moduleId;
        const score = progress[moduleId]?.quizScore;
        const scoreText = score !== null && score !== undefined ? `${score}%` : '--';
        doc.setTextColor(60, 60, 60);
        doc.text(title, centerX - 50, y);
        doc.text(scoreText, centerX + 50, y, { align: 'right' });
        y += 6;
      }

      // Footer
      doc.setFillColor(27, 40, 56);
      doc.rect(0, pageHeight - 14, pageWidth, 14, 'F');
      doc.setTextColor(180, 180, 180);
      doc.setFontSize(8);
      doc.text('Playbook Academy — All rights reserved', centerX, pageHeight - 5, { align: 'center' });

      doc.save('playbook-certificate.pdf');
    } catch (err) {
      console.error('PDF generation failed:', err);
    } finally {
      setGenerating(false);
    }
  };

  // ---------------------------------------------------------------------------
  // Share on LinkedIn
  // ---------------------------------------------------------------------------

  const shareOnLinkedIn = () => {
    const text = encodeURIComponent(
      `I just completed all 6 modules of Playbook Academy — the open-source player education brand system for gambling operators. Learn how to deploy responsible gambling content that actually works: https://github.com/kphilander/Branding #PlaybookAcademy #ResponsibleGambling`
    );
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=https://github.com/kphilander/Branding&summary=${text}`, '_blank', 'noopener');
  };

  // ---------------------------------------------------------------------------
  // Not all modules complete — progress view
  // ---------------------------------------------------------------------------

  if (!allComplete) {
    return (
      <div className="rounded-xl border border-n100 bg-white shadow-sm overflow-hidden">
        <div className="bg-navy px-5 py-4">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-teal">
            Certificate
          </span>
          <h3 className="text-white font-heading font-bold text-lg mt-0.5">
            Complete all 6 modules to earn your certificate
          </h3>
        </div>

        <div className="p-5 sm:p-6">
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-heading font-semibold text-n700">
                Progress: {completedModules.length} of 6 modules
              </span>
              <span className="text-sm font-heading font-semibold text-teal">
                {Math.round((completedModules.length / 6) * 100)}%
              </span>
            </div>
            <div className="h-3 bg-n100 rounded-full overflow-hidden">
              <div
                className="h-full bg-teal rounded-full transition-all duration-500"
                style={{ width: `${(completedModules.length / 6) * 100}%` }}
              />
            </div>
          </div>

          <div className="space-y-2">
            {MODULE_IDS.map((id) => {
              const isComplete = progress[id]?.completed;
              const title = MODULE_TITLES[id] || id;
              return (
                <div
                  key={id}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg border ${
                    isComplete ? 'border-teal/20 bg-teal/5' : 'border-n100 bg-n50'
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                      isComplete ? 'bg-teal' : 'bg-n200'
                    }`}
                  >
                    {isComplete ? (
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span className="text-xs text-n500 font-heading font-bold">
                        {MODULE_IDS.indexOf(id) + 1}
                      </span>
                    )}
                  </div>
                  <span
                    className={`text-sm font-heading font-semibold ${
                      isComplete ? 'text-navy' : 'text-n500'
                    }`}
                  >
                    {title}
                  </span>
                  {isComplete && progress[id]?.quizScore !== null && progress[id]?.quizScore !== undefined && (
                    <span className="ml-auto text-xs font-heading font-semibold text-teal-dark">
                      {progress[id].quizScore}%
                    </span>
                  )}
                  {!isComplete && (
                    <a
                      href={`${base}/modules/${id}`}
                      className="ml-auto text-xs font-heading font-semibold text-navy hover:text-teal transition-colors"
                    >
                      Start &rarr;
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // Certificate view (all 6 complete)
  // ---------------------------------------------------------------------------

  return (
    <div className="space-y-6">
      {/* Name input if not set */}
      {!nameConfirmed && (
        <div className="rounded-xl border border-n100 bg-white shadow-sm p-5 sm:p-6">
          <h4 className="text-lg font-heading font-semibold text-navy mb-1">
            Almost there!
          </h4>
          <p className="text-sm text-n500 mb-4">
            Enter your name as it should appear on the certificate.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              className="flex-1 px-3 py-2.5 border border-n200 rounded-lg text-sm bg-white text-n900 focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 placeholder:text-n400"
            />
            <button
              onClick={() => {
                if (name.trim()) setNameConfirmed(true);
              }}
              disabled={!name.trim()}
              className="px-5 py-2.5 bg-navy text-white text-sm font-heading font-semibold rounded-lg hover:bg-navy-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Confirm
            </button>
          </div>
        </div>
      )}

      {/* Certificate display */}
      {nameConfirmed && (
        <div className="rounded-xl border border-n100 bg-white shadow-sm overflow-hidden">
          {/* Navy header */}
          <div className="bg-navy px-6 py-8 text-center">
            <p className="text-teal text-xs font-heading font-bold uppercase tracking-[0.2em]">
              Playbook Academy
            </p>
            <h2 className="text-white font-heading font-bold text-3xl mt-2">
              Certificate of Completion
            </h2>
          </div>

          {/* Teal accent bar */}
          <div className="h-1 bg-teal" />

          {/* Certificate body */}
          <div className="p-6 sm:p-10 text-center">
            <p className="text-n500 text-sm mb-2">This certifies that</p>
            <h3 className="text-3xl sm:text-4xl font-heading font-bold text-teal-dark mb-3">
              {name}
            </h3>
            <p className="text-n700 text-base mb-6 max-w-lg mx-auto">
              Has successfully completed all 6 modules of Playbook Academy
            </p>
            <p className="text-n500 text-sm mb-8">
              {completionDate}
            </p>

            {/* Module scores table */}
            <div className="max-w-md mx-auto text-left mb-8">
              <h4 className="text-xs font-heading font-semibold text-n500 uppercase tracking-wider mb-3 text-center">
                Module Scores
              </h4>
              <div className="border border-n100 rounded-lg overflow-hidden">
                {MODULE_IDS.map((id, i) => {
                  const title = MODULE_TITLES[id] || id;
                  const score = progress[id]?.quizScore;
                  return (
                    <div
                      key={id}
                      className={`flex items-center justify-between px-4 py-2.5 text-sm ${
                        i % 2 === 0 ? 'bg-white' : 'bg-n50'
                      }`}
                    >
                      <span className="font-heading font-semibold text-navy">{title}</span>
                      <span className="font-heading font-semibold text-teal-dark">
                        {score !== null && score !== undefined ? `${score}%` : '--'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              <button
                onClick={generatePDF}
                disabled={generating}
                className="px-6 py-3 bg-navy text-white text-sm font-heading font-semibold rounded-lg hover:bg-navy-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {generating ? (
                  <>
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Generating...
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download PDF
                  </>
                )}
              </button>

              <button
                onClick={shareOnLinkedIn}
                className="px-6 py-3 bg-[#0077B5] text-white text-sm font-heading font-semibold rounded-lg hover:bg-[#005F8D] transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Share on LinkedIn
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-n50 border-t border-n100 px-6 py-3 text-center">
            <p className="text-xs text-n500">
              Playbook Academy — All rights reserved
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

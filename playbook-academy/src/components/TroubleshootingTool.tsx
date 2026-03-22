import { useState } from 'react';

interface Symptom {
  id: string;
  label: string;
  cause: string;
  fix: string;
  revisitModule: string;
}

const SYMPTOMS: Symptom[] = [
  {
    id: 'low-quiz',
    label: 'Quiz completion rates are below 5%',
    cause:
      'The quiz is likely buried in the content hub with no traffic driver. Players who never find it can\'t complete it. This is a discoverability problem, not a content problem.',
    fix:
      'Move the quiz to a high-traffic touchpoint: onboarding flow, in-app card during Active Play, or a campaign push with social sharing hooks. Test placement before rewriting content.',
    revisitModule: 'Module 5 (Customer Journey) for quiz placement strategy and touchpoint mapping',
  },
  {
    id: 'low-deposit-limits',
    label: 'Players aren\'t using deposit limit tools',
    cause:
      'The limit prompt is either in the wrong place (buried in settings instead of the deposit flow), uses compliance language ("Set a responsible gambling limit"), or requires too many steps.',
    fix:
      'Move the prompt to the first deposit screen. Rewrite in Playbook voice: "Set your entertainment budget — you pick the number." Add 3 preset options ($50/$100/$200/week) so players can tap once instead of typing.',
    revisitModule: 'Module 5 (Customer Journey) for onboarding touchpoints, and Module 3 (Voice & Tone) for language rewrite',
  },
  {
    id: 'high-bounce',
    label: 'Content hub has high bounce rate',
    cause:
      'Content reads like compliance text — dense paragraphs, clinical tone, no visual hierarchy. Players land, scan, and leave because nothing looks worth their time.',
    fix:
      'Audit every page against the Playbook voice guidelines. Break walls of text into scannable chunks with headings, bullet points, and callout boxes. Add product-specific content (e.g., "How slots RNG works") instead of generic advice.',
    revisitModule: 'Module 3 (Voice & Tone) for tone and register, and Module 2 (Visual Identity) for formatting best practices',
  },
  {
    id: 'zero-helpline',
    label: 'Helpline page gets zero traffic',
    cause:
      'The helpline link is hidden — probably in a footer or a dedicated "Responsible Gambling" page that nobody visits. Players in need can\'t find support because it requires them to go looking for it.',
    fix:
      'Add the helpline link to every page footer, every session reminder, and every email. Support must be one tap away from any context. Never require players to navigate to a separate section.',
    revisitModule: 'Module 4 (Player Segmentation) for Tier 2 segment needs, and Module 5 (Customer Journey) for support touchpoints across phases',
  },
  {
    id: 'low-email-opens',
    label: 'Campaign emails have low open rates',
    cause:
      'Subject lines sound like compliance ("Monthly Responsible Gambling Summary"), the sender name is a department address (compliance@ or responsible-gaming@), or players are getting too many emails.',
    fix:
      'Rewrite subject lines in Playbook voice: "Your month: 14 sessions, $320. How does that compare?" Send from your main brand name, not a department. Cap educational emails at 2 per month maximum.',
    revisitModule: 'Module 5 (Customer Journey) for email strategy, and Module 3 (Voice & Tone) for subject line voice',
  },
  {
    id: 'dismissed-reminders',
    label: 'Session reminders are being dismissed immediately',
    cause:
      'The reminder copy is generic ("You\'ve been playing for 60 minutes") or uses alarming language. Players see it as an interruption rather than a useful check-in.',
    fix:
      'Reframe reminders with player data: "60 minutes in — you\'ve wagered $45 so far. Your budget is $100/week." Give players information, not warnings. Add a direct link to their activity dashboard so the reminder has utility.',
    revisitModule: 'Module 3 (Voice & Tone) for tone calibration, and Module 5 (Customer Journey) for session reminder templates',
  },
];

export default function TroubleshootingTool() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [diagnosed, setDiagnosed] = useState(false);

  const toggleSymptom = (id: string) => {
    if (diagnosed) return;
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleDiagnose = () => {
    if (selected.size === 0) return;
    setDiagnosed(true);
  };

  const handleReset = () => {
    setSelected(new Set());
    setDiagnosed(false);
  };

  const selectedSymptoms = SYMPTOMS.filter((s) => selected.has(s.id));

  return (
    <div className="my-10 rounded-xl border border-n100 bg-white shadow-sm overflow-hidden dark:bg-navy dark:border-n700">
      {/* Header */}
      <div className="bg-navy px-5 py-4 dark:bg-[#111827]">
        <span className="text-xs font-heading font-bold uppercase tracking-wider text-teal">
          Interactive Exercise
        </span>
        <h3 className="text-white font-heading font-bold text-lg mt-0.5">
          Deployment Diagnostic Tool
        </h3>
      </div>

      <div className="p-5 sm:p-6">
        <p className="text-n700 text-sm mb-5 leading-relaxed dark:text-n300">
          Select every symptom you're seeing in your deployment. The diagnostic will identify likely
          causes, recommend fixes, and point you to the right module for a deeper review.
        </p>

        {/* Symptom checkboxes */}
        <div className="space-y-3 mb-6">
          {SYMPTOMS.map((symptom) => {
            const isChecked = selected.has(symptom.id);
            return (
              <button
                key={symptom.id}
                onClick={() => toggleSymptom(symptom.id)}
                className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all text-sm leading-relaxed ${
                  isChecked
                    ? 'border-teal bg-teal/5 dark:bg-teal/10'
                    : 'border-n100 bg-white hover:border-n300 dark:bg-navy dark:border-n600 dark:hover:border-n500'
                } ${diagnosed ? 'cursor-default' : 'cursor-pointer'}`}
                disabled={diagnosed}
              >
                <span className="flex items-center gap-3">
                  {/* Checkbox indicator */}
                  <span
                    className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                      isChecked
                        ? 'bg-teal border-teal text-white'
                        : 'border-n300 dark:border-n500'
                    }`}
                  >
                    {isChecked && (
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </span>
                  <span className={`${isChecked ? 'text-navy dark:text-white font-medium' : 'text-n700 dark:text-n300'}`}>
                    {symptom.label}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Diagnose button */}
        {!diagnosed && (
          <div className="flex items-center justify-between pt-4 border-t border-n100 dark:border-n700">
            <span className="text-xs text-n500 dark:text-n400">
              {selected.size === 0
                ? 'Select at least one symptom to diagnose.'
                : `${selected.size} symptom${selected.size > 1 ? 's' : ''} selected.`}
            </span>
            <button
              onClick={handleDiagnose}
              disabled={selected.size === 0}
              className="px-5 py-2.5 bg-navy text-white text-sm font-heading font-semibold rounded-lg hover:bg-navy-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed dark:bg-teal dark:text-navy dark:hover:bg-teal-light"
            >
              Run diagnostic
            </button>
          </div>
        )}

        {/* Diagnosis results */}
        {diagnosed && (
          <div className="border-t border-n100 pt-6 space-y-5 animate-fade-in dark:border-n700">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-orange animate-pulse" />
              <span className="text-sm font-heading font-semibold text-navy dark:text-white">
                Diagnostic Results — {selectedSymptoms.length} issue{selectedSymptoms.length > 1 ? 's' : ''} found
              </span>
            </div>

            {selectedSymptoms.map((symptom, idx) => (
              <div
                key={symptom.id}
                className="rounded-lg border border-n100 overflow-hidden dark:border-n600"
              >
                {/* Symptom header */}
                <div className="bg-n50 px-4 py-3 border-b border-n100 dark:bg-[#111827] dark:border-n600">
                  <span className="text-xs font-heading font-bold text-orange uppercase tracking-wider">
                    Issue {idx + 1}
                  </span>
                  <p className="text-sm font-semibold text-navy mt-0.5 dark:text-white">
                    {symptom.label}
                  </p>
                </div>

                <div className="p-4 space-y-4 dark:bg-navy">
                  {/* Likely cause */}
                  <div>
                    <h5 className="text-xs font-heading font-bold uppercase tracking-wider text-n500 mb-1.5 dark:text-n400">
                      Likely Cause
                    </h5>
                    <p className="text-sm text-n700 leading-relaxed dark:text-n300">
                      {symptom.cause}
                    </p>
                  </div>

                  {/* Recommended fix */}
                  <div>
                    <h5 className="text-xs font-heading font-bold uppercase tracking-wider text-teal-dark mb-1.5 dark:text-teal">
                      Recommended Fix
                    </h5>
                    <p className="text-sm text-n700 leading-relaxed dark:text-n300">
                      {symptom.fix}
                    </p>
                  </div>

                  {/* Module to revisit */}
                  <div className="bg-navy/5 rounded-lg px-4 py-3 dark:bg-white/5">
                    <h5 className="text-xs font-heading font-bold uppercase tracking-wider text-navy mb-1 dark:text-teal">
                      Revisit
                    </h5>
                    <p className="text-sm text-n700 leading-relaxed dark:text-n300">
                      {symptom.revisitModule}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Pattern detection */}
            {selectedSymptoms.length >= 3 && (
              <div className="bg-orange/5 border border-orange/20 rounded-lg p-4 dark:bg-orange/10">
                <h5 className="text-sm font-heading font-bold text-orange mb-1">
                  Pattern detected: Multiple symptoms
                </h5>
                <p className="text-sm text-n700 leading-relaxed dark:text-n300">
                  You've flagged {selectedSymptoms.length} issues — this usually points to a
                  systemic problem rather than isolated fixes. Start with a full voice and placement
                  audit (Module 3 + Module 5) before addressing individual symptoms. Fix the
                  foundation first: if your voice reads as compliance and your content is buried in
                  the wrong touchpoints, fixing one symptom at a time won't move the needle.
                </p>
              </div>
            )}

            {/* Reset */}
            <div className="text-center pt-2">
              <button
                onClick={handleReset}
                className="px-5 py-2 text-sm text-n500 hover:text-navy transition-colors underline dark:text-n400 dark:hover:text-white"
              >
                Run another diagnostic
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { getProgress } from '../lib/progress';

const base = (import.meta.env.BASE_URL || '').replace(/\/$/, '');

interface Props {
  prerequisiteModuleId: string;
  prerequisiteTitle: string;
  concept: string;
}

export default function SoftGateBanner({ prerequisiteModuleId, prerequisiteTitle, concept }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissKey = `soft-gate-dismissed-${prerequisiteModuleId}`;
    const dismissed = sessionStorage.getItem(dismissKey);
    if (dismissed) return;

    const progress = getProgress();
    const mp = progress[prerequisiteModuleId];
    if (mp?.completed) return;

    setVisible(true);
  }, [prerequisiteModuleId]);

  if (!visible) return null;

  const handleDismiss = () => {
    const dismissKey = `soft-gate-dismissed-${prerequisiteModuleId}`;
    sessionStorage.setItem(dismissKey, 'true');
    setVisible(false);
  };

  return (
    <div className="mb-8 p-5 rounded-xl bg-amber-50 border border-amber-200">
      <p className="text-sm text-amber-900">
        We recommend completing{' '}
        <a
          href={`${base}/modules/${prerequisiteModuleId}`}
          className="font-semibold text-amber-800 underline underline-offset-2 hover:text-amber-950 transition-colors"
        >
          {prerequisiteTitle}
        </a>{' '}
        first — it covers {concept} that builds on what's here.
      </p>
      <button
        onClick={handleDismiss}
        className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-amber-700 hover:text-amber-900 transition-colors"
      >
        Continue anyway
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

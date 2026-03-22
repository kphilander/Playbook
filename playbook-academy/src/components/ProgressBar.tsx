import { useState, useEffect } from 'react';
import { getCompletionPercentage } from '../lib/progress';

export default function ProgressBar() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const update = () => setPercentage(getCompletionPercentage());
    update();
    window.addEventListener('progress-updated', update);
    return () => window.removeEventListener('progress-updated', update);
  }, []);

  return (
    <div className="h-1 bg-navy-dark">
      <div
        className="h-full bg-teal transition-all duration-500 ease-out"
        style={{ width: `${percentage}%` }}
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Playbook Academy — ${percentage}% complete`}
      />
    </div>
  );
}

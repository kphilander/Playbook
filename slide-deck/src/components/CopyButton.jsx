import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

export default function CopyButton({ value, label, className = '' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = value;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`inline-flex items-center gap-1.5 font-mono text-xs transition-colors duration-200
        hover:text-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal
        rounded px-1.5 py-0.5 ${className}
        ${copied ? 'text-teal' : 'text-n300'}`}
      title={`Copy ${value}`}
    >
      {copied ? <Check size={12} /> : <Copy size={12} />}
      {label || value}
    </button>
  );
}

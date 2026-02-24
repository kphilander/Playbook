import {
  CreditCard, Dice5, Target, Smartphone, Trophy, Ticket, Percent,
  BarChart3, Timer, Shield, Bell, HelpCircle, Share2, Swords, QrCode,
  Phone, AlertTriangle, Plus, ExternalLink, BookOpen
} from 'lucide-react';
import AccentBar from '../components/AccentBar';
import { iconCategories } from '../data/slideContent';

const categoryIcons = [CreditCard, Percent, Timer, HelpCircle, Share2, Phone];
const categoryColors = ['text-teal', 'text-orange', 'text-teal', 'text-orange', 'text-teal', 'text-orange'];

export default function IconSystemSlide() {
  return (
    <div className="relative w-full h-full bg-navy flex flex-col px-12 py-8">
      <AccentBar />

      <h2 className="font-heading text-4xl font-bold text-white mt-4">
        Icon System
      </h2>
      <p className="font-body text-lg text-neutral-300 mt-3 max-w-3xl">
        31 icons across 6 categories. Dual stroke-weight mirrors the logo — 2px structure, 1px detail.
      </p>

      <div className="flex-1 grid grid-cols-3 grid-rows-2 gap-5 mt-8">
        {iconCategories.map((cat, i) => {
          const Icon = categoryIcons[i];
          const color = categoryColors[i];
          return (
            <div key={cat.name} className="bg-navy-light rounded-xl p-6 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-navy flex items-center justify-center">
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-white">{cat.name}</h3>
                  <span className="font-mono text-sm text-neutral-500">{cat.count} icons</span>
                </div>
              </div>
              <p className="font-body text-sm text-neutral-300 leading-relaxed">{cat.examples}</p>
            </div>
          );
        })}
      </div>

      {/* Spec bar */}
      <div className="flex gap-6 mt-6">
        {[
          { label: 'Canvas', value: '24×24px' },
          { label: 'Primary stroke', value: '2px' },
          { label: 'Detail stroke', value: '1px' },
          { label: 'Optical sizes', value: '16 / 24 / 32 / 48px' },
          { label: 'Fill', value: 'none' },
          { label: 'Color', value: 'currentColor' },
        ].map((s) => (
          <div key={s.label} className="flex flex-col">
            <span className="font-heading text-sm font-bold text-neutral-500 uppercase tracking-wider">{s.label}</span>
            <span className="font-mono text-base text-teal">{s.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

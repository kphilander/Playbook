import { BookOpen } from 'lucide-react';
import AccentBar from '../components/AccentBar';

export default function TitleSlide() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-navy via-navy-light to-navy">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal/20 via-transparent to-transparent" />
      <AccentBar />

      <div className="relative z-10 flex flex-col items-center gap-2 px-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-teal/20 flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-teal" />
          </div>
        </div>

        <h1 className="font-heading text-[64px] leading-none text-white">
          <span className="font-extrabold tracking-[-0.03em]">Play</span><span className="font-light tracking-[-0.03em]">BOOK</span>
        </h1>

        <p className="font-heading text-2xl text-teal font-normal mt-1">
          Brand Book
        </p>

        <p className="font-body text-base text-neutral-300 mt-4 text-center max-w-xl">
          Gambling Entertainment Literacy — A White-Label Brand System
        </p>

        <p className="font-heading text-sm font-bold text-neutral-500 tracking-[0.2em] uppercase mt-10">
          Open &middot; Social
        </p>
      </div>
    </div>
  );
}

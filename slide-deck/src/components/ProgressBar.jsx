export default function ProgressBar({ total, current, onNavigate }) {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-50">
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          onClick={() => onNavigate(i)}
          aria-label={`Go to slide ${i + 1}`}
          className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer border-0 ${
            i === current
              ? 'bg-teal scale-125 shadow-[0_0_8px_rgba(0,212,170,0.5)]'
              : 'bg-neutral-500 hover:bg-neutral-300'
          }`}
        />
      ))}
    </div>
  );
}

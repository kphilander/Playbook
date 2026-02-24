export default function SlideContainer({ children, isActive, direction }) {
  return (
    <div
      className={`absolute inset-0 w-full h-full transition-all duration-500 ease-out ${
        isActive
          ? 'opacity-100 translate-y-0'
          : direction === 'forward'
            ? 'opacity-0 translate-y-8 pointer-events-none'
            : 'opacity-0 -translate-y-8 pointer-events-none'
      }`}
    >
      {children}
    </div>
  );
}

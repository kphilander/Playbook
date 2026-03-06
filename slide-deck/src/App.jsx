import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import HeroSection from './sections/HeroSection';
import BrandStorySection from './sections/BrandStorySection';
import FoundationSection from './sections/FoundationSection';
import LogoSection from './sections/LogoSection';
import ColorSection from './sections/ColorSection';
import TypographySection from './sections/TypographySection';
import IconSection from './sections/IconSection';
import PhotographySection from './sections/PhotographySection';
import MessagingSection from './sections/MessagingSection';
import CollateralSection from './sections/CollateralSection';
import AccessibilitySection from './sections/AccessibilitySection';
import GovernanceSection from './sections/GovernanceSection';
import GetStartedSection from './sections/GetStartedSection';

const sections = [
  { id: 'hero', label: 'Playbook', Component: HeroSection },
  { id: 'brand-story', label: 'Brand Story', Component: BrandStorySection },
  { id: 'foundation', label: 'Foundation', Component: FoundationSection },
  { id: 'logo', label: 'Logo System', Component: LogoSection },
  { id: 'color', label: 'Color', Component: ColorSection },
  { id: 'typography', label: 'Typography', Component: TypographySection },
  { id: 'icons', label: 'Icons', Component: IconSection },
  { id: 'photography', label: 'Photography', Component: PhotographySection },
  { id: 'messaging', label: 'Messaging', Component: MessagingSection },
  { id: 'collateral', label: 'Collateral', Component: CollateralSection },
  { id: 'accessibility', label: 'Accessibility', Component: AccessibilitySection },
  { id: 'governance', label: 'Governance', Component: GovernanceSection },
  { id: 'get-started', label: 'Get Started', Component: GetStartedSection },
];

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Scroll-spy: track which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            history.replaceState(null, '', `#${entry.target.id}`);
          }
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  // Handle initial hash on load
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      requestAnimationFrame(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-navy">
      <Sidebar sections={sections} activeSection={activeSection} />

      <main className="lg:ml-64">
        {sections.map(({ id, Component }) => (
          <section key={id} id={id}>
            <Component />
          </section>
        ))}
      </main>
    </div>
  );
}

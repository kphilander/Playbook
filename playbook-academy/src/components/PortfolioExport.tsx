import { useState, useEffect } from 'react';
import {
  getProgress,
  getLearnerProfile,
  getCompletionPercentage,
  MODULE_IDS,
  MODULE_TITLES,
  LESSON_MAP,
  LESSON_TITLES,
  type ModuleProgress,
  type LearnerProfile,
} from '../lib/progress';

const base = (import.meta.env.BASE_URL || '').replace(/\/$/, '');

// ---------------------------------------------------------------------------
// Types for localStorage artifacts
// ---------------------------------------------------------------------------

interface CampaignBrief {
  operatorType?: string;
  operatorLabel?: string;
  segments?: string[];
  channels?: string[];
  campaignName?: string;
  campaignDuration?: string;
  campaignDescription?: string;
  launchMonth?: string;
  avoidEvents?: boolean;
}

interface MVPChecklistData {
  items: { id: number; text: string; category: string; checked: boolean }[];
  completedCount: number;
  totalCount: number;
}

interface CapstoneData {
  brandName?: string;
  operatorType?: string;
  segments?: string[];
  touchpoints?: { label: string; message: string }[];
  campaignName?: string;
  campaignDescription?: string;
  metrics?: { name: string; target: string; timeframe: string }[];
}

// ---------------------------------------------------------------------------
// Storage keys
// ---------------------------------------------------------------------------

const CAMPAIGN_BRIEF_KEY = 'playbook-campaign-brief';
const MVP_CHECKLIST_KEY = 'playbook-mvp-checklist';
const CAPSTONE_KEY = 'playbook-capstone';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function safeParseJSON<T>(key: string): T | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

function formatDate(dateStr?: string): string {
  if (!dateStr) return '';
  try {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

function formatOperatorType(type?: string): string {
  const labels: Record<string, string> = {
    casino: 'Casino',
    sportsbook: 'Sportsbook',
    lottery: 'Lottery',
    'land-based': 'Land-based',
    'multi-vertical': 'Multi-vertical',
  };
  return type ? labels[type] ?? type : 'Not set';
}

function formatRole(role?: string): string {
  const labels: Record<string, string> = {
    copywriter: 'Copywriter',
    designer: 'Designer',
    pm: 'Product Manager',
    'cs-lead': 'CS Lead',
  };
  return role ? labels[role] ?? role : 'Not set';
}

// The MVP checklist stores just an array of checked IDs, not full item objects.
// We need the canonical list to reconstruct the display.
const MVP_CHECKLIST_ITEMS = [
  { id: 1, text: 'Deposit limit prompt appears during first deposit flow', category: 'Mobile App' },
  { id: 2, text: 'Session reminders are available in account settings', category: 'Mobile App' },
  { id: 3, text: 'Helpline number is visible on every screen', category: 'Accessibility' },
  { id: 4, text: 'Welcome email goes out on registration with tool setup CTA', category: 'Email' },
  { id: 5, text: 'Content hub is accessible from primary navigation', category: 'Website' },
  { id: 6, text: 'Game IQ Quiz is live and shareable', category: 'Interactive' },
  { id: 7, text: 'Staff can answer the top 10 FAQs', category: 'Training' },
  { id: 8, text: '_brand.yml program name and helpline are configured', category: 'Configuration' },
  { id: 9, text: 'WCAG AA contrast ratios verified on all templates', category: 'Accessibility' },
  { id: 10, text: 'Monthly summary email template is ready', category: 'Email' },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function PortfolioExport() {
  const [progress, setProgress] = useState<Record<string, ModuleProgress>>({});
  const [profile, setProfile] = useState<LearnerProfile>({});
  const [percentage, setPercentage] = useState(0);
  const [campaignBrief, setCampaignBrief] = useState<CampaignBrief | null>(null);
  const [mvpCheckedIds, setMvpCheckedIds] = useState<number[] | null>(null);
  const [capstone, setCapstone] = useState<CapstoneData | null>(null);
  const [generating, setGenerating] = useState(false);

  useEffect(() => {
    const load = () => {
      setProgress(getProgress());
      setProfile(getLearnerProfile());
      setPercentage(getCompletionPercentage());
      setCampaignBrief(safeParseJSON<CampaignBrief>(CAMPAIGN_BRIEF_KEY));
      setMvpCheckedIds(safeParseJSON<number[]>(MVP_CHECKLIST_KEY));
      setCapstone(safeParseJSON<CapstoneData>(CAPSTONE_KEY));
    };
    load();
    window.addEventListener('progress-updated', load);
    return () => window.removeEventListener('progress-updated', load);
  }, []);

  // Derived data
  const completedModules = MODULE_IDS.filter((id) => progress[id]?.completed);
  const modulesWithScores = MODULE_IDS.filter(
    (id) => progress[id]?.quizScore !== null && progress[id]?.quizScore !== undefined,
  );
  const totalLessonsCompleted = MODULE_IDS.reduce(
    (sum, id) => sum + (progress[id]?.completedLessons?.length ?? 0),
    0,
  );
  const totalLessons = MODULE_IDS.reduce(
    (sum, id) => sum + (LESSON_MAP[id]?.length ?? 0),
    0,
  );
  const hasAnyProgress = Object.keys(progress).length > 0;
  const hasArtifacts = campaignBrief !== null || mvpCheckedIds !== null || capstone !== null;

  const todayFormatted = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // ---------------------------------------------------------------------------
  // PDF Generation
  // ---------------------------------------------------------------------------

  const generatePDF = async () => {
    setGenerating(true);
    try {
      const { jsPDF } = await import('jspdf');
      const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const margin = 20;
      const contentWidth = pageWidth - margin * 2;
      const centerX = pageWidth / 2;

      // Brand colors
      const navy = { r: 27, g: 40, b: 56 };
      const teal = { r: 0, g: 212, b: 170 };
      const orange = { r: 255, g: 107, b: 53 };

      // Shared helpers
      const drawHeader = () => {
        doc.setFillColor(navy.r, navy.g, navy.b);
        doc.rect(0, 0, pageWidth, 12, 'F');
        doc.setFillColor(teal.r, teal.g, teal.b);
        doc.rect(0, 12, pageWidth, 1.5, 'F');
      };

      const drawFooter = (pageNum: number, totalPages: number) => {
        doc.setFillColor(navy.r, navy.g, navy.b);
        doc.rect(0, pageHeight - 12, pageWidth, 12, 'F');
        doc.setTextColor(160, 160, 170);
        doc.setFontSize(7);
        doc.setFont('helvetica', 'normal');
        doc.text('Playbook Academy Portfolio', margin, pageHeight - 5);
        doc.text(`Page ${pageNum} of ${totalPages}`, pageWidth - margin, pageHeight - 5, { align: 'right' });
      };

      // =====================================================================
      // PAGE 1: Cover
      // =====================================================================

      // Full navy background
      doc.setFillColor(navy.r, navy.g, navy.b);
      doc.rect(0, 0, pageWidth, pageHeight, 'F');

      // Teal accent bar near top
      doc.setFillColor(teal.r, teal.g, teal.b);
      doc.rect(margin, 55, 40, 3, 'F');

      // Playbook Academy label
      doc.setTextColor(teal.r, teal.g, teal.b);
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.text('PLAYBOOK ACADEMY', margin, 50);

      // Title
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(36);
      doc.setFont('helvetica', 'bold');
      doc.text('Learning', margin, 78);
      doc.text('Portfolio', margin, 92);

      // Learner details
      let y = 115;
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(160, 175, 190);

      const learnerName = profile.name || 'Learner';
      const coverFields = [
        { label: 'Name', value: learnerName },
        { label: 'Role', value: formatRole(profile.role) },
        { label: 'Operator Type', value: formatOperatorType(profile.operatorType) },
        { label: 'Started', value: formatDate(profile.startedAt) || 'Not recorded' },
        { label: 'Generated', value: todayFormatted },
      ];

      for (const field of coverFields) {
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(teal.r, teal.g, teal.b);
        doc.text(field.label.toUpperCase(), margin, y);
        y += 5;
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(220, 225, 230);
        doc.text(field.value, margin, y);
        y += 10;
      }

      // Completion badge
      y += 10;
      doc.setFillColor(teal.r, teal.g, teal.b);
      doc.roundedRect(margin, y - 6, 60, 14, 3, 3, 'F');
      doc.setTextColor(navy.r, navy.g, navy.b);
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.text(`${percentage}% Complete`, margin + 30, y + 2, { align: 'center' });

      // Footer accent
      doc.setFillColor(teal.r, teal.g, teal.b);
      doc.rect(0, pageHeight - 3, pageWidth, 3, 'F');

      // =====================================================================
      // PAGE 2: Progress Summary
      // =====================================================================

      doc.addPage();
      drawHeader();

      y = 26;
      doc.setTextColor(navy.r, navy.g, navy.b);
      doc.setFontSize(22);
      doc.setFont('helvetica', 'bold');
      doc.text('Progress Summary', margin, y);

      // Overall stats row
      y += 14;
      const statsBoxWidth = (contentWidth - 8) / 3;
      const stats = [
        { label: 'Modules', value: `${completedModules.length} / 7` },
        { label: 'Lessons', value: `${totalLessonsCompleted} / ${totalLessons}` },
        { label: 'Overall', value: `${percentage}%` },
      ];
      for (let i = 0; i < stats.length; i++) {
        const x = margin + i * (statsBoxWidth + 4);
        doc.setFillColor(245, 245, 250);
        doc.roundedRect(x, y, statsBoxWidth, 20, 2, 2, 'F');
        doc.setTextColor(navy.r, navy.g, navy.b);
        doc.setFontSize(16);
        doc.setFont('helvetica', 'bold');
        doc.text(stats[i].value, x + statsBoxWidth / 2, y + 10, { align: 'center' });
        doc.setTextColor(107, 107, 138);
        doc.setFontSize(8);
        doc.setFont('helvetica', 'normal');
        doc.text(stats[i].label, x + statsBoxWidth / 2, y + 17, { align: 'center' });
      }

      // Module-by-module breakdown
      y += 32;
      doc.setTextColor(navy.r, navy.g, navy.b);
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text('Module Breakdown', margin, y);
      y += 3;

      // Table header
      y += 6;
      doc.setFillColor(navy.r, navy.g, navy.b);
      doc.rect(margin, y - 4, contentWidth, 8, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(8);
      doc.setFont('helvetica', 'bold');
      doc.text('Module', margin + 3, y + 1);
      doc.text('Lessons', margin + contentWidth - 60, y + 1, { align: 'center' });
      doc.text('Quiz', margin + contentWidth - 30, y + 1, { align: 'center' });
      doc.text('Status', margin + contentWidth - 5, y + 1, { align: 'right' });
      y += 7;

      doc.setFontSize(9);
      for (let i = 0; i < MODULE_IDS.length; i++) {
        const moduleId = MODULE_IDS[i];
        const title = MODULE_TITLES[moduleId] || moduleId;
        const mp = progress[moduleId];
        const lessons = LESSON_MAP[moduleId] ?? [];
        const completedLessons = mp?.completedLessons?.length ?? 0;
        const quizScore = mp?.quizScore;
        const isComplete = mp?.completed ?? false;

        // Alternate row bg
        if (i % 2 === 0) {
          doc.setFillColor(250, 250, 255);
          doc.rect(margin, y - 4, contentWidth, 9, 'F');
        }

        doc.setFont('helvetica', 'normal');
        doc.setTextColor(60, 60, 80);
        doc.text(`${i + 1}. ${title}`, margin + 3, y + 1);

        doc.text(`${completedLessons} / ${lessons.length}`, margin + contentWidth - 60, y + 1, { align: 'center' });

        if (quizScore !== null && quizScore !== undefined) {
          doc.setTextColor(teal.r, teal.g, teal.b);
          doc.setFont('helvetica', 'bold');
          doc.text(`${quizScore}%`, margin + contentWidth - 30, y + 1, { align: 'center' });
        } else {
          doc.setTextColor(168, 168, 192);
          doc.setFont('helvetica', 'normal');
          doc.text('--', margin + contentWidth - 30, y + 1, { align: 'center' });
        }

        if (isComplete) {
          doc.setTextColor(0, 200, 83);
          doc.setFont('helvetica', 'bold');
          doc.text('Complete', margin + contentWidth - 5, y + 1, { align: 'right' });
        } else if (completedLessons > 0) {
          doc.setTextColor(orange.r, orange.g, orange.b);
          doc.setFont('helvetica', 'normal');
          doc.text('In Progress', margin + contentWidth - 5, y + 1, { align: 'right' });
        } else {
          doc.setTextColor(168, 168, 192);
          doc.setFont('helvetica', 'normal');
          doc.text('Not Started', margin + contentWidth - 5, y + 1, { align: 'right' });
        }

        y += 9;
      }

      // Completed lessons detail per module
      y += 8;
      if (y > 240) { doc.addPage(); drawHeader(); y = 26; }

      doc.setTextColor(navy.r, navy.g, navy.b);
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text('Completed Lessons', margin, y);
      y += 8;

      for (const moduleId of MODULE_IDS) {
        const mp = progress[moduleId];
        const completedLessons = mp?.completedLessons ?? [];
        if (completedLessons.length === 0) continue;

        if (y > 265) { doc.addPage(); drawHeader(); y = 26; }

        doc.setFontSize(10);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(navy.r, navy.g, navy.b);
        doc.text(MODULE_TITLES[moduleId] ?? moduleId, margin, y);
        y += 5;

        doc.setFontSize(8);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(80, 80, 100);
        for (const slug of completedLessons) {
          if (y > 270) { doc.addPage(); drawHeader(); y = 26; }
          const lessonTitle = LESSON_TITLES[moduleId]?.[slug] ?? slug;
          doc.text(`  \u2022  ${lessonTitle}`, margin + 2, y);
          y += 4.5;
        }
        y += 3;
      }

      // =====================================================================
      // PAGE 3+: Exercise Artifacts
      // =====================================================================

      if (hasArtifacts) {
        doc.addPage();
        drawHeader();
        y = 26;

        doc.setTextColor(navy.r, navy.g, navy.b);
        doc.setFontSize(22);
        doc.setFont('helvetica', 'bold');
        doc.text('Exercise Artifacts', margin, y);
        y += 6;

        doc.setFontSize(9);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(107, 107, 138);
        doc.text('Saved outputs from interactive exercises across the curriculum.', margin, y);
        y += 12;

        // --- Campaign Brief ---
        if (campaignBrief) {
          if (y > 230) { doc.addPage(); drawHeader(); y = 26; }

          doc.setFillColor(teal.r, teal.g, teal.b);
          doc.rect(margin, y - 4, contentWidth, 9, 'F');
          doc.setTextColor(navy.r, navy.g, navy.b);
          doc.setFontSize(11);
          doc.setFont('helvetica', 'bold');
          doc.text('Campaign Strategy Brief', margin + 3, y + 2);
          y += 10;

          const briefFields: [string, string][] = [
            ['Operator Type', campaignBrief.operatorLabel || formatOperatorType(campaignBrief.operatorType)],
            ['Target Segments', (campaignBrief.segments ?? []).join(', ') || 'Not set'],
            ['Channels', (campaignBrief.channels ?? []).join(', ') || 'Not set'],
            ['Campaign', campaignBrief.campaignName || 'Not set'],
            ['Duration', campaignBrief.campaignDuration || 'Not set'],
            ['Launch Month', campaignBrief.launchMonth || 'Not set'],
          ];

          for (const [label, value] of briefFields) {
            if (y > 270) { doc.addPage(); drawHeader(); y = 26; }
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(9);
            doc.setTextColor(navy.r, navy.g, navy.b);
            doc.text(`${label}:`, margin, y);
            const lw = doc.getTextWidth(`${label}: `);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(60, 60, 80);
            const lines = doc.splitTextToSize(value, contentWidth - lw);
            doc.text(lines, margin + lw, y);
            y += lines.length * 4.5 + 2;
          }

          if (campaignBrief.campaignDescription) {
            y += 2;
            if (y > 250) { doc.addPage(); drawHeader(); y = 26; }
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(9);
            doc.setTextColor(navy.r, navy.g, navy.b);
            doc.text('Description:', margin, y);
            y += 4.5;
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(60, 60, 80);
            const descLines = doc.splitTextToSize(campaignBrief.campaignDescription, contentWidth);
            doc.text(descLines, margin, y);
            y += descLines.length * 4.5 + 6;
          }
        }

        // --- MVP Checklist ---
        if (mvpCheckedIds && mvpCheckedIds.length > 0) {
          if (y > 200) { doc.addPage(); drawHeader(); y = 26; }

          y += 4;
          doc.setFillColor(teal.r, teal.g, teal.b);
          doc.rect(margin, y - 4, contentWidth, 9, 'F');
          doc.setTextColor(navy.r, navy.g, navy.b);
          doc.setFontSize(11);
          doc.setFont('helvetica', 'bold');
          doc.text('MVP Deployment Checklist', margin + 3, y + 2);
          y += 10;

          const checkedSet = new Set(mvpCheckedIds);
          doc.setFontSize(9);
          doc.setFont('helvetica', 'normal');
          doc.setTextColor(107, 107, 138);
          doc.text(`${checkedSet.size} of ${MVP_CHECKLIST_ITEMS.length} items completed`, margin, y);
          y += 7;

          for (const item of MVP_CHECKLIST_ITEMS) {
            if (y > 270) { doc.addPage(); drawHeader(); y = 26; }
            const isChecked = checkedSet.has(item.id);
            doc.setFontSize(9);
            if (isChecked) {
              doc.setTextColor(0, 200, 83);
              doc.setFont('helvetica', 'bold');
              doc.text('\u2713', margin, y);
            } else {
              doc.setTextColor(168, 168, 192);
              doc.setFont('helvetica', 'normal');
              doc.text('\u2022', margin, y);
            }
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(isChecked ? 60 : 140, isChecked ? 60 : 140, isChecked ? 80 : 160);
            doc.text(item.text, margin + 6, y);
            doc.setTextColor(168, 168, 192);
            doc.setFontSize(7);
            doc.text(`[${item.category}]`, margin + 6 + doc.getTextWidth(item.text) + 2, y);
            doc.setFontSize(9);
            y += 5.5;
          }
          y += 4;
        }

        // --- Capstone Plan ---
        if (capstone) {
          if (y > 180) { doc.addPage(); drawHeader(); y = 26; }

          y += 4;
          doc.setFillColor(teal.r, teal.g, teal.b);
          doc.rect(margin, y - 4, contentWidth, 9, 'F');
          doc.setTextColor(navy.r, navy.g, navy.b);
          doc.setFontSize(11);
          doc.setFont('helvetica', 'bold');
          doc.text('Capstone: MVP Deployment Plan', margin + 3, y + 2);
          y += 10;

          const capFields: [string, string][] = [
            ['Brand Name', capstone.brandName || 'Not set'],
            ['Operator Type', formatOperatorType(capstone.operatorType)],
            ['Priority Segments', (capstone.segments ?? []).join(', ') || 'Not set'],
            ['Launch Campaign', capstone.campaignName || 'Not set'],
          ];

          for (const [label, value] of capFields) {
            if (y > 270) { doc.addPage(); drawHeader(); y = 26; }
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(9);
            doc.setTextColor(navy.r, navy.g, navy.b);
            doc.text(`${label}:`, margin, y);
            const lw = doc.getTextWidth(`${label}: `);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(60, 60, 80);
            doc.text(value, margin + lw, y);
            y += 6;
          }

          // Touchpoints
          if (capstone.touchpoints && capstone.touchpoints.length > 0) {
            y += 2;
            if (y > 240) { doc.addPage(); drawHeader(); y = 26; }
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(9);
            doc.setTextColor(navy.r, navy.g, navy.b);
            doc.text('Touchpoint Messages:', margin, y);
            y += 5;

            for (const tp of capstone.touchpoints) {
              if (y > 260) { doc.addPage(); drawHeader(); y = 26; }
              doc.setFont('helvetica', 'bold');
              doc.setFontSize(8);
              doc.setTextColor(navy.r, navy.g, navy.b);
              doc.text(tp.label, margin + 3, y);
              y += 4;
              doc.setFont('helvetica', 'normal');
              doc.setTextColor(80, 80, 100);
              const msgLines = doc.splitTextToSize(tp.message || '(no message)', contentWidth - 6);
              doc.text(msgLines, margin + 3, y);
              y += msgLines.length * 4 + 4;
            }
          }

          // Metrics
          if (capstone.metrics && capstone.metrics.length > 0) {
            y += 2;
            if (y > 250) { doc.addPage(); drawHeader(); y = 26; }
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(9);
            doc.setTextColor(navy.r, navy.g, navy.b);
            doc.text('Success Metrics:', margin, y);
            y += 5;

            for (const m of capstone.metrics) {
              if (y > 270) { doc.addPage(); drawHeader(); y = 26; }
              doc.setFontSize(9);
              doc.setFont('helvetica', 'bold');
              doc.setTextColor(60, 60, 80);
              doc.text(`\u2022 ${m.name}`, margin + 2, y);
              doc.setFont('helvetica', 'normal');
              doc.setTextColor(107, 107, 138);
              const detail = `${m.target} within ${m.timeframe}`;
              doc.text(`  \u2014 ${detail}`, margin + 2 + doc.getTextWidth(`\u2022 ${m.name}`), y);
              y += 5.5;
            }
          }
        }
      }

      // =====================================================================
      // Apply footers to all pages
      // =====================================================================

      const totalPages = doc.getNumberOfPages();
      // Page 1 (cover) gets no footer — start from page 2
      for (let i = 2; i <= totalPages; i++) {
        doc.setPage(i);
        drawFooter(i - 1, totalPages - 1);
      }

      doc.save(`playbook-portfolio-${(profile.name || 'learner').toLowerCase().replace(/\s+/g, '-')}.pdf`);
    } catch (err) {
      console.error('Portfolio PDF generation failed:', err);
    } finally {
      setGenerating(false);
    }
  };

  // ---------------------------------------------------------------------------
  // Empty State
  // ---------------------------------------------------------------------------

  if (!hasAnyProgress) {
    return (
      <div className="rounded-xl border border-n100 bg-white dark:bg-navy dark:border-navy-light shadow-sm overflow-hidden">
        <div className="bg-navy px-5 py-4">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-teal">
            Portfolio
          </span>
          <h3 className="text-white font-heading font-bold text-lg mt-0.5">
            Your Learning Portfolio
          </h3>
        </div>

        <div className="p-8 sm:p-12 text-center">
          <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-n100 dark:bg-navy-light flex items-center justify-center">
            <svg className="w-8 h-8 text-n300 dark:text-n500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h4 className="text-lg font-heading font-semibold text-navy dark:text-white mb-2">
            Nothing here yet
          </h4>
          <p className="text-sm text-n500 dark:text-n300 max-w-sm mx-auto mb-6">
            Start Module 1 to build your portfolio. Every quiz score, exercise, and milestone you hit gets captured here
            automatically.
          </p>
          <a
            href={`${base}/modules/1-rg-foundations`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy dark:bg-teal text-white dark:text-navy text-sm font-heading font-semibold rounded-lg hover:bg-navy-light dark:hover:bg-teal-light transition-colors"
          >
            Start Module 1
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // Main Render
  // ---------------------------------------------------------------------------

  return (
    <div className="rounded-xl border border-n100 bg-white dark:bg-navy dark:border-navy-light shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-navy px-5 py-4">
        <span className="text-xs font-heading font-bold uppercase tracking-wider text-teal">
          Portfolio
        </span>
        <h3 className="text-white font-heading font-bold text-lg mt-0.5">
          Your Learning Portfolio
        </h3>
        <p className="text-n300 text-sm mt-1">
          Everything you've built, scored, and shipped — in one place.
        </p>
      </div>

      <div className="p-5 sm:p-6 space-y-6">
        {/* ── Learner Card ─────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 bg-n50 dark:bg-navy-dark rounded-lg border border-n100 dark:border-navy-light">
          <div className="w-12 h-12 rounded-full bg-navy dark:bg-teal flex items-center justify-center flex-shrink-0">
            <span className="text-white dark:text-navy text-lg font-heading font-bold">
              {(profile.name || 'L').charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-heading font-semibold text-navy dark:text-white text-base truncate">
              {profile.name || 'Learner'}
            </h4>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
              {profile.role && (
                <span className="text-xs text-n500 dark:text-n300">
                  {formatRole(profile.role)}
                </span>
              )}
              {profile.operatorType && (
                <span className="text-xs text-n500 dark:text-n300">
                  {formatOperatorType(profile.operatorType)}
                </span>
              )}
              {profile.startedAt && (
                <span className="text-xs text-n500 dark:text-n300">
                  Since {formatDate(profile.startedAt)}
                </span>
              )}
            </div>
          </div>
          <div className="text-right flex-shrink-0">
            <span className="text-2xl font-heading font-bold text-teal">{percentage}%</span>
            <p className="text-xs text-n500 dark:text-n300">complete</p>
          </div>
        </div>

        {/* ── Progress Overview ─────────────────────────── */}
        <div>
          <h4 className="text-sm font-heading font-semibold text-n500 dark:text-n300 uppercase tracking-wider mb-3">
            Module Progress
          </h4>

          {/* Progress bar */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-heading font-semibold text-navy dark:text-white">
                {completedModules.length} of 6 modules complete
              </span>
              <span className="text-xs font-heading font-semibold text-teal">
                {totalLessonsCompleted} / {totalLessons} lessons
              </span>
            </div>
            <div className="h-2.5 bg-n100 dark:bg-navy-dark rounded-full overflow-hidden">
              <div
                className="h-full bg-teal rounded-full transition-all duration-500"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>

          {/* Module grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {MODULE_IDS.map((id, i) => {
              const mp = progress[id];
              const lessons = LESSON_MAP[id] ?? [];
              const completedLessons = mp?.completedLessons?.length ?? 0;
              const isComplete = mp?.completed ?? false;
              const hasStarted = completedLessons > 0;
              const quizScore = mp?.quizScore;

              return (
                <div
                  key={id}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg border transition-colors ${
                    isComplete
                      ? 'border-teal/20 bg-teal/5 dark:bg-teal/10 dark:border-teal/20'
                      : hasStarted
                        ? 'border-orange/20 bg-orange/5 dark:bg-orange/10 dark:border-orange/20'
                        : 'border-n100 bg-white dark:bg-navy dark:border-navy-light'
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-heading font-bold ${
                      isComplete
                        ? 'bg-teal text-navy'
                        : hasStarted
                          ? 'bg-orange text-white'
                          : 'bg-n100 dark:bg-navy-light text-n500 dark:text-n300'
                    }`}
                  >
                    {isComplete ? (
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      i + 1
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span
                      className={`text-sm font-heading font-semibold block truncate ${
                        isComplete
                          ? 'text-navy dark:text-white'
                          : hasStarted
                            ? 'text-navy dark:text-white'
                            : 'text-n500 dark:text-n300'
                      }`}
                    >
                      {MODULE_TITLES[id]}
                    </span>
                    <span className="text-xs text-n500 dark:text-n300">
                      {completedLessons}/{lessons.length} lessons
                      {quizScore !== null && quizScore !== undefined && (
                        <span className="ml-1.5 text-teal-dark dark:text-teal font-semibold">
                          Quiz: {quizScore}%
                        </span>
                      )}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Quiz Scores ───────────────────────────────── */}
        {modulesWithScores.length > 0 && (
          <div>
            <h4 className="text-sm font-heading font-semibold text-n500 dark:text-n300 uppercase tracking-wider mb-3">
              Quiz Scores
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {modulesWithScores.map((id) => {
                const score = progress[id]!.quizScore!;
                const passed = score >= 80;
                return (
                  <div
                    key={id}
                    className={`p-3 rounded-lg border text-center ${
                      passed
                        ? 'border-teal/20 bg-teal/5 dark:bg-teal/10 dark:border-teal/20'
                        : 'border-orange/20 bg-orange/5 dark:bg-orange/10 dark:border-orange/20'
                    }`}
                  >
                    <span
                      className={`text-xl font-heading font-bold block ${
                        passed ? 'text-teal-dark dark:text-teal' : 'text-orange dark:text-orange-light'
                      }`}
                    >
                      {score}%
                    </span>
                    <span className="text-xs text-n500 dark:text-n300 leading-tight block mt-0.5">
                      {MODULE_TITLES[id]}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── Saved Artifacts ──────────────────────────── */}
        {hasArtifacts && (
          <div>
            <h4 className="text-sm font-heading font-semibold text-n500 dark:text-n300 uppercase tracking-wider mb-3">
              Saved Exercises
            </h4>
            <div className="space-y-2">
              {campaignBrief && (
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg border border-teal/20 bg-teal/5 dark:bg-teal/10 dark:border-teal/20">
                  <div className="w-8 h-8 rounded-lg bg-teal/20 dark:bg-teal/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-teal-dark dark:text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-heading font-semibold text-navy dark:text-white block">
                      Campaign Strategy Brief
                    </span>
                    <span className="text-xs text-n500 dark:text-n300">
                      {campaignBrief.campaignName || 'Campaign configured'}
                      {campaignBrief.launchMonth ? ` \u2022 ${campaignBrief.launchMonth}` : ''}
                    </span>
                  </div>
                  <svg className="w-4 h-4 text-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}

              {mvpCheckedIds && mvpCheckedIds.length > 0 && (
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg border border-teal/20 bg-teal/5 dark:bg-teal/10 dark:border-teal/20">
                  <div className="w-8 h-8 rounded-lg bg-teal/20 dark:bg-teal/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-teal-dark dark:text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-heading font-semibold text-navy dark:text-white block">
                      MVP Deployment Checklist
                    </span>
                    <span className="text-xs text-n500 dark:text-n300">
                      {mvpCheckedIds.length} of {MVP_CHECKLIST_ITEMS.length} items checked
                    </span>
                  </div>
                  <svg className="w-4 h-4 text-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}

              {capstone && (
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg border border-teal/20 bg-teal/5 dark:bg-teal/10 dark:border-teal/20">
                  <div className="w-8 h-8 rounded-lg bg-teal/20 dark:bg-teal/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-teal-dark dark:text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-heading font-semibold text-navy dark:text-white block">
                      Capstone Deployment Plan
                    </span>
                    <span className="text-xs text-n500 dark:text-n300">
                      {capstone.brandName || 'Plan configured'}
                      {capstone.campaignName ? ` \u2022 ${capstone.campaignName}` : ''}
                    </span>
                  </div>
                  <svg className="w-4 h-4 text-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── Download Button ──────────────────────────── */}
        <div className="pt-4 border-t border-n100 dark:border-navy-light">
          <button
            onClick={generatePDF}
            disabled={generating}
            className="w-full sm:w-auto px-6 py-3 bg-navy dark:bg-teal text-white dark:text-navy text-sm font-heading font-semibold rounded-lg hover:bg-navy-light dark:hover:bg-teal-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {generating ? (
              <>
                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Generating PDF...
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Portfolio PDF
              </>
            )}
          </button>
          <p className="text-xs text-n500 dark:text-n300 mt-2">
            Exports a branded multi-page PDF with your progress, scores, and exercise outputs.
          </p>
        </div>
      </div>
    </div>
  );
}

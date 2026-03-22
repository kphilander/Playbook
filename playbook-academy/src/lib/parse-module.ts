/**
 * parse-module.ts
 * Parses rendered module HTML into structured sections for the LMS.
 *
 * The curriculum markdown follows a consistent structure:
 *   ## Section N: Title        → lesson sections
 *   ### Reading                → lesson content
 *   ### Narrator Script        → audio transcript (blockquotes)
 *   ### Exercise: Name         → interactive exercise
 *   ## Module Test             → quiz section
 *   ## Key Takeaways           → summary
 *   ## Recall Check            → spaced repetition (optional)
 *   ## References              → link table
 */

export interface QuizQuestion {
  index: number;
  assesses: string;
  stem: string;
  options: { letter: string; text: string }[];
  correct: string;
  explanation: string;
  source: string;
}

export interface ExerciseItem {
  content: string;
  correctAnswer: string;
  feedbackCorrect: string;
  feedbackIncorrect: string;
}

export interface Exercise {
  name: string;
  type: string;
  instructions: string;
  items: ExerciseItem[];
}

export interface LessonSection {
  index: number;
  slug: string;
  title: string;
  readingHtml: string;
  narratorScript: string;
  exercise: Exercise | null;
  hasExercise: boolean;
}

export interface ParsedModule {
  sections: LessonSection[];
  recallCheck: string | null;
  quiz: QuizQuestion[];
  keyTakeaways: string;
  references: string;
  learningObjectives: string;
}

/**
 * Parse rendered module HTML into structured sections.
 * Works on the HTML output from Astro's markdown renderer.
 */
export function parseModuleHtml(html: string): ParsedModule {
  const sections: LessonSection[] = [];
  let recallCheck: string | null = null;
  const quiz: QuizQuestion[] = [];
  let keyTakeaways = '';
  let references = '';
  let learningObjectives = '';

  // Split by h2 headings to find major sections
  // The HTML will have <h2>Section N: Title</h2> patterns
  const h2Pattern = /<h2[^>]*>(.*?)<\/h2>/gi;
  const h2Matches = [...html.matchAll(h2Pattern)];

  // Build section boundaries
  const sectionBoundaries: { title: string; startIndex: number; endIndex: number }[] = [];
  for (let i = 0; i < h2Matches.length; i++) {
    const match = h2Matches[i];
    const startIndex = match.index!;
    const endIndex = i + 1 < h2Matches.length ? h2Matches[i + 1].index! : html.length;
    sectionBoundaries.push({
      title: stripHtml(match[1]),
      startIndex,
      endIndex,
    });
  }

  let sectionIndex = 0;

  for (const boundary of sectionBoundaries) {
    const sectionHtml = html.slice(boundary.startIndex, boundary.endIndex);
    const title = boundary.title;

    if (title.match(/^Section \d+/i)) {
      // This is a lesson section
      const slug = slugify(title.replace(/^Section \d+:\s*/i, ''));
      const readingHtml = extractSubsection(sectionHtml, 'Reading');
      const narratorScript = extractNarratorScript(sectionHtml);
      const exercise = extractExercise(sectionHtml);

      sections.push({
        index: sectionIndex++,
        slug,
        title: title.replace(/^Section \d+:\s*/i, ''),
        readingHtml: readingHtml || sectionHtml,
        narratorScript,
        exercise,
        hasExercise: exercise !== null,
      });
    } else if (title.match(/Recall Check/i)) {
      recallCheck = sectionHtml;
    } else if (title.match(/Module Test/i)) {
      // Parse quiz questions
      const questions = extractQuizQuestions(sectionHtml);
      quiz.push(...questions);
    } else if (title.match(/Key Takeaway/i)) {
      keyTakeaways = sectionHtml;
    } else if (title.match(/References/i)) {
      references = sectionHtml;
    } else if (title.match(/Learning [Oo]bjectives/i)) {
      learningObjectives = sectionHtml;
    } else if (title.match(/Quick.scan/i)) {
      // Skip the quick-scan index — it's for the markdown reader, not the LMS
    } else if (title.match(/When You Don.t Know/i) || title.match(/When to Escalate/i)) {
      // These are also lesson sections (not prefixed with "Section N:")
      const slug = slugify(title);
      const readingHtml = extractSubsection(sectionHtml, 'Reading') || sectionHtml;
      const narratorScript = extractNarratorScript(sectionHtml);
      const exercise = extractExercise(sectionHtml);

      sections.push({
        index: sectionIndex++,
        slug,
        title,
        readingHtml,
        narratorScript,
        exercise,
        hasExercise: exercise !== null,
      });
    }
  }

  return { sections, recallCheck, quiz, keyTakeaways, references, learningObjectives };
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function extractSubsection(html: string, heading: string): string | null {
  const pattern = new RegExp(
    `<h3[^>]*>\\s*${heading}\\s*<\\/h3>([\\s\\S]*?)(?=<h3|<h2|$)`,
    'i'
  );
  const match = html.match(pattern);
  return match ? match[1].trim() : null;
}

function extractNarratorScript(html: string): string {
  // Narrator scripts are in blockquotes starting with <strong>Narrator:</strong>
  const pattern = /<blockquote>[\s\S]*?<strong>Narrator:<\/strong>([\s\S]*?)<\/blockquote>/gi;
  const matches = [...html.matchAll(pattern)];
  return matches.map(m => stripHtml(m[1])).join(' ');
}

function extractExercise(html: string): Exercise | null {
  const exerciseH3 = html.match(/<h3[^>]*>Exercise:\s*(.*?)<\/h3>/i);
  if (!exerciseH3) return null;

  const name = stripHtml(exerciseH3[1]);

  // Find the exercise type
  const typeMatch = html.match(/<strong>Type:<\/strong>\s*(.*?)(?:<\/p>|<br|$)/i);
  const type = typeMatch ? stripHtml(typeMatch[1]) : 'scenario';

  // Find instructions
  const instructionsMatch = html.match(/<strong>Instructions:<\/strong>\s*(.*?)(?:<\/p>|<br|$)/i);
  const instructions = instructionsMatch ? stripHtml(instructionsMatch[1]) : '';

  // Extract table rows for exercise items
  const items = extractTableItems(html, exerciseH3.index!);

  return { name, type, instructions, items };
}

function extractTableItems(html: string, startFrom: number): ExerciseItem[] {
  const items: ExerciseItem[] = [];
  const tableSection = html.slice(startFrom);

  // Find first table after the exercise heading
  const tableMatch = tableSection.match(/<table>([\s\S]*?)<\/table>/i);
  if (!tableMatch) return items;

  const rows = [...tableMatch[1].matchAll(/<tr>([\s\S]*?)<\/tr>/gi)];
  // Skip header row
  for (let i = 1; i < rows.length; i++) {
    const cells = [...rows[i][1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)];
    if (cells.length >= 4) {
      items.push({
        content: stripHtml(cells[0][1]),
        correctAnswer: stripHtml(cells[1][1]),
        feedbackCorrect: stripHtml(cells[2][1]),
        feedbackIncorrect: stripHtml(cells[3][1]),
      });
    }
  }
  return items;
}

function extractQuizQuestions(html: string): QuizQuestion[] {
  const questions: QuizQuestion[] = [];

  // Split by Question N headings
  const questionPattern = /<h3[^>]*>Question (\d+)<\/h3>([\s\S]*?)(?=<h3[^>]*>Question \d+|<h2|<hr|$)/gi;
  const matches = [...html.matchAll(questionPattern)];

  for (const match of matches) {
    const qHtml = match[2];
    const index = parseInt(match[1]);

    const assessesMatch = qHtml.match(/<strong>Assesses:<\/strong>\s*(.*?)(?:<\/p>|<br|$)/i);
    const stemMatch = qHtml.match(/<strong>Stem:<\/strong>\s*(.*?)(?:<\/p>|<br|$)/i);
    const correctMatch = qHtml.match(/<strong>Correct:<\/strong>\s*(.*?)(?:<\/p>|<br|$)/i);
    const explanationMatch = qHtml.match(/<strong>Explanation:<\/strong>\s*([\s\S]*?)(?=<p><strong>Source|<h3|$)/i);
    const sourceMatch = qHtml.match(/<strong>Source:<\/strong>\s*([\s\S]*?)(?=<\/p>|<h3|$)/i);

    // Extract options from table
    const options: { letter: string; text: string }[] = [];
    const tableMatch = qHtml.match(/<table>([\s\S]*?)<\/table>/i);
    if (tableMatch) {
      const rows = [...tableMatch[1].matchAll(/<tr>([\s\S]*?)<\/tr>/gi)];
      for (let i = 1; i < rows.length; i++) {
        const cells = [...rows[i][1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)];
        if (cells.length >= 2) {
          options.push({
            letter: stripHtml(cells[0][1]),
            text: stripHtml(cells[1][1]),
          });
        }
      }
    }

    questions.push({
      index,
      assesses: assessesMatch ? stripHtml(assessesMatch[1]) : '',
      stem: stemMatch ? stripHtml(stemMatch[1]) : '',
      options,
      correct: correctMatch ? stripHtml(correctMatch[1]) : '',
      explanation: explanationMatch ? stripHtml(explanationMatch[1]) : '',
      source: sourceMatch ? sourceMatch[1].trim() : '',
    });
  }

  return questions;
}

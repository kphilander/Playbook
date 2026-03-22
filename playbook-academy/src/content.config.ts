import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const academy = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/academy' }),
  schema: z.object({
    content_type: z.enum(['training-module', 'training-program']),
    title: z.string(),
    program_id: z.string(),
    module_number: z.number().optional(),
    pillar: z.array(z.string()).optional(),
    tier: z.union([z.number(), z.array(z.number())]).optional(),
    tone: z.array(z.string()).optional(),
    reading_level: z.string().optional(),
    audience_role: z.array(z.string()).optional(),
    duration_minutes: z.number().optional(),
    prerequisites: z.union([
      z.array(z.string()),
      z.array(z.object({ program_id: z.string(), type: z.string() })),
    ]).optional(),
    learning_objectives: z.array(z.string()).optional(),
    exercises: z.array(z.string()).optional(),
    test_questions: z.number().optional(),
    passing_score: z.number().nullable().optional(),
    total_modules: z.number().optional(),
    total_duration_minutes: z.number().optional(),
    certification_name: z.string().nullable().optional(),
    recertification_months: z.number().nullable().optional(),
    cultural_profile: z.object({
      voice: z.string(), framing: z.string(), humor: z.string(),
      directness: z.string(), comfort: z.string(),
    }).optional(),
    adaptation_status: z.string().optional(),
    adaptation_notes: z.string().optional(),
    last_updated: z.string().optional(),
  }),
});

export const collections = { academy };

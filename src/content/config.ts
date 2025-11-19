import { defineCollection, z } from 'astro:content';

// Projects collection
const projects = defineCollection({
  type: "content",
  schema: z.object({
    // Basic info
    title: z.string(), // ex : "GOOD - GO-OnDemand"
    description: z.string(), // ex: "A mobile app for resort management"
    bannerImage: z.string().optional().default("https://placehold.co/600x400"),
    isFeatured: z.boolean().default(false),

    // Dates
    startDate: z.date(),
    endDate: z.date().optional(),

    // Media
    imageGallery: z.array(z.string()).optional(),

    // Lists
    technologies: z.array(z.string()).default([]), // ex: ["Xamarin", "Azure", "CosmosDB"]
    tags: z.array(z.string()).default([]), // ex: ["mobile", "enterprise", "xamarin"]

    // Links
    githubUrl: z.string().optional(),
    liveUrl: z.string().optional(),
    youtubeUrls: z.array(z.string()).optional(),
    learnMoreUrl: z.string().optional(),
    appleStoreUrl: z.string().optional(),
    googleStoreUrl: z.string().optional(),

    // Related
    relatedJob: z.string().optional(),
    relatedHackathon: z.string().optional(),
  }),
});

// Hackathons collection
const hackathons = defineCollection({
  type: "content",
  schema: z.object({
    // Basic info
    title: z.string(),
    company: z.string().optional(), // Hosting company/organization
    description: z.string(),
    featured: z.boolean().default(false),
    location: z.string(),
    teamSize: z.string().optional(), // e.g., "4 (Team lead role)", "3 (Development team)", "N/A (Coach role)"
    result: z.string().optional(), // e.g., "1st Place", "Best Innovation Award"

    // Dates
    date: z.date(),
    duration: z.string(), // e.g., "48 hours", "3 days"

    // Media
    image: z.string().optional().default("https://placehold.co/600x400"),
    gallery: z.array(z.string()).optional(),

    // Lists
    technologies: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),

    // Links
    githubUrl: z.string().optional(),
    liveUrl: z.string().optional(),
    devpostUrl: z.string().optional(),

    // Related
    relatedProject: z.string().optional(),
  }),
});

// Professional experiences collection
const jobs = defineCollection({
  type: "content",
  schema: z.object({
    // Basic info
    position: z.string(),
    company: z.string(),
    location: z.string(),
    description: z.string(),
    current: z.boolean().default(false),
    featured: z.boolean().default(false),

    // Dates
    startDate: z.date(),
    endDate: z.date().optional(),

    // Media
    logo: z.string().optional().default("https://placehold.co/100x100"),
    gallery: z.array(z.string()).optional(),

    // Lists
    achievements: z.array(z.string()).default([]),
    technologies: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),

    // Related
    relatedProjects: z.array(z.string()).default([]), // References to project slugs
  }),
});

// Education collection (institutions/programs attended)
const education = defineCollection({
  type: "content",
  schema: z.object({
    // Basic info
    institution: z.string(),
    program: z.string(), // e.g., "IT Engineering Program", "Xamarin University Program"
    location: z.string(),
    description: z.string().optional(),
    featured: z.boolean().default(false),

    // Dates
    startDate: z.date(),
    endDate: z.date(),

    // Media
    logo: z.string().optional().default("https://placehold.co/100x100"),
    gallery: z.array(z.string()).optional(),

    // Lists
    achievements: z.array(z.string()).default([]),
    technologies: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),

    // Related
    relatedDiplomas: z.array(z.string()).default([]) // References to diploma slugs
  }),
});

// Diplomas collection (specific credentials earned)
const diplomas = defineCollection({
  type: "content",
  schema: z.object({
    // Basic info
    institution: z.string(),
    degree: z.string(),
    field: z.string(),
    location: z.string(),
    comments: z.array(z.string()).default([]), // Renamed from honors
    courses: z.array(z.string()).default([]),
    description: z.string().optional(),
    score: z.string().optional(), // For certifications like TOEIC
    level: z.string().optional(), // For language certifications
    recertification: z.string().optional(), // For Xamarin recertification
    featured: z.boolean().default(false),

    // Dates
    date: z.date(), // Only end date

    // Media
    logo: z.string().optional().default("https://placehold.co/100x100"),
    gallery: z.array(z.string()).optional()
  }),
});

// Skills collection (for resume)
const skills = defineCollection({
  type: 'data',
  schema: z.array(z.object({
    category: z.string(),
    name: z.string(),
    level: z.enum(['learning', 'beginner', 'intermediate', 'advanced', 'expert'])
  })),
});

export const collections = {
  projects,
  hackathons,
  jobs,
  education, // Back to education
  diplomas,
  skills,
};

export type BlogArticle = {
  category: string
  date: string
  readTime: string
  title: string
  excerpt: string
  slug: string
  content: string[]
}

export const ARTICLES: BlogArticle[] = [
  {
    category: 'Student Visa',
    date: 'December 15, 2024',
    readTime: '5 min read',
    title: 'UK Student Visa 2025: Complete Guide for Indian Students',
    excerpt:
      'Everything you need to know about the UK Student Visa process — from CAS letters to financial requirements, interview tips, and common mistakes to avoid.',
    slug: 'uk-student-visa-2025',
    content: [
      'Planning a UK student visa for 2025? Start by understanding the latest eligibility expectations and the documents typically required for a strong application.',
      'Your CAS letter, financial evidence, and academic history should align clearly. We recommend preparing these items early and reviewing them for consistency before submission.',
      'In this guide, we walk you through a practical checklist, timelines to expect, and the most common mistakes applicants make — so you can avoid unnecessary delays.',
      'If you want help, NovaBridge can assess your profile and provide a document plan tailored to your university and course selection.',
    ],
  },
  {
    category: 'Immigration',
    date: 'December 10, 2024',
    readTime: '7 min read',
    title: 'Canada Express Entry: How to Maximise Your CRS Score',
    excerpt:
      'A practical breakdown of the Comprehensive Ranking System and proven strategies to boost your Express Entry score for faster ITA processing.',
    slug: 'canada-express-entry-crs-score',
    content: [
      'Express Entry uses the CRS (Comprehensive Ranking System) to rank candidates for invitations to apply.',
      'The strongest CRS improvements usually come from targeted factors such as language proficiency, education credential strength, and work experience.',
      'In this article, we explain how to think about CRS components and where you can realistically improve your score for a better chance of receiving an ITA.',
      'If you share your profile details, our team can help you understand your score drivers and propose next-step actions.',
    ],
  },
  {
    category: 'Business Visa',
    date: 'December 5, 2024',
    readTime: '4 min read',
    title: 'Australia Business Innovation Visa: What Has Changed in 2025',
    excerpt:
      'Recent updates to Australia\'s business visa programme — new eligibility criteria, processing timelines, and what it means for entrepreneurs.',
    slug: 'australia-business-visa-2025',
    content: [
      'Australia\'s business visa landscape evolves periodically. Before applying, it\'s essential to confirm that your business profile matches the current expectations.',
      'We break down practical implications for eligibility, document preparation, and how to present your case clearly.',
      'This guide also covers processing timelines and common pitfalls that entrepreneurs face when applying with limited documentation clarity.',
      'NovaBridge can help you map your evidence to the visa requirements and create a submission plan.',
    ],
  },
  {
    category: 'Tourist Visa',
    date: 'November 28, 2024',
    readTime: '4 min read',
    title: 'Schengen Visa from India: Tips for First-Time Applicants',
    excerpt:
      'Navigate the Schengen visa application with confidence. Common pitfalls, document preparation checklist, and interview preparation tips.',
    slug: 'schengen-visa-india-tips',
    content: [
      'First-time Schengen applicants often struggle with documentation alignment and clarity around itinerary plans and financial proofs.',
      'In this article, we provide a practical checklist and show how to structure your supporting documents to reduce avoidable issues.',
      'We also cover interview preparation tips, including how to communicate your travel purpose consistently.',
      'If you want an expert review, our counsellors can help you validate your application package before submission.',
    ],
  },
  {
    category: 'Documentation',
    date: 'November 20, 2024',
    readTime: '6 min read',
    title: 'Document Attestation & Apostille: A Complete Guide',
    excerpt:
      'Understanding when and how to get your documents attested or apostilled. Country-specific requirements and the step-by-step process.',
    slug: 'document-attestation-apostille-guide',
    content: [
      'Attestation and apostille are legalisation processes used to verify documents for international use.',
      'Requirements vary by destination country, document type, and purpose (education, employment, immigration, etc.).',
      'In this guide, we explain the step-by-step process, when you should start, and how to avoid delays caused by incomplete or incorrect submissions.',
      'NovaBridge can help you identify the right route for your documents and keep the timeline under control.',
    ],
  },
  {
    category: 'Immigration',
    date: 'November 15, 2024',
    readTime: '5 min read',
    title: 'Germany Opportunity Card: New Pathway for Skilled Workers',
    excerpt:
      'Germany\'s new Points-Based Immigration Act opens doors for skilled professionals. Learn about the Chancenkarte and how to qualify.',
    slug: 'germany-opportunity-card-skilled-workers',
    content: [
      'Germany has introduced new mechanisms aimed at attracting skilled workers. The Opportunity Card model (Chancenkarte) is designed to evaluate candidates based on a points approach.',
      'Key factors often include qualification relevance, language capability, and evidence of employability.',
      'In this guide, we explain what the Opportunity Card is, who it may suit, and how to prepare a strong evidence set.',
      'Our team can evaluate your profile and outline a realistic path based on current expectations.',
    ],
  },
]

export const BLOG_CATEGORIES = [
  'All',
  'Student Visa',
  'Immigration',
  'Business Visa',
  'Tourist Visa',
  'Documentation',
]


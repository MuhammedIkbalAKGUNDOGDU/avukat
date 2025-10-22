import lawyer1 from "@assets/generated_images/Female_lawyer_portrait_1_117a6562.png";
import lawyer2 from "@assets/generated_images/Male_lawyer_portrait_1_a7ca9c68.png";
import lawyer3 from "@assets/generated_images/Female_lawyer_portrait_2_3fa74d81.png";
import lawyer4 from "@assets/generated_images/Male_lawyer_portrait_2_34bf8253.png";

export interface PracticeArea {
  id: number;
  slug: string;
  icon: string;
  titleKey: string;
  descriptionKey: string;
  fullDetailsKey: string;
}

export interface Lawyer {
  id: number;
  name: string;
  imageUrl: string;
  titleKey: string;
  bioKey: string;
  educationKey: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  titleKey: string;
  excerptKey: string;
  contentKey: string;
  categoryKey: string;
  tagsKey: string;
  author: string;
  authorId: string;
  publishedAt: string;
  readTime: string;
  image: string;
}

export const practiceAreas: PracticeArea[] = [
  {
    id: 1,
    slug: "corporate-law",
    icon: "Building2",
    titleKey: "practiceArea.corporate_law_title",
    descriptionKey: "practiceArea.corporate_law_desc",
    fullDetailsKey: "practiceArea.corporate_law_details",
  },
  {
    id: 2,
    slug: "family-law",
    icon: "Heart",
    titleKey: "practiceArea.family_law_title",
    descriptionKey: "practiceArea.family_law_desc",
    fullDetailsKey: "practiceArea.family_law_details",
  },
  {
    id: 3,
    slug: "criminal-defense",
    icon: "Scale",
    titleKey: "practiceArea.criminal_defense_title",
    descriptionKey: "practiceArea.criminal_defense_desc",
    fullDetailsKey: "practiceArea.criminal_defense_details",
  },
  {
    id: 4,
    slug: "real-estate",
    icon: "Home",
    titleKey: "practiceArea.real_estate_title",
    descriptionKey: "practiceArea.real_estate_desc",
    fullDetailsKey: "practiceArea.real_estate_details",
  },
  {
    id: 5,
    slug: "intellectual-property",
    icon: "Lightbulb",
    titleKey: "practiceArea.intellectual_property_title",
    descriptionKey: "practiceArea.intellectual_property_desc",
    fullDetailsKey: "practiceArea.intellectual_property_details",
  },
  {
    id: 6,
    slug: "employment-law",
    icon: "Briefcase",
    titleKey: "practiceArea.employment_law_title",
    descriptionKey: "practiceArea.employment_law_desc",
    fullDetailsKey: "practiceArea.employment_law_details",
  },
];

export const lawyers: Lawyer[] = [
  {
    id: 1,
    name: "Jane Doe",
    imageUrl: lawyer1,
    titleKey: "lawyer.jane_doe_title",
    bioKey: "lawyer.jane_doe_bio",
    educationKey: "lawyer.jane_doe_edu",
  },
  {
    id: 2,
    name: "John Smith",
    imageUrl: lawyer2,
    titleKey: "lawyer.john_smith_title",
    bioKey: "lawyer.john_smith_bio",
    educationKey: "lawyer.john_smith_edu",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    imageUrl: lawyer3,
    titleKey: "lawyer.sarah_johnson_title",
    bioKey: "lawyer.sarah_johnson_bio",
    educationKey: "lawyer.sarah_johnson_edu",
  },
  {
    id: 4,
    name: "Michael Chen",
    imageUrl: lawyer4,
    titleKey: "lawyer.michael_chen_title",
    bioKey: "lawyer.michael_chen_bio",
    educationKey: "lawyer.michael_chen_edu",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "corporate-law-updates-2025",
    slug: "corporate-law-updates-2025",
    titleKey: "blog.posts.corporate_law_updates.title",
    excerptKey: "blog.posts.corporate_law_updates.excerpt",
    contentKey: "blog.posts.corporate_law_updates.content",
    categoryKey: "blog.posts.corporate_law_updates.category",
    tagsKey: "blog.posts.corporate_law_updates.tags",
    author: "Jane Doe",
    authorId: "jane-doe",
    publishedAt: "2025-01-15",
    readTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=400&fit=crop",
  },
  {
    id: "family-law-divorce-guide",
    slug: "family-law-divorce-guide",
    titleKey: "blog.posts.family_law_guide.title",
    excerptKey: "blog.posts.family_law_guide.excerpt",
    contentKey: "blog.posts.family_law_guide.content",
    categoryKey: "blog.posts.family_law_guide.category",
    tagsKey: "blog.posts.family_law_guide.tags",
    author: "John Smith",
    authorId: "john-smith",
    publishedAt: "2025-01-10",
    readTime: "7 min",
    image:
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=400&fit=crop",
  },
  {
    id: "criminal-defense-rights",
    slug: "criminal-defense-rights",
    titleKey: "blog.posts.criminal_defense_rights.title",
    excerptKey: "blog.posts.criminal_defense_rights.excerpt",
    contentKey: "blog.posts.criminal_defense_rights.content",
    categoryKey: "blog.posts.criminal_defense_rights.category",
    tagsKey: "blog.posts.criminal_defense_rights.tags",
    author: "Sarah Johnson",
    authorId: "sarah-johnson",
    publishedAt: "2025-01-05",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=800&h=400&fit=crop",
  },
];

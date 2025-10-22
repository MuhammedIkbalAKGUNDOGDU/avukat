import lawyer1 from '@assets/generated_images/Female_lawyer_portrait_1_117a6562.png';
import lawyer2 from '@assets/generated_images/Male_lawyer_portrait_1_a7ca9c68.png';
import lawyer3 from '@assets/generated_images/Female_lawyer_portrait_2_3fa74d81.png';
import lawyer4 from '@assets/generated_images/Male_lawyer_portrait_2_34bf8253.png';

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

export const practiceAreas: PracticeArea[] = [
  {
    id: 1,
    slug: 'corporate-law',
    icon: 'Building2',
    titleKey: 'practiceArea.corporate_law_title',
    descriptionKey: 'practiceArea.corporate_law_desc',
    fullDetailsKey: 'practiceArea.corporate_law_details',
  },
  {
    id: 2,
    slug: 'family-law',
    icon: 'Heart',
    titleKey: 'practiceArea.family_law_title',
    descriptionKey: 'practiceArea.family_law_desc',
    fullDetailsKey: 'practiceArea.family_law_details',
  },
  {
    id: 3,
    slug: 'criminal-defense',
    icon: 'Scale',
    titleKey: 'practiceArea.criminal_defense_title',
    descriptionKey: 'practiceArea.criminal_defense_desc',
    fullDetailsKey: 'practiceArea.criminal_defense_details',
  },
  {
    id: 4,
    slug: 'real-estate',
    icon: 'Home',
    titleKey: 'practiceArea.real_estate_title',
    descriptionKey: 'practiceArea.real_estate_desc',
    fullDetailsKey: 'practiceArea.real_estate_details',
  },
  {
    id: 5,
    slug: 'intellectual-property',
    icon: 'Lightbulb',
    titleKey: 'practiceArea.intellectual_property_title',
    descriptionKey: 'practiceArea.intellectual_property_desc',
    fullDetailsKey: 'practiceArea.intellectual_property_details',
  },
  {
    id: 6,
    slug: 'employment-law',
    icon: 'Briefcase',
    titleKey: 'practiceArea.employment_law_title',
    descriptionKey: 'practiceArea.employment_law_desc',
    fullDetailsKey: 'practiceArea.employment_law_details',
  },
];

export const lawyers: Lawyer[] = [
  {
    id: 1,
    name: 'Jane Doe',
    imageUrl: lawyer1,
    titleKey: 'lawyer.jane_doe_title',
    bioKey: 'lawyer.jane_doe_bio',
    educationKey: 'lawyer.jane_doe_edu',
  },
  {
    id: 2,
    name: 'John Smith',
    imageUrl: lawyer2,
    titleKey: 'lawyer.john_smith_title',
    bioKey: 'lawyer.john_smith_bio',
    educationKey: 'lawyer.john_smith_edu',
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    imageUrl: lawyer3,
    titleKey: 'lawyer.sarah_johnson_title',
    bioKey: 'lawyer.sarah_johnson_bio',
    educationKey: 'lawyer.sarah_johnson_edu',
  },
  {
    id: 4,
    name: 'Michael Chen',
    imageUrl: lawyer4,
    titleKey: 'lawyer.michael_chen_title',
    bioKey: 'lawyer.michael_chen_bio',
    educationKey: 'lawyer.michael_chen_edu',
  },
];

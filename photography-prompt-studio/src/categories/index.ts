import { raceCategory } from './race';
import { skinColorCategory } from './skinColor';
import { bodyPartCategories } from './bodyParts';
import { clothingCategories } from './clothing';
import { emotionCategories } from './emotions';
import { interactionCategories } from './interactions';
import { environmentCategory } from './environments';
import { lightingCategory } from './lighting';
import { moodCategory } from './moods';
import { additionalDetailsCategory } from './additionalDetails';
import { Category } from '../types';

// Alle Kategorien zusammenfassen
export const allCategories: Category[] = [
  raceCategory,
  skinColorCategory,
  ...bodyPartCategories,
  ...clothingCategories,
  ...emotionCategories,
  ...interactionCategories,
  environmentCategory,
  lightingCategory,
  moodCategory,
  additionalDetailsCategory
];

// Export für Kompatibilität
export const getAllCategories = () => allCategories;

// Kategorien nach Sektion gruppiert
export const categoriesBySection = {
  person: allCategories.filter(cat => cat.section === 'person'),
  clothing: allCategories.filter(cat => cat.section === 'clothing'),
  emotion: allCategories.filter(cat => cat.section === 'emotion'),
  interaction: allCategories.filter(cat => cat.section === 'interaction'),
  environment: allCategories.filter(cat => cat.section === 'environment'),
  lighting: allCategories.filter(cat => cat.section === 'lighting'),
  mood: allCategories.filter(cat => cat.section === 'mood'),
  additional: allCategories.filter(cat => cat.section === 'additional'),
  accessories: allCategories.filter(cat => cat.section === 'accessories'),
  hair_makeup: allCategories.filter(cat => cat.section === 'hair_makeup'),
  poses: allCategories.filter(cat => cat.section === 'poses')
};

// Hilfsfunktionen
export const getCategoriesBySection = (section: string) => {
  return allCategories.filter(cat => cat.section === section);
};

export const getCategoryById = (id: string) => {
  return allCategories.find(cat => cat.id === id);
};

export const getVisibleCategories = (section: string, gender?: string) => {
  return allCategories.filter(cat => {
    if (cat.section !== section) return false;
    if (cat.genderSpecific && gender) {
      return cat.genderSpecific.includes(gender as any);
    }
    return true;
  });
};
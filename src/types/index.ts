import React from 'react';

export type PlatformType = 'sdxl' | 'pony' | 'illustrious' | 'sd15' | 'flux' | 'hi_dream' | 'midjourney' | 'dalle3';
export type RaceType = 'human' | 'elf' | 'dwarf' | 'orc' | 'halfling' | 'tiefling' | 'dragonborn' | 'fairy' | 'vampire' | 'werewolf' | 'centaur' | 'satyr' | 'nymph' | 'angel' | 'demon' | 'elemental' | 'shapeshifter' | 'nephilim' | 'demigod' | 'ghost' | 'banshee' | 'succubus' | 'incubus' | 'djinn';
export type GenderType = 'woman' | 'man' | 'non_binary';
export type CategorySection = 'person' | 'clothing' | 'emotion' | 'interaction' | 'environment' | 'lighting' | 'mood' | 'additional' | 'accessories' | 'hair_makeup' | 'poses';

export interface CategoryOption {
  id: string;
  label: string;
  value: string;
  description?: string;
  genderSpecific?: GenderType[];
}

export interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  section: CategorySection;
  subcategory?: string;
  options: CategoryOption[];
  genderSpecific?: GenderType[];
}

export interface PersonConfig {
  id: string;
  race: RaceType;
  gender: GenderType;
  selections: Record<string, string[]>;
  isEnabled: boolean;
  weight: number;
}

export interface GeneratedPrompts {
  positive: string;
  negative: string;
  metadata: {
    platform: PlatformType;
    personCount: number;
    totalOptions: number;
    estimatedLength: number;
    tokenEstimate: number;
    generatedAt: number;
  };
}

export interface Preset {
  id: string;
  name: string;
  selections: Record<string, string[]>;
  timestamp: number;
}

// Constants
export const PLATFORMS = {
  sdxl: { name: 'SDXL', description: 'Stable Diffusion XL' },
  pony: { name: 'Pony', description: 'Pony Diffusion' },
  illustrious: { name: 'Illustrious', description: 'Illustrious XL' },
  sd15: { name: 'SD 1.5', description: 'Stable Diffusion 1.5' },
  flux: { name: 'Flux', description: 'Flux.1 Dev/Schnell' },
  hi_dream: { name: 'Hi-Dream', description: 'Hi-Dream' },
  midjourney: { name: 'Midjourney', description: 'Midjourney v6' },
  dalle3: { name: 'DALL-E 3', description: 'OpenAI DALL-E 3' }
};

export const RACES: Array<{id: RaceType, label: string}> = [
  { id: 'human', label: 'Mensch' },
  { id: 'elf', label: 'Elf' },
  { id: 'dwarf', label: 'Zwerg' },
  { id: 'orc', label: 'Ork' },
  { id: 'halfling', label: 'Halbling' },
  { id: 'tiefling', label: 'Tiefling' },
  { id: 'dragonborn', label: 'Drachenblut' },
  { id: 'fairy', label: 'Fee' },
  { id: 'vampire', label: 'Vampir' },
  { id: 'werewolf', label: 'Werwolf' },
  { id: 'centaur', label: 'Zentaur' },
  { id: 'satyr', label: 'Satyr' },
  { id: 'nymph', label: 'Nymphe' },
  { id: 'angel', label: 'Engel' },
  { id: 'demon', label: 'Dämon' },
  { id: 'elemental', label: 'Elementar' },
  { id: 'shapeshifter', label: 'Gestaltwandler' },
  { id: 'nephilim', label: 'Nephilim' },
  { id: 'demigod', label: 'Halbgott' },
  { id: 'ghost', label: 'Geist' },
  { id: 'banshee', label: 'Banshee' },
  { id: 'succubus', label: 'Succubus' },
  { id: 'incubus', label: 'Incubus' },
  { id: 'djinn', label: 'Dschinn' }
];

export const GENDERS: Array<{id: GenderType, label: string}> = [
  { id: 'woman', label: 'Frau' },
  { id: 'man', label: 'Mann' },
  { id: 'non_binary', label: 'Divers' }
];

export const SECTIONS: Array<{id: CategorySection, name: string, icon: React.ReactNode}> = [
  { id: 'person', name: 'Person', icon: null },
  { id: 'clothing', name: 'Kleidung', icon: null },
  { id: 'emotion', name: 'Emotion', icon: null },
  { id: 'interaction', name: 'Interaktion', icon: null },
  { id: 'environment', name: 'Umgebung', icon: null },
  { id: 'lighting', name: 'Beleuchtung', icon: null },
  { id: 'mood', name: 'Stimmung', icon: null },
  { id: 'additional', name: 'Details', icon: null },
  { id: 'accessories', name: 'Accessoires', icon: null },
  { id: 'hair_makeup', name: 'Haare & Makeup', icon: null },
  { id: 'poses', name: 'Posen', icon: null }
];
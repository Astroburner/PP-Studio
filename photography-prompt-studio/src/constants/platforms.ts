import { PlatformType } from '../types';

export interface PlatformConfig {
  id: PlatformType;
  name: string;
  description: string;
  positivePrefix: string;
  positiveSuffix: string;
  supportsNegativePrompts: boolean;
  maxPromptLength?: number;
  specialFeatures?: string[];
}

export const platformConfigs: Record<PlatformType, PlatformConfig> = {
  sdxl: {
    id: 'sdxl',
    name: 'SDXL',
    description: 'Stable Diffusion XL - Hochqualitative Bilder',
    positivePrefix: '',
    positiveSuffix: ', masterpiece, best quality, ultra detailed, 8k resolution, professional photography',
    supportsNegativePrompts: true,
    maxPromptLength: 2000,
    specialFeatures: ['High Resolution', 'Detailed Textures', 'Professional Quality']
  },
  pony: {
    id: 'pony',
    name: 'Pony Diffusion',
    description: 'Spezialisiert auf Anime/Manga Stil',
    positivePrefix: '',
    positiveSuffix: ', score_9, score_8_up, score_7_up, detailed, realistic, photographic',
    supportsNegativePrompts: true,
    maxPromptLength: 1500,
    specialFeatures: ['Anime Style', 'Character Focus', 'Score System']
  },
  illustrious: {
    id: 'illustrious',
    name: 'Illustrious',
    description: 'Ausgewogene Qualität für verschiedene Stile',
    positivePrefix: '',
    positiveSuffix: ', masterpiece, best quality, very aesthetic, absurdres, ultra detailed',
    supportsNegativePrompts: true,
    maxPromptLength: 1800,
    specialFeatures: ['Versatile Styles', 'High Aesthetic', 'Balanced Output']
  },
  sd15: {
    id: 'sd15',
    name: 'Stable Diffusion 1.5',
    description: 'Klassisches SD 1.5 Modell',
    positivePrefix: '',
    positiveSuffix: ', highly detailed, professional photograph, 8k, award winning photography',
    supportsNegativePrompts: true,
    maxPromptLength: 1200,
    specialFeatures: ['Classic Model', 'Stable Results', 'Wide Compatibility']
  },
  flux: {
    id: 'flux',
    name: 'Flux',
    description: 'Moderne Flux-basierte Generierung',
    positivePrefix: '',
    positiveSuffix: ', high quality, detailed, realistic, professional photography',
    supportsNegativePrompts: true,
    maxPromptLength: 2500,
    specialFeatures: ['Modern Architecture', 'Fast Generation', 'High Quality']
  },
  hi_dream: {
    id: 'hi_dream',
    name: 'Hi-Dream',
    description: 'Hochauflösende Traum-ähnliche Bilder',
    positivePrefix: '',
    positiveSuffix: ', ultra high quality, masterpiece, detailed, photorealistic',
    supportsNegativePrompts: true,
    maxPromptLength: 2000,
    specialFeatures: ['Dream-like Quality', 'High Resolution', 'Artistic Style']
  },
  midjourney: {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'Midjourney AI Kunstgenerierung',
    positivePrefix: '',
    positiveSuffix: ' --style photographic --quality 2',
    supportsNegativePrompts: false,
    maxPromptLength: 1000,
    specialFeatures: ['Artistic Style', 'No Negative Prompts', 'Parameter System']
  },
  dalle3: {
    id: 'dalle3',
    name: 'DALL-E 3',
    description: 'OpenAI DALL-E 3',
    positivePrefix: 'A professional photograph of ',
    positiveSuffix: ', highly detailed, photorealistic, professional photography',
    supportsNegativePrompts: false,
    maxPromptLength: 1000,
    specialFeatures: ['Natural Language', 'No Negative Prompts', 'Context Understanding']
  }
};

export const getPlatformConfig = (platform: PlatformType): PlatformConfig => {
  return platformConfigs[platform];
};

export const getSupportedPlatforms = (): PlatformType[] => {
  return Object.keys(platformConfigs) as PlatformType[];
};

export const getPlatformsWithNegativePrompts = (): PlatformType[] => {
  return getSupportedPlatforms().filter(platform => 
    platformConfigs[platform].supportsNegativePrompts
  );
};